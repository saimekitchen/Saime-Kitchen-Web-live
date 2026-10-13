import React, { useState } from 'react';
import { FoodItem, CocktailItem, Language } from '../types';
import { translations } from '../utils/i18n';

interface ImageLightboxModalProps {
  item: FoodItem | CocktailItem | null;
  type: 'food' | 'cocktail' | null;
  onClose: () => void;
  onNavigatePairing: (targetId: string, targetType: 'food' | 'cocktail') => void;
  currentLang: Language;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  type,
  onClose,
  onNavigatePairing,
  currentLang,
}) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const t = translations[currentLang];
  const isVi = currentLang === 'vi';

  if (!item || !type) return null;

  const isFood = type === 'food';
  const foodItem = isFood ? (item as FoodItem) : null;
  const currentImage = item.primaryImage;

  const itemName = isVi && item.nameVi ? item.nameVi : item.name;
  const itemTagline = isVi && item.taglineVi ? item.taglineVi : item.tagline;
  const itemDescription = isVi && item.descriptionVi ? item.descriptionVi : item.description;
  const itemIngredients = isVi && item.ingredientsVi ? item.ingredientsVi : item.ingredients;
  const itemFunFact = isVi && item.funFactVi ? item.funFactVi : item.funFact;
  const pairingName = isVi && item.pairing.cocktailNameVi
    ? item.pairing.cocktailNameVi
    : isVi && item.pairing.foodNameVi
    ? item.pairing.foodNameVi
    : item.pairing.cocktailName || item.pairing.foodName;
  const pairingNotes = isVi && item.pairing.notesVi ? item.pairing.notesVi : item.pairing.notes;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 subtle-blur animate-in fade-in duration-200 font-sans">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider uppercase transition-colors"
        id="lightbox-close-btn"
      >
        {t.closeLightbox}
      </button>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#14161a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left: Photographic Canvas View */}
        <div className="relative lg:w-3/5 bg-black flex flex-col justify-between overflow-hidden min-h-[320px] lg:min-h-[520px]">
          {/* Main Visual */}
          <div
            className={`relative w-full h-full flex-1 flex items-center justify-center overflow-hidden cursor-zoom-in group ${
              isZoomed ? 'cursor-zoom-out' : ''
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={currentImage}
              alt={itemName}
              referrerPolicy="no-referrer"
              className={`max-w-full max-h-full object-contain transition-transform duration-300 select-none ${
                isZoomed ? 'scale-150' : 'group-hover:scale-105'
              }`}
            />

            {/* Zoom hint */}
            <div className="absolute bottom-4 left-4 bg-black/60 subtle-blur px-3 py-1 rounded-full text-[11px] font-medium text-white/80 border border-white/10 pointer-events-none">
              {t.clickToZoom}
            </div>
          </div>
        </div>

        {/* Right: Rich Details and Storytelling */}
        <div className="lg:w-2/5 p-6 sm:p-8 overflow-y-auto max-h-[50vh] lg:max-h-[85vh] space-y-6 flex flex-col justify-between bg-[#16181e]">
          <div className="space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-white/50 mb-1.5">
                <span className="uppercase tracking-wider text-[#e63946]">
                  {isFood ? t.detailsAndRecipeNotes : t.cocktailDetailsNotes}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                  {item.category.toUpperCase()}
                </span>
              </div>
              <h2 className="font-display font-dm-sans text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {itemName}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs sm:text-sm text-white/70 italic font-serif">
                  &ldquo;{itemTagline}&rdquo;
                </p>
                <span className="font-display font-dm-sans font-bold text-lg text-[#e63946]">
                  {item.price}
                </span>
              </div>
            </div>

            {/* Description / Story Concept */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-[11px] font-semibold text-[#e63946] uppercase tracking-wider block">
                {t.storyConcept}
              </span>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                {itemDescription}
              </p>
            </div>

            {/* Fun Fact / Cultural Heritage Quote if available */}
            {itemFunFact && (
              <div className="p-3.5 rounded-xl bg-[#e63946]/10 border border-[#e63946]/20 text-xs text-white/90 italic">
                <span className="font-bold text-[#e63946] not-italic block mb-0.5">
                  {isVi ? 'Góc Ký Ức Saime:' : 'Cultural Memory:'}
                </span>
                &ldquo;{itemFunFact}&rdquo;
              </div>
            )}

            {/* Key Ingredients */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                {t.keyIngredients}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {itemIngredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-white/90"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Dietary or Flavor Nodes */}
            {isFood && foodItem?.dietary && (
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  {t.dietaryFeatures}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {foodItem.dietary.map((d, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#2a9d8f]/20 border border-[#2a9d8f]/30 text-xs text-[#2a9d8f] font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Suggested Pairing Section */}
          <div className="pt-4 border-t border-white/10 mt-6">
            <div className="flex items-center justify-between text-xs text-white/50 mb-2">
              <span className="font-semibold text-[#e63946] uppercase tracking-wider">
                {isFood ? t.suggestedPairing : t.suggestedFoodPairing}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-display font-dm-sans font-bold text-sm text-white truncate">
                  {pairingName}
                </h4>
                <p className="text-[11px] text-white/60 line-clamp-1 italic">
                  {pairingNotes}
                </p>
              </div>
              <button
                onClick={() => {
                  const targetId = isFood ? item.pairing.cocktailId : item.pairing.foodId;
                  const targetType = isFood ? 'cocktail' : 'food';
                  onNavigatePairing(targetId, targetType);
                }}
                className="px-3 py-1.5 rounded-full bg-[#e63946] text-white text-xs font-bold hover:bg-[#d62839] transition-colors whitespace-nowrap shadow-md"
                id="lightbox-navigate-pairing-btn"
              >
                {isFood ? t.viewCocktailBtn : t.viewFoodBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
