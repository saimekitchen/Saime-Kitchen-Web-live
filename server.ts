import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const REGISTRY_FILE = path.resolve(__dirname, 'src/data/hardcodedImages.ts');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

// Helper to read existing hardcoded images
function loadHardcodedRegistry(): { food: Record<string, string>; cocktails: Record<string, string> } {
  try {
    if (fs.existsSync(REGISTRY_FILE)) {
      const content = fs.readFileSync(REGISTRY_FILE, 'utf-8');
      const match = content.match(/export const HARDCODED_IMAGES:\s*HardcodedImageRegistry\s*=\s*(\{[\s\S]*?\});/);
      if (match && match[1]) {
        return JSON.parse(match[1]);
      }
    }
  } catch (err) {
    console.error('Error reading hardcoded images registry:', err);
  }
  return { food: {}, cocktails: {} };
}

// Helper to persist hardcoded images registry to src/data/hardcodedImages.ts
function saveHardcodedRegistry(registry: { food: Record<string, string>; cocktails: Record<string, string> }) {
  const content = `// Hardcoded images for live deployment
// Auto-synced and permanently written into the project source code
export interface HardcodedImageRegistry {
  food: Record<string, string>;
  cocktails: Record<string, string>;
}

export const HARDCODED_IMAGES: HardcodedImageRegistry = ${JSON.stringify(registry, null, 2)};
`;
  fs.writeFileSync(REGISTRY_FILE, content, 'utf-8');
}

// Helper to save base64 dataUrl to file on disk
function saveBase64ToFile(type: 'food' | 'cocktail', id: string, dataUrl: string): string {
  const folder = type === 'cocktail' ? 'cocktails' : 'food';
  const targetDir = path.resolve(PUBLIC_DIR, 'images', folder);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Check if it's a data URL
  const match = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
  if (match) {
    const rawExt = match[1].toLowerCase();
    let ext = '.jpg';
    if (rawExt.includes('png')) ext = '.png';
    else if (rawExt.includes('webp')) ext = '.webp';
    else if (rawExt.includes('jpeg') || rawExt.includes('jpg')) ext = '.jpg';

    const base64Data = match[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const safeId = id.replace(/[^a-zA-Z0-9-_]/g, '_');
    const fileName = `${safeId}${ext}`;
    const filePath = path.resolve(targetDir, fileName);

    fs.writeFileSync(filePath, buffer);
    return `/images/${folder}/${fileName}`;
  }

  // If already a valid URL or path
  return dataUrl;
}

async function startServer() {
  const app = express();

  // Allow larger payload for base64 images
  app.use(express.json({ limit: '60mb' }));
  app.use(express.urlencoded({ limit: '60mb', extended: true }));

  // Serve static public assets directly
  app.use(express.static(PUBLIC_DIR));

  // -------------------------------------------------------------
  // API: Get hardcoded images
  // -------------------------------------------------------------
  app.get('/api/hardcoded-images', (_req, res) => {
    const registry = loadHardcodedRegistry();
    res.json({ success: true, images: registry });
  });

  // -------------------------------------------------------------
  // API: Save single image into source code
  // -------------------------------------------------------------
  app.post('/api/save-image', (req, res) => {
    try {
      const { type, id, dataUrl } = req.body;
      if (!type || !id || !dataUrl) {
        return res.status(400).json({ success: false, error: 'Missing type, id, or dataUrl' });
      }

      const category = type === 'cocktail' ? 'cocktails' : 'food';
      const fileUrl = saveBase64ToFile(type, id, dataUrl);

      const registry = loadHardcodedRegistry();
      registry[category][id] = fileUrl;
      saveHardcodedRegistry(registry);

      console.log(`[SourceSync] Hardcoded ${type} image for "${id}" -> ${fileUrl}`);
      res.json({ success: true, url: fileUrl, images: registry });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to save image';
      console.error('[SourceSync] Error saving image:', err);
      res.status(500).json({ success: false, error: message });
    }
  });

  // -------------------------------------------------------------
  // API: Sync all uploaded images into source code (Bulk)
  // -------------------------------------------------------------
  app.post('/api/sync-all-images', (req, res) => {
    try {
      const { foodImages = {}, cocktailImages = {} } = req.body;
      const registry = loadHardcodedRegistry();
      let savedCount = 0;

      // Process Food Images
      for (const [id, dataUrl] of Object.entries(foodImages)) {
        if (typeof dataUrl === 'string' && dataUrl.length > 0) {
          const fileUrl = saveBase64ToFile('food', id, dataUrl);
          registry.food[id] = fileUrl;
          savedCount++;
        }
      }

      // Process Cocktail Images
      for (const [id, dataUrl] of Object.entries(cocktailImages)) {
        if (typeof dataUrl === 'string' && dataUrl.length > 0) {
          const fileUrl = saveBase64ToFile('cocktail', id, dataUrl);
          registry.cocktails[id] = fileUrl;
          savedCount++;
        }
      }

      saveHardcodedRegistry(registry);
      console.log(`[SourceSync] Bulk synced ${savedCount} images into source code.`);
      res.json({ success: true, count: savedCount, images: registry });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to sync images';
      console.error('[SourceSync] Error bulk syncing images:', err);
      res.status(500).json({ success: false, error: message });
    }
  });

  // -------------------------------------------------------------
  // API: Remove an image from hardcoded registry
  // -------------------------------------------------------------
  app.post('/api/remove-image', (req, res) => {
    try {
      const { type, id } = req.body;
      if (!type || !id) {
        return res.status(400).json({ success: false, error: 'Missing type or id' });
      }

      const category = type === 'cocktail' ? 'cocktails' : 'food';
      const registry = loadHardcodedRegistry();
      if (registry[category][id]) {
        delete registry[category][id];
        saveHardcodedRegistry(registry);
      }
      res.json({ success: true, images: registry });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to remove image';
      res.status(500).json({ success: false, error: message });
    }
  });

  // -------------------------------------------------------------
  // Vite Integration (Dev) vs Static Dist (Prod)
  // -------------------------------------------------------------
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`> Saime application running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
