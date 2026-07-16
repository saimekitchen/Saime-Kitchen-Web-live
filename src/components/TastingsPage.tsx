import React from 'react';
import { Clock, Users, ArrowUpRight, Utensils, Film, Calendar, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

interface TastingsPageProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
  onGoToBooking: () => void;
}

const tastingPackages = [
  {
    id: 'food',
    titleEn: 'Food Tasting',
    titleVn: 'Nếm Thử Đồ Ăn',
    descEn: 'A super friendly and casual session where we taste 2-3 regional styles or preparations of the same local dish side-by-side. We will find out how different they are, and enjoy a relaxed, social chat together afterwards.',
    descVn: 'Buổi thử đồ ăn siêu gần gũi và thoải mái khi tụi mình cùng nếm thử 2-3 phong cách chế biến khác nhau từ cùng một món ăn đặc sản địa phương. Cùng khám phá sự khác biệt và trò chuyện rôm rả sau đó.',
    duration: '1h',
    groupSizeEn: 'Max 8 people',
    groupSizeVn: 'Tối đa 8 khách',
    image: 'https://i.imgur.com/zdgN4Bq.jpeg',
    badgeEn: 'FOOD TASTING',
    badgeVn: 'NẾM THỬ ĐỒ ĂN',
    url: 'https://www.airbnb.com/hosting/listings/experience/7138897/view-your-experience'
  },
  {
    id: 'coffee',
    titleEn: 'Coffee Tasting',
    titleVn: 'Nếm Thử Cà Phê',
    descEn: 'Compare 2-3 unique specialty coffee beans brewed with the exact same technique. We will discover how different they taste, learn what makes each bean stand out, and share a warm, casual chat afterwards.',
    descVn: 'So sánh 2-3 loại hạt cà phê đặc sản khác nhau được pha chế bằng cùng một kỹ thuật. Tụi mình sẽ cùng xem hương vị khác nhau thế nào, thảo luận về nét độc đáo của từng hạt và trò chuyện thân mật sau đó.',
    duration: '1h',
    groupSizeEn: 'Max 6 people',
    groupSizeVn: 'Tối đa 6 khách',
    image: 'https://i.imgur.com/m8xUNJp.jpeg',
    badgeEn: 'COFFEE TASTING',
    badgeVn: 'NẾM THỬ CÀ PHÊ',
    url: 'https://www.airbnb.com/hosting/listings/experience/7147642/view-your-experience'
  },
  {
    id: 'cocktail',
    titleEn: 'Cocktail Tasting',
    titleVn: 'Nếm Thử Cocktail',
    descEn: "At our Saime Kitchen & Bar, crack fresh tamarind pods and compare our chef-made ingredients versus store-bought ones. We will present the tasting in shot-sized pours (2 cocktails + 2 mocktails) to compare 2-3 creative recipes using the same local ingredients side-by-side, see how different they are, and have a fun discussion afterwards!",
    descVn: "Tại Saime Kitchen & Bar, tụi mình sẽ cùng bóc những quả me tươi và so sánh hương vị sốt me tự làm của bếp trưởng so với mua ngoài tiệm. Buổi nếm thử sẽ phục vụ dưới dạng các ly shot xinh xắn (gồm 2 cocktail + 2 mocktail) để so sánh 2-3 cách pha chế sáng tạo từ cùng một nguyên liệu địa phương, khám phá sự biến hóa hương vị và cùng trò chuyện vui vẻ sau đó!",
    duration: '1h',
    groupSizeEn: 'Max 6 people',
    groupSizeVn: 'Tối đa 6 khách',
    image: 'https://i.imgur.com/QjLJOYr.jpeg',
    badgeEn: 'COCKTAIL TASTING',
    badgeVn: 'NẾM THỬ COCKTAIL',
    url: 'https://www.airbnb.com/hosting/listings/experience/7131498/view-your-experience'
  }
];

