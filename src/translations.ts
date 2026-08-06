export interface TranslationDict {
  brandName: string;
  tagline: string;
  estSpot: string;
  heroQuote: string;
  welcomeIntro: string;
  exploreMenuBtn: string;
  bookSpotBtn: string;
  
  // Stats
  statFusion: string;
  statFusionSub: string;
  statLongTable: string;
  statLongTableSub: string;
  statBelonging: string;
  statBelongingSub: string;

  // Story philosophy
  philosophyBadge: string;
  philosophyTitle: string;
  ourStoryTextMarkdown: string;

  // Colors
  colorTitle: string;
  colorBody: string;

  // Sections navigation
  storyNav: string;
  menuNav: string;
  bookingNav: string;
  guestbookNav: string;
  tastingNav: string;

  // Tasting Section
  tastingSubtitle: string;
  tastingTitle: string;
  tastingDesc: string;
  tasteFoodTitle: string;
  tasteFoodDesc: string;
  tasteCoffeeTitle: string;
  tasteCoffeeDesc: string;
  tasteCocktailTitle: string;
  tasteCocktailDesc: string;
  tasteBookSession: string;

  // Menu Section
  menuSubtitle: string;
  menuTitle: string;
  menuDesc: string;
  searchPlaceholder: string;
  vegetarianOnly: string;
  spicyOnly: string;
  viewDetails: string;
  ingredientsCount: string;
  noDishesFound: string;
  noDishesDesc: string;
  resetFilters: string;
  closeRecipe: string;

  // Reservation Section
  reserveSubtitle: string;
  reserveTitle: string;
  reserveDesc: string;
  resLabelName: string;
  resLabelEmail: string;
  resLabelPhone: string;
  resLabelDate: string;
  resLabelTime: string;
  resLabelGuests: string;
  resLabelZone: string;
  resLabelRequests: string;
  resBtnSubmit: string;
  resSuccessTitle: string;
  resSuccessDesc: string;

  // Community / Board Section
  boardSubtitle: string;
  boardTitle: string;
  boardDesc: string;
  boardLabelName: string;
  boardLabelLoc: string;
  boardLabelMessage: string;
  boardBtnSubmit: string;
  boardEmpty: string;

  // Admin items
  adminBtn: string;
  adminModalTitle: string;
  adminPINPlaceholder: string;
  adminLoginBtn: string;
  adminAddBtn: string;
  adminEditBtn: string;
  adminDeleteBtn: string;
  addItemModalTitle: string;
  editItemModalTitle: string;
  fieldName: string;
  fieldPrice: string;
  fieldDescription: string;
  fieldIngredients: string;
  fieldCategory: string;
  fieldImage: string;
  fieldVegetarian: string;
  fieldSpicy: string;
  fieldSignature: string;
  btnSave: string;
  btnCancel: string;
}

