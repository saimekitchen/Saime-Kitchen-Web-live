import React from 'react';
import { CocktailItem, Language } from '../types';
import { COCKTAIL_ITEMS } from '../data/cocktailData';
import { translations } from '../utils/i18n';

interface CocktailPageProps {
  onSelectCocktail: (item: CocktailItem) => void;
  onNavigatePairing: (foodId: string, targetType: 'food') => void;
  onSwitchToFoodPage: () => void;
  currentLang: Language;
  onOpenReservation?: () => void;
}

export const CocktailPage: React.FC<CocktailPageProps> = ({
  onSelectCocktail,
  currentLang,
}) => {
  const t = translations[currentLang];
  const isVi = currentLang === 'vi';

  const northCocktails = COCKTAIL_ITEMS.filter((drink) => drink.category === 'north');
  const centralCocktails = COCKTAIL_ITEMS.filter((drink) => drink.category === 'central');
  const southCocktails = COCKTAIL_ITEMS.filter((drink) => drink.category === 'south');

  return (
    <div
      className="w-full text-[#f2f3f5] space-y-16 pb-20 animate-in fade-in duration-300 font-sans"
      itemScope
      itemType="https://schema.org/BarOrPub"
    >
      {/* Hidden SEO Microdata */}
      <meta itemProp="name" content="Saime Introverts Cocktail Bar" />
      <meta
        itemProp="servesCuisine"
        content="Craft Cocktails, Regional Vietnamese Mixology, Vietnamese Specialty Spirits"
      />
      <meta itemProp="address" content="144 Ly Thai To, Cam Chau, Hoi An, Quang Nam, Vietnam" />

      {/* 1. HERO PHOTOGRAPHY SPREAD WITH SEO-RICH HEADINGS */}
      <section className="relative w-full max-w-full border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#111215] via-[#17141b] to-[#111215]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-16 lg:py-16 text-center">
          <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#e63946] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span>{isVi ? 'Trang 02 Thực Đơn Cocktail' : 'Page 02 Cocktail Menu'}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">{t.brandTagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-dm-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl">
              <span>{isVi ? '12 Ly Cocktail' : '12 Signature Cocktails,'}</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#ff758f]">
                {isVi ? 'Đại Diện Cho 12 Đặc Sản Ba Miền' : 'Inspired by Vietnamese Specialties'}
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/70 font-normal max-w-2xl leading-relaxed">
              {isVi
                ? 'Hành trình vị giác xuyên suốt Việt Nam: từ hương ngò gai thơm ngát của Phở Hà Nội, vị ấm nồng mộc mạc của Cao Lầu Hội An, đến nét chua thanh sảng khoái của Canh Chua Nam Bộ.'
                : 'A sensory journey across Vietnam: from the fragrant herbal aroma of Hanoi Pho, the warm nostalgic nuance of Hoi An Cao Lau, to the refreshing tamarind acidity of Southern Canh Chua.'}
            </p>

            {/* Minimal Curiosity Awakening */}
            <div className="pt-1 flex items-center justify-center text-xs sm:text-sm text-white/80 border-l-2 sm:border-l-0 sm:border-t-2 border-[#e63946]/50 pl-3 sm:pl-0 sm:pt-2 italic max-w-xl">
              <p>{t.trySomethingNewHeroCocktail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COCKTAILS MENU: 3 REGIONS */}
      <section id="cocktail-menu" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Main Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#e63946] mb-1">
              {isVi ? 'Hành Trình Hương Vị Ba Miền' : 'Three Regions Cocktail Journey'}
            </div>
            <h2 className="font-display font-dm-sans text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {isVi ? 'Việt Nam, Tái Hiện Trong Từng Ly Rượu' : 'Vietnam, Reimagined in a Glass'}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-2xl leading-relaxed">
              {t.trySomethingNewMenuCocktailNote}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-[11px] sm:text-xs text-white/50">
              {isVi ? `${COCKTAIL_ITEMS.length} món (4 món / miền)` : `${COCKTAIL_ITEMS.length} drinks (4 per region)`}
            </div>
          </div>
        </div>

        {/* Region 1: North Vietnam (Phở, Cốm, Cafe trứng, Ô mai) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              01
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Cảm hứng từ miền Bắc • North' : 'Inspired by the North'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {northCocktails.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail(cocktail)}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={cocktail.primaryImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {cocktailName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {cocktail.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {cocktailTagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 sm:px-5 pb-3.5 pt-2 border-t border-white/5 flex items-center justify-end text-xs text-white/50">
                    <span className="text-[#e63946] text-[10px] sm:text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      {isVi ? 'Chi tiết' : 'Details'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Region 2: Central Vietnam (Cao Lầu, Bánh Xoài, Đác Rim, v.v.) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              02
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Cảm hứng từ miền Trung • Central' : 'Inspired by Central Vietnam'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {centralCocktails.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail(cocktail)}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={cocktail.primaryImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {cocktailName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {cocktail.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {cocktailTagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 sm:px-5 pb-3.5 pt-2 border-t border-white/5 flex items-center justify-end text-xs text-white/50">
                    <span className="text-[#e63946] text-[10px] sm:text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      {isVi ? 'Chi tiết' : 'Details'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Region 3: South Vietnam (Canh Chua, Bia Mực, Đá Me, Khổ Qua) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              03
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Cảm hứng từ miền Nam • South' : 'Inspired by the South'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {southCocktails.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail(cocktail)}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={cocktail.primaryImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {cocktailName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {cocktail.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {cocktailTagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 sm:px-5 pb-3.5 pt-2 border-t border-white/5 flex items-center justify-end text-xs text-white/50">
                    <span className="text-[#e63946] text-[10px] sm:text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      {isVi ? 'Chi tiết' : 'Details'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
