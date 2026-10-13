import { Language } from '../types';

export interface TranslationDictionary {
  // Brand & Top Header
  brandName: string;
  brandTagline: string;
  announcementSchedule: string;
  announcementHours: string;
  
  // Navigation
  pageFood: string;
  pageCocktail: string;
  viewLookbook: string;
  viewGrid: string;
  bookTable: string;
  bookTableMobile: string;
  
  // Food Page Hero & Headings
  foodPageBadge: string;
  foodTaglineTop: string;
  foodHeroTitle1: string;
  foodHeroTitle2: string;
  foodHeroDescription: string;
  exploreDishesBtn: string;
  goToCocktailsBtn: string;
  featuredDishBadge: string;
  
  // SEO Highlights in Food Page
  seoSectionTitle: string;
  seoSectionDesc: string;
  seoKeywordsPills: string[];
  cocktailSeoKeywordsPills: string[];
  
  // Categories & Filters
  currentMenuTitle: string;
  foodMenuSubtitle: string;
  catAllDishes: string;
  catSmallPlates: string;
  catMains: string;
  catVeggies: string;
  catSweets: string;
  
  // Dish Card & Lightbox
  inspect: string;
  keyIngredients: string;
  suggestedPairing: string;
  suggestedFoodPairing: string;
  viewCocktailBtn: string;
  viewFoodBtn: string;
  closeLightbox: string;
  clickToZoom: string;
  detailsAndRecipeNotes: string;
  cocktailDetailsNotes: string;
  servingTemperature: string;
  glassware: string;
  alcoholByVolume: string;
  flavorProfile: string;
  dietaryFeatures: string;
  storyConcept: string;
  recommendedCocktailPairing: string;
  
  // Cocktail Page
  cocktailPageBadge: string;
  cocktailTaglineTop: string;
  cocktailHeroTitle1: string;
  cocktailHeroTitle2: string;
  cocktailHeroDescription: string;
  exploreDrinksBtn: string;
  goToFoodBtn: string;
  featuredCocktailBadge: string;
  catAllCocktails: string;
  catSignatures: string;
  catClarified: string;
  catSpiritForward: string;
  catRefreshers: string;
  catAlcoholFree: string;
  cocktailCounterHeading: string;
  cocktailCounterSubheading: string;
  cocktailCounterDesc: string;
  
  // Shared Philosophy Banner
  philosophyBadge: string;
  philosophyTitle: string;
  philosophyDesc: string;
  philosophyCta: string;

  // Curiosity & "try something new? try saime"
  trySomethingNewBadge: string;
  trySomethingNewHeroFood: string;
  trySomethingNewHeroCocktail: string;
  trySomethingNewMenuFoodNote: string;
  trySomethingNewMenuCocktailNote: string;
  
  // Footer
  footerManifestoTag: string;
  footerTitle: string;
  footerManifestoDesc: string;
  footerFoodCardTitle: string;
  footerFoodCardDesc: string;
  footerCocktailCardTitle: string;
  footerCocktailCardDesc: string;
  footerJoinUsTitle: string;
  footerJoinUsDesc: string;
  footerReserveBtn: string;
  footerWhereToFind: string;
  footerLocationTitle: string;
  footerAddress1: string;
  footerAddress2: string;
  footerParkingHint: string;
  footerServiceSchedule: string;
  footerOpenBadge: string;
  footerHoursTitle: string;
  footerTuesThurs: string;
  footerFriSun: string;
  footerMonday: string;
  footerMondayStatus: string;
  footerMondayNote: string;
  footerSayHello: string;
  footerContactTitle: string;
  footerFacebook: string;
  footerInstagram: string;
  footerMessenger: string;
  footerWalkInHint: string;
  footerRights: string;
  footerTaglineEnd: string;
  footerCity: string;
  
