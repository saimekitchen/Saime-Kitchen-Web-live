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
    welcomeIntro: "Step inside and feel immediately at home. Saime Kitchen & Bar brings the high energy of Vietnamese traditional gatherings and marries it with playful comfort food. We are a warm focal point for local regulars, neighborhood friends, and visiting foodies alike in beautiful Hoi An.",
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
    tasteFoodDesc: "A hands-on journey through iconic local bites reimagined. Learn from our head chef how the balance of sweet, salty, spicy, and sour is struck, while sharing stories with table partners.",
    tasteCoffeeTitle: "Coffee Pour-Over & Pairing",
    tasteCoffeeDesc: "Discover the deep history of Vietnamese Robusta and Arabica. Experience manual drip, slow siphon, and creative pairings with caramelized warm coco-toast.",
    tasteCocktailTitle: "Local Botanical Mixology",
    tasteCocktailDesc: "Sample a flight of craft cocktails infused with Vietnamese herbs, home-brewed syrups, and native gins. Learn historical notes behind each craft blend while breaking the ice.",
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
    tagline: "gắn kết qua chia sẻ, giao thoa trong ẩm thực",
    estSpot: "Thành lập 2026 / Điểm Hẹn Gắn Kết",
    heroQuote: "gắn kết qua chia sẻ, giao thoa trong ẩm thực",
    welcomeIntro: "Mở cánh cửa bước vào và bạn sẽ cảm thấy như trở về nhà. Saime Kitchen & Bar mang nguồn năng lượng kết nối nồng hậu của người Việt Nam hòa quyện với phong cách ẩm thực đầy phóng khoáng. Chúng tôi là điểm đến ấm cúng cho khách hàng quen, bạn bè trong khu phố và khách du lịch yêu Hội An cổ kính.",
    exploreMenuBtn: "Khám Phá Thực Đơn Saime",
    bookSpotBtn: "Đặt Bàn Ngay",

    statFusion: "Xu Hướng Giao Thoa",
    statFusionSub: "Món Ăn Bản Địa Sáng Tạo",
    statLongTable: "Bàn Dài Gắn Kết",
    statLongTableSub: "Không Gian Cộng Đồng",
    statBelonging: "Góc Kỷ Niệm",
    statBelongingSub: "Khách Hàng Chia Sẻ",

    philosophyBadge: "Triết Lý Saime",
    philosophyTitle: "Nét vẽ của sự gắn kết, hòa quyện trong từng hương vị",
    ourStoryTextMarkdown: `Tại Saime, chúng tôi tin rằng đồ ăn ngon và thức uống tuyệt hảo gắn kết mọi người lại với nhau.

Trong một thế giới nơi những kết nối chân thật đôi khi trở nên khó khăn, các trải nghiệm nếm thử (tasting experiences) mang lại điều gì đó thực sự đặc biệt: cơ hội để sống chậm lại, khám phá điều mới mẻ và kết nối với người khác thông qua một trải nghiệm chung.

Dù đó là một ly cocktail được pha chế đẹp mắt, một món ăn sưởi ấm tâm hồn hay một ly cà phê được pha chế tỉ mỉ, hương vị luôn khơi nguồn cho những câu chuyện. Mọi người bắt đầu chia sẻ một cách tự nhiên về những gì họ ngửi thấy, những gì họ nếm được, những gì họ yêu thích và từ đó, những tình bạn mới thường được bắt đầu.

Đó là lý do chúng tôi tạo ra các Gói Trải Nghiệm Nếm Thử (Tasting Experience Packages), những buổi gặp gỡ thân mật không chỉ được thiết kế để khám phá ẩm thực và đồ uống, mà còn để giúp mọi người gặp gỡ những gương mặt mới, trao đổi những câu chuyện và tận hưởng thời gian chất lượng bên nhau tại Hội An.

Bởi vì đôi khi, những khoảnh khắc tuyệt vời nhất lại diễn ra quanh một chiếc bàn.`,

    colorTitle: "Bảng Màu Gợi Nhớ Nguồn Cội Hội An",
    colorBody: "Saime ra đời như một góc nhỏ ấm áp của những chiếc đĩa chia sẻ và những tràng cười giòn tan. Không gian sôi động, bình dị của chúng tôi được dệt nên một cách tài tình từ bảng màu đầy tính thẩm mỹ, tượng trưng cho những mảnh ghép của một buổi tụ họp ẩm thực ấm cúng của Việt Nam:",

    storyNav: "Câu Chuyện Saime",
    menuNav: "Thực Đơn",
    bookingNav: "Hợp Tác Sự Kiện",
    guestbookNav: "Bàn Tròn Gặp Gỡ",
    tastingNav: "Gói Trải Nghiệm",

    tastingSubtitle: "Những Buổi Gặp Gỡ Thân Mật",
    tastingTitle: "Trải Nghiệm Nếm Thử (Tasting)",
    tastingDesc: "Được thiết kế để khám phá các cung bậc hương vị tinh tế, đồng thời khơi gợi những câu chuyện, tiếng cười và những mối liên kết chân thành qua các gói tuyển chọn.",
    tasteFoodTitle: "Hương Vị Ẩm Thực Bản Địa",
    tasteFoodDesc: "Cùng bếp trưởng dạo quanh hành trình biến tấu các món ăn đường phố quen thuộc. Tìm hiểu sự cân bằng kỳ diệu giữa mặn, ngọt, cay, chua và kể tiếp những câu chuyện thú vị.",
    tasteCoffeeTitle: "Nghệ Thuật Cà Phê Thủ Công",
    tasteCoffeeDesc: "Tìm hiểu chiều sâu lịch sử hạt Robusta & Arabica Việt Nam. Trực tiếp trải nghiệm pha phin chậm, bình Syphon, và kết hợp tinh tế cùng món Bánh mì caramel Coco-toast ấm giòn.",
    tasteCocktailTitle: "Flavour Flight Cocktail Bản Địa",
    tasteCocktailDesc: "Thưởng thức các ly cocktail đặc chế kết hợp thảo mộc Việt, si-rô tự nấu và rượu gin bản địa. Khám phá những giai thoại lịch sử và kết nối bạn bè dễ dàng.",
    tasteBookSession: "Đăng Ký Buổi Trải Nghiệm",

    menuSubtitle: "Ẩm Thực Giao Thoa Sáng Tạo",
    menuTitle: "Bảng Hương Vị Saime",
    menuDesc: "Các món ăn của chúng tôi được chế biến tươi mới hằng ngày, mang hương vị đậm đà, đóng vai trò như cây cầu nối ẩm thực đường phố Việt Nam với bít-trô hiện đại. Bấm vào món ăn để xem chi tiết nguyên liệu.",
    searchPlaceholder: "Tìm kiếm chi tiết, nhân viên hoặc nguyên liệu...",
    vegetarianOnly: "Chỉ món chay",
    spicyOnly: "Chỉ món cay",
    viewDetails: "Xem Chi Tiết",
    ingredientsCount: "nguyên liệu",
    noDishesFound: "Không tìm thấy món ăn phù hợp",
    noDishesDesc: "Hãy thử gõ từ khóa khác hoặc tắt các bộ lọc Chay/Cay để thoải mái khám phá danh mục phong phú của Saime.",
    resetFilters: "Đặt Lại Bộ Lọc",
    closeRecipe: "Đóng Chi Tiết",

    reserveSubtitle: "Hợp Tác Cùng Saime",
    reserveTitle: "Yêu Cầu Thuê Không Gian & Hợp Tác Sự Kiện",
    reserveDesc: "Bạn đang tìm kiếm địa điểm tổ chức sự kiện cá nhân, workshop ấm cúng, hay muốn bắt tay lâu dài cùng Saime? Hãy để không gian độc đáo của chúng tôi trở thành sân khấu cho buổi tụ họp tiếp theo của bạn. Điền thông tin bên dưới và đội ngũ của chúng tôi sẽ liên hệ lại với bạn ngay lập tức!",
    resLabelName: "Họ tên / Đơn vị tổ chức",
    resLabelEmail: "Địa Chỉ Email",
    resLabelPhone: "Số Điện Thoại",
    resLabelDate: "Ngày Dự Kiến Diễn Ra",
    resLabelTime: "Giờ Bắt Đầu Dự Kiến",
    resLabelGuests: "Khách Dự Kiến",
    resLabelZone: "Khu Vực Mong Muốn",
    resLabelRequests: "Chi Tiết Sự Kiện / Mục Tiêu Workshop / Ý Tưởng Đề Xuất",
    resBtnSubmit: "Gửi Đề Xuất Hợp Tác",
    resSuccessTitle: "Yêu Cầu Đã Gửi!",
    resSuccessDesc: "Đề xuất hợp tác sự kiện của bạn đã được tiếp nhận. Đội ngũ Saime sẽ liên hệ lại trong vòng 24 giờ!",

    boardSubtitle: "Bảng Lưu Niệm Gặp Gỡ",
    boardTitle: "Góc Kỷ Niệm Chiếc Bàn Dài",
    boardDesc: "Để lại một dòng lưu bút về chuyến ghé thăm của bạn, chia sẻ một kỷ niệm ngọt ngào hoặc đọc tâm sự từ những người bạn chung tình yêu ẩm thực đã từng ngồi tại bàn của chúng tôi.",
    boardLabelName: "Tên Bạn",
    boardLabelLoc: "Bạn đến từ đâu?",
    boardLabelMessage: "Gửi gắm một kỷ niệm, cảm xúc hương vị hay lời chúc...",
    boardBtnSubmit: "Đăng Lên Bảng Lưu Niệm",
    boardEmpty: "Chưa có lưu bút nào. Hãy là người đầu tiên trao gửi sự ấm áp lên bảng lưu niệm nhé!",

    adminBtn: "Chế Độ Admin",
    adminModalTitle: "Cổng Quản Trị Hệ Thống / Nhà Phát Triển",
    adminPINPlaceholder: "Nhập mã PIN Admin 6 số",
    adminLoginBtn: "Vào Hệ Thống",
    adminAddBtn: "Thêm Món Ăn / Nhân Viên",
    adminEditBtn: "Sửa",
    adminDeleteBtn: "Xóa",
    addItemModalTitle: "Tải Lên Món Ăn Hoặc Nhân Viên Mới",
    editItemModalTitle: "Cập Nhật Chi Tiết / Sửa Đúng Hình Ảnh",
    fieldName: "Tên Khoản Mục (Ví dụ: Ốc Nướng Sỏi / Chef Minh)",
    fieldPrice: "Giá là VND (ví dụ: 110000) - Điền 0 nếu là Nhân viên/Đặc biệt",
    fieldDescription: "Mô tả chi tiết / Câu chuyện",
    fieldIngredients: "Nguyên liệu chính / Điểm nhấn đặc trưng (ngăn cách bằng dấu phẩy)",
    fieldCategory: "Loại Thực Đơn / Vai Trò Nhân Viên",
    fieldImage: "Đường dẫn hình ảnh (Unsplash hoặc hình ảnh riêng)",
    fieldVegetarian: "Lựa chọn chay",
    fieldSpicy: "Có vị cay",
    fieldSignature: "Đánh dấu Đặc trưng / Xuất sắc",
    btnSave: "Phê Duyệt & Lưu Thay Đổi",
    btnCancel: "Hủy Bỏ"
  }
};
