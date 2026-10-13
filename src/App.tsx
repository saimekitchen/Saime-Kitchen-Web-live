import React, { useState, useEffect } from 'react';
import { ActivePage, FoodItem, CocktailItem, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FoodPage } from './components/FoodPage';
import { CocktailPage } from './components/CocktailPage';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ReservationDrawer } from './components/ReservationDrawer';
import { MobileStickyDirectionsBar } from './components/MobileStickyDirectionsBar';
import { autoSyncOnStartup } from './utils/foodImageStore';

// Detect user device/phone default language: Vietnamese if phone is in Vietnamese, otherwise English
const detectUserLanguage = (): Language => {
  try {
    const saved = localStorage.getItem('saime_user_language');
    if (saved === 'vi' || saved === 'en') {
      return saved as Language;
    }
    if (typeof navigator !== 'undefined') {
      const languages = navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];
      for (const lang of languages) {
        if (lang && lang.toLowerCase().startsWith('vi')) {
          return 'vi';
        }
      }
    }
  } catch {
    // fallback
  }
  return 'en';
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('food');
  const [currentLang, setCurrentLang] = useState<Language>(detectUserLanguage);
  const [selectedItem, setSelectedItem] = useState<FoodItem | CocktailItem | null>(null);
  const [selectedType, setSelectedType] = useState<'food' | 'cocktail' | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('saime_user_language', lang);
    } catch {
      // ignore
    }
  };

  // Sync document html lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Auto-sync images uploaded in this building environment directly into project source code
  useEffect(() => {
    autoSyncOnStartup();
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setSelectedType(null);
        setIsReservationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Switch page handler
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox handlers
  const handleSelectFood = (item: FoodItem) => {
    setSelectedItem(item);
    setSelectedType('food');
  };

  const handleSelectCocktail = (item: CocktailItem) => {
    setSelectedItem(item);
    setSelectedType('cocktail');
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
    setSelectedType(null);
  };

  // Cross-page pairing jump
  const handleNavigatePairing = (targetId: string, targetType: 'food' | 'cocktail') => {
    // 1. Close lightbox
    handleCloseLightbox();

    // 2. Switch page
    setActivePage(targetType);

    // 3. Scroll to element and highlight
    setTimeout(() => {
      const cardElement = document.getElementById(
        targetType === 'food' ? `food-card-${targetId}` : `cocktail-card-${targetId}`
      );
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardElement.classList.add('ring-2', 'ring-[#e63946]', 'scale-[1.01]');
        setTimeout(() => {
          cardElement.classList.remove('ring-2', 'ring-[#e63946]', 'scale-[1.01]');
        }, 2200);
      }
    }, 150);
  };

  return (
    <div className="min-h-screen w-full max-w-full bg-[#111215] text-[#f2f3f5] flex flex-col selection:bg-[#e63946] selection:text-white dot-texture font-sans">
      {/* 1. Header with 2-page Switcher & Language Switcher with Flag Emojis */}
      <Header
        activePage={activePage}
        onPageChange={handlePageChange}
        onOpenReservation={() => setIsReservationOpen(true)}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* 2. Main Content: Food Page or Cocktail Page */}
      <main className="flex-1 w-full max-w-full">
        {activePage === 'food' ? (
          <FoodPage
            onSelectFood={handleSelectFood}
            onNavigatePairing={handleNavigatePairing}
            onSwitchToCocktailPage={() => handlePageChange('cocktail')}
            currentLang={currentLang}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        ) : (
          <CocktailPage
            onSelectCocktail={handleSelectCocktail}
            onNavigatePairing={handleNavigatePairing}
            onSwitchToFoodPage={() => handlePageChange('food')}
            currentLang={currentLang}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
      </main>

      {/* 3. Footer with Organized Opening Hours & Information */}
      <Footer
        onPageChange={handlePageChange}
        onOpenReservation={() => setIsReservationOpen(true)}
        currentLang={currentLang}
      />

      {/* 4. High-Res Photographic Lightbox Inspection Modal */}
      <ImageLightboxModal
        item={selectedItem}
        type={selectedType}
        onClose={handleCloseLightbox}
        onNavigatePairing={handleNavigatePairing}
        currentLang={currentLang}
      />

      {/* 5. Reservation Drawer */}
      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        currentLang={currentLang}
      />

      {/* 6. Mobile Sticky Bottom Bar for Direct Google Maps Navigation */}
      <MobileStickyDirectionsBar
        currentLang={currentLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