  // Reservation Drawer
  resBadge: string;
  resTitle: string;
  resSubtitle: string;
  resDate: string;
  resTime: string;
  resGuests: string;
  resGuestsUnit: string;
  resSeatingArea: string;
  resSeatingMain: string;
  resSeatingCounter: string;
  resSeatingPatio: string;
  resContactName: string;
  resContactPhone: string;
  resContactEmail: string;
  resSpecialNotes: string;
  resSpecialNotesPlaceholder: string;
  resConfirmBtn: string;
  resSubmitting: string;
  resSuccessTitle: string;
  resSuccessMsg: string;
  resSendMessengerBtn: string;
  resCopyDetailsBtn: string;
  resDetailsCopied: string;
  resMessengerHint: string;
  resSuccessClose: string;
  resNoteHelp: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Brand & Top Header
    brandName: 'Saime Introverts',
    brandTagline: 'fusion cocktail and dining',
    announcementSchedule: 'Tuesday to Sunday, open from 3:00 PM daily',
    announcementHours: 'Tuesday to Thursday until 11:00 PM, Friday to Sunday until 11:30 PM',
    
    // Navigation
    pageFood: 'Food',
    pageCocktail: 'Cocktails',
    viewLookbook: 'Lookbook',
    viewGrid: 'Grid',
    bookTable: 'Book Table',
    bookTableMobile: 'Book',
    
    // Food Page Hero & Headings
    foodPageBadge: 'Page 01 Food Menu',
    foodTaglineTop: 'fusion cocktail and dining',
    foodHeroTitle1: 'Vietnamese childhood dishes,',
    foodHeroTitle2: 'reimagined in modern dining.',
    foodHeroDescription: 'Every dish begins with a memory—the sizzle of street carts in the evening breeze, sweet treats shared along the riverside, and the comforting soul of family hearths. In the heart of Hoi An, we bring those nostalgic Vietnamese childhood flavors into the modern light, handcrafting each recipe with warmth, storytelling, and contemporary culinary curiosity.',
    exploreDishesBtn: 'Explore Food Menu',
    goToCocktailsBtn: 'Go to Cocktails, Page 02',
    featuredDishBadge: 'Featured Fusion Dish',
    
    // SEO Highlights in Food Page
    seoSectionTitle: 'Contemporary Vietnamese Cuisine and Fusion Dining in Hoi An',
    seoSectionDesc: 'Saime Introverts brings a fresh perspective to restaurants in Hoi An. We blend traditional Vietnamese childhood memories, from Hoi An night markets and street hearths to family recipes, with refined modern gastronomy, crispy textures, and artful plating.',
    seoKeywordsPills: [
      'restaurants near me',
      'Restaurants in Hoi An',
      'Fusion Restaurant Hoi An',
      'Vietnamese Cuisine',
      'Fusion Vietnamese Cuisine',
      'Contemporary Dining',
      'food near me',
      'best restaurants near me',
      'Hoi An Craft Experience',
    ],
    cocktailSeoKeywordsPills: [
      'bars near me',
      'cocktail bars near me',
      'Cocktails in Hoi An',
      'Cocktail Bar',
      'Cocktail Experience',
      'Clarified Cocktails',
      'cocktails near me',
    ],
    
    // Categories & Filters
    currentMenuTitle: 'Curated Food Menu',
    foodMenuSubtitle: 'Fusion Vietnamese Dishes for Sharing',
    catAllDishes: 'All Dishes',
    catSmallPlates: 'Small Plates',
    catMains: 'Mains and Hearth',
    catVeggies: 'Veggies and Sides',
    catSweets: 'Sweets',
    
