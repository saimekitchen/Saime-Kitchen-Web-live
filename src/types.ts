export interface MenuItem {
  id: string;
  name: string;
  price: number; // e.g. 45000 for 45,000 VND
  description: string;
  ingredients: string[];
  category: string; // Flexible string to support customizable categories
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
  isBestSeller?: boolean;     // New custom preset tag
  isChefRecommend?: boolean;   // New custom preset tag
  image: string; // Unsplash url / Uploaded base64 image data
  menuType?: 'bistro' | 'cafe' | 'cocktail';
  cocktailStyle?: 'Classic' | 'Modern' | 'Signature';
  imageHeight?: number;       // New custom resizing height slider (px)
  imageScale?: number;        // New custom resizing zoom scale (%)
  imageXOffset?: number;      // New custom horizontal offset (%)
  imageYOffset?: number;      // New custom vertical offset (%)
  cardAspect?: string;        // New custom aspect ratio class
  flipHorizontal?: boolean;   // New custom option to flip image horizontally
  imageFit?: 'cover' | 'contain'; // Support fitting without cropping
  sizes?: {
    S?: number;
    M?: number;
    L?: number;
  };
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  zone: 'The Long Table' | 'Tropical Patio' | 'Cozy Corner' | 'Chef\'s Counter';
  seatsCount?: number;        // Custom seats count
  tablesCount?: number;       // Custom tables count
  needAirCon?: boolean;       // Need Air Conditioning
  specialRequests?: string;
  status: 'Confirmed' | 'Modified' | 'Cancelled';
  createdAt: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  location: string;
  message: string;
  avatarId: number; // To pick a cool colored profile icon
  timestamp: string;
}
