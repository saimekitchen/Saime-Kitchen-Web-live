import React, { useState, useEffect } from 'react';
import { Camera, Upload, Sparkles } from 'lucide-react';
import { FoodItem, Language } from '../types';
import { FOOD_ITEMS } from '../data/foodData';
import { translations } from '../utils/i18n';
import { UploadImageModal } from './UploadImageModal';
import { getAllCustomFoodImages } from '../utils/foodImageStore';

interface FoodPageProps {
  onSelectFood: (item: FoodItem) => void;
  onNavigatePairing: (cocktailId: string, targetType: 'cocktail') => void;
  onSwitchToCocktailPage: () => void;
  currentLang: Language;
  onOpenReservation?: () => void;
}

export const FoodPage: React.FC<FoodPageProps> = ({
  onSelectFood,
  currentLang,
}) => {
  const t = translations[currentLang];
  const isVi = currentLang === 'vi';

  // State for image uploads
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [uploadTargetFoodId, setUploadTargetFoodId] = useState<string | undefined>(undefined);

  const refreshCustomImages = () => {
    setCustomImages(getAllCustomFoodImages());
  };

  useEffect(() => {
    refreshCustomImages();
    const handleStorageUpdate = () => {
      refreshCustomImages();
    };
    window.addEventListener('saime_food_images_updated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('saime_food_images_updated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const getEffectiveImage = (dish: FoodItem) => {
    return customImages[dish.id] || dish.primaryImage;
  };

  const openUploaderForDish = (dishId?: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setUploadTargetFoodId(dishId);
    setUploadModalOpen(true);
  };

  const starters = FOOD_ITEMS.filter((dish) => dish.category === 'starter');
  const mains = FOOD_ITEMS.filter((dish) => dish.category === 'main');
  const desserts = FOOD_ITEMS.filter((dish) => dish.category === 'dessert');
  const addons = FOOD_ITEMS.filter((dish) => dish.category === 'addon');

  return (
    <div
      className="w-full text-[#f2f3f5] space-y-16 pb-20 animate-in fade-in duration-300 font-sans"
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* Hidden SEO Microdata */}
      <meta itemProp="name" content="Saime Introverts" />
      <meta
        itemProp="servesCuisine"
        content="Vietnamese, Contemporary Vietnamese Dining, Bistronomy, Craft Cocktails"
      />
      <meta itemProp="address" content="144 Ly Thai To, Cam Chau, Hoi An, Quang Nam, Vietnam" />

      {/* 1. HERO PHOTOGRAPHY SPREAD WITH SEO-RICH HEADINGS */}
      <section className="relative w-full max-w-full border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#111215] via-[#15171c] to-[#111215]">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-16 lg:py-16 text-center">
          <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#e63946] uppercase">
                {t.foodPageBadge}
              </span>
              <span className="text-white/30 text-xs hidden xs:inline">•</span>
              <span className="text-[11px] sm:text-xs tracking-wide text-white/80 lowercase italic font-medium">
                try something new? try saime
              </span>
            </div>

            <h1 className="font-display font-dm-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white max-w-2xl">
              {t.foodHeroTitle1} <br className="hidden sm:inline" />
              <span className="text-[#e63946]">{t.foodHeroTitle2}</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/70 font-normal max-w-2xl leading-relaxed">
              {t.foodHeroDescription}
            </p>

            {/* Minimal Curiosity Awakening */}
            <div className="pt-1 flex items-center justify-center text-xs sm:text-sm text-white/80 border-l-2 sm:border-l-0 sm:border-t-2 border-[#e63946]/50 pl-3 sm:pl-0 sm:pt-2 italic max-w-xl">
              <p>{t.trySomethingNewHeroFood}</p>
            </div>

            {/* Quick Image Upload Action Trigger */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => openUploaderForDish(undefined)}
                id="hero-upload-image-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1c1f26] hover:bg-[#252932] border border-white/15 hover:border-[#e63946]/50 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm group"
              >
                <Camera className="w-4 h-4 text-[#e63946] group-hover:scale-110 transition-transform" />
                <span>{isVi ? 'Tải Lên Hình Ảnh Món Ăn' : 'Upload Food Images'}</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#e63946]/20 text-[#e63946] font-bold">
                  NEW
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DISHES MENU: BREAK DOWN INTO APPETIZERS, MAIN COURSES, DESSERTS, AND ADD-ONS */}
      <section id="food-menu" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Main Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#e63946] mb-1">
              {t.currentMenuTitle}
            </div>
            <h2 className="font-display font-dm-sans text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {t.foodMenuSubtitle}
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-2xl leading-relaxed">
              {t.trySomethingNewMenuFoodNote}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openUploaderForDish(undefined)}
              id="menu-header-upload-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-medium text-white/90 hover:text-white transition-all"
            >
              <Upload className="w-3.5 h-3.5 text-[#e63946]" />
              <span>{isVi ? 'Tải ảnh món ăn' : 'Upload Image'}</span>
            </button>
            <div className="text-[11px] sm:text-xs text-white/50">
              {isVi ? `${FOOD_ITEMS.length} món ăn đặc sắc` : `${FOOD_ITEMS.length} dishes`}
            </div>
          </div>
        </div>

        {/* Section 1: Appetizers (4 Items: Báng, Tạt, Nếp, Đác) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              01
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Món Khai Vị • Appetizers' : 'Appetizers'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {starters.map((dish) => {
              const dishName = isVi && dish.nameVi ? dish.nameVi : dish.name;
              const dishDescription = isVi && dish.descriptionVi ? dish.descriptionVi : dish.description;
              const dishTagline = isVi && dish.taglineVi ? dish.taglineVi : dish.tagline;
              const activeImage = getEffectiveImage(dish);
              const isCustom = Boolean(customImages[dish.id]);

              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectFood({ ...dish, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`food-card-${dish.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={dishName}
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
                        onClick={(e) => openUploaderForDish(dish.id, e)}
                        title={isVi ? `Tải ảnh cho món ${dishName}` : `Upload image for ${dish.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${dish.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {dishName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {dishTagline}
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

        {/* Section 2: Main Courses (6 Items: Biếc, Măng, Tíu, Tấm, Tộ, Bò) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              02
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Món Chính • Main Courses' : 'Main Courses'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mains.map((dish) => {
              const dishName = isVi && dish.nameVi ? dish.nameVi : dish.name;
              const dishDescription = isVi && dish.descriptionVi ? dish.descriptionVi : dish.description;
              const dishTagline = isVi && dish.taglineVi ? dish.taglineVi : dish.tagline;
              const activeImage = getEffectiveImage(dish);
              const isCustom = Boolean(customImages[dish.id]);

              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectFood({ ...dish, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`food-card-${dish.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={dishName}
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
                        onClick={(e) => openUploaderForDish(dish.id, e)}
                        title={isVi ? `Tải ảnh cho món ${dishName}` : `Upload image for ${dish.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${dish.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {dishName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {dishTagline}
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

        {/* Section 3: Desserts (3 Items: Bắp, Mắm, Dừa) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
              03
            </span>
            <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
              {isVi ? 'Tráng Miệng • Desserts' : 'Desserts'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {desserts.map((dish) => {
              const dishName = isVi && dish.nameVi ? dish.nameVi : dish.name;
              const dishDescription = isVi && dish.descriptionVi ? dish.descriptionVi : dish.description;
              const dishTagline = isVi && dish.taglineVi ? dish.taglineVi : dish.tagline;
              const activeImage = getEffectiveImage(dish);
              const isCustom = Boolean(customImages[dish.id]);

              return (
                <div
                  key={dish.id}
                  onClick={() => onSelectFood({ ...dish, primaryImage: activeImage })}
                  className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                  id={`food-card-${dish.id}`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                      <img
                        src={activeImage}
                        alt={dishName}
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
                        onClick={(e) => openUploaderForDish(dish.id, e)}
                        title={isVi ? `Tải ảnh cho món ${dishName}` : `Upload image for ${dish.name}`}
                        className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                        id={`upload-btn-${dish.id}`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                          {dishName}
                        </h4>
                        <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                        {dishTagline}
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

        {/* Section 4: Add-ons (1 Item: Potato Mille-Feuille) */}
        {addons.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/5">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#e63946]/15 border border-[#e63946]/30 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#e63946] uppercase">
                04
              </span>
              <h3 className="font-display font-dm-sans text-lg sm:text-2xl font-bold text-white">
                {isVi ? 'Món Thêm • Add-ons' : 'Add-ons'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {addons.map((dish) => {
                const dishName = isVi && dish.nameVi ? dish.nameVi : dish.name;
                const dishDescription = isVi && dish.descriptionVi ? dish.descriptionVi : dish.description;
                const dishTagline = isVi && dish.taglineVi ? dish.taglineVi : dish.tagline;
                const activeImage = getEffectiveImage(dish);
                const isCustom = Boolean(customImages[dish.id]);

                return (
                  <div
                    key={dish.id}
                    onClick={() => onSelectFood({ ...dish, primaryImage: activeImage })}
                    className="group relative rounded-2xl overflow-hidden bg-[#16171c] border border-white/10 hover:border-[#e63946]/60 cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
                    id={`food-card-${dish.id}`}
                  >
                    <div>
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                        <img
                          src={activeImage}
                          alt={dishName}
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
                          onClick={(e) => openUploaderForDish(dish.id, e)}
                          title={isVi ? `Tải ảnh cho món ${dishName}` : `Upload image for ${dish.name}`}
                          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-black/60 hover:bg-[#e63946] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10"
                          id={`upload-btn-${dish.id}`}
                        >
                          <Camera className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-4 sm:p-5 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-display font-dm-sans text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e63946] transition-colors leading-snug">
                            {dishName}
                          </h4>
                          <span className="font-display font-dm-sans font-bold text-sm sm:text-base text-[#e63946] shrink-0 tracking-tight whitespace-nowrap">
                            {dish.price}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-white/50 font-normal italic">
                          {dishTagline}
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
        )}
      </section>

      {/* Upload Image Modal */}
      <UploadImageModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        initialFoodId={uploadTargetFoodId}
        currentLang={currentLang}
        onImageUpdated={refreshCustomImages}
      />
    </div>
  );
};
