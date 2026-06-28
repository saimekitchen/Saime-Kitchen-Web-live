import { ArrowDown, Compass } from 'lucide-react';
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
