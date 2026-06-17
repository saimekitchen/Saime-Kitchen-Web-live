import { ArrowDown, MessageSquare, Utensils, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface HeroProps {
  onGoToMenu: () => void;
  onGoToBooking: () => void;
  onGoToCommunity: () => void;
  lang: 'en' | 'vn';
}

export default function Hero({ onGoToMenu, onGoToBooking, onGoToCommunity, lang }: HeroProps) {
  const t = translations[lang];

  return (
    <section id="hero" className="relative pt-28 pb-12 sm:pt-32 md:pt-40 lg:pb-24 overflow-hidden bg-neutral-light">
      {/* Decorative Tropical Leaves SVG shapes or ambient blurs for deep organic cozy feeling */}
      <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-tropical/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light/50 border border-primary/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs font-extrabold text-primary-dark tracking-wider uppercase">
                {t.estSpot}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-dark tracking-normal leading-[1.1]">
                Saime <span className="text-primary block sm:inline">Kitchen & Bar</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-tropical font-semibold tracking-wide lowercase italic">
                “{t.tagline}”
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-neutral-muted text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t.welcomeIntro}
            </motion.p>



            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-view-menu-btn"
                onClick={onGoToMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                {t.exploreMenuBtn}
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
              <button
                id="hero-book-table-btn"
                onClick={onGoToBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-neutral-dark hover:bg-neutral-dark/95 text-white font-display font-bold text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                {t.bookSpotBtn}
              </button>
            </motion.div>
          </div>

          {/* Graphical Collage / High Quality Hero Poster (5 columns on desktop) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto max-w-[340px] xs:max-w-[400px] lg:max-w-none"
            >
              {/* Main Circular/Pill Framing Frame incorporating branding primary colors */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[8px] border-sand/50 shadow-2xl">
                <img
                  src="/src/assets/images/regenerated_image_1781685672709.jpg"
                  alt="Vibrant Sài Mẽ signature gathering pan and banh mi"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Tropical Leaf Motif / Warm Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Special Label Badge inside Hero Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                  <div className="inline-block px-2 py-0.5 rounded bg-primary text-[10px] font-mono uppercase font-black tracking-widest text-white">
                    {lang === 'en' ? 'Bestseller' : 'Bán Chạy Nhất'}
                  </div>
                  <h3 className="font-display font-black text-lg text-white uppercase">SAIME PAN (SÀI MẼ CHẢO)</h3>
                  <p className="text-white/80 font-sans text-[11px] line-clamp-1 leading-relaxed font-normal">
                    {lang === 'en' ? 'Sunny meatballs, egg, pate & crispy banh mi bread' : 'Bánh mì chảo xèo xèo xíu mại, trứng ốp, pa-tê'}
                  </p>
                </div>
              </div>

              {/* Smaller floating polaroid snippet 1 (Left overlaps) */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -6 }}
                animate={{ opacity: 1, x: 0, rotate: -8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-12 -left-12 w-32 hidden sm:block bg-neutral-light p-2.5 rounded-xl shadow-xl border border-sand-dark cursor-pointer hover:z-20 hover:scale-105 transition-all"
                onClick={onGoToMenu}
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-sand mb-2">
                  <img 
                    src="/src/assets/images/regenerated_image_1781685669737.jpg" 
                    alt="Char Siu Mantou" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="block text-[9px] font-mono text-center font-bold text-neutral-dark tracking-wide truncate">
                  Char Siu Mantou
                </span>
                <span className="block text-[8px] text-center font-mono text-primary font-black">
                  45.000 ₫
                </span>
              </motion.div>

              {/* Smaller floating polaroid snippet 2 (Right bottom overlaps) */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-8 w-32 hidden sm:block bg-neutral-light p-2.5 rounded-xl shadow-xl border border-sand-dark cursor-pointer hover:z-20 hover:scale-105 transition-all"
                onClick={onGoToMenu}
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-sand mb-2">
                  <img 
                    src="/src/assets/images/regenerated_image_1781685666955.jpg" 
                    alt="Coco Toast" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="block text-[9px] font-mono text-center font-bold text-neutral-dark tracking-wide truncate">
                  Coco Toast Dessert
                </span>
                <span className="block text-[8px] text-center font-mono text-primary font-black">
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
