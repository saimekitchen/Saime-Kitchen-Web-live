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
  cuisine: string;
  cuisineVi: string;
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

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'top-8-fine-dining-fusion-hoi-an',
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
  }
];
