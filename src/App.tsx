import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TastingExperiences from './components/TastingExperiences';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data';
import { translations } from './translations';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showWelcomeBroadcast, setShowWelcomeBroadcast] = useState<boolean>(false);
  const [currentBroadcastIndex, setCurrentBroadcastIndex] = useState<number>(0);
  
  // Dual Language State
  const [lang, setLang] = useState<'en' | 'vn'>('en');

  // Dynamic Menu Items State with persistence to allow adding new staff and adjusting images
  const [items, setItems] = useState<MenuItem[]>(() => {
    // Force reset/clear old localStorage caches if version mismatch to apply new hardcoded assets
    const CURRENT_VERSION = 'saime_v3.4_categorized_and_perfected';
    try {
      const savedVersion = localStorage.getItem('saime_version');
      if (savedVersion !== CURRENT_VERSION) {
        localStorage.removeItem('saime_menu_items');
        localStorage.removeItem('saime_custom_categories');
        localStorage.removeItem('saime_category_mapping');
        localStorage.setItem('saime_version', CURRENT_VERSION);
      }
    } catch (e) {
      console.warn('LocalStorage error during version check:', e);
    }

    const defaultStaff: MenuItem[] = [
      {
        id: 'staff-1',
        name: 'Head Chef Quynh',
        price: 0,
        description: 'With 12 years cooking in high-energy bistros, Chef Quynh blends her grandma’s slow-stewed meatball secret with modern techniques. She is the soul behind SAIME PAN.',
        ingredients: ['Sauce Crafting', 'Flame Control', 'Local Flavor Pairing'],
        category: 'Staff',
        isSignature: true,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'staff-2',
        name: 'Bar Master Dung',
        price: 0,
        description: 'Dung is the wizard at the drink workstation, passionate about pairing botanical spices and local herbs with slow cold brew coffee and refreshing tropical spirits.',
        ingredients: ['Slow Coffee Brew', 'Spiced Cocktails', 'Aromatics'],
        category: 'Staff',
        isSignature: true,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      }
    ];
    const defaultList = [...MENU_ITEMS, ...defaultStaff];

    try {
      const saved = localStorage.getItem('saime_menu_items');
      if (saved) {
        let parsed = JSON.parse(saved) as MenuItem[];
        // Only trust cache if it has a reasonable size and elements, otherwise reload default
        if (Array.isArray(parsed) && parsed.length >= 5) {
          // Force-update isSignature, isBestSeller, and isChefRecommend for saime-comfort, saime-wonton, and saime-pan
          let modified = false;
          parsed = parsed.map(item => {
            if (['saime-comfort', 'saime-wonton', 'saime-pan'].includes(item.id)) {
              if (!item.isSignature || !item.isBestSeller || !item.isChefRecommend) {
                item.isSignature = true;
                item.isBestSeller = true;
                item.isChefRecommend = true;
                modified = true;
              }
            }
            const defaultItem = defaultList.find(d => d.id === item.id);
            if (defaultItem) {
              if (defaultItem.image !== item.image) {
                item.image = defaultItem.image;
                modified = true;
              }
              if (defaultItem.name !== item.name) {
                item.name = defaultItem.name;
                modified = true;
              }
              if (defaultItem.price !== item.price) {
                item.price = defaultItem.price;
                modified = true;
              }
              if (defaultItem.description !== item.description) {
                item.description = defaultItem.description;
                modified = true;
              }
              if (defaultItem.category !== item.category) {
                item.category = defaultItem.category;
                modified = true;
              }
              if (defaultItem.menuType !== item.menuType) {
                item.menuType = defaultItem.menuType;
                modified = true;
              }
              if (JSON.stringify(defaultItem.ingredients) !== JSON.stringify(item.ingredients)) {
                item.ingredients = defaultItem.ingredients;
                modified = true;
              }
            }
            return item;
          });

          const parsedIds = new Set(parsed.map(x => x.id));
          const missingDefaults = MENU_ITEMS.filter(item => !parsedIds.has(item.id));
          if (missingDefaults.length > 0) {
            const merged = [...parsed, ...missingDefaults];
            try {
              localStorage.setItem('saime_menu_items', JSON.stringify(merged));
            } catch (err) {
              console.warn('Quota exceeded during merged save, using memory state:', err);
            }
            return merged;
          }

          if (modified) {
            try {
              localStorage.setItem('saime_menu_items', JSON.stringify(parsed));
            } catch (err) {
              console.warn('Quota exceeded during cached state update:', err);
            }
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading custom menu items in fast initializer', e);
    }
    
    // Save defaults to localStorage for future use
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(defaultList));
    } catch (e) {
      console.error('Failed to pre-cache defaultList:', e);
    }
    return defaultList;
  });

  const t = translations[lang];

  // Broadcast tickers
  const broadcastsEn = [
    "🔥 Standard Table 04 just reserved 'SAIME PAN' & 'COCO TOAST'!",
    "🌿 Local regular Minh Anh left a heartwarming note on the Guestbook Board.",
    "🥑 Kitchen tip: You can request extra sweet Vietnamese pickles with any burger!",
    "☕ Gathers note: Try pairing your 'Char Siu Mantou' with slow-drip master coffee!",
  ];

  const broadcastsVn = [
    "🔥 Bàn số 04 vừa đặt 'BÁNH MÌ CHẢO SÀI MẼ' & 'COCO TOAST'!",
    "🌿 Bạn Minh Anh vừa gửi gắm lời lưu bút vô cùng ấm áp lên chiếc bảng bàn dài.",
    "🥑 Gợi ý bếp: Bạn có thể yêu cầu thêm dưa muối chua ngọt ăn kèm burger nhé!",
    "☕ Mẹo nhỏ: Dùng thử bánh bao lạp xưởng kẹp thịt xá xíu cùng ly cà phê nhỏ giọt!",
  ];

  const broadcasts = lang === 'en' ? broadcastsEn : broadcastsVn;

  // State persist functions for admin modifications
  const handleAddItem = (newItem: MenuItem) => {
    const updated = [...items, newItem];
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        alert(lang === 'en' 
          ? 'Notice: Local browser storage limit reached because of large custom images. Your changes are saved in memory for this session.' 
          : 'Thông báo: Dung lượng dự trữ trình duyệt đã đầy do file ảnh lớn. Thay đổi vẫn được lưu tạm trong phiên làm việc này.');
      }
    }
  };

  const handleEditItem = (editedItem: MenuItem) => {
    const updated = items.map(item => item.id === editedItem.id ? editedItem : item);
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        alert(lang === 'en' 
          ? 'Notice: Local browser storage limit reached because of large custom images. Your changes are saved in memory for this session.' 
          : 'Thông báo: Dung lượng dự trữ trình duyệt đã đầy do file ảnh lớn. Thay đổi vẫn được lưu tạm trong phiên làm việc này.');
      }
    }
  };

  const handleDeleteItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    try {
      localStorage.setItem('saime_menu_items', JSON.stringify(updated));
    } catch (error) {
      console.error('Storage error:', error);
    }
  };

  // Preload all menu item images instantly for lightning-fast catalog access
  useEffect(() => {
    if (items && items.length > 0) {
      items.forEach(item => {
        if (item.image) {
          const img = new Image();
          img.src = item.image;
        }
      });
    }
  }, [items]);

  useEffect(() => {
    // Scroll detection to highlight headers
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'reservation', 'tasting'];
      const scrollPos = window.scrollY + 250; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Shift broadcast ticker
    const interval = setInterval(() => {
      setCurrentBroadcastIndex((prev) => (prev + 1) % broadcasts.length);
    }, 8500);
    return () => clearInterval(interval);
  }, [broadcasts.length]);

  const handleNav = (sectionId: 'hero' | 'menu' | 'reservation' | 'tasting') => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`relative min-h-screen bg-neutral-light select-none selection:bg-primary/20 selection:text-primary ${lang === 'vn' ? 'font-vietnamese' : ''}`}>
      
      {/* Navigation Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onNavigate={handleNav} 
        activeSection={activeSection} 
      />

      {/* Hero Intro */}
      <Hero
        onGoToMenu={() => handleNav('menu')}
        onGoToBooking={() => handleNav('reservation')}
        lang={lang}
      />

      {/* Food & Crew Catalog Menu Section */}
      <MenuSection 
        lang={lang} 
        isAdmin={false} 
        items={items} 
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />



      {/* Tasting Experiences Package Section */}
      <TastingExperiences lang={lang} onGoToBooking={() => handleNav('reservation')} />

      {/* Digital Reservation Pass Holder Section */}
      <ReservationSection lang={lang} />

      {/* Footer Area */}
      <Footer lang={lang} onNavigate={handleNav} />

      {/* Persistent Desktop Floating Social Bar */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-3 bg-white/95 backdrop-blur-md border-2 border-rose-600/30 p-2.5 rounded-full shadow-[0_15px_40px_rgba(225,29,72,0.18)] hover:border-rose-600/60 transition-all duration-300 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="w-2 h-2 bg-rose-600 rounded-full animate-pulse" />
        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-rose-600 [writing-mode:vertical-lr] select-none py-1">
          {lang === 'en' ? 'Socials' : 'Kết Nối'}
        </span>
        <a
          href="https://www.instagram.com/saime_kitchen.bar/"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-sand hover:bg-rose-600 hover:scale-115 text-neutral-dark hover:text-white rounded-full transition-all cursor-pointer flex items-center justify-center shadow-xs hover:shadow-lg hover:shadow-rose-600/30"
          title="Instagram @saime_kitchen.bar"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61589897489896"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-sand hover:bg-rose-600 hover:scale-115 text-neutral-dark hover:text-white rounded-full transition-all cursor-pointer flex items-center justify-center shadow-xs hover:shadow-lg hover:shadow-rose-600/30"
          title="Facebook Page"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://www.tiktok.com/@saime.kitchen.bar?lang=en"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 bg-sand hover:bg-rose-600 hover:scale-115 text-neutral-dark hover:text-white rounded-full transition-all cursor-pointer flex items-center justify-center shadow-xs hover:shadow-lg hover:shadow-rose-600/30"
          title="TikTok @saime.kitchen.bar"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.44-.45-.63-.7-.01 2.05-.01 4.11-.01 6.16 0 1.54-.31 3.14-1.12 4.46-1.15 1.98-3.32 3.32-5.61 3.49-1.99.18-4.14-.35-5.63-1.75-1.92-1.72-2.58-4.66-1.56-7.07.82-1.99 2.76-3.48 4.9-3.76.21-.03.43-.04.64-.05v4.06c-1.1.26-2.11 1.09-2.38 2.24-.39 1.56.49 3.33 2.01 3.79 1.15.35 2.5-.04 3.17-1.02.44-.64.55-1.44.53-2.22.02-3.83.01-7.66.01-11.49z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
