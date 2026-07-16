import { MenuItem, GuestbookEntry } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Banh Mi & Burgers
  {
    id: 'chicken-burger',
    name: 'CHICKEN BURGER',
    price: 110000,
    description: 'Crispy chicken with melted slice of cheese, fresh lettuce, sliced tomato, white & purple cabbage slaw, onion, and a house-special vinaigrette mayonnaise sauce.',
    ingredients: ['Crispy chicken', 'Lettuce', 'Sliced cheese', 'Tomato', 'Ketchup', 'White & purple cabbage', 'Onion', 'Vinaigrette', 'Mayonnaise'],
    category: 'Main Course',
    isSignature: true,
    image: 'https://i.imgur.com/bj4xgkE.jpeg'
  },
  {
    id: 'beef-burger',
    name: 'BEEF BURGER',
    price: 160000,
    description: 'Savory flame-grilled ground beef patty with breadcrumbs, crispy bacon, melted cheese, a sunny-side-up egg, lettuce, tomato, masterfully matched with mayonnaise, ketchup, and mustard on a toasted sesame bun.',
    ingredients: ['Ground beef', 'Breadcrumbs', 'Onion', 'Lettuce', 'Tomato', 'Bacon', 'Sliced cheese', 'Egg', 'Mayonnaise', 'Ketchup', 'Mustard'],
    category: 'Main Course',
    isSignature: true,
    image: 'https://i.imgur.com/LUOWos5.jpeg'
  },
  {
    id: 'banh-mi-char-siu',
    name: 'BANH MI CHAR SIU',
    price: 50000,
    description: 'Crisp Vietnamese baguette loaded with succulent caramelized char siu pork meat, rich savory pâté, cucumber slices, fresh lettuce, and house-made crunchy Vietnamese pickles.',
    ingredients: ['Banh mi Baguette', 'Char siu meat', 'Pâté', 'Cucumber', 'Vietnamese pickles', 'Lettuce'],
    category: 'Main Course',
    isSignature: true,
    image: 'https://i.imgur.com/xHA399I.jpeg'
  },
  {
    id: 'saime-pan',
    name: 'SAIME PAN',
    price: 65000,
    description: 'Deconstructed street-style feast served hot: Sizzling pan with a juicy Saime recipe meatball, perfectly soft egg, creamy pâté, artisanal Vietnamese sausage, pickles, coriander, and light soy sauce, served with a crispy warm banh mi.',
    ingredients: ['Banh mi Baguette', 'Saime meatball', 'Egg', 'Pâté', 'Vietnamese pickles', 'Soy sauce', 'Coriander', 'Vietnamese sausage'],
    category: 'Main Course',
    isSignature: true,
    isBestSeller: false,
    isChefRecommend: true,
    image: '/src/assets/images/regenerated_image_1781685672709.jpg'
  },

  // Snacks & Starters
  {
    id: 'char-siu-mantou',
    name: 'CHAR SIU MANTOU',
    price: 45000,
    description: 'Soft, fluffy steamed mantou bun stuffed with fragrant, melt-in-your-mouth char siu pork belly, fresh coriander, cucumber slices, and savory mayonnaise drizzled with rich sweet char siu sauce.',
    ingredients: ['Mantou bun', 'Char siu pork', 'Cucumber', 'Char siu sauce', 'Mayonnaise', 'Coriander'],
    category: 'Starters',
    isSignature: true,
    isBestSeller: true,
    flipHorizontal: true,
    image: '/src/assets/images/regenerated_image_1781685669737.jpg'
  },
  {
    id: 'chicken-mantou',
    name: 'Chicken Mantou',
    price: 45000,
    description: 'Mautou, chicken nugget, white & purple cabbage, home-made sauce.',
    ingredients: ['Mantou', 'Chicken nugget', 'White cabbage', 'Purple cabbage', 'Home-made sauce'],
    category: 'Starters',
    image: 'https://i.imgur.com/PK2wXHW.jpeg',
    menuType: 'bistro'
  },
  {
    id: 'braised-pork-mantou',
    name: 'Braised Pork Mantou',
    price: 45000,
    description: 'Mautou, braised pork, cucumber, bamboo shoots, mayonnaise',
    ingredients: ['Mantou', 'Braised pork', 'Cucumber', 'Bamboo shoots', 'Mayonnaise'],
    category: 'Starters',
    image: 'https://i.imgur.com/ZYHRw2x.jpeg',
    menuType: 'bistro'
  },
  {
    id: 'saime-wonton',
    name: 'SAIME WONTON',
    price: 45000,
    description: 'Golden-fried crispy wontons generously filled with seasoned pork and shrimp siu mai elements, served with cool Vietnamese pickles, mayonnaise, and dynamic chili sauce.',
    ingredients: ['Wonton wrappers', 'Siu mai filling', 'Mayonnaise', 'Chili sauce', 'Vietnamese pickles'],
    category: 'Starters',
    isSpicy: true,
    isSignature: true,
    isBestSeller: true,
    isChefRecommend: true,
    image: '/src/assets/images/saime_wonton_dish_1781685487940.jpg'
  },
  {
    id: 'corn-wonton',
    name: 'CORN WONTON',
    price: 45000,
    description: 'A comforting vegetarian wonton alternative filled with sticky sweet corn kernels, peeled shallots, green scallions, onions, and gently pan-seared with salt and pepper.',
    ingredients: ['Wonton wrappers', 'Sticky corn', 'Sweet corn', 'Peeled shallots', 'Scallions', 'Onion', 'Salt & pepper'],
    category: 'Starters',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781685880303.jpg'
  },
  {
    id: 'cracker',
    name: 'CRACKER',
    price: 45000,
    description: 'Sensational crispy crunchy rice paper base topped with aromatic scallion oil, savory pork floss, signature spread of pâté, completed with Umami fish sauce syrup.',
    ingredients: ['Crispy rice base', 'Pâté', 'Scallion oil', 'Pork floss', 'Fish sauce'],
    category: 'Starters',
    image: '/src/assets/images/regenerated_image_1781685883138.jpg'
  },

  // Mains & Pastas
  {
    id: 'creamy-dreamy',
    name: 'CREAMY DREAMY',
    price: 115000,
    description: 'An indulgent mash-up: silky rich whipped smashed potatoes loaded with high-grade caramelized braised pork belly, garnished with tender bamboo shoots to deliver absolute comfort.',
    ingredients: ['Smashed potato', 'Braised pork belly', 'Bamboo shoots'],
    category: 'Main Course',
    isSignature: true,
    image: '/src/assets/images/regenerated_image_1781685661034.jpg'
  },
  {
    id: 'bolognese-spaghetti',
    name: 'BOLOGNESE SPAGHETTI',
    price: 130000,
    description: 'Robust, comforting spaghetti tossed in slow-simmered beef ragout with fine red wine, carrots, onions, celery, and tomatoes, finished with a generous dusting of grated parmesan.',
    ingredients: ['Spaghetti', 'Ground beef', 'Celery', 'Onion', 'Tomato', 'Carrot', 'Red wine', 'Parmesan cheese'],
    category: 'Main Course',
    image: '/src/assets/images/regenerated_image_1781686324721.jpg'
  },
  {
    id: 'creamy-pasta',
    name: 'CREAMY PASTA',
    price: 120000,
    description: 'Pasta, palm seed, onion, whipping cream, unsalted butter, parmesan cheese.',
    ingredients: ['Pasta', 'Palm seed', 'Onion', 'Whipping cream', 'Unsalted butter', 'Parmesan cheese'],
    category: 'Main Course',
    image: 'https://i.imgur.com/6IH6KSs.jpeg',
    imageScale: 110,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover'
  },
  {
    id: 'saime-comfort',
    name: 'SAIME COMFORT',
    price: 45000,
    description: 'Steamed white corn, steamed mung bean, peanut, white sesame, shredded coconut, onion',
    ingredients: ['Steamed white corn', 'Steamed mung bean', 'Peanut', 'White sesame', 'Shredded coconut', 'Onion'],
    category: 'Salad & Sides',
    isVegetarian: true,
    isSignature: true,
    isBestSeller: true,
    isChefRecommend: true,
    image: 'https://i.imgur.com/YYR7ugs.jpeg'
  },
  {
    id: 'xoi',
    name: 'Xôi',
    price: 65000,
    description: 'Pate, sticky rice, pandan leaves, shallots, dried tiny shrimp, pork floss, chinese sausage, char siu pork, quail eggs',
    ingredients: ['Pate', 'Sticky rice', 'Pandan leaves', 'Shallots', 'Dried tiny shrimp', 'Pork floss', 'Chinese sausage', 'Char siu pork', 'Quail eggs'],
    category: 'Main Course',
    image: 'https://i.imgur.com/eOUBrS7.jpeg',
    menuType: 'bistro'
  },

  // Sides & Salads
  {
    id: 'chicken-salad',
    name: 'CHICKEN SALAD',
    price: 100000,
    description: 'Sous vide chicken, lettuce, purple lettuce sprout, cherry tomatoes, cucumber, peeled shallots, onion, spicy mayonnaise.',
    ingredients: ['Sous vide chicken', 'Lettuce', 'Purple lettuce sprout', 'Cherry tomatoes', 'Cucumber', 'Peeled shallots', 'Onion', 'Spicy mayonnaise'],
    category: 'Salad & Sides',
    isSpicy: true,
    image: 'https://i.imgur.com/NRmPydx.jpeg'
  },
  {
    id: 'garden-salad',
    name: 'GARDEN SALAD',
    price: 60000,
    description: 'A light, refreshing option centering crisp lettuce leaves, tender purple lettuce sprouts, colorful cherry tomatoes, crunchy cucumber, minced mild shallots, and yellow corn, drizzled in rich spicy mayonnaise.',
    ingredients: ['Lettuce', 'Purple lettuce sprout', 'Cherry tomatoes', 'Cucumber', 'Peeled shallots', 'Onion', 'Yellow corn', 'Spicy mayonnaise'],
    category: 'Salad & Sides',
    isVegetarian: true,
    image: 'https://i.imgur.com/Cz0QPXk.jpeg'
  },
  {
    id: 'chicken-nugget',
    name: 'CHICKEN NUGGET',
    price: 65000,
    description: 'Golden-fried, extra-crispy chicken breast nuggets, perfect for dipping in Saime’s secret signature dipping sauce.',
    ingredients: ['Chicken breast nuggets', 'Special house dipping sauce'],
    category: 'Salad & Sides',
    image: '/src/assets/images/regenerated_image_1781686096329.jpg'
  },
  {
    id: 'garlic-bread',
    name: 'GARLIC BREAD',
    price: 45000,
    description: 'Toasted Vietnamese banh mi slices generously slathered in rich high-fat salted butter, minced local garlic, and fresh chopped coriander.',
    ingredients: ['Banh mi Baguette', 'Salted butter', 'Local garlic', 'Coriander'],
    category: 'Salad & Sides',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781686102459.jpg'
  },
  {
    id: 'french-fries',
    name: 'FRENCH FRIES',
    price: 45000,
    description: 'Classic double-cooked sea-salt crusted French fries, seasoned simple with ground black pepper.',
    ingredients: ['Premium potatoes', 'Sea salt', 'Pepper'],
    category: 'Salad & Sides',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781686104887.jpg'
  },
  {
    id: 'skew-combo',
    name: 'Skew combo',
    price: 80000,
    description: 'Chicken & Pork Skew',
    ingredients: ['Chicken', 'Pork', 'Skewers'],
    category: 'Salad & Sides',
    image: 'https://i.imgur.com/2WFVjrY.jpeg',
    menuType: 'bistro'
  },

  // Sweets
  {
    id: 'coco-toast',
    name: 'COCO TOAST',
    price: 80000,
    description: 'The ultimate dessert mashup: Crisped buttery caramelized banh mi cubes served with velvety smooth coconut ice-cream, toasted shredded coconut flesh, crushed peanuts, heavy cooking cream, and sweet condensed milk.',
    ingredients: ['Banh mi toast cubes', 'Coconut ice-cream', 'Shredded coconut', 'Peanut', 'Condensed milk', 'Milk', 'Cooking cream', 'Butter'],
    category: 'Dessert',
    isSignature: true,
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781685666955.jpg',
    menuType: 'bistro'
  },
  
  // ☕ CAFE MENU ITEMS (Sunny, bohemian vibe)
  {
    id: 'espresso-coffee',
    name: 'ESPRESSO',
    price: 30000,
    description: 'Pure, intense Italian signature espresso brewed with premium selection beans. Bold aroma with a beautiful golden crema layer.',
    ingredients: ['Italian blend beans', 'Intense crema'],
    category: 'Coffee',
    sizes: { S: 30000, M: 50000 },
    image: 'https://images.unsplash.com/photo-1510707577719-fa7c18305072?w=500',
    menuType: 'cafe'
  },
  {
    id: 'americano-coffee',
    name: 'AMERICANO / LONG BLACK',
    price: 40000,
    description: 'Double shot of high-quality espresso diluted with water, delivering a clean, rich, and prolonged satisfying coffee flavor.',
    ingredients: ['Espresso shot', 'Diluted water'],
    category: 'Coffee',
    sizes: { S: 40000, M: 50000, L: 60000 },
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500',
    menuType: 'cafe'
  },
  {
    id: 'cappuccino-coffee',
    name: 'CAPPUCCINO / FLAT WHITE',
    price: 60000,
    description: 'Silky microfiber steamed milk poured gently over a rich double shot of espresso. Balanced, warm and incredibly smooth.',
    ingredients: ['Fruity espresso', 'Steamed microfoam milk'],
    category: 'Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500',
    menuType: 'cafe'
  },
  {
    id: 'caramel-macchiato',
    name: 'CARAMEL MACCHIATO',
    price: 60000,
    description: 'Espresso combined with sweet vanilla syrup and warm frothed milk, finished with an elegant drizzle of rich buttery caramel sauce.',
    ingredients: ['Espresso', 'Vanilla syrup', 'Frothed milk', 'Caramel drizzle'],
    category: 'Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500',
    menuType: 'cafe'
  },
  {
    id: 'latte-coffee',
    name: 'LATTE',
    price: 60000,
    description: 'Traditional espresso shot balanced perfectly with smooth, silky steamed milk and a thin, elegant layer of milk foam on top.',
    ingredients: ['Espresso', 'Steamed milk', 'Velvet foam'],
    category: 'Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500',
    menuType: 'cafe'
  },
  {
    id: 'salted-cream-latte',
    name: 'SALTED CREAM LATTE',
    price: 80000,
    description: 'Premium latte topped with our signature sweet-and-savory sea-salt cream foam that melts slowly into the rich espresso base.',
    ingredients: ['Espresso', 'Salted cream foam', 'Whole milk'],
    category: 'Coffee',
    sizes: { S: 80000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=500',
    menuType: 'cafe'
  },
  {
    id: 'mocha-coffee',
    name: 'MOCHA',
    price: 80000,
    description: 'Decadent espresso blended with premium rich dark cocoa, steamed milk, and a delicate topping of chocolate dust.',
    ingredients: ['Espresso', 'Dark chocolate', 'Steamed milk'],
    category: 'Coffee',
    sizes: { S: 80000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1596078841242-12f73dc6ef65?w=500',
    menuType: 'cafe'
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee (Đen)',
    price: 30000,
    description: 'A traditional intense specialty Vietnamese slow-drip black coffee. Bold, full-bodied, and deeply aromatic (Cà phê đen).',
    ingredients: ['Traditional Robusta', 'Slow drip filter'],
    category: 'Coffee',
    sizes: { S: 30000, M: 40000, L: 50000 },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
    menuType: 'cafe'
  },
  {
    id: 'condensed-coffee',
    name: 'Condensed Milk Coffee (Sữa đá)',
    price: 45000,
    description: 'The staple Vietnamese sweet iced coffee. Bold slow-dripped Robusta combined with sweet, thick condensed milk (Cà phê sữa đá).',
    ingredients: ['Robusta coffee', 'Condensed milk', 'Iced blocks'],
    category: 'Coffee',
    sizes: { S: 45000, M: 55000, L: 60000 },
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500',
    menuType: 'cafe'
  },
  {
    id: 'white-coffee',
    name: 'White Coffee (Bạc xỉu)',
    price: 50000,
    description: 'A beautiful sweet, milk-forward specialty. A comforting double layer of milk crowned with fragrant Vietnamese coffee (Bạc xỉu).',
    ingredients: ['Fresh milk', 'Condensed milk', 'Drip coffee splash'],
    category: 'Coffee',
    sizes: { S: 50000, M: 60000, L: 65000 },
    image: 'https://images.unsplash.com/photo-1461023246033-0acc3a96b28a?w=500',
    menuType: 'cafe'
  },
  {
    id: 'salted-coffee',
    name: 'Salted Coffee (Muối)',
    price: 55000,
    description: 'A sensational local specialty originating from Hue. Rich drip coffee layered with dense salted milk foam for a perfect sweet-salty finish.',
    ingredients: ['Robusta drip', 'Salted cream foam', 'Condensed milk'],
    category: 'Coffee',
    sizes: { S: 55000, M: 65000, L: 70000 },
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
    menuType: 'cafe'
  },
  {
    id: 'coconut-coffee',
    name: 'Coconut Coffee (Dừa)',
    price: 55000,
    description: 'A decadent icy treat. Refreshing frozen coconut milk smoothie topped with rich, intense traditional drip coffee.',
    ingredients: ['Blended coconut milk', 'Vietnamese drip coffee', 'Sweet milk'],
    category: 'Coffee',
    sizes: { S: 55000, M: 65000, L: 70000 },
    isSignature: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1594911774121-6a2c730e69be?w=500',
    menuType: 'cafe'
  },
  {
    id: 'tamarind-tea',
    name: 'Tamarind Signature Drink',
    price: 55000,
    description: 'Saime signature sweet and tart tamarind iced tea sweetened with wild honeys, loaded with soft palm seeds, and topped with crunchy roasted peanuts.',
    ingredients: ['Tamarind pulp', 'Wild honey', 'Palm seed', 'Roasted peanuts'],
    category: 'Tea',
    sizes: { S: 55000, M: 65000, L: 70000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
    menuType: 'cafe'
  },
  {
    id: 'salted-kumquat',
    name: 'Salted Kumquat Signature Drink',
    price: 65000,
    description: 'A deeply refreshing traditional remedy. Hand-shaken preserved kumquats sweetened with rock crystal sugar, served over crushed ice.',
    ingredients: ['Preserved kumquat', 'Salted plum zest', 'Rock sugar syrup'],
    category: 'Tea',
    sizes: { S: 65000, M: 75000, L: 85000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500',
    menuType: 'cafe'
  },
  {
    id: 'pineapple-tea',
    name: 'Pineapple Tropical Tea',
    price: 65000,
    description: 'Fruity organic black tea shaken with sweet tropical pineapple purée and loaded with real juicy crushed pineapple chunks.',
    ingredients: ['Black tea', 'Crushed pineapple', 'Sugar cane syrup'],
    category: 'Tea',
    sizes: { S: 65000, M: 75000, L: 85000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ec82a89f?w=500',
    menuType: 'cafe'
  },
  {
    id: 'mango-tea',
    name: 'Mango Tropical Tea',
    price: 65000,
    description: 'Bright premium tea combined with ripe, luscious local mango compote for a fruity and wonderfully sweet iced tea finish.',
    ingredients: ['Black tea', 'Local mango compote', 'Cane syrup'],
    category: 'Tea',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500',
    menuType: 'cafe'
  },
  {
    id: 'red-grapefruit-juzu',
    name: 'Red Grapefruit & Juzu Tropical Tea',
    price: 65000,
    description: 'Crisp refreshing ruby red grapefruit infusion combined with aromatic Japanese yuzu citrus. A citrus floral powerhouse.',
    ingredients: ['Red grapefruit', 'Yuzu extract', 'Rock sugar syrup'],
    category: 'Tea',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500',
    menuType: 'cafe'
  },
  {
    id: 'strawberry-tea',
    name: 'Strawberry Tropical Tea',
    price: 65000,
    description: 'Fragrant shaken tea with fresh macerated local strawberries, sweet wild honey, and a touch of fresh mint leaves.',
    ingredients: ['Black tea', 'Macerated strawberries', 'Wild honey', 'Mint leaves'],
    category: 'Tea',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500',
    menuType: 'cafe'
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    price: 60000,
    description: '100% pure freshly-squeezed premium sweet oranges with pulp. Juicy, sweet, and bursting with vitamins.',
    ingredients: ['Squeezed sweet oranges', 'Nothing else'],
    category: 'Juice',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500',
    menuType: 'cafe'
  },
  {
    id: 'watermelon-juice',
    name: 'Watermelon Juice',
    price: 60000,
    description: 'Hydrating, perfectly sweet frozen pure watermelon juice. Clean, cold, and refreshing.',
    ingredients: ['Watermelon slices', 'Crushed ice'],
    category: 'Juice',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1589733902241-27f3b53f41dc?w=500',
    menuType: 'cafe'
  },
  {
    id: 'passionfruit-juice',
    name: 'Passionfruit Juice',
    price: 60000,
    description: 'Refreshing sweet-and-sour local passionfruit juice, loaded with beneficial organic zests.',
    ingredients: ['Passionfruit pulp', 'Rock sugar syrup'],
    category: 'Juice',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1578654735239-6f92e4347405?w=500',
    menuType: 'cafe'
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    price: 85000,
    description: 'Pure, authentic stone-ground Japanese Uji Matcha whisked into hot or cold silky whole milk.',
    ingredients: ['Uji Matcha', 'Whole milk', 'Syrup'],
    category: 'Matcha',
    sizes: { S: 85000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500',
    menuType: 'cafe'
  },
  {
    id: 'matcha-coconut',
    name: 'Matcha Coconut',
    price: 95000,
    description: 'A dreamy tropical treat. A perfect layer of intense earthy green tea poured over rich, sweet local coconut milk.',
    ingredients: ['Uji Matcha', 'Coconut milk', 'Sweet milk'],
    category: 'Matcha',
    sizes: { S: 95000, M: 115000, L: 125000 },
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500',
    menuType: 'cafe'
  },
  {
    id: 'matcha-salted-cream',
    name: 'Matcha Salted Cream',
    price: 95000,
    description: 'Matcha latte crowned with our thick, velvety, savory-sweet sea-salt cream foam for a decadent multi-tiered sip.',
    ingredients: ['Uji Matcha', 'Salted cheese cream', 'Fresh milk'],
    category: 'Matcha',
    sizes: { S: 95000, M: 115000, L: 125000 },
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500',
    menuType: 'cafe'
  },
  {
    id: 'matcha-cream',
    name: 'Matcha Cream',
    price: 110000,
    description: 'An elite double-strength dark green tea layered beautifully over sweetened milk cream. Pure matcha indulgence.',
    ingredients: ['Extra Uji Matcha', 'Whipped dairy cream', 'Whole milk'],
    category: 'Matcha',
    sizes: { S: 110000, M: 125000, L: 140000 },
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=500',
    menuType: 'cafe'
  },
  {
    id: 'chocolate-latte',
    name: 'Chocolate Latte',
    price: 70000,
    description: 'Rich dark Belgian single-origin chocolate melted down and hand-blended with silky warm or cold whole milk.',
    ingredients: ['Premium Belgian chocolate', 'Steamed whole milk'],
    category: 'Chocolate',
    sizes: { S: 70000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
    menuType: 'cafe'
  },
  {
    id: 'avocado-smoothie',
    name: 'LUSCIOUS AVOCADO SMOOTHIE',
    price: 80000,
    description: 'Creamy local organic avocado blended ultra-smooth with condensed milk and crushed ice. Rich, nourishing, and thick.',
    ingredients: ['Avocado', 'Condensed milk', 'Iced blocks'],
    category: 'Smoothie',
    sizes: { M: 80000 },
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    price: 70000,
    description: 'Rich frozen local mango chunks whipped into a thick, velvet-smooth, refreshingly chilled tropical sorbet.',
    ingredients: ['Ripe golden mango', 'Purée syrup', 'Iced blocks'],
    category: 'Smoothie',
    sizes: { M: 70000 },
    image: 'https://images.unsplash.com/photo-1532301931899-2a524e2421b5?w=500',
    menuType: 'cafe'
  },
  {
    id: 'coke-soft',
    name: 'Coke',
    price: 45000,
    description: 'Refreshing classic carbonated soft drink served ice-cold (320ml Can).',
    ingredients: ['Chilled soft drink', 'Ice column'],
    category: 'Soft Drink',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500',
    menuType: 'cafe'
  },
  {
    id: 'coke-light-zero',
    name: 'Coke Light/Zero',
    price: 45000,
    description: 'Refreshing classic carbonated soft drink served ice-cold with option of zero sugar or light calorie (320ml Can).',
    ingredients: ['Chilled soft drink', 'Ice column'],
    category: 'Soft Drink',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500',
    menuType: 'cafe'
  },
  {
    id: 'sprite-soft',
    name: 'Sprite',
    price: 45000,
    description: 'Crisp, sparkling lemon-lime zero-caffeine soda to refresh your palate (320ml Can).',
    ingredients: ['Chilled Sprite can', 'Ice column'],
    category: 'Soft Drink',
    image: 'https://images.unsplash.com/photo-1625772290748-3914a1a36d41?w=500',
    menuType: 'cafe'
  },
  {
    id: 'tonic-soft',
    name: 'Tonic',
    price: 45000,
    description: 'Crisp bubbly premium standard tonic mix served ice-cold (320ml Can).',
    ingredients: ['Premium carbonation', 'Bitters extract'],
    category: 'Soft Drink',
    image: 'https://images.unsplash.com/photo-1607623198457-7aad0fcfc3b8?w=500',
    menuType: 'cafe'
  },
  {
    id: 'ginger-ale',
    name: 'Ginger Ale',
    price: 45000,
    description: 'Crisp bubbling premium ginger ale mix served ice-cold, perfect side for a sunny day (320ml Can).',
    ingredients: ['Ginger extract', 'Carbonation'],
    category: 'Soft Drink',
    image: 'https://images.unsplash.com/photo-1607623198457-7aad0fcfc3b8?w=500',
    menuType: 'cafe'
  },
  {
    id: 'singha-soda',
    name: 'Singha Soda Water',
    price: 45000,
    description: 'Superbly carbonated, highly-gaseous crisp soda water from Thailand (325ml Can). Perfect for ultimate refreshment.',
    ingredients: ['Carbonation maximum'],
    category: 'Soda Water',
    image: 'https://images.unsplash.com/photo-1607623198457-7aad0fcfc3b8?w=500',
    menuType: 'cafe'
  },
  {
    id: 'huda-beer',
    name: 'Huda Beer',
    price: 55000,
    description: 'Central Vietnam’s proud local heritage lager brewed in Hue. Light, crisp, with a gentle malt finish (330ml Can).',
    ingredients: ['Hops', 'Malt', 'Central waters'],
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500',
    menuType: 'cafe'
  },
  {
    id: 'saigon-beer',
    name: 'Saigon Beer',
    price: 55000,
    description: 'Traditional iconic Vietnamese export beer. Rich taste profile, full carbonation, deep gold color (330ml Can).',
    ingredients: ['Rice & wheat fermentation'],
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500',
    menuType: 'cafe'
  },
  {
    id: 'heineken-beer',
    name: 'Heineken Beer',
    price: 70000,
    description: 'Premium international pale lager beer. Option for traditional recipe (250ml Can).',
    ingredients: ['A-yeast', 'Fermented barley'],
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500',
    menuType: 'cafe'
  },
  {
    id: 'heineken-zero',
    name: 'Heineken 0.0 (Non-Alcoholic)',
    price: 70000,
    description: 'Premium non-alcoholic malt beverage with 0.0% alcohol content (250ml Can).',
    ingredients: ['A-yeast', 'Fermented barley', 'Special de-alcoholization'],
    category: 'Beer',
    image: 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?w=500',
    menuType: 'cafe'
  },
  {
    id: 'coconut-croissant',
    name: 'COCO TOAST',
    price: 80000,
    description: 'The ultimate dessert mashup: Crisped buttery caramelized banh mi cubes served with velvety smooth coconut ice-cream, toasted shredded coconut flesh, crushed peanuts, heavy cooking cream, and sweet condensed milk.',
    ingredients: ['Banh mi toast cubes', 'Coconut ice-cream', 'Shredded coconut', 'Peanut', 'Condensed milk', 'Milk', 'Cooking cream', 'Butter'],
    category: 'Fresh Pastry & Bites',
    isSignature: true,
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781685666955.jpg',
    menuType: 'cafe'
  },

  // 🍸 COCKTAIL MENU ITEMS (Midnight, sleek vibe)
  {
    id: 'long-island-tea',
    name: 'LONG ISLAND TEA',
    price: 180000,
    description: 'A classic power house blend of vodka, gin, rum havana, tequila, and triple sec, balanced with fresh lime juice and a splash of coke.',
    ingredients: ['Vodka', 'Gin', 'Rum Havana', 'Tequila', 'Triple Sec', 'Lime', 'Coke'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/25/0/CCWM_Long-Island-Ice-Tea_s3x4.jpg.rend.hgtvcom.1280.960.suffix/1572356786983.webp',
    imageFit: 'contain'
  },
  {
    id: 'mojito',
    name: 'MOJITO',
    price: 180000,
    description: 'A classic refreshing smash of Rum Havana 3, fresh mint leaves, key lime juice, sugar, and fizzy club soda.',
    ingredients: ['Rum Havana 3', 'Lime', 'Sugar', 'Mint', 'Soda'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?format=auto&optimize=high&width=1440',
    imageFit: 'contain'
  },
  {
    id: 'maitai',
    name: 'MAITAI',
    price: 180000,
    description: 'An exotic tropical harmony of premium Rum Havana 3, rich dark rum, orange triple sec, sweet Orgeat almond syrup, and fresh lime juice.',
    ingredients: ['Rum Havana 3', 'Dark Rum', 'Triple Sec', 'Syrup Orgeat', 'Lime'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.allrecipes.com/thmb/us4SAuawmMYcrDiZAxfZ2e5c3PE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73287-mai-tai-ddmfs-hero-3x4-1001-44ffd41d2ea94e15ba63bac042cffac2.jpg',
    imageFit: 'contain'
  },
  {
    id: 'matador',
    name: 'MATADOR',
    price: 180000,
    description: 'A simple yet striking cocktail featuring high-grade tequila, golden pineapple juice, and key lime juice.',
    ingredients: ['Tequila', 'Pineapple Juice', 'Lime'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://dishesdelish.com/wp-content/uploads/2020/06/Matador-Cocktail-8.jpg',
    imageFit: 'contain'
  },
  {
    id: 'dry-martini',
    name: 'DRY MARTINI',
    price: 180000,
    description: 'Pure and sophisticated: High-grade aromatic dry gin stirred to perfection with Dry Dolin vermouth, served ice-cold.',
    ingredients: ['Gin', 'Dry Dolin'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.foodandwine.com/thmb/0EE4oZaE9AipUblzETQ6t21I53s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Dry-Martini-FT-RECIPE0626-2a041580b9384ca591b8c89bc36de6c0.jpg',
    imageFit: 'contain'
  },
  {
    id: 'clover-club',
    name: 'CLOVER CLUB',
    price: 180000,
    description: 'A pre-Prohibition pink classic styling gin, orange triple sec, rich syrup Giffar Grenadine, fresh key lime, and smooth egg white foam.',
    ingredients: ['Gin', 'Triple Sec', 'Syrup Giffar Grenadine', 'Lime', 'Egg White'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://d32miag6ta013h.cloudfront.net/bombay_sapphire_redesign/en-gl/23327/large/3280x1840_cloverclub.jpg',
    imageFit: 'contain'
  },
  {
    id: 'cosmopolitan',
    name: 'COSMOPOLITAN',
    price: 180000,
    description: 'Sleek and fruity blend of premium vodka, orange triple sec, tart cranberry juice, lime juice, and a hint of sugar.',
    ingredients: ['Vodka', 'Triple Sec', 'Cranberry Juice', 'Lime', 'Sugar'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.thebottleclub.com/cdn/shop/articles/TBC_recipe_image_9-490216.jpg?v=1707230667',
    imageFit: 'contain'
  },
  {
    id: 'sex-on-the-beach',
    name: 'SEX ON THE BEACH',
    price: 180000,
    description: 'An evocative beach favor: Vodka, sweet peach liqueur, fresh pineapple juice, tart cranberry juice, sugar, and Key lime.',
    ingredients: ['Vodka', 'Peach Liqueur', 'Pineapple Juice', 'Cranberry Juice', 'Sugar', 'Lime'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.allrecipes.com/thmb/4wUYfQMHipKftk0YJGp3hp9hnlI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/24221-Sex-On-The-Beach-DDMFS-4x3-cd29644eb4e34a63a362584a342b4a30.jpg',
    imageFit: 'contain'
  },
  {
    id: 'espresso-martini-classic',
    name: 'ESPRESSO MARTINI',
    price: 180000,
    description: 'An elegant pick-me-up cocktail featuring rich vodka, fresh hot espresso, coffee-flavored Kahlua, and sugar, shaken hard for a silky foam.',
    ingredients: ['Vodka', 'Espresso', 'Kahlua', 'Sugar'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.thebottleclub.com/cdn/shop/articles/TBC_recipe_image_6_e90b98de-096b-427c-aeba-06358c7a03fd-342433.jpg?v=1707230727',
    imageFit: 'contain'
  },
  {
    id: 'whisky-sour-classic',
    name: 'WHISKY SOUR',
    price: 180000,
    description: 'Perfect balance of sweet, sour, and spirit: Premium whisky, aromatic Angostura, sugar, fresh key lime, and emulsifying egg white.',
    ingredients: ['Whisky', 'Angostura', 'Sugar', 'Egg White', 'Lime'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-03-whiskey-sour%2Fwhiskey-sour-698',
    imageFit: 'contain'
  },
  {
    id: 'old-fashioned-classic',
    name: 'OLD FASHIONED',
    price: 180000,
    description: 'The timeless gentleman: Premium whisky stirred beautifully with aromatic Angostura, sweetened with a single slow-dissolving sugar cube.',
    ingredients: ['Whisky', 'Angostura', 'Sugar Cube'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://zestfulkitchen.com/wp-content/uploads/2023/02/old-fashion-cocktail_for-web-3.jpg',
    imageFit: 'contain'
  },
  {
    id: 'rob-roy-classic',
    name: 'ROB ROY',
    price: 180000,
    description: 'A scotch-based twist on the Manhattan: Whisky J&B blended with Angostura, and sweet Rosso Dolin vermouth.',
    ingredients: ['Whisky J&B', 'Angostura', 'Rosso Dolin'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.liquor.com/thmb/vonTiiI4Gopj4VEFjLwxIBjkGkc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rob_Roy_Credit_Tim_Nusog_2500x2500_primary-00dcd91c3f6545f6bf55342e23d28a4b.jpg',
    imageFit: 'contain'
  },
  {
    id: 'sidecar-classic',
    name: 'SIDECAR',
    price: 180000,
    description: 'An old school Parisian favorite: Fine oak-aged brandy shaken with orange triple sec, sugar, and Key lime juice, served with a sugar rim.',
    ingredients: ['Brandy', 'Triple Sec', 'Sugar', 'Lime'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://static-prod.remymartin.com/app/uploads/2025/02/remy-martin-cocktails-remy-sidecar-1x1-250220-02.jpg',
    imageFit: 'contain'
  },
  {
    id: 'aviation-classic',
    name: 'AVIATION',
    price: 180000,
    description: 'A beautiful floral creation: Premium dry gin, Giffard Maraschino, sweet violet, Key lime, and sugar.',
    ingredients: ['Gin', 'Giffard Maraschino', 'Violet', 'Lime', 'Sugar'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/10/aviation-cocktail.jpg',
    imageFit: 'contain'
  },
  {
    id: 'alexander-brandy',
    name: 'ALEXANDER BRANDY',
    price: 180000,
    description: 'A luscious, creamy dessert cocktail combining rich warm Brandy, sweet Cacao Brown, and silky non-Dairy Creamer.',
    ingredients: ['Brandy', 'Cacao Brown', 'Non-Dairy Creamer'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/brandy_alexander-09f9127.jpg?quality=90&resize=440,400',
    imageFit: 'contain'
  },
  {
    id: 'margarita-classic',
    name: 'MARGARITA',
    price: 180000,
    description: 'The beloved clean crisp treat: Fine blue-agave tequila, orange triple sec, fresh key lime, and simple sugar.',
    ingredients: ['Tequila', 'Triple Sec', 'Lime', 'Sugar'],
    category: 'Classic',
    menuType: 'cocktail',
    image: 'https://www.liquor.com/thmb/JQgDGy26Zsw-_cFGKH4zNH9PlXk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Frozen-Margarita-1500x1500-hero-191e49b3ab4f4781b93f3cfacac25136.jpg',
    imageFit: 'contain'
  },

  // Taste of Modern (200.000 / glass)
  {
    id: 'clarified-pina',
    name: 'CLARIFIED PINA',
    price: 200000,
    description: 'A crystal-clear modern masterpiece: Sugarcane Havana rum, sweet Malibu coconut liqueur, fresh golden pineapple juice, syrup of coconut, and key lime, perfectly clarified through pasteurized milk.',
    ingredients: ['Rum Havana', 'Malibu', 'Pineapple Juice', 'Syrup Coconut', 'Lime', 'Pasteurized Milk'],
    category: 'Modern',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'smoked-fancy-mary',
    name: 'SMOKED FANCY MARY',
    price: 200000,
    description: 'Uniquely botanical and savory: Premium Vodka infused via bell pepper & pepper sous-vide, red ripe tomato juice, Tabasco, fresh lime, pasteurized milk, and sugar.',
    ingredients: ['Vodka', 'Bell Pepper', 'Pepper Sous-Vide', 'Tomato Juice', 'Tabasco', 'Lime', 'Pasteurized Milk', 'Sugar'],
    category: 'Modern',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },

  // Saime Signatures (220.000 / glass)
  {
    id: 'me-sour',
    name: 'ME SOUR',
    price: 220000,
    description: 'A beautifully balanced local inspiration: Premium dry gin combined with dark tangy local tamarind paste, fresh key lime juice, and sweet simple cane sugar.',
    ingredients: ['Gin', 'Tamarind', 'Lime', 'Sugar'],
    category: 'Signature',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'blow-kiss',
    name: 'BLOW KISS',
    price: 220000,
    description: 'An evocative, romantic aromatic delight: Grain vodka shaken with house premium strawberry cordial, local salted kumquat syrup, fresh kumquat juice, and premium infused black tea.',
    ingredients: ['Vodka', 'Strawberry Cordial', 'Salted Kumquat', 'Kumquat Juice', 'Black Tea'],
    category: 'Signature',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'ruby-splash',
    name: 'RUBY SPLASH',
    price: 220000,
    description: 'A sparkling vibrant summer cocktail: Aromatic dry gin, orange triple sec, fresh pressed watermelon slices, cooling direct mint leaves, sweet syrup Giffard melon, and fresh lime.',
    ingredients: ['Gin', 'Triple Sec', 'Watermelon', 'Mint', 'Syrup Giffard Melon', 'Lime'],
    category: 'Signature',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },

  // Mocktails (120.000 / glass)
  {
    id: 'mocktail-spring',
    name: 'SPRING',
    price: 120000,
    description: 'A delicate floral revival featuring pink dragonfruit shrub, fragrant elderflower tonic, hand-squeezed key lime juice, and sweet wild honey, crowned with edible rose petals.',
    ingredients: ['Pink Dragonfruit Shrub', 'Elderflower Tonic', 'Lime Juice', 'Wild Honey', 'Rose Petals'],
    category: 'Mocktail',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'mocktail-summer',
    name: 'SUMMER',
    price: 120000,
    description: 'An energetic burst of tropical sunshine blending sweet passionfruit pulp, fresh pineapple nectar, sweet basil seed suspension, and cold-pressed coconut water.',
    ingredients: ['Passionfruit Pulp', 'Pineapple Nectar', 'Basil Seeds', 'Coconut Water', 'Crushed Ice'],
    category: 'Mocktail',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'mocktail-autumn',
    name: 'AUTUMN',
    price: 120000,
    description: 'A warm, spiced soothing fusion: Aromatic cinnamon-infused apple cider reduction combined with cold-brewed hibiscus tea, cloves, and a touch of organic maple syrup.',
    ingredients: ['Cinnamon Apple Cider', 'Hibiscus Tea', 'Cloves', 'Maple Syrup', 'Star Anise'],
    category: 'Mocktail',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'mocktail-winter',
    name: 'WINTER',
    price: 120000,
    description: 'A crisp and invigorating winter citrus delight. Elegant pressed white grape juice combined with muddled rosemary sprigs, local kaffir lime zest, and a high-fizz club soda splash.',
    ingredients: ['White Grape Juice', 'Muddled Rosemary', 'Kaffir Lime Zest', 'Club Soda', 'Mint'],
    category: 'Mocktail',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },

  // Shots
  {
    id: 'shot-b52',
    name: 'B52',
    price: 130000,
    description: 'The classic layered shot: Sweet coffee-infused Kahlua, Irish cream Bailey\'s, and orange Triple Sec, layered beautifully.',
    ingredients: ['Kahlua', 'Bailey\'s', 'Triple Sec'],
    category: 'Shot',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1514218240414-af3e38ffd875?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'shot-no-way-home',
    name: 'NO WAY HOME',
    price: 180000,
    description: 'An adventurous shot layered with rich Bailey\'s Irish Cream, cool peppermint Creme De Menthe (White), and high-proof Absinthe 69%.',
    ingredients: ['Bailey\'s', 'Creme De Menthe White', 'Absinthe 69%'],
    category: 'Shot',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ec82a89f?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'shot-absinthe-cleansing',
    name: 'ABSINTHE CLEANSING',
    price: 240000,
    description: 'Traditional ritual shot: Premium green Absinthe served alongside a torched sugar cube dripped with ice cold purified water.',
    ingredients: ['Absinthe cleansing', 'Sugar cube', 'Purified water'],
    category: 'Shot',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'shot-rumbullion',
    name: 'RUMBULLION',
    price: 110000,
    description: 'A robust, wake-up shooter of spiced Captain Morgan Black rum, a squeeze of fresh lime, and premium Vietnamese ground coffee powder.',
    ingredients: ['Captain morgan Black', 'Lime', 'Ground coffee powder'],
    category: 'Shot',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1545696911-c43612a1f93f?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },

  // Beer
  {
    id: 'beer-huda',
    name: 'HUDA BEER',
    price: 55000,
    description: 'A crisp, iconic local lager from Central Vietnam, refreshing and clean, matching perfectly with spicy food.',
    ingredients: ['Barley', 'Hops', 'Pure Water'],
    category: 'Beer',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'beer-saigon',
    name: 'SAIGON BEER',
    price: 55000,
    description: 'The historic favorite southern lager: Light-bodied, golden, crisp with a clean grassy-hop finish.',
    ingredients: ['Malted Barley', 'Rice', 'Hops'],
    category: 'Beer',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'beer-heineken',
    name: 'HEINEKEN',
    price: 70000,
    description: 'Premium international European pale lager crisp, clean, with a distinct bitter balance.',
    ingredients: ['Malted Barley', 'Water', 'A-Yeast', 'Hops'],
    category: 'Beer',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'beer-heineken-0',
    name: 'HEINEKEN 0.0',
    price: 70000,
    description: 'A refreshing non-alcoholic European lager, with the same crisp, clean, premium notes of typical Heineken.',
    ingredients: ['Water', 'Malted Barley', 'Hops extract'],
    category: 'Beer',
    menuType: 'cocktail',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    imageFit: 'contain'
  },
  {
    id: 'set-1',
    name: 'SET 1',
    price: 350000,
    description: '**Starter:** Chicken Salad, Garlic Butter, Rice Crackers, Char Siu Mantou. **Main Course:** Creamy Dreamy, Saime Pan. **Dessert:** Coco Toast, Mocktail.',
    ingredients: ['Chicken Salad', 'Garlic Butter', 'Rice Crackers', 'Char Siu Mantou', 'Creamy Dreamy', 'Saime Pan', 'Coco Toast', 'Mocktail'],
    category: 'Package',
    menuType: 'bistro',
    isSignature: true,
    isBestSeller: true,
    image: 'https://i.imgur.com/ss16RXf.jpeg'
  },
  {
    id: 'set-2',
    name: 'SET 2',
    price: 350000,
    description: '**Starter:** Chicken Salad, Garlic Butter, Rice Crackers, Char Siu Mantou. **Main Course:** Braised Pork Egg Noodle, Saime Comfort. **Dessert:** Coco Toast, Mocktail.',
    ingredients: ['Chicken Salad', 'Garlic Butter', 'Rice Crackers', 'Char Siu Mantou', 'Braised Pork Egg Noodle', 'Saime Comfort', 'Coco Toast', 'Mocktail'],
    category: 'Package',
    menuType: 'bistro',
    isSignature: true,
    image: 'https://i.imgur.com/i3C7dKv.jpeg'
  },
  {
    id: 'snack-combo',
    name: 'SNACK COMBO',
    price: 120000,
    description: '**Snack Combo:** Suitable for movie night or boardgames. Includes golden-crisped French fries, delicious chicken nuggets, and a chilled refreshing can of non-alcoholic beer.',
    ingredients: ['French Fries', 'Chicken Nuggets', 'Non-alcoholic Beer'],
    category: 'Package',
    menuType: 'bistro',
    isSignature: true,
    image: 'https://i.imgur.com/ap7smFP.jpeg'
  },
  {
    id: 'hd-chicken-rice',
    name: 'CHICKEN RICE',
    price: 100000,
    description: 'Nourishing roasted chicken breast served with sweet cherry tomatoes, dried chickpeas, refreshing yogurt sauce, cucumber, pickles, fresh salad, sweet corn, and wholesome brown rice.',
    ingredients: ['Cherry tomatoes', 'Chicken Breast', 'Dried chickpeas', 'Yogurt sauce', 'Cucumber', 'Pickles', 'Salad', 'Sweet corn', 'Brown rice'],
    category: 'Main Course',
    isHealthy: true,
    image: 'https://i.imgur.com/ip9gGre.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-double-chick-salad',
    name: 'DOUBLE CHICK SALAD',
    price: 100000,
    description: 'A protein-packed healthy salad with tomatoes, tender chicken breast, dried chickpeas, fresh cilantro yogurt sauce, peeled shallots, and crispy oatcakes.',
    ingredients: ['Tomato', 'Chicken Breast', 'Dried chickpeas', 'Cilantro yogurt sauce', 'Peeled shallots', 'Oatcakes'],
    category: 'Salad & Sides',
    isHealthy: true,
    image: 'https://i.imgur.com/4fL4Plg.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-rainbow-plate',
    name: 'RAINBOW PLATE',
    price: 85000,
    description: 'A colorful and vibrant bowl combining organic chicken eggs, white beans, sweet cherry tomatoes, corn, cucumber, rich Oba Feta Cheese, dried chickpeas, and mustard oil sauce.',
    ingredients: ['Chicken eggs', 'White beans', 'Cherry tomatoes', 'Sweet corn', 'Cucumber', 'Oba Feta Cheese', 'Dried chickpeas', 'Mustard oil sauce'],
    category: 'Salad & Sides',
    isHealthy: true,
    isVegetarian: true,
    image: 'https://i.imgur.com/pEowX5f.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-tuna-salad',
    name: 'TUNA SALAD',
    price: 100000,
    description: 'A fresh, refreshing salad featuring flaky tuna, crisp purple lettuce sprouts, cherry tomatoes, cucumbers, mild peeled shallots, white onions, sweet corn, and hard-boiled chicken eggs.',
    ingredients: ['Salad', 'Purple lettuce', 'Sprouts', 'Cherry tomatoes', 'Cucumber', 'Peeled shallots', 'White onion', 'Tuna', 'Sweet corn', 'Chicken eggs'],
    category: 'Salad & Sides',
    isHealthy: true,
    image: 'https://i.imgur.com/M2VzIgp.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-white-fish-rice',
    name: 'WHITE FISH RICE',
    price: 130000,
    description: 'Delectable Basa fish fillet seared in a touch of unsalted butter, served with cherry tomatoes, dried chickpeas, mustard oil sauce, cucumbers, pickles, fresh salad greens, sweet corn, and hearty brown rice.',
    ingredients: ['Cherry tomatoes', 'Basa Fish Fillet', 'Unsalted butter', 'Dried chickpeas', 'Mustard oil sauce', 'Cucumber', 'Pickles', 'Salad', 'Sweet corn', 'Brown rice'],
    category: 'Main Course',
    isHealthy: true,
    image: 'https://i.imgur.com/ItOr8cf.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-white-fish-salad',
    name: 'WHITE FISH SALAD',
    price: 130000,
    description: 'Flavorsome pan-seared Basa fish fillet prepared with unsalted butter, salt, and ground pepper, accompanied by fresh tomatoes, white beans, potatoes, bok choy, and mustard oil sauce.',
    ingredients: ['Tomato', 'Basa Fish Fillet', 'Mustard oil sauce', 'White beans', 'Potato', 'Bok choy', 'Unsalted butter', 'Salt', 'Ground pepper'],
    category: 'Salad & Sides',
    isHealthy: true,
    image: 'https://i.imgur.com/9hyK8n8.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  },
  {
    id: 'hd-yogurt-plate',
    name: 'YOGURT PLATE',
    price: 85000,
    description: 'A clean and satisfying wellness plate loaded with chicken eggs, cucumber, dried chickpeas, sweet cherry tomatoes, rich yogurt sauce, Oba Feta Cheese, and oatcakes.',
    ingredients: ['Chicken eggs', 'Cucumber', 'Dried chickpeas', 'Cherry tomatoes', 'Yogurt sauce', 'Oba Feta Cheese', 'Oatcakes'],
    category: 'Starters',
    isHealthy: true,
    isVegetarian: true,
    image: 'https://i.imgur.com/XvCA44G.jpeg',
    menuType: 'bistro',
    imageScale: 105,
    imageXOffset: 0,
    imageYOffset: 0,
    imageFit: 'cover',
    cardAspect: 'aspect-square'
  }
];

export const PREPOPULATED_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'g-1',
    name: 'Minh Thư Nguyễn',
    location: 'Hội An, Vietnam 🇻🇳',
    message: "Một viên ngọc nhỏ nằm giữa lòng phố cổ Hội An cổ kính. Món Bánh mì chảo Sài Mẽ và Coco Toast mang lại cảm giác thân thương vô vàn, giống như một buổi chiều thu mát mẻ lắng nghe tiếng chuông chùa tịnh mịch bên dòng sông Thu Bồn hiền hòa. Không gian vô cùng ấm áp, Communal Table cực kỳ kết nối!",
    avatarId: 1,
    timestamp: 'Just now'
  },
  {
    id: 'g-2',
    name: 'Aiden Vance',
    location: 'Melbourne, Australia 🇦🇺',
    message: "Visiting Hoi An for the very first time and stumbled upon Saime in a charming old-town alley. The 'Creamy Dreamy' smashed potato with braised pork is absolute food-heaven! The vibe with standard lanterns and historic yellow walls is super serene. Felt like an instant regular!",
    avatarId: 2,
    timestamp: '2 hours ago'
  },
  {
    id: 'g-3',
    name: 'Charlotte Higgins',
    location: 'London, UK 🇬🇧',
    message: "What an incredible destination in Hoi An! The Sea Salt Cream Cheese Brew and Coconut Croissant is an exquisite afternoon pairing after walking under the historic town's midday sun. Sitting at the long communal table chatting with people from all over was a highlight of my trip.",
    avatarId: 3,
    timestamp: '5 hours ago'
  },
  {
    id: 'g-4',
    name: 'Marcus Brody',
    location: 'San Francisco, USA 🇺🇸',
    message: "The signature cocktails here are world-class. Having 'The Saime Highball' with home-crafted ginger lemongrass shrub and Vietnamese whiskey under the warm, glowing Hoi An lanterns was pure bliss. Sensational hospitality!",
    avatarId: 4,
    timestamp: '1 day ago'
  },
  {
    id: 'g-5',
    name: 'Khánh Linh Hoàng',
    location: 'Da Nang, Vietnam 🇻🇳',
    message: "Là một người ăn chay, mình thực sự mê mẩn món Corn Wonton và Saime Comfort ngọt ngào ở đây! Hương vị ẩm thực bình dân nhưng được thổi hồn mới một cách tinh tế bên góc ban công ngập nắng Hội An thơ mộng. Nhất định sẽ rủ người thương ghé lại.",
    avatarId: 1,
    timestamp: '2 days ago'
  },
  {
    id: 'g-6',
    name: 'Cheryl Lim',
    location: 'Singapore 🇸🇬',
    message: "Exceptional value, beautiful aesthetics, and brilliant culinary execution. Saime resides in a wonderfully conserved ancient building that fits Hoi An's heritage but bursts with playful, fresh energy. The deconstructed Saime Pan meatball is a masterclass starter!",
    avatarId: 2,
    timestamp: '3 days ago'
  },
  {
    id: 'g-7',
    name: 'Liam McKenzie',
    location: 'Vancouver, Canada 🇨🇦',
    message: "After a lovely day cycling through Hoi An's countryside and green rice fields, Saime's Tropical Patio was the ultimate cozy escape. The chicken burger and a cold hibiscus chiller completely hitting the spot. The hosts treat you like family!",
    avatarId: 3,
    timestamp: '4 days ago'
  },
  {
    id: 'g-8',
    name: 'Kiri Te Wiata',
    location: 'Auckland, New Zealand 🇳🇿',
    message: "The absolute perfect bridge between traditional flavors and contemporary culinary style! I loved how they integrated wild organic honey and local aromatic combava lime leaves. Meeting the friendly kitchen team was an absolute treat.",
    avatarId: 4,
    timestamp: '5 days ago'
  },
  {
    id: 'g-9',
    name: 'Siriwat Prasert',
    location: 'Bangkok, Thailand 🇹🇭',
    message: "As a Thai foodie, I am incredibly obsessed with the wonderful balance of sweet, savory, sour, and spicy in their crispy Saime Wonton and spicy chicken salad! Brilliant soundtrack, lovely rustic vibe, and gorgeous lanterns hanging in the garden.",
    avatarId: 1,
    timestamp: '6 days ago'
  },
  {
    id: 'g-10',
    name: 'Wei-Ting Chen',
    location: 'Taipei, Taiwan 🇹🇼',
    message: "在這家位於會安古城的老屋餐廳裡，我品嚐到了最驚艷的冷萃羅布斯塔濃縮馬丁尼！將當地煉乳與伏特加調和，配上柔和的黃色燈光和老唱盤爵士樂，簡真太令人愜意與沉醉了。",
    avatarId: 2,
    timestamp: '1 week ago'
  },
  {
    id: 'g-11',
    name: 'Sofia Rodriguez',
    location: 'Oaxaca, Mexico 🇲🇽',
    message: "Outstanding fusion! The caramelized char siu stuffed into soft, fluffy steamed mantou buns is breathtaking. The warm, lively dining room at Saime feels exactly like the genuine, heartfelt hospitality of our native Mexico. Mucho amor from Oaxaca!",
    avatarId: 3,
    timestamp: '1 week ago'
  },
  {
    id: 'g-12',
    name: 'James Sterling',
    location: 'Edinburgh, UK 🇬🇧',
    message: "Hoi An has no shortage of beautiful restaurants, but Saime stands tall as our absolute favorite for modern energy and creative perfection. The Nightfall Negroni is aged beautifully and finished with torched orange peel. Simply stellar, we visited twice in one stay!",
    avatarId: 4,
    timestamp: '2 weeks ago'
  },
  {
    id: 'g-13',
    name: 'Hannah Brooks',
    location: 'Boston, USA 🇺🇸',
    message: "I am absolutely blown away by Saime! The vibe represents a exquisite contrast of traditional yellow walls with neon undertones. The Pork Skewers are smokey, juicy, and perfect to combine with a local craft beer. Super polite staff overall!",
    avatarId: 1,
    timestamp: '2 weeks ago'
  },
  {
    id: 'g-14',
    name: 'Hoài Nam Trần',
    location: 'Hanoi, Vietnam 🇻🇳',
    message: "Vị trí nằm sâu trong ngõ nhỏ của phổ cổ vô cùng yên bình, tách biệt khói bụi. Cà phê trứng muối tại đây có lớp foam béo ngậy, cốt đậm đà chuẩn gu người Hà Nội. Điểm 10 cho dịch vụ chu đáo và chuyên nghiệp tuyệt đối!",
    avatarId: 2,
    timestamp: '2 weeks ago'
  },
  {
    id: 'g-15',
    name: 'Oliver Wright',
    location: 'London, UK 🇬🇧',
    message: "Simply phenomenal food! The Vietnamese coffee martini is an amazing, rich digestif. If you are seeking friendly conversations, have a seat at the central long table—met four wonderful travelers tonight! Truly a memorable Hoi An dinner.",
    avatarId: 3,
    timestamp: '3 weeks ago'
  },
  {
    id: 'g-16',
    name: 'Yuki Tanaka',
    location: 'Sydney, Australia 🇦🇺',
    message: "Such a warm, inviting oasis after exploring the Lantern Market. The smashed potatoes with pork is an incredible fusion of simple textures. And that green courtyard patio is so lush! Will absolutely recommend to all Japanese and Aussie friends.",
    avatarId: 4,
    timestamp: '3 weeks ago'
  },
  {
    id: 'g-17',
    name: 'Chloé Dubreuil',
    location: 'Montreal, Canada 🇨🇦',
    message: "Une pépite absolue à Hội An! Highly creative snacks, lovely ambient music selection, and exceptional staff. Sat in the cozy corner overlooking the historic brickwork architecture. Merci beaucoup to the incredible hosts!",
    avatarId: 1,
    timestamp: '3 weeks ago'
  },
  {
    id: 'g-18',
    name: 'Mateo Cárdenas',
    location: 'Cancun, Mexico 🇲🇽',
    message: "What a delight! The spicy tamarind glaze on their crispy wings brought me straight back to Mexican street food notes but with local Vietnamese herbs. A masterclass in casual dining in a historic old house. Viva Saime!",
    avatarId: 2,
    timestamp: '3 weeks ago'
  },
  {
    id: 'g-19',
    name: 'Suphakit Jaiyen',
    location: 'Chiang Mai, Thailand 🇹🇭',
    message: "The coconut coffee and pastry here is easily the best combination I’ve tasted in Vietnam. It fits Chiang Mai's slow cafe culture but has a gorgeous ancient town vibe. The garden area is incredibly photogenic and refreshing!",
    avatarId: 3,
    timestamp: '4 weeks ago'
  },
  {
    id: 'g-20',
    name: 'Mei-Ling Wu',
    location: 'Hsinchu, Taiwan 🇹🇼',
    message: "這家店的招牌炸雲吞跟會安古城的氛圍太搭了！外皮極其酥脆，特調沾醬微辣而甜美，層次非常豐富。坐在挑高木造老屋裡用餐，搭配復古吊扇與溫潤的吊燈，簡直是極致的視覺與味覺體驗。",
    avatarId: 4,
    timestamp: '1 month ago'
  },
  {
    id: 'g-21',
    name: 'Darren Tan',
    location: 'Singapore 🇸🇬',
    message: "High-spec execution on local favorites. Saime maintains the highest standards of cleanliness and flavor control. The pricing is unbelievably friendly for this level of boutique hospitality. Highly recommended for couples and small families!",
    avatarId: 1,
    timestamp: '1 month ago'
  },
  {
    id: 'g-22',
    name: 'Grace Thompson',
    location: 'Wellington, New Zealand 🇳🇿',
    message: "Beautiful, heartfelt hospitality! The organic honey and lime juice mocktail is ridiculously clean. This place captures the real essence of Hoi An's warmth and friendliness without being pretentious inside a conserved building. Absolutely lovely!",
    avatarId: 2,
    timestamp: '1 month ago'
  },
  {
    id: 'g-23',
    name: 'Tú Anh Lê',
    location: 'HCMC, Vietnam 🇻🇳',
    message: "Nhà mình đi 6 người đặt bàn Chef's Counter cực kỳ mãn nhãn. Món bánh mì chảo Saime có sốt pate béo và phô mai kéo sợi thơm ngậy, ăn kèm bánh mì nóng giòn rôm rốp rât sướng. Không gian lãng mạn, nhạc jazz xưa rất chill.",
    avatarId: 3,
    timestamp: '1 month ago'
  },
  {
    id: 'g-24',
    name: 'Jack Fletcher',
    location: 'New York, USA 🇺🇸',
    message: "The attention to detail here is incredible—from the custom branded red ceramics to the beautiful ambient warm lighting. The Char Siu pork melts in your mouth. A perfect, flawless culinary haven in the heart of old Hoi An.",
    avatarId: 4,
    timestamp: '1 month ago'
  },
  {
    id: 'g-25',
    name: 'Emma Watson',
    location: 'Manchester, UK 🇬🇧',
    message: "Superb cocktails! The infusion of lotus leaf tea into gin is absolute genius. It adds a lovely botanical, floral nose to the Negroni. The garden patio with local yellow flowers is an absolute dream for taking photos. Cheers!",
    avatarId: 1,
    timestamp: '1 month ago'
  },
  {
    id: 'g-26',
    name: 'Lucas Bouchard',
    location: 'Toronto, Canada 🇨🇦',
    message: "This place deserves a culinary medal! Exceptional deconstructed meatball skillet with warm baguette. Outstanding service—the team explained the cultural background of every dish beautifully. An absolute highlight of my Vietnam journey.",
    avatarId: 2,
    timestamp: '2 months ago'
  },
  {
    id: 'g-27',
    name: 'Isabella Russo',
    location: 'Auckland, New Zealand 🇳🇿',
    message: "Such a beautiful, relaxed local gem! The salt cream Robusta cold brew is smooth like velvet. Love the shared communal table concept–we sat down as strangers and left with friends for life. Love Saime!",
    avatarId: 3,
    timestamp: '2 months ago'
  },
  {
    id: 'g-28',
    name: 'Piyawat Srisai',
    location: 'Phuket, Thailand 🇹🇭',
    message: "An absolute food trip destination. The balance of heat and sweetness in the spicy lemongrass noodles is phenomenal. The hospitality reminds me of Thailand’s best boutique spots. We visited Hoi An only for 3 days and ate here twice!",
    avatarId: 4,
    timestamp: '2 months ago'
  },
  {
    id: 'g-29',
    name: 'Tz-Yu Huang',
    location: 'Taichung, Taiwan 🇹🇼',
    message: "這是我在越南最喜歡的一餐！主廚親自跟我們介紹食材來源，採用當地的香草與野生蜂蜜，把簡單的日常料理料理得如同法餐般精緻。強烈推薦椰香可頌跟手沖黑咖啡！",
    avatarId: 1,
    timestamp: '2 months ago'
  },
  {
    id: 'g-30',
    name: 'Xavier Lopez',
    location: 'Guadalajara, Mexico 🇲🇽',
    message: "Amazing atmosphere! The design has this gorgeous, weathered historic yellow finish combined with modern lighting. Every bite of the spicy chicken salad is packed with pure, aromatic flavor. Outstanding hospitality, a 5-star experience!",
    avatarId: 2,
    timestamp: '2 months ago'
  },
  {
    id: 'g-31',
    name: 'Chloe Teo',
    location: 'Singapore 🇸🇬',
    message: "Excellent food and wonderful vibes. The deconstructed banh mi chảo style plate is perfect for sharing. Sitting by the wooden balcony listening to the birds in the leafy garden under glowing lanterns is simply magical. A must-visit in Hoi An!",
    avatarId: 3,
    timestamp: '2 months ago'
  },
  {
    id: 'g-32',
    name: 'William Henderson',
    location: 'Brisbane, Australia 🇦🇺',
    message: "Saime captures the perfect mood. Very relaxed, great playlist, extremely cold beer, and outstanding food craftsmanship. The BBQ pork shoulder skewers are simply spectacular. My absolute favorite spot in Hoi An!",
    avatarId: 4,
    timestamp: '2 months ago'
  },
  {
    id: 'g-33',
    name: 'Hương Giang Phạm',
    location: 'Nha Trang, Vietnam 🇻🇳',
    message: "Rất may mắn được bạn giới thiệu ghé Saime. Cơm chảo với sườn sốt chua ngọt siêu đỉnh, hạt cơm dẻo thơm, sườn mềm dóc xương ngấm đẫm gia vị. Các bạn nhân viên cực kỳ dễ thương và niềm nở đón tiếp nhiệt tình.",
    avatarId: 1,
    timestamp: '3 months ago'
  },
  {
    id: 'g-34',
    name: 'Sophia Clark',
    location: 'Seattle, USA 🇺🇸',
    message: "Perfect balance of flavors. The lemongrass and ginger highball is highly refreshing after walking through the ancient town. The wooden furniture, local art items, and warm yellow lights make you want to linger for hours.",
    avatarId: 2,
    timestamp: '3 months ago'
  },
  {
    id: 'g-35',
    name: 'Benjamin Ross',
    location: 'Glasgow, UK 🇬🇧',
    message: "Exquisite dining! The slow-pressed pineapple and wild honey juice is superb. Met and chatted with lovely local hosts over the coffee counter. Saime is an incredible showcase of beautiful, contemporary Vietnamese culinary scene.",
    avatarId: 3,
    timestamp: '3 months ago'
  },
  {
    id: 'g-36',
    name: 'Amélie Gauthier',
    location: 'Quebec City, Canada 🇨🇦',
    message: "Tout était absolument magnifique! Le service était chaleureux et attentionné, la nourriture débordait de saveurs fraîches et le patio tropical est un havre de paix exceptionnel au milieu de l'aventure. Coup de cœur absolu à Hội An!",
    avatarId: 4,
    timestamp: '3 months ago'
  }
];
