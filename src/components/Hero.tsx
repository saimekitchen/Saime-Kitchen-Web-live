import { useState, useEffect } from 'react';
import { ArrowDown, Compass, Clock, Sparkles, Sun, Moon, Heart, Coffee, Wine } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface HeroProps {
  onGoToMenu: () => void;
  onGoToBooking: () => void;
  onNavigate?: (section: string) => void;
  lang: 'en' | 'vn';
}

export default function Hero({ onGoToMenu, onGoToBooking, onNavigate, lang }: HeroProps) {
  const t = translations[lang];
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, ..., 6 = Saturday
      const hours = now.getHours();
      
      const isWeekendSchedule = day === 5 || day === 6; // Friday & Saturday
      const closeHour = isWeekendSchedule ? 24 : 23;
      
      if (hours >= 8 && hours < closeHour) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pb-24 overflow-hidden bg-[#FCFCFA] select-none text-neutral-dark">
      {/* Soft elegant ambient backgrounds */}
      <div className="absolute top-1/4 right-[-10%] w-[450px] h-[450px] rounded-full bg-rose-500/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-amber-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Main Hero Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Soft Airbnb-style organic tag */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100/50"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Saime Hoi An' : 'Saime Hội An'}
                </span>
              </motion.div>

              {/* High-impact Open/Closed Live Status Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-sans font-bold shadow-xs ${
                  isOpenNow 
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200/60 animate-pulse duration-[3000ms]' 
                    : 'bg-rose-50 text-rose-800 border-rose-100'
                }`}
              >
                <Clock className={`w-3.5 h-3.5 ${isOpenNow ? 'text-emerald-600' : 'text-rose-500'}`} />
                <span>
                  {isOpenNow 
                    ? (lang === 'en' ? '🟢 OPEN NOW • Tap to join the cozy vibes!' : '🟢 ĐANG MỞ CỬA • Ghé tụi mình chơi ngay nha!')
                    : (lang === 'en' ? '🔴 CLOSED NOW • Reopens 8 AM tomorrow! See you soon!' : '🔴 ĐÃ ĐÓNG CỬA • Sáng mai 8h tụi mình mở cửa nhé!')
                  }
                </span>
              </motion.div>
            </div>

            {/* Premium Header Styling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-extrabold tracking-tight leading-[1.1]">
                Saime <span className="text-rose-600">Kitchen & Bar</span>
              </h1>
              <p className="font-sans text-lg sm:text-xl text-neutral-600 font-semibold italic">
                “{t.tagline}”
              </p>
            </motion.div>

            {/* Welcome Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.welcomeIntro}
            </motion.p>

            {/* Call to Actions (Styled with soft borders & clean layout) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-view-menu-btn"
                onClick={onGoToMenu}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{t.exploreMenuBtn}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              
              <button
                id="hero-book-table-btn"
                onClick={onGoToBooking}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow-sm transition-all cursor-pointer"
              >
                {t.bookSpotBtn}
              </button>
            </motion.div>

            {/* Saime Day & Night Rituals - HIGHLY VISUAL AIRBNB-STYLE EXPERIENCES GRID */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-neutral-200/60 text-left"
            >
              <h3 className="font-sans font-black text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 mb-5 flex items-center gap-1.5 justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                {lang === 'en' ? 'OUR DAY & NIGHT RITUALS • CHOOSE YOUR EXPERIENCE' : 'TRẢI NGHIỆM NGÀY & ĐÊM • CHỌN KHÔNG GIAN CỦA BẠN'}
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Healthy Menu Card */}
                <div 
                  onClick={() => {
                    onGoToMenu();
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'bistro', division: 'healthy' } }));
                    }, 100);
                  }}
                  className="group cursor-pointer flex flex-col space-y-2"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-neutral-200/40 bg-neutral-100">
                    <img 
                      src="https://i.imgur.com/pEowX5f.jpeg" 
                      alt="Saime Healthy Menu" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[9px] font-bold text-rose-600 shadow-xs uppercase tracking-wider border border-neutral-200/10">
                      {lang === 'en' ? '8:00 - ALL DAY' : '8:00 - CẢ NGÀY'}
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold tracking-wider uppercase text-rose-600">
                      <Heart className="w-3 h-3 fill-rose-500/10 text-rose-500" />
                      {lang === 'en' ? 'HEALTHY MENU' : 'THỰC ĐƠN SỨC KHỎE'}
                    </div>
                    <h4 className="font-sans font-bold text-neutral-900 text-xs sm:text-sm mt-0.5 group-hover:text-rose-600 transition-colors">
                      {lang === 'en' ? 'Wholesome Plates' : 'Thực Đơn Thanh Lành'}
                    </h4>
                    <p className="text-[10.5px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                      {lang === 'en' 
                        ? 'Vibrant rainbow salads, nutrient-dense bowls, and organic wellness.' 
                        : 'Các đĩa dinh dưỡng tươi mới, dồi dào dưỡng chất thanh lọc cơ thể.'}
                    </p>
                  </div>
                </div>

                {/* 2. Cafe Card */}
                <div 
                  onClick={() => {
                    onGoToMenu();
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'cafe' } }));
                    }, 100);
                  }}
                  className="group cursor-pointer flex flex-col space-y-2"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-neutral-200/40 bg-neutral-100">
                    <img 
                      src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500" 
                      alt="Saime Artisan Cafe" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[9px] font-bold text-amber-700 shadow-xs uppercase tracking-wider border border-neutral-200/10">
                      8:00 - 17:30
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold tracking-wider uppercase text-amber-700">
                      <Coffee className="w-3 h-3 text-amber-700" />
                      {lang === 'en' ? 'ARTISAN CAFE' : 'CÀ PHÊ THỦ CÔNG'}
                    </div>
                    <h4 className="font-sans font-bold text-neutral-900 text-xs sm:text-sm mt-0.5 group-hover:text-amber-700 transition-colors">
                      {lang === 'en' ? 'Slow-Drip & Brews' : 'Cà Phê Trứng & Phin'}
                    </h4>
                    <p className="text-[10.5px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                      {lang === 'en' 
                        ? 'Signature egg coffee, robusta drips, and creamy handcrafted brews.' 
                        : 'Hương vị cà phê trứng béo ngậy cùng những giọt phin robusta mộc mạc nồng nàn.'}
                    </p>
                  </div>
                </div>

                {/* 3. Casual Food Card */}
                <div 
                  onClick={() => {
                    onGoToMenu();
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'bistro', division: 'casual' } }));
                    }, 100);
                  }}
                  className="group cursor-pointer flex flex-col space-y-2"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-neutral-200/40 bg-neutral-100">
                    <img 
                      src="/src/assets/images/regenerated_image_1781685669737.jpg" 
                      alt="Saime Casual Food" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[9px] font-bold text-rose-700 shadow-xs uppercase tracking-wider border border-neutral-200/10">
                      ALL-DAY / LATE
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold tracking-wider uppercase text-rose-700">
                      <Sparkles className="w-3 h-3 text-rose-600" />
                      {lang === 'en' ? 'CASUAL BISTRO' : 'ẨM THỰC TỰ DO'}
                    </div>
                    <h4 className="font-sans font-bold text-neutral-900 text-xs sm:text-sm mt-0.5 group-hover:text-rose-700 transition-colors">
                      {lang === 'en' ? 'Comfort Plates' : 'Món Ngon Ấm Cúng'}
                    </h4>
                    <p className="text-[10.5px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                      {lang === 'en' 
                        ? 'Sizzling hot pans, slow-cooked meats, and creative fusion comfort.' 
                        : 'Bánh mì chảo xèo xèo thơm nức, bánh bao kẹp xá xíu đậm đà trọn vị.'}
                    </p>
                  </div>
                </div>

                {/* 4. Cocktail Bar Card */}
                <div 
                  onClick={() => {
                    onGoToMenu();
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('saime_select_menu', { detail: { tab: 'cocktail' } }));
                    }, 100);
                  }}
                  className="group cursor-pointer flex flex-col space-y-2"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-neutral-200/40 bg-neutral-100">
                    <img 
                      src="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80" 
                      alt="Saime Botanical Bar" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[9px] font-bold text-indigo-700 shadow-xs uppercase tracking-wider border border-neutral-200/10">
                      15:00 - 23:00
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-[9.5px] font-mono font-bold tracking-wider uppercase text-indigo-600">
                      <Wine className="w-3 h-3 text-indigo-600" />
                      {lang === 'en' ? 'BOTANICAL BAR' : 'QUẦY BAR THẢO MỘC'}
                    </div>
                    <h4 className="font-sans font-bold text-neutral-900 text-xs sm:text-sm mt-0.5 group-hover:text-indigo-600 transition-colors">
                      {lang === 'en' ? 'Craft Cocktails' : 'Cocktail Thảo Mộc'}
                    </h4>
                    <p className="text-[10.5px] text-neutral-500 leading-normal line-clamp-2 mt-0.5">
                      {lang === 'en' 
                        ? 'Botanical infusions, house syrups, and indigenous spice spirits.' 
                        : 'Sự kết hợp tinh tế giữa thảo mộc nhiệt đới và các dòng rượu ngâm bản địa độc đáo.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Elegant Circular Feature Image Collage */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative mx-auto max-w-[340px] xs:max-w-[400px] lg:max-w-none"
            >
              {/* Main Pill Framing Container with elegant borders */}
              <div className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden border border-neutral-200 shadow-lg">
                <img
                  src="/src/assets/images/regenerated_image_1781685669737.jpg"
                  alt="Fluffy Char Siu Mantou steamed bun"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Warm Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded dynamic text label */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded bg-rose-600 text-[9px] font-mono uppercase font-black tracking-widest text-white">
                    {lang === 'en' ? 'Bestseller' : 'Được Yêu Thích'}
                  </span>
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-white uppercase tracking-tight">
                    CHAR SIU MANTOU
                  </h3>
                  <p className="text-white/80 font-sans text-[11px] line-clamp-1 font-semibold leading-relaxed">
                    {lang === 'en' ? 'Soft fluffy steamed mantou bun stuffed with savory tender char siu pork' : 'Bánh bao kẹp xá xíu thơm mềm đậm vị kèm dưa chua tươi mát'}
                  </p>
                </div>
              </div>

              {/* Smaller overlapping polaroid details (Airbnb clean borders) */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -4 }}
                animate={{ opacity: 1, x: 0, rotate: -5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-12 -left-12 w-28 hidden sm:block bg-white p-2 rounded-2xl shadow-md border border-neutral-100 cursor-pointer hover:z-20 hover:scale-105 transition-all"
                onClick={onGoToMenu}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-neutral-100 mb-1.5">
                  <img 
                    src="/src/assets/images/regenerated_image_1781685672709.jpg" 
                    alt="Saime Pan" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="block text-[9px] font-sans font-bold text-neutral-800 tracking-wide text-center truncate">
                  Saime Pan
                </span>
                <span className="block text-[8px] text-center font-mono text-rose-600 font-bold">
                  65.000 ₫
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -right-8 w-28 hidden sm:block bg-white p-2 rounded-2xl shadow-md border border-neutral-100 cursor-pointer hover:z-20 hover:scale-105 transition-all"
                onClick={onGoToMenu}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-neutral-100 mb-1.5">
                  <img 
                    src="/src/assets/images/regenerated_image_1781685666955.jpg" 
                    alt="Coco Toast" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="block text-[9px] font-sans font-bold text-neutral-800 tracking-wide text-center truncate">
                  Coco Toast Dessert
                </span>
                <span className="block text-[8px] text-center font-mono text-rose-600 font-bold">
                  80.000 ₫
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
