import React, { useState, useEffect } from 'react';
import { Camera, Upload } from 'lucide-react';
import { CocktailItem, Language } from '../types';
import { COCKTAIL_ITEMS } from '../data/cocktailData';
import { translations } from '../utils/i18n';
import { UploadImageModal } from './UploadImageModal';
import { getAllCustomCocktailImages } from '../utils/foodImageStore';

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

  // State for cocktail image uploads
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [uploadTargetCocktailId, setUploadTargetCocktailId] = useState<string | undefined>(undefined);

  const refreshCustomImages = () => {
    setCustomImages(getAllCustomCocktailImages());
  };

  useEffect(() => {
    refreshCustomImages();
    const handleStorageUpdate = () => {
      refreshCustomImages();
    };
    window.addEventListener('saime_cocktail_images_updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('saime_cocktail_images_updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const getEffectiveImage = (drink: CocktailItem) => {
    return customImages[drink.id] || drink.primaryImage;
  };

  const openUploaderForCocktail = (drinkId?: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setUploadTargetCocktailId(drinkId);
    setUploadModalOpen(true);
  };

  const northDrinks = COCKTAIL_ITEMS.filter((c) => c.region === 'north' || c.category === 'north');
  const centralDrinks = COCKTAIL_ITEMS.filter((c) => c.region === 'central' || c.category === 'central');
  const southDrinks = COCKTAIL_ITEMS.filter((c) => c.region === 'south' || c.category === 'south');

  return (
    <div className="w-full max-w-full text-[#f2f3f5] space-y-12 sm:space-y-16 pb-16 sm:pb-20 animate-in fade-in duration-300 font-sans" itemScope itemType="https://schema.org/BarOrPub">
      {/* Hidden SEO Microdata */}
      <meta itemProp="name" content="Saime Introverts, Cocktail Bar" />
      <meta itemProp="servesCuisine" content="Craft Cocktails, Clarified Drinks, Alcohol Free, Vietnamese Botanicals" />

      {/* 1. HERO PHOTOGRAPHY SPREAD */}
      <section className="relative w-full max-w-full border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#111215] via-[#16171d] to-[#111215]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-16 lg:py-16 text-center">
          <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#e63946] uppercase">
                {t.cocktailPageBadge}
              </span>
              <span className="text-white/30 text-xs hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs tracking-wide text-white/80 lowercase italic font-medium">
                try something new? try saime
              </span>
            </div>

            <h1 className="font-display font-dm-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white max-w-2xl">
              {t.cocktailHeroTitle1} <br className="hidden sm:inline" />
              <span className="text-[#e63946]">{t.cocktailHeroTitle2}</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/70 font-normal max-w-2xl leading-relaxed">
              {t.cocktailHeroDescription}
            </p>

            {/* Minimal Curiosity Awakening */}
            <div className="pt-1 flex items-center justify-center text-xs sm:text-sm text-white/80 border-l-2 sm:border-l-0 sm:border-t-2 border-[#e63946]/50 pl-3 sm:pl-0 sm:pt-2 italic max-w-xl">
              <p>{t.trySomethingNewHeroCocktail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COCKTAIL MENU: BREAK DOWN INTO NORTH, CENTRAL, SOUTH (4 ITEMS PER ROW EACH) */}
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
            <button
              onClick={() => openUploaderForCocktail(undefined)}
              id="cocktail-header-upload-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-medium text-white/90 hover:text-white transition-all shadow-sm"
            >
              <Upload className="w-3.5 h-3.5 text-[#e63946]" />
              <span>{isVi ? 'Tải ảnh cocktail' : 'Upload Cocktail Photo'}</span>
            </button>
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
            {northDrinks.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailDescription = isVi && cocktail.descriptionVi ? cocktail.descriptionVi : cocktail.description;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;
              const activeImage = getEffectiveImage(cocktail);
              const isCustom = Boolean(customImages[cocktail.id]);

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail({ ...cocktail, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Custom Upload Badge */}
                      {isCustom && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[10px] font-semibold text-emerald-400">
                          {isVi ? 'Ảnh của bạn' : 'Custom'}
                        </div>
                      )}

                      {/* Direct Upload Image Action Button */}
                      <button
                        onClick={(e) => openUploaderForCocktail(cocktail.id, e)}
                        title={isVi ? `Tải ảnh cho ${cocktailName}` : `Upload photo for ${cocktail.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${cocktail.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
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

        {/* Region 2: Central Vietnam (Cao lầu, Bánh xoài, Bia mực, Canh chua) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              02
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Cảm hứng từ miền Trung • Central' : 'Inspired by the Central'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {centralDrinks.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailDescription = isVi && cocktail.descriptionVi ? cocktail.descriptionVi : cocktail.description;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;
              const activeImage = getEffectiveImage(cocktail);
              const isCustom = Boolean(customImages[cocktail.id]);

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail({ ...cocktail, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Custom Upload Badge */}
                      {isCustom && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[10px] font-semibold text-emerald-400">
                          {isVi ? 'Ảnh của bạn' : 'Custom'}
                        </div>
                      )}

                      {/* Direct Upload Image Action Button */}
                      <button
                        onClick={(e) => openUploaderForCocktail(cocktail.id, e)}
                        title={isVi ? `Tải ảnh cho ${cocktailName}` : `Upload photo for ${cocktail.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${cocktail.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
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

        {/* Region 3: South Vietnam (Đá me, Xôi bắp, Cóc, Khổ qua) */}
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
            {southDrinks.map((cocktail) => {
              const cocktailName = isVi && cocktail.nameVi ? cocktail.nameVi : cocktail.name;
              const cocktailDescription = isVi && cocktail.descriptionVi ? cocktail.descriptionVi : cocktail.description;
              const cocktailTagline = isVi && cocktail.taglineVi ? cocktail.taglineVi : cocktail.tagline;
              const activeImage = getEffectiveImage(cocktail);
              const isCustom = Boolean(customImages[cocktail.id]);

              return (
                <div
                  key={cocktail.id}
                  onClick={() => onSelectCocktail({ ...cocktail, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`cocktail-card-${cocktail.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={cocktailName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Custom Upload Badge */}
                      {isCustom && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/40 text-[10px] font-semibold text-emerald-400">
                          {isVi ? 'Ảnh của bạn' : 'Custom'}
                        </div>
                      )}

                      {/* Direct Upload Image Action Button */}
                      <button
                        onClick={(e) => openUploaderForCocktail(cocktail.id, e)}
                        title={isVi ? `Tải ảnh cho ${cocktailName}` : `Upload photo for ${cocktail.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${cocktail.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
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

      {/* Upload Image Modal for Cocktails */}
      <UploadImageModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        initialType="cocktail"
        initialId={uploadTargetCocktailId}
        currentLang={currentLang}
        onImageUpdated={refreshCustomImages}
      />
    </div>
  );
};