    // Dish Card & Lightbox
    inspect: 'Inspect Dish',
    keyIngredients: 'Key Ingredients',
    suggestedPairing: 'Recommended Cocktail Pairing',
    suggestedFoodPairing: 'Recommended Food Pairing',
    viewCocktailBtn: 'See Cocktail',
    viewFoodBtn: 'See Dish',
    closeLightbox: 'Close',
    clickToZoom: 'Click image to zoom in or out',
    detailsAndRecipeNotes: 'Dish Details and Craft Notes',
    cocktailDetailsNotes: 'Cocktail Details and Craft Notes',
    servingTemperature: 'Serving Style',
    glassware: 'Glassware',
    alcoholByVolume: 'Strength',
    flavorProfile: 'Flavor Profile',
    dietaryFeatures: 'Dietary',
    storyConcept: 'Behind the Recipe',
    recommendedCocktailPairing: 'Recommended Drink Match',
    
    // Cocktail Page
    cocktailPageBadge: 'Page 02 Cocktail Bar',
    cocktailTaglineTop: 'fusion cocktail and dining',
    cocktailHeroTitle1: 'Authentic Vietnamese elements,',
    cocktailHeroTitle2: 'reimagined through craft and mixology.',
    cocktailHeroDescription: 'Every cocktail holds its own story. At Saime, our creations revolve around the Vietnamese way of life—simple, rustic, and brimming with heartfelt warmth and affection.',
    exploreDrinksBtn: 'Explore Cocktail Menu',
    goToFoodBtn: 'Go to Food Menu, Page 01',
    featuredCocktailBadge: 'Signature Creation',
    catAllCocktails: 'All Cocktails',
    catSignatures: 'Creative Signatures',
    catClarified: 'Clarified Cocktails',
    catSpiritForward: 'Spirit Forward',
    catRefreshers: 'Brisk Refreshers',
    catAlcoholFree: 'Alcohol Free',
    cocktailCounterHeading: 'Liquid Mixology and Craft',
    cocktailCounterSubheading: 'Authentic Vietnamese elements, reimagined in every glass.',
    cocktailCounterDesc: 'Grab a stool at the counter and explore our cocktail bar. Each drink pairs indigenous herbs and heritage infusions with modern clarifying techniques, crystal ice, and effortless balance.',
    
    // Shared Philosophy Banner
    philosophyBadge: 'Good Food, Great Friends',
    philosophyTitle: 'Made for sharing, tasting, and coming back for more.',
    philosophyDesc: 'We believe dining in Hoi An should be lively and full of flavor discoveries. Order a few plates for the table, match them with our house crafted cocktails, and enjoy the night.',
    philosophyCta: 'Explore Cocktails, Page 02',

    // Curiosity & "try something new? try saime"
    trySomethingNewBadge: 'try something new? try saime',
    trySomethingNewHeroFood: 'When was the last time a meal genuinely surprised you? Step past the predictable tourist menus into dishes born from wood smoke, memory, and playful culinary curiosity.',
    trySomethingNewHeroCocktail: 'Ready to wander past standard bar lists? Discover Vietnam’s botanical spirit distilled through crystal clarification, subtle smoke, and liquid craft.',
    trySomethingNewMenuFoodNote: 'try something new? try saime — plates handcrafted to spark curiosity and awaken the palate with unexpected depth.',
    trySomethingNewMenuCocktailNote: 'try something new? try saime — handcrafted cocktails designed to take your palate somewhere it has never been before.',
    
