import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TastingExperiences from './components/TastingExperiences';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import CommunityBoard from './components/CommunityBoard';
import Footer from './components/Footer';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data';
import { translations } from './translations';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Volume2, Lock, Unlock } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showWelcomeBroadcast, setShowWelcomeBroadcast] = useState<boolean>(true);
  const [currentBroadcastIndex, setCurrentBroadcastIndex] = useState<number>(0);
  
  // Dual Language State
  const [lang, setLang] = useState<'en' | 'vn'>('en');
  
  // Admin Login State
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState<boolean>(false);
  const [adminPin, setAdminPin] = useState<string>('');
  const [adminError, setAdminError] = useState<string>('');

  // Dynamic Menu Items State with persistence to allow adding new staff and adjusting images
  const [items, setItems] = useState<MenuItem[]>(() => {
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
            if (defaultItem && defaultItem.image !== item.image && defaultItem.image.startsWith('/src/assets/')) {
              item.image = defaultItem.image;
              modified = true;
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
      const sections = ['hero', 'menu', 'reservation', 'community', 'tasting'];
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

  const handleNav = (sectionId: 'hero' | 'menu' | 'reservation' | 'community' | 'tasting') => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Verify Admin PIN (159357)
  const handleAdminTrigger = () => {
    setAdminPin('');
    setAdminError('');
    setIsAdminLoginOpen(true);
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  return (
    <div className="relative min-h-screen bg-neutral-light select-none selection:bg-primary/20 selection:text-primary">
      
      {/* Upper Floating Community Broadcast Toast (Lively street atmosphere notification) */}
      <AnimatePresence>
        {showWelcomeBroadcast && (
          <motion.div
            id="lively-broadcast-pannel"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 sm:top-24 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xs z-40 select-none"
          >
            <div className="bg-neutral-dark text-white p-3.5 rounded-2xl shadow-xl flex items-start gap-2.5 border border-white/10">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 self-center animate-bounce">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[8px] font-mono font-bold text-tropical tracking-wider uppercase">
                  Saime Live Feedback
                </span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentBroadcastIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-[11px] text-white/90 font-sans leading-relaxed line-clamp-2 mt-0.5"
                  >
                    {broadcasts[currentBroadcastIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setShowWelcomeBroadcast(false)}
                className="text-white/40 hover:text-white transition-colors p-1 shrink-0 cursor-pointer"
                aria-label="Dismiss Broadcast"
              >
                <span className="text-xs font-bold font-sans">×</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        isAdmin={isAdmin} 
        onAdminTrigger={handleAdminTrigger} 
        onAdminLogout={handleAdminLogout} 
        onNavigate={handleNav} 
        activeSection={activeSection} 
      />

      {/* Hero Intro */}
      <Hero
        onGoToMenu={() => handleNav('menu')}
        onGoToBooking={() => handleNav('reservation')}
        onGoToCommunity={() => handleNav('community')}
        lang={lang}
      />

      {/* Food & Crew Catalog Menu Section */}
      <MenuSection 
        lang={lang} 
        isAdmin={isAdmin} 
        items={items} 
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />



      {/* Tasting Experiences Package Section */}
      <TastingExperiences lang={lang} onGoToBooking={() => handleNav('reservation')} />

      {/* Digital Reservation Pass Holder Section */}
      <ReservationSection lang={lang} />

      {/* Belonging board Guestbook Feed */}
      <CommunityBoard lang={lang} />

      {/* Footer Area */}
      <Footer lang={lang} onNavigate={handleNav} />

      {/* Persistent Floating Admin Control Dock (If logged in) */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div
            id="admin-persistent-dock"
            initial={{ opacity: 0, scale: 0.9, y: 70 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 70 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed bottom-6 right-6 z-40 max-w-sm"
          >
            <div className="bg-neutral-dark/95 backdrop-blur-md text-white p-5 rounded-[2rem] shadow-2xl border border-primary/40 flex flex-col gap-3 shadow-primary/10">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-primary uppercase">
                    {lang === 'en' ? 'Admin Mode Active' : 'Chế Độ Admin Hoạt Động'}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-white/50 bg-white/5 px-2 py-0.5 rounded-md">
                  PIN 159357
                </span>
              </div>
              
              <p className="font-sans text-[11px] text-white/80 leading-relaxed font-normal">
                {lang === 'en' 
                  ? 'Manage menu items, prices, descriptions, and add high-energy team members directly from the system registry.' 
                  : 'Quản lý thực đơn món ăn, cập nhật giá thành, chỉnh sửa mô tả và nhân sự đội ngũ trực tiếp từ bảng điều hành.'}
              </p>

              <div className="flex items-center gap-2.5 mt-1 pt-1">
                <button
                  onClick={() => {
                    handleNav('menu');
                    setTimeout(() => {
                      const btn = document.getElementById('admin-dashboard-tab');
                      if (btn) btn.click();
                    }, 500);
                  }}
                  className="flex-1 py-2 bg-primary hover:bg-primary-dark text-white rounded-full font-display font-bold text-xs tracking-wide text-center cursor-pointer transition-all shadow-md active:scale-97 flex items-center justify-center gap-1.5"
                >
                  <span>📊</span>
                  <span>{lang === 'en' ? 'Open Dashboard' : 'Mở Bảng Điều Hành'}</span>
                </button>
                <button
                  onClick={handleAdminLogout}
                  className="px-4 py-2 bg-white/10 hover:bg-red-600/20 hover:text-red-400 rounded-full font-display font-bold text-xs tracking-wide text-white/90 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Exit' : 'Thoát'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aesthetic Custom In-App Admin Authentication Modal */}
      <AnimatePresence>
        {isAdminLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-dark/85 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none"
            onClick={() => {
              setIsAdminLoginOpen(false);
              setAdminPin('');
              setAdminError('');
            }}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="bg-neutral-light w-full max-w-sm rounded-[2.5rem] border border-sand-dark/60 p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-neutral-dark font-black tracking-tight uppercase">
                  {lang === 'en' ? 'Admin Access' : 'Truy Cập Admin'}
                </h3>
                <p className="font-sans text-xs text-neutral-muted leading-relaxed">
                  {lang === 'en' 
                    ? 'Please key in the 6-digit credential security code below.' 
                    : 'Vui lòng điền mã PIN bảo mật 6 chữ số dưới đây.'}
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (adminPin === '159357') {
                    setIsAdmin(true);
                    setIsAdminLoginOpen(false);
                    setAdminPin('');
                    setAdminError('');
                  } else {
                    setAdminError(lang === 'en' ? 'Incorrect credential pass code' : 'Mã PIN bảo mật không đúng');
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="password"
                    maxLength={6}
                    pattern="\d*"
                    autoFocus
                    placeholder="••••••"
                    value={adminPin}
                    onChange={(e) => {
                      // Only allow numbers
                      const cleanValue = e.target.value.replace(/\D/g, '');
                      setAdminPin(cleanValue);
                      if (adminError) setAdminError('');
                    }}
                    className="w-full text-center tracking-[1.2em] pl-[1.2em] font-mono text-2xl font-black py-3 bg-white border border-sand-dark text-neutral-dark rounded-2xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-inner"
                  />
                  {adminError && (
                    <span className="block mt-2 text-center text-xs text-primary font-display font-semibold">
                      ❌ {adminError}
                    </span>
                  )}
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAdminLoginOpen(false);
                      setAdminPin('');
                      setAdminError('');
                    }}
                    className="flex-1 py-3 bg-sand hover:bg-neutral-dark hover:text-white text-neutral-dark font-display font-black text-xs tracking-widest uppercase rounded-full transition-all cursor-pointer"
                  >
                    {lang === 'en' ? 'Cancel' : 'Hủy bỏ'}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-primary hover:bg-primary-dark text-white font-display font-black text-xs tracking-widest uppercase rounded-full transition-all shadow-md cursor-pointer-none hover:scale-102"
                  >
                    {lang === 'en' ? 'Confirm' : 'Xác nhận'}
                  </button>
                </div>
              </form>

              <div className="pt-2 text-center border-t border-sand/40">
                <span className="text-[9px] font-mono text-neutral-muted uppercase tracking-widest">
                  Secure Console PIN: 159357
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
