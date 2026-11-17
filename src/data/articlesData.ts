import { HARDCODED_IMAGES } from './hardcodedImages';

export interface RestaurantReview {
  id: string;
  rank: number;
  name: string;
  nameVi: string;
  tagline?: string;
  taglineVi?: string;
  location: string;
  locationVi: string;
  openingHours?: string;
  openingHoursVi?: string;
  cuisine?: string;
  cuisineVi?: string;
  cocktailStyle?: string;
  cocktailStyleVi?: string;
  mustTry?: string;
  mustTryVi?: string;
  priceRange?: string;
  priceRangeVi?: string;
  ticketPrice?: string;
  ticketPriceVi?: string;
  ticketLabel?: string;
  atmosphere?: string;
  atmosphereVi?: string;
  image: string;
  imageCaption?: string;
  imageCaptionVi?: string;
  paragraphs: string[];
  paragraphsVi: string[];
  isSaime?: boolean;
}

export interface EditorialParagraphItem {
  lead?: string;
  leadVi?: string;
  text: string;
  textVi: string;
}

export interface EditorialSection {
  id: string;
  title: string;
  titleVi: string;
  items: EditorialParagraphItem[];
  isVerdict?: boolean;
}

export interface VenueInfo {
  location: string;
  locationVi: string;
  openingHours: string;
  openingHoursVi: string;
  ticketPrice: string;
  ticketPriceVi: string;
  imageCaption?: string;
  imageCaptionVi?: string;
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
  seoTitle?: string;
  seoTitleVi?: string;
  metaDescription?: string;
  metaDescriptionVi?: string;
  shortDescription: string;
  shortDescriptionVi: string;
  coverImage: string;
  badge?: string;
  badgeVi?: string;
  author: string;
  introParagraphs?: string[];
  introParagraphsVi?: string[];
  restaurantsData?: RestaurantReview[];
  editorialSections?: EditorialSection[];
  venueInfo?: VenueInfo;
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
  },
  {
    id: 'unique-things-to-do-in-hoi-an',
    slug: 'unique-things-to-do-in-hoi-an',
    category: 'Local Experiences',
    categoryVi: 'Trải Nghiệm Bản Địa',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '5 min read',
    readTimeVi: '5 phút đọc',
    badge: 'Insider Guide',
    badgeVi: 'Góc Bản Địa',
    coverImage:
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sc9_giztBbe4ytY0KUq8XWG0I8BiW-wi3pbnmeDk4FEKxDEgFtPJORhufTW_oIY5G-_M6AONz75DpShVY-IOUHfny3trcp3wtOB6xt7lq01egTTvIar_LqwRFGtmfDn1cmkzo7ZYj0a3sO=s1360-w1360-h1020-rw',
    author: 'Saime Editorial Team',
    title: 'Unique Things to Do in Hoi An Beyond the Usual Tourist Trail',
    titleVi: 'Những trải nghiệm khác biệt tại Hội An ngoài các tour truyền thống',
    seoTitle: 'Unique Things to Do in Hoi An Beyond the Usual Tourist Trail',
    seoTitleVi: 'Những trải nghiệm khác biệt tại Hội An ngoài các tour truyền thống',
    metaDescription:
      'Looking for authentic things to do in Hoi An? Skip the standard tours and try dawn street food, custom cocktail crafting at Saime, stained glass art, and local "nhậu" spots.',
    metaDescriptionVi:
      'Bạn đã quen với làm đèn lồng hay lớp học nấu ăn? Khám phá ngay 5 hoạt động bản địa đầy sáng tạo tại Hội An: ăn sáng lúc 6h, tự pha cocktail tại Saime, làm kính màu và đi nhậu kiểu người địa phương.',
    shortDescription:
      'Looking for authentic things to do in Hoi An? Skip the standard tours and try dawn street food, custom cocktail crafting at Saime, stained glass art, and local "nhậu" spots.',
    shortDescriptionVi:
      'Bạn đã quen với làm đèn lồng hay lớp học nấu ăn? Khám phá ngay 5 hoạt động bản địa đầy sáng tạo tại Hội An: ăn sáng lúc 6h, tự pha cocktail tại Saime, làm kính màu và đi nhậu kiểu người địa phương.',
    introParagraphs: [
      'When searching for things to do in Hoi An, most travelers are immediately pointed toward lantern-making workshops, standard cooking classes, coffee-making sessions, or riding water buffaloes. While those classics have their charm, Hoi An holds a much quieter, more creative, and deeply local rhythm if you know where to look.',
      'If you are checking things to do near me and want to experience the Ancient Town like an insider, here are five unforgettable activities to add to your itinerary:'
    ],
    introParagraphsVi: [
      'Khi tìm kiếm những hoạt động thú vị tại Hội An, du khách thường được gợi ý làm đèn lồng, tham gia lớp học nấu ăn, pha cà phê hay cho vịt ăn ở đồng quê. Những trải nghiệm ấy rất vui, nhưng nếu bạn đã quen thuộc và muốn chạm vào một Hội An sâu lắng, sáng tạo và đậm chất đời sống hơn, hãy thử ngay 5 gợi ý dưới đây:'
    ],
    restaurantsData: [
      {
        id: 'dawn-street-food-coffee',
        rank: 1,
        name: 'Wake Up at 6:00 AM for Dawn Street Food & Morning Coffee',
        nameVi: 'Dạo phố cổ lúc 6h sáng, ăn xôi vỉa hè & uống cà phê cóc',
        location: 'Xôi Gà Lan - 41 Le Loi, Minh An, Hoi An',
        locationVi: 'Xôi Gà Lan - 41 Lê Lợi, Minh An, Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sc9_giztBbe4ytY0KUq8XWG0I8BiW-wi3pbnmeDk4FEKxDEgFtPJORhufTW_oIY5G-_M6AONz75DpShVY-IOUHfny3trcp3wtOB6xt7lq01egTTvIar_LqwRFGtmfDn1cmkzo7ZYj0a3sO=s1360-w1360-h1020-rw',
        imageCaption: 'Xôi Gà Lan - Dawn street food and morning rhythm on Le Loi Street',
        imageCaptionVi: 'Xôi Gà Lan - Hương vị xôi gà sáng sớm giữa lòng phố cổ Hội An',
        paragraphs: [
          'Hoi An transforms completely before the tour buses arrive. Step out around 6:00 AM to wander the quiet, golden-lit alleys while locals sweep their doorsteps and buy fresh produce. Follow the locals to Xôi Gà Lan for a steaming bowl of shredded chicken sticky rice served right on the sidewalk, then pull up a tiny plastic stool at a neighborhood coffee stall to watch the town slowly wake up.'
        ],
        paragraphsVi: [
          'Hội An đẹp và bình yên nhất vào khoảnh khắc bình minh, trước khi dòng khách du lịch đổ về. Hãy thử thức dậy lúc 6h sáng, tản bộ qua những con hẻm nhỏ vắng người, ghé gánh Xôi Gà Lan thưởng thức chén xôi nóng hổi đậm đà, rồi ngồi lại một quán cà phê cóc ven đường ngắm nhịp sống chậm rãi của người dân phố Hội.'
        ]
      },
      {
        id: 'custom-cocktail-saime-introverts',
        rank: 2,
        name: 'Create Your Own Signature Cocktail at Saime Introverts',
        nameVi: 'Tự tay sáng tạo ly cocktail mang dấu ấn riêng tại Saime Introverts',
        location: 'Saime Introverts - Fusion cocktail & dining, 144 Lý Thái Tổ, Hội An',
        locationVi: 'Saime Introverts - Fusion cocktail & dining, 144 Lý Thái Tổ, Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrXkTIinEYK0LdffcLVUkNza_OFEdRCSrUBGXjbtsY6x2e5kYBktraM75rZgLH9bp6QWkOf8lYUGvktYVp029ycoTn4ifBQXfDuvyMPaC25vxh3jnXhvip60HZ84nQ7do7nah2RxIotRwv=w243-h174-n-k-no-nu',
        imageCaption: 'Craft your own signature cocktail alongside Saime Introverts bartenders',
        imageCaptionVi: 'Tự tay pha chế ly cocktail mang dấu ấn riêng tại Saime Introverts',
        isSaime: true,
        paragraphs: [
          'For a cozy, intimate evening away from the bustling riverside crowds, head over to Saime Introverts - Fusion Cocktail & Dining. Known for its soulful Vietnamese fusion dishes and regional story-driven drinks, Saime also invites curious guests to step behind the flavors and craft their own signature cocktail alongside the young, passionate bartenders. Whether you love bold Central Vietnamese spices or subtle herbal notes, it is a personal, hands-on way to bottle your Hoi An memories.'
        ],
        paragraphsVi: [
          'Nếu bạn tìm kiếm một buổi tối ấm cúng, tránh xa sự ồn ào của khu trung tâm, hãy ghé Saime Introverts - Fusion Cocktail & Dining. Không chỉ phục vụ ẩm thực Việt fusion và bộ sưu tập cocktail kể chuyện vùng miền, Saime còn mang đến trải nghiệm tự tay sáng tạo ly cocktail signature của riêng bạn dưới sự hướng dẫn gần gũi từ các bartender trẻ. Một cách thật tinh tế để lưu giữ hương vị Hội An theo cá tính của chính mình.'
        ]
      },
      {
        id: 'stained-glass-phoenicia-studio',
        rank: 3,
        name: 'Craft Your Own Stained Glass Art at Phoenicia Studio',
        nameVi: 'Tự làm tranh kính màu nghệ thuật tại Phoenicia Studio',
        location: 'Phoenicia Stained Glass - Workshop & Souvenirs',
        locationVi: 'Phoenicia Studio - Hội An',
        image:
          'https://lh3.googleusercontent.com/grass-cs/AABkmLenAnhisd91Jf0OcjPSvnLFlvRtFjYajKa9KP8c7k5V7zpU2UFqkC0X7ImDaFUszyCxEyFNrshBvw8BQrgTnRB_uTCy57e0sFjiGE_u-dWYd-KuJ08U27FBY9Lc8_jXuAeztD8RENiajqq7=w289-h312-n-k-no',
        imageCaption: 'Handcrafted stained glass art workshop at Phoenicia Studio',
        imageCaptionVi: 'Workshop làm tranh kính màu thủ công tại Phoenicia Studio Hội An',
        paragraphs: [
          'If you love working with your hands, skip the mass-produced souvenirs and spend an afternoon at Phoenicia Studio. Here, you can learn the delicate art of cutting, foiling, and soldering colorful stained glass to create your own keepsake, from tiny suncatchers to custom pendants. It is a meditative, rewarding workshop tucked inside a peaceful artistic corner of town.'
        ],
        paragraphsVi: [
          'Thay vì mua những món quà lưu niệm làm sẵn, bạn có thể dành một buổi chiều tỉ mẩn cắt, ghép và hàn những mảnh kính màu rực rỡ tại Phoenicia Studio. Dưới sự hướng dẫn tận tình của nghệ nhân, bạn sẽ tự tay hoàn thiện một tác phẩm kính màu độc bản để mang về làm kỷ niệm.'
        ]
      },
      {
        id: 'outdoor-drawing-imperfect-art-studio',
        rank: 4,
        name: 'Join an Outdoor Drawing & Painting Session with Imperfect Art Studio',
        nameVi: 'Vẽ ký họa ngoài trời cùng Imperfect Art Studio',
        location: 'Imperfect Art Studio - Hoi An',
        locationVi: 'Imperfect Art Studio - Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1EIygtGo_E0nEwpYaujtA_-30WzI83N7mG3Zp_AFqJ-R2T_ciPBORIpr8l5_N-xV6qodmxuEC3mh1W-01FZA06UY1lqvLy7YTd9ZxVgSxR9VXy2R7iNswCCzHrqDtbcUrYbf7CKp5Aww=s1360-w1360-h1020-rw',
        imageCaption: 'Outdoor sketching and watercolor painting in Hoi An with Imperfect Art Studio',
        imageCaptionVi: 'Trải nghiệm vẽ ký họa phố cổ ngoài trời cùng Imperfect Art Studio',
        paragraphs: [
          'Hoi An’s moss-covered walls, ancient tiled roofs, and peaceful riverside paths look like a living watercolor painting. Instead of just snapping photos, join an outdoor sketching or painting session with Imperfect Art Studio. Designed for all skill levels, even complete beginners, this experience encourages you to slow down, observe the town’s textures, and capture Hoi An’s soul on paper.'
        ],
        paragraphsVi: [
          'Những bức tường vàng rêu phong và mái ngói âm dương của Hội An luôn là nguồn cảm hứng bất tận. Tham gia buổi vẽ ký họa ngoài trời cùng Imperfect Art Studio, dù chưa từng cầm cọ, bạn vẫn có thể thong thả ngồi lại một góc phố yên bình, quan sát ánh sáng và tự tay phác họa lại vẻ đẹp phố cổ theo cách riêng.'
        ]
      },
      {
        id: 'authentic-local-nhau-culture',
        rank: 5,
        name: 'Experience Authentic Local "Nhậu" Culture',
        nameVi: 'Trải nghiệm văn hóa "nhậu" bình dân đúng chất bản địa',
        location: 'Hương Đồng Restaurant - Hoi An | Nếm Kitchen - Hoi An',
        locationVi: 'Quán Hương Đồng - Hội An | Nếm Kitchen - Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrJT4ajRPefiEsStOqPMVbzOE8XsmDLtH0esSxUptZfeNXFY_aGTcN--kgylFRM0r2Wx3hvxSBANSbskrxAwE20Iyk9DKE_VuMta2UJI6SDYXix6yp2mp0jScAzbYkMJ5fRrxvdG-sl_8K=s1360-w1360-h1020-rw',
        imageCaption: 'Gathering with friends over cold beer and grilled dishes at a local nhậu spot in Hoi An',
        imageCaptionVi: 'Không khí quán nhậu bình dân ấm áp, gần gũi đúng chất Hội An',
        paragraphs: [
          'To truly understand Vietnamese social life, you have to experience nhậu, the beloved tradition of gathering over cold beers, sharing flavorful small plates, and talking for hours. Skip the tourist-oriented riverside restaurants and head to beloved local favorites like Hương Đồng or Nếm Kitchen. Order a round of grilled dishes, local herbs, and fresh seafood, clink glasses with a hearty "Một, hai, ba, dô!", and soak in the warm hospitality of Hoi An’s everyday dining culture.'
        ],
        paragraphsVi: [
          'Muốn hiểu nhịp sống người Việt, không gì chân thật bằng một buổi ngồi quán nhậu bình dân. Hãy tạm rời xa các nhà hàng du lịch, ghé Hương Đồng hoặc Nếm Kitchen, gọi vài món nướng, hải sản tươi, nhâm nhi ly bia mát lạnh và hòa mình vào không khí rôm rả, hiếu khách của người dân địa phương.'
        ]
      }
    ]
  },
  {
    id: '6-underrated-hoi-an-places-to-visit',
    slug: '6-underrated-hoi-an-places-to-visit',
    category: 'Travel & Heritage',
    categoryVi: 'Khám Phá & Di Sản',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '6 min read',
    readTimeVi: '6 phút đọc',
    badge: 'Hidden Gems',
    badgeVi: 'Điểm Đến Mới',
    coverImage: 'https://hoiantravel.com.vn/wp-content/uploads/2018/02/11.jpg',
    author: 'Saime Editorial Team',
    title: '6 Underrated Hoi An Places to Visit Beyond the Ancient Town',
    titleVi: '6 địa điểm tham quan Hội An độc đáo ngoài khu vực Phố Cổ',
    seoTitle: '6 Underrated Hoi An Places to Visit Beyond the Ancient Town',
    seoTitleVi: '6 địa điểm tham quan Hội An độc đáo ngoài khu vực Phố Cổ',
    metaDescription:
      'Explore the best Hoi An places to visit outside the Old Town: Kim Bong Carpentry Village, Thanh Ha Pottery, Tam Thanh Mural Village, Cu Lao driftwood art, CSO Gallery, and scenic rice paddies.',
    metaDescriptionVi:
      'Khám phá những điểm đến giàu bản sắc quanh Hội An: Làng mộc Kim Bồng, Làng gốm Thanh Hà, Làng bích họa Tam Thanh, cung đường lúa QCasa Qafe, Làng Củi Lũ và CSO Gallery.',
    shortDescription:
      'Explore the best Hoi An places to visit outside the Old Town: Kim Bong Carpentry Village, Thanh Ha Pottery, Tam Thanh Mural Village, Cu Lao driftwood art, CSO Gallery, and scenic rice paddies.',
    shortDescriptionVi:
      'Khám phá những điểm đến giàu bản sắc quanh Hội An: Làng mộc Kim Bồng, Làng gốm Thanh Hà, Làng bích họa Tam Thanh, cung đường lúa QCasa Qafe, Làng Củi Lũ và CSO Gallery.',
    introParagraphs: [
      'While the lantern-lit streets of the Ancient Town capture everyone’s first impression, the true cultural depth of this region lies in its surrounding craft villages, coastal communities, and quiet countryside. If you are looking for inspiring Hoi An places to visit beyond the usual tourist center, here are six remarkable spots full of heritage and creativity:'
    ],
    introParagraphsVi: [
      'Ngoài những dãy nhà cổ tường vàng rêu phong, vùng đất quanh Hội An còn lưu giữ nhiều làng nghề trăm tuổi, không gian nghệ thuật tái chế đầy cảm hứng và những cung đường đồng quê yên ả. Nếu bạn đang tìm kiếm những địa điểm tham quan mới mẻ bên ngoài khu phố cổ, đừng bỏ qua 6 cái tên dưới đây:'
    ],
    restaurantsData: [
      {
        id: 'kim-bong-carpentry-village',
        rank: 1,
        name: 'Kim Bong Carpentry Village (Làng Mộc Kim Bồng)',
        nameVi: 'Làng mộc Kim Bồng',
        location: 'Kim Bong Carpentry Village - Cam Kim, Hoi An',
        locationVi: 'Làng mộc Kim Bồng - Xã Cẩm Kim, Hội An',
        openingHours: '8:00 AM - 5:00 PM daily',
        openingHoursVi: '08:00 - 17:00 hằng ngày',
        ticketPrice: 'Free entry to the village (small fee for boat transfer or workshop experiences)',
        ticketPriceVi: 'Miễn phí tham quan làng (tự túc phí đò/xe hoặc trải nghiệm khắc gỗ)',
        image: 'https://hoiantravel.com.vn/wp-content/uploads/2018/02/11.jpg',
        imageCaption: 'Master woodcarving artisans at Kim Bong Carpentry Village across the Thu Bon River',
        imageCaptionVi: 'Nghệ nhân chạm khắc gỗ thủ công truyền thống tại Làng mộc Kim Bồng',
        paragraphs: [
          'Located just across the Thu Bon River, Kim Bong has been the backbone of Hoi An’s architecture since the 16th century. Its master woodcarvers built the iconic wooden houses, temples, and trading boats that made Hoi An famous. Today, visitors can watch artisans chisel intricate dragon motifs by hand and explore traditional shipbuilding yards.'
        ],
        paragraphsVi: [
          'Nằm bên kia sông Thu Bồn, Kim Bồng hình thành từ thế kỷ 16 và chính là nơi cung cấp đội ngũ nghệ nhân tài hoa xây dựng nên các ngôi nhà cổ, đình chùa và thuyền buôn tại thương cảng Hội An xưa. Đến đây, bạn được tận mắt xem nghệ nhân chạm trổ gỗ thủ công tinh xảo và tham quan xưởng đóng tàu truyền thống.'
        ]
      },
      {
        id: 'thanh-ha-pottery-village',
        rank: 2,
        name: 'Thanh Ha Pottery Village (Làng Gốm Thanh Hà)',
        nameVi: 'Làng gốm Thanh Hà',
        location: 'Thanh Ha Pottery Village - Pham Phan, Thanh Ha, Hoi An',
        locationVi: 'Làng gốm Thanh Hà - Phạm Phán, Thanh Hà, Hội An',
        openingHours: '8:00 AM - 5:30 PM daily',
        openingHoursVi: '08:00 - 17:30 hằng ngày',
        ticketPrice: '~35,000 VND per person (includes a small clay souvenir)',
        ticketPriceVi: 'Khoảng 35.000 VNĐ/người (đã bao gồm quà tặng tò he đất nung)',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/21/74/23/caption.jpg?w=900&h=500&s=1',
        imageCaption: '500-year-old reddish-brown Thu Bon clay pottery heritage at Thanh Ha Village',
        imageCaptionVi: 'Kỹ thuật chuốt gốm bàn xoay đạp chân hơn 500 năm tuổi tại Làng gốm Thanh Hà',
        paragraphs: [
          'With over 500 years of history, Thanh Ha once supplied ceramic tiles and household wares to the Nguyen Dynasty imperial court in Hue. The magic here lies in the distinctive reddish-brown clay of the Thu Bon River and the foot-powered potter’s wheels still spun by elderly artisans. You can even try shaping your own clay piece.'
        ],
        paragraphsVi: [
          'Hơn 500 năm tuổi, làng gốm Thanh Hà từng nổi tiếng với những sản phẩm gốm cung tiến triều đình nhà Nguyễn. Điều đặc biệt ở đây là chất đất sét nâu đỏ ven sông Thu Bồn và kỹ thuật chuốt gốm bằng bàn xoay đạp chân của các nghệ nhân cao tuổi. Bạn cũng có thể tự tay thử nặn một món đồ gốm nhỏ mang về.'
        ]
      },
      {
        id: 'tam-thanh-mural-village',
        rank: 3,
        name: 'Tam Thanh Mural Village (Làng Bích Họa Tam Thanh)',
        nameVi: 'Làng Bích họa Tam Thanh',
        location: 'Tam Thanh Mural Village - Tam Ky, Quang Nam',
        locationVi: 'Làng Bích họa Tam Thanh - Tam Kỳ, Quảng Nam',
        openingHours: 'Open 24/7 (best visited in early morning or late afternoon)',
        openingHoursVi: 'Tự do cả ngày (đẹp nhất vào sáng sớm hoặc chiều mát)',
        ticketPrice: 'Free',
        ticketPriceVi: 'Miễn phí',
        image: 'https://statics.vinpearl.com/Tam-Thanh-Mural-Village-thumb_1722085083.jpg',
        imageCaption: 'Vibrant coastal community murals across Tam Thanh fishing village',
        imageCaptionVi: 'Những bức bích họa sống động về đời sống ngư dân tại Làng Bích họa Tam Thanh',
        paragraphs: [
          'About a 45-minute drive south along the coast, this quiet fishing village was transformed in 2016 through a Korean-Vietnamese community art exchange. Over 100 weathered concrete houses were painted with vibrant murals depicting local fishermen, childhood games, and ocean life—breathing new economic and artistic spirit into the coastal community.'
        ],
        paragraphsVi: [
          'Cách Hội An khoảng 45 phút chạy xe về phía Nam, ngôi làng chài bình dị này đã khoác lên mình diện mạo mới từ dự án giao lưu nghệ thuật Việt - Hàn năm 2016. Hơn 100 bức tường nhà dân được vẽ những bức bích họa sống động về đời sống ngư dân, biển cả và ký ức tuổi thơ.'
        ]
      },
      {
        id: 'hoi-an-rice-paddies-qcasa-qafe',
        rank: 4,
        name: 'Hoi An Rice Paddy Roads & QCasa Qafe',
        nameVi: 'Cung đường lúa Hội An & Cà phê QCasa Qafe',
        location: 'QCasa Qafe - Cam Chau / Cam An Rice Fields, Hoi An',
        locationVi: 'QCasa Qafe - Cẩm Châu / Cẩm An, Hội An',
        openingHours: '7:00 AM - 6:00 PM daily',
        openingHoursVi: '07:00 - 18:00 hằng ngày',
        ticketPrice: 'Free entry (drinks from ~35,000 - 65,000 VND)',
        ticketPriceVi: 'Vào cửa tự do (đồ uống từ 35.000 - 65.000 VNĐ)',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q28kBai1HmjvELrE6QLPhsfKbvO369LAa7FGlbkaGxXMqwkST2zn6aORN3ch3ZEi1PUvfbCcTqTqUfet3xDBvpqChX1Y5cXTqp__R-frtuLjkI9yoM0U5_pswwno-kwz0Cvrvh8MHk1DeH=s1360-w1360-h1020-rw',
        imageCaption: 'Serene emerald rice fields and rustic coffee moments at QCasa Qafe',
        imageCaptionVi: 'Cánh đồng lúa xanh mướt và góc cà phê thư giãn tại QCasa Qafe',
        paragraphs: [
          'Winding between the Ancient Town and An Bang Beach are lush emerald rice fields where water buffaloes graze and farmers tend their crops. Cycling or riding a scooter through these narrow country lanes offers pure serenity. Right along the paddy edge sits QCasa Qafe, a rustic, breezy café where you can sip iced Vietnamese coffee while watching the wind ripple across the fields.'
        ],
        paragraphsVi: [
          'Nằm giữa Phố Cổ và biển An Bàng là những cánh đồng lúa xanh mướt trải dài, nơi bạn có thể đạp xe thong dong hít thở hương lúa non. Nép mình ngay bên bờ ruộng là QCasa Qafe - quán cà phê mộc mạc, thoáng đãng để bạn nhâm nhi ly cà phê sữa đá và ngắm hoàng hôn buông xuống cánh đồng.'
        ]
      },
      {
        id: 'cui-lu-art-space',
        rank: 5,
        name: 'Cui Lu Art Space / Driftwood Village (Làng Củi Lũ)',
        nameVi: 'Làng Củi Lũ (Không gian nghệ thuật điêu khắc gỗ lũa)',
        location: 'Lang Cui Lu - Cam Ha, Hoi An',
        locationVi: 'Làng Củi Lũ - Cẩm Hà, Hội An',
        openingHours: '8:00 AM - 5:30 PM daily',
        openingHoursVi: '08:00 - 17:30 hằng ngày',
        ticketPrice: 'Free to visit (workshops available for a fee)',
        ticketPriceVi: 'Miễn phí tham quan (có thu phí nếu tham gia workshop điêu khắc)',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOl_R7vJWGr5VqYZCxSVzoUY2i-XrO7eaHQxgpvFBR_b1pRq8Ib9YLl3_noKbrr2Cpw1iwsmwftg-IwD74odTsPQK8zDASRW0aueeMJu73GibDCbDrLtJybFwKa7aDqpvVupYak7SGwOln=s1360-w1360-h1020-rw',
        imageCaption: 'Sustainable driftwood sculptures at Lang Cui Lu inspired by Champa and Vietnamese folklore',
        imageCaptionVi: 'Các tác phẩm điêu khắc gỗ lũa mang hơi thở văn hóa Champa và dân gian Việt Nam',
        paragraphs: [
          'Every flood season, uprooted tree trunks and driftwood wash down the Thu Bon River from the upstream mountains. Instead of letting this wood go to waste, local artist Le Ngoc Thuan and a team of artisans turned it into Làng Củi Lũ—a sustainable art sanctuary transforming weathered driftwood into expressive sculptures inspired by Champa and Vietnamese folklore.'
        ],
        paragraphsVi: [
          'Sau mỗi mùa mưa lũ, rất nhiều gốc cây, củi mục từ thượng nguồn sông Thu Bồn trôi dạt về hạ lưu. Nghệ nhân Lê Ngọc Thuận cùng cộng sự đã hồi sinh những khúc củi vô tri ấy thành các tác phẩm điêu khắc mang đậm hơi thở văn hóa Champa và dân gian Việt Nam, truyền đi thông điệp sống xanh đầy nhân văn.'
        ]
      },
      {
        id: 'cso-gallery-hoi-an',
        rank: 6,
        name: 'CSO Gallery Hoi An',
        nameVi: 'CSO Gallery Hội An',
        location: 'CSO Gallery - 229 Cua Dai, Cam Chau, Hoi An',
        locationVi: 'CSO Gallery - 229 Cửa Đại, Cẩm Châu, Hội An',
        openingHours: '8:00 AM - 5:00 PM daily',
        openingHoursVi: '08:00 - 17:00 hằng ngày',
        ticketPrice: '~120,000 - 150,000 VND per person',
        ticketPriceVi: 'Khoảng 120.000 - 150.000 VNĐ/người',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToN2msL9QQa-45DyKaYRzTy-GzR6cZ4kBtAEerVq21_54pNg6nYSlcxWoFnlcBkA8NY6ao6QMRBDagP-4xWtV1Hm3tXveLDSEn6cy0MI2hbHXyoaqwKO2E8Eu3GPLIeOLQtKdI=s1360-w1360-h1020-rw',
        imageCaption: 'Rare Vietnamese historical coins, banknotes, and Truyện Kiều editions at CSO Gallery',
        imageCaptionVi: 'Không gian trưng bày hơn 20.000 hiện vật tiền cổ và ấn bản Truyện Kiều tại CSO Gallery',
        paragraphs: [
          'Hidden away from the Old Town crowds, CSO Gallery is an extraordinary private museum housing over 20,000 rare artifacts. From ancient Vietnamese coins and banknotes dating back centuries to global numismatic collections and classic editions of The Tale of Kieu (Truyện Kiều), it is a treasure trove for history lovers and curious minds.'
        ],
        paragraphsVi: [
          'Nằm yên tĩnh trên đường Cửa Đại, CSO Gallery là không gian trưng bày tư nhân đồ sộ với hơn 20.000 hiện vật quý hiếm: từ bộ sưu tập tiền cổ Việt Nam qua các triều đại, tiền giấy thế giới cho đến hàng trăm ấn bản Truyện Kiều độc đáo. Một điểm dừng chân lý tưởng cho những ai yêu lịch sử và sự chiêm nghiệm.'
        ]
      }
    ]
  },
  {
    id: 'hoi-an-memories-land-review',
    slug: 'hoi-an-memories-land-review',
    category: 'Attraction Review',
    categoryVi: 'Review Điểm Đến',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '5 min read',
    readTimeVi: '5 phút đọc',
    badge: 'Honest Review',
    badgeVi: 'Đánh Giá Thực Tế',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKexei9Xwgoib6PAiHcPN8r7vh0oXDyFccA9wAOleDjZN-hf0ZBcelIOG&s=10',
    author: 'Saime Editorial Team',
    title: 'Hoi An Memories Land Review: Is It Worth the Hype?',
    titleVi: 'Review Hoi An Memories Land (Đảo Ký Ức Hội An): Có thực sự đáng tiền như lời đồn?',
    seoTitle: 'Hoi An Memories Land Review: Is It Worth the Hype?',
    seoTitleVi: 'Review Hoi An Memories Land (Đảo Ký Ức Hội An): Có thực sự đáng tiền như lời đồn?',
    metaDescription:
      'Wondering if Hoi An Memories Land and the Hoi An Memories Show live up to the hype? Here is an honest look at what to expect, ticket tips, and who will love it most.',
    metaDescriptionVi:
      'Đánh giá khách quan về Hoi An Memories Land và show diễn Ký Ức Hội An: điểm cộng, điểm trừ, giá vé và kinh nghiệm sắp xếp lịch trình trọn vẹn nhất.',
    shortDescription:
      'Wondering if Hoi An Memories Land and the Hoi An Memories Show live up to the hype? Here is an honest look at what to expect, ticket tips, and who will love it most.',
    shortDescriptionVi:
      'Đánh giá khách quan về Hoi An Memories Land và show diễn Ký Ức Hội An: điểm cộng, điểm trừ, giá vé và kinh nghiệm sắp xếp lịch trình trọn vẹn nhất.',
    introParagraphs: [
      'If you have spent even ten minutes researching your trip to Central Vietnam, you have likely seen breathtaking photos of Hoi An Memories Land, a massive cultural theme park set on its own island in the Thu Bon River, headlined by the world-famous Hoi An Memories Show.',
      'With glowing advertisements everywhere, many travelers ask the same honest question: Is Hoi An Memories Land actually worth experiencing, or is it just an overhyped tourist attraction?',
      'Here is a balanced, realistic breakdown to help you decide.'
    ],
    introParagraphsVi: [
      'Nếu đang lên kế hoạch du lịch Hội An, chắc hẳn bạn đã bắt gặp vô số hình ảnh hoành tráng về Hoi An Memories Land (Đảo Ký Ức Hội An) – công viên văn hóa nằm biệt lập giữa sông Thu Bồn với tâm điểm là vở diễn thực cảnh Ký Ức Hội An.',
      'Giữa rất nhiều lời quảng cáo có cánh, câu hỏi thực tế nhất của nhiều du khách là: Hoi An Memories Land có thực sự đáng để trải nghiệm như mọi người vẫn khen ngợi?',
      'Dưới đây là góc nhìn khách quan giúp bạn dễ dàng đưa ra lựa chọn phù hợp với gu du lịch của mình:'
    ],
    venueInfo: {
      location: 'Hoi An Memories Land – Con Hen, 200 Nguyen Tri Phuong, Cam Nam, Hoi An',
      locationVi: 'Hoi An Memories Land – Cồn Hến, 200 Nguyễn Tri Phương, Cẩm Nam, Hội An',
      openingHours: '4:00 PM – 10:00 PM (Closed on Tuesdays)',
      openingHoursVi: '16:00 – 22:00 (Nghỉ thứ Ba hằng tuần)',
      ticketPrice: 'From ~600,000 VND (Eco seat) to 1,200,000 VND (VIP seat)',
      ticketPriceVi: 'Từ 600.000 VNĐ (hạng Eco) đến 1.200.000 VNĐ (hạng VIP)',
      imageCaption: 'Hoi An Memories Land & outdoor river stage at Con Hen Island',
      imageCaptionVi: 'Sân khấu thực cảnh ngoài trời Ký Ức Hội An tại Đảo Ký Ức (Cồn Hến)'
    },
    editorialSections: [
      {
        id: 'what-makes-it-impressive',
        title: 'What Makes It Truly Impressive (The "Worth It" Factor)',
        titleVi: 'Những điểm thực sự đáng giá',
        items: [
          {
            lead: 'The Scale of the Hoi An Memories Show:',
            leadVi: 'Sự choáng ngợp của show diễn thực cảnh Ký Ức Hội An:',
            text: 'Let’s be clear, the main outdoor show is genuinely spectacular. Featuring over 500 performers in traditional áo dài, a 25,000-square-meter outdoor stage set directly on the river, stunning lighting choreography, and live music, it traces 400 years of Hoi An’s history from a quiet agricultural village to a bustling international trading port. Even seasoned travelers who normally skip theme parks are often moved by its visual storytelling.',
            textVi: 'Không thể phủ nhận đây là một trong những vở diễn ngoài trời quy mô nhất Việt Nam. Với hơn 500 diễn viên, sân khấu rộng 25.000m² kết hợp cùng mặt nước sông Thu Bồn, âm thanh và ánh sáng được dàn dựng công phu, vở diễn tái hiện 400 năm thăng trầm của thương cảng Hội An đầy cảm xúc. Ngay cả những du khách khó tính cũng dễ bị chinh phục bởi tính nghệ thuật của chương trình này.'
          },
          {
            lead: 'Photogenic Architecture & Mini-Shows:',
            leadVi: 'Không gian check-in & các minishow buổi chiều:',
            text: 'Before the main performance begins at 8:00 PM, the park opens at 4:00 PM with replicas of traditional Vietnamese, Japanese, and Chinese trading-port streets, alongside lively mini-shows (like historical wedding processions and folk dances) scattered across the island.',
            textVi: 'Công viên mở cửa từ 16:00 với kiến trúc mô phỏng thương cảng Hội An xưa (khu Việt Nam, Nhật Bản, Trung Hoa) cùng nhiều tiết mục biểu diễn đường phố vui nhộn trước giờ diễn chính.'
          }
        ]
      },
      {
        id: 'what-to-keep-in-mind',
        title: 'What to Keep in Mind (Managing Expectations)',
        titleVi: 'Một vài lưu ý thực tế để không bị "vỡ mộng"',
        items: [
          {
            lead: 'It Is a Commercial Theme Park:',
            leadVi: 'Tính chất công viên giải trí:',
            text: 'Unlike the quiet, weathered authenticity of the real Ancient Town, Hoi An Memories Land is purpose-built for entertainment. If you are strictly looking for raw, untouched local street life, the park may feel polished and theatrical.',
            textVi: 'Vì là khu phức hợp được xây dựng mới để phục vụ du lịch, không gian ở đây mang tính sân khấu hóa và chỉn chu, sẽ khác với vẻ đẹp rêu phong, tự nhiên của khu Phố Cổ thật. Nếu bạn chỉ thích khám phá đời sống bản địa mộc mạc, nơi này có thể hơi mang màu sắc thương mại.'
          },
          {
            lead: 'Language Barrier in Mini-Shows:',
            leadVi: 'Chi phí vé:',
            text: 'Most dialogue in the afternoon mini-shows is in Vietnamese, though the main evening show relies heavily on visual artistry, music, and English subtitles/translations on side screens so international guests can easily follow the storyline.',
            textVi: 'Mức giá vé khá cao so với mặt bằng chung các điểm tham quan tại Hội An, nên bạn cần cân nhắc ngân sách nếu đi theo nhóm đông người.'
          }
        ]
      },
      {
        id: 'the-verdict',
        title: 'The Verdict: Should You Go?',
        titleVi: 'Kết luận: Có nên đi không?',
        isVerdict: true,
        items: [
          {
            text: 'Yes, especially if you love grand theatrical performances, visual arts, and cultural storytelling. Think of it not as a replacement for walking the real Old Town, but as a dramatic, theatrical companion to it.',
            textVi: 'Câu trả lời là Có, đặc biệt nếu bạn yêu thích nghệ thuật sân khấu, nhiếp ảnh và muốn tìm hiểu lịch sử Hội An qua lăng kính trình diễn hiện đại. Hãy xem đây là một mảnh ghép giải trí buổi tối bên cạnh việc dạo chơi Phố Cổ ban ngày.'
          },
          {
            lead: 'Insider Tip for Your Evening:',
            leadVi: 'Gợi ý lịch trình hợp lý:',
            text: 'The park opens at 4:00 PM, and the main show runs from 8:00 PM to 9:00 PM. Instead of rushing straight to the park for dinner, spend your late afternoon enjoying an intimate, story-driven meal and craft cocktails in town (such as at Saime Introverts, just a short 5-minute ride away), then head over to the island around 7:15 PM in time for the main show.',
            textVi: 'Show diễn chính bắt đầu lúc 20:00 – 21:00. Bạn không nhất thiết phải vào đảo từ sớm để ăn tối trong khu du lịch; thay vào đó, có thể thong thả thưởng thức bữa tối fusion ấm cúng và cocktail bản địa tại Saime Introverts (cách đảo chỉ 5 phút di chuyển), sau đó sang đảo lúc 19:15 để kịp ổn định chỗ ngồi xem trọn vẹn vở diễn.'
          }
        ]
      }
    ]
  },
  {
    id: '5-must-visit-hoi-an-museums',
    slug: '5-must-visit-hoi-an-museums',
    category: 'Heritage & Museums',
    categoryVi: 'Di Sản & Bảo Tàng',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '6 min read',
    readTimeVi: '6 phút đọc',
    badge: 'Cultural Guide',
    badgeVi: 'Di Sản Phố Cổ',
    coverImage:
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9zB1srNr3yPX58wqE7yl7QOGhLy3bAlIVG6Xsy-7_mg4zxGKCCYGV1CIwKhlaJsBsCWlH3HilKhNMTR0p75851DSGo0PNxkphgvg65FfWx9fJ01Z_N0HjgSGPhPJlc5Zn9mpuOrQox8ZH=s1360-w1360-h1020-rw',
    author: 'Saime Editorial Team',
    title: '5 Must-Visit Hoi An Museums to Understand the Ancient Town’s Soul',
    titleVi: 'Top 5 bảo tàng nổi tiếng tại Hội An giúp bạn hiểu trọn linh hồn Phố Cổ',
    seoTitle: '5 Must-Visit Hoi An Museums to Understand the Ancient Town’s Soul',
    seoTitleVi: 'Top 5 bảo tàng nổi tiếng tại Hội An giúp bạn hiểu trọn linh hồn Phố Cổ',
    metaDescription:
      'Discover the top 5 Hoi An museums: Museum of History and Culture, Sa Huynh Culture Museum, Museum of Trade Ceramics, Precious Heritage Museum, and Thanh Ha Terracotta Park.',
    metaDescriptionVi:
      'Khám phá 5 bảo tàng đặc sắc nhất Hội An: Bảo tàng Lịch sử – Văn hóa, Bảo tàng Văn hóa Sa Huỳnh, Bảo tàng Gốm sứ Mậu dịch, Precious Heritage Museum và Công viên Đất nung Thanh Hà.',
    shortDescription:
      'Discover the top 5 Hoi An museums: Museum of History and Culture, Sa Huynh Culture Museum, Museum of Trade Ceramics, Precious Heritage Museum, and Thanh Ha Terracotta Park.',
    shortDescriptionVi:
      'Khám phá 5 bảo tàng đặc sắc nhất Hội An: Bảo tàng Lịch sử – Văn hóa, Bảo tàng Văn hóa Sa Huỳnh, Bảo tàng Gốm sứ Mậu dịch, Precious Heritage Museum và Công viên Đất nung Thanh Hà.',
    introParagraphs: [
      'To truly appreciate why Hoi An’s yellow walls and wooden shop-houses look the way they do, you have to trace the centuries of maritime trade, ancient civilizations, and diverse ethnic cultures that shaped this port town. Exploring Hoi An museums is the best way to connect the dots behind the architecture and local life.',
      'Here are the five most fascinating museums in Hoi An, complete with their stories and visitor details:'
    ],
    introParagraphsVi: [
      'Để thực sự hiểu vì sao Hội An lại mang vẻ đẹp giao thoa kiến trúc độc đáo đến vậy, việc ghé thăm các bảo tàng tại đây sẽ giúp bạn chắp nối trọn vẹn dòng chảy lịch sử hàng nghìn năm, từ nền văn minh cổ đại đến thương cảng quốc tế sầm uất bậc nhất Đông Nam Á xưa. Dưới đây là 5 bảo tàng tiêu biểu nhất bạn không nên bỏ lỡ:'
    ],
    restaurantsData: [
      {
        id: 'hoi-an-museum-history-culture',
        rank: 1,
        name: 'Hoi An Museum of History and Culture (Bảo Tàng Lịch Sử – Văn Hóa Hội An)',
        nameVi: 'Bảo tàng Lịch sử – Văn hóa Hội An',
        location: 'Hoi An Museum of History and Culture – 10B Tran Hung Dao, Minh An, Hoi An',
        locationVi: 'Bảo tàng Lịch sử – Văn hóa Hội An – 10B Trần Hưng Đạo, Minh An, Hội An',
        openingHours: '7:00 AM – 5:00 PM daily (closed on the 10th of each month for maintenance)',
        openingHoursVi: '07:00 – 17:00 hằng ngày (đóng cửa ngày 10 hằng tháng để bảo trì)',
        ticketPrice: 'Included in the Hoi An Old Town entrance ticket (120,000 VND for international visitors)',
        ticketPriceVi: 'Nằm trong vé tham quan Phố Cổ Hội An (80.000 VNĐ/khách Việt Nam, 120.000 VNĐ/khách quốc tế)',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9zB1srNr3yPX58wqE7yl7QOGhLy3bAlIVG6Xsy-7_mg4zxGKCCYGV1CIwKhlaJsBsCWlH3HilKhNMTR0p75851DSGo0PNxkphgvg65FfWx9fJ01Z_N0HjgSGPhPJlc5Zn9mpuOrQox8ZH=s1360-w1360-h1020-rw',
        imageCaption: 'Hoi An Museum of History and Culture inside historic Quan Am Pagoda',
        imageCaptionVi: 'Bảo tàng Lịch sử – Văn hóa Hội An trong khuôn viên chùa Quan Âm cổ kính',
        paragraphs: [
          'Housed inside the historic Quan Am Pagoda, this museum offers a chronological journey through Hoi An’s evolution, from the prehistoric Sa Huynh period and the Champa Kingdom to its golden era as a bustling 17th-century international trading port (Faifo) and its modern revolutionary history. Over 200 original artifacts, maps, and photographs bring the town’s resilience to life.'
        ],
        paragraphsVi: [
          'Tọa lạc trong khuôn viên chùa Quan Âm cổ kính, bảo tàng đưa du khách đi qua từng giai đoạn phát triển của Hội An: từ thời tiền sơ sử Sa Huỳnh, vương quốc Champa, thời kỳ hoàng kim của thương cảng Faifo thế kỷ 17–18 cho đến lịch sử cận đại. Hơn 200 hiện vật gốc bằng gốm, sứ, đồng, sắt cùng nhiều bản đồ cổ phản ánh rõ nét sức sống bền bỉ của vùng đất này.'
        ]
      },
      {
        id: 'museum-of-sa-huynh-culture',
        rank: 2,
        name: 'Museum of Sa Huynh Culture (Bảo Tàng Văn Hóa Sa Huỳnh)',
        nameVi: 'Bảo tàng Văn hóa Sa Huỳnh',
        location: 'Museum of Sa Huynh Culture – 149 Tran Phu, Minh An, Hoi An',
        locationVi: 'Bảo tàng Văn hóa Sa Huỳnh – 149 Trần Phú, Minh An, Hội An',
        openingHours: '7:00 AM – 9:00 PM daily',
        openingHoursVi: '07:00 – 21:00 hằng ngày',
        ticketPrice: 'Included in the Hoi An Old Town entrance ticket (120,000 VND)',
        ticketPriceVi: 'Nằm trong vé tham quan Phố Cổ Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S_frt8H30bN_Mq60-5i1xctOx61nygqtzwoLT1ByOmIiYNkMkWnrOtqgWi4B1Kaz4MAwKEllxBgF0Yt0WnttZAMjyhq48F3HhDpUPK4IcpifsjrhlGkZPJWC2REkN9FXRQd3J7=s1360-w1360-h1020-rw',
        imageCaption: '2,000-year-old Sa Huynh burial jars and artifacts on Tran Phu Street',
        imageCaptionVi: 'Bộ sưu tập văn hóa Sa Huỳnh hơn 2.000 năm tuổi trên đường Trần Phú',
        paragraphs: [
          'Long before the iconic Japanese Bridge was built, Central Vietnam was home to the ancient Sa Huynh civilization (dating back over 2,000 years). Located inside a beautifully preserved French-colonial-style house on Tran Phu Street, this museum displays Vietnam’s richest collection of Sa Huynh burial jars, agate jewelry, iron tools, and bronze artifacts, proving Hoi An was an active coastal hub millennia ago.'
        ],
        paragraphsVi: [
          'Nằm trong một ngôi nhà cổ mang kiến trúc Pháp trang nhã trên đường Trần Phú, nơi đây lưu giữ bộ sưu tập phong phú bậc nhất Việt Nam về nền văn hóa Sa Huỳnh có niên đại hơn 2.000 năm. Các hiện vật mộ chum, trang sức mã não, công cụ bằng đồng và sắt được khai quật ngay tại Hội An là minh chứng cho sự giao thương sớm của cư dân cổ vùng hạ lưu sông Thu Bồn.'
        ]
      },
      {
        id: 'museum-of-trade-ceramics',
        rank: 3,
        name: 'Museum of Trade Ceramics (Bảo Tàng Gốm Sứ Mậu Dịch Hội An)',
        nameVi: 'Bảo tàng Gốm sứ Mậu dịch Hội An',
        location: 'Museum of Trade Ceramics – 80 Tran Phu, Minh An, Hoi An',
        locationVi: 'Bảo tàng Gốm sứ Mậu dịch Hội An – 80 Trần Phú, Minh An, Hội An',
        openingHours: '7:00 AM – 9:00 PM daily',
        openingHoursVi: '07:00 – 21:00 hằng ngày',
        ticketPrice: 'Included in the Hoi An Old Town entrance ticket (120,000 VND)',
        ticketPriceVi: 'Nằm trong vé tham quan Phố Cổ Hội An',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9To-uqkZuW32tgpAejUE1TuUkgmJZO_Ey4A-xbJmKSiJwFC7QoSr-J0DQayb61vf3wancoZeUxJCjjY2sdy_g_isHsSfzasnI6kcO8lvqjC2nyd3GKg8WwmZo2T65kqZjess6TF=s1360-w1360-h1020-rw',
        imageCaption: 'Over 430 Maritime Silk Road ceramics inside a traditional two-story wooden merchant house',
        imageCaptionVi: 'Hơn 430 hiện vật gốm sứ Con đường tơ lụa trên biển tại 80 Trần Phú',
        paragraphs: [
          'Set inside a restored two-story traditional wooden merchant house, this museum tells stories of the "Maritime Silk Road." Between the 15th and 18th centuries, merchant ships from Japan, China, India, and the Middle East docked in Hoi An to trade fine porcelain and stoneware. Over 430 ceramic pieces recovered from shipwrecks and archaeological digs showcase Hoi An’s role as a global crossroads.'
        ],
        paragraphsVi: [
          'Được bài trí trong một ngôi nhà gỗ hai tầng truyền thống, bảo tàng kể câu chuyện về "Con đường tơ lụa trên biển". Từ thế kỷ 15 đến thế kỷ 18, Hội An là điểm trung chuyển gốm sứ nhộn nhịp của thương nhân Nhật Bản, Trung Hoa, Ấn Độ và Trung Đông. Hơn 430 hiện vật gốm sứ trục vớt từ các con tàu đắm và di chỉ khảo cổ cho thấy tầm vóc quốc tế của phố Hội xưa.'
        ]
      },
      {
        id: 'precious-heritage-art-gallery-museum',
        rank: 4,
        name: 'Precious Heritage Art Gallery Museum (Bảo Tàng Di Sản Văn Hóa Vô Giá)',
        nameVi: 'Bảo tàng Di sản Văn hóa Vô giá (Precious Heritage Museum)',
        location: 'Precious Heritage Museum – 26 Phan Boi Chau, Cam Chau, Hoi An',
        locationVi: 'Precious Heritage Museum – 26 Phan Bội Châu, Cẩm Châu, Hội An',
        openingHours: '8:00 AM – 8:00 PM daily',
        openingHoursVi: '08:00 – 20:00 hằng ngày',
        ticketPrice: 'Free admission',
        ticketPriceVi: 'Miễn phí vào cửa',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TlzqeOXif_Wso_lkR0Y3e9yqu646MgqN2ZeGusxdMt8Pbym5_vQ0d_4QZP8rZsknFqE50Bk_y0JKPDlZLE8Lxr-yDd6s5A4B5OnvV8eH9cg6-nPGDEyQWTJtSdQehqo2LB91UyMQ=s1360-w1360-h1020-rw',
        imageCaption: 'Portraits and traditional costumes of Vietnam’s 54 ethnic groups by photographer Réhahn',
        imageCaptionVi: 'Chân dung và trang phục truyền thống của 54 dân tộc anh em tại Precious Heritage Museum',
        paragraphs: [
          'Created by French photographer Réhahn after a decade of traveling across Vietnam, this deeply moving museum celebrates the cultural diversity of all 54 ethnic groups in Vietnam. Spread across a serene 19th-century French house, it features over 200 portrait photographs alongside more than 65 authentic traditional costumes, musical instruments, and heirlooms gifted directly by ethnic community leaders.'
        ],
        paragraphsVi: [
          'Là tâm huyết sau hơn một thập kỷ rong ruổi khắp Việt Nam của nhiếp ảnh gia người Pháp Réhahn, bảo tàng tôn vinh bản sắc của đủ 54 dân tộc anh em. Trong không gian nhà cổ Pháp thanh tịnh, hơn 200 bức chân dung đầy cảm xúc được trưng bày cùng hơn 65 bộ trang phục truyền thống nguyên bản và hiện vật quý do chính các già làng, nghệ nhân dân tộc trao tặng.'
        ]
      },
      {
        id: 'thanh-ha-terracotta-park',
        rank: 5,
        name: 'Thanh Ha Terracotta Park (Công Viên Đất Nung Thanh Hà)',
        nameVi: 'Công viên Đất nung Thanh Hà',
        location: 'Thanh Ha Terracotta Park – Duy Tan, Thanh Ha, Hoi An',
        locationVi: 'Công viên Đất nung Thanh Hà – Duy Tân, Thanh Hà, Hội An',
        openingHours: '8:00 AM – 5:30 PM daily',
        openingHoursVi: '08:00 – 17:30 hằng ngày',
        ticketPrice: '~50,000 VND per person',
        ticketPriceVi: 'Khoảng 50.000 VNĐ/người',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1Dvvt-OPd5bLWHQBjtKtAgEayHHdjf6jpZ04yfE1WY5lNMDXQcxINKgVNwPGD2C23MJ03q1m9txmx7hOplX03LErsPqLN96Se9S2Du5Gxdz_CL2iAWu9i5RT_YeRx2xf3ms0B=s1360-w1360-h1020-rw',
        imageCaption: 'Pottery-kiln architecture and terracotta world landmarks at Thanh Ha Terracotta Park',
        imageCaptionVi: 'Kiến trúc mô phỏng lò nung gốm và kỳ quan đất nung tại Công viên Đất nung Thanh Hà',
        paragraphs: [
          'Located right next to the 500-year-old Thanh Ha Pottery Village, this striking contemporary museum was designed by Vietnamese architect Nguyen Van Nguyen in the shape of traditional pottery kilns. Inside, you will find miniature terracotta replicas of famous global landmarks (like the Taj Mahal and Leaning Tower of Pisa) alongside Vietnamese architectural icons, ancient Champa artifacts, and rotating contemporary ceramic exhibitions.'
        ],
        paragraphsVi: [
          'Nằm ngay cạnh làng gốm Thanh Hà 500 năm tuổi, công trình kiến trúc độc đáo này được thiết kế mô phỏng hình dáng những lò nung gốm truyền thống. Bên trong trưng bày các kỳ quan kiến trúc thế giới và Việt Nam được thu nhỏ bằng đất nung vô cùng tinh xảo, cùng khu triển lãm gốm Champa cổ và gốm nghệ thuật đương đại.'
        ]
      }
    ]
  },
  {
    id: 'scenic-hoi-an-sightseeing',
    slug: 'scenic-hoi-an-sightseeing',
    category: 'Sightseeing Routes',
    categoryVi: 'Lộ Trình Tham Quan',
    date: 'November 2026',
    dateVi: 'Tháng 11/2026',
    readTime: '6 min read',
    readTimeVi: '6 phút đọc',
    badge: 'Scenic Route',
    badgeVi: 'Ngắm Cảnh',
    coverImage:
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q28kBai1HmjvELrE6QLPhsfKbvO369LAa7FGlbkaGxXMqwkST2zn6aORN3ch3ZEi1PUvfbCcTqTqUfet3xDBvpqChX1Y5cXTqp__R-frtuLjkI9yoM0U5_pswwno-kwz0Cvrvh8MHk1DeH=s1360-w1360-h1020-rw',
    author: 'Saime Editorial Team',
    title: 'Scenic Hoi An Sightseeing: Craft Villages, Art Sanctuaries & Paddy Fields',
    titleVi: 'Lộ trình ngắm cảnh & khám phá văn hóa Hội An ngoài Phố Cổ',
    seoTitle: 'Scenic Hoi An Sightseeing: Craft Villages, Art Sanctuaries & Paddy Fields',
    seoTitleVi: 'Lộ trình ngắm cảnh & khám phá văn hóa Hội An ngoài Phố Cổ',
    metaDescription:
      'Plan the ultimate Hoi An sightseeing route beyond the Old Town. Discover picturesque rice fields, riverside craft villages, coastal murals, and hidden art galleries.',
    metaDescriptionVi:
      'Gợi ý cung đường tham quan ngắm cảnh tuyệt đẹp quanh Hội An: từ đồng lúa QCasa Qafe, làng nghề ven sông Thu Bồn đến không gian nghệ thuật Làng Củi Lũ và làng bích họa ven biển.',
    shortDescription:
      'Plan the ultimate Hoi An sightseeing route beyond the Old Town. Discover picturesque rice fields, riverside craft villages, coastal murals, and hidden art galleries.',
    shortDescriptionVi:
      'Gợi ý cung đường tham quan ngắm cảnh tuyệt đẹp quanh Hội An: từ đồng lúa QCasa Qafe, làng nghề ven sông Thu Bồn đến không gian nghệ thuật Làng Củi Lũ và làng bích họa ven biển.',
    introParagraphs: [
      'If your idea of great Hoi An sightseeing involves scenic countryside rides, authentic craftsmanship, and quiet artistic corners rather than crowded souvenir streets, you are in for a treat. Stepping just a few kilometers outside the Ancient Town opens up a landscape of riverbanks, emerald rice paddies, and living heritage.',
      'Here is a curated sightseeing guide to six visual and cultural highlights around Hoi An:'
    ],
    introParagraphsVi: [
      'Nếu bạn yêu thích việc dạo ngắm cảnh quan thiên nhiên thanh bình, tìm hiểu các làng nghề thủ công và khám phá những không gian nghệ thuật ẩn mình, hành trình tham quan Hội An ngoài khu vực Phố Cổ chắc chắn sẽ mang lại nhiều góc nhìn đầy thi vị.'
    ],
    restaurantsData: [
      {
        id: 'sightseeing-rice-paddy-qcasa-qafe',
        rank: 1,
        name: 'Scenic Rice Paddy Roads & QCasa Qafe',
        nameVi: 'Cung đường lúa Hội An & Cà phê QCasa Qafe',
        location: 'QCasa Qafe - Hoi An Rice Fields',
        locationVi: 'QCasa Qafe - Cẩm Châu / Cẩm An, Hội An',
        openingHours: '7:00 AM - 6:00 PM',
        openingHoursVi: '07:00 - 18:00',
        ticketLabel: 'Admission:',
        ticketPrice: 'Free (drinks ~35,000 - 65,000 VND)',
        ticketPriceVi: 'Miễn phí vào cửa (đồ uống từ 35.000 - 65.000 VNĐ)',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q28kBai1HmjvELrE6QLPhsfKbvO369LAa7FGlbkaGxXMqwkST2zn6aORN3ch3ZEi1PUvfbCcTqTqUfet3xDBvpqChX1Y5cXTqp__R-frtuLjkI9yoM0U5_pswwno-kwz0Cvrvh8MHk1DeH=s1360-w1360-h1020-rw',
        imageCaption: 'Panoramic countryside rice paddies and coffee stop at QCasa Qafe',
        imageCaptionVi: 'Cánh đồng lúa xanh mướt nối giữa Phố Cổ và biển An Bàng tại QCasa Qafe',
        paragraphs: [
          'For the quintessential countryside view of Central Vietnam, take a morning or late-afternoon ride along the winding paths cutting through the Cam Chau and Cam An rice paddies. Depending on the season, you will see mirror-like flooded fields reflecting the sky or golden waves ready for harvest. Stop at QCasa Qafe, a charming rustic café overlooking the fields, to rest your legs and take in the panoramic rural scenery.'
        ],
        paragraphsVi: [
          'Dọc theo các con đường nhỏ nối giữa Phố Cổ và biển An Bàng là những thửa ruộng lúa trải dài tít tắp. Vào buổi sáng sớm hay chiều tà, khung cảnh đồng quê yên bình với đàn cò trắng và làn gió mát rượi sẽ giúp bạn rũ bỏ mọi mệt mỏi. Hãy dừng chân tại QCasa Qafe ngay sát bờ ruộng để thưởng thức một ly cà phê thơm lừng và thu trọn bức tranh đồng quê vào tầm mắt.'
        ]
      },
      {
        id: 'sightseeing-thanh-ha-pottery',
        rank: 2,
        name: 'Thanh Ha Pottery Village',
        nameVi: 'Làng gốm Thanh Hà',
        location: 'Thanh Ha Pottery Village - Pham Phan, Hoi An',
        locationVi: 'Làng gốm Thanh Hà - Phạm Phán, Hội An',
        openingHours: '8:00 AM - 5:30 PM',
        openingHoursVi: '08:00 - 17:30',
        ticketLabel: 'Admission:',
        ticketPrice: '~35,000 VND',
        ticketPriceVi: 'Khoảng 35.000 VNĐ/người',
        image:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/21/74/23/caption.jpg?w=900&h=500&s=1',
        imageCaption: '500-year-old terracotta lanes and riverside ceramic workshops in Thanh Ha',
        imageCaptionVi: 'Làng gốm Thanh Hà hơn 500 năm tuổi bên dòng sông Thu Bồn hiền hòa',
        paragraphs: [
          'Located right along the Thu Bon River, Thanh Ha offers a picturesque glimpse into 500 years of continuous ceramic tradition. Rows of terracotta bricks, sun-drying clay pots, and narrow village lanes lined with bougainvillea make it a photographer’s dream. Watching elderly artisans shape river clay using traditional foot-spun wheels is a highlight of any sightseeing afternoon.'
        ],
        paragraphsVi: [
          'Nằm nép mình bên dòng sông Thu Bồn hiền hòa, làng gốm hơn 500 năm tuổi này mang vẻ đẹp mộc mạc với những bức tường gạch nung đỏ au, sân phơi gốm dưới nắng và những con ngõ nhỏ rợp bóng hoa giấy. Ngắm nhìn đôi bàn tay khéo léo của các nghệ nhân chuốt gốm bên bàn xoay truyền thống là một trải nghiệm thị giác đầy cuốn hút.'
        ]
      },
      {
        id: 'sightseeing-kim-bong-carpentry',
        rank: 3,
        name: 'Kim Bong Carpentry Village',
        nameVi: 'Làng mộc Kim Bồng',
        location: 'Kim Bong Carpentry Village - Cam Kim, Hoi An',
        locationVi: 'Làng mộc Kim Bồng - Xã Cẩm Kim, Hội An',
        openingHours: '8:00 AM - 5:00 PM',
        openingHoursVi: '08:00 - 17:00',
        ticketLabel: 'Admission:',
        ticketPrice: 'Free',
        ticketPriceVi: 'Miễn phí',
        image: 'https://hoiantravel.com.vn/wp-content/uploads/2018/02/11.jpg',
        imageCaption: 'Open-air woodcarving workshops and wooden riverboat craftsmanship in Cam Kim',
        imageCaptionVi: 'Xưởng mộc thủ công và đóng thuyền gỗ truyền thống tại Làng mộc Kim Bồng',
        paragraphs: [
          'A short ferry ride across the river brings you to Kim Bong, where Hoi An’s master woodworkers have practiced their craft since the 1500s. Sightseeing here feels like stepping back in time: you can stroll past open-air workshops filled with the scent of jackfruit and ironwood, admire ornate architectural carvings, and see wooden riverboats being repaired along the water’s edge.'
        ],
        paragraphsVi: [
          'Chỉ mất vài phút đi đò qua bên kia sông Thu Bồn, bạn sẽ bước vào không gian yên ả của làng mộc Kim Bồng - cái nôi của những người thợ mộc đã kiến tạo nên kiến trúc cổ kính của Hội An từ thế kỷ 16. Dạo quanh làng, bạn sẽ ngửi thấy hương gỗ mít, gỗ lim thơm dịu và tận mắt chiêm ngưỡng những xưởng đóng thuyền gỗ truyền thống bên bến sông.'
        ]
      },
      {
        id: 'sightseeing-lang-cui-lu',
        rank: 4,
        name: 'Lang Cui Lu (Driftwood Art Village)',
        nameVi: 'Làng Củi Lũ',
        location: 'Lang Cui Lu - Cam Ha, Hoi An',
        locationVi: 'Làng Củi Lũ - Cẩm Hà, Hội An',
        openingHours: '8:00 AM - 5:30 PM',
        openingHoursVi: '08:00 - 17:30',
        ticketLabel: 'Admission:',
        ticketPrice: 'Free to explore',
        ticketPriceVi: 'Miễn phí tham quan',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOl_R7vJWGr5VqYZCxSVzoUY2i-XrO7eaHQxgpvFBR_b1pRq8Ib9YLl3_noKbrr2Cpw1iwsmwftg-IwD74odTsPQK8zDASRW0aueeMJu73GibDCbDrLtJybFwKa7aDqpvVupYak7SGwOln=s1360-w1360-h1020-rw',
        imageCaption: 'Sculpted driftwood artworks crafted by artisan Le Ngoc Thuan in Cam Ha',
        imageCaptionVi: 'Các tác phẩm điêu khắc gỗ lũa giàu tính biểu tượng tại Làng Củi Lũ Cẩm Hà',
        paragraphs: [
          'Tucked amidst lush greenery in Cam Ha, Làng Củi Lũ turns river flood debris into breathtaking art. Founded by local artisan Le Ngoc Thuan, the space displays towering, intricate wooden sculptures carved from salvaged tree roots and driftwood swept down from the Truong Son mountains—blending environmental storytelling with Champa and Vietnamese aesthetics.'
        ],
        paragraphsVi: [
          'Ẩn mình giữa khu vườn xanh mát tại Cẩm Hà, Làng Củi Lũ gây ấn tượng mạnh với những tác phẩm điêu khắc gỗ lũa quy mô và giàu tính biểu tượng. Nghệ nhân Lê Ngọc Thuận đã tận dụng những gốc cây trôi dạt sau mùa lũ miền Trung để thổi hồn thành các bức tượng mang đậm dấu ấn văn hóa Champa và bản sắc Việt.'
        ]
      },
      {
        id: 'sightseeing-cso-gallery',
        rank: 5,
        name: 'CSO Gallery Hoi An',
        nameVi: 'CSO Gallery Hội An',
        location: 'CSO Gallery - 229 Cua Dai, Hoi An',
        locationVi: 'CSO Gallery - 229 Cửa Đại, Hội An',
        openingHours: '8:00 AM - 5:00 PM',
        openingHoursVi: '08:00 - 17:00',
        ticketLabel: 'Admission:',
        ticketPrice: '~120,000 - 150,000 VND',
        ticketPriceVi: 'Khoảng 120.000 - 150.000 VNĐ/người',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToN2msL9QQa-45DyKaYRzTy-GzR6cZ4kBtAEerVq21_54pNg6nYSlcxWoFnlcBkA8NY6ao6QMRBDagP-4xWtV1Hm3tXveLDSEn6cy0MI2hbHXyoaqwKO2E8Eu3GPLIeOLQtKdI=s1360-w1360-h1020-rw',
        imageCaption: 'Rare currency collections and The Tale of Kieu editions inside CSO Gallery',
        imageCaptionVi: 'Bộ sưu tập tiền cổ và ấn bản Truyện Kiều đồ sộ tại CSO Gallery Hội An',
        paragraphs: [
          'For indoor sightseeing that sparks intellectual curiosity, visit CSO Gallery. This beautifully curated museum holds over 20,000 historical items, including rare ancient Vietnamese currency, international banknotes, and an extensive collection of Truyện Kiều (The Tale of Kieu) manuscripts and artworks. Every display room tells a fascinating story of trade, culture, and literature.'
        ],
        paragraphsVi: [
          'Nếu muốn đổi gió với một không gian tham quan trong nhà sang trọng và giàu tri thức, CSO Gallery là lựa chọn tuyệt vời. Bảo tàng trưng bày hơn 20.000 hiện vật độc bản từ tiền cổ Việt Nam, tiền giấy thế giới đến bộ sưu tập các ấn bản Truyện Kiều đồ sộ, mang lại góc nhìn sâu sắc về lịch sử giao thương và văn hóa.'
        ]
      },
      {
        id: 'sightseeing-tam-thanh-mural-village',
        rank: 6,
        name: 'Tam Thanh Mural Village',
        nameVi: 'Làng Bích họa Tam Thanh',
        location: 'Tam Thanh Mural Village - Tam Ky, Quang Nam',
        locationVi: 'Làng Bích họa Tam Thanh - Tam Kỳ, Quảng Nam',
        openingHours: 'Open 24 hours',
        openingHoursVi: 'Mở cửa cả ngày',
        ticketLabel: 'Admission:',
        ticketPrice: 'Free',
        ticketPriceVi: 'Miễn phí',
        image:
          'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T6OFDHUJXQ_Hw6tVPS0XvPf6OWShhF1p6-XHEpW0GnWn1ip-tKkK2R-YN0pq9la0f_LO8j21taENzyC_SxwTTG1pdHWbe7Yw-8Sht4AKzTNvaa2JeNditN3P3Nkmbl16UB7IAJdg=s1360-w1360-h1020-rw',
        imageCaption: 'Colorful coastal street art murals along the sandy alleys of Tam Thanh',
        imageCaptionVi: 'Làng chài Tam Thanh rực rỡ hơn 100 bức tranh tường ven biển',
        paragraphs: [
          'If you are up for a scenic coastal drive south of Hoi An, Tam Thanh Mural Village rewards you with colorful street art right beside a peaceful sandy beach. Created by Korean and Vietnamese artists in 2016, over 100 fishermen’s homes are covered in cheerful paintings celebrating coastal life, turning quiet sandy alleys into an open-air gallery.'
        ],
        paragraphsVi: [
          'Cung đường ven biển chạy về phía Nam Hội An sẽ dẫn bạn tới làng chài Tam Thanh đầy sắc màu. Những ngôi nhà cấp bốn cũ kỹ sát bờ biển được các họa sĩ Việt Nam và Hàn Quốc vẽ lên hơn 100 bức tranh tường rực rỡ, biến những con hẻm nhỏ ven biển thành một phòng triển lãm ngoài trời đầy sức sống.'
        ]
      }
    ]
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

