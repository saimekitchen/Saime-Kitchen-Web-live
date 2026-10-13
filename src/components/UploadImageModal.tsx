import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Check, Trash2, Image as ImageIcon, AlertCircle, Wine, Utensils, HardDrive, Save, Download, Copy, FileJson } from 'lucide-react';
import { Language } from '../types';
import { FOOD_ITEMS } from '../data/foodData';
import { COCKTAIL_ITEMS } from '../data/cocktailData';
import {
  saveCustomFoodImage,
  removeCustomFoodImage,
  getCustomFoodImage,
  saveCustomCocktailImage,
  removeCustomCocktailImage,
  getCustomCocktailImage,
  compressAndReadFile,
  syncAllToSourceCode,
  getAllCustomFoodImages,
  getAllCustomCocktailImages,
} from '../utils/foodImageStore';

interface UploadImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'food' | 'cocktail';
  initialId?: string;
  initialFoodId?: string; // backwards compatibility
  currentLang: Language;
  onImageUpdated?: () => void;
}

export const UploadImageModal: React.FC<UploadImageModalProps> = ({
  isOpen,
  onClose,
  initialType = 'food',
  initialId,
  initialFoodId,
  currentLang,
  onImageUpdated,
}) => {
  const isVi = currentLang === 'vi';

  // Determine active category and item
  const resolvedInitialId = initialId || initialFoodId;
  const isInitialCocktail =
    initialType === 'cocktail' ||
    Boolean(resolvedInitialId && COCKTAIL_ITEMS.some((c) => c.id === resolvedInitialId));

  const [activeTab, setActiveTab] = useState<'food' | 'cocktail'>(
    isInitialCocktail ? 'cocktail' : 'food'
  );
  const [selectedDishId, setSelectedDishId] = useState<string>(
    FOOD_ITEMS[0]?.id || ''
  );
  const [selectedCocktailId, setSelectedCocktailId] = useState<string>(
    COCKTAIL_ITEMS[0]?.id || ''
  );

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHardcoding, setIsHardcoding] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleHardcodeAll = async () => {
    setIsHardcoding(true);
    setErrorMsg(null);
    try {
      const result = await syncAllToSourceCode();
      if (result.success) {
        setSuccessMsg(
          isVi
            ? `Tuyệt vời! Đã lưu cứng thành công ${result.count} ảnh vào mã nguồn dự án (public/images & hardcodedImages.ts). Sẵn sàng 100% khi deploy live!`
            : `Success! Permanently saved ${result.count} images into source code (public/images & hardcodedImages.ts). Ready for live!`
        );
        if (onImageUpdated) onImageUpdated();
      } else {
        setErrorMsg(result.message || 'Không thể đồng bộ vào mã nguồn.');
      }
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Lỗi khi lưu vào mã nguồn');
    } finally {
      setIsHardcoding(false);
    }
  };

  const handleExportJson = () => {
    const foodImgs = getAllCustomFoodImages();
    const cocktailImgs = getAllCustomCocktailImages();
    const data = JSON.stringify({ food: foodImgs, cocktails: cocktailImgs }, null, 2);
    navigator.clipboard.writeText(data).then(() => {
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 3000);
    });
  };

  // Sync state when opened
  useEffect(() => {
    if (!isOpen) return;

    if (resolvedInitialId) {
      const matchCocktail = COCKTAIL_ITEMS.find((c) => c.id === resolvedInitialId);
      if (matchCocktail) {
        setActiveTab('cocktail');
        setSelectedCocktailId(matchCocktail.id);
        return;
      }
      const matchFood = FOOD_ITEMS.find((f) => f.id === resolvedInitialId);
      if (matchFood) {
        setActiveTab('food');
        setSelectedDishId(matchFood.id);
        return;
      }
    }

    if (initialType === 'cocktail') {
      setActiveTab('cocktail');
    } else {
      setActiveTab('food');
    }
  }, [isOpen, resolvedInitialId, initialType]);

  if (!isOpen) return null;

  // Selected item reference based on active tab
  const isCocktailTab = activeTab === 'cocktail';
  const currentItem = isCocktailTab
    ? COCKTAIL_ITEMS.find((c) => c.id === selectedCocktailId) || COCKTAIL_ITEMS[0]
    : FOOD_ITEMS.find((f) => f.id === selectedDishId) || FOOD_ITEMS[0];

  const currentItemId = currentItem?.id || '';
  const currentItemName = isVi && currentItem?.nameVi ? currentItem.nameVi : currentItem?.name || '';
  const customImg = isCocktailTab
    ? getCustomCocktailImage(currentItemId)
    : getCustomFoodImage(currentItemId);
  const currentPreview = customImg || currentItem?.primaryImage;

  const handleFileProcess = async (file: File) => {
    if (!currentItem) return;
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsUploading(true);

    try {
      const compressedDataUrl = await compressAndReadFile(file, 1200, 0.82);
      if (isCocktailTab) {
        saveCustomCocktailImage(currentItemId, compressedDataUrl);
      } else {
        saveCustomFoodImage(currentItemId, compressedDataUrl);
      }

      setSuccessMsg(
        isVi
          ? `Đã cập nhật ảnh thành công cho "${currentItemName}"!`
          : `Image successfully updated for "${currentItem.name}"!`
      );
      if (onImageUpdated) onImageUpdated();
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to upload image.';
      setErrorMsg(msg);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileProcess(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleResetToDefault = () => {
    if (!currentItem) return;
    if (isCocktailTab) {
      removeCustomCocktailImage(currentItemId);
    } else {
      removeCustomFoodImage(currentItemId);
    }

    setSuccessMsg(
      isVi
        ? `Đã khôi phục ảnh gốc cho "${currentItemName}".`
        : `Reset to default image for "${currentItem.name}".`
    );
    if (onImageUpdated) onImageUpdated();
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      {/* Modal Card */}
      <div
        id="upload-image-modal"
        className="relative w-full max-w-3xl bg-[#14161a] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between bg-[#16181e]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#e63946]/15 border border-[#e63946]/30 text-[#e63946]">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                {isVi ? 'Tải Lên Hình Ảnh Thực Đơn' : 'Upload Menu Photos'}
              </h2>
              <p className="text-xs text-white/50">
                {isVi
                  ? 'Tải lên hình ảnh tùy chỉnh cho món ăn hoặc đồ uống cocktails'
                  : 'Upload and customize photos for food dishes and cocktails'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-upload-modal-btn"
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Food vs Cocktails */}
        <div className="px-5 sm:px-6 pt-4 pb-2 border-b border-white/5 bg-[#14161a] flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab('food');
              setErrorMsg(null);
            }}
            id="tab-food-upload"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              !isCocktailTab
                ? 'bg-[#e63946] text-white shadow-md'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{isVi ? 'Món Ăn (14 món)' : 'Food Menu (14 dishes)'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('cocktail');
              setErrorMsg(null);
            }}
            id="tab-cocktail-upload"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              isCocktailTab
                ? 'bg-[#e63946] text-white shadow-md'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Wine className="w-3.5 h-3.5" />
            <span>{isVi ? 'Cocktails (12 món)' : 'Cocktails (12 drinks)'}</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Success / Error Banners */}
          {successMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-300 text-xs sm:text-sm">
              <Check className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center gap-2.5 text-rose-300 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Item Selection Grid */}
          <div>
            <label className="text-xs uppercase font-semibold text-white/60 tracking-wider block mb-2">
              {isVi
                ? isCocktailTab
                  ? '1. Chọn ly cocktail cần thay ảnh'
                  : '1. Chọn món ăn cần thay ảnh'
                : isCocktailTab
                ? '1. Select Cocktail to Update'
                : '1. Select Dish to Update'}
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
              {isCocktailTab
                ? COCKTAIL_ITEMS.map((drink) => {
                    const isSelected = drink.id === selectedCocktailId;
                    const hasCustom = Boolean(getCustomCocktailImage(drink.id));
                    const dName = isVi && drink.nameVi ? drink.nameVi : drink.name;
                    const activeImg = getCustomCocktailImage(drink.id) || drink.primaryImage;

                    return (
                      <button
                        key={drink.id}
                        onClick={() => {
                          setSelectedCocktailId(drink.id);
                          setErrorMsg(null);
                        }}
                        id={`select-cocktail-${drink.id}`}
                        type="button"
                        className={`text-left p-2 rounded-xl border flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'border-[#e63946] bg-[#e63946]/10 shadow-sm'
                            : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                        }`}
                      >
                        <img
                          src={activeImg}
                          alt={dName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover shrink-0 border border-white/10"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-white truncate flex items-center gap-1">
                            {dName}
                            {hasCustom && (
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                                title="Custom photo active"
                              />
                            )}
                          </div>
                          <div className="text-[10px] text-white/40 truncate">{drink.price}</div>
                        </div>
                      </button>
                    );
                  })
                : FOOD_ITEMS.map((dish) => {
                    const isSelected = dish.id === selectedDishId;
                    const hasCustom = Boolean(getCustomFoodImage(dish.id));
                    const dName = isVi && dish.nameVi ? dish.nameVi : dish.name;
                    const activeImg = getCustomFoodImage(dish.id) || dish.primaryImage;

                    return (
                      <button
                        key={dish.id}
                        onClick={() => {
                          setSelectedDishId(dish.id);
                          setErrorMsg(null);
                        }}
                        id={`select-dish-${dish.id}`}
                        type="button"
                        className={`text-left p-2 rounded-xl border flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'border-[#e63946] bg-[#e63946]/10 shadow-sm'
                            : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                        }`}
                      >
                        <img
                          src={activeImg}
                          alt={dName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover shrink-0 border border-white/10"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-white truncate flex items-center gap-1">
                            {dName}
                            {hasCustom && (
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                                title="Custom photo active"
                              />
                            )}
                          </div>
                          <div className="text-[10px] text-white/40 truncate">{dish.price}</div>
                        </div>
                      </button>
                    );
                  })}
            </div>
          </div>

          {/* Upload Area & Current Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Current Active Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="uppercase font-semibold tracking-wider">
                  {isVi ? 'Ảnh hiện tại' : 'Current Active Image'}
                </span>
                {customImg && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {isVi ? 'Ảnh tùy chỉnh' : 'Custom Photo'}
                  </span>
                )}
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
                {currentPreview ? (
                  <img
                    src={currentPreview}
                    alt={currentItemName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon className="w-8 h-8 text-white/20" />
                )}
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs text-white/80 font-medium">
                  {currentItemName} ({currentItem?.price})
                </div>
                {customImg && (
                  <button
                    onClick={handleResetToDefault}
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] text-white/50 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    {isVi ? 'Khôi phục ảnh gốc' : 'Reset to default'}
                  </button>
                )}
              </div>
            </div>

            {/* Dropzone Upload Area */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold text-white/60 tracking-wider block">
                {isVi ? '2. Tải ảnh mới từ máy' : '2. Upload New Image'}
              </span>

              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-[4/3] rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-[#e63946] bg-[#e63946]/10'
                    : 'border-white/20 bg-white/[0.02] hover:border-white/40 hover:bg-white/[0.04]'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="menu-file-upload-input"
                />

                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-[#e63946]" />
                </div>

                <p className="text-xs sm:text-sm font-semibold text-white">
                  {isUploading
                    ? isVi
                      ? 'Đang xử lý & lưu ảnh...'
                      : 'Compressing & uploading...'
                    : isVi
                    ? 'Kéo thả hoặc bấm để chọn ảnh'
                    : 'Drag & drop photo or click to browse'}
                </p>
                <p className="text-[11px] text-white/40 mt-1">
                  JPG, PNG, WebP • Tự động tối ưu dung lượng
                </p>

                <button
                  type="button"
                  className="mt-3 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  {isVi ? 'Duyệt tệp tin' : 'Select file'}
                </button>
              </div>
            </div>
          </div>

          {/* Permanent Source Code Hardcoding Section */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#e63946]/15 via-black/40 to-white/[0.02] border border-[#e63946]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <HardDrive className="w-4 h-4 text-[#e63946]" />
                <span>
                  {isVi
                    ? 'Lưu cứng ảnh vào mã nguồn (Hardcode to Source Code)'
                    : 'Hardcode Images to Source Code'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {isVi ? 'Sẵn sàng Live' : 'Live Ready'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-white/60 max-w-xl">
                {isVi
                  ? 'Toàn bộ ảnh bạn đã tải lên trong môi trường này sẽ được ghi trực tiếp vào mã nguồn dự án (thư mục public/images và hardcodedImages.ts). Khi website được đưa lên live, tất cả ảnh sẽ hiển thị chuẩn xác!'
                  : 'Permanently writes all images uploaded in this building environment into project files (public/images and hardcodedImages.ts) so they remain active when deployed live.'}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleExportJson}
                title={isVi ? 'Sao chép JSON dự phòng' : 'Copy Backup JSON'}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJson ? (isVi ? 'Đã chép' : 'Copied') : 'JSON'}</span>
              </button>

              <button
                type="button"
                onClick={handleHardcodeAll}
                disabled={isHardcoding}
                id="btn-hardcode-images-to-source"
                className="px-4 py-2 rounded-xl bg-[#e63946] hover:bg-[#d62839] text-white text-xs font-bold shadow-lg shadow-[#e63946]/20 inline-flex items-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                <Save className="w-4 h-4" />
                <span>
                  {isHardcoding
                    ? (isVi ? 'Đang lưu vào mã nguồn...' : 'Saving to source...')
                    : (isVi ? 'Lưu cứng vào mã nguồn' : 'Hardcode to Source Code')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-white/10 bg-[#16181e] flex items-center justify-between text-xs text-white/50">
          <span>
            {isVi
              ? 'Ảnh tải lên được lưu an toàn trong trình duyệt của bạn.'
              : 'Uploaded photos are safely stored in your local browser storage.'}
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            {isVi ? 'Xong' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
