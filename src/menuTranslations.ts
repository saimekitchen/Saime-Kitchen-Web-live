import { MenuItem } from './types';

export const CATEGORY_TRANSLATIONS: Record<string, string> = {
  'Main Course': 'Món Chính',
  'Starters': 'Món Khai Vị',
  'Coffee': 'Cà phê',
  'Tea': 'Trà & Nước Ép',
  'Smoothie': 'Sinh tố',
  'Soft Drinks': 'Nước ngọt & Bia',
  'Pastry': 'Bánh ngọt',
  'Cocktail': 'Cocktail',
  'Mocktail': 'Mocktail',
  'Shot': 'Rượu Shot',
  'Beer': 'Bia',
  'Staff': 'Đội Ngũ',
  'Comfort Food': 'Ẩm Thực Sưởi Ấm',
  'Package': 'Set Ăn & Combo',
  'Healthy Diet': 'Chế Độ Ăn Lành Mạnh',
};

export const MENU_ITEM_TRANSLATIONS: Record<string, {
  name: string;
  description: string;
  ingredients: string[];
  category?: string;
}> = {
  // Main Courses & Burgers
  'chicken-burger': {
    name: 'BURGER GÀ GIÒN',
    description: 'Ức gà chiên xù giòn tan cùng phô mai tan chảy, xà lách tươi, cà chua xắt lát, salad bắp cải trắng tím trộn sốt giấm mayonnaise đặc trưng.',
    ingredients: ['Gà chiên giòn', 'Xà lách', 'Phô mai lát', 'Cà chua', 'Sốt cà chua', 'Bắp cải trắng & tím', 'Hành tây', 'Sốt giấm bít-trô', 'Mayonnaise'],
  },
  'beef-burger': {
    name: 'BURGER BÒ NƯỚNG',
    description: 'Thịt bò xay nướng lửa thơm lừng hòa quyện cùng thịt ba rọi xông khói giòn rụm, phô mai lát, trứng ốp-la lòng đào, xà lách, cà chua, kết hợp với sốt mayonnaise, tương cà và mù tạt vàng trên bánh mì nướng mè.',
    ingredients: ['Thịt bò nướng', 'Vụn bánh mì', 'Hành tây', 'Xà lách', 'Cà chua', 'Thịt xông khói', 'Phô mai lát', 'Trứng ốp-la', 'Mayonnaise', 'Tương cà', 'Mù tạt'],
  },
  'banh-mi-char-siu': {
    name: 'BÁNH MÌ XÁ XÍU',
    description: 'Bánh mì Việt Nam nướng giòn rụm kẹp đầy thịt xá xíu rim mật ong caramen đậm đà, pa-tê nhà làm béo ngậy, dưa leo tươi, xà lách và đồ chua muối giòn ngọt.',
    ingredients: ['Bánh mì giòn', 'Thịt xá xíu', 'Pa-tê béo', 'Dưa leo', 'Đồ chua muối', 'Rau thơm'],
  },
  'saime-pan': {
    name: 'BÁNH MÌ CHẢO SAIME',
    description: 'Một bữa tiệc đường phố đầy cuốn hút: Chảo gang nóng hổi với xíu mại Saime mọng nước, trứng lòng đào hoàn hảo, pa-tê béo ngậy, chả lụa thủ công, đồ chua, ngò rí và nước tương thanh ngọt, dùng kèm bánh mì giòn nóng hổi.',
    ingredients: ['Bánh mì giòn', 'Xíu mại Saime', 'Trứng', 'Pa-tê béo', 'Đồ chua', 'Nước tương ngọt', 'Rau ngò', 'Chả lụa'],
  },

  // Snacks & Starters
  'char-siu-mantou': {
    name: 'BÁNH BAO KẸP XÁ XÍU',
    description: 'Bánh bao hấp mềm mại, xốp mịn kẹp thịt ba chỉ xá xíu thơm lừng tan chảy trong miệng, rau ngò tươi, dưa leo xắt lát và sốt mayonnaise kết hợp cùng nước sốt xá xíu đậm đà ngọt dịu.',
    ingredients: ['Bánh bao hấp', 'Thịt ba chỉ xá xíu', 'Dưa leo', 'Nước sốt xá xíu', 'Mayonnaise', 'Rau ngò'],
  },
  'chicken-mantou': {
    name: 'Chicken Mantou',
    description: 'Bánh bao kẹp gà nugget chiên giòn, bắp cải trắng & tím cùng nước sốt nhà làm đậm đà.',
    ingredients: ['Bánh bao', 'Gà nugget', 'Bắp cải trắng', 'Bắp cải tím', 'Sốt nhà làm'],
  },
  'braised-pork-mantou': {
    name: 'Braised Pork Mantou',
    description: 'Bánh bao kẹp thịt kho tàu thơm ngon, dưa leo tươi mát, măng giòn và sốt mayonnaise béo ngậy.',
    ingredients: ['Bánh bao', 'Thịt kho tàu', 'Dưa leo', 'Măng', 'Sốt mayonnaise'],
  },
  'saime-wonton': {
    name: 'HOÀNH THÁNH CHIÊN SAIME',
    description: 'Hoành thánh chiên giòn vàng óng kẹp nhân thịt heo và tôm xay đậm đà hương vị xíu mại, ăn kèm đồ chua thanh mát, sốt mayonnaise béo ngậy và tương ớt cay nồng.',
    ingredients: ['Vỏ hoành thánh', 'Nhân tôm thịt xíu mại', 'Mayonnaise', 'Tương ớt', 'Đồ chua'],
  },
  'corn-wonton': {
    name: 'HOÀNH THÁNH NGỌT CHIÊN',
    description: 'Lựa chọn hoành thánh chay sưởi ấm tâm hồn với nhân hạt ngô ngọt dẻo, hành tím, hành lá tươi kết hợp chiên áp chảo nhẹ nhàng cùng muối tiêu cay nhẹ.',
    ingredients: ['Vỏ hoành thánh', 'Ngô nếp dẻo', 'Ngô ngọt', 'Hành tím', 'Hành lá', 'Muối & Tiêu'],
  },
  'cracker': {
    name: 'BÁNH TRÁNG KẸP SAIME',
    description: 'Bánh tráng nướng giòn rụm phủ dầu hành thơm phức, chà bông heo đậm đà, lớp pa-tê đặc trưng béo ngậy cùng nước sốt mắm kẹo ngọt thanh umami.',
    ingredients: ['Bánh tráng giòn', 'Pa-tê', 'Dầu hành', 'Chà bông heo', 'Nước mắm kẹo'],
  },

  // Mains & Pastas
  'creamy-dreamy': {
    name: 'KHOAI TÂY NGHIỀN THỊT KHO',
    description: 'Sự kết hợp bùng nổ: khoai tây nghiền mịn màng ngập tràn thịt ba chỉ kho tàu caramen đậm đà, điểm xuyết măng tây non giòn mang lại cảm giác ấm áp tuyệt đối.',
    ingredients: ['Khoai tây nghiền', 'Thịt ba rọi kho', 'Măng tây non'],
  },
  'bolognese-spaghetti': {
    name: 'MÌ Ý SỐT BÒ BẰM',
    description: 'Mì Ý dai ngon hoàn hảo rưới ngập nước sốt cà chua thịt bò bằm ninh chậm thơm lừng, phủ phô mai Parmesan béo ngậy và lá húng tây tươi.',
    ingredients: ['Mì sợi Ý', 'Thịt bò bằm', 'Nước sốt cà chua', 'Phô mai Parmesan', 'Húng tây'],
  },
  'creamy-pasta': {
    name: 'MÌ Ý SỐT KEM NẤM',
    description: 'Mì sợi dẹt quyện trong sốt kem béo ngậy, nấm tươi xắt lát thơm phức, phô mai Parmesan tan chảy và tiêu đen đập dập cay nồng nàn.',
    ingredients: ['Mì sợi dẹt', 'Nấm tươi', 'Sốt kem béo', 'Phô mai Parmesan', 'Tiêu đen'],
  },
  'saime-comfort': {
    name: 'SÚP COMFORT SAIME',
    description: 'Bát súp sưởi ấm tâm hồn của bếp trưởng: súp sườn heo non hầm thảo mộc thơm lành cùng bắp ngọt, cà rốt, khoai tây ngọt dẻo, mang đậm phong vị quê nhà ấm áp.',
    ingredients: ['Sườn non heo', 'Bắp ngọt', 'Cà rốt', 'Khoai tây dẻo', 'Hành ngò'],
  },
  'xoi': {
    name: 'Xôi',
    description: 'Xôi dẻo thơm kết hợp pate béo ngậy, lá dứa, hành phi giòn, tôm khô nhỏ, chà bông heo, lạp sườn nướng, xá xíu đậm đà và trứng cút.',
    ingredients: ['Pate béo', 'Xôi dẻo', 'Lá dứa', 'Hành phi', 'Tôm khô', 'Chà bông', 'Lạp sườn', 'Thịt xá xíu', 'Trứng cút'],
  },
  'chicken-salad': {
    name: 'SALAD GÀ SỐT VINAIGRETTE',
    description: 'Ức gà nướng thái mỏng xếp trên thảm rau cải xanh, cà chua bi ngọt lịm, hành tây tím, rưới nước sốt giấm vinaigrette chua ngọt thơm lừng.',
    ingredients: ['Gà nướng', 'Rau xanh tổng hợp', 'Cà chua bi', 'Hành tây tím', 'Sốt giấm chua ngọt'],
  },
  'garden-salad': {
    name: 'SALAD VƯỜN TƯƠI',
    description: 'Các loại rau xanh giòn rụm trong ngày, dưa leo, cà chua bi, dầu oliu nguyên chất rưới sốt giấm chanh tươi thanh mát giảm ngấy tuyệt hảo.',
    ingredients: ['Rau xà lách xanh', 'Dưa leo', 'Cà chua bi', 'Dầu ô-liu', 'Nước cốt chanh'],
  },
  'chicken-nugget': {
    name: 'GÀ VIÊN CHIÊN GIÒN',
    description: 'Các viên gà chiên vàng giòn rụm bên ngoài, mọng nước đậm đà bên trong, ăn kèm sốt tương cà hoặc sốt bơ tỏi.',
    ingredients: ['Thịt ức gà', 'Bột chiên giòn', 'Gia vị tỏi ớt'],
  },
  'garlic-bread': {
    name: 'BÁNH MÌ BƠ TỎI',
    description: 'Bánh mì baguette thái lát nướng giòn rụm phủ lớp bơ tỏi thơm ngậy, ngò tây tươi xay nhỏ.',
    ingredients: ['Bánh mì Baguette', 'Bơ lạt', 'Tỏi xay', 'Ngò tây'],
  },
  'french-fries': {
    name: 'KHOAI TÂY CHIÊN',
    description: 'Khoai tây cắt thanh chiên giòn vàng óng, lắc nhẹ chút muối biển tinh khiết, dùng kèm tương cà.',
    ingredients: ['Khoai tây tươi', 'Muối biển', 'Dầu thực vật'],
  },
  'skew-combo': {
    name: 'Skew combo',
    description: 'Thịt gà và thịt lợn xiên nướng thơm ngon nức mũi.',
    ingredients: ['Thịt gà', 'Thịt lợn', 'Gia vị xiên nướng'],
  },
  'coco-toast': {
    name: 'BÁNH MÌ NƯỚNG DỪA dứa',
    description: 'Bánh mì brioche lát dày nướng bơ kẹp mứt dứa dừa nướng thơm bùi, ăn kèm một muỗng kem dừa mát lạnh sảng khoái.',
    ingredients: ['Bánh mì gối Brioche', 'Mứt dứa dừa', 'Bơ thơm', 'Kem cốt dừa'],
  },

  // Coffee
  'espresso-coffee': {
    name: 'ESPRESSO Ý',
    description: 'Cà phê Espresso thuần khiết, đậm đà chuẩn vị Ý được pha chế từ hạt Robusta & Arabica chọn lọc cao cấp. Hương thơm nồng nàn cùng lớp crema vàng óng.',
    ingredients: ['Hạt cà phê Ý tuyển chọn', 'Lớp crema đậm vị'],
  },
  'americano-coffee': {
    name: 'AMERICANO / LONG BLACK',
    description: 'Gấp đôi lượng espresso nguyên chất pha loãng với nước nóng thanh tao, mang lại hương vị cà phê mượt mà, sâu lắng kéo dài khó quên.',
    ingredients: ['Espresso kép', 'Nước nóng tinh khiết'],
  },
  'cappuccino-coffee': {
    name: 'CAPPUCCINO / FLAT WHITE',
    description: 'Lớp bọt sữa siêu mịn đổ nhẹ nhàng lên tách espresso kép đậm đặc. Hương vị cân bằng, ấm áp và béo ngậy vô cùng mượt mà.',
    ingredients: ['Espresso trái cây', 'Sữa đánh bọt mịn'],
  },
  'caramel-macchiato': {
    name: 'CARAMEL MACCHIATO',
    description: 'Cà phê espresso hòa quyện cùng si-rô vani ngọt ngào và sữa tươi đánh bọt ấm áp, kết thúc bằng những đường sốt caramel bơ béo ngậy.',
    ingredients: ['Espresso', 'Si-rô vani', 'Sữa tươi đánh bọt', 'Sốt caramel'],
  },
  'latte-coffee': {
    name: 'CAFE LATTE',
    description: 'Cà phê espresso truyền thống kết hợp hoàn hảo cùng sữa nóng đánh bọt mịn màng và một lớp bọt sữa mỏng tinh tế trên bề mặt.',
    ingredients: ['Espresso đậm đà', 'Sữa nóng', 'Lớp bọt nhung'],
  },
  'salted-cream-latte': {
    name: 'LATTE KEM BÉO MUỐI',
    description: 'Cà phê Latte cao cấp phủ một lớp kem sữa muối mặn ngọt béo ngậy tan từ từ vào nền espresso đậm vị phía dưới.',
    ingredients: ['Espresso', 'Kem sữa muối biển', 'Sữa tươi nguyên chất'],
  },
  'mocha-coffee': {
    name: 'CAFE MOCHA SÔ-CÔ-LA',
    description: 'Sự kết hợp quyến rũ giữa espresso đậm đà cùng ca-cao nguyên chất béo ngậy, sữa nóng và phủ một lớp bột sô-cô-la mỏng.',
    ingredients: ['Espresso', 'Sô-cô-la đậm', 'Sữa đánh bọt'],
  },
  'black-coffee': {
    name: 'CÀ PHÊ ĐEN TRUYỀN THỐNG',
    description: 'Cà phê đen pha phin chậm truyền thống của Việt Nam cực kỳ đậm đặc, mạnh mẽ và nồng nàn hương thơm hạt Robusta rang mộc.',
    ingredients: ['Hạt Robusta truyền thống', 'Phin nhỏ giọt'],
  },
  'condensed-coffee': {
    name: 'CÀ PHÊ SỮA ĐÁ VIỆT NAM',
    description: 'Ly cà phê sữa đá quốc hồn quốc túy. Cà phê Robusta phin đậm đà hòa quyện cùng sữa đặc ngọt ngào béo ngậy và đá lạnh sảng khoái.',
    ingredients: ['Hà phê Robusta đậm', 'Sữa đặc', 'Đá lạnh'],
  },
  'white-coffee': {
    name: 'BẠC XỈU ĐÁ',
    description: 'Món uống ngọt ngào dành cho những người yêu thích hương vị nhẹ nhàng. Lớp sữa đặc béo ngậy hòa cùng sữa tươi và điểm thêm chút cà phê thơm phức.',
    ingredients: ['Sữa tươi sạch', 'Sữa đặc', 'Cà phê phin thơm'],
  },
  'salted-coffee': {
    name: 'CÀ PHÊ MUỐI XỨ HUẾ',
    description: 'Món đặc sản trứ danh bắt nguồn từ cố đô Huế. Cà phê đen phin đậm đà rưới lớp bọt sữa kem mặn mịn màng cho hậu vị mặn ngọt cuốn hút.',
    ingredients: ['Robusta phin chậm', 'Kem sữa mặn béo', 'Sữa đặc'],
  },
  'coconut-coffee': {
    name: 'CÀ PHÊ CỐT DỪA ĐÁ XAY',
    description: 'Món ngon giải nhiệt tuyệt vời: sinh tố cốt dừa đá xay ngọt ngào, thơm bùi kết hợp cùng cà phê phin đậm đà rưới lên trên.',
    ingredients: ['Sinh tố dừa đá xay', 'Cà phê phin đậm đà', 'Sữa đặc ngọt'],
  },

  // Tea
  'tamarind-tea': {
    name: 'NƯỚC ME SAIME ĐẶC TRƯNG',
    description: 'Thức uống đặc trưng của Saime với vị chua ngọt kích thích của me chín, mật ong rừng thơm nhẹ, hạt đác dẻo dai và đậu phộng rang giòn bùi.',
    ingredients: ['Cốt me chín', 'Mật ong rừng', 'Hạt đác dẻo', 'Đậu phộng rang'],
  },
  'salted-kumquat': {
    name: 'TẮC XÍ MUỘI ĐÁ',
    description: 'Thức uống truyền thống giải nhiệt thanh mát. Trái quất muối dầm lắc tay cùng đường phèn thanh mát và đá bào nhuyễn.',
    ingredients: ['Tắc muối nhà làm', 'Vỏ tắc xí muội', 'Siro đường phèn'],
  },
  'pineapple-tea': {
    name: 'TRÀ THƠM (DỨA) NHIỆT ĐỚI',
    description: 'Trà đen hữu cơ lắc cùng sốt dứa chín mật ngọt ngào và phủ đầy những miếng dứa tươi xắt nhỏ mọng nước.',
    ingredients: ['Trà đen hữu cơ', 'Sốt dứa mật', 'Mứt dứa chín tươi'],
  },
  'mango-tea': {
    name: 'TRÀ XOÀI NHIỆT ĐỚI',
    description: 'Trà đen thơm mát kết hợp cùng sốt xoài cát chín thơm lừng địa phương cho ly trà ngọt ngào sảng khoái ngày hè.',
    ingredients: ['Trà đen', 'Xoài cát chín ngọt', 'Siro mía đường'],
  },
  'red-grapefruit-juzu': {
    name: 'TRÀ BƯỞI HỒNG & YUZU NHIỆT ĐỚI',
    description: 'Sự hòa quyện tuyệt vời của bưởi hồng mọng nước vị chua dịu cùng hương quýt Yuzu Nhật Bản thanh mát nồng nàn hoa cỏ.',
    ingredients: ['Tép bưởi hồng', 'Tinh chất quýt Yuzu', 'Siro đường phèn'],
  },
  'strawberry-tea': {
    name: 'TRÀ DÂU TÂY NHIỆT ĐỚI',
    description: 'Trà thơm ngát lắc cùng những trái dâu tây Đà Lạt ngào đường chua ngọt, mật ong rừng và lá bạc hà tươi.',
    ingredients: ['Trà đen', 'Dâu tây Đà Lạt dầm', 'Mật ong rừng', 'Lá bạc hà'],
  },
  'orange-juice': {
    name: 'NƯỚC CAM ÉP NGUYÊN CHẤT',
    description: '100% nước cam ngọt vắt tay tươi mới hằng ngày cả tép. Ngọt mát tự nhiên dồi dào Vitamin C giải khát tuyệt đối.',
    ingredients: ['Cam sành mọng nước', 'Không thêm đường hóa học'],
  },
  'watermelon-juice': {
    name: 'NƯỚC ÉP DƯA HẤU ĐỎ',
    description: 'Nước ép nguyên chất từ những trái dưa hấu đỏ chín ngọt mát lịm sảng khoái.',
    ingredients: ['Dưa hấu đỏ chín ngọt', 'Chút đá bào'],
  },
  'passionfruit-juice': {
    name: 'NƯỚC ÉP CHANH DÂY',
    description: 'Nước cốt chanh leo tươi vàng óng thơm nồng nàn chua ngọt kích thích vị giác cực kỳ sảng khoái.',
    ingredients: ['Chanh dây tươi', 'Siro mía ngọt', 'Đá nhuyễn'],
  },

  // Matcha
  'matcha-latte': {
    name: 'TRÀ XANH MATCHA LATTE',
    description: 'Trà xanh Matcha Nhật Bản nguyên chất cao cấp đánh tan mịn màng hòa cùng sữa tươi nguyên kem ấm áp ngọt dịu.',
    ingredients: ['Bột Matcha cao cấp', 'Sữa tươi ấm', 'Đường mía thanh'],
  },
  'matcha-coconut': {
    name: 'MATCHA CỐT DỪA',
    description: 'Sự kết hợp béo ngậy giữa matcha Nhật Bản đậm đà rưới lên lớp cốt dừa đá xay thơm bùi mát lạnh.',
    ingredients: ['Bột Matcha nguyên chất', 'Cốt dừa đá xay', 'Sữa béo'],
  },
  'matcha-salted-cream': {
    name: 'MATCHA KEM MUỐI BIỂN',
    description: 'Nền Matcha sữa tươi mát lạnh phủ lớp kem sữa béo mặn nhẹ ngọt ngào tạo nên hương vị cuốn hút.',
    ingredients: ['Matcha nguyên chất', 'Sữa tươi sạch', 'Kem sữa muối béo'],
  },
  'matcha-cream': {
    name: 'MATCHA KEM SỮA NGỌT',
    description: 'Matcha latte đá rưới thêm lớp bọt sữa kem tươi béo ngậy sệt mịn sảng khoái.',
    ingredients: ['Bột Matcha Nhật', 'Sữa tươi', 'Kem sữa sệt ngọt'],
  },
  'chocolate-latte': {
    name: 'SÔ-CÔ-LA LATTE',
    description: 'Ca-cao nguyên chất béo thơm hảo hạng hòa cùng sữa tươi nguyên kem và đường nâu dịu ngọt sưởi ấm tâm hồn.',
    ingredients: ['Ca-cao béo ngậy', 'Sữa đánh bọt', 'Mía đường nâu'],
  },

  // Smoothie
  'avocado-smoothie': {
    name: 'SINH TỐ BƠ SÁP ĐẮC LẮC',
    description: 'Sinh tố bơ sáp Đắc Lắc béo dẻo ngậy xay nhuyễn cùng sữa tươi và sữa đặc sánh mịn béo ngậy hoàn hảo.',
    ingredients: ['Quả bơ sáp thơm dẻo', 'Sữa đặc béo', 'Sữa tươi'],
  },
  'mango-smoothie': {
    name: 'SINH TỐ XOÀI CÁT',
    description: 'Sinh tố xoài cát chín vàng ngọt lịm xay nhuyễn sánh mịn sảng khoái ngày hè oi ả.',
    ingredients: ['Xoài chín mọng ngọt', 'Sữa chua nhẹ', 'Sữa đặc'],
  },

  // Soft Drinks & Beers
  'coke-soft': { name: 'COCA COLA CLASSSIC', description: 'Nước ngọt Coca-cola mát lạnh giải khát.', ingredients: ['Coca Cola lon'] },
  'coke-light-zero': { name: 'COCA COLA LIGHT / ZERO', description: 'Coca Cola không đường thanh mát.', ingredients: ['Coca Cola Zero lon'] },
  'sprite-soft': { name: 'SPRITE', description: 'Nước chanh Sprite giải khát sảng khoái.', ingredients: ['Sprite lon'] },
  'tonic-soft': { name: 'NƯỚC TONIC', description: 'Nước Tonic sủi bọt pha chế tuyệt hảo.', ingredients: ['Tonic lon'] },
  'ginger-ale': { name: 'GINGER ALE', description: 'Nước gừng ép Ginger Ale thơm cay sảng khoái.', ingredients: ['Ginger Ale lon'] },
  'singha-soda': { name: 'SODA THÁI SINGHA', description: 'Soda Singha nhiều ga giữ lạnh lâu cực sướng.', ingredients: ['Singha lon'] },
  'huda-beer': { name: 'BIA HUDA MIỀN TRUNG', description: 'Bia Huda mát lạnh đậm tình miền Trung.', ingredients: ['Bia Huda lon'] },
  'saigon-beer': { name: 'BIA SÀI GÒN SPECIAL', description: 'Bia Sài Gòn đậm vị truyền thống.', ingredients: ['Bia Sài Gòn lon'] },
  'heineken-beer': { name: 'BIA HEINEKEN', description: 'Bia Heineken cao cấp ướp lạnh.', ingredients: ['Bia Heineken lon'] },
  'heineken-zero': { name: 'BIA HEINEKEN KHÔNG CỒN', description: 'Bia Heineken 0.0 không lo say xỉn nhưng nguyên hương vị bia béo nhẹ.', ingredients: ['Bia Heineken 0.0 lon'] },

  // Pastry
  'coconut-croissant': {
    name: 'BÁNH MÌ NƯỚNG DỪA dứa',
    description: 'Bánh mì brioche lát dày nướng bơ kẹp mứt dứa dừa nướng thơm bùi, ăn kèm một muỗng kem dừa mát lạnh sảng khoái.',
    ingredients: ['Bánh mì gối Brioche', 'Mứt dứa dừa', 'Bơ thơm', 'Kem cốt dừa'],
  },

  // Cocktails (The Alchemist Laboratory)
  'long-island-tea': {
    name: 'LONG ISLAND ICED TEA',
    description: 'Ly cocktail mạnh mẽ pha trộn từ Vodka, Rum trắng, Tequila, Gin, Triple Sec phối hợp nước cốt chanh tươi rưới một lớp mỏng Coca-Cola.',
    ingredients: ['Vodka', 'Rum trắng', 'Tequila', 'Gin', 'Triple Sec', 'Chanh tươi', 'Coca Cola'],
  },
  'mojito': {
    name: 'MOJITO CỔ ĐIỂN',
    description: 'Món uống giải nhiệt vùng nhiệt đới từ rượu Rum trắng dầm cùng lá bạc hà tươi, quất chanh, si-rô đường và làm đầy bằng nước soda sủi tăm.',
    ingredients: ['Rum trắng', 'Lá bạc hà tươi', 'Chanh tươi', 'Soda sủi bọt', 'Đường mía'],
  },
  'maitai': {
    name: 'MAI TAI NHIỆT ĐỚI',
    description: 'Hương vị bãi biển rực rỡ quyến rũ kết hợp Rum đậm, Triple Sec, siro hạnh nhân Orgeat ngọt bùi, cùng nước cam chanh sảng khoái.',
    ingredients: ['Rum đậm thơm', 'Triple Sec', 'Si-rô hạnh nhân Orgeat', 'Nước chanh tươi'],
  },
  'matador': {
    name: 'MATADOR DŨNG MÃNH',
    description: 'Cocktail Tequila dũng mãnh pha trộn cùng rượu mùi dâu tây rừng, dứa chín ép ngọt mát và chanh tươi lắc mạnh trên đá lạnh.',
    ingredients: ['Tequila', 'Rượu mùi dâu tây', 'Nước dứa ép', 'Chanh tươi'],
  },
  'dry-martini': {
    name: 'DRY MARTINI HUYỀN THOẠI',
    description: 'Vua của các loại cocktail. Dry Gin thượng hạng khuấy kỹ cùng rượu Vermouth khô, trang trí bằng quả ô-liu xanh mặn nồng.',
    ingredients: ['Dry Gin cao cấp', 'Rượu Dry Vermouth', 'Quả ô-liu xanh'],
  },
  'clover-club': {
    name: 'CLOVER CLUB QUÝ TỘC',
    description: 'Món cocktail màu hồng quyến rũ cổ điển phối hợp giữa Gin thơm thảo mộc, siro mâm xôi dâu rừng chua ngọt, chanh tươi và bọt lòng trắng trứng sánh mịn như nhung.',
    ingredients: ['Gin', 'Mứt quả mâm xôi', 'Chanh tươi', 'Lòng trắng trứng mịn'],
  },
  'cosmopolitan': {
    name: 'COSMOPOLITAN KIÊU KỲ',
    description: 'Cocktail sắc hồng thời thượng quyện giữa Vodka chanh, Triple Sec, nước ép nam việt quất chua thanh và vỏ cam đốt thơm lừng.',
    ingredients: ['Vodka chanh', 'Triple Sec', 'Nước nam việt quất', 'Vỏ cam đốt'],
  },
  'sex-on-the-beach': {
    name: 'SEX ON THE BEACH RỰC RỠ',
    description: 'Ly cocktail đầy màu sắc hè rực rỡ trộn giữa Vodka, rượu mùi đào ngọt ngào, nước cam ép tươi cùng nước nam việt quất lôi cuốn.',
    ingredients: ['Vodka', 'Rượu mùi đào ngọt', 'Nước cam tươi', 'Nước nam việt quất'],
  },
  'espresso-martini-classic': {
    name: 'ESPRESSO MARTINI THỨC TỈNH',
    description: 'Món uống kích thích đánh thức mọi giác quan phối hợp Vodka, rượu mùi cà phê Kahlúa béo thơm cùng một shot Espresso Saime đậm đà.',
    ingredients: ['Vodka', 'Kahlúa béo ngọt', 'Espresso Saime nguyên chất'],
  },
  'whisky-sour-classic': {
    name: 'WHISKY SOUR NỒNG NÀN',
    description: 'Sự cân bằng hoàn hảo tuyệt đối giữa rượu Bourbon Whiskey nồng ấm, nước cốt chanh tươi chua dịu, si-rô ngọt ngào và bọt lòng trắng trứng mịn màng.',
    ingredients: ['Bourbon Whiskey', 'Nước chanh tươi', 'Siro ngọt', 'Bọt trứng nhung'],
  },
  'old-fashioned-classic': {
    name: 'OLD FASHIONED CỔ ĐIỂN',
    description: 'Sự nam tính, mộc mạc lâu đời. Rượu Bourbon Whiskey khuấy nhẹ cùng đường nâu dầm và những giọt rượu đắng Angostura thơm thảo mộc quý hiếm.',
    ingredients: ['Bourbon Whiskey', 'Đường mía nâu', 'Rượu đắng Angostura', 'Vỏ cam tươi'],
  },
  'rob-roy-classic': {
    name: 'ROB ROY SCOTCH',
    description: 'Sự mạnh mẽ quý tộc từ Scotch Whisky hòa cùng rượu Sweet Vermouth ngọt ngào đậm vị và một giọt rượu đắng tinh tế.',
    ingredients: ['Scotch Whisky', 'Sweet Vermouth', 'Rượu đắng tinh chế'],
  },
  'sidecar-classic': {
    name: 'SIDECAR QUYẾN RŨ',
    description: 'Trải nghiệm phong cách Pháp nồng nàn quyện từ rượu Brandy hảo hạng, Triple Sec cam ngọt và nước cốt chanh tươi lắc mạnh rắc vành đường ngọt ngào.',
    ingredients: ['Brandy Pháp', 'Triple Sec', 'Chanh tươi', 'Vành đường cát'],
  },
  'aviation-classic': {
    name: 'AVIATION BẦU TRỜI',
    description: 'Cocktail màu xanh tím thơ mộng của bầu trời pha trộn từ Dry Gin, rượu mùi anh đào Maraschino ngọt đắng và rượu mùi hoa tím Creme de Violette thanh khiết.',
    ingredients: ['Dry Gin', 'Maraschino anh đào', 'Creme de Violette hoa tím'],
  },
  'alexander-brandy': {
    name: 'BRANDY ALEXANDER NGỌT NGÀO',
    description: 'Ly cocktail tráng miệng ngọt béo quyến rũ từ Brandy, rượu mùi ca-cao đậm vị hòa quyện cùng kem sữa béo ngậy và hạt nhục đậu khấu bào.',
    ingredients: ['Brandy', 'Rượu Creme de Cacao', 'Kem tươi béo', 'Nhục đậu khấu'],
  },
  'margarita-classic': {
    name: 'MARGARITA CỔ ĐIỂN',
    description: 'Nữ hoàng cocktail Mexico pha quyện giữa Tequila mạnh mẽ, Triple Sec cam ngọt và nước cốt chanh xanh chua gắt, lắc lạnh và rắc vành muối mịn mặn mà.',
    ingredients: ['Tequila Tequila', 'Triple Sec', 'Chanh xanh tươi', 'Vành muối biển'],
  },

  // House Signatures
  'clarified-pina': {
    name: 'CLARIFIED PIÑA COLADA (LỌC TRONG)',
    description: 'Bản nâng cấp siêu hiện đại của cocktail dừa dứa. Rượu Rum trắng ngâm cốt dừa dứa tươi được lọc trong vắt bằng sữa tươi làm nổi bật hương dừa thanh nhã mượt mà vô cùng tinh khiết.',
    ingredients: ['Rum trắng dừa dứa', 'Sữa tươi lọc trong', 'Siro ngọt nhẹ'],
  },
  'smoked-fancy-mary': {
    name: 'FANCY MARY KHÓI',
    description: 'Sự sáng tạo đột phá từ cocktail Bloody Mary. Nước cà chua chín ép hòa cùng Vodka thảo mộc được sục khói gỗ sồi nồng nàn, tiêu sọ cay nồng nàn.',
    ingredients: ['Vodka ngâm tiêu', 'Nước cà chua sục khói', 'Muối ớt ngò'],
  },
  'me-sour': {
    name: 'SAIME ME SOUR (CHUA NGỌT ME)',
    description: 'Cocktail Signature đặc trưng của Saime. Rượu Bourbon Whiskey phối hợp với cốt me chín rim mật rừng chua ngọt đậm đà, bọt lòng trắng trứng và đậu phộng rang giòn thơm bùi.',
    ingredients: ['Bourbon Whiskey', 'Cốt me mật ong', 'Bọt trứng nhung', 'Hạt đác', 'Đậu phộng rang'],
  },
  'blow-kiss': {
    name: 'BLOW KISS QUYẾN RŨ',
    description: 'Nụ hôn ngọt ngào lãng mạn từ rượu Gin ngâm hoa hibiscus thảo mộc hồng hào, nước ép bưởi hồng mọng nước rưới bọt sữa kem vani dừa béo ngậy.',
    ingredients: ['Gin Hibiscus', 'Nước bưởi hồng', 'Kem vani dừa béo mịn'],
  },
  'ruby-splash': {
    name: 'RUBY SPLASH LẤP LÁNH',
    description: 'Hương vị tươi trẻ rạng rỡ quyện Tequila mâm xôi tươi, mứt dâu tây Đà Lạt dầm chua ngọt lôi cuốn cùng nước bưởi hồng ép sảng khoái.',
    ingredients: ['Tequila mâm xôi', 'Dâu tây Đà Lạt dầm', 'Bưởi hồng ép'],
  },

  // Mocktails
  'mocktail-spring': { name: 'MOCKTAIL SPRING (MÙA XUÂN)', description: 'Thức uống không cồn tươi tắn sảng khoái từ dâu tây Đà Lạt ngào đường dầm nhuyễn, chanh tươi và nước soda sủi bọt mát lành.', ingredients: ['Dâu tây dầm', 'Chanh tươi', 'Soda sủi tăm'] },
  'mocktail-summer': { name: 'MOCKTAIL SUMMER (MÙA HÈ)', description: 'Giải nhiệt hè rực rỡ với nước dứa chín ép thanh ngọt mọng nước, siro cốt dừa béo ngậy bùi thơm sảng khoái mát lạnh.', ingredients: ['Dứa chín ép', 'Siro dừa bùi', 'Đá nhuyễn'] },
  'mocktail-autumn': { name: 'MOCKTAIL AUTUMN (MÙA THU)', description: 'Món ngon ấm áp ngọt ngào từ xoài cát chín thơm lừng địa phương lắc nhẹ chanh dây mọng vị và sả gừng ấm sảng khoái.', ingredients: ['Xoài cát dầm', 'Nước chanh leo', 'Cốt sả ấm'] },
  'mocktail-winter': { name: 'MOCKTAIL WINTER (MÙA ĐÔNG)', description: 'Thức uống sưởi ấm mùa đông với trà quế táo thảo mộc, mật ong rừng ấm áp nồng nàn thơm phức.', ingredients: ['Táo đỏ lát', 'Quế thanh nướng', 'Mật ong rừng'] },

  // Shots
  'shot-b52': { name: 'SHOT B52 LỬA', description: 'Shot rượu 3 tầng rực rỡ bùng cháy gồm rượu mùi cà phê Kahlúa, rượu mùi kem sữa Baileys ngậy béo và rượu cam mạnh Cointreau nồng nàn.', ingredients: ['Kahlúa', 'Baileys', 'Cointreau'] },
  'shot-no-way-home': { name: 'SHOT NO WAY HOME (KHÔNG LỐI VỀ)', description: 'Shot rượu siêu mạnh mẽ pha chế từ Absinthe thảo mộc xanh rực rỡ, Gold Tequila và ớt hiểm dầm cay kích thích bùng nổ.', ingredients: ['Rượu Absinthe 70%', 'Gold Tequila', 'Ớt hiểm cay'] },
  'shot-absinthe-cleansing': { name: 'SHOT ABSINTHE TẨY TRẦN', description: 'Shot Absinthe xanh ngọc nồng nàn đốt cháy cùng đường phèn tan chảy mát lịm.', ingredients: ['Absinthe thảo mộc', 'Đường phèn khò lửa'] },
  'shot-rumbullion': { name: 'SHOT RUMBULLION QUỶ QUYỆT', description: 'Shot rượu Rum đậm, siro vỏ cam đắng đốt cháy bốc lửa thơm ngào ngạt.', ingredients: ['Dark Rum sậm', 'Siro vỏ cam đắng', 'Lửa khò'] },

  // Beers in Cocktail Tab
  'beer-huda': { name: 'BIA HUDA CHAI LẠNH', description: 'Đặc sản bia Huda chai thủy tinh ướp lạnh đá sâu sắc.', ingredients: ['Huda Chai'] },
  'beer-saigon': { name: 'BIA SÀI GÒN SPECIAL CHAI', description: 'Bia Sài Gòn Special chai xanh truyền thống đậm vị lúa mạch.', ingredients: ['Sài Gòn Special Chai'] },
  'beer-heineken': { name: 'BIA HEINEKEN CHAI', description: 'Bia Heineken chai thủy tinh cao cấp ướp đá.', ingredients: ['Heineken Chai'] },
  'beer-heineken-0': { name: 'BIA HEINEKEN KHÔNG CỒN CHAI', description: 'Bia Heineken 0.0 chai không cồn nguyên bản sảng khoái lành mạnh.', ingredients: ['Heineken 0.0 Chai'] },

  // Staff
  'staff-1': {
    name: 'Bếp Trưởng Quỳnh',
    description: 'Với hơn 12 năm kinh nghiệm đứng bếp tại các nhà hàng nhộn nhịp, Chef Quỳnh kết hợp hoàn hảo bí kíp thịt viên hầm chậm của bà ngoại với kỹ nghệ bếp bít-trô hiện đại. Cô chính là linh hồn của món BÁNH MÌ CHẢO SAIME trứ danh.',
    ingredients: ['Sáng tạo Nước Sốt', 'Kiểm soát Lửa Bếp', 'Kết hợp Hương Vị Bản Địa'],
    category: 'Đội Ngũ',
  },
  'staff-2': {
    name: 'Bậc Thầy Pha Chế Dũng',
    description: 'Dũng là một phù thủy tài ba tại quầy bar Saime, người cực kỳ đam mê kết hợp các loại gia vị thảo mộc bản địa với cà phê ủ lạnh nhỏ giọt chậm cùng rượu nhiệt đới mát lạnh sảng khoái.',
    ingredients: ['Ủ Cà Phê Chậm', 'Cocktail Gia Vị Thảo Mộc', 'Hương Thơm Thảo Mộc'],
    category: 'Đội Ngũ',
  },
  'set-1': {
    name: 'SET 1',
    description: '**Starter (Món khai vị):** Gỏi gà, Bánh mì bơ tỏi, Bánh đa, Bánh bao xá xíu (Mantou xá xíu). **Main course (Món chính):** Creamy Dreamy, Bánh mì chảo Saime. **Dessert (Món tráng miệng):** Coco Toast, Mocktail.',
    ingredients: ['Gỏi gà', 'Bánh mì bơ tỏi', 'Bánh đa', 'Mantou xá xíu', 'Creamy Dreamy', 'Bánh mì chảo Saime', 'Coco Toast', 'Mocktail'],
    category: 'Combo / Set Ăn'
  },
  'set-2': {
    name: 'SET 2',
    description: '**Starter (Món khai vị):** Gỏi gà, Bánh mì bơ tỏi, Bánh đa, Bánh bao xá xíu (Mantou xá xíu). **Main course (Món chính):** Mì trứng thịt kho tàu, Saime Comfort. **Dessert (Món tráng miệng):** Coco Toast, Mocktail.',
    ingredients: ['Gỏi gà', 'Bánh mì bơ tỏi', 'Bánh đa', 'Mantou xá xíu', 'Mì trứng thịt kho tàu', 'Saime Comfort', 'Coco Toast', 'Mocktail'],
    category: 'Combo / Set Ăn'
  },
  'snack-combo': {
    name: 'COMBO ĂN VẶT',
    description: '**Combo Ăn Vặt:** Phù hợp cho đêm xem phim, chơi boardgames. Bao gồm khoai tây chiên giòn, gà viên chiên giòn rụm và lon bia không cồn mát lạnh.',
    ingredients: ['Khoai tây chiên', 'Gà viên chiên giòn', 'Bia không cồn Heineken 0.0'],
    category: 'Combo / Set Ăn'
  },
  'hd-chicken-rice': {
    name: 'CƠM GÀ LÀNH MẠNH',
    description: 'Ức gà áp chảo thơm ngon dùng kèm cà chua bi, đậu gà khô, sốt sữa chua thanh mát, dưa leo, đồ chua, ngô ngọt và cơm lứt bổ dưỡng.',
    ingredients: ['Cà chua bi', 'Ức gà', 'Đậu gà khô', 'Sốt sữa chua', 'Dưa leo', 'Đồ chua', 'Xà lách', 'Ngô ngọt', 'Cơm lứt'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-double-chick-salad': {
    name: 'SALAD ỨC GÀ GẤP ĐÔI',
    description: 'Món salad giàu protein với hai phần ức gà mềm mọng, cà chua, đậu gà khô, sốt sữa chua ngò rí thơm mát, hành tím bóc vỏ và bánh yến mạch giòn rụm.',
    ingredients: ['Cà chua', 'Ức gà', 'Đậu gà khô', 'Sốt sữa chua ngò rí', 'Hành tím', 'Bánh yến mạch'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-rainbow-plate': {
    name: 'DĨA CẦỒNG VỒNG',
    description: 'Sự kết hợp đầy màu sắc và dinh dưỡng giữa trứng gà, đậu trắng, cà chua bi, ngô ngọt, dưa leo, phô mai Oba Feta béo ngậy, đậu gà khô và sốt dầu mù tạt.',
    ingredients: ['Trứng gà', 'Đậu trắng', 'Cà chua bi', 'Ngô ngọt', 'Dưa leo', 'Phô mai Oba Feta', 'Đậu gà khô', 'Sốt dầu mù tạt'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-tuna-salad': {
    name: 'SALAD CÁ NGỪ',
    description: 'Món salad tươi mát với cá ngừ dầm, mầm xà lách tím, cà chua bi, dưa leo, hành tím, hành tây trắng, ngô ngọt và trứng gà luộc.',
    ingredients: ['Xà lách', 'Xà lách tím', 'Rau mầm', 'Cà chua bi', 'Dưa leo', 'Hành tím', 'Hành tây trắng', 'Cá ngừ', 'Ngô ngọt', 'Trứng gà'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-white-fish-rice': {
    name: 'CƠM CÁ CHẼM SỐT DẦU MÙ TẠT',
    description: 'Filet cá basa áp chảo bơ lạt thơm lừng, ăn kèm cơm lứt, cà chua bi, đậu gà khô, sốt dầu mù tạt, dưa leo, đồ chua, xà lách và ngô ngọt.',
    ingredients: ['Cà chua bi', 'Filet cá basa', 'Bơ lạt', 'Đậu gà khô', 'Sốt dầu mù tạt', 'Dưa leo', 'Đồ chua', 'Xà lách', 'Ngô ngọt', 'Cơm lứt'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-white-fish-salad': {
    name: 'SALAD CÁ CHẼM LÀNH MẠNH',
    description: 'Filet cá basa áp chảo bơ lạt với muối tiêu, dùng kèm cà chua, đậu trắng, khoai tây luộc, cải thìa, bơ lạt và sốt dầu mù tạt.',
    ingredients: ['Cà chua', 'Filet cá basa', 'Sốt dầu mù tạt', 'Đậu trắng', 'Khoai tây', 'Cải thìa', 'Bơ lạt', 'Muối', 'Tiêu'],
    category: 'Chế Độ Ăn Lành Mạnh'
  },
  'hd-yogurt-plate': {
    name: 'DĨA SỮA CHUA DINH DƯỠNG',
    description: 'Dĩa thức ăn thanh mát tăng cường sức khỏe gồm trứng gà, dưa leo, đậu gà khô, cà chua bi, sốt sữa chua mát lành, phô mai Oba Feta và bánh yến mạch.',
    ingredients: ['Trứng gà', 'Dưa leo', 'Đậu gà khô', 'Cà chua bi', 'Sốt sữa chua', 'Phô mai Oba Feta', 'Bánh yến mạch'],
    category: 'Chế Độ Ăn Lành Mạnh'
  }
};

export function translateMenuItem(item: MenuItem, lang: 'en' | 'vn'): MenuItem {
  if (lang === 'en') {
    return item; // Default values are in English already
  }

  const translation = MENU_ITEM_TRANSLATIONS[item.id];
  if (!translation) {
    // Fallback translation for categories or unknown custom added items
    return {
      ...item,
      category: CATEGORY_TRANSLATIONS[item.category] || item.category,
    };
  }

  return {
    ...item,
    name: item.name, // Keep the same as English version, do not translate
    description: translation.description,
    ingredients: translation.ingredients,
    category: translation.category || CATEGORY_TRANSLATIONS[item.category] || item.category,
  };
}
