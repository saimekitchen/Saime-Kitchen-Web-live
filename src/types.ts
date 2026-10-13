export type Language = 'en' | 'vi';

export type ActivePage = 'food' | 'cocktail';

export type FoodCategory = 'starter' | 'main' | 'dessert' | 'addon';

export type CocktailRegion = 'north' | 'central' | 'south';

export interface FoodItem {
  id: string;
  name: string;
  nameVi?: string;
  category: 'starter' | 'main' | 'dessert' | 'addon';
  price: string;
  tagline: string;
  taglineVi?: string;
  description: string;
  descriptionVi?: string;
  ingredients: string[];
  ingredientsVi?: string[];
  dietary: string[];
  temperature: 'Cold' | 'Warm' | 'Crispy' | 'Chilled';
  primaryImage: string;
  detailImages: string[];
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'wide';
  colorPalette: string[];
  funFact?: string;
  funFactVi?: string;
  pairing: {
    cocktailId: string;
    cocktailName: string;
    cocktailNameVi?: string;
    notes: string;
    notesVi?: string;
  };
}

export interface CocktailItem {
  id: string;
  name: string;
  nameVi?: string;
  category: 'north' | 'central' | 'south';
  region?: 'north' | 'central' | 'south';
  price: string;
  tagline: string;
  taglineVi?: string;
  description: string;
  descriptionVi?: string;
  glassware: string;
  abv: string;
  flavorNodes: string[];
  flavorNodesVi?: string[];
  ingredients: string[];
  ingredientsVi?: string[];
  primaryImage: string;
  detailImages: string[];
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'wide';
  colorPalette: string[];
  funFact?: string;
  funFactVi?: string;
  pairing: {
    foodId: string;
    foodName: string;
    foodNameVi?: string;
    notes: string;
    notesVi?: string;
  };
}
