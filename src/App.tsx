import React, { useState, useEffect } from 'react';
import { ActivePage, FoodItem, CocktailItem, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FoodPage } from './components/FoodPage';
import { CocktailPage } from './components/CocktailPage';
import { ArticlesPage } from './components/ArticlesPage';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MobileStickyDirectionsBar } from './components/MobileStickyDirectionsBar';
import {
  parseRoute,
  navigateTo,
  switchLanguageUrl,
  updateRouteMetadata,
  NAVIGATION_EVENT,
  RouteState,
} from './utils/router';

// Detect user device/phone default language: Vietnamese if phone is in Vietnamese, otherwise English
const detectUserLanguage = (): Language => {
  try {
    const saved = localStorage.getItem('saime_user_language');
    if (saved === 'vi' || saved === 'en') {
      return saved as Language;
    }
    if (typeof navigator !== 'undefined') {
      const languages =
        navigator.languages && navigator.languages.length > 0
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
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window !== 'undefined') {
      return parseRoute(window.location.pathname);
    }
    return { page: 'food', articleSlug: null, pathname: '/food', lang: 'en' };
  });

  const activePage = route.page;
  const currentArticleSlug = route.articleSlug;

  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const isPathExplicitVi = window.location.pathname === '/vn' || window.location.pathname.startsWith('/vn/');
      if (isPathExplicitVi) return 'vi';
      const isPathExplicitEn =
        window.location.pathname === '/food' ||
        window.location.pathname === '/cocktails' ||
        window.location.pathname === '/cocktail' ||
        window.location.pathname === '/articles' ||
        window.location.pathname.startsWith('/articles/');
      if (isPathExplicitEn) return 'en';
    }
    return detectUserLanguage();
  });
  const [selectedItem, setSelectedItem] = useState<FoodItem | CocktailItem | null>(null);
  const [selectedType, setSelectedType] = useState<'food' | 'cocktail' | null>(null);

  // Direct Book Table action:
  // - If Vietnamese -> directs immediately to Zalo chat: https://zalo.me/0964023683
  // - If English -> directs immediately to WhatsApp chat: https://wa.me/84964023683
  const handleOpenReservation = () => {
    const isVi = currentLang === 'vi';
    const targetUrl = isVi ? 'https://zalo.me/0964023683' : 'https://wa.me/84964023683';
    try {
      const link = document.createElement('a');
      link.href = targetUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = targetUrl;
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('saime_user_language', lang);
    } catch {
      // ignore
    }
    if (typeof window !== 'undefined') {
      const targetUrl = switchLanguageUrl(window.location.pathname, lang);
      navigateTo(targetUrl);
    }
  };

  // Sync document html lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Synchronize route changes from browser Back/Forward (popstate) and custom navigation events
  useEffect(() => {
    const handleLocationChange = () => {
      const parsed = parseRoute(window.location.pathname);
      setRoute(parsed);
      setCurrentLang(parsed.lang);
    };

    const handleCustomNav = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string }>;
      const parsed = parseRoute(customEvent.detail?.path || window.location.pathname);
      setRoute(parsed);
      setCurrentLang(parsed.lang);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener(NAVIGATION_EVENT, handleCustomNav);

    // Initial normalization if on root '/' or bare '/vn'
    if (window.location.pathname === '/') {
      const initialLang = detectUserLanguage();
      const targetPath = initialLang === 'vi' ? '/vn/food' : '/food';
      window.history.replaceState({}, '', targetPath);
      setRoute(parseRoute(targetPath));
      setCurrentLang(initialLang);
    } else if (window.location.pathname === '/vn' || window.location.pathname === '/vn/') {
      window.history.replaceState({}, '', '/vn/food');
      setRoute(parseRoute('/vn/food'));
      setCurrentLang('vi');
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener(NAVIGATION_EVENT, handleCustomNav);
    };
  }, []);

  // Sync SEO Title, description, and canonical link whenever route or language changes
  useEffect(() => {
    updateRouteMetadata(route, currentLang);
  }, [route, currentLang]);

  // Intercept internal link clicks for seamless SPA navigation while keeping real hrefs for crawlers
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      // If internal link starting with /
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !target.hasAttribute('download') &&
        target.target !== '_blank'
      ) {
        // Allow default behavior for modifier keys (Ctrl/Cmd click opens new tab)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigateTo(href);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setSelectedType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Switch page handler with language prefix
  const handlePageChange = (page: ActivePage) => {
    const isVi = currentLang === 'vi';
    if (page === 'food') {
      navigateTo(isVi ? '/vn/food' : '/food');
    } else if (page === 'cocktail') {
      navigateTo(isVi ? '/vn/cocktails' : '/cocktails');
    } else if (page === 'articles') {
      navigateTo(isVi ? '/vn/articles' : '/articles');
    }
  };

  // Article navigation handler with language prefix
  const handleNavigateArticle = (slug: string | null) => {
    const isVi = currentLang === 'vi';
    if (slug) {
      navigateTo(isVi ? `/vn/articles/${slug}` : `/articles/${slug}`);
    } else {
      navigateTo(isVi ? '/vn/articles' : '/articles');
    }
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

    // 2. Switch page via router
    navigateTo(targetType === 'food' ? '/food' : '/cocktails', { scroll: false });

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
      {/* 1. Header with 3-page Switcher & Language Switcher with Flag Emojis */}
      <Header
        activePage={activePage}
        onPageChange={handlePageChange}
        onOpenReservation={handleOpenReservation}
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
      />

      {/* 2. Main Content: Food Page, Cocktail Page, or Articles Page */}
      <main className="flex-1 w-full max-w-full">
        {activePage === 'food' ? (
          <FoodPage
            onSelectFood={handleSelectFood}
            onNavigatePairing={handleNavigatePairing}
            onSwitchToCocktailPage={() => handlePageChange('cocktail')}
            currentLang={currentLang}
            onOpenReservation={handleOpenReservation}
          />
        ) : activePage === 'cocktail' ? (
          <CocktailPage
            onSelectCocktail={handleSelectCocktail}
            onNavigatePairing={handleNavigatePairing}
            onSwitchToFoodPage={() => handlePageChange('food')}
            currentLang={currentLang}
            onOpenReservation={handleOpenReservation}
          />
        ) : (
          <ArticlesPage
            currentLang={currentLang}
            currentArticleSlug={currentArticleSlug}
            onNavigateArticle={handleNavigateArticle}
            onSwitchToFoodPage={() => handlePageChange('food')}
            onSwitchToCocktailPage={() => handlePageChange('cocktail')}
            onOpenReservation={handleOpenReservation}
          />
        )}
      </main>

      {/* 3. Footer with Organized Opening Hours & Information */}
      <Footer
        onPageChange={handlePageChange}
        onOpenReservation={handleOpenReservation}
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

      {/* 5. Mobile Sticky Bottom Bar for Direct Google Maps Navigation */}
      <MobileStickyDirectionsBar
        currentLang={currentLang}
        onOpenReservation={handleOpenReservation}
      />
    </div>
  );
}
