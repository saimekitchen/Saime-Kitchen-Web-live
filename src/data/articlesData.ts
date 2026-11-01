import { HARDCODED_IMAGES } from './hardcodedImages';

export interface RestaurantReview {
  id: string;
  rank: number;
  name: string;
  nameVi: string;
  tagline: string;
  taglineVi: string;
  location: string;
  locationVi: string;
  openingHours: string;
  openingHoursVi: string;
  cuisine?: string;
  cuisineVi?: string;
  cocktailStyle?: string;
  cocktailStyleVi?: string;
  mustTry?: string;
  mustTryVi?: string;
  priceRange: string;
  priceRangeVi: string;
  atmosphere?: string;
  atmosphereVi?: string;
  image: string;
  imageCaption?: string;
  imageCaptionVi?: string;
  paragraphs: string[];
  paragraphsVi: string[];
  isSaime?: boolean;
}

export interface ArticleItem {
  id: string;
  slug?: string;
  category: string;
  categoryVi: string;
  date: string;
  dateVi: string;
  readTime: string;
  readTimeVi: string;
  title: string;
  titleVi: string;
  shortDescription: string;
  shortDescriptionVi: string;
  coverImage: string;
  badge?: string;
  badgeVi?: string;
  author: string;
  introParagraphs?: string[];
  introParagraphsVi?: string[];
  restaurantsData?: RestaurantReview[];
  conclusion?: {
    title: string;
    titleVi: string;
    text: string;
    textVi: string;
  };
}

