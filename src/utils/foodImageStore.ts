// Utility for client-side storage of user-uploaded food and cocktail images with compression
const FOOD_STORAGE_KEY = 'saime_custom_food_images';
const FOOD_UPDATE_EVENT = 'saime_food_images_updated';

const COCKTAIL_STORAGE_KEY = 'saime_custom_cocktail_images';
const COCKTAIL_UPDATE_EVENT = 'saime_cocktail_images_updated';

// ---------------- FOOD IMAGES ----------------
export function getAllCustomFoodImages(): Record<string, string> {
  try {
    const raw = localStorage.getItem(FOOD_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read custom food images from storage:', err);
    return {};
  }
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
    }
  } catch (err) {
    console.error('Failed to remove custom food image:', err);
  }
}

// ---------------- COCKTAIL IMAGES ----------------
export function getAllCustomCocktailImages(): Record<string, string> {
  try {
    const raw = localStorage.getItem(COCKTAIL_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read custom cocktail images from storage:', err);
    return {};
  }
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
    }
  } catch (err) {
    console.error('Failed to remove custom cocktail image:', err);
  }
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
