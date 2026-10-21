// Utility for storage and hardcoding of user-uploaded food and cocktail images
import { HARDCODED_IMAGES } from '../data/hardcodedImages';

const FOOD_STORAGE_KEY = 'saime_custom_food_images';
const FOOD_UPDATE_EVENT = 'saime_food_images_updated';

const COCKTAIL_STORAGE_KEY = 'saime_custom_cocktail_images';
const COCKTAIL_UPDATE_EVENT = 'saime_cocktail_images_updated';

// ---------------- FOOD IMAGES ----------------
export function getAllCustomFoodImages(): Record<string, string> {
  const merged: Record<string, string> = { ...HARDCODED_IMAGES.food };
  try {
    const raw = localStorage.getItem(FOOD_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(merged, parsed);
    }
  } catch (err) {
    console.error('Failed to read custom food images from storage:', err);
  }
  return merged;
}

export function getCustomFoodImage(foodId: string): string | null {
  const images = getAllCustomFoodImages();
  return images[foodId] || null;
}

export function saveCustomFoodImage(foodId: string, dataUrl: string): void {
  try {
    const images = getAllCustomFoodImages();
    images[foodId] = dataUrl;
    localStorage.setItem(FOOD_STORAGE_KEY, JSON.stringify(images));
    window.dispatchEvent(new CustomEvent(FOOD_UPDATE_EVENT, { detail: { foodId, dataUrl } }));

    // Auto-persist directly into project source code
    persistImageToServer('food', foodId, dataUrl).catch(() => {});
  } catch (err) {
    console.error('Failed to save image to localStorage:', err);
    throw err;
  }
}

export function removeCustomFoodImage(foodId: string): void {
  try {
    const images = getAllCustomFoodImages();
    if (images[foodId]) {
      delete images[foodId];
      localStorage.setItem(FOOD_STORAGE_KEY, JSON.stringify(images));
      window.dispatchEvent(new CustomEvent(FOOD_UPDATE_EVENT, { detail: { foodId, dataUrl: null } }));
      removeImageFromServer('food', foodId).catch(() => {});
    }
  } catch (err) {
    console.error('Failed to remove custom food image:', err);
  }
}

// ---------------- COCKTAIL IMAGES ----------------
export function getAllCustomCocktailImages(): Record<string, string> {
  const merged: Record<string, string> = { ...HARDCODED_IMAGES.cocktails };
  try {
    const raw = localStorage.getItem(COCKTAIL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(merged, parsed);
    }
  } catch (err) {
    console.error('Failed to read custom cocktail images from storage:', err);
  }
  return merged;
}

export function getCustomCocktailImage(cocktailId: string): string | null {
  const images = getAllCustomCocktailImages();
  return images[cocktailId] || null;
}

export function saveCustomCocktailImage(cocktailId: string, dataUrl: string): void {
  try {
    const images = getAllCustomCocktailImages();
    images[cocktailId] = dataUrl;
    localStorage.setItem(COCKTAIL_STORAGE_KEY, JSON.stringify(images));
    window.dispatchEvent(new CustomEvent(COCKTAIL_UPDATE_EVENT, { detail: { cocktailId, dataUrl } }));

    // Auto-persist directly into project source code
    persistImageToServer('cocktail', cocktailId, dataUrl).catch(() => {});
  } catch (err) {
    console.error('Failed to save cocktail image to localStorage:', err);
    throw err;
  }
}

export function removeCustomCocktailImage(cocktailId: string): void {
  try {
    const images = getAllCustomCocktailImages();
    if (images[cocktailId]) {
      delete images[cocktailId];
      localStorage.setItem(COCKTAIL_STORAGE_KEY, JSON.stringify(images));
      window.dispatchEvent(new CustomEvent(COCKTAIL_UPDATE_EVENT, { detail: { cocktailId, dataUrl: null } }));
      removeImageFromServer('cocktail', cocktailId).catch(() => {});
    }
  } catch (err) {
    console.error('Failed to remove custom cocktail image:', err);
  }
}

// ---------------- SERVER PERSISTENCE / HARDCODING ----------------
async function persistImageToServer(type: 'food' | 'cocktail', id: string, dataUrl: string): Promise<string | null> {
  try {
    const response = await fetch('/api/save-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id, dataUrl }),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(`[SourceSync] Permanently hardcoded ${type} "${id}" into source code.`);
      return result.url;
    }
  } catch (err) {
    console.warn('[SourceSync] Server endpoint unavailable:', err);
  }
  return null;
}

async function removeImageFromServer(type: 'food' | 'cocktail', id: string): Promise<void> {
  try {
    await fetch('/api/remove-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id }),
    });
  } catch (err) {
    console.warn('[SourceSync] Server endpoint unavailable:', err);
  }
}

/**
 * Bulk sync all images from local browser storage to project source files.
 * This saves files to public/images/ and writes src/data/hardcodedImages.ts!
 */
export async function syncAllToSourceCode(): Promise<{
  success: boolean;
  count: number;
  message?: string;
}> {
  try {
    let foodImages: Record<string, string> = {};
    let cocktailImages: Record<string, string> = {};

    const rawFood = localStorage.getItem(FOOD_STORAGE_KEY);
    if (rawFood) {
      try {
        foodImages = JSON.parse(rawFood);
      } catch {}
    }

    const rawCocktail = localStorage.getItem(COCKTAIL_STORAGE_KEY);
    if (rawCocktail) {
      try {
        cocktailImages = JSON.parse(rawCocktail);
      } catch {}
    }

    const totalLocal = Object.keys(foodImages).length + Object.keys(cocktailImages).length;
    if (totalLocal === 0) {
      return { success: true, count: 0, message: 'No new local images found to sync' };
    }

    const response = await fetch('/api/sync-all-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foodImages, cocktailImages }),
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const data = await response.json();
    return { success: true, count: data.count || 0 };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to sync images';
    console.error('Failed to sync images into source code:', err);
    return { success: false, count: 0, message: msg };
  }
}

/**
 * Automatically sync on app load if local images exist in this browser
 */
export function autoSyncOnStartup(): void {
  // No-op: all images are fixed and loaded from official image sources
}

/**
 * Resizes and compresses an image file to fit cleanly within browser storage.
 */
export function compressAndReadFile(
  file: File,
  maxDimension = 1200,
  quality = 0.82
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Please upload an image file (JPG, PNG, WebP).'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(src);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('Failed to parse image file.'));
      img.src = src;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}