    // Footer
    footerManifestoTag: 'fusion cocktail and dining',
    footerTitle: 'Saime Introverts',
    footerManifestoDesc: 'Authentic Vietnamese elements, reimagined through creative craft and liquid mixology. A warm neighborhood destination in Hoi An for sharing dishes, clarified cocktails, and memorable evenings.',
    footerFoodCardTitle: 'Food Menu',
    footerFoodCardDesc: '12 fusion sharing dishes, starters, mains and desserts.',
    footerCocktailCardTitle: 'Cocktails',
    footerCocktailCardDesc: 'Authentic elements, clarified sips and craft cocktail mixology.',
    footerJoinUsTitle: 'Join Us at Saime Introverts',
    footerJoinUsDesc: 'Tables, cocktail counter and open patio seating in Hoi An',
    footerReserveBtn: 'Reserve a Table',
    footerWhereToFind: 'Where to Find Us',
    footerLocationTitle: 'Location',
    footerAddress1: '144 Ly Thai To',
    footerAddress2: 'Hoi An, Quang Nam, Vietnam',
    footerParkingHint: 'Street parking and dedicated bike parking available',
    footerServiceSchedule: 'Service Schedule',
    footerOpenBadge: 'Open from 3:00 PM',
    footerHoursTitle: 'Opening Hours',
    footerTuesThurs: 'Tuesday to Thursday',
    footerFriSun: 'Friday to Sunday',
    footerMonday: 'Monday',
    footerMondayStatus: 'Closed',
    footerMondayNote: 'rest & recharge',
    footerSayHello: 'Say Hello',
    footerContactTitle: 'Contact and Inquiries',
    footerFacebook: 'Facebook Page',
    footerInstagram: 'Instagram',
    footerMessenger: 'Facebook Messenger',
    footerWalkInHint: 'Walk ins are always welcomed at the counter and patio',
    footerRights: 'All rights reserved.',
    footerTaglineEnd: 'fusion cocktail and dining',
    footerCity: 'Hoi An, Vietnam',
    
