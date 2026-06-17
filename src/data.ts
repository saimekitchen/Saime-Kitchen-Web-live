import { MenuItem, GuestbookEntry } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Banh Mi & Burgers
  {
    id: 'chicken-burger',
    name: 'CHICKEN BURGER',
    price: 110000,
    description: 'Crispy chicken with melted slice of cheese, fresh lettuce, sliced tomato, white & purple cabbage slaw, onion, and a house-special vinaigrette mayonnaise sauce.',
    ingredients: ['Crispy chicken', 'Lettuce', 'Sliced cheese', 'Tomato', 'Ketchup', 'White & purple cabbage', 'Onion', 'Vinaigrette', 'Mayonnaise'],
    category: 'Banh Mi & Burgers',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'beef-burger',
    name: 'BEEF BURGER',
    price: 160000,
    description: 'Savory flame-grilled ground beef patty with breadcrumbs, crispy bacon, melted cheese, a sunny-side-up egg, lettuce, tomato, masterfully matched with mayonnaise, ketchup, and mustard on a toasted sesame bun.',
    ingredients: ['Ground beef', 'Breadcrumbs', 'Onion', 'Lettuce', 'Tomato', 'Bacon', 'Sliced cheese', 'Egg', 'Mayonnaise', 'Ketchup', 'Mustard'],
    category: 'Banh Mi & Burgers',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'banh-mi-char-siu',
    name: 'BANH MI CHAR SIU',
    price: 50000,
    description: 'Crisp Vietnamese baguette loaded with succulent caramelized char siu pork meat, rich savory pâté, cucumber slices, fresh lettuce, and house-made crunchy Vietnamese pickles.',
    ingredients: ['Banh mi Baguette', 'Char siu meat', 'Pâté', 'Cucumber', 'Vietnamese pickles', 'Lettuce'],
    category: 'Banh Mi & Burgers',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1600454021970-351feb4a5554?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'saime-pan',
    name: 'SAIME PAN',
    price: 65000,
    description: 'Deconstructed street-style feast served hot: Sizzling pan with a juicy Saime recipe meatball, perfectly soft egg, creamy pâté, artisanal Vietnamese sausage, pickles, coriander, and light soy sauce, served with a crispy warm banh mi.',
    ingredients: ['Banh mi Baguette', 'Saime meatball', 'Egg', 'Pâté', 'Vietnamese pickles', 'Soy sauce', 'Coriander', 'Vietnamese sausage'],
    category: 'Banh Mi & Burgers',
    isSignature: true,
    isBestSeller: true,
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
    category: 'Snacks & Starters',
    isSignature: true,
    flipHorizontal: true,
    image: '/src/assets/images/regenerated_image_1781685669737.jpg'
  },
  {
    id: 'saime-wonton',
    name: 'SAIME WONTON',
    price: 45000,
    description: 'Golden-fried crispy wontons generously filled with seasoned pork and shrimp siu mai elements, served with cool Vietnamese pickles, mayonnaise, and dynamic chili sauce.',
    ingredients: ['Wonton wrappers', 'Siu mai filling', 'Mayonnaise', 'Chili sauce', 'Vietnamese pickles'],
    category: 'Snacks & Starters',
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
    category: 'Snacks & Starters',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781685880303.jpg'
  },
  {
    id: 'cracker',
    name: 'CRACKER',
    price: 45000,
    description: 'Sensational crispy crunchy rice paper base topped with aromatic scallion oil, savory pork floss, signature spread of pâté, completed with Umami fish sauce syrup.',
    ingredients: ['Crispy rice base', 'Pâté', 'Scallion oil', 'Pork floss', 'Fish sauce'],
    category: 'Snacks & Starters',
    image: '/src/assets/images/regenerated_image_1781685883138.jpg'
  },

  // Mains & Pastas
  {
    id: 'creamy-dreamy',
    name: 'CREAMY DREAMY',
    price: 115000,
    description: 'An indulgent mash-up: silky rich whipped smashed potatoes loaded with high-grade caramelized braised pork belly, garnished with tender bamboo shoots to deliver absolute comfort.',
    ingredients: ['Smashed potato', 'Braised pork belly', 'Bamboo shoots'],
    category: 'Mains & Pastas',
    isSignature: true,
    image: '/src/assets/images/regenerated_image_1781685661034.jpg'
  },
  {
    id: 'bolognese-spaghetti',
    name: 'BOLOGNESE SPAGHETTI',
    price: 130000,
    description: 'Robust, comforting spaghetti tossed in slow-simmered beef ragout with fine red wine, carrots, onions, celery, and tomatoes, finished with a generous dusting of grated parmesan.',
    ingredients: ['Spaghetti', 'Ground beef', 'Celery', 'Onion', 'Tomato', 'Carrot', 'Red wine', 'Parmesan cheese'],
    category: 'Mains & Pastas',
    image: '/src/assets/images/regenerated_image_1781686324721.jpg'
  },
  {
    id: 'creamy-pasta',
    name: 'CREAMY PASTA',
    price: 120000,
    description: 'Artisanal pasta coated in rich, velvety heavy cream and unsalted butter sauce, crowded with premium pan-grilled king oyster mushrooms, sweet onions, and sharp parmesan cheese.',
    ingredients: ['Pasta', 'King oyster mushrooms', 'Onion', 'Whipping cream', 'Unsalted butter', 'Parmesan cheese'],
    category: 'Mains & Pastas',
    image: '/src/assets/images/regenerated_image_1781686329083.jpg'
  },
  {
    id: 'saime-comfort',
    name: 'SAIME COMFORT',
    price: 45000,
    description: 'An authentic sweet-and-savory local classic of steamed sticky white corn kernels, creamed yellow mung beans, shredded coconut, toasted white sesame, crunchy crushed peanuts, and a sweet onion glaze.',
    ingredients: ['Steamed white corn', 'Steamed mung bean', 'Peanuts', 'White sesame', 'Shredded coconut', 'Onion'],
    category: 'Mains & Pastas',
    isVegetarian: true,
    isSignature: true,
    isBestSeller: true,
    isChefRecommend: true,
    image: '/src/assets/images/regenerated_image_1781685663912.jpg'
  },

  // Sides & Salads
  {
    id: 'chicken-salad',
    name: 'CHICKEN SALAD',
    price: 70000,
    description: 'Crispy golden batter chicken fillets on a vibrant clean bed of romaine lettuce, purple lettuce sprouts, sweet cherry tomatoes, sliced cucumbers, peeled sweet shallots, and onions, finished with an elegant spicy mayonnaise dressing.',
    ingredients: ['Crispy chicken', 'Lettuce', 'Purple lettuce sprout', 'Cherry tomatoes', 'Cucumber', 'Peeled shallots', 'Onion', 'Spicy mayonnaise'],
    category: 'Sides & Salads',
    isSpicy: true,
    image: '/src/assets/images/regenerated_image_1781686093776.jpg'
  },
  {
    id: 'garden-salad',
    name: 'GARDEN SALAD',
    price: 60000,
    description: 'A light, refreshing option centering crisp lettuce leaves, tender purple lettuce sprouts, colorful cherry tomatoes, crunchy cucumber, minced mild shallots, and yellow corn, drizzled in rich spicy mayonnaise.',
    ingredients: ['Lettuce', 'Purple lettuce sprout', 'Cherry tomatoes', 'Cucumber', 'Peeled shallots', 'Onion', 'Yellow corn', 'Spicy mayonnaise'],
    category: 'Sides & Salads',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781686107904.png'
  },
  {
    id: 'chicken-nugget',
    name: 'CHICKEN NUGGET',
    price: 65000,
    description: 'Golden-fried, extra-crispy chicken breast nuggets, perfect for dipping in Saime’s secret signature dipping sauce.',
    ingredients: ['Chicken breast nuggets', 'Special house dipping sauce'],
    category: 'Sides & Salads',
    image: '/src/assets/images/regenerated_image_1781686096329.jpg'
  },
  {
    id: 'garlic-bread',
    name: 'GARLIC BREAD',
    price: 45000,
    description: 'Toasted Vietnamese banh mi slices generously slathered in rich high-fat salted butter, minced local garlic, and fresh chopped coriander.',
    ingredients: ['Banh mi Baguette', 'Salted butter', 'Local garlic', 'Coriander'],
    category: 'Sides & Salads',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781686102459.jpg'
  },
  {
    id: 'french-fries',
    name: 'FRENCH FRIES',
    price: 45000,
    description: 'Classic double-cooked sea-salt crusted French fries, seasoned simple with ground black pepper.',
    ingredients: ['Premium potatoes', 'Sea salt', 'Pepper'],
    category: 'Sides & Salads',
    isVegetarian: true,
    image: '/src/assets/images/regenerated_image_1781686104887.jpg'
  },

  // Sweets
  {
    id: 'coco-toast',
    name: 'COCO TOAST',
    price: 80000,
    description: 'The ultimate dessert mashup: Crisped buttery caramelized banh mi cubes served with velvety smooth coconut ice-cream, toasted shredded coconut flesh, crushed peanuts, heavy cooking cream, and sweet condensed milk.',
    ingredients: ['Banh mi toast cubes', 'Coconut ice-cream', 'Shredded coconut', 'Peanut', 'Condensed milk', 'Milk', 'Cooking cream', 'Butter'],
    category: 'Sweets',
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
    category: 'Specialty Coffee',
    sizes: { S: 30000, M: 50000 },
    image: 'https://images.unsplash.com/photo-1510707577719-ee7c247c126e?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'americano-coffee',
    name: 'AMERICANO / LONG BLACK',
    price: 40000,
    description: 'Double shot of high-quality espresso diluted with water, delivering a clean, rich, and prolonged satisfying coffee flavor.',
    ingredients: ['Espresso shot', 'Diluted water'],
    category: 'Specialty Coffee',
    sizes: { S: 40000, M: 50000, L: 60000 },
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'cappuccino-coffee',
    name: 'CAPPUCCINO / FLAT WHITE',
    price: 60000,
    description: 'Silky microfiber steamed milk poured gently over a rich double shot of espresso. Balanced, warm and incredibly smooth.',
    ingredients: ['Fruity espresso', 'Steamed microfoam milk'],
    category: 'Specialty Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'caramel-macchiato',
    name: 'CARAMEL MACCHIATO',
    price: 60000,
    description: 'Espresso combined with sweet vanilla syrup and warm frothed milk, finished with an elegant drizzle of rich buttery caramel sauce.',
    ingredients: ['Espresso', 'Vanilla syrup', 'Frothed milk', 'Caramel drizzle'],
    category: 'Specialty Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53a?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'latte-coffee',
    name: 'LATTE',
    price: 60000,
    description: 'Traditional espresso shot balanced perfectly with smooth, silky steamed milk and a thin, elegant layer of milk foam on top.',
    ingredients: ['Espresso', 'Steamed milk', 'Velvet foam'],
    category: 'Specialty Coffee',
    sizes: { S: 60000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'salted-cream-latte',
    name: 'SALTED CREAM LATTE',
    price: 80000,
    description: 'Premium latte topped with our signature sweet-and-savory sea-salt cream foam that melts slowly into the rich espresso base.',
    ingredients: ['Espresso', 'Salted cream foam', 'Whole milk'],
    category: 'Specialty Coffee',
    sizes: { S: 80000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'mocha-coffee',
    name: 'MOCHA',
    price: 80000,
    description: 'Decadent espresso blended with premium rich dark cocoa, steamed milk, and a delicate topping of chocolate dust.',
    ingredients: ['Espresso', 'Dark chocolate', 'Steamed milk'],
    category: 'Specialty Coffee',
    sizes: { S: 80000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1620360262753-762fc047ac4b?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'black-coffee',
    name: 'VIETNAMESE BLACK COFFEE (Đen)',
    price: 30000,
    description: 'A traditional intense specialty Vietnamese slow-drip black coffee. Bold, full-bodied, and deeply aromatic (Cà phê đen).',
    ingredients: ['Traditional Robusta', 'Slow drip filter'],
    category: 'Specialty Coffee',
    sizes: { S: 30000, M: 40000, L: 50000 },
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'condensed-coffee',
    name: 'VIETNAMESE CONDENSED COFFEE (Sữa đá)',
    price: 45000,
    description: 'The staple Vietnamese sweet iced coffee. Bold slow-dripped Robusta combined with sweet, thick condensed milk (Cà phê sữa đá).',
    ingredients: ['Robusta coffee', 'Condensed milk', 'Iced blocks'],
    category: 'Specialty Coffee',
    sizes: { S: 45000, M: 55000, L: 60000 },
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'white-coffee',
    name: 'VIETNAMESE WHITE COFFEE (Bạc xỉu)',
    price: 50000,
    description: 'A beautiful sweet, milk-forward specialty. A comforting double layer of milk crowned with fragrant Vietnamese coffee (Bạc xỉu).',
    ingredients: ['Fresh milk', 'Condensed milk', 'Drip coffee splash'],
    category: 'Specialty Coffee',
    sizes: { S: 50000, M: 60000, L: 65000 },
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'salted-coffee',
    name: 'VIETNAMESE SALTED COFFEE (Muối)',
    price: 55000,
    description: 'A sensational local specialty originating from Hue. Rich drip coffee layered with dense salted milk foam for a perfect sweet-salty finish.',
    ingredients: ['Robusta drip', 'Salted cream foam', 'Condensed milk'],
    category: 'Specialty Coffee',
    sizes: { S: 55000, M: 65000, L: 70000 },
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'coconut-coffee',
    name: 'VIETNAMESE COCONUT COFFEE (Dừa)',
    price: 55000,
    description: 'A decadent icy treat. Refreshing frozen coconut milk smoothie topped with rich, intense traditional drip coffee.',
    ingredients: ['Blended coconut milk', 'Vietnamese drip coffee', 'Sweet milk'],
    category: 'Specialty Coffee',
    sizes: { S: 55000, M: 65000, L: 70000 },
    isSignature: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707caff?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'tamarind-tea',
    name: 'SAIME TAMARIND TEA (Palm Seed & Peanut)',
    price: 55000,
    description: 'Saime signature sweet and tart tamarind iced tea sweetened with wild honeys, loaded with soft palm seeds, and topped with crunchy roasted peanuts.',
    ingredients: ['Tamarind pulp', 'Wild honey', 'Palm seed', 'Roasted peanuts'],
    category: 'Non-Coffee',
    sizes: { S: 55000, M: 65000, L: 70000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'salted-kumquat',
    name: 'SALTED KUMQUAT REFRESHER',
    price: 65000,
    description: 'A deeply refreshing traditional remedy. Hand-shaken salted preserved kumquats sweetened with rock crystal sugar, served over crashed ice.',
    ingredients: ['Preserved kumquat', 'Salted plum zest', 'Rock sugar syrup'],
    category: 'Non-Coffee',
    sizes: { S: 65000, M: 75000, L: 85000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'pineapple-tea',
    name: 'TROPICAL PINEAPPLE TEA',
    price: 65000,
    description: 'Fruity organic black tea shaken with sweet tropical pineapple purée and loaded with real juicy crushed pineapple chunks.',
    ingredients: ['Black tea', 'Crushed pineapple', 'Sugar cane syrup'],
    category: 'Non-Coffee',
    sizes: { S: 65000, M: 75000, L: 85000 },
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'mango-tea',
    name: 'TROPICAL MANGO TEA',
    price: 65000,
    description: 'Bright premium tea combined with ripe, luscious local mango compote for a fruity and wonderfully sweet iced tea finish.',
    ingredients: ['Black tea', 'Local mango compote', 'Cane syrup'],
    category: 'Non-Coffee',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1553177174-1e202447ef3c?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'red-grapefruit-juzu',
    name: 'RED GRAPEFRUIT & JUZU',
    price: 65000,
    description: 'Crisp refreshing ruby red grapefruit infusion combined with aromatic Japanese yuzu citrus. A citrus floral powerhouse.',
    ingredients: ['Red grapefruit', 'Yuzu extract', 'Rock sugar syrup'],
    category: 'Non-Coffee',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'strawberry-tea',
    name: 'TROPICAL STRAWBERRY TEA',
    price: 65000,
    description: 'Fragrant shaken tea with fresh macerated local strawberries, sweet wild honey, and a touch of fresh mint leaves.',
    ingredients: ['Black tea', 'Macerated strawberries', 'Wild honey', 'Mint leaves'],
    category: 'Non-Coffee',
    sizes: { S: 65000, M: 75000, L: 85000 },
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'orange-juice',
    name: 'FRESH ORANGE JUICE',
    price: 60000,
    description: '100% pure freshly-squeezed premium sweet oranges with pulp. Juicy, sweet, and bursting with vitamins.',
    ingredients: ['Squeezed sweet oranges', 'Nothing else'],
    category: 'Non-Coffee',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'watermelon-juice',
    name: 'FRESH WATERMELON JUICE',
    price: 60000,
    description: 'Hydrating, perfectly sweet frozen pure watermelon juice. Clean, cold, and refreshing.',
    ingredients: ['Watermelon slices', 'Crushed ice'],
    category: 'Non-Coffee',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'passionfruit-juice',
    name: 'FRESH PASSIONFRUIT JUICE',
    price: 60000,
    description: 'Refreshing sweet-and-sour local passionfruit juice, loaded with beneficial organic zests.',
    ingredients: ['Passionfruit pulp', 'Rock sugar syrup'],
    category: 'Non-Coffee',
    sizes: { M: 60000 },
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'matcha-latte',
    name: 'PREMIUM MATCHA LATTE',
    price: 85000,
    description: 'Pure, authentic stone-ground Japanese Uji Matcha whisked into hot or cold silky whole milk.',
    ingredients: ['Uji Matcha', 'Whole milk', 'Syrup'],
    category: 'Non-Coffee',
    sizes: { S: 85000, M: 110000, L: 120000 },
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'matcha-coconut',
    name: 'PREMIUM MATCHA COCONUT',
    price: 95000,
    description: 'A dreamy tropical treat. A perfect layer of intense earthy green tea poured over rich, sweet local coconut milk.',
    ingredients: ['Uji Matcha', 'Coconut milk', 'Sweet milk'],
    category: 'Non-Coffee',
    sizes: { S: 95000, M: 115000, L: 125000 },
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'matcha-salted-cream',
    name: 'PREMIUM MATCHA SALTED CREAM',
    price: 95000,
    description: 'Matcha latte crowned with our thick, velvety, savory-sweet sea-salt cream foam for a decadent multi-tiered sip.',
    ingredients: ['Uji Matcha', 'Salted cheese cream', 'Fresh milk'],
    category: 'Non-Coffee',
    sizes: { S: 95000, M: 115000, L: 125000 },
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'matcha-cream',
    name: 'DOUBLE-STRENGTH MATCHA CREAM',
    price: 110000,
    description: 'An elite double-strength dark green tea layered beautifully over sweetened milk cream. Pure matcha indulgence.',
    ingredients: ['Extra Uji Matcha', 'Whipped dairy cream', 'Whole milk'],
    category: 'Non-Coffee',
    sizes: { S: 110000, M: 125000, L: 140000 },
    image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'chocolate-latte',
    name: 'SAIME CHOCOLATE LATTE',
    price: 70000,
    description: 'Rich dark Belgian single-origin chocolate melted down and hand-blended with silky warm or cold whole milk.',
    ingredients: ['Premium Belgian chocolate', 'Steamed whole milk'],
    category: 'Non-Coffee',
    sizes: { S: 70000, M: 90000, L: 100000 },
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'avocado-smoothie',
    name: 'LUSCIOUS AVOCADO SMOOTHIE',
    price: 80000,
    description: 'Creamy local organic avocado blended ultra-smooth with condensed milk and crushed ice. Rich, nourishing, and thick.',
    ingredients: ['Avocado', 'Condensed milk', 'Iced blocks'],
    category: 'Non-Coffee',
    sizes: { M: 80000 },
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'mango-smoothie',
    name: 'MANGO DREAM SMOOTHIE',
    price: 70000,
    description: 'Rich frozen local mango chunks whipped into a thick, velvet-smooth, refreshingly chilled tropical sorbet.',
    ingredients: ['Ripe golden mango', 'Purée syrup', 'Iced blocks'],
    category: 'Non-Coffee',
    sizes: { M: 70000 },
    image: 'https://images.unsplash.com/photo-1623065426473-95aa2ad61ff7?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'coke-soft',
    name: 'COCA-COLA (Classic / Light / Zero)',
    price: 45000,
    description: 'Refreshing classic carbonated soft drink served ice-cold (320ml Can). Option for Light or Zero sugar.',
    ingredients: ['Chilled soft drink', 'Ice column'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'sprite-soft',
    name: 'SPRITE',
    price: 45000,
    description: 'Crisp, sparkling lemon-lime zero-caffeine soda to refresh your palate (320ml Can).',
    ingredients: ['Chilled Sprite can', 'Ice column'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1527960656366-ee12a07d0736?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'tonic-soft',
    name: 'TONIC / GINGER ALE',
    price: 45000,
    description: 'Crisp bubbly premium standard mixers served ice-cold, perfect side for a sunny day (320ml Can).',
    ingredients: ['Premium carbonation', 'Bitters extract'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'singha-soda',
    name: 'SINGHA SODA WATER',
    price: 45000,
    description: 'Superbly carbonated, highly-gaseous crisp soda water from Thailand (325ml Can). Perfect for ultimate refreshment.',
    ingredients: ['Carbonation maximum'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'huda-beer',
    name: 'HUDA BEER',
    price: 55000,
    description: 'Central Vietnam’s proud local heritage lager brewed in Hue. Light, crisp, with a gentle malt finish (330ml Can).',
    ingredients: ['Hops', 'Malt', 'Central waters'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1608270176054-8a7300fbc421?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'saigon-beer',
    name: 'SAIGON BEER',
    price: 55000,
    description: 'Traditional iconic Vietnamese export beer. Rich taste profile, full carbonation, deep gold color (330ml Can).',
    ingredients: ['Rice & wheat fermentation'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1608270176054-8a7300fbc421?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'heineken-beer',
    name: 'HEINEKEN / HEINEKEN 0.0',
    price: 70000,
    description: 'Premium international pale lager beer. Option for traditional recipe or 0.0% non-alcoholic version (250ml Can).',
    ingredients: ['A-yeast', 'Fermented barley'],
    category: 'Non-Coffee',
    image: 'https://images.unsplash.com/photo-1608270176054-8a7300fbc421?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },
  {
    id: 'coconut-croissant',
    name: 'COCO CROISSANT',
    price: 50000,
    description: 'Flaky baked golden butter pastry filled with rich custard, young sweet coconut flesh, and sprinkled with crispy toasted pandan sweet rice nuggets.',
    ingredients: ['Croissant', 'Young Coconut Custard', 'Pandan Rice Nuggets', 'Powdered Sugar'],
    category: 'Fresh Pastry & Bites',
    isSignature: true,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    menuType: 'cafe'
  },

  // 🍸 COCKTAIL MENU ITEMS (Midnight, sleek vibe)
  {
    id: 'saime-highball',
    name: 'THE SAIME HIGHBALL',
    price: 150000,
    description: 'Smoked local single malt whiskey, house-crafted ginger & lemongrass spice shrub, fresh club soda, and standard lime disk, served over pure crystal ice columns.',
    ingredients: ['Vietnamese Single Malt', 'Ginger Lemongrass Shrub', 'Club Soda', 'Lemongrass Stalk'],
    category: 'Spring',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail',
    cocktailStyle: 'Signature'
  },
  {
    id: 'espresso-martini-vn',
    name: 'ROBUSTA ESPRESSO MARTINI',
    price: 160000,
    description: 'Intense cold extraction robusta brew, premium grain vodka, sweet local condensed milk liqueur, shaken hard with ice and topped with toasted cocoa dust.',
    ingredients: ['Cold Extraction Robusta', 'Premium Vodka', 'Condensed Milk Liqueur', 'Cocoa Dust'],
    category: 'Winter',
    image: 'https://images.unsplash.com/photo-1545696911-c43612a1f93f?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail',
    cocktailStyle: 'Modern'
  },
  {
    id: 'nightfall-negroni',
    name: 'HOI AN NIGHTFALL NEGRONI',
    price: 180000,
    description: 'Lotus tea-leaves infused premium gin, bitter Campari, sweet Italian Vermouth, aged for 3 weeks and served with a beautiful caramelized torched orange zest.',
    ingredients: ['Lotus Leaf Gin', 'Campari', 'Sweet Vermouth', 'Torched Orange Peel'],
    category: 'Autumn',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail',
    cocktailStyle: 'Signature'
  },
  {
    id: 'berry-sour',
    name: 'BERRY SOUR SYMPHONY',
    price: 140000,
    description: 'White sugarcane rum macerated with wild mountain berries, direct honey water, fresh key lime, egg white foam, and dried micro rose petals.',
    ingredients: ['Rum', 'Wild Mountain Berries', 'Honey Water', 'Lime Juice', 'Egg White'],
    category: 'Autumn',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail',
    cocktailStyle: 'Classic'
  },
  {
    id: 'virgin-coco-mojito',
    name: 'VIRGIN COCO MOJITO',
    price: 65000,
    description: 'Refreshing combination of crushed fresh mint, lime juice, homemade cane syrup, and creamy organic coconut water, served with shaved ice and dried coconut flake.',
    ingredients: ['Fresh Mint', 'Lime Juice', 'Cane Syrup', 'Coconut Water', 'Shaved Ice'],
    category: 'Summer',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail'
  },
  {
    id: 'tropical-sunriser',
    name: 'TROPICAL SUNRISER ELIXIR',
    price: 65000,
    description: 'A vibrant blend of freshly squeezed passion fruit juice, slow-pressed pineapple nectar, wild honey, topped with sparkling high-fizz club soda and sweet basil seeds.',
    ingredients: ['Passion Fruit Juice', 'Pineapple Nectar', 'Wild Honey', 'Club Soda', 'Basil Seeds'],
    category: 'Summer',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80',
    menuType: 'cocktail'
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