export const RESTAURANTS_TOP_8: RestaurantReview[] = [
  {
    id: 'saime-introverts',
    rank: 1,
    name: 'Saime Introverts',
    nameVi: 'Saime Introverts',
    tagline: 'The Ultimate Modern Vietnamese Fusion & Mixology Experience',
    taglineVi: 'Trải Nghiệm Fusion Tuổi Thơ & Mixology Độc Bản',
    location: '144 Ly Thai To, Hoi An East Ward, Hoi An',
    locationVi: '144 Lý Thái Tổ, phường Hội An Đông, Hội An',
    openingHours: '3:00 PM - 11:00 PM (Closed on Mondays)',
    openingHoursVi: '15:00 - 23:00 (Đóng cửa Thứ Hai hàng tuần)',
    cuisine: 'Modern Vietnamese Childhood Fusion & Regional Cocktail Mixology',
    cuisineVi: 'Fusion Ẩm thực Tuổi thơ Việt Nam & Cocktail Đặc sản 3 Miền',
    priceRange: 'Mid-range (75,000 VND for appetizers to 250,000 VND for main courses)',
    priceRangeVi: 'Tầm trung (75.000 VNĐ cho món khai vị đến 250.000 VNĐ cho món chính)',
    atmosphere: 'Modern, airy, quiet, and minimalist with spacious indoor & outdoor seating',
    atmosphereVi: 'Hiện đại, thoáng đãng, yên tĩnh, tối giản với không gian trong nhà & ngoài trời rộng rãi',
    image: HARDCODED_IMAGES.food['food-tam'] || '/images/food/food-tam.jpg',
    imageCaption: 'Saime Introverts - Modern Vietnamese Childhood Fusion Dining at 144 Ly Thai To',
    imageCaptionVi: 'Saime Introverts - Ẩm thực Fusion tuổi thơ đương đại tại 144 Lý Thái Tổ',
    isSaime: true,
    paragraphs: [
      'If there is one venue redefining fusion dining in Hoi An, it is Saime introverts. Founded by a passionate young team deeply rooted in Vietnamese food culture, Saime reimagines beloved Vietnamese childhood food memories through a modern, contemporary culinary lens.',
      'Unlike conventional upscale venues that can feel overly formal or stiff, Saime offers an intimate, tranquil sanctuary. Here, nostalgia is transformed into art: traditional home-cooked recipes and iconic street bites are elevated with modern cooking techniques and global influences. Every dish is served with an interactive story card, giving diners a soulful glimpse into authentic Vietnamese heritage.',
      'In addition to its inventive food menu, Saime introverts is famous for its 12 signature cocktails inspired by regional specialties across Vietnam. Must-try creations include the aromatic Phở Cocktail and the complex Cao Lầu Cocktail. For those seeking an unforgettable blend of culinary story-telling, relaxed luxury, and exceptional value, Saime stands out as the ultimate destination among top restaurants in Hoi An.'
    ],
    paragraphsVi: [
      'Đứng đầu danh sách các nhà hàng fusion dining tại Hội An chắc chắn là Saime introverts. Được sáng lập bởi một đội ngũ trẻ đầy tâm huyết với văn hóa Việt, Saime mang đến một làn gió hoàn toàn mới khi làm mới các món ăn tuổi thơ quen thuộc bằng kỹ thuật nấu ăn hiện đại và tư duy ẩm thực quốc tế.',
      'Khác với những không gian fine dining quá trang trọng hay gò bó, Saime chọn cho mình một khoảng trời tĩnh lặng, tối giản và vô cùng ấm cúng. Tại đây, mỗi món ăn không chỉ được trình bày đẹp mắt mà còn đi kèm một tấm thẻ câu chuyện, giúp du khách hiểu sâu hơn về ký ức và văn hóa Việt Nam qua góc nhìn hiện đại.',
      'Đặc biệt, Saime introverts còn chinh phục thực khách bởi bộ sưu tập 12 món cocktail signature lấy cảm hứng từ đặc sản 3 miền như Phở Cocktail hay Cao Lầu Cocktail. Sự kết hợp giữa ẩm thực hoài niệm, cocktail độc bản và mức giá cực kỳ hợp lý giúp Saime trở thành điểm đến nổi bật nhất trong danh sách top nhà hàng tại Hội An.'
    ]
  },
  {
    id: 'mua-hoi-an',
    rank: 2,
    name: 'Mùa Hội An',
    nameVi: 'Mùa Hội An',
    tagline: 'Organic Farm-to-Table Fine Dining',
    taglineVi: 'Ẩm Thực Hữu Cơ Trà Quế',
    location: 'Tra Que Vegetable Village, Hoi An',
    locationVi: 'Làng rau Trà Quế, Hội An',
    openingHours: '5:00 PM - 10:00 PM (Closed on Wednesdays)',
    openingHoursVi: '17:00 - 22:00 (Đóng cửa Thứ Tư)',
    cuisine: 'Modern Organic Vietnamese',
    cuisineVi: 'Ẩm thực Việt Nam hiện đại từ nguyên liệu hữu cơ',
    priceRange: 'High-end (Set menu around 1,000,000 VND/person)',
    priceRangeVi: 'Cao cấp (Set menu khoảng 1.000.000 VNĐ/người)',
    image: 'https://thedotmagazine.com/wp-content/uploads/2022/05/Tru-Lang-at-MUA-Hoi-An3.jpg',
    imageCaption: 'Mùa Hội An - Hyper-local farm-to-table dining nestled in Tra Que Vegetable Village',
    imageCaptionVi: 'Mùa Hội An - Trải nghiệm ẩm thực hữu cơ tinh tế giữa lòng làng rau Trà Quế',
    paragraphs: [
      'Located in Tra Que Village, Mùa Hoi An focuses on modern Vietnamese dishes crafted from hyper-local organic ingredients. Offering a fixed set menu influenced by daily garden harvests and fresh local seafood, Mùa delivers a serene, nature-connected dining journey.'
    ],
    paragraphsVi: [
      'Nằm giữa làng rau Trà Quế bình yên, Mùa Hội An phục vụ các set menu sáng tạo từ rau củ hữu cơ, hải sản tươi sống và thịt địa phương. Đây là lựa chọn lý tưởng cho một hành trình ẩm thực thanh tịnh và gắn liền với thiên nhiên.'
    ]
  },
  {
    id: 'mango-rooms',
    rank: 3,
    name: 'Mango Rooms',
    nameVi: 'Mango Rooms',
    tagline: 'Latin-Vietnamese Riverside Fusion',
    taglineVi: 'Fusion Phong Cách Latin & Việt Nam Bên Bờ Sông',
    location: '37 Phan Boi Chau, Hoi An',
    locationVi: '37 Phan Bội Châu, Hội An',
    openingHours: '8:00 AM - 11:00 PM',
    openingHoursVi: '08:00 - 23:00',
    cuisine: 'Global Fusion (Vietnamese with Mexican & Spanish influences)',
    cuisineVi: 'Global Fusion (Việt Nam với ảnh hưởng Mexico & Tây Ban Nha)',
    priceRange: 'Mid-range (290,000 VND - 500,000 VND)',
    priceRangeVi: 'Tầm trung (290.000 VNĐ - 500.000 VNĐ)',
    image: 'https://static.wixstatic.com/media/f0d1fa_16bea7b0431e477293681f048e7c4359~mv2.jpg/v1/fill/w_1800,h_1200,al_c/f0d1fa_16bea7b0431e477293681f048e7c4359~mv2.jpg',
    imageCaption: 'Mango Rooms - Vibrant Latin-Vietnamese fusion dining along the Thu Bon riverside',
    imageCaptionVi: 'Mango Rooms - Ẩm thực sắc màu Mỹ Latinh & hương vị Việt bên bờ sông Thu Bồn',
    paragraphs: [
      "Overlooking the Thu Bon River, Mango Rooms brings a vibrant, tropical energy to Hoi An's culinary map. Known for combining local ingredients with Latin culinary techniques, it offers colorful dishes and a lively cocktail bar."
    ],
    paragraphsVi: [
      'Sở hữu tầm nhìn ra dòng sông Thu Bồn thơ mộng, Mango Rooms mang nguồn năng lượng nhiệt đới rực rỡ đến bản đồ ẩm thực Hội An. Nổi tiếng với việc kết hợp nguyên liệu bản địa và kỹ thuật ẩm thực Mỹ Latinh, nhà hàng đem tới những món ăn đầy màu sắc cùng quầy bar sôi động.'
    ]
  },
  {
    id: 'the-temple-restaurant',
    rank: 4,
    name: 'The Temple Restaurant & Lounge',
    nameVi: 'The Temple Restaurant & Lounge',
    tagline: 'European & Asian Luxury Dining',
    taglineVi: 'Ẩm Thực Sang Trọng Âu & Á Bên Hồ Bơi',
    location: '132 Hung Vuong, Cam Pho Ward, Hoi An West',
    locationVi: '132 Hùng Vương, phường Cẩm Phô, Hội An',
    openingHours: '6:30 AM - 12:00 AM',
    openingHoursVi: '06:30 - 00:00',
    cuisine: 'International Fusion (Asian, French & European)',
    cuisineVi: 'Fusion Quốc tế (Á, Pháp & Châu Âu)',
    priceRange: 'High-end (Main courses 490,000 VND - 690,000 VND)',
    priceRangeVi: 'Cao cấp (Món chính từ 490.000 VNĐ - 690.000 VNĐ)',
    image: 'https://lasiestaresorts.com/wp-content/uploads/2025/12/smallThe-Temple-Restaurant_5455.jpg',
    imageCaption: 'The Temple Restaurant & Lounge - Colonial poolside luxury with refined Eurasian gastronomy',
    imageCaptionVi: 'The Temple Restaurant & Lounge - Không gian tiệc sang trọng bên hồ bơi phong cách thuộc địa',
    paragraphs: [
      'Set in a luxury poolside setting with subtle colonial decor, The Temple Restaurant & Lounge caters to intimate romantic dinners and special celebrations. It serves refined international fusion paired with an extensive wine selection.'
    ],
    paragraphsVi: [
      'Nằm trong không gian bên hồ bơi sang trọng với nét kiến trúc thuộc địa tinh tế, The Temple Restaurant & Lounge là điểm hẹn lý tưởng cho những bữa tối lãng mạn và kỷ niệm đặc biệt. Nhà hàng phục vụ các món fusion quốc tế cao cấp kết hợp danh mục rượu vang phong phú.'
    ]
  },
  {
    id: 'lim-dining-room',
    rank: 5,
    name: 'Lim Dining Room',
    nameVi: 'Lim Dining Room',
    tagline: 'Modern Italian in a Heritage Villa',
    taglineVi: 'Ẩm Thực Ý Đương Đại Trong Ngôi Nhà Cổ',
    location: '96 Nguyen Thai Hoc, Minh An Ward, Hoi An',
    locationVi: '96 Nguyễn Thái Học, phường Minh An, Hội An',
    openingHours: '8:00 AM - 10:00 PM',
    openingHoursVi: '08:00 - 22:00',
    cuisine: 'Modern Italian',
    cuisineVi: 'Ẩm thực Ý hiện đại',
    priceRange: 'High-end (Tasting menu from 550,000 VND++/person)',
    priceRangeVi: 'Cao cấp (Tasting menu từ 550.000 VNĐ++/người)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfWr7LKlqsGn_JtNkOq5ugvGKVOaXkwTjAumhV-K8oWQlbqqVKTxT3IA&s=10',
    imageCaption: 'Lim Dining Room - Contemporary handmade Italian pasta in an ancient timber town house',
    imageCaptionVi: 'Lim Dining Room - Hương vị Ý tinh tế trong không gian nhà gỗ cổ kính phố Hội',
    paragraphs: [
      'Housed inside a restored traditional wooden house in the Ancient Town, Lim Dining Room delivers a slow-paced modern Italian dining experience. It is an ideal spot for couples seeking gourmet pasta, fine wine, and a candlelit atmosphere.'
    ],
    paragraphsVi: [
      'Tọa lạc trong một ngôi nhà rường gỗ truyền thống được phục dựng ngay giữa lòng phố cổ, Lim Dining Room mang đến trải nghiệm ẩm thực Ý đương đại lắng đọng. Đây là điểm dừng chân hoàn hảo cho các cặp đôi tìm kiếm mì Ý thủ công thượng hạng, rượu vang và không gian lung linh ánh nến.'
    ]
  },
  {
    id: 'la-table-hoi-an',
    rank: 6,
    name: 'La Table Hoi An',
    nameVi: 'La Table Hoi An',
    tagline: 'French-Vietnamese Culinary Elegance',
    taglineVi: 'Tinh Hoa Ẩm Thực Pháp & Hương Vị Việt',
    location: '78A Phan Chu Trinh, Minh An Ward, Hoi An',
    locationVi: '78A Phan Chu Trinh, phường Minh An, Hội An',
    openingHours: '5:00 PM - 9:00 PM',
    openingHoursVi: '17:00 - 21:00',
    cuisine: 'French with Vietnamese influences',
    cuisineVi: 'Ẩm thực Pháp mang âm hưởng Việt',
    priceRange: 'High-end (Mains 450,000 VND - 850,000 VND; Set menu up to 1,200,000 VND)',
    priceRangeVi: 'Cao cấp (Món chính 450.000 VNĐ - 850.000 VNĐ; Set menu tới 1.200.000 VNĐ)',
    image: 'https://latablehoian.com/images/space-dining-2000.jpg',
    imageCaption: 'La Table Hoi An - Haute French cooking techniques marrying central Vietnamese ingredients',
    imageCaptionVi: 'La Table Hoi An - Sự giao thoa nghệ thuật Pháp với tinh hoa nông sản miền Trung',
    paragraphs: [
      'La Table Hoi An applies classic French culinary techniques to fresh local Vietnamese ingredients. Located in the heart of the Old Town, it provides an intimate and sophisticated environment for high-end dining.'
    ],
    paragraphsVi: [
      'La Table Hoi An kết hợp kỹ thuật chế biến kinh điển của Pháp với nguồn nguyên liệu tươi ngon bản địa. Nằm ngay trung tâm phố cổ, nhà hàng mang đến một không gian ấm cúng, sang trọng cho những bữa ăn đẳng cấp.'
    ]
  },
  {
    id: 'the-soul-restaurant',
    rank: 7,
    name: 'The Soul Restaurant',
    nameVi: 'The Soul Restaurant',
    tagline: 'Romantic Garden & Riverside Dining',
    taglineVi: 'Bữa Tối Lãng Mạn Bên Vườn & Bờ Sông',
    location: '47 Thoai Ngoc Hau, Cam Pho Ward, Hoi An',
    locationVi: '47 Thoại Ngọc Hầu, phường Cẩm Phô, Hội An',
    openingHours: '10:00 AM - 10:00 PM',
    openingHoursVi: '10:00 - 22:00',
    cuisine: 'Vietnamese & Western Fusion',
    cuisineVi: 'Fusion Việt & Tây phương',
    priceRange: 'Mid-range to High-end (Romantic set menus from 349,000 VND/person)',
    priceRangeVi: 'Tầm trung đến Cao cấp (Set menu lãng mạn từ 349.000 VNĐ/người)',
    image: 'https://thesoulhoian.com/wp-content/uploads/2023/09/z4737239659748_d8711256b33419dcaf0f11e712a92c9f.jpg',
    imageCaption: 'The Soul Restaurant - Breezy riverside garden dining with romantic evening illumination',
    imageCaptionVi: 'The Soul Restaurant - Không gian ẩm thực sân vườn xanh mát bên sông Hoài',
    paragraphs: [
      'Offering a lush garden ambiance right by the river, The Soul Restaurant seamlessly blends Western taste with traditional local cooking. Its relaxed garden setting makes it a great choice for evening gatherings.'
    ],
    paragraphsVi: [
      'Với không gian sân vườn xanh mướt trải dài bên dòng sông, The Soul Restaurant kết hợp hài hòa khẩu vị phương Tây cùng nét nấu nướng truyền thống địa phương. Không gian sân vườn thư thái rất thích hợp cho những buổi tụ họp ấm áp buổi tối.'
    ]
  },
  {
    id: 'melody-fine-dining',
    rank: 8,
    name: 'Melody Fine Dining Restaurant',
    nameVi: 'Melody Fine Dining Restaurant',
    tagline: 'Modern International & Local Cuisine',
    taglineVi: 'Ẩm Thực Quốc Tế & Bản Địa Đương Đại',
    location: '86/2 Tran Hung Dao, Minh An Ward, Hoi An',
    locationVi: '86/2 Trần Hưng Đạo, phường Minh An, Hội An',
    openingHours: '6:00 AM - 11:00 PM',
    openingHoursVi: '06:00 - 23:00',
    cuisine: 'Vietnamese & International Fusion',
    cuisineVi: 'Fusion Việt & Quốc tế',
    priceRange: 'Mid-range to High-end (200,000 VND - 300,000 VND/person)',
    priceRangeVi: 'Tầm trung đến Cao cấp (200.000 VNĐ - 300.000 VNĐ/người)',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/35/4b/29/melody-restaurant.jpg?w=500&h=-1&s=1',
    imageCaption: 'Melody Fine Dining - Poolside gourmet dining in the heart of Hoi An',
    imageCaptionVi: 'Melody Fine Dining - Ẩm thực tinh tế bên hồ bơi resort lung linh ánh đèn',
    paragraphs: [
      'Situated next to lantern-lit resort pools, Melody Fine Dining offers accessible gourmet takes on classic Vietnamese dishes alongside international staples, making it ideal for hotel guests and families.'
    ],
    paragraphsVi: [
      'Tọa lạc bên hồ bơi resort lung linh ánh đèn lồng, Melody Fine Dining mang đến các món ăn Việt Nam truyền thống được tinh chỉnh tinh tế cùng các món quốc tế được ưa chuộng, rất phù hợp cho khách lưu trú và các gia đình.'
    ]
  }
];