export default function TastingsPage({ lang, onNavigate, onGoToBooking }: TastingsPageProps) {
  return (
    <section id="tasting-page" className="py-16 sm:py-24 bg-[#FCFCFA] relative overflow-hidden text-neutral-dark select-none">
      {/* Visual background ambient details */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-200/50 font-sans text-[10px] uppercase font-bold tracking-wider">
            <Coffee className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Friendly Tastings' : 'Buổi Nếm Thử Thân Mật'}</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 uppercase">
            {lang === 'en' ? 'Tasting Experiences' : 'Hành Trình Nếm Thử'}
          </h2>
          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
            {lang === 'en'
              ? 'Join our friendly and super casual tasting sessions! We will compare 2-3 of the same core ingredients or styles side-by-side, find out how they differ, and share a fun, social chat afterwards.'
              : 'Ghé chơi và tham gia những buổi nếm thử siêu gần gũi, ấm cúng! Chúng mình sẽ cùng so sánh 2-3 hương vị hoặc cách biến tấu từ cùng một nguyên liệu cốt lõi, tìm ra sự khác biệt và thảo luận vui vẻ.'}
          </p>
        </div>

        {/* Tasting Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tastingPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-3xl border border-neutral-200/80 overflow-hidden flex flex-col h-full shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100 border-b border-neutral-200/50">
                <img 
                  src={pkg.image} 
                  alt={lang === 'en' ? pkg.titleEn : pkg.titleVn}
                  className="w-full h-full object-cover saturate-[0.9] group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-rose-600 border border-neutral-200/50 font-sans text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  {lang === 'en' ? pkg.badgeEn : pkg.badgeVn}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="font-sans font-extrabold text-base sm:text-lg text-neutral-900 uppercase tracking-tight">
                    {lang === 'en' ? pkg.titleEn : pkg.titleVn}
                  </h4>
                  <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    {lang === 'en' ? pkg.descEn : pkg.descVn}
                  </p>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-[11px] font-sans font-bold text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      {lang === 'en' ? pkg.groupSizeEn : pkg.groupSizeVn}
                    </span>
                  </div>

                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center shadow-xs"
                  >
                    <span>{lang === 'en' ? 'Book on Airbnb' : 'Đặt trên Airbnb'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Custom Flight */}
        <div className="bg-neutral-50 border border-neutral-200/60 rounded-3xl p-6 sm:p-10 text-center space-y-4">
          <h4 className="font-sans font-extrabold text-base text-neutral-900 uppercase tracking-wide">
            {lang === 'en' ? 'Want a private, custom tasting session?' : 'Bạn muốn thiết kế một trải nghiệm nếm thử riêng tư?'}
          </h4>
          <p className="font-sans text-neutral-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-semibold">
            {lang === 'en'
              ? 'Our team specializes in tailored friendly gatherings, private anniversaries, and small retreats. Let us host a warm, customized tasting session for your group.'
              : 'Đội ngũ Saime sẵn lòng tư vấn và tổ chức các buổi nếm thử, họp mặt ấm cúng, tinh tế, được may đo hoàn hảo theo sở thích riêng của nhóm bạn.'}
          </p>
          <button
            onClick={onGoToBooking}
            className="mt-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-850 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all shadow-xs"
          >
            {lang === 'en' ? 'Contact our Host' : 'Liên Hệ Đặt Chỗ Ngay'}
          </button>
        </div>

        {/* Dynamic Pathway Navigation */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="bg-neutral-100/50 rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-700 text-[9px] font-mono uppercase font-bold tracking-widest rounded border border-rose-200/50">
                {lang === 'en' ? 'Continue Your Journey' : 'Hành Trình Tiếp Theo'}
              </span>
              <h4 className="font-sans font-extrabold text-sm text-neutral-900 uppercase mt-1">
                {lang === 'en' ? 'Browse Board Games or check cinema backyard' : 'Ghé góc Board Games hoặc xem rạp phim sân sau'}
              </h4>
              <p className="font-sans text-xs text-neutral-500 max-w-xl font-semibold">
                {lang === 'en'
                  ? 'Head over to our play zone to challenge your friends, or reserve cozy seats for our starlight movie nights.'
                  : 'Hãy ghé góc giải trí để tranh tài board games vui vẻ, hoặc đặt trước ghế lười êm ái cho buổi chiếu phim đêm nay.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('board-games')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>{lang === 'en' ? 'Board Games' : 'Góc Board Games'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('movie-night')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Film className="w-3.5 h-3.5 text-sky-500" />
                <span>{lang === 'en' ? 'Cinema Night' : 'Rạp Sân Sau'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Utensils className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Order Food' : 'Xem Thực Đơn'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
