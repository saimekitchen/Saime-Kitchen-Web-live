import { FoodItem } from '../types';
import { HARDCODED_IMAGES } from './hardcodedImages';

const BASE_FOOD_ITEMS: FoodItem[] = [
  // ==========================================
  // --- APPETIZERS (4 Items) ---
  // ==========================================
  {
    id: 'food-bang',
    name: 'Báng',
    nameVi: 'Báng',
    category: 'starter',
    price: '75,000 ₫',
    tagline: 'Crispy Bamboo Charcoal Tapioca / Pâté / Pork Floss / Scallion Oil / Vinegar Caviar',
    taglineVi: 'Báng than tre giòn / Pa-tê / Chà bông / Dầu hành lá / Caviar đồ chua',
    description: 'Crispy puffed tapioca cracker infused with natural bamboo charcoal, topped with velvety house-made liver pâté, savory pork floss, aromatic scallion oil, and burst-in-the-mouth vinegar caviar.',
    descriptionVi: 'Bánh báng bột báng than tre nướng phồng giòn rụm, phủ lớp pa-tê gan béo ngậy thủ công, chà bông heo tơi xốp, dầu hành lá thơm lừng và những hạt caviar đồ chua thanh mát kích thích vị giác.',
    ingredients: [
      'Crispy Bamboo Charcoal Tapioca',
      'Velvety Liver Pâté',
      'Fluffy Pork Floss',
      'Fragrant Scallion Oil',
      'Artisanal Vinegar Caviar'
    ],
    ingredientsVi: [
      'Báng than tre giòn rụm',
      'Pa-tê gan béo ngậy',
      'Chà bông heo tơi xốp',
      'Dầu hành lá tươi',
      'Caviar đồ chua thanh vị'
    ],
    dietary: ['Crispy Texture', 'Chef Special'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#1f2124', '#c9a874', '#536b3e'],
    funFact: 'Bamboo charcoal gives the tapioca a striking black silhouette, balanced by the burst of artisanal vinegar caviar.',
    funFactVi: 'Tinh than tre tự nhiên tạo màu đen huyền bí cho lớp báng giòn, tương phản với những hạt caviar đồ chua thanh mát.',
    pairing: {
      cocktailId: 'cocktail-bia-muc',
      cocktailName: 'Bia mực',
      cocktailNameVi: 'Bia mực',
      notes: 'Crispy charcoal tapioca and pork floss match the savory seaside umami of squid and beer.',
      notesVi: 'Báng giòn than tre và pa-tê chà bông là bạn đồng hành hoàn hảo cùng bia mực.'
    }
  },
  {
    id: 'food-tat',
    name: 'Tạt',
    nameVi: 'Tạt',
    category: 'starter',
    price: '75,000 ₫',
    tagline: 'Crispy Wonton Tart / Butter-Sautéed Sweet Corn / Dried Shrimp / Vinegar Caviar / Fish Sauce Foam',
    taglineVi: 'Tart hoành thánh giòn / Bắp ngọt xào bơ / Ruốc khô / Caviar đồ chua / Bọt nước mắm',
    description: 'Delicate crispy wonton shell filled with butter-sautéed sweet corn, savory dried shrimp, popping vinegar caviar, and airy fish sauce foam.',
    descriptionVi: 'Vỏ tart hoành thánh giòn tan ôm trọn bắp ngọt xào bơ thơm lừng, ruốc khô đậm đà, hạt caviar đồ chua và lớp bọt nước mắm bồng bềnh.',
    ingredients: [
      'Crispy Wonton Tart',
      'Butter-Sautéed Sweet Corn',
      'Dried Shrimp',
      'Vinegar Caviar',
      'Fish Sauce Foam'
    ],
    ingredientsVi: [
      'Tart hoành thánh giòn',
      'Bắp ngọt xào bơ',
      'Ruốc khô',
      'Caviar đồ chua',
      'Bọt nước mắm'
    ],
    dietary: ['Crispy', 'Street Food Reimagined'],
    temperature: 'Crispy',
    primaryImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#f4cf66', '#d65a31', '#1f1e1c'],
    funFact: 'Reimagines Vietnam iconic street-side sautéed corn (bắp xào) inside a golden French-style tartlet.',
    funFactVi: 'Lấy cảm hứng từ món bắp xào đường phố thân thương, tái sinh trong lớp vỏ tart hoành thánh vàng óng.',
    pairing: {
      cocktailId: 'cocktail-da-me',
      cocktailName: 'Đá me',
      cocktailNameVi: 'Đá me',
      notes: 'The tart tamarind and savory salt rim elevates the sweet corn and dried shrimp wonton tart.',
      notesVi: 'Vị chua me và muối tôm tôn lên độ béo ngọt của bắp xào bơ và ruốc khô.'
    }
  },
  {
    id: 'food-nep',
    name: 'Nếp',
    nameVi: 'Nếp',
    category: 'starter',
    price: '75,000 ₫',
    tagline: 'Pani Puri / Sticky Rice / Pork Floss / Dried Radish / Chinese Sausage / Pâté / Scallion Oil / Vinegar Caviar / Fermented carrot juice',
    taglineVi: 'Pani puri / Nếp dẻo / Chà bông / Xá bấu / Lạp xưởng / Pa-tê / Dầu hành lá / Caviar đồ chua / Nước cà rốt lên men',
    description: 'Crisp pani puri sphere filled with fragrant sticky rice, savory pork floss, preserved radish (xá bấu), Chinese sausage, pâté, scallion oil, vinegar caviar, and fermented carrot juice.',
    descriptionVi: 'Quả cầu pani puri giòn rụm chứa đựng nếp dẻo thơm, chà bông, xá bấu giòn sần sật, lạp xưởng, pa-tê béo, dầu hành lá, caviar đồ chua và nước cà rốt lên men thanh khiết.',
    ingredients: [
      'Pani Puri Shell',
      'Sticky Rice',
      'Pork Floss',
      'Dried Radish (Xá Bấu)',
      'Chinese Sausage',
      'Pâté',
      'Scallion Oil',
      'Vinegar Caviar',
      'Fermented Carrot Juice'
    ],
    ingredientsVi: [
      'Vỏ pani puri',
      'Nếp dẻo thơm',
      'Chà bông',
      'Xá bấu',
      'Lạp xưởng',
      'Pa-tê',
      'Dầu hành lá',
      'Caviar đồ chua',
      'Nước cà rốt lên men'
    ],
    dietary: ['Signature Bite', 'Fermentation'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#d87343', '#f4e8d3', '#2a201c'],
    funFact: 'Eat in one single bite to experience the textural explosion of sticky rice and tingling fermented carrot essence.',
    funFactVi: 'Thưởng thức trọn vẹn trong một miếng cắn để cảm nhận hạt nếp dẻo hòa cùng nước cà rốt lên men sảng khoái.',
    pairing: {
      cocktailId: 'cocktail-com',
      cocktailName: 'Cốm',
      cocktailNameVi: 'Cốm',
      notes: 'Double sticky rice harmony where crisp pani puri sticky rice meets fragrant green rice cocktail.',
      notesVi: 'Sự kết hợp đồng điệu giữa nếp dẻo pani puri và cocktail cốm thanh khiết.'
    }
  },
  {
    id: 'food-dac',
    name: 'Đác',
    nameVi: 'Đác',
    category: 'starter',
    price: '95,000 ₫',
    tagline: 'Palm Seeds / Green Apple / Sweet and Sour Garlic-Chilli Fish Sauce / Butterfly Pea Fish Sauce Foam / Horn Chilli',
    taglineVi: 'Hạt đác / Táo xanh / Mắm tỏi ớt chua ngọt / Bọt mắm hoa đậu biếc / Ớt sừng',
    description: 'Tender chewy wild palm seeds paired with crisp tart green apple, tossed in a sweet-and-sour garlic-chilli fish sauce, crowned with violet butterfly pea fish sauce foam and fresh horn chilli slices.',
    descriptionVi: 'Hạt đác dẻo dai hòa quyện táo xanh giòn chua mát, sốt mắm tỏi ớt đậm đà, điểm xuyết lớp bọt mắm hoa đậu biếc tím biếc quý phái và ớt sừng thơm dịu.',
    ingredients: [
      'Wild Palm Seeds (Hạt Đác)',
      'Green Apple',
      'Sweet & Sour Garlic-Chilli Fish Sauce',
      'Butterfly Pea Fish Sauce Foam',
      'Horn Chilli'
    ],
    ingredientsVi: [
      'Hạt đác rừng',
      'Táo xanh',
      'Mắm tỏi ớt chua ngọt',
      'Bọt mắm hoa đậu biếc',
      'Ớt sừng'
    ],
    dietary: ['Refreshing', 'Unique Texture'],
    temperature: 'Chilled',
    primaryImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#5b7290', '#9ecb6a', '#b33939'],
    funFact: 'Wild palm seeds sourced from Khanh Hoa forests, celebrated for their unique jelly-like bite.',
    funFactVi: 'Hạt đác rừng tự nhiên từ Khánh Hòa với độ dẻo giòn đặc trưng mang lại trải nghiệm vị giác khó quên.',
    pairing: {
      cocktailId: 'cocktail-o-mai',
      cocktailName: 'Ô mai',
      cocktailNameVi: 'Ô mai',
      notes: 'The salty tart plum balances the sweet and sour palm seeds and crisp green apple.',
      notesVi: 'Vị chua mặn thanh của ô mai cân bằng vị hạt đác dẻo và táo xanh thanh mát.'
    }
  },

  // ==========================================
  // --- MAIN COURSES (6 Items) ---
  // ==========================================
  {
    id: 'food-beo',
    name: 'Biếc',
    nameVi: 'Biếc',
    category: 'main',
    price: '180,000 ₫',
    tagline: 'Butterfly Pea Dumplings / Shrimp and Pork Sauce / Peanuts / Fried Shallots / Scallions / Black Pepper / Green Oil',
    taglineVi: 'Há cảo đậu biếc / Sốt tôm thịt / Đậu phộng / Hành phi / Hành lá / Tiêu / Dầu xanh',
    description: 'Silky butterfly pea-tinted steamed dumplings resting in rich savory shrimp and pork sauce, garnished with roasted peanuts, crispy shallots, spring scallions, cracked black pepper, and vibrant herb oil.',
    descriptionVi: 'Há cảo nhuộm sắc xanh hoa đậu biếc mềm mướt, ngập trong sốt tôm thịt đậm đà, điểm xuyết đậu phộng rang giòn, hành phi vàng rụm, hành lá, tiêu đen và dầu xanh thanh mát.',
    ingredients: [
      'Butterfly Pea Dumplings',
      'Savory Shrimp & Pork Sauce',
      'Roasted Peanuts',
      'Crispy Fried Shallots',
      'Fresh Scallions',
      'Cracked Black Pepper',
      'Herb Green Oil'
    ],
    ingredientsVi: [
      'Há cảo đậu biếc',
      'Sốt tôm thịt',
      'Đậu phộng rang',
      'Hành phi thơm',
      'Hành lá',
      'Tiêu đen Phú Quốc',
      'Dầu xanh thảo mộc'
    ],
    dietary: ['Central Heritage', 'Handmade Dumplings'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#3e5c76', '#e0a96d', '#1d2a44'],
    funFact: 'An avant-garde evolution of Hoi An and Hue classic Bánh Bèo, transformed into vibrant dumplings.',
    funFactVi: 'Một biến tấu hiện đại đầy bất ngờ từ món bánh bèo miền Trung trong hình hài há cảo lam ngọc.',
    pairing: {
      cocktailId: 'cocktail-coc',
      cocktailName: 'Cóc',
      cocktailNameVi: 'Cóc',
      notes: 'Crispy tart ambarella cuts through the delicate savory pork and shrimp rice cakes.',
      notesVi: 'Vị chua giòn của cóc làm mới vòm họng khi thưởng thức bánh bèo tôm thịt béo ngậy.'
    }
  },
  {
    id: 'food-mang',
    name: 'Măng',
    nameVi: 'Măng',
    category: 'main',
    price: '200,000 ₫',
    tagline: 'Pasta / Pan-Seared Sous Vide Duck Breast / Sautéed Bamboo Shoots / Duck Jus / Horn Chilli',
    taglineVi: 'Mì Ý / Ức vịt sous vide áp chảo / Măng xào / Sốt nước thịt vịt / Ớt sừng',
    description: 'Al dente artisanal pasta served with tender, pan-seared sous vide duck breast, tender sautéed mountain bamboo shoots, rich reduced duck jus, and thin ribbons of horn chilli.',
    descriptionVi: 'Mì Ý nấu vừa chín tới, kết hợp ức vịt sous vide áp chảo mềm mọng lớp da giòn, măng non xào thơm lừng, sốt duck jus cô đặc và ớt sừng ấm áp.',
    ingredients: [
      'Artisanal Pasta',
      'Pan-Seared Sous Vide Duck Breast',
      'Sautéed Bamboo Shoots',
      'Slow-Simmered Duck Jus',
      'Fresh Horn Chilli'
    ],
    ingredientsVi: [
      'Mì Ý',
      'Ức vịt sous vide áp chảo',
      'Măng non xào thơm',
      'Sốt nước thịt vịt cô đặc',
      'Ớt sừng'
    ],
    dietary: ['Poultry', 'Sous Vide Precision'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#5a2a27', '#e2af65', '#241a18'],
    funFact: 'Duck and bamboo shoot is an ancient Vietnamese northern pairing, reimagined here with modern pasta craft.',
    funFactVi: 'Cặp đôi vịt cỏ và măng tươi kinh điển được tái hiện đầy sáng tạo với nghệ thuật làm mì Ý thủ công.',
    pairing: {
      cocktailId: 'cocktail-cao-lau',
      cocktailName: 'Cao lầu',
      cocktailNameVi: 'Cao lầu',
      notes: 'Spiced dark rum with five-spice highlights the rich smoked duck breast and braised bamboo shoot.',
      notesVi: 'Dark rum ấm nồng ngũ vị tôn vinh vị ngọt giòn của măng và ức vịt hun khói.'
    }
  },
  {
    id: 'food-tiu',
    name: 'Tíu',
    nameVi: 'Tíu',
    category: 'main',
    price: '200,000 ₫',
    tagline: 'Pasta / Hủ Tiếu Sauce / Minced Meat / Dried Baby Shrimp / Char Siu / Soy Sauce Milk Foam / Hủ Tiếu Broth',
    taglineVi: 'Mì Ý / Sốt hủ tiếu / Thịt băm / Ruốc xay / Xá xíu / Bọt sữa xì dầu / Nước dùng hủ tiếu',
    description: 'Handcrafted pasta tossed in an intense southern hủ tiếu glaze, minced pork, toasted baby shrimp, glazed char siu, topped with silky soy sauce milk foam and served with a reduction of simmered hủ tiếu broth.',
    descriptionVi: 'Mì Ý quyện sốt hủ tiếu Nam Bộ cô đặc, thịt băm đậm vị, ruốc tôm rang thơm, thịt xá xíu mềm ngọt, lớp bọt sữa xì dầu béo ngậy và nước dùng hủ tiếu ngọt thanh ninh xương.',
    ingredients: [
      'Handcrafted Pasta',
      'Concentrated Hủ Tiếu Glaze',
      'Savory Minced Meat',
      'Dried Baby Shrimp (Ruốc)',
      'Tender Char Siu Pork',
      'Soy Sauce Milk Foam',
      'Simmered Hủ Tiếu Broth'
    ],
    ingredientsVi: [
      'Mì Ý',
      'Sốt hủ tiếu cô đặc',
      'Thịt băm xào',
      'Ruốc tôm xay',
      'Xá xíu xông khói',
      'Bọt sữa xì dầu',
      'Nước dùng hủ tiếu'
    ],
    dietary: ['Southern Heritage', 'Chef Specialty'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#8c3b28', '#f3d99e', '#1c1514'],
    funFact: 'Deconstructs the beloved Saigon street cart Hủ Tiếu Nam Vang into an elegant bistro pasta.',
    funFactVi: 'Tái tạo trọn vẹn hương vị xe hủ tiếu Nam Vang Sài Gòn đêm trong một đĩa mì bistronomy tinh tế.',
    pairing: {
      cocktailId: 'cocktail-kho-qua',
      cocktailName: 'Khổ qua',
      cocktailNameVi: 'Khổ qua',
      notes: 'The herbal bittersweet profile cuts through the rich char siu pork and egg noodles.',
      notesVi: 'Vị the mát đắng dịu của khổ qua cân bằng hoàn hảo độ đậm đà của mì tíu xá xíu.'
    }
  },
  {
    id: 'food-tam',
    name: 'Tấm',
    nameVi: 'Tấm',
    category: 'main',
    price: '210,000 ₫',
    tagline: 'Pan-Seared Pork Cheek / Turmeric Broken Rice / Pork Cracklings / Pickled Vegetables / Scallion Oil / Tomato / Cucumber / Butterfly Pea Fish Sauce Foam',
    taglineVi: 'Má heo áp chảo / Cơm tấm nghệ / Tóp mỡ / Đồ chua / Mỡ hành / Cà chua / Dưa leo / Bọt mắm hoa đậu biếc',
    description: 'Crisp-seared tender pork cheek served over aromatic turmeric broken rice, crunchy pork cracklings, house-pickled daikon & carrot, warm scallion oil, sliced tomato, crisp cucumber, and finished with butterfly pea fish sauce foam.',
    descriptionVi: 'Má heo áp chảo vàng ươm mọng nước, đặt trên cơm tấm nghệ dẻo bùi, tóp mỡ giòn rụm, đồ chua thanh mát, mỡ hành óng ả, cà chua, dưa leo và bọt mắm hoa đậu biếc kiêu kỳ.',
    ingredients: [
      'Pan-Seared Pork Cheek',
      'Turmeric Broken Rice',
      'Crispy Pork Cracklings',
      'Pickled Vegetables',
      'Scallion Oil',
      'Vine-Ripened Tomato',
      'Cucumber',
      'Butterfly Pea Fish Sauce Foam'
    ],
    ingredientsVi: [
      'Má heo áp chảo',
      'Cơm tấm nghệ',
      'Tóp mỡ giòn',
      'Đồ chua nhà làm',
      'Mỡ hành thơm',
      'Cà chua bi',
      'Dưa leo',
      'Bọt mắm hoa đậu biếc'
    ],
    dietary: ['Pork Cheek', 'Modern Cơm Tấm'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#c97b2b', '#2f435a', '#f5edd6'],
    funFact: 'Reinvents southern Vietnam greatest staple using prized melt-in-your-mouth pork cheek.',
    funFactVi: 'Tôn vinh đĩa cơm tấm Sài Gòn bằng phần nạc nọng má heo áp chảo mềm tan béo ngậy.',
    pairing: {
      cocktailId: 'cocktail-cao-lau',
      cocktailName: 'Cao lầu',
      cocktailNameVi: 'Cao lầu',
      notes: 'Spiced rum and soy sauce oil accentuate the char on grilled pork cheek and broken rice.',
      notesVi: 'Vị ngũ vị hương và dầu tương tôn lên hương vị má heo nướng áp chảo của cơm tấm.'
    }
  },
  {
    id: 'food-to',
    name: 'Tộ',
    nameVi: 'Tộ',
    category: 'main',
    price: '220,000 ₫',
    tagline: 'Pan-Seared Basa Fish / Mashed Potatoes / Potato Mille-Feuille / Green Peas / Wonton Tart / Braised Fish Sauce',
    taglineVi: 'Cá basa áp chảo / Khoai tây nghiền / Khoai tây ngàn lớp / Đậu Hà Lan / Tart hoành thánh / Sốt cá kho',
    description: 'Fresh pan-seared basa fillet over silky whipped mashed potatoes, accompanied by crispy layered potato mille-feuille, tender sweet green peas, delicate wonton tart, and rich caramelized braised fish sauce (cá kho tộ reduction).',
    descriptionVi: 'Phi lê cá basa áp chảo da giòn thịt ngọt, đặt trên nền khoai tây nghiền mịn màng, kèm khoai tây ngàn lớp giòn rụm, đậu Hà Lan ngọt mát, tart hoành thánh và sốt cá kho tộ cô đặc óng ánh.',
    ingredients: [
      'Pan-Seared Basa Fish',
      'Velvety Mashed Potatoes',
      'Potato Mille-Feuille',
      'Sweet Green Peas',
      'Wonton Tart Crisp',
      'Traditional Braised Fish Sauce Reduction'
    ],
    ingredientsVi: [
      'Cá basa áp chảo',
      'Khoai tây nghiền',
      'Khoai tây ngàn lớp',
      'Đậu Hà Lan',
      'Tart hoành thánh',
      'Sốt cá kho tộ'
    ],
    dietary: ['Fish', 'French Technique'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#593822', '#e5c99f', '#4f6d4e'],
    funFact: 'Captures the nostalgic caramel pepper umami of claypot braised fish in a refined bistronomy plating.',
    funFactVi: 'Hương vị cá kho tộ tiêu đen niêu đất của mẹ được chuyển hóa thành một kiệt tác ẩm thực đương đại.',
    pairing: {
      cocktailId: 'cocktail-canh-chua',
      cocktailName: 'Canh chua',
      cocktailNameVi: 'Canh chua',
      notes: 'The bright tamarind and pineapple acidity cleanses the palate against rich caramelized fish.',
      notesVi: 'Vị chua thanh của me và thơm cắt tan độ đậm đà của sốt cá kho tộ.'
    }
  },
  {
    id: 'food-bo',
    name: 'Bò',
    nameVi: 'Bò',
    category: 'main',
    price: '250,000 ₫',
    tagline: 'Pan-Seared Milk-Soaked Bread / Vietnamese Beef Stew / Mashed Potatoes / Black Pepper / Green Oil',
    taglineVi: 'Bánh mì ngâm sữa áp chảo / Bò kho / Khoai tây nghiền / Tiêu / Dầu xanh',
    description: 'Tender slow-braised Vietnamese beef stew rich with star anise and lemongrass, served with golden pan-seared milk-soaked brioche bread, silky mashed potatoes, cracked black pepper, and fragrant green scallion oil.',
    descriptionVi: 'Bò kho ninh chậm mềm nhừ ngát hương sả và hoa hồi, ăn kèm bánh mì ngâm sữa áp chảo giòn thơm béo ngậy, khoai tây nghiền mịn màng, tiêu đen thơm nồng và dầu xanh tươi tắn.',
    ingredients: [
      'Pan-Seared Milk-Soaked Bread',
      'Slow-Braised Vietnamese Beef Stew (Bò Kho)',
      'Silky Mashed Potatoes',
      'Cracked Black Pepper',
      'Herbal Green Oil'
    ],
    ingredientsVi: [
      'Bánh mì ngâm sữa áp chảo',
      'Bò kho ninh mềm',
      'Khoai tây nghiền',
      'Tiêu đen',
      'Dầu xanh'
    ],
    dietary: ['Signature Comfort', 'Slow Braised'],
    temperature: 'Warm',
    primaryImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'landscape',
    colorPalette: ['#562319', '#dca265', '#241b18'],
    funFact: 'The milk-soaked bread is seared to caramelized perfection, creating the ultimate vehicle for rich beef stew broth.',
    funFactVi: 'Bánh mì ngâm sữa áp chảo vàng ruộm là điểm nhấn quyến rũ nhất khi chấm cùng nước sốt bò kho đậm đặc.',
    pairing: {
      cocktailId: 'cocktail-pho',
      cocktailName: 'Phở',
      cocktailNameVi: 'Phở',
      notes: 'The rich Wagyu striploin and bone marrow jus harmonize effortlessly with aromatic pho botanicals.',
      notesVi: 'Bò kho đậm đà thơm hồi sả hòa quyện tuyệt vời với tầng hương thảo mộc của phở.'
    }
  },

  // ==========================================
  // --- DESSERTS (3 Items) ---
  // ==========================================
  {
    id: 'food-bap',
    name: 'Bắp',
    nameVi: 'Bắp',
    category: 'dessert',
    price: '85,000 ₫',
    tagline: 'Sweet Corn / Purple Sweet Potato Ice Cream / Mung Beans / Sesame Salt / Shredded Coconut / Herbal Salt',
    taglineVi: 'Bắp ngọt / Kem khoai lang tím / Đậu xanh / Muối mè / Dừa bào sợi / Muối thảo mộc',
    description: 'Tender sweet corn served with artisanal purple sweet potato ice cream, sweetened mung beans, fragrant sesame salt, freshly shredded young coconut, and a sprinkle of botanical herbal salt.',
    descriptionVi: 'Hạt bắp ngọt thơm mát ăn cùng kem khoai lang tím béo bùi, nhân đậu xanh nhuyễn mịn, muối mè rang thơm nức, dừa non bào sợi và chút muối thảo mộc độc đáo.',
    ingredients: [
      'Sweet Corn',
      'Purple Sweet Potato Ice Cream',
      'Sweetened Mung Beans',
      'Toasted Sesame Salt',
      'Fresh Shredded Coconut',
      'Artisanal Herbal Salt'
    ],
    ingredientsVi: [
      'Bắp ngọt',
      'Kem khoai lang tím',
      'Đậu xanh',
      'Muối mè',
      'Dừa bào sợi',
      'Muối thảo mộc'
    ],
    dietary: ['Vegetarian', 'Unique Sweet & Savory'],
    temperature: 'Chilled',
    primaryImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#794175', '#e9ce6d', '#f6f2e9'],
    funFact: 'A playful tribute to Vietnamese street sweet-corn snacks (chè bắp & bắp xôi), balanced by sweet potato ice cream.',
    funFactVi: 'Sự giao thoa giữa món xôi bắp tuổi thơ và kỹ nghệ làm kem khoai lang tím mượt mà.',
    pairing: {
      cocktailId: 'cocktail-xoi-bap',
      cocktailName: 'Xôi bắp',
      cocktailNameVi: 'Xôi bắp',
      notes: 'Double corn indulgence pairing roasted corn cocktail with sweet corn and sweet potato.',
      notesVi: 'Bản song tấu hương bắp ngọt ngào giữa cocktail xôi bắp và món tráng miệng bắp kem khoai tím.'
    }
  },
  {
    id: 'food-mam',
    name: 'Mắm',
    nameVi: 'Mắm',
    category: 'dessert',
    price: '85,000 ₫',
    tagline: 'Flan / Lime Foam / Fish Sauce Caramel / Cripsy Rice',
    taglineVi: 'Bánh flan / Bọt chanh / Caramel nước mắm / Gạo rang',
    description: 'Silky egg custard flan paired with tart refreshing lime foam, slow-cooked fish sauce caramel for unexpected umami depth, finished with popping crunchy crispy rice.',
    descriptionVi: 'Bánh flan trứng mềm mịn tan ngay trên đầu lưỡi, bồng bềnh lớp bọt chanh thanh mát, sốt caramel nước mắm mặn ngọt quyến rũ và gạo rang giòn rụm.',
    ingredients: [
      'Silky Egg Flan Custard',
      'Zesty Lime Foam',
      'Slow-Cooked Fish Sauce Caramel',
      'Puffed Crispy Rice'
    ],
    ingredientsVi: [
      'Bánh flan mềm mịn',
      'Bọt chanh tươi',
      'Caramel nước mắm',
      'Gạo rang giòn'
    ],
    dietary: ['Curiosity Provocation', 'Umami Dessert'],
    temperature: 'Chilled',
    primaryImage: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#9c5221', '#f3eedf', '#3c2417'],
    funFact: 'Our most talked-about dessert: premium fish sauce reduction turns caramel into salted toffee heaven.',
    funFactVi: 'Món tráng miệng gây tò mò nhất của Saime: nước mắm nguyên chất biến caramel thành tầng vị umami bùng nổ.',
    pairing: {
      cocktailId: 'cocktail-cafe-trung',
      cocktailName: 'Cafe trứng',
      cocktailNameVi: 'Cafe trứng',
      notes: 'The rich caramel coffee and egg custard balances the sweet-savory fish sauce flan.',
      notesVi: 'Vị béo ngậy của kem trứng và cà phê phin nâng tầm món flan caramel nước mắm độc đáo.'
    }
  },
  {
    id: 'food-dua',
    name: 'Dừa',
    nameVi: 'Dừa',
    category: 'dessert',
    price: '95,000 ₫',
    tagline: 'Pan-Seared Milk-Soaked Bread / Coconut Ice Cream / Peanuts / Shredded Coconut / Condensed Milk',
    taglineVi: 'Bánh mì ngâm sữa áp chảo / Kem dừa / Đậu phộng / Dừa bào sợi / Sữa đặc',
    description: 'Golden caramelized milk-soaked bread accompanied by rich house-churned coconut ice cream, crushed roasted peanuts, fresh shredded coconut, and sweet condensed milk drizzle.',
    descriptionVi: 'Bánh mì ngâm sữa áp chảo vàng ruộm giòn tan ngoài vỏ mềm mướt bên trong, ăn cùng viên kem dừa thơm béo, đậu phộng rang giòn, dừa bào sợi và sữa đặc ngọt dịu.',
    ingredients: [
      'Pan-Seared Milk-Soaked Bread',
      'Artisanal Coconut Ice Cream',
      'Crushed Roasted Peanuts',
      'Fresh Shredded Young Coconut',
      'Sweet Condensed Milk'
    ],
    ingredientsVi: [
      'Bánh mì ngâm sữa áp chảo',
      'Kem dừa thủ công',
      'Đậu phộng rang',
      'Dừa non bào sợi',
      'Sữa đặc Ông Thọ'
    ],
    dietary: ['Comfort Dessert', 'Vietnamese Classic'],
    temperature: 'Cold',
    primaryImage: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#eed8be', '#8d5b36', '#261b17'],
    funFact: 'Warm golden bread meets freezing cold coconut ice cream in an unforgettable temperature contrast.',
    funFactVi: 'Sự tương phản mê hoặc giữa bánh mì nướng nóng hổi và viên kem dừa mát lạnh tan trên đầu lưỡi.',
    pairing: {
      cocktailId: 'cocktail-banh-xoai',
      cocktailName: 'Bánh xoài',
      cocktailNameVi: 'Bánh xoài',
      notes: 'Tropical mango and coconut cocktail pairs exquisitely with rich coconut and pandan notes.',
      notesVi: 'Xoài và dừa hòa quyện tuyệt đẹp cùng bánh mì kem dừa thơm béo.'
    }
  },

  // ==========================================
  // --- ADD-ONS (1 Item) ---
  // ==========================================
  {
    id: 'food-potato-mille-feuille',
    name: 'Potato Mille-Feuille',
    nameVi: 'Potato Mille-Feuille',
    category: 'addon',
    price: '55,000 ₫',
    tagline: 'Crispy Layered Golden Potatoes / Sea Salt Flakes / Herbed Butter',
    taglineVi: 'Khoai tây ngàn lớp giòn tan / Muối biển / Bơ thảo mộc',
    description: 'Thinly sliced golden potatoes layered with herb-infused clarified butter, pressed, roasted, and flash-fried until ultra-crisp, finished with delicate Maldon sea salt flakes.',
    descriptionVi: 'Khoai tây thái lát siêu mỏng xếp tầng cùng bơ thảo mộc, nướng chậm và chiên giòn tan từng lớp, hoàn thiện với muối biển vảy tinh khiết.',
    ingredients: [
      'Crispy Layered Golden Potatoes',
      'Clarified Herb Butter',
      'Maldon Sea Salt Flakes',
      'Fresh Thyme'
    ],
    ingredientsVi: [
      'Khoai tây ngàn lớp giòn tan',
      'Bơ thảo mộc',
      'Muối biển vảy Maldon',
      'Cỏ xạ hương tươi'
    ],
    dietary: ['Crispy Side', 'Chef Technique'],
    temperature: 'Crispy',
    primaryImage: 'https://images.unsplash.com/photo-1518013034458-3070831cac58?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'
    ],
    aspectRatio: 'square',
    colorPalette: ['#d7a153', '#f5edd6', '#312317'],
    funFact: 'Over forty paper-thin potato sheets pressed and cooked over 12 hours to achieve acoustic crispness.',
    funFactVi: 'Hơn 40 lớp khoai tây dát mỏng như tờ giấy ép chặt và chế biến qua 12 giờ để đạt độ giòn tan tuyệt đối.',
    pairing: {
      cocktailId: 'cocktail-pho',
      cocktailName: 'Phở',
      cocktailNameVi: 'Phở',
      notes: 'Clean botanical pho spices cut cleanly through the buttery crisp potato layers.',
      notesVi: 'Hương thảo mộc phở và chanh thanh tao làm nổi bật độ giòn béo của khoai tây ngàn lớp.'
    }
  }
];

export const FOOD_ITEMS: FoodItem[] = BASE_FOOD_ITEMS.map((item) => {
  const customImg = HARDCODED_IMAGES.food[item.id] || item.primaryImage;
  return {
    ...item,
    primaryImage: customImg,
    detailImages: [customImg, ...(item.detailImages || []).filter((img) => img !== customImg)],
  };
});
