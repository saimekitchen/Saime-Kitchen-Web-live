import { Coffee, Wine, Utensils, Sparkles, ChevronRight, Users, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface TastingExperiencesProps {
  lang: 'en' | 'vn';
  onGoToBooking: () => void;
}

export default function TastingExperiences({ lang, onGoToBooking }: TastingExperiencesProps) {
  const t = translations[lang];

  const packages = [
    {
      id: 'food',
      icon: <Utensils className="w-6 h-6 text-primary" />,
      title: t.tasteFoodTitle,
      desc: t.tasteFoodDesc,
      duration: lang === 'en' ? '1h30mins' : '1h30ph',
      groupSize: lang === 'en' ? 'Max 8 people' : 'Tối đa 8 khách',
      image: '/src/assets/images/regenerated_image_1781695964450.jpg',
      badge: lang === 'en' ? 'A/B Testing' : 'Thử Nghiệm A/B'
    },
    {
      id: 'coffee',
      icon: <Coffee className="w-6 h-6 text-yellow-600" />,
      title: t.tasteCoffeeTitle,
      desc: t.tasteCoffeeDesc,
      duration: lang === 'en' ? '1h30mins' : '1h30ph',
      groupSize: lang === 'en' ? 'Max 6 people' : 'Tối đa 6 khách',
      image: '/src/assets/images/regenerated_image_1781695966359.jpg',
      badge: lang === 'en' ? 'A/B Extraction' : 'Thử Nghiệm Phin'
    },
    {
      id: 'cocktail',
      icon: <Wine className="w-6 h-6 text-tropical" />,
      title: t.tasteCocktailTitle,
      desc: t.tasteCocktailDesc,
      duration: lang === 'en' ? '1h30mins' : '1h30ph',
      groupSize: lang === 'en' ? 'Max 6 people' : 'Tối đa 6 khách',
      image: '/src/assets/images/regenerated_image_1781695972384.jpg',
      badge: lang === 'en' ? 'A/B Mixology' : 'Thử Nghiệm Đong'
    }
  ];

  return (
    <section id="tasting" className="py-20 bg-sand/30 border-t border-sand-dark/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-tropical/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="font-mono text-[10px] font-bold text-primary-dark uppercase tracking-wider">
              {t.tastingSubtitle}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-dark tracking-tight leading-tight uppercase">
            {t.tastingTitle}
          </h2>
          <p className="font-sans text-neutral-muted text-sm sm:text-base leading-relaxed">
            {t.tastingDesc}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="polycarbonate rounded-[2.5rem] overflow-hidden transition-all duration-300 flex flex-col h-full group hover:scale-[1.012]"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] overflow-hidden relative bg-sand">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-neutral-dark text-white font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {pkg.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-sand border border-sand-dark/30">
                      {pkg.icon}
                    </div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-neutral-dark uppercase tracking-tight group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                  <p className="font-sans text-neutral-muted text-xs sm:text-sm leading-relaxed font-normal">
                    {pkg.desc}
                  </p>
                </div>

                {/* Meta details */}
                <div className="pt-4 border-t border-sand flex items-center justify-between text-xs font-mono text-neutral-muted">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-tropical" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-neutral-dark text-neutral-light rounded-[2rem] p-6 sm:p-10 relative overflow-hidden border border-white/5 shadow-xl text-center flex flex-col items-center justify-center space-y-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          <h3 className="font-display font-black text-xl sm:text-2xl tracking-normal uppercase">
            {lang === 'en' ? 'Gathering Begins at Saime' : 'Mọi khoảng khắc tuyệt vời của bạn'}
          </h3>
          <p className="font-sans text-neutral-light/70 text-xs sm:text-sm max-w-xl leading-relaxed">
            {lang === 'en' 
              ? 'Our sessions fill up quickly. Secure your slot and get ready to experience good foods, premium drinks, and heartwarming community stories.' 
              : 'Các gói trải nghiệm nếm thử của chúng tôi luôn được chuẩn bị ấm cúng và đầy tính khám phá. Hãy chọn lịch và gặp gỡ những người bạn mới!'}
          </p>
          <button
            onClick={onGoToBooking}
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-102 cursor-pointer"
          >
            {t.tasteBookSession}
          </button>
        </div>

      </div>
    </section>
  );
}