    // Reservation Drawer
    resBadge: 'Reservations and Seating',
    resTitle: 'Save a Spot',
    resSubtitle: 'Join us for modern Vietnamese cuisine and craft cocktails in Hoi An',
    resDate: 'Date',
    resTime: 'Preferred Time',
    resGuests: 'Guests',
    resGuestsUnit: 'Guests',
    resSeatingArea: 'Seating Preference',
    resSeatingMain: 'Main Dining Room',
    resSeatingCounter: 'Cocktail Bar Counter',
    resSeatingPatio: 'Open Air Patio',
    resContactName: 'Full Name',
    resContactPhone: 'Phone Number',
    resContactEmail: 'Email Address',
    resSpecialNotes: 'Special Requests, Dietary Notes',
    resSpecialNotesPlaceholder: 'For example: Birthday celebration, vegetarian, gluten free preference...',
    resConfirmBtn: 'Confirm Reservation',
    resSubmitting: 'Securing Your Table...',
    resSuccessTitle: 'Reservation Details Ready!',
    resSuccessMsg: 'Your table request has been formatted. Click below to send directly to our Facebook Messenger team for instant confirmation.',
    resSendMessengerBtn: 'Send via Facebook Messenger',
    resCopyDetailsBtn: 'Copy Reservation Details',
    resDetailsCopied: 'Details Copied to Clipboard!',
    resMessengerHint: 'Direct link: facebook.com/messages/t/1121358051063119',
    resSuccessClose: 'Done',
    resNoteHelp: 'For immediate assistance or parties larger than 8, call (+84) 964 023 683.',
  },
  vi: {
    // Brand & Top Header
    brandName: 'Saime Introverts',
    brandTagline: 'ẩm thực và cocktail fusion',
    announcementSchedule: 'Thứ 3 đến Chủ Nhật, mở cửa từ 3:00 PM mỗi ngày',
    announcementHours: 'Thứ 3 đến Thứ 5 đến 11:00 PM, Thứ 6 đến Chủ Nhật đến 11:30 PM',
    
    // Navigation
    pageFood: 'Thực đơn',
    pageCocktail: 'Cocktail',
    viewLookbook: 'Tạp chí',
    viewGrid: 'Lưới ảnh',
    bookTable: 'Đặt Bàn',
    bookTableMobile: 'Đặt Bàn',
    
    // Food Page Hero & Headings
    foodPageBadge: 'Trang 01 Thực đơn',
    foodTaglineTop: 'ẩm thực và cocktail fusion',
    foodHeroTitle1: 'Món ăn tuổi thơ Việt,',
    foodHeroTitle2: 'tái hiện trong phong cách ẩm thực hiện đại.',
    foodHeroDescription: 'Mỗi món ăn tại Saime đều khởi nguồn từ một miền ký ức—tiếng xèo xèo của những gánh hàng rong ven phố, thức quà vặt ngọt ngào bên bờ sông Hoài và hơi ấm từ mâm cơm gia đình. Giữa lòng phố cổ Hội An, chúng tôi gom góp những mảnh ghép thân thương ấy, dệt nên câu chuyện ẩm thực đương đại với trọn vẹn sự mộc mạc, ấm áp và đong đầy cảm xúc.',
    exploreDishesBtn: 'Khám Phá Món Ăn',
    goToCocktailsBtn: 'Xem Cocktail, Trang 02',
    featuredDishBadge: 'Món Fusion Nổi Bật',
    
    // SEO Highlights in Food Page
    seoSectionTitle: 'Ẩm Thực Việt Đương Đại và Nhà Hàng Fusion Tại Hội An',
    seoSectionDesc: 'Saime Introverts mang đến làn gió mới cho danh sách nhà hàng tại Hội An. Chúng tôi kết hợp ký ức ẩm thực đường phố và mâm cơm gia đình Việt Nam với kỹ thuật chế biến fusion hiện đại, giữ trọn độ tươi ngon cùng phong cách trình bày nghệ thuật.',
    seoKeywordsPills: [
      'Nhà hàng gần tôi',
      'quán ăn gần tôi',
      'Nhà hàng tại Hội An',
      'Nhà hàng Fusion Hội An',
      'Ẩm thực Việt Nam',
      'Ẩm thực Việt Fusion',
      'Ẩm thực đương đại',
      'Saime Introverts',
      'quán ngon Hội An',
    ],
    cocktailSeoKeywordsPills: [
      'Quán bar gần tôi',
      'quán cocktail gần tôi',
      'Cocktails tại Hội An',
      'Cocktail Bar',
      'Trải nghiệm Cocktail',
      'Clarified Cocktails',
      'Cocktail Bar Hội An',
    ],
    
    // Categories & Filters
    currentMenuTitle: 'Thực Đơn Chọn Lọc',
    foodMenuSubtitle: 'Món Ăn Fusion Việt Nam Dành Cho Mọi Người',
    catAllDishes: 'Tất Cả Món',
    catSmallPlates: 'Khai Vị và Đĩa Nhỏ',
    catMains: 'Món Chính và Nướng',
    catVeggies: 'Rau và Món Phụ',
    catSweets: 'Tráng Miệng',
    
    // Dish Card & Lightbox
    inspect: 'Xem Chi Tiết',
    keyIngredients: 'Nguyên Liệu Chính',
    suggestedPairing: 'Gợi Ý Cocktail Đi Kèm',
    suggestedFoodPairing: 'Gợi Ý Món Ăn Đi Kèm',
    viewCocktailBtn: 'Xem Cocktail',
    viewFoodBtn: 'Xem Món Ăn',
    closeLightbox: 'Đóng',
    clickToZoom: 'Nhấn vào ảnh để phóng to hoặc thu nhỏ',
    detailsAndRecipeNotes: 'Chi Tiết Món Ăn và Kỹ Thuật',
    cocktailDetailsNotes: 'Chi Tiết Cocktail và Kỹ Thuật',
    servingTemperature: 'Cách Phục Vụ',
    glassware: 'Ly Phục Vụ',
    alcoholByVolume: 'Nồng Độ Cồn',
    flavorProfile: 'Tầng Hương Vị',
    dietaryFeatures: 'Đặc Điểm',
    storyConcept: 'Câu Chuyện Món Ăn',
    recommendedCocktailPairing: 'Cocktail Phù Hợp Nhất',
    
    // Cocktail Page
    cocktailPageBadge: 'Trang 02 Quầy Cocktail',
    cocktailTaglineTop: 'ẩm thực và cocktail fusion',
    cocktailHeroTitle1: 'Nét đẹp văn hóa Việt,',
    cocktailHeroTitle2: 'tái hiện qua nghệ thuật pha chế và mixology sáng tạo.',
    cocktailHeroDescription: 'Mỗi ly cocktail đều mang trong mình một câu chuyện riêng. Tại Saime, những sáng tạo của chúng tôi xoay quanh nếp sống bình dị, mộc mạc của người Việt, đong đầy tình cảm và sự chân thành.',
    exploreDrinksBtn: 'Khám Phá Menu Cocktail',
    goToFoodBtn: 'Xem Thực Đơn Món Ăn, Trang 01',
    featuredCocktailBadge: 'Sáng Tạo Tiêu Biểu',
    catAllCocktails: 'Tất Cả Cocktail',
    catSignatures: 'Cocktail Chữ Ký',
    catClarified: 'Kỹ Thuật Làm Trong',
    catSpiritForward: 'Đậm Vị Rượu',
    catRefreshers: 'Tươi Mát và Sủi Bọt',
    catAlcoholFree: 'Đồ Uống Không Cồn',
    cocktailCounterHeading: 'Nghệ Thuật Mixology và Pha Chế Thủ Công',
    cocktailCounterSubheading: 'Nguyên liệu Việt thuần khiết, tái hiện trong từng ly rượu.',
    cocktailCounterDesc: 'Hãy chọn cho mình một chỗ tại quầy bar và khám phá không gian cocktail của Saime. Từng ngụm đồ uống là sự giao thoa giữa thảo mộc truyền thống và kỹ thuật làm trong hiện đại.',
    
    // Shared Philosophy Banner
    philosophyBadge: 'Món Ngon Cùng Bạn Bè',
    philosophyTitle: 'Dành cho sự sẻ chia, khám phá và những lần quay lại.',
    philosophyDesc: 'Chúng tôi tin rằng một bữa ăn tại Hội An phải ngập tràn niềm vui và sự hứng khởi. Hãy gọi một vài món chia sẻ, kết hợp cùng ly cocktail đặc trưng và tận hưởng trọn vẹn buổi tối.',
    philosophyCta: 'Khám Phá Menu Cocktail, Trang 02',

    // Curiosity & "try something new? try saime"
    trySomethingNewBadge: 'try something new? try saime',
    trySomethingNewHeroFood: 'Lần cuối một món ăn khiến bạn thực sự bất ngờ là khi nào? Hãy bước ra khỏi những hương vị quen thuộc để chạm vào sự kết hợp giữa khói than, ký ức và sự tò mò ẩm thực.',
    trySomethingNewHeroCocktail: 'Tìm kiếm trải nghiệm đồ uống vượt ngoài khuôn khổ quen thuộc? Khám phá tinh hoa thảo mộc Việt Nam qua kỹ thuật làm trong và phối vị độc bản.',
    trySomethingNewMenuFoodNote: 'try something new? try saime — từng món ăn được sáng tạo để khơi dậy niềm tò mò và mở ra những câu chuyện vị giác mới mẻ.',
    trySomethingNewMenuCocktailNote: 'try something new? try saime — những ly cocktail độc đáo đưa vị giác của bạn đến những chân trời chưa từng khám phá.',
    
    // Footer
    footerManifestoTag: 'ẩm thực và cocktail fusion',
    footerTitle: 'Saime Introverts',
    footerManifestoDesc: 'Nguyên liệu Việt Nam thuần túy, tái hiện qua nghệ thuật ẩm thực sáng tạo và mixology độc đáo. Điểm hẹn ấm cúng tại Hội An cho những món ăn chia sẻ, cocktail thủ công và những khoảnh khắc đáng nhớ.',
    footerFoodCardTitle: 'Thực Đơn Món Ăn',
    footerFoodCardDesc: '12 món ăn fusion, khai vị, món chính và tráng miệng.',
    footerCocktailCardTitle: 'Menu Cocktail',
    footerCocktailCardDesc: 'Nguyên liệu bản địa, cocktail làm trong và nghệ thuật mixology.',
    footerJoinUsTitle: 'Ghé Thăm Saime Introverts',
    footerJoinUsDesc: 'Bàn ăn trong nhà, quầy cocktail và không gian sân vườn thoáng đãng',
    footerReserveBtn: 'Đặt Bàn Ngay',
    footerWhereToFind: 'Vị Trí Của Chúng Tôi',
    footerLocationTitle: 'Địa Chỉ',
    footerAddress1: '144 Lý Thái Tổ',
    footerAddress2: 'Hội An, Quảng Nam, Việt Nam',
    footerParkingHint: 'Có chỗ đỗ xe máy và ô tô thuận tiện',
    footerServiceSchedule: 'Giờ Hoạt Động',
    footerOpenBadge: 'Mở cửa từ 3:00 PM',
    footerHoursTitle: 'Thời Gian Phục Vụ',
    footerTuesThurs: 'Thứ Ba đến Thứ Năm',
    footerFriSun: 'Thứ Sáu đến Chủ Nhật',
    footerMonday: 'Thứ Hai',
    footerMondayStatus: 'Đóng cửa',
    footerMondayNote: 'rest & recharge',
    footerSayHello: 'Liên Hệ',
    footerContactTitle: 'Thông Tin và Giải Đáp',
    footerFacebook: 'Trang Facebook',
    footerInstagram: 'Instagram',
    footerMessenger: 'Facebook Messenger',
    footerWalkInHint: 'Chúng tôi luôn chào đón khách ghé trực tiếp tại quầy bar và sân vườn',
    footerRights: 'Bảo lưu mọi quyền.',
    footerTaglineEnd: 'ẩm thực và cocktail fusion',
    footerCity: 'Hội An, Việt Nam',
    
    // Reservation Drawer
    resBadge: 'Đặt Chỗ và Bàn Ăn',
    resTitle: 'Đặt Bàn Trước',
    resSubtitle: 'Thưởng thức ẩm thực Việt Nam đương đại và cocktail thủ công tại Hội An',
    resDate: 'Ngày',
    resTime: 'Khung Giờ',
    resGuests: 'Số Lượng Khách',
    resGuestsUnit: 'Khách',
    resSeatingArea: 'Khu Vực Bàn',
    resSeatingMain: 'Phòng Ăn Chính',
    resSeatingCounter: 'Quầy Cocktail Bar',
    resSeatingPatio: 'Sân Vườn Thoáng Mát',
    resContactName: 'Họ và Tên',
    resContactPhone: 'Số Điện Thoại',
    resContactEmail: 'Địa Chỉ Email',
    resSpecialNotes: 'Yêu Cầu Đặc Biệt, Dị Ứng Thực Phẩm',
    resSpecialNotesPlaceholder: 'Ví dụ: Kỷ niệm ngày cưới, ăn chay, không ăn hành...',
    resConfirmBtn: 'Xác Nhận Đặt Bàn',
    resSubmitting: 'Đang Ghi Nhận Đặt Bàn...',
    resSuccessTitle: 'Thông Tin Đặt Bàn Đã Sẵn Sàng!',
    resSuccessMsg: 'Thông tin đặt bàn đã được định dạng chuẩn. Nhấn nút bên dưới để gửi trực tiếp qua Facebook Messenger cho đội ngũ Saime xác nhận nhanh chóng.',
    resSendMessengerBtn: 'Gửi Qua Facebook Messenger',
    resCopyDetailsBtn: 'Sao Chép Chi Tiết Đặt Bàn',
    resDetailsCopied: 'Đã Sao Chép Vào Bộ Nhớ Tạm!',
    resMessengerHint: 'Liên kết trực tiếp: facebook.com/messages/t/1121358051063119',
    resSuccessClose: 'Hoàn Tất',
    resNoteHelp: 'Cần hỗ trợ gấp hoặc đặt bàn đoàn trên 8 người? Gọi ngay (+84) 964 023 683.',
  }
};
