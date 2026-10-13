import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { FoodItem, CocktailItem, Language } from '../types';
import { translations } from '../utils/i18n';
import { getCustomFoodImage, getCustomCocktailImage } from '../utils/foodImageStore';
import { UploadImageModal } from './UploadImageModal';

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
  const [uploadOpen, setUploadOpen] = useState<boolean>(false);
  const [currentDisplayImage, setCurrentDisplayImage] = useState<string>('');

  const t = translations[currentLang];
  const isVi = currentLang === 'vi';

  const isFood = type === 'food';
  const foodItem = isFood ? (item as FoodItem) : null;
  const cocktailItem = !isFood ? (item as CocktailItem) : null;

  const updateImageFromStore = () => {
    if (!item) return;
    if (isFood && foodItem) {
      const custom = getCustomFoodImage(foodItem.id);
      setCurrentDisplayImage(custom || foodItem.primaryImage);
    } else if (cocktailItem) {
      const custom = getCustomCocktailImage(cocktailItem.id);
      setCurrentDisplayImage(custom || cocktailItem.primaryImage);
    } else {
      setCurrentDisplayImage(item.primaryImage);
    }
  };

  useEffect(() => {
    updateImageFromStore();
  }, [item, isFood, foodItem, cocktailItem]);

  const handleImageUpdated = () => {
    updateImageFromStore();
  };

  if (!item || !type) return null;

  const currentImage = currentDisplayImage || item.primaryImage;

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
              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                isZoomed ? 'scale-125' : 'scale-100 group-hover:scale-105'
              }`}
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

            {/* Zoom hint */}
            <div className="absolute bottom-4 left-4 bg-black/60 subtle-blur px-3 py-1 rounded-full text-[11px] font-medium text-white/80 border border-white/10 pointer-events-none">
              {t.clickToZoom}
            </div>

            {/* Direct Upload Image Action in Modal */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setUploadOpen(true);
              }}
              className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/70 hover:bg-[#e63946] text-white/90 hover:text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-lg"
              id="lightbox-upload-photo-btn"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{isVi ? 'Đổi ảnh món này' : 'Upload photo'}</span>
            </button>
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
                  {item.price}
                </span>
              </div>
              <h2 className="font-display font-dm-sans text-2xl sm:text-3xl font-bold text-white leading-tight">
                {itemName}
              </h2>
              <p className="text-xs text-white/60 font-medium mt-1">
                {itemTagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-white/80 font-normal leading-relaxed">
              {itemDescription}
            </p>

            {/* Structured specs */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              {foodItem && (
                <>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] uppercase font-semibold text-white/40 block">{t.servingTemperature}</span>
                    <span className="font-medium text-white mt-0.5 block">{foodItem.temperature}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] uppercase font-semibold text-white/40 block">{t.dietaryFeatures}</span>
                    <span className="font-medium text-white mt-0.5 block truncate">
                      {foodItem.dietary.join(', ')}
                    </span>
                  </div>
                </>
              )}
              {cocktailItem && (
                <>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] uppercase font-semibold text-white/40 block">
                      {isVi ? 'Vùng Cảm Hứng' : 'Regional Origin'}
                    </span>
                    <span className="font-medium text-white mt-0.5 block">
                      {cocktailItem.category === 'north'
                        ? (isVi ? 'Miền Bắc' : 'Northern Vietnam')
                        : cocktailItem.category === 'central'
                        ? (isVi ? 'Miền Trung' : 'Central Vietnam')
                        : (isVi ? 'Miền Nam' : 'Southern Vietnam')}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] uppercase font-semibold text-white/40 block">{t.glasswareProfile}</span>
                    <span className="font-medium text-white mt-0.5 block">{cocktailItem.glassware}</span>
                  </div>
                </>
              )}
            </div>

            {/* Ingredients / Botanical profile */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold text-white/60 tracking-wider block">
                {isFood ? t.keyIngredients : t.cocktailBotanicals}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {itemIngredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-white/80 text-xs border border-white/5"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Behind the creation Story */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="text-xs uppercase font-semibold text-[#e63946] tracking-wider block">
                {isFood ? t.behindTheCreation : t.curatorsPhilosophy}
              </span>
              <p className="text-xs text-white/70 italic leading-relaxed">
                "{itemFunFact}"
              </p>
            </div>
          </div>

          {/* Curated Pairing Link */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider block">
              {isFood ? t.sommelierPairingRecommendation : t.curatedPairingNote}
            </span>
            <div className="p-3 rounded-xl bg-[#e63946]/10 border border-[#e63946]/30 flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-white block truncate">
                  {pairingName}
                </span>
                <span className="text-[11px] text-white/60 block line-clamp-1">
                  {pairingNotes}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (isFood && foodItem) {
                    onNavigatePairing(foodItem.pairing.cocktailId, 'cocktail');
                  } else if (!isFood && cocktailItem) {
                    onNavigatePairing(cocktailItem.pairing.foodId, 'food');
                  }
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

      {/* Upload Image Modal */}
      <UploadImageModal
        isOpen={uploadOpen}
        onClose={() => setUploadOpen(false)}
        initialType={isFood ? 'food' : 'cocktail'}
        initialId={item.id}
        currentLang={currentLang}
        onImageUpdated={handleImageUpdated}
      />
    </div>
  );
};