export const translations: Record<'en' | 'vn', TranslationDict> = {
  en: {
    brandName: "Saime Kitchen & Bar",
    tagline: "made for sharing, crafted for gathering",
    estSpot: "Est. 2026 / Gathering Spot",
    heroQuote: "made for sharing, crafted for gathering",
    welcomeIntro: "Step inside and feel immediately at home. Saime Kitchen & Bar brings you four distinct culinary experiences: our wholesome, nutrient-rich Healthy Menu, our bold and comforting Casual Menu, our slow-dripped artisan Cafe, and our sleek, botanical craft Bar. We are a warm, welcoming focal point for local regulars, neighborhood friends, and visiting foodies alike in beautiful old town Hoi An.",
    exploreMenuBtn: "Explore Saime Menu",
    bookSpotBtn: "Book Your Spot",

    statFusion: "Fusion Comfort",
    statFusionSub: "Fresh Craft Dishes",
    statLongTable: "The Long Table",
    statLongTableSub: "Communal Spaces",
    statBelonging: "Belonging Board",
    statBelongingSub: "Guest Stories",

    philosophyBadge: "The Saime Philosophy",
    philosophyTitle: "A Canvas of connection, painted in local tastes",
    ourStoryTextMarkdown: `At Saime, we believe that good food and good drinks bring people together.

In a world where meaningful connection can sometimes feel difficult, tasting experiences offer something special: a chance to slow down, discover something new, and connect with others through a shared experience.

Whether it’s a beautifully crafted cocktail, a comforting dish, or a carefully brewed coffee, tasting creates conversations. People naturally begin sharing what they smell, what they taste, what they love and often, friendships begin from there.

That’s why we created our Tasting Experience Packages, the intimate sessions designed not only to explore food and drinks, but also to help people meet new faces, exchange stories, and enjoy genuine quality time together in old town Hoi An.

Because sometimes, the best moments happen around a table.`,

    colorTitle: "A Visual Palette of Hoi An Roots",
    colorBody: "Saime was born as a cozy joint for shared plates and communal laughter. Our vibrant, casual atmosphere is masterfully painted into our aesthetic color palette, representing the elements of a Vietnamese comfort dining gathering:",

    storyNav: "Saime Story",
    menuNav: "The Menu",
    bookingNav: "Venue & Events",
    guestbookNav: "The Long Table",
    tastingNav: "Tasting Experiences",

    tastingSubtitle: "Intimate Shared Sessions",
    tastingTitle: "Tasting Experience Packages",
    tastingDesc: "Designed to explore taste nuances while sparking storytelling, laughter, and genuine connections over curated flights.",
    tasteFoodTitle: "Bespoke Culinary Flight",
    tasteFoodDesc: "A simple, engaging A/B testing session comparing raw, traditional, and modern cooking ingredients. Learn how altering single variables like local salts, peppers, and vinegars completely transforms our iconic bites.",
    tasteCoffeeTitle: "Coffee Pour-Over & Pairing",
    tasteCoffeeDesc: "A comparative A/B coffee flight testing different brewing variables. Contrast flavor profiles between Robusta and Arabica beans, examine fast vs. slow drip extractions, and evaluate how various milk fat contents pair with artisan roasts.",
    tasteCocktailTitle: "Local Botanical Mixology",
    tasteCocktailDesc: "An interactive A/B flavor test focusing on the science of balance. Perform blind taste tests between natural herb infusions, house-crafted sweeteners, and organic citric acids to discover your personal palate preferences.",
    tasteBookSession: "Reserve a Tasting Session",

    menuSubtitle: "Vibrant Culinary Fusion",
    menuTitle: "Saime’s Flavor Board",
    menuDesc: "Our food is freshly prepped, bold-flavored, and serves as an edible bridge connecting Vietnamese culinary roots with contemporary global comfort. Select an item to view ingredients.",
    searchPlaceholder: "Search dishes, staff or ingredients...",
    vegetarianOnly: "Vegetarian only",
    spicyOnly: "Spicy foods",
    viewDetails: "View Details",
    ingredientsCount: "ingredients",
    noDishesFound: "No dishes match your filters",
    noDishesDesc: "Try typing a different word, toggling off Vegetarian or Spicy filters, or resetting to discover Saime's menu catalog.",
    resetFilters: "Reset All Filters",
    closeRecipe: "Close Recipe View",

    reserveSubtitle: "Partner with Saime",
    reserveTitle: "Event Venue & Partnership Inquiries",
    reserveDesc: "Are you looking to host a private event, an intimate workshop, or partner with Saime? Let our unique venue be the canvas for your next gathering. Fill out the form below, and our team will get in touch with you shortly to make it happen!",
    resLabelName: "Your Name / Organization",
    resLabelEmail: "Email Address",
    resLabelPhone: "Phone Number",
    resLabelDate: "Proposed Event/Workshop Date",
    resLabelTime: "Expected Start Time",
    resLabelGuests: "Estimated Attendance",
    resLabelZone: "Preferred Venue Zone",
    resLabelRequests: "Event Details / Workshop Goals / Collaboration Ideas",
    resBtnSubmit: "Submit Partnership Inquiry",
    resSuccessTitle: "Inquiry Submitted!",
    resSuccessDesc: "Your collaboration proposal has been successfully registered. Our team will reach out within 24 hours!",

    boardSubtitle: "The Belonging Board",
    boardTitle: "The Long Table Guestbook",
    boardDesc: "Leave a trace of your visit, share a sweet memory, or read and appreciate stories from fellow foodies who sat around our tables.",
    boardLabelName: "Your Name",
    boardLabelLoc: "Where are you visiting from?",
    boardLabelMessage: "Share a memory, flavor reaction, or message...",
    boardBtnSubmit: "Post to the Long Table Board",
    boardEmpty: "No messages yet. Be the first to grace our board with your warmth!",

    adminBtn: "Admin Mode",
    adminModalTitle: "Developer / Admin Portal",
    adminPINPlaceholder: "Enter 6-digit Admin PIN",
    adminLoginBtn: "Access System",
    adminAddBtn: "Add Menu Item / Staff",
    adminEditBtn: "Edit",
    adminDeleteBtn: "Delete",
    addItemModalTitle: "Upload New Menu Item / Staff Profile",
    editItemModalTitle: "Modify Item Details / Correct Image",
    fieldName: "Item Name (e.g. Sizzling Escargot / Chef Minh)",
    fieldPrice: "Price in VND (e.g. 110000) - Enter 0 for staff and special items",
    fieldDescription: "Description / Story",
    fieldIngredients: "Ingredients / Specialties (comma separated)",
    fieldCategory: "Menu Category / Staff Role",
    fieldImage: "Image URL (Unsplash or custom graphic)",
    fieldVegetarian: "Vegetarian Option",
    fieldSpicy: "Spicy Option",
    fieldSignature: "Signature Stamp / Featured",
    btnSave: "Publish & Save changes",
    btnCancel: "Cancel"
  },
  vn: {
    brandName: "Saime Kitchen & Bar",
    tagline: "Nơi sẻ chia hương vị, kết nối những tâm hồn",
    estSpot: "Thành lập 2026 / Điểm Hẹn Gắn Kết",
    heroQuote: "Nơi sẻ chia hương vị, kết nối những tâm hồn",
    welcomeIntro: "Mở cánh cửa bước vào, bạn sẽ cảm nhận ngay không gian ấm áp như trở về nhà. Saime Kitchen & Bar mang đến bốn trải nghiệm ẩm thực đặc sắc: Thực đơn Healthy thanh lành giàu dinh dưỡng, Thực đơn Casual đậm đà đầy năng lượng, góc Cà Phê mộc mạc và Quầy Bar thảo mộc tinh tế. Saime là điểm hẹn thân thuộc cho những người bạn hàng xóm, các vị khách quen và thực khách phương xa khi ghé chơi phố cổ Hội An.",
    exploreMenuBtn: "Khám Phá Thực Đơn Saime",
    bookSpotBtn: "Đặt Bàn Ngay",

    statFusion: "Ẩm Thực Giao Thoa",
    statFusionSub: "Hương vị bản địa sáng tạo",
    statLongTable: "Bàn Dài Kết Nối",
    statLongTableSub: "Không gian kết nối ấm cúng",
    statBelonging: "Góc Kỷ Niệm",
    statBelongingSub: "Nơi lưu giữ câu chuyện thực khách",

    philosophyBadge: "Triết Lý Saime",
    philosophyTitle: "Kết nối qua từng món ăn, sẻ chia trong từng khoảnh khắc",
    ourStoryTextMarkdown: `Tại Saime, chúng tôi tin rằng bàn ăn chính là chiếc cầu nối tuyệt vời nhất đưa mọi người lại gần nhau hơn.

Trong nhịp sống hiện đại, khi những kết nối chân thật dần trở nên quý giá, các buổi thưởng vị (tasting experiences) chính là khoảng lặng cần thiết để chúng ta sống chậm lại, cùng nhau thưởng thức những điều mới mẻ và chia sẻ những câu chuyện dung dị.

Dù là một ly cocktail được chăm chút tỉ mỉ, một đĩa ăn ấm nóng sưởi ấm tâm hồn, hay tách cà phê đậm đà thơm ngát, mỗi hương vị đều là một lời mở đầu cho những cuộc trò chuyện. Khi ngồi lại cùng nhau, chúng ta trò chuyện về món ăn, về những điều mình yêu thích, và từ đó, những tình bạn mới được bắt đầu một cách thật tự nhiên.

Đó là lý do chúng tôi tổ chức các Buổi Thưởng Vị tại Saime. Đây là những buổi gặp gỡ ấm cúng, nơi bạn không chỉ khám phá nét đặc sắc của ẩm thực và thức uống bản địa, mà còn có cơ hội làm quen với những người bạn mới, sẻ chia những trải nghiệm thú vị trong hành trình ghé thăm Hội An.

Bởi vì sau cùng, những khoảnh khắc đáng nhớ nhất luôn được dệt nên quanh một chiếc bàn ăn.`,

    colorTitle: "Sắc màu gợi nhớ một Hội An ấm áp",
    colorBody: "Saime được nhen nhóm từ ý tưởng về một góc nhỏ ngập tràn tiếng cười và những đĩa ăn cùng sẻ chia. Không gian mộc mạc nhưng rực rỡ của chúng tôi lấy cảm hứng từ chính bảng màu đặc trưng của phố cổ Hội An, biểu trưng cho sự gắn kết và ấm cúng trong những bữa cơm sum vầy của người Việt:",

    storyNav: "Về Saime",
    menuNav: "Thực Đơn",
    bookingNav: "Hợp Tác & Sự Kiện",
    guestbookNav: "Sổ Lưu Bút Bàn Dài",
    tastingNav: "Buổi Thưởng Vị",

    tastingSubtitle: "Không gian kết nối ấm cúng",
    tastingTitle: "Trải Nghiệm Thưởng Vị",
    tastingDesc: "Nơi bạn cùng những người bạn mới khám phá các tầng hương vị tinh tế, sẻ chia những câu chuyện thú vị và cảm nhận sự kết nối chân thành qua từng món ăn, thức uống được chuẩn bị công phu.",
    tasteFoodTitle: "Ẩm Thực Bản Địa",
    tasteFoodDesc: "Khám phá sự kỳ diệu của gia vị Việt qua hành trình so sánh trực quan giữa các nguyên liệu truyền thống và hiện đại. Bạn sẽ cảm nhận được một chút thay đổi nhỏ từ muối, tiêu rừng hay giấm bản địa có thể tạo nên sự bứt phá bất ngờ cho hương vị như thế nào.",
    tasteCoffeeTitle: "Hương Vị Cà Phê Việt",
    tasteCoffeeDesc: "Hành trình tìm hiểu sâu sắc về hạt cà phê Việt Nam. Cùng phân biệt hương vị giữa Robusta và Arabica, trải nghiệm sự khác biệt giữa kỹ thuật pha phin truyền thống với các phương pháp pha chế hiện đại, và tìm ra tỷ lệ sữa - cà phê hoàn hảo cho riêng mình.",
    tasteCocktailTitle: "Nghệ Thuật Cocktail Bản Địa",
    tasteCocktailDesc: "Một trải nghiệm đầy thú vị với nghệ thuật cân bằng hương vị. Cùng tham gia buổi thử mù (blind tasting) để cảm nhận sự kết hợp tinh tế giữa thảo mộc địa phương, si-rô tự nấu và các loại trái cây nhiệt đới nhằm tìm ra gu thưởng thức độc bản của bạn.",
    tasteBookSession: "Đăng ký tham gia",

    menuSubtitle: "Ẩm thực giao thoa hiện đại",
    menuTitle: "Thực Đơn Saime",
    menuDesc: "Mỗi món ăn tại Saime đều được chế biến tươi ngon mỗi ngày với hương vị đậm đà, là sự kết hợp hài hòa giữa ẩm thực đường phố Việt Nam và phong cách Bistro hiện đại. Nhấn vào từng món để xem câu chuyện và nguyên liệu chi tiết.",
    searchPlaceholder: "Tìm kiếm món ăn, nguyên liệu hoặc tên nhân sự...",
    vegetarianOnly: "Món chay",
    spicyOnly: "Món cay",
    viewDetails: "Xem chi tiết",
    ingredientsCount: "nguyên liệu",
    noDishesFound: "Không tìm thấy món ăn phù hợp",
    noDishesDesc: "Bạn hãy thử tìm kiếm với từ khóa khác hoặc tắt bộ lọc món Chay/Cay để khám phá thêm nhiều món ngon từ Saime nhé.",
    resetFilters: "Đặt lại bộ lọc",
    closeRecipe: "Đóng",

    reserveSubtitle: "Đồng hành cùng Saime",
    reserveTitle: "Đặt Sự Kiện & Hợp Tác Không Gian",
    reserveDesc: "Nếu bạn đang tìm kiếm một địa điểm ấm cúng cho sự kiện cá nhân, một buổi workshop thân mật hay muốn đề xuất ý tưởng hợp tác cùng Saime, hãy để không gian của chúng tôi đồng hành cùng bạn. Vui lòng điền thông tin bên dưới, đội ngũ Saime sẽ liên hệ lại trong thời gian sớm nhất!",
    resLabelName: "Họ và tên / Tên tổ chức",
    resLabelEmail: "Địa chỉ Email",
    resLabelPhone: "Số điện thoại",
    resLabelDate: "Ngày dự kiến tổ chức",
    resLabelTime: "Giờ bắt đầu dự kiến",
    resLabelGuests: "Số lượng khách dự kiến",
    resLabelZone: "Khu vực mong muốn",
    resLabelRequests: "Thông tin chi tiết về sự kiện hoặc ý tưởng hợp tác của bạn",
    resBtnSubmit: "Gửi thông tin đăng ký",
    resSuccessTitle: "Gửi thông tin thành công!",
    resSuccessDesc: "Yêu cầu của bạn đã được gửi tới Saime. Chúng tôi sẽ liên hệ lại để trao đổi chi tiết trong vòng 24 giờ tới!",

    boardSubtitle: "Góc lưu niệm",
    boardTitle: "Sổ Lưu Bút Bàn Dài",
    boardDesc: "Hãy để lại vài dòng cảm xúc về chuyến ghé thăm của bạn, sẻ chia một kỷ niệm ngọt ngào hoặc đọc những tâm sự từ những thực khách có chung tình yêu ẩm thực từng ngồi quanh chiếc bàn dài của Saime.",
    boardLabelName: "Tên của bạn",
    boardLabelLoc: "Bạn ghé thăm từ đâu?",
    boardLabelMessage: "Để lại lời nhắn, kỷ niệm hoặc cảm nhận của bạn về món ăn...",
    boardBtnSubmit: "Gửi lời nhắn",
    boardEmpty: "Chưa có dòng lưu bút nào ở đây. Hãy là người đầu tiên gửi lại một lời nhắn ấm áp nhé!",

    adminBtn: "Khu vực Admin",
    adminModalTitle: "Cổng Quản Trị Hệ Thống",
    adminPINPlaceholder: "Nhập mã PIN 6 chữ số",
    adminLoginBtn: "Xác nhận truy cập",
    adminAddBtn: "Thêm món hoặc nhân sự",
    adminEditBtn: "Chỉnh sửa",
    adminDeleteBtn: "Xóa",
    addItemModalTitle: "Thêm Món Ăn Hoặc Nhân Sự Mới",
    editItemModalTitle: "Cập Nhật Thông Tin",
    fieldName: "Tên món ăn / Tên nhân sự (Ví dụ: Bánh Mì Chảo Saime / Chef Minh)",
    fieldPrice: "Giá (VND) - Nhập 0 đối với nhân sự hoặc món đặc biệt",
    fieldDescription: "Mô tả / Câu chuyện món ăn",
    fieldIngredients: "Nguyên liệu chính (ngăn cách bằng dấu phẩy)",
    fieldCategory: "Phân nhóm / Vị trí công việc",
    fieldImage: "Đường dẫn hình ảnh (URL)",
    fieldVegetarian: "Món chay",
    fieldSpicy: "Món cay",
    fieldSignature: "Món đặc sắc (Signature)",
    btnSave: "Lưu thay đổi",
    btnCancel: "Hủy"
  }
};
