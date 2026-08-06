import React from 'react';
import { Coffee, Film, Dice6, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface ExploreExperiencesProps {
  onNavigate?: (section: string) => void;
  lang: 'en' | 'vn';
}

export default function ExploreExperiences({ onNavigate, lang }: ExploreExperiencesProps) {
  const exploreCards = [
    {
      id: 'tasting',
      titleEn: 'Tasting Experiences',
      titleVn: 'Trải Nghiệm Nếm Thử',
      descEn: 'Bespoke culinary flights, specialty pour-overs, and botanical mixology.',
      descVn: 'Chuyến bay ẩm thực độc đáo, lớp học pha cà phê và cocktail bản địa.',
      image: 'https://i.imgur.com/zdgN4Bq.jpeg',
      icon: <Coffee className="w-4 h-4 text-amber-500" />
    },
    {
      id: 'movie-night',
      titleEn: 'Films',
      titleVn: 'Chiếu Phim',
      descEn: 'Classic films projected nightly.',
      descVn: 'Những thước phim kinh điển được chiếu hằng đêm.',
      image: 'https://i.imgur.com/kPKXeWN.jpeg',
      icon: <Film className="w-4 h-4 text-sky-500" />
    },
    {
      id: 'board-games',
      titleEn: 'Lounge Board Games',
      titleVn: 'Trò Chơi & Kết Nối',
      descEn: 'Social board games and brain-teasing puzzles for peaceful afternoons.',
      descVn: 'Mèo cảm tử, Ma sói kịch tính, ô chữ tinh nghịch cho những buổi chiều thong thả.',
      image: 'https://i.imgur.com/NwHHayF.jpeg',
      icon: <Dice6 className="w-4 h-4 text-emerald-500" />
    },
    {
      id: 'special-offers',
      titleEn: 'Special Offers',
      titleVn: 'Ưu Đãi Đặc Biệt',
      descEn: 'Sunset Buy-1-Get-1 Happy Hour on classic cocktails and mocktails.',
      descVn: 'Ưu đãi hoàng hôn Mua 1 Tặng 1 tất cả cocktail & mocktail cổ điển hằng tối.',
      image: 'https://i.imgur.com/bEYILOm.jpeg',
      icon: <Tag className="w-4 h-4 text-rose-500" />
    }
  ];

  return (
    <section id="explore-experiences" className="py-16 sm:py-24 bg-white select-none text-neutral-dark border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center md:text-left space-y-2 max-w-lg">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-neutral-900 tracking-tight uppercase">
            {lang === 'en' ? 'Explore Saime Experiences' : 'Khám Phá Trải Nghiệm Saime'}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-500 font-semibold leading-relaxed">
            {lang === 'en' 
              ? 'Select a category below to jump directly into the cozy details of Saime.' 
              : 'Lựa chọn các hạng mục để khám phá ngay thế giới kết nối ấm cúng tại Saime.'}
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              onClick={() => onNavigate?.(card.id)}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Aspect image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100">
                <img
                  src={card.image}
                  alt={card.titleEn}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 saturate-[0.9]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 w-7 h-7 bg-white/95 backdrop-blur-xs rounded-full flex items-center justify-center shadow-xs border border-neutral-200/50">
                  {card.icon}
                </div>
              </div>

              {/* Card Description info */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-neutral-900 group-hover:text-rose-600 transition-colors uppercase tracking-tight">
                    {lang === 'en' ? card.titleEn : card.titleVn}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-neutral-500 leading-relaxed font-semibold">
                    {lang === 'en' ? card.descEn : card.descVn}
                  </p>
                </div>
                
                {/* Subtle navigation cue */}
                <div className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-rose-600 flex items-center gap-1 pt-2 border-t border-neutral-100">
                  <span>{lang === 'en' ? 'Explore Now' : 'Khám phá ngay'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