export const BARS_TOP_5: RestaurantReview[] = [
  {
    id: 'saime-introverts-bar',
    rank: 1,
    name: 'Saime Introverts',
    nameVi: 'Saime Introverts',
    tagline: 'The Ultimate Vietnamese Storytelling & Regional Mixology Sanctuary',
    taglineVi: 'Hành Trình Mixology Kể Chuyện Ký Ức Tuổi Thơ Việt',
    location: '144 Ly Thai To, Hoi An East Ward, Hoi An',
    locationVi: '144 Lý Thái Tổ, phường Hội An Đông, Hội An',
    openingHours: '3:00 PM – 11:00 PM',
    openingHoursVi: '15:00 – 23:00',
    priceRange: '180,000 VND – 220,000 VND per cocktail',
    priceRangeVi: '180.000 VNĐ – 220.000 VNĐ / ly cocktail',
    cocktailStyle: 'Classics & 12 Signature Cocktails inspired by regional specialties across Vietnam',
    cocktailStyleVi: 'Classic & 12 món Signature lấy cảm hứng từ đặc sản 3 miền Việt Nam',
    mustTry: 'Phở Hà Nội, Cao Lầu Hội An, Canh Chua, Đá Me Sài Gòn',
    mustTryVi: 'Phở Hà Nội, Cao Lầu Hội An, Canh Chua, Đá Me Sài Gòn',
    atmosphere: 'Modern, airy, quiet, and minimalist with spacious indoor & outdoor seating',
    atmosphereVi: 'Hiện đại, thoáng đãng, yên tĩnh, tối giản với không gian trong nhà & ngoài trời rộng rãi',
    image: HARDCODED_IMAGES.cocktails['cocktail-pho'] || 'https://i.imgur.com/SOypJCj.jpeg',
    imageCaption: 'Saime Introverts - Regional mixology storytelling & liquid chemistry at 144 Ly Thai To',
    imageCaptionVi: 'Saime Introverts - Hành trình mixology 12 cocktail đặc sản 3 miền tại 144 Lý Thái Tổ',
    isSaime: true,
    paragraphs: [
      'If you seek more than just a place to drink, Saime introverts delivers the most soulful and creative cocktail experience in Hoi An. Founded by a passionate young team eager to share Vietnamese childhood memories through modern mixology, Saime transforms local heritage into liquid art.',
      'The signature cocktail menu highlights 12 regional specialties from North to South Vietnam. By utilizing advanced mixology techniques such as clarification and molecular gastronomy, the team crafts drinks with complex, balanced flavors. Every cocktail is served with a story card, allowing guests to discover the culture and childhood nostalgia behind each sip.',
      'Set in an airy, minimalist space with both indoor and outdoor seating, Saime introverts offers a warm, low-key haven away from the crowded street noise. It is not merely a bar, but a cozy space designed for meaningful conversations, connection, and deep relaxation. For cocktail enthusiasts seeking authenticity, innovation, and cozy elegance, Saime stands out as the top destination among top bars in Hoi An.'
    ],
    paragraphsVi: [
      'Nếu bạn muốn thưởng thức một ly cocktail không chỉ ngon mà còn giàu cảm xúc, Saime introverts chắc chắn là trải nghiệm cocktail bar độc đáo nhất tại Hội An. Được sáng lập bởi một đội ngũ trẻ tài năng, Saime mượn nghệ thuật pha chế hiện đại để gửi gắm những ký ức tuổi thơ và văn hóa Việt Nam vào từng ly nước.',
      'Menu signature của Saime gồm 12 món cocktail đại diện cho đặc sản 3 miền. Nhờ ứng dụng các kỹ thuật mixology hiện đại như lọc trong (clarification) hay ẩm thực phân tử (molecular gastronomy), các thức uống tại đây mang hương vị tròn trịa, cân bằng và đầy bất ngờ. Mỗi ly cocktail được phục vụ cùng một lá bài câu chuyện, giúp thực khách khám phá nét đẹp văn hóa đằng sau từng nguyên liệu.',
      'Sở hữu không gian tối giản, rộng rãi và vô cùng yên bình, Saime introverts mang đến cảm giác ấm cúng, riêng tư. Đây không đơn thuần là nơi uống cocktail, mà là không gian để lắng nghe, sẻ chia và kết nối những tâm hồn đồng điệu.'
    ]
  },
  {
    id: 'speakeasy-moon-bar',
    rank: 2,
    name: 'Speakeasy Moon Bar',
    nameVi: 'Speakeasy Moon Bar',
    tagline: 'Romantic Riverside Rooftop',
    taglineVi: 'Rooftop Lãng Mạn Bên Dòng Sông',
    location: '23 Nguyen Phuc Chu, Minh An Ward, Hoi An',
    locationVi: '23 Nguyễn Phúc Chu, phường Minh An, Hội An',
    openingHours: '4:00 PM – 1:30 AM',
    openingHoursVi: '16:00 – 01:30 (Sáng)',
    priceRange: '169,000 VND (Classics) – 250,000 VND (Signatures)',
    priceRangeVi: '169.000 VNĐ (Classic) – 250.000 VNĐ (Signature)',
    cocktailStyle: 'Classic cocktails & sweet-and-sour signature creations',
    cocktailStyleVi: 'Classic cocktails & các món signature thiên vị chua ngọt',
    mustTry: 'Moonlit Hoi An, Phở Hà Nội',
    mustTryVi: 'Moonlit Hoi An, Phở Hà Nội',
    atmosphere: 'Lively rooftop overlooking the river, soft lighting, and vintage charm',
    atmosphereVi: 'Rooftop trung tâm phố cổ, sôi động, thoáng mát ngắm dòng sông về đêm',
    image: 'https://moonbar.com.vn/UploadFile/Gallery/a2.jpg',
    imageCaption: 'Speakeasy Moon Bar - Riverside rooftop escape in central Hoi An',
    imageCaptionVi: 'Speakeasy Moon Bar - Không gian rooftop ngắm dòng sông lung linh về đêm',
    paragraphs: [
      'Tucked away in central Hoi An, Speakeasy Moon Bar offers a romantic rooftop escape with views of the glittering river. Featuring amber chandeliers and velvet accents, it is a great spot for sweet-and-sour signature cocktails in a lively setting.'
    ],
    paragraphsVi: [
      'Nằm ngay trung tâm Phố Cổ, Speakeasy Moon Bar sở hữu lối vào kín đáo dẫn lên không gian rooftop lãng mạn. Với ánh đèn vàng ấm áp và góc nhìn ra dòng sông lung linh, quán phù hợp cho những ai thích thưởng thức cocktail chua ngọt trong không khí sôi động.'
    ]
  },
  {
    id: 'mezcal-cocteleria',
    rank: 3,
    name: 'Mezcal Coctelería',
    nameVi: 'Mezcal Coctelería',
    tagline: 'Agave Spirits & 1950s Vintage Vibe',
    taglineVi: 'Không Gian Vintage 1950s & Rượu Agave Độc Đáo',
    location: '38 Phan Chu Trinh, Minh An Ward, Hoi An',
    locationVi: '38 Phan Chu Trinh, phường Minh An, Hội An',
    openingHours: '6:00 PM – 11:45 PM',
    openingHoursVi: '18:00 – 23:45',
    priceRange: '180,000 VND – 400,000 VND per cocktail',
    priceRangeVi: '180.000 VNĐ – 400.000 VNĐ / ly cocktail',
    cocktailStyle: 'Agave classics (Mezcal & Tequila) infused with local ingredients',
    cocktailStyleVi: 'Chuyên về dòng rượu Agave (Mezcal & Tequila) kết hợp nguyên liệu Việt',
    mustTry: 'Margarita Xi Muoi, El Culo',
    mustTryVi: 'Margarita Xí Muội, El Culo',
    atmosphere: 'Discreet speakeasy vibe with 1950s nostalgia and cozy Old Town views',
    atmosphereVi: 'Khép kín, hoài cổ thập niên 1950, ấm cúng và mang phong cách speakeasy',
    image: 'https://cdn.corner.inc/place-photo/google-gallery/1282802/43f02e9e17e81a30bb6e603ce6d2bb4b.jpeg',
    imageCaption: 'Mezcal Coctelería - Hidden agave speakeasy with 1950s vintage charm',
    imageCaptionVi: 'Mezcal Coctelería - Quán speakeasy hoài cổ chuyên dòng rượu Agave',
    paragraphs: [
      'Hidden behind a small sign up the stairs, Mezcal Coctelería specializes in agave spirits, rare Mezcals, and Tequilas. The bar folds local Vietnamese citrus, chili, tamarind, and Tra Que herbs into classic Mexican spirits, creating a nostalgic 1950s speakeasy feel.'
    ],
    paragraphsVi: [
      'Nằm ẩn mình sau tấm biển nhỏ trên cầu thang, Mezcal Coctelería là điểm đến cho những ai yêu thích Mezcal và Tequila. Quán kết hợp các loại rượu Agave cao cấp với nguyên liệu địa phương như chanh, ớt, me, thảo mộc Trà Quế, tạo nên phong cách hoài cổ thập niên 1950 đầy mê hoặc.'
    ]
  },
  {
    id: 'hem-hoi-an',
    rank: 4,
    name: 'Hèm Hoi An Cocktail Bar',
    nameVi: 'Hèm Hoi An Cocktail Bar',
    tagline: 'Vietnamese Saké in a Historic House',
    taglineVi: 'Trải Nghiệm Saké Việt Trong Nhà Cổ',
    location: '317 Nguyen Duy Hieu, Cam Chau Ward, Hoi An',
    locationVi: '317 Nguyễn Duy Hiệu, phường Cẩm Châu, Hội An',
    openingHours: '4:00 PM – 12:00 AM (Midnight)',
    openingHoursVi: '16:00 – 00:00 (Đêm)',
    priceRange: '170,000 VND – 280,000 VND per cocktail',
    priceRangeVi: '170.000 VNĐ – 280.000 VNĐ / ly cocktail',
    cocktailStyle: 'Vietnamese Saké and rice spirit cocktails blended with local ingredients',
    cocktailStyleVi: 'Cocktail pha chế từ Saké Việt Nam và rượu gạo kết hợp nguyên liệu bản địa',
    mustTry: 'Chị Đa, Hiền, Em',
    mustTryVi: 'Chị Đa, Hiền, Em',
    atmosphere: 'Historic, antique, artistic, set inside an authentic ancient house',
    atmosphereVi: 'Cổ kính, mộc mạc, đậm chất nghệ thuật bên trong ngôi nhà cổ Hội An',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/c1/88/df/caption.jpg?w=1200&h=1200&s=1',
    imageCaption: 'Hèm Hoi An - Vietnamese Saké cocktail craftsmanship in an ancient wooden house',
    imageCaptionVi: 'Hèm Hoi An - Tinh hoa Saké Việt trong không gian nhà rường cổ kính',
    paragraphs: [
      'Hèm is the first Vietnamese saké cocktail bar, celebrating local rice spirits within a weathered historic Hoi An house. Combining Vietnamese-made saké with culinary produce and select Japanese influences, Hèm offers an artistic and cozy atmosphere.'
    ],
    paragraphsVi: [
      'Hèm là quán cocktail bar đầu tiên sử dụng Saké Việt Nam làm nền tảng pha chế. Tọa lạc trong một ngôi nhà cổ giữ nguyên những bức tường rêu phong, Hèm tôn vinh hạt gạo Việt qua kỹ thuật mixology tinh tế và đậm chất nghệ thuật.'
    ]
  },
  {
    id: 'market-bar-terrace',
    rank: 5,
    name: 'Market Bar - Market Terrace',
    nameVi: 'Market Bar - Market Terrace',
    tagline: 'Rooftop Sunset & Custom Gin Infusions',
    taglineVi: 'Góc Chill Ngắm Hoàng Hôn & Chuyên Gin Infusion',
    location: 'Terrace 1, Hoi An Cloth Market, Bach Dang / 02 Hoang Dieu Street, Hoi An',
    locationVi: 'Terrace 1, Chợ Vải Hội An, Bạch Đằng / 02 Hoàng Diệu, Hội An',
    openingHours: '4:00 PM – 11:00 PM',
    openingHoursVi: '16:00 – 23:00',
    priceRange: '170,000 VND – 450,000 VND per cocktail',
    priceRangeVi: '170.000 VNĐ – 450.000 VNĐ / ly cocktail',
    cocktailStyle: 'Custom Gin infusions, classic cocktails, and international wines',
    cocktailStyleVi: 'Tập trung vào các dòng Gin ngâm (Gin infusion), cocktail & rượu vang',
    mustTry: 'Cucumber & Mango Gin & Tonic, Strawberry Gin with Black Pepper',
    mustTryVi: 'Gin & Tonic dưa chuột xoài, Strawberry Gin với tiêu đen',
    atmosphere: 'Serene rooftop terrace overlooking the Cloth Market and Thu Bon River',
    atmosphereVi: 'Rooftop thoáng đãng ngay trên tầng thượng Chợ Vải, nhìn ra sông Thu Bồn',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/29/92/fd/market-bar-market-terrace.jpg?w=1100&h=1100&s=1',
    imageCaption: 'Market Bar - Sunset terrace overlooking the Cloth Market and Thu Bon River',
    imageCaptionVi: 'Market Bar - Hoàng hôn trên tầng thượng ngắm sông Thu Bồn và phố cổ',
    paragraphs: [
      'Perched above the bustling Hoi An Cloth Market, Market Bar provides panoramic views of the river and ancient rooftops. It is well known for its custom gin infusions and relaxed terrace ambiance, making it a popular choice for sunset drinks.'
    ],
    paragraphsVi: [
      'Nằm trên tầng thượng Chợ Vải Hội An, Market Bar mang đến tầm nhìn bao quát Phố Cổ và sông Thu Bồn. Nơi đây nổi tiếng với các dòng Gin ngâm thủ công và không gian sân thượng thư thái, thích hợp để ngắm hoàng hôn.'
    ]
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'top-8-fine-dining-fusion-hoi-an',
    slug: 'top-8-fine-dining-fusion-hoi-an',
    category: 'Culinary Guide',
    categoryVi: 'Cẩm Nang Ẩm Thực',
    date: 'October 2026',
    dateVi: 'Tháng 10/2026',
    readTime: '7 min read',
    readTimeVi: '7 phút đọc',
    badge: 'Featured Guide',
    badgeVi: 'Cẩm Nang Nổi Bật',
    coverImage: HARDCODED_IMAGES.food['food-tam'] || '/images/food/food-tam.jpg',
    author: 'Saime Editorial Team',
    title: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An You Must Try [Updated 10/2026]',
    titleVi: 'Top 8 Nhà Hàng Fine Dining & Fusion Dining Đáng Thử Nhất Tại Hội An [Cập nhật 10/2026]',
    shortDescription:
      'Hoi An is celebrated not only for lantern-lit alleyways but also for its evolving culinary scene. Here is our curated guide to the top 8 fine dining and fusion venues you simply cannot miss.',
    shortDescriptionVi:
      'Hội An không chỉ nổi tiếng với những con phố cổ vàng rực đèn lồng hay di sản văn hóa lâu đời, mà còn là điểm đến ẩm thực hấp dẫn với hàng loạt nhà hàng sang trọng và sáng tạo. Dưới đây là danh sách 8 nhà hàng không thể bỏ qua.',
    restaurantsData: RESTAURANTS_TOP_8,
    conclusion: {
      title: 'Why Saime Introverts Should Be at the Top of Your Hoi An Bucket List',
      titleVi: 'Vì Sao Saime Introverts Xứng Đáng Đứng Đầu Danh Sách Trải Nghiệm Ẩm Thực Tại Hội An?',
      text: 'While Hoi An offers many luxury and international dining options, Saime introverts stands out as the most authentic, creative, and memorable fusion dining experience in Hoi An. By pairing nostalgic childhood storytelling with innovative cuisine and regional mixology at reasonable prices, Saime provides a heartfelt journey into modern Vietnamese soul.',
      textVi:
        'Dù Hội An có nhiều lựa chọn ẩm thực cao cấp và quốc tế, Saime introverts vẫn nổi bật như một trải nghiệm fusion dining chân thực, sáng tạo và khó quên nhất tại Hội An. Bằng cách kết hợp những câu chuyện tuổi thơ đầy hoài niệm với nghệ thuật ẩm thực hiện đại và phong cách mixology đặc sản ba miền ở mức giá vô cùng hợp lý, Saime mang đến một hành trình chạm tới chiều sâu tâm hồn ẩm thực Việt Nam.'
    }
  },
  {
    id: '5-must-try-cocktail-bars-hoi-an',
    slug: '5-must-try-cocktail-bars-hoi-an',
    category: 'Nightlife & Mixology',
    categoryVi: 'Nightlife & Mixology',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '6 min read',
    readTimeVi: '6 phút đọc',
    badge: 'Cocktail Guide',
    badgeVi: 'Cẩm Nang Cocktail',
    coverImage: HARDCODED_IMAGES.cocktails['cocktail-pho'] || 'https://i.imgur.com/SOypJCj.jpeg',
    author: 'Saime Editorial Team',
    title: '5 Must-Try Cocktail Bars in Hoi An for an Unforgettable Nightlife Experience',
    titleVi: 'Top 5 Quán Cocktail Bar Nhất Định Phải Thử Tại Hội An',
    shortDescription:
      'When the sun sets over the Thu Bon River, discover the best cocktail bars in Hoi An. From hidden speakeasies to storytelling mixology sanctuaries, here are 5 must-visit bars.',
    shortDescriptionVi:
      'Khám phá 5 quán cocktail bar độc đáo và đẳng cấp nhất tại Hội An: từ speakeasy hoài cổ đến hành trình mixology kể chuyện ký ức tuổi thơ Việt Nam.',
    introParagraphs: [
      'When the sun sets over the Thu Bon River, the lantern-lit streets of Hoi An transform into a vibrant haven for mixology enthusiasts and leisure travelers. Beyond traditional teahouses and riverside cafes, the ancient town boasts a sophisticated bar scene. From hidden speakeasies to rooftop terraces, finding the perfect venue for a craft drink is essential.',
      'If you are looking for the absolute best cocktail bar Hoi An, an authentic cocktail experience Hoi An, or a guide to the top bars Hoi An, here are the 5 must-visit cocktail bars you should not miss.'
    ],
    introParagraphsVi: [
      'Khi màn đêm buông xuống trên dòng sông Thu Bồn, Phố Cổ Hội An khoác lên mình vẻ đẹp lung linh và quyến rũ. Không chỉ có trà quán hay các tiệm cà phê ven sông, Hội An còn sở hữu những quán cocktail bar độc đáo và đẳng cấp. Từ những quán speakeasy ẩn mình đến các không gian rooftop ngắm hoàng hôn, việc chọn một điểm dừng chân tinh tế để nhâm nhi đồ uống là trải nghiệm không thể bỏ qua.',
      'Nếu bạn đang tìm kiếm cocktail bar hoi an, một cocktail experience hoi an đúng nghĩa, hay danh sách top bars hoi an, dưới đây là 5 cái tên xuất sắc nhất dành cho bạn.'
    ],
    restaurantsData: BARS_TOP_5,
    conclusion: {
      title: 'Why Saime Introverts is the Top Cocktail Bar Choice in Hoi An',
      titleVi: 'Tại Sao Saime Introverts Là Lựa Chọn Cocktail Bar Hàng Đầu Tại Hội An?',
      text: 'While Hoi An offers diverse nightlife experiences—from lively rooftops to specialized agave bars—Saime introverts stands out for its unmatched creativity, emotional storytelling, and warm atmosphere. Combining advanced mixology techniques, regional Vietnamese flavors, and an interactive card deck experience, Saime offers a unique, intimate journey into modern Vietnamese culture.',
      textVi:
        'Dù Hội An có nhiều mô hình bar đa dạng—từ rooftop sôi động đến các quán chuyên về dòng rượu ngoại—Saime introverts vẫn khẳng định dấu ấn riêng nhờ tư duy sáng tạo sâu sắc, sự chân thành và trải nghiệm cảm xúc khác biệt. Việc kết hợp kỹ thuật mixology hiện đại với hương vị đặc sản 3 miền và những lá bài câu chuyện tuổi thơ giúp Saime trở thành điểm đến không thể bỏ qua cho bất kỳ ai tìm kiếm một đêm Hội An đáng nhớ.'
    }
  }
];

// Helper to look up an article by slug or id or partial match
export function findArticleBySlug(rawSlug: string): ArticleItem | undefined {
  if (!rawSlug) return undefined;
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();
  return (
    ARTICLES_DATA.find((a) => (a.slug && a.slug.toLowerCase() === slug) || a.id.toLowerCase() === slug) ||
    ARTICLES_DATA.find((a) => (a.slug && (a.slug.includes(slug) || slug.includes(a.slug))) || a.id.includes(slug) || slug.includes(a.id))
  );
}

