import { CocktailItem } from '../types';
import { HARDCODED_IMAGES } from './hardcodedImages';

const BASE_COCKTAIL_ITEMS: CocktailItem[] = [
  // ==========================================
  // --- NORTH VIETNAM (Miền Bắc - 4 Cocktails) ---
  // ==========================================
  {
    id: 'cocktail-pho',
    name: 'Phở',
    nameVi: 'Phở',
    category: 'north',
    region: 'north',
    price: '220,000 ₫',
    tagline: 'Gin / Triple Sec / Corriander / Cinnamon / Black Cardamom / Star Anise / Bay Leaf / Lime',
    taglineVi: 'Gin / Rượu Triple Sec / Ngò rí / Quế / Thảo quả / Hoa hồi / Lá nguyệt quế / Chanh',
    description: 'Inspired by the timeless soul of Hanoi’s iconic soup. Dry gin infused with toasted star anise, cinnamon, black cardamom, and fragrant bay leaf, brightened by citrusy Triple Sec, fresh coriander, and crisp lime juice.',
    descriptionVi: 'Hương vị tinh hoa của bát phở Hà Nội được tái sinh trong ly cocktail: Gin thảo mộc ủ hoa hồi, quế, thảo quả nướng và lá nguyệt quế thơm nồng, quyện cùng Triple sec, ngò rí tươi và chanh thanh mát.',
    glassware: 'Coupe Glass',
    abv: '18% ABV',
    flavorNodes: ['Pho Spices', 'Warm Star Anise', 'Citrus & Coriander'],
    flavorNodesVi: ['Gia Vị Phở', 'Hồi Quế Nồng Nàn', 'Ngò Rí & Chanh'],
    ingredients: [
      'Gin',
      'Triple sec',
      'Corriander',
      'Cinnamon',
      'Black cardamom',
      'Star anise',
      'Bay leaf',
      'Lime'
    ],
    ingredientsVi: [
      'Gin',
      'Rượu Triple sec',
      'Ngò rí',
      'Quế',
      'Thảo quả',
      'Hoa hồi',
      'Lá nguyệt quế',
      'Chanh'
    ],
    primaryImage: 'https://i.imgur.com/SOypJCj.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#c99a52', '#362312', '#f4eedd'],
    funFact: 'Traditional pho spices are dry-toasted over open flames before spirit infusion to unlock deep woodsy aromatics.',
    funFactVi: 'Gia vị phở được sao thơm trên lửa nhỏ trước khi ủ rượu để đánh thức tầng hương mộc mạc đặc trưng.',
    pairing: {
      foodId: 'food-bo',
      foodName: 'Bò',
      foodNameVi: 'Bò',
      notes: 'The rich Wagyu striploin and bone marrow jus harmonize effortlessly with aromatic pho botanicals.',
      notesVi: 'Bò Wagyu áp chảo cùng sốt tủy xương hòa quyện tuyệt vời với tầng hương thảo mộc của phở.'
    }
  },
  {
    id: 'cocktail-com',
    name: 'Cốm',
    nameVi: 'Cốm',
    category: 'north',
    region: 'north',
    price: '220,000 ₫',
    tagline: 'Vodka Nếp Mới / Green Rice Flakes / Coconut / Pandan Leaves / Soda',
    taglineVi: 'Vodka Nếp Mới / Cốm / Dừa / Lá dứa / Soda',
    description: 'Capturing the poetic fragrance of Hanoi autumn. Vietnamese Nếp Mới rice vodka infused with young green rice flakes (cốm) and aromatic pandan leaves, softened with luscious coconut and topped with gentle soda effervescence.',
    descriptionVi: 'Gói trọn sắc thu Hà Nội dịu dàng: Vodka nếp mới ngâm hạt cốm non xanh mướt và lá dứa ngát hương, hòa cùng vị béo thanh của dừa và bọt soda lăn tăn sảng khoái.',
    glassware: 'Highball Glass',
    abv: '14% ABV',
    flavorNodes: ['Young Green Rice', 'Fragrant Pandan', 'Creamy Coconut'],
    flavorNodesVi: ['Hương Cốm Non', 'Lá Dứa Thơm Ngát', 'Dừa Thanh Dịu'],
    ingredients: [
      'Vodka nếp mới',
      'Green rice flakes',
      'Coconut',
      'Panda leaves',
      'Soda'
    ],
    ingredientsVi: [
      'Vodka nếp mới',
      'Cốm',
      'Dừa',
      'Lá dứa',
      'Soda'
    ],
    primaryImage: 'https://i.imgur.com/thJkIEV.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#8ea963', '#ebf2dc', '#2f3b1f'],
    funFact: 'Hand-pounded Vòng village green rice yields a sweet nutty malt aroma distinct to Northern autumnal traditions.',
    funFactVi: 'Hạt cốm non làng Vòng giã tay mang lại nốt hương lúa non thơm ngọt đặc trưng của mùa thu phương Bắc.',
    pairing: {
      foodId: 'food-nep',
      foodName: 'Nếp',
      foodNameVi: 'Nếp',
      notes: 'Double sticky rice harmony where grilled rice crisp meets fragrant green rice cocktail.',
      notesVi: 'Sự kết hợp đồng điệu giữa nếp nướng giòn rụm và cocktail cốm thanh khiết.'
    }
  },
  {
    id: 'cocktail-cafe-trung',
    name: 'Cafe trứng',
    nameVi: 'Cafe trứng',
    category: 'north',
    region: 'north',
    price: '220,000 ₫',
    tagline: 'Vodka / Kahlúa / Phin Coffee / Egg / Condensed Milk',
    taglineVi: 'Vodka / Kahlúa / Cà phê phin / Trứng / Sữa đặc',
    description: 'The legendary Hanoi dessert coffee reimagined as a velvety cocktail. Intense dark phin-dripped Robusta coffee and Kahlúa shaken with vodka, capped with airy whipped golden egg foam and sweetened condensed milk.',
    descriptionVi: 'Tuyệt tác cà phê trứng phố cổ Hà Nội hóa thân thành ly cocktail mượt mà: Cà phê phin đậm đà cùng Kahlúa và vodka, phủ lên trên lớp kem trứng đánh bông vàng ươm béo ngậy cùng sữa đặc.',
    glassware: 'Short Stemmed Glass',
    abv: '16% ABV',
    flavorNodes: ['Dark Roasted Phin', 'Whipped Egg Custard', 'Velvety Sweetness'],
    flavorNodesVi: ['Cà Phê Phin Đậm', 'Kem Trứng Béo Mịn', 'Ngọt Ngào Êm Dịu'],
    ingredients: [
      'Vodka',
      'Kaulua',
      'Phin coffee',
      'Egg',
      'Condensed milk'
    ],
    ingredientsVi: [
      'Vodka',
      'Kahlúa',
      'Cà phê phin',
      'Trứng',
      'Sữa đặc'
    ],
    primaryImage: 'https://i.imgur.com/E9mES2v.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#3e271a', '#f5e4bc', '#a87545'],
    funFact: 'The egg yolk is whipped with condensed milk until dense enough to float serenely atop iced vodka coffee.',
    funFactVi: 'Lòng đỏ trứng gà ta được đánh bông mịn cùng sữa đặc để bồng bềnh nổi trên lớp cà phê phin lạnh.',
    pairing: {
      foodId: 'food-mam',
      foodName: 'Mắm',
      foodNameVi: 'Mắm',
      notes: 'The rich caramel coffee and egg custard balances the sweet-savory fish sauce ice cream.',
      notesVi: 'Vị béo ngậy của kem trứng và cà phê nâng tầm món kem nước mắm caramel độc đáo.'
    }
  },
  {
    id: 'cocktail-o-mai',
    name: 'Ô mai',
    nameVi: 'Ô mai',
    category: 'north',
    region: 'north',
    price: '220,000 ₫',
    tagline: 'Gin Infused Salted Dried Plum / Black Tea / Lime / Sugar / Soda',
    taglineVi: 'Gin ngâm ô xí muội mặn / Trà đen / Chanh / Đường / Soda',
    description: 'Nostalgic flavors of Hanoi old quarter sweetshops. Botanical gin slow-infused with traditional salted dried plum (ô mai), stirred with tannic Vietnamese black tea, zesty lime, pure cane sugar, and effervescent soda.',
    descriptionVi: 'Hương vị hoài niệm từ con phố Hàng Đường: Rượu gin ủ ô mai xí muội mặn ngọt đặc trưng, hòa quyện trà đen đậm đà, chanh tươi thanh thoát và soda mát lạnh sảng khoái.',
    glassware: 'Rocks Tumbler',
    abv: '15% ABV',
    flavorNodes: ['Salted Dried Plum', 'Tannic Black Tea', 'Crisp Tangy Tartness'],
    flavorNodesVi: ['Xí Muội Mặn Chua', 'Trà Đen Đậm Vị', 'Chua Thanh Sảng Khoái'],
    ingredients: [
      'Gin infused salted dried plum',
      'Black tea',
      'Lime',
      'Sugar',
      'Soda'
    ],
    ingredientsVi: [
      'Gin ngâm ô xí muội mặn',
      'Trà đen',
      'Chanh',
      'Đường',
      'Soda'
    ],
    primaryImage: 'https://i.imgur.com/VfM2qhU.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#7a2128', '#df776c', '#1e0c0d'],
    funFact: 'Salted dried plums release both salinity and sweetness, creating an umami-layered highball.',
    funFactVi: 'Quả ô mai xí muội tiết ra vị chua mặn ngọt tự nhiên, tạo nên chiều sâu vị giác phong phú bất ngờ.',
    pairing: {
      foodId: 'food-dac',
      foodName: 'Đác',
      foodNameVi: 'Đác',
      notes: 'The salty tart plum balances the earthy sweetness of beetroot and green apple.',
      notesVi: 'Vị chua mặn thanh của ô mai cân bằng vị ngọt dịu thanh tao của hạt đác và củ dền.'
    }
  },

  // ==========================================
  // --- CENTRAL VIETNAM (Miền Trung - 4 Cocktails) ---
  // ==========================================
  {
    id: 'cocktail-cao-lau',
    name: 'Cao lầu',
    nameVi: 'Cao lầu',
    category: 'central',
    region: 'central',
    price: '220,000 ₫',
    tagline: 'Dark Rum / Cinnamon / Ginger / Bay Leaf / Five-Spice / Basil / Lime / Soy Sauce Oil',
    taglineVi: 'Dark Rum / Quế / Gừng / Lá nguyệt quế / Ngũ vị hương / Húng quế / Chanh / Dầu nước tương',
    description: 'Hoi An’s celebrated heritage dish deconstructed into a bold, savory cocktail. Aged dark rum steeped with whole cinnamon, fresh ginger, bay leaves, five-spice, and fresh basil, balanced with lime and finished with drops of toasted soy sauce oil.',
    descriptionVi: 'Món mì di sản Hội An được tái hiện táo bạo: Dark rum ủ ấm nồng cùng quế, gừng tươi, lá nguyệt quế, ngũ vị hương và húng quế, cân bằng bằng chanh tươi và điểm vài giọt dầu nước tương thơm lừng.',
    glassware: 'Old Fashioned Glass',
    abv: '24% ABV',
    flavorNodes: ['Warm Five-Spice', 'Earthy Dark Rum', 'Savory Umami Oil'],
    flavorNodesVi: ['Ngũ Vị Hương Nồng', 'Dark Rum Trầm Ấm', 'Dầu Tương Umami'],
    ingredients: [
      'Dark rum',
      'Cinnamon',
      'Ginger',
      'Bay leaf',
      'Five-spice',
      'Basil',
      'Lime',
      'Soy sauce oil'
    ],
    ingredientsVi: [
      'Dark rum',
      'Quế',
      'Gừng',
      'Lá nguyệt quế',
      'Ngũ vị hương',
      'Húng quế',
      'Chanh',
      'Dầu nước tương'
    ],
    primaryImage: 'https://i.imgur.com/qCTVDXN.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#4b2313', '#c68437', '#1b120c'],
    funFact: 'The savory aromatic profile echoes the centuries-old char siu pork broth of Hoi An’s ancient street vendors.',
    funFactVi: 'Hương vị ngũ vị và thảo mộc mô phỏng lại nước sốt xá xíu đậm đà của các gánh cao lầu phố cổ Hội An.',
    pairing: {
      foodId: 'food-tam',
      foodName: 'Tấm',
      foodNameVi: 'Tấm',
      notes: 'Spiced rum and soy sauce oil accentuate the char on grilled pork belly and broken rice.',
      notesVi: 'Vị ngũ vị hương và dầu tương tôn lên hương vị thịt heo nướng than hoa của cơm tấm.'
    }
  },
  {
    id: 'cocktail-banh-xoai',
    name: 'Bánh xoài',
    nameVi: 'Bánh xoài',
    category: 'central',
    region: 'central',
    price: '220,000 ₫',
    tagline: 'Vodka Nếp Mới / Malibu / Mango Puree / Pandan Leaf / Lime',
    taglineVi: 'Vodka Nếp Mới / Malibu / Mứt xoài / Lá dứa / Chanh',
    description: 'Inspired by Hoi An’s beloved street confectionery. Fragrant Nếp Mới rice vodka paired with coconut Malibu, tropical mango puree, fresh pandan leaf extract, and freshly squeezed lime.',
    descriptionVi: 'Lấy cảm hứng từ món bánh xoài dẻo bùi nổi danh phố cổ Hội An: Vodka nếp mới kết hợp cùng rượu dừa Malibu, mứt xoài nhiệt đới sánh mịn, tinh chất lá dứa và nước cốt chanh tươi.',
    glassware: 'Coupe Glass',
    abv: '15% ABV',
    flavorNodes: ['Ripe Mango Nectar', 'Toasted Coconut', 'Aromatic Pandan'],
    flavorNodesVi: ['Xoài Chín Thơm Ngọt', 'Dừa Béo Bùi', 'Lá Dứa Tươi Mát'],
    ingredients: [
      'Vodka nếp mới',
      'Malibu',
      'Mango puree',
      'Pandan leaf',
      'Lime'
    ],
    ingredientsVi: [
      'Vodka nếp mới',
      'Malibu',
      'Mứt xoài',
      'Lá dứa',
      'Chanh'
    ],
    primaryImage: 'https://i.imgur.com/KcI0Xzf.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#e89b27', '#fae6b4', '#688c42'],
    funFact: 'Though named Bánh Xoài, Hoi An mango cake contains no mango—our cocktail cheekily infuses real sun-ripened mango.',
    funFactVi: 'Bánh xoài Hội An thực chất hình quả xoài chứ không có xoài — Saime tinh nghịch mang xoài thật chín mọng vào ly cocktail.',
    pairing: {
      foodId: 'food-dua',
      foodName: 'Dừa',
      foodNameVi: 'Dừa',
      notes: 'Tropical mango and coconut cocktail pairs exquisitely with rich coconut and pandan mousse.',
      notesVi: 'Xoài và dừa hòa quyện tuyệt đẹp cùng mousse dừa sáp béo ngậy.'
    }
  },
  {
    id: 'cocktail-bia-muc',
    name: 'Bia mực',
    nameVi: 'Bia mực',
    category: 'central',
    region: 'central',
    price: '220,000 ₫',
    tagline: 'Tequila / Squid Cordial / Tabasco Sauce / Beer',
    taglineVi: 'Tequila / Mực / Tabasco / Bia',
    description: 'Central coast beach culture distilled into a daring cocktail. 100% blue agave tequila infused with house-crafted savory squid cordial, spiked with fiery Tabasco sauce, and topped with crisp cold beer.',
    descriptionVi: 'Nét văn hóa nhậu bia mực ven biển miền Trung trong một sáng tạo đầy phá cách: Rượu Tequila kết hợp cordial mực nướng umami, sốt ớt Tabasco cay nồng và lớp bia tươi mát lạnh sủi bọt.',
    glassware: 'Beer Chalice Glass',
    abv: '12% ABV',
    flavorNodes: ['Smoky Squid Umami', 'Agave Warmth', 'Crisp Beer & Chili Kick'],
    flavorNodesVi: ['Vị Mực Nướng Umami', 'Tequila Nồng Say', 'Bia Sủi & Ớt Cay'],
    ingredients: [
      'Tequila',
      'Squid cordial',
      'Tabasco sauce',
      'Beer'
    ],
    ingredientsVi: [
      'Tequila',
      'Mực',
      'Tabasco',
      'Bia'
    ],
    primaryImage: 'https://i.imgur.com/5TWmrZ1.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#c76126', '#f2d49b', '#1e1b18'],
    funFact: 'Clarified grilled squid cordial captures saline coastal umami without heavy fishiness.',
    funFactVi: 'Cordial mực nướng làm trong giữ trọn vị ngọt umami mằn mòi của biển cả mà không hề bị tanh.',
    pairing: {
      foodId: 'food-bang',
      foodName: 'Báng',
      foodNameVi: 'Báng',
      notes: 'Crispy charcoal tapioca and pork floss match the savory seaside umami of squid and beer.',
      notesVi: 'Báng giòn than tre và pa-tê chà bông là bạn đồng hành hoàn hảo cùng bia mực.'
    }
  },
  {
    id: 'cocktail-canh-chua',
    name: 'Canh chua',
    nameVi: 'Canh chua',
    category: 'central',
    region: 'central',
    price: '220,000 ₫',
    tagline: 'Gin / Pineapple / Tomato / Tamarind / Rice Paddy Herb / Chilli Flakes / Lime',
    taglineVi: 'Gin / Thơm / Cà chua / Me / Rau ngổ / Ớt bột / Chanh',
    description: 'The complex flavors of Vietnamese sweet and sour soup transformed into an exhilarating cocktail. Dry gin infused with roasted pineapple, sun-ripened tomato, tangy tamarind, herbal rau ngổ, spicy chilli flakes, and fresh lime.',
    descriptionVi: 'Bản giao hưởng chua cay mặn ngọt của bát canh chua: Rượu gin hòa quyện thơm nướng mật, cà chua chín, me chua thanh, rau ngổ tươi mát, ớt bột kích thích và chanh tươi.',
    glassware: 'Faceted Collins Glass',
    abv: '15% ABV',
    flavorNodes: ['Tangy Tamarind', 'Charred Pineapple & Tomato', 'Rice Paddy Herb'],
    flavorNodesVi: ['Me Chua Thanh', 'Thơm & Cà Chua Nướng', 'Rau Ngổ Thảo Mộc'],
    ingredients: [
      'Gin',
      'Pineapple',
      'Tomato',
      'Tamarind',
      'Rice paddy herb',
      'Chilli flakes',
      'Lime'
    ],
    ingredientsVi: [
      'Gin',
      'Thơm',
      'Cà chua',
      'Me',
      'Rau ngổ',
      'Ớt bột',
      'Chanh'
    ],
    primaryImage: 'https://i.imgur.com/tVWAwb0.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#d94e34', '#f7b05b', '#3b5323'],
    funFact: 'Fresh rau ngổ (rice paddy herb) delivers an unmistakably citrusy, herbal aroma unique to Vietnamese cuisine.',
    funFactVi: 'Rau ngổ tươi mang lại hương tinh dầu thảo mộc chanh đặc trưng không thể nhầm lẫn của món canh chua.',
    pairing: {
      foodId: 'food-to',
      foodName: 'Tộ',
      foodNameVi: 'Tộ',
      notes: 'The bright tamarind and pineapple acidity cleanses the palate against rich caramelized fish.',
      notesVi: 'Vị chua thanh của me và thơm cắt tan độ đậm đà của sốt cá kho tộ.'
    }
  },

  // ==========================================
  // --- SOUTH VIETNAM (Miền Nam - 4 Cocktails) ---
  // ==========================================
  {
    id: 'cocktail-da-me',
    name: 'Đá me',
    nameVi: 'Đá me',
    category: 'south',
    region: 'south',
    price: '220,000 ₫',
    tagline: 'Gin / Tamarind / Lemongrass Shrimp Salt / Lime / Sugar',
    taglineVi: 'Gin / Me / Muối tôm sả / Chanh / Đường',
    description: 'Saigon’s quintessential iced street refreshment elevated to craft mixology. Artisanal gin shaken with concentrated tamarind pulp, fresh lime, and cane sugar, finished with a savory rim of toasted lemongrass shrimp salt.',
    descriptionVi: 'Thức uống tuổi thơ giải nhiệt phố thị Sài Gòn: Rượu gin hòa quyện cốt me chua ngọt sánh quyện, chanh tươi và đường mía, viền miệng ly bằng muối tôm sả cay mặn thơm nức mũi.',
    glassware: 'Rocks Glass with Spiced Rim',
    abv: '16% ABV',
    flavorNodes: ['Sweet & Sour Tamarind', 'Spicy Lemongrass Salt', 'Bright Botanical Lime'],
    flavorNodesVi: ['Me Chua Ngọt', 'Muối Tôm Sả Mặn Cay', 'Chanh Thanh Mát'],
    ingredients: [
      'Gin',
      'Tamarind',
      'Lemongrass shrimp salt',
      'Lime',
      'Sugar'
    ],
    ingredientsVi: [
      'Gin',
      'Me',
      'Muối tôm sả',
      'Chanh',
      'Đường'
    ],
    primaryImage: 'https://i.imgur.com/OLh8nJX.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#8c4a24', '#f19e38', '#1a100b'],
    funFact: 'Tây Ninh style lemongrass shrimp salt rim adds an addictive sweet-salty-spicy contrast on every sip.',
    funFactVi: 'Muối tôm Tây Ninh rang sả tạo sự bùng nổ đa giác quan ngọt - chua - mặn - cay kích thích vị giác.',
    pairing: {
      foodId: 'food-tat',
      foodName: 'Tạt',
      foodNameVi: 'Tạt',
      notes: 'The tart tamarind and savory salt rim elevates the sweet corn and dried shrimp wonton tart.',
      notesVi: 'Vị chua me và muối tôm tôn lên độ béo ngọt của bắp xào bơ và ruốc khô.'
    }
  },
  {
    id: 'cocktail-xoi-bap',
    name: 'Xôi bắp',
    nameVi: 'Xôi bắp',
    category: 'south',
    region: 'south',
    price: '220,000 ₫',
    tagline: 'Whiskey / Corn Cordial / Sesame Oil / White Cacao / Angostura / Soda / Corn Foam',
    taglineVi: 'Whiskey / Bắp / Dầu mè / White Cacao / Angostura soda / Foam bắp',
    description: 'A liquid tribute to morning Southern corn sticky rice. Blended whiskey infused with sweet roasted corn cordial, delicate drops of toasted sesame oil, white cacao liqueur, Angostura bitters, and sparkling soda, capped with airy sweet corn foam.',
    descriptionVi: 'Bản hòa âm sáng tạo từ món xôi bắp gói lá chuối: Rượu whiskey ủ cordial bắp nướng ngọt bùi, vài giọt dầu mè rang thơm, cacao trắng, Angostura bitters, soda và lớp bọt foam bắp mịn như nhung.',
    glassware: 'Tall Fizz Glass',
    abv: '15% ABV',
    flavorNodes: ['Roasted Sweet Corn', 'Toasted Sesame Nutty', 'Velvety Corn Foam'],
    flavorNodesVi: ['Bắp Ngọt Nướng Bùi', 'Dầu Mè Rang Thơm', 'Bọt Foam Bắp Mịn'],
    ingredients: [
      'Whiskey',
      'Corn cordial',
      'Sesame oil',
      'White cacao',
      'Angostura',
      'Soda',
      'Corn foam'
    ],
    ingredientsVi: [
      'Whiskey',
      'Bắp',
      'Dầu mè',
      'White cacao',
      'Angostura soda',
      'Foam bắp'
    ],
    primaryImage: 'https://i.imgur.com/lB4dMl7.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#e0a93b', '#f9eed2', '#412c14'],
    funFact: 'Toasted sesame oil creates a lingering nutty aroma that mirrors crispy crushed peanuts on warm corn.',
    funFactVi: 'Dầu mè rang mang lại hậu vị béo thơm gợi nhớ đến đậu phộng và mè rang trên gói xôi bắp nóng hổi.',
    pairing: {
      foodId: 'food-bap',
      foodName: 'Bắp',
      foodNameVi: 'Bắp',
      notes: 'Double corn indulgence pairing roasted corn cocktail with sweet corn mousse and pandan.',
      notesVi: 'Bản song tấu hương bắp ngọt ngào giữa cocktail xôi bắp và mousse bắp ngọt lá dứa.'
    }
  },
  {
    id: 'cocktail-coc',
    name: 'Cóc',
    nameVi: 'Cóc',
    category: 'south',
    region: 'south',
    price: '220,000 ₫',
    tagline: 'Tequila / Blue Curaçao / Ambarella Cordial / Lime / Sugar',
    taglineVi: 'Tequila / Blue Curaçao / Cóc / Chanh / Đường',
    description: 'Vibrant and crisp like Saigon street stalls selling green ambarella. Tequila shaken with citrusy Blue Curaçao, tart cold-pressed ambarella cordial, fresh lime juice, and cane sugar.',
    descriptionVi: 'Rực rỡ và giòn tan như món cóc dầm chấm muối đường Sài Gòn: Tequila phối cùng Blue Curaçao xanh biếc, nước cốt cóc non chua giòn rụm, chanh tươi và đường mía cân bằng.',
    glassware: 'Margarita Coupette',
    abv: '17% ABV',
    flavorNodes: ['Crisp Ambarella Tart', 'Vibrant Citrus Curaçao', 'Agave Finish'],
    flavorNodesVi: ['Cóc Non Chua Giòn', 'Curaçao Cam Xanh', 'Hậu Vị Tequila'],
    ingredients: [
      'Tequila',
      'Blue curacao',
      'Ambarella cordial',
      'Lime',
      'Sugar'
    ],
    ingredientsVi: [
      'Tequila',
      'Blue Curaçao',
      'Cóc',
      'Chanh',
      'Đường'
    ],
    primaryImage: 'https://i.imgur.com/G3s4MZo.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#1e7db2', '#97d8b2', '#0c2e42'],
    funFact: 'Ambarella fruit (trái cóc) has high pectin and acidity, providing a crisp texture and vivid brightness.',
    funFactVi: 'Trái cóc tươi chứa nhiều pectin và vị chua thanh tự nhiên giúp ly cocktail có cấu trúc sắc nét và giải nhiệt tuyệt vời.',
    pairing: {
      foodId: 'food-beo',
      foodName: 'Biếc',
      foodNameVi: 'Biếc',
      notes: 'Crispy tart ambarella cuts through the delicate savory pork and shrimp rice cakes.',
      notesVi: 'Vị chua giòn của cóc làm mới vòm họng khi thưởng thức bánh bèo tôm thịt béo ngậy.'
    }
  },
  {
    id: 'cocktail-kho-qua',
    name: 'Khổ qua',
    nameVi: 'Khổ qua',
    category: 'south',
    region: 'south',
    price: '220,000 ₫',
    tagline: 'Gin Infused Bitter Melon / Midori / Egg White / Thai Basil / Lime / Sugar',
    taglineVi: 'Gin ngâm khổ qua / Midori / Lòng trắng trứng / Húng quế / Chanh / Đường',
    description: 'Inspired by the Southern wisdom that "bitterness passes into sweetness". Crisp gin infused with bitter melon, balanced by sweet melon Midori, velvety egg white foam, aromatic Thai basil, tart lime, and cane sugar.',
    descriptionVi: 'Triết lý ẩm thực phương Nam "khổ qua đi, ngọt ngào tới": Rượu gin ngâm mướp đắng tươi, cân bằng bằng rượu dưa lưới Midori ngọt mát, lòng trắng trứng đánh bông như mây, húng quế thơm ngát, chanh tươi và đường.',
    glassware: 'Sour Coupe Glass',
    abv: '16% ABV',
    flavorNodes: ['Crisp Herbal Bitterness', 'Sweet Honeydew Melon', 'Silky Herb Foam'],
    flavorNodesVi: ['Khổ Qua Thanh Mát', 'Midori Dưa Lưới Dịu', 'Bọt Trứng Húng Quế'],
    ingredients: [
      'Gin infused bitter melon',
      'Midori',
      'Egg white',
      'Thai basil',
      'Lime',
      'Sugar'
    ],
    ingredientsVi: [
      'Gin ngâm khổ qua',
      'Midori',
      'Lòng trắng trứng',
      'Húng quế',
      'Chanh',
      'Đường'
    ],
    primaryImage: 'https://i.imgur.com/qhtlQjc.jpeg',
    detailImages: [
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'portrait',
    colorPalette: ['#4d7c38', '#a4d678', '#1a3311'],
    funFact: 'In Southern Vietnam, eating khổ qua soup at New Year symbolizes leaving all hardship behind.',
    funFactVi: 'Món canh khổ qua đầu năm của người miền Nam mang ý niệm mọi nỗi khổ cực năm cũ đều sẽ qua đi.',
    pairing: {
      foodId: 'food-tiu',
      foodName: 'Tíu',
      foodNameVi: 'Tíu',
      notes: 'The herbal bittersweet profile cuts through the rich char siu pork and egg noodles.',
      notesVi: 'Vị the mát đắng dịu của khổ qua cân bằng hoàn hảo độ đậm đà của mì tíu xá xíu.'
    }
  }
];

export const COCKTAIL_ITEMS: CocktailItem[] = BASE_COCKTAIL_ITEMS.map((item) => {
  const customImg = HARDCODED_IMAGES.cocktails[item.id] || item.primaryImage;
  return {
    ...item,
    primaryImage: customImg,
    detailImages: [customImg, ...(item.detailImages || []).filter((img) => img !== customImg)],
  };
});
