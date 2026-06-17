import React, { useState, useMemo } from 'react';
import { Search, Sparkles, AlertCircle, Heart, X, Flame, ChevronRight, Info, Plus, Trash2, Edit, Coffee, GlassWater, FolderOpen } from 'lucide-react';
import { MenuItem } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

// Helper function to resize and compress uploaded base64 space to avoid QuotaExceededError in localStorage
function compressAndResizeImage(dataUrl: string, maxWidth: number = 800, maxHeight: number = 800): Promise<string> {
  return new Promise((resolve) => {
    // If it's not a base64 DataURL or already small, skip
    if (!dataUrl.startsWith('data:image') || dataUrl.length < 50000) {
      resolve(dataUrl);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = dataUrl;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // Keep aspect ratio within maxWidth/maxHeight limit
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        // Standard quality compression factor 0.8 keeps file crisp but reduces storage from 5MB to ~40KB
        const compressed = canvas.toDataURL('image/jpeg', 0.8);
        resolve(compressed);
      } else {
        resolve(dataUrl);
      }
    };
    img.onerror = () => {
      resolve(dataUrl);
    };
  });
}

interface MenuSectionProps {
  lang: 'en' | 'vn';
  isAdmin: boolean;
  items: MenuItem[];
  onAddItem: (newItem: MenuItem) => void;
  onEditItem: (editedItem: MenuItem) => void;
  onDeleteItem: (id: string) => void;
}

export default function MenuSection({
  lang,
  isAdmin,
  items,
  onAddItem,
  onEditItem,
  onDeleteItem
}: MenuSectionProps) {
  // Primary Channel Tab: Bistro (comfy food), Cafe (dripped egg coffee), Cocktail (sleek cocktails)
  // Primary Channel Tab: Bistro (comfy food), Cafe (dripped egg coffee), Cocktail (sleek cocktails)
  const [currentMenuTab, setCurrentMenuTab] = useState<'bistro' | 'cafe' | 'cocktail'>('bistro');
  const [selectedCategory, setSelectedCategory] = useState<string>('Signatures');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [spicyOnly, setSpicyOnly] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeAdminView, setActiveAdminView] = useState<'grid' | 'dashboard'>('grid');
  
  // Custom states for category mapping settings inside admin dashboard
  const [customCategories, setCustomCategories] = useState<{ value: string; menuType: 'bistro' | 'cafe' | 'cocktail' }[]>(() => {
    const saved = localStorage.getItem('saime_custom_categories');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migrate old cocktail categories to seasonal ones if old names exist
        const hasOldCocktail = parsed.some((c: any) => c.menuType === 'cocktail' && ['Signature Mixes', 'Old Favorites & Twists', 'Mocktail', 'Cocktail'].includes(c.value));
        const hasAutumn = parsed.some((c: any) => c.menuType === 'cocktail' && c.value === 'Autumn');
        if (!hasAutumn || hasOldCocktail) {
          // Perform automatic upgrade to seasonal cocktail/mocktail categories
          const filtered = parsed.filter((c: any) => c.menuType !== 'cocktail');
          const upgraded = [
            ...filtered,
            { value: 'Spring', menuType: 'cocktail' },
            { value: 'Summer', menuType: 'cocktail' },
            { value: 'Autumn', menuType: 'cocktail' },
            { value: 'Winter', menuType: 'cocktail' }
          ];
          localStorage.setItem('saime_custom_categories', JSON.stringify(upgraded));
          return upgraded;
        }
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return [
      { value: 'Snacks & Starters', menuType: 'bistro' },
      { value: 'Banh Mi & Burgers', menuType: 'bistro' },
      { value: 'Mains & Pastas', menuType: 'bistro' },
      { value: 'Sides & Salads', menuType: 'bistro' },
      { value: 'Sweets', menuType: 'bistro' },
      { value: 'Staff', menuType: 'bistro' },
      { value: 'Specialty Coffee', menuType: 'cafe' },
      { value: 'Fresh Pastry & Bites', menuType: 'cafe' },
      { value: 'Spring', menuType: 'cocktail' },
      { value: 'Summer', menuType: 'cocktail' },
      { value: 'Autumn', menuType: 'cocktail' },
      { value: 'Winter', menuType: 'cocktail' }
    ];
  });

  const [categoryMapping, setCategoryMapping] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('saime_category_mapping');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clear old cocktail mappings if they exist
        if (parsed['Signature Mixes'] || parsed['Old Favorites & Twists'] || !parsed['Autumn']) {
          delete parsed['Signature Mixes'];
          delete parsed['Old Favorites & Twists'];
          delete parsed['Mocktail'];
          parsed['Spring'] = 'Spring';
          parsed['Summer'] = 'Summer';
          parsed['Autumn'] = 'Autumn';
          parsed['Winter'] = 'Winter';
          localStorage.setItem('saime_category_mapping', JSON.stringify(parsed));
          return parsed;
        }
        return parsed;
      } catch (e) {
        console.error(e);
      }
    }
    return {
      'Snacks & Starters': 'Starters',
      'Banh Mi & Burgers': 'Starters',
      'Mains & Pastas': 'Main Course',
      'Sides & Salads': 'Salad & Sides',
      'Sweets': 'Dessert',
      'Specialty Coffee': 'Coffee',
      'Fresh Pastry & Bites': 'Pastries',
      'Spring': 'Spring',
      'Summer': 'Summer',
      'Autumn': 'Autumn',
      'Winter': 'Winter'
    };
  });

  const [dashboardSubTab, setDashboardSubTab] = useState<'registry' | 'categories'>('registry');
  const [newCatName, setNewCatName] = useState('');
  const [newCatType, setNewCatType] = useState<'bistro' | 'cafe' | 'cocktail'>('bistro');
  const [newCatMappedTab, setNewCatMappedTab] = useState('Starters');
  const [editingCategoryValue, setEditingCategoryValue] = useState<string | null>(null);
  const [editingCategoryNewName, setEditingCategoryNewName] = useState('');
  
  // Custom states for live image resizing on the main menu screen
  const [activeResizerId, setActiveResizerId] = useState<string | null>(null);

  // Admin edit/add modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    ingredients: '',
    category: 'Starters',
    isVegetarian: false,
    isSpicy: false,
    isSignature: false,
    isBestSeller: false,
    isChefRecommend: false,
    image: '',
    menuType: 'bistro' as 'bistro' | 'cafe' | 'cocktail',
    imageHeight: undefined as number | undefined,
    imageScale: 100,
    imageXOffset: 0,
    imageYOffset: 0,
    cardAspect: 'aspect-[4/3]' as string | undefined,
    flipHorizontal: false
  });
 
  const t = translations[lang];
 
  // Immersive dynamic theme properties for each menu type to inspire emotional connections
  const theme = useMemo(() => {
    const defaultThemes = {
      bistro: {
        sectionBg: 'bg-[#FAF6F0] text-neutral-dark',
        accentColor: 'text-primary',
        borderColor: 'border-primary/20',
        headerTagBg: 'bg-primary/10 text-primary border-primary/20',
        activeBtn: 'bg-primary text-white shadow-lg shadow-primary/25',
        activeLine: 'bg-primary',
        cardBorder: 'hover:border-primary/30',
        cardBg: 'bg-white',
        priceBg: 'bg-primary text-white',
        priceText: 'text-primary',
        subText: 'text-neutral-muted',
        badgeBorder: 'border-primary/10 bg-primary/5 text-primary',
        titleFont: 'font-display font-black tracking-tight uppercase',
        tagline: lang === 'en' ? 'Bistro Comforts & Big Shared Skillets 🏡' : 'Bistro Thân Quen & Món Ăn Bàn Sẻ Chia 🏡',
        desc: lang === 'en' ? 'Vibrant street-side energy wrapped in warm wooden stools and skillet smoke.' : 'Năng lượng đường phố nhộn nhịP bên những chiếc ghế gỗ ấm cúng và khói chảo gang.'
      },
      cafe: {
        sectionBg: 'bg-[#FCFAF4] text-[#2C332D]',
        accentColor: 'text-emerald-800',
        borderColor: 'border-emerald-800/10',
        headerTagBg: 'bg-emerald-800/10 text-emerald-800 border-emerald-800/20',
        activeBtn: 'bg-[#155e3b] text-white shadow-lg shadow-emerald-800/20',
        activeLine: 'bg-emerald-800',
        cardBorder: 'hover:border-[#155e3b]/30 hover:shadow-emerald-800/5',
        cardBg: 'bg-white',
        priceBg: 'bg-[#155e3b] text-white',
        priceText: 'text-emerald-800',
        subText: 'text-[#5A635C]',
        badgeBorder: 'border-emerald-800/10 bg-emerald-800/5 text-emerald-800',
        titleFont: 'font-serif italic font-black tracking-tight',
        tagline: lang === 'en' ? 'Bohemian Drip, Whipped Eggs & Slow Midday Sun ☕' : 'Cà Phê Muối Vân Cát & Bánh Ngọt Chiều Thư Thái ☕',
        desc: lang === 'en' ? 'Serene garden shade, slow-drip robusta, and sweet young coconut pastries.' : 'Bóng cây râm mát, cà phê phin trầm mặc và những mẻ bánh sừng trâu cốm dừa ấm nồng.'
      },
      cocktail: {
        sectionBg: 'bg-[#0B0B0D] text-[#ECE5D8]',
        accentColor: 'text-amber-500',
        borderColor: 'border-amber-500/20',
        headerTagBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        activeBtn: 'bg-amber-500 text-black font-black shadow-lg shadow-amber-500/20',
        activeLine: 'bg-amber-500',
        cardBorder: 'hover:border-amber-500/40 hover:shadow-[0_15px_30px_rgba(245,158,11,0.08)]',
        cardBg: 'bg-[#131316] border-white/5',
        priceBg: 'bg-amber-500 text-black font-extrabold',
        priceText: 'text-amber-400',
        subText: 'text-neutral-400Color text-[#B5AE9E]',
        badgeBorder: 'border-amber-500/20 bg-amber-500/5 text-amber-400',
        titleFont: 'font-mono uppercase font-black tracking-widest',
        tagline: lang === 'en' ? 'Dim Candlelight, Hand-Sphered Ice & Smooth Vinyl Jazz 🍸' : 'Ánh Đèn Mờ Ảo, Cá Thể Băng Tròn & Nhịp Điệu Jazz Sâu Lắng 🍸',
        desc: lang === 'en' ? 'Sophisticated classic methodology infused with local spices, single malts, and lotus tea gins.' : 'Các công thức pha chế cổ điển kết hợp sáng tạo với thảo mộc địa phương, khói gỗ sả và rượu gin ướp sen.'
      }
    };
    return defaultThemes[currentMenuTab];
  }, [currentMenuTab, lang]);
 
  // Dynamically resolve category mapping based on currentMenuTab
  const categoryMap = useMemo(() => {
    if (currentMenuTab === 'bistro') {
      return [
        { value: 'Signatures', labelEn: '⭐️ Saime Signatures', labelVn: '⭐️ Chữ Ký Sài Mẽ' },
        { value: 'Starters', labelEn: '🥗 Starters', labelVn: '🥗 Khai Vị' },
        { value: 'Salad & Sides', labelEn: '🍟 Salad & Sides', labelVn: '🍟 Salad & Món Kèm' },
        { value: 'Main Course', labelEn: '🍖 Main Course', labelVn: '🍖 Món Chính' },
        { value: 'Dessert', labelEn: '🍰 Dessert', labelVn: '🍰 Tráng Miệng' }
      ];
    } else if (currentMenuTab === 'cafe') {
      return [
        { value: 'Coffee', labelEn: '☕ Coffee', labelVn: '☕ Cà Phê' },
        { value: 'Non-Coffee', labelEn: '🍹 Non-Coffee', labelVn: '🍹 Non-Coffee' },
        { value: 'Pastries', labelEn: '🥐 Pastries', labelVn: '🥐 Bánh Ngọt' }
      ];
    } else {
      // Cocktail
      return [
        { value: 'Spring', labelEn: '🌸 Spring', labelVn: '🌸 Xuân' },
        { value: 'Summer', labelEn: '☀️ Summer', labelVn: '☀️ Hạ' },
        { value: 'Autumn', labelEn: '🍁 Autumn', labelVn: '🍁 Thu' },
        { value: 'Winter', labelEn: '❄️ Winter', labelVn: '❄️ Đông' }
      ];
    }
  }, [currentMenuTab]);
 
  const categories = categoryMap.map(c => c.value);
 
  const getCategoryLabel = (categoryValue: string) => {
    if (categoryValue === 'Signatures') return lang === 'en' ? 'Saime Signatures' : 'Chữ Ký Sài Mẽ';
    if (categoryValue === 'Starters') return lang === 'en' ? 'Starters' : 'Khai Vị';
    if (categoryValue === 'Salad & Sides') return lang === 'en' ? 'Salads & Sides' : 'Salad & Món Ăn Kèm';
    if (categoryValue === 'Main Course') return lang === 'en' ? 'Main Course' : 'Món Chính';
    if (categoryValue === 'Dessert') return lang === 'en' ? 'Desserts' : 'Tráng Miệng';
    if (categoryValue === 'Coffee') return lang === 'en' ? 'Coffee Specialties' : 'Cà Phê Đặc Sản';
    if (categoryValue === 'Non-Coffee') return lang === 'en' ? 'Non-Coffee Specialties' : 'Đồ Uống Khác';
    if (categoryValue === 'Pastries') return lang === 'en' ? 'Fresh Pastries' : 'Bánh Ngọt';
    if (categoryValue === 'Spring') return lang === 'en' ? 'Spring' : 'Xuân';
    if (categoryValue === 'Summer') return lang === 'en' ? 'Summer' : 'Hạ';
    if (categoryValue === 'Autumn') return lang === 'en' ? 'Autumn' : 'Thu';
    if (categoryValue === 'Winter') return lang === 'en' ? 'Winter' : 'Đông';
    if (categoryValue === 'Cocktail') return lang === 'en' ? 'Cocktails' : 'Cocktail';
    if (categoryValue === 'Mocktail') return lang === 'en' ? 'Mocktails' : 'Mocktail';
    if (categoryValue === 'Staff') return lang === 'en' ? 'Our Crew' : 'Nhân Sự Saime';
    
    const rawCategories: Record<string, {en: string, vn: string}> = {
      'Snacks & Starters': { en: 'Starters & Snacks', vn: 'Khai vị & Ăn nhẹ' },
      'Banh Mi & Burgers': { en: 'Burgers & Bread', vn: 'Bánh mì & Burger' },
      'Mains & Pastas': { en: 'Main Course', vn: 'Món chính' },
      'Sides & Salads': { en: 'Salads & Sides', vn: 'Salad & Món kèm' },
      'Sweets': { en: 'Sweets & Desserts', vn: 'Tráng miệng' },
      'Staff': { en: 'Our Crew', vn: 'Nhân viên / Đội ngũ' },
      'Specialty Coffee': { en: 'Specialty Coffee', vn: 'Cà phê đặc sản' },
      'Fresh Pastry & Bites': { en: 'Fresh Pastry & Bites', vn: 'Bánh ngọt tươi dòn' },
      'Spring': { en: 'Spring Collection', vn: 'Hương vị mùa Xuân' },
      'Summer': { en: 'Summer Refreshers', vn: 'Hương vị mùa Hạ' },
      'Autumn': { en: 'Autumn Spice', vn: 'Hương vị mùa Thu' },
      'Winter': { en: 'Winter Warmers', vn: 'Hương vị mùa Đông' },
      'Mocktail': { en: 'Mocktails', vn: 'Mocktail lạnh mát' }
    };
    if (rawCategories[categoryValue]) {
      return lang === 'en' ? rawCategories[categoryValue].en : rawCategories[categoryValue].vn;
    }
    return categoryValue;
  };
 
  const formatPrice = (price: number, sizes?: MenuItem['sizes']) => {
    if (price === 0) return lang === 'en' ? 'Specialist' : 'Chuyên nghiệp';
    if (sizes) {
      const vals = Object.values(sizes).filter((v): v is number => typeof v === 'number' && v > 0);
      if (vals.length > 1) {
        const min = Math.min(...vals);
        return lang === 'en' ? `From ${min.toLocaleString('vi-VN')} ₫` : `Từ ${min.toLocaleString('vi-VN')} ₫`;
      }
    }
    return price.toLocaleString('vi-VN') + ' ₫';
  };
 
  // Process and filter database items dynamically
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // 1. Match active menu channel
      const elMenuType = item.menuType || 'bistro';
      if (elMenuType !== currentMenuTab) {
        return false;
      }
 
      // DO NOT INCLUDE CREW/STAFF IN PUBLIC MENU
      const catStr = item.category as string;
      if (catStr === 'Staff') {
        return false;
      }
 
      // 2. Match active category filter
      let matchesCategory = false;
      if (selectedCategory === 'Signatures') {
        matchesCategory = ['saime-comfort', 'saime-wonton', 'saime-pan'].includes(item.id) || (!!item.isSignature && currentMenuTab === 'bistro');
      } else {
        const mappedPublicTab = categoryMapping[catStr] || catStr;
        if (mappedPublicTab === selectedCategory) {
          matchesCategory = true;
        } else {
          // Backward compatibility fallback mappings for default database records
          const defaultFallbackMaps: Record<string, string[]> = {
            'Starters': ['Snacks & Starters', 'Banh Mi & Burgers', 'Starters'],
            'Salad & Sides': ['Sides & Salads', 'Salad & Sides'],
            'Main Course': ['Mains & Pastas', 'Main Course'],
            'Dessert': ['Sweets', 'Dessert', 'Sweets & Desserts'],
            'Coffee': ['Specialty Coffee', 'Coffee'],
            'Non-Coffee': ['Non-Coffee'],
            'Pastries': ['Fresh Pastry & Bites', 'Fresh Pastries', 'Pastries'],
            'Spring': ['Signature Mixes', 'Spring'],
            'Summer': ['Mocktail', 'Summer'],
            'Autumn': ['Old Favorites & Twists', 'Autumn'],
            'Winter': ['Winter']
          };
          matchesCategory = defaultFallbackMaps[selectedCategory]?.includes(catStr) || catStr === selectedCategory;
        }
      }
      
      // 3. Match Search
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase())));
      
      const matchesVegetarian = !vegetarianOnly || item.isVegetarian;
      const matchesSpicy = !spicyOnly || item.isSpicy;

      return matchesCategory && matchesSearch && matchesVegetarian && matchesSpicy;
    });
  }, [items, currentMenuTab, selectedCategory, searchQuery, vegetarianOnly, spicyOnly]);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      price: 0,
      description: '',
      ingredients: '',
      category: currentMenuTab === 'bistro' ? 'Snacks & Starters' : currentMenuTab === 'cafe' ? 'Specialty Coffee' : 'Spring',
      isVegetarian: false,
      isSpicy: false,
      isSignature: false,
      isBestSeller: false,
      isChefRecommend: false,
      image: 'https://images.unsplash.com/photo-1600454021970-351feb4a5554?auto=format&fit=crop&w=600&q=80',
      menuType: currentMenuTab,
      imageHeight: undefined,
      imageScale: 100,
      imageXOffset: 0,
      imageYOffset: 0,
      cardAspect: 'aspect-[4/3]',
      flipHorizontal: false
    });
    setIsFormOpen(true);
  };

  const handleOpenEdit = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      description: item.description,
      ingredients: item.ingredients ? item.ingredients.join(', ') : '',
      category: item.category,
      isVegetarian: !!item.isVegetarian,
      isSpicy: !!item.isSpicy,
      isSignature: !!item.isSignature,
      isBestSeller: !!item.isBestSeller,
      isChefRecommend: !!item.isChefRecommend,
      image: item.image,
      menuType: item.menuType || 'bistro',
      imageHeight: item.imageHeight,
      imageScale: item.imageScale ?? 100,
      imageXOffset: item.imageXOffset ?? 0,
      imageYOffset: item.imageYOffset ?? 0,
      cardAspect: item.cardAspect || 'aspect-[4/3]',
      flipHorizontal: !!item.flipHorizontal
    });
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const conf = window.confirm(lang === 'en' ? `Are you sure you want to delete "${name}"?` : `Bạn muốn xóa "${name}" không?`);
    if (conf) {
      onDeleteItem(id);
      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.image.trim()) {
      alert(lang === 'en' ? 'Please complete required fields.' : 'Vui lòng điền đủ các thông tin chính.');
      return;
    }

    const ingredientsArr = formData.ingredients
      ? formData.ingredients.split(',').map(i => i.trim()).filter(Boolean)
      : [];

    if (editingItem) {
      const updated: MenuItem = {
        ...editingItem,
        name: formData.name.trim(),
        price: Number(formData.price) || 0,
        description: formData.description.trim(),
        ingredients: ingredientsArr,
        category: formData.category,
        isVegetarian: formData.isVegetarian,
        isSpicy: formData.isSpicy,
        isSignature: formData.isSignature,
        isBestSeller: formData.isBestSeller,
        isChefRecommend: formData.isChefRecommend,
        image: formData.image.trim(),
        menuType: formData.menuType,
        imageHeight: formData.imageHeight,
        imageScale: formData.imageScale,
        imageXOffset: formData.imageXOffset,
        imageYOffset: formData.imageYOffset,
        cardAspect: formData.cardAspect,
        flipHorizontal: formData.flipHorizontal
      };
      onEditItem(updated);
    } else {
      const newItem: MenuItem = {
        id: `mi-${Date.now()}`,
        name: formData.name.trim(),
        price: Number(formData.price) || 0,
        description: formData.description.trim(),
        ingredients: ingredientsArr,
        category: formData.category,
        isVegetarian: formData.isVegetarian,
        isSpicy: formData.isSpicy,
        isSignature: formData.isSignature,
        isBestSeller: formData.isBestSeller,
        isChefRecommend: formData.isChefRecommend,
        image: formData.image.trim(),
        menuType: formData.menuType,
        imageHeight: formData.imageHeight,
        imageScale: formData.imageScale,
        imageXOffset: formData.imageXOffset,
        imageYOffset: formData.imageYOffset,
        cardAspect: formData.cardAspect,
        flipHorizontal: formData.flipHorizontal
      };
      onAddItem(newItem);
    }

    setIsFormOpen(false);
  };

  // Preset images matching specific categories easily
  const presets = [
    { label: 'Banh Mi', url: 'https://images.unsplash.com/photo-1600454021970-351feb4a5554?auto=format&fit=crop&w=600&q=80' },
    { label: 'Burger', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
    { label: 'Pasta', url: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80' },
    { label: 'Salad', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' },
    { label: 'Snacks / Starters', url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80' },
    { label: 'Specialty Coffee', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' },
    { label: 'Craft Cocktail', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80' },
    { label: 'Staff member (F)', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
    { label: 'Staff member (M)', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section 
      id="menu" 
      className={`py-20 border-y border-sand-dark/10 relative transition-colors duration-500 ${theme.sectionBg}`}
    >
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="menu-header" className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className={`inline-flex items-center gap-1 px-3.5 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${theme.headerTagBg}`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            {theme.tagline}
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight transition-all duration-500 duration-300 ${theme.titleFont}`}>
            {currentMenuTab === 'bistro' ? t.menuTitle : currentMenuTab === 'cafe' ? (lang === 'en' ? 'Bohemian Cafe & Brews' : 'Cafe Góc Lá & Phin Nhỏ') : (lang === 'en' ? 'Midnight Classic Cocktails' : 'Midnight Cocktail Lounge')}
          </h2>
          <p className={`font-sans text-sm sm:text-base leading-relaxed transition-all duration-300 ${theme.subText}`}>
            {theme.desc}
          </p>
        </div>

        {/* Dynamic Concept Switching Tabs Segmented Dock */}
        <div 
          id="menu-immersive-tabs" 
          className={`max-w-2xl mx-auto mb-10 p-2 rounded-[2rem] border transition-all duration-300 flex flex-col sm:flex-row gap-2 select-none text-xs font-display font-black tracking-widest uppercase shadow-md ${
            currentMenuTab === 'cocktail'
              ? 'bg-[#18181C] border-[#f59e0b]/40 text-white shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
              : currentMenuTab === 'cafe'
              ? 'bg-emerald-950/15 border-emerald-800/30 text-emerald-900 shadow-[0_8px_20px_rgba(21,94,59,0.06)]'
              : 'bg-[#FAF6F0] border-primary/30 text-neutral-dark shadow-[0_8px_20px_rgba(194,8,0,0.05)]'
          }`}
        >
          {[
            { value: 'bistro', labelEn: 'Food', labelVn: 'Đồ Ăn' },
            { value: 'cafe', labelEn: 'Cafe', labelVn: 'Cà Phê' },
            { value: 'cocktail', labelEn: 'Cocktail', labelVn: 'Cocktail' }
          ].map((tabStr) => {
            const isActive = currentMenuTab === tabStr.value;
            return (
              <button
                key={tabStr.value}
                id={`menu-channel-${tabStr.value}`}
                onClick={() => {
                  const val = tabStr.value;
                  setCurrentMenuTab(val as any);
                  if (val === 'bistro') {
                    setSelectedCategory('Signatures');
                  } else if (val === 'cafe') {
                    setSelectedCategory('Coffee');
                  } else {
                    setSelectedCategory('Spring');
                  }
                }}
                className={`py-3 px-5 rounded-3xl text-center cursor-pointer transition-all duration-300 flex-1 flex items-center justify-center gap-2 font-display text-xs font-extrabold uppercase tracking-widest ${
                  isActive 
                    ? theme.activeBtn + ' scale-102 ring-2 ring-white/10'
                    : currentMenuTab === 'cocktail'
                    ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                    : currentMenuTab === 'cafe'
                    ? 'text-emerald-800/60 hover:text-emerald-900 hover:bg-emerald-800/5'
                    : 'text-[#C20800]/60 hover:text-[#C20800] hover:bg-[#C20800]/5'
                }`}
              >
                {lang === 'en' ? tabStr.labelEn : tabStr.labelVn}
              </button>
            );
          })}
        </div>

        {/* Admin Controls Add/Dashboard Toggles */}
        {isAdmin && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 select-none">
            <div className="p-1.5 bg-sand/60 border border-sand-dark/40 rounded-full flex gap-1">
              <button
                type="button"
                onClick={() => setActiveAdminView('grid')}
                className={`px-5 py-2 rounded-full font-display font-bold text-xs tracking-wide transition-all cursor-pointer ${
                  activeAdminView === 'grid'
                    ? 'bg-neutral-dark text-white shadow-md'
                    : 'text-neutral-muted hover:text-neutral-dark'
                }`}
              >
                {lang === 'en' ? '📋 Guest Menu Grid' : '📋 Giao diện Thực khách'}
              </button>
              <button
                type="button"
                id="admin-dashboard-tab"
                onClick={() => setActiveAdminView('dashboard')}
                className={`px-5 py-2 rounded-full font-display font-bold text-xs tracking-wide transition-all cursor-pointer ${
                  activeAdminView === 'dashboard'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-neutral-muted hover:text-neutral-dark'
                }`}
              >
                {lang === 'en' ? '📊 System Dashboard' : '📊 Bảng Điều Hành Admin'}
              </button>
            </div>

            <button
              onClick={handleOpenAdd}
              className="px-5 py-2 bg-tropical hover:bg-tropical-dark text-white rounded-full font-display font-bold text-xs tracking-wide shadow-md hover:scale-102 flex items-center gap-1.5 cursor-pointer transition-transform"
            >
              <Plus className="w-4 h-4 text-white" />
              {t.adminAddBtn}
            </button>
          </div>
        )}

        {isAdmin && activeAdminView === 'dashboard' ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 select-none">
              <div className="bg-white text-neutral-dark border border-sand-dark/40 rounded-2xl p-4 flex flex-col justify-center text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-primary">
                  {items.filter(item => item.category !== 'Staff').length}
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mt-1">
                  {lang === 'en' ? 'Dishes & Drinks' : 'Món ăn & Đồ uống'}
                </span>
              </div>
              <div className="bg-white text-neutral-dark border border-sand-dark/40 rounded-2xl p-4 flex flex-col justify-center text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-tropical">
                  {items.filter(item => item.category === 'Staff').length}
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mt-1">
                  {lang === 'en' ? 'Crew Staff' : 'Nhân Sự Crew'}
                </span>
              </div>
              <div className="bg-white text-neutral-dark border border-sand-dark/40 rounded-2xl p-4 flex flex-col justify-center text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-green-600">
                  {items.filter(item => item.isVegetarian).length}
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mt-1">
                  {lang === 'en' ? 'Vegetarian🌿' : 'Món Chay🌿'}
                </span>
              </div>
              <div className="bg-white text-neutral-dark border border-sand-dark/40 rounded-2xl p-4 flex flex-col justify-center text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-orange-600">
                  {items.filter(item => item.isSpicy).length}
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mt-1">
                  {lang === 'en' ? 'Spicy Option🌶️' : 'Món Vị Cay🌶️'}
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 bg-white text-neutral-dark border border-sand-dark/40 rounded-2xl p-4 flex flex-col justify-center text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-yellow-600">
                  {items.filter(item => item.isSignature).length}
                </span>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mt-1">
                  {lang === 'en' ? 'Signatures 🌟' : 'Món Đặc Trưng 🌟'}
                </span>
              </div>
            </div>

            {/* Admin Sub Navigation Tabs to switch views */}
            <div className="flex justify-center select-none bg-sand/30 border border-sand-dark/20 p-1.5 rounded-2xl max-w-sm mx-auto">
              <button
                type="button"
                onClick={() => setDashboardSubTab('registry')}
                className={`flex-1 py-2 px-4 rounded-xl font-display font-bold text-[11px] tracking-wider uppercase transition-all duration-150 cursor-pointer text-center ${
                  dashboardSubTab === 'registry'
                    ? 'bg-neutral-dark text-white shadow-xs'
                    : 'text-[#7E786B] hover:text-neutral-dark hover:bg-white/50'
                }`}
              >
                📋 {lang === 'en' ? 'Item Registry' : 'Thực Đơn'}
              </button>
              <button
                type="button"
                id="admin-category-tab"
                onClick={() => setDashboardSubTab('categories')}
                className={`flex-1 py-2 px-4 rounded-xl font-display font-bold text-[11px] tracking-wider uppercase transition-all duration-150 cursor-pointer text-center ${
                  dashboardSubTab === 'categories'
                    ? 'bg-[#E3963E] text-white shadow-xs'
                    : 'text-[#7E786B] hover:text-neutral-dark hover:bg-white/50'
                }`}
              >
                📂 {lang === 'en' ? 'Category Setup' : 'Nhóm Món & Tab'}
              </button>
            </div>

            {dashboardSubTab === 'registry' ? (
              /* Dashboard Table/List */
              <div className="bg-white text-neutral-dark border border-sand-dark/50 rounded-2xl md:rounded-[2rem] shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-sand bg-sand/20 flex flex-wrap gap-4 items-center justify-between">
                  <h3 className="font-display font-black text-xs sm:text-sm text-neutral-dark uppercase tracking-widest flex items-center gap-1.5">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    {lang === 'en' ? 'Active Menu Registry' : 'Đăng Ký Danh Sách Thực Đơn'}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-muted font-bold uppercase">
                    {lang === 'en' ? `Total registered: ${items.length}` : `Tổng số lượng: ${items.length}`}
                  </span>
                </div>

                <div className="divide-y divide-sand max-h-[600px] overflow-y-auto custom-scrollbar">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center justify-between hover:bg-sand/10 transition-colors"
                    >
                      {/* Item graphic & titles */}
                      <div className="flex gap-4 items-center flex-1 min-w-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-2xl border border-sand shadow-sm shrink-0 font-sans text-[8px]"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=150&q=80';
                          }}
                        />
                        <div className="space-y-1.5 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display font-black text-sm sm:text-base text-neutral-dark truncate max-w-[200px] sm:max-w-xs uppercase">
                              {item.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-sand text-neutral-muted font-mono text-[9px] font-bold uppercase">
                              {getCategoryLabel(item.category)}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-neutral-dark text-neutral-light font-mono text-[9px] font-bold uppercase">
                              {item.menuType || 'bistro'}
                            </span>
                          </div>
                          <p className="font-sans text-xs text-neutral-muted line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end md:self-auto shrink-0 select-none">
                        <span className="font-mono text-xs sm:text-sm font-black text-neutral-dark">
                          {formatPrice(item.price, item.sizes)}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => handleOpenEdit(item, e)}
                            className="p-2 sm:p-2.5 bg-sand hover:bg-neutral-dark hover:text-white rounded-full transition-all cursor-pointer text-neutral-dark"
                            title={t.adminEditBtn}
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteClick(item.id, item.name, e)}
                            className="p-2 sm:p-2.5 bg-sand text-primary hover:bg-primary hover:text-white rounded-full transition-all cursor-pointer"
                            title={t.adminDeleteBtn}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Custom Category Workspace settings configuration */
              <div className="space-y-6 text-left">
                {/* Category Intro Block */}
                <div className="bg-[#FAF6F0] border border-sand-dark/40 rounded-3xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <FolderOpen className="w-40 h-40 text-neutral-dark" />
                  </div>
                  <div className="relative z-10 max-w-2xl space-y-2">
                    <span className="text-[10px] sm:text-xs font-mono font-black text-[#E3963E] uppercase tracking-widest block">
                      {lang === 'en' ? 'Dynamic Menu Structuring' : 'Cấu trúc thực đơn linh hoạt'}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-dark uppercase tracking-tight">
                      {lang === 'en' ? 'Category Placement & Tab Assignments' : 'Thiết Lập Vị Trí Nhóm Thực Đơn'}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-muted leading-relaxed">
                      {lang === 'en' 
                        ? 'Create custom category labels, edit existing ones, and map them to high-level public tabs. Easily re-categorize entire categories to change where dishes display on the main board.'
                        : 'Khởi tạo nhãn phân loại riêng, sủa đổi tiêu đề, hoặc gộp nhóm vào các Tab điều hướng bên phía khách hàng. Di chuyển toàn bộ danh sách một nhóm món lập tức.'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Category Creation Form */}
                  <div className="lg:col-span-4 bg-white border border-sand-dark/40 rounded-2xl p-5 sm:p-6 space-y-4">
                    <h4 className="font-display font-black text-xs text-neutral-dark uppercase tracking-widest border-b border-sand pb-3 flex items-center gap-1.5">
                      ✨ {lang === 'en' ? 'Create New Category' : 'Thêm Nhóm Tự Chọn'}
                    </h4>
                    
                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                          {lang === 'en' ? 'Category Name' : 'Tên Nhóm Mới'}
                        </label>
                        <input
                          type="text"
                          value={newCatName}
                          onChange={(e) => setNewCatName(e.target.value)}
                          placeholder="e.g. Snacks & Starters"
                          className="w-full px-3.5 py-2 rounded-xl border border-sand-dark bg-white text-xs focus:outline-none focus:border-primary text-neutral-dark font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                          {lang === 'en' ? 'Channel / Tab Section' : 'Bản Thể Thực Đơn'}
                        </label>
                        <select
                          value={newCatType}
                          onChange={(e) => {
                            const val = e.target.value as 'bistro' | 'cafe' | 'cocktail';
                            setNewCatType(val);
                            if (val === 'bistro') setNewCatMappedTab('Starters');
                            else if (val === 'cafe') setNewCatMappedTab('Coffee');
                            else setNewCatMappedTab('Spring');
                          }}
                          className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white text-xs focus:outline-none focus:border-primary text-neutral-dark font-sans font-semibold cursor-pointer"
                        >
                          <option value="bistro">🏡 Bistro Food</option>
                          <option value="cafe">☕ Cafe Beverages</option>
                          <option value="cocktail">🍸 Cocktail & Drinks</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                          {lang === 'en' ? 'Allocated Public Tab' : 'Tab Ánh Xạ Phân Phối'}
                        </label>
                        <select
                          value={newCatMappedTab}
                          onChange={(e) => setNewCatMappedTab(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white text-xs focus:outline-none focus:border-[#E3963E] text-neutral-dark font-sans font-semibold cursor-pointer"
                        >
                          {newCatType === 'bistro' && (
                            <>
                              <option value="Starters">🥗 Starters</option>
                              <option value="Salad & Sides">🍟 Salad & Sides</option>
                              <option value="Main Course">🍖 Main Course</option>
                              <option value="Dessert">🍰 Dessert</option>
                            </>
                          )}
                          {newCatType === 'cafe' && (
                            <>
                              <option value="Coffee">☕ Coffee</option>
                              <option value="Non-Coffee">🍹 Non-Coffee</option>
                              <option value="Pastries">🥐 Pastries</option>
                            </>
                          )}
                          {newCatType === 'cocktail' && (
                            <>
                              <option value="Spring">🌸 Spring</option>
                              <option value="Summer">☀️ Summer</option>
                              <option value="Autumn">🍁 Autumn</option>
                              <option value="Winter">❄️ Winter</option>
                            </>
                          )}
                        </select>
                      </div>

                      <button
                        type="button"
                        disabled={!newCatName.trim()}
                        onClick={() => {
                          const trimmed = newCatName.trim();
                          if (!trimmed) return;
                          if (customCategories.some(c => c.value.toLowerCase() === trimmed.toLowerCase())) {
                            alert(lang === 'en' ? 'This category name already exists!' : 'Tên danh mục này đã tồn tại!');
                            return;
                          }

                          const updatedCats = [...customCategories, { value: trimmed, menuType: newCatType }];
                          setCustomCategories(updatedCats);
                          localStorage.setItem('saime_custom_categories', JSON.stringify(updatedCats));

                          const updatedMapping = { ...categoryMapping, [trimmed]: newCatMappedTab };
                          setCategoryMapping(updatedMapping);
                          localStorage.setItem('saime_category_mapping', JSON.stringify(updatedMapping));

                          setNewCatName('');
                        }}
                        className="w-full py-2 bg-tropical hover:bg-tropical-dark disabled:bg-sand-dark disabled:text-neutral-muted text-white rounded-xl font-display font-bold text-xs tracking-wide shadow-xs transition-colors cursor-pointer"
                      >
                        ➕ {lang === 'en' ? 'Add Active Category' : 'Kích Hoạt Nhóm'}
                      </button>
                    </div>
                  </div>

                  {/* List of allocations */}
                  <div className="lg:col-span-8 bg-white border border-sand-dark/40 rounded-2xl p-5 sm:p-6 space-y-4">
                    <h4 className="font-display font-black text-xs text-neutral-dark uppercase tracking-widest border-b border-sand pb-3 flex items-center justify-between">
                      <span>📋 {lang === 'en' ? 'Active Group Allocations' : 'Các Nhóm Phân Loại Đang Kích Hoạt'}</span>
                      <span className="font-mono text-[9px] font-bold text-neutral-muted uppercase">
                        {lang === 'en' ? `${customCategories.length} categories` : `${customCategories.length} nhóm món`}
                      </span>
                    </h4>

                    <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
                      {customCategories.map((cat, idx) => {
                        const associatedItems = items.filter(item => item.category === cat.value);
                        const currentMappedValue = categoryMapping[cat.value] || cat.value;
                        const isEditingThis = editingCategoryValue === cat.value;

                        return (
                          <div key={`${cat.value}-${idx}`} className="p-3.5 bg-sand/15 border border-sand-dark/25 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-xs transition-shadow">
                            
                            {/* Title & info */}
                            <div className="space-y-1.5 flex-1 min-w-0">
                              {!isEditingThis ? (
                                <div className="flex items-center gap-2">
                                  <span className="font-display font-black text-sm text-neutral-dark uppercase tracking-tight">
                                    {cat.value}
                                  </span>
                                  <span className={`px-2 py-0.2 rounded font-mono text-[8px] font-bold uppercase ${
                                    cat.menuType === 'bistro' ? 'bg-primary/10 text-primary' : cat.menuType === 'cafe' ? 'bg-emerald-800/10 text-emerald-800' : 'bg-[#CCAA43]/10 text-[#CCAA43]'
                                  }`}>
                                    {cat.menuType}
                                  </span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={editingCategoryNewName}
                                    onChange={(e) => setEditingCategoryNewName(e.target.value)}
                                    className="px-2 py-1 text-xs border border-sand-dark rounded bg-white text-neutral-dark font-sans font-bold"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const nextName = editingCategoryNewName.trim();
                                      if (!nextName || nextName === cat.value) {
                                        setEditingCategoryValue(null);
                                        return;
                                      }
                                      
                                      // 1. Rename custom category in customCategories list
                                      const nextCats = customCategories.map(c => c.value === cat.value ? { ...c, value: nextName } : c);
                                      setCustomCategories(nextCats);
                                      localStorage.setItem('saime_custom_categories', JSON.stringify(nextCats));
                                      
                                      // 2. Rename custom category mapping key
                                      const nextMapping = { ...categoryMapping };
                                      const existingMapped = nextMapping[cat.value];
                                      delete nextMapping[cat.value];
                                      nextMapping[nextName] = existingMapped || nextName;
                                      setCategoryMapping(nextMapping);
                                      localStorage.setItem('saime_category_mapping', JSON.stringify(nextMapping));

                                      // 3. Rename custom category in items database
                                      items.forEach(item => {
                                        if (item.category === cat.value) {
                                          onEditItem({ ...item, category: nextName });
                                        }
                                      });

                                      setEditingCategoryValue(null);
                                    }}
                                    className="px-2 py-1 bg-green-600 text-white font-mono text-[9px] font-bold rounded hover:bg-green-700 cursor-pointer"
                                  >
                                    SAVE
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setEditingCategoryValue(null)}
                                    className="px-2 py-1 bg-sand border border-sand-dark/40 text-neutral-dark font-mono text-[9px] font-bold rounded hover:bg-neutral-light cursor-pointer"
                                  >
                                    CANCEL
                                  </button>
                                </div>
                              )}

                              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-sans text-[#7E786B]">
                                <span className="font-semibold text-neutral-dark font-mono bg-white px-1.5 py-0.5 rounded border border-sand-dark/20 text-[9px]">
                                  👜 {associatedItems.length} {lang === 'en' ? 'Dishes' : 'Món'}
                                </span>
                                {associatedItems.length > 0 && (
                                  <span className="italic max-w-[240px] truncate block opacity-80 text-[9px]">
                                    {associatedItems.map(i => i.name).join(', ')}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Dropdown positioner */}
                            <div className="flex items-center gap-2.5 self-end md:self-auto select-none">
                              <div className="space-y-0.5 text-right">
                                <span className="block text-[8px] font-mono font-bold text-[#E3963E] uppercase pr-1.5">
                                  👉 {lang === 'en' ? 'Category Placing Tab' : 'Nằm Ở Vùng'}
                                </span>
                                <select
                                  value={currentMappedValue}
                                  onChange={(e) => {
                                    const newVal = e.target.value;
                                    const updatedMapping = { ...categoryMapping, [cat.value]: newVal };
                                    setCategoryMapping(updatedMapping);
                                    localStorage.setItem('saime_category_mapping', JSON.stringify(updatedMapping));
                                  }}
                                  className="px-2 py-1 border border-sand-dark/40 rounded-lg bg-white text-[10px] font-mono font-bold text-neutral-dark focus:outline-none focus:border-tropical cursor-pointer"
                                >
                                  {cat.menuType === 'bistro' && (
                                    <>
                                      <option value="Starters">Starters / Khai Vị</option>
                                      <option value="Salad & Sides">Salad & Sides / Món Lèm</option>
                                      <option value="Main Course">Main Course / Món Chính</option>
                                      <option value="Dessert">Dessert / Tráng Miệng</option>
                                    </>
                                  )}
                                  {cat.menuType === 'cafe' && (
                                    <>
                                      <option value="Coffee">Coffee Specialties / Cà Phê</option>
                                      <option value="Non-Coffee">Non-Coffee / Thức Uống Khác</option>
                                      <option value="Pastries">Pastries / Bánh Ngọt</option>
                                    </>
                                  )}
                                  {cat.menuType === 'cocktail' && (
                                    <>
                                      <option value="Spring">Spring / Xuân</option>
                                      <option value="Summer">Summer / Hạ</option>
                                      <option value="Autumn">Autumn / Thu</option>
                                      <option value="Winter">Winter / Đông</option>
                                    </>
                                  )}
                                </select>
                              </div>

                              {/* Operations buttons */}
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingCategoryValue(cat.value);
                                    setEditingCategoryNewName(cat.value);
                                  }}
                                  className="p-1 px-1.5 bg-[#FAF6F0] hover:bg-neutral-dark hover:text-white text-[#7E786B] rounded text-[9px] cursor-pointer font-semibold transition-all border border-sand-dark/30"
                                  title="Rename Category"
                                >
                                  ✏️
                                </button>
                                
                                <button
                                  type="button"
                                  disabled={associatedItems.length > 0}
                                  onClick={() => {
                                    if (associatedItems.length > 0) return;
                                    if (!confirm(lang === 'en' ? `Are you sure you want to delete "${cat.value}"?` : `Bạn chắc chắn muốn xóa nhóm "${cat.value}"?`)) return;
                                    
                                    const updatedCats = customCategories.filter(c => c.value !== cat.value);
                                    setCustomCategories(updatedCats);
                                    localStorage.setItem('saime_custom_categories', JSON.stringify(updatedCats));

                                    const updatedMapping = { ...categoryMapping };
                                    delete updatedMapping[cat.value];
                                    setCategoryMapping(updatedMapping);
                                    localStorage.setItem('saime_category_mapping', JSON.stringify(updatedMapping));
                                  }}
                                  className={`p-1 px-1.5 rounded text-[9px] transition-all border ${
                                    associatedItems.length > 0
                                      ? 'bg-neutral-muted/5 text-neutral-muted/30 border-transparent cursor-not-allowed'
                                      : 'bg-primary/5 text-primary border-primary/25 hover:bg-primary hover:text-white cursor-pointer'
                                  }`}
                                  title={associatedItems.length > 0 ? "Cannot delete if it has dishes" : "Delete category"}
                                >
                                  🗑️
                                </button>
                              </div>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <>
            {/* Filter Controls Row */}
            <div id="menu-search-filters" className="mb-12">
              {/* Slider of Dynamic Category Tabs */}
              <div className="flex justify-start md:justify-center overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide select-none scroll-smooth">
                <div className="flex gap-2">
                  {categoryMap.map((cat) => {
                    const isActive = selectedCategory === cat.value;
                    return (
                      <button
                        key={cat.value}
                        id={`category-tab-${cat.value.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`whitespace-nowrap px-5 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide transition-all border cursor-pointer border-sand-dark/40 ${
                          isActive
                            ? `${theme.activeBtn} scale-103`
                            : currentMenuTab === 'cocktail'
                            ? 'bg-[#151518] text-[#ECE5D8]/80 border-white/5 hover:border-white/15'
                            : 'bg-white text-neutral-dark hover:border-neutral-muted/50 shadow-xs'
                        }`}
                      >
                        {lang === 'en' ? cat.labelEn : cat.labelVn}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Diet Preferences Toggles */}
              {selectedCategory !== 'Staff' && currentMenuTab === 'bistro' && (
                <div className="flex flex-wrap items-center justify-center gap-4 select-none">
                  <button
                    id="toggle-veg"
                    onClick={() => setVegetarianOnly(!vegetarianOnly)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-display font-semibold tracking-wide transition-all cursor-pointer ${
                      vegetarianOnly
                        ? 'bg-tropical text-white border-tropical shadow-md'
                        : currentMenuTab === 'cocktail'
                        ? 'bg-[#131316] text-[#B5AE9E] border-white/10'
                        : 'bg-white text-neutral-muted border-sand-dark hover:border-sand-dark-hover'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${vegetarianOnly ? 'fill-white' : 'text-tropical'}`} />
                    {t.vegetarianOnly}
                  </button>
                  <button
                    id="toggle-spicy"
                    onClick={() => setSpicyOnly(!spicyOnly)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-display font-semibold tracking-wide transition-all cursor-pointer ${
                      spicyOnly
                        ? 'bg-primary text-white border-primary shadow-md'
                        : currentMenuTab === 'cocktail'
                        ? 'bg-[#131316] text-[#B5AE9E] border-white/10'
                        : 'bg-white text-neutral-muted border-sand-dark'
                    }`}
                  >
                    <Flame className={`w-3.5 h-3.5 ${spicyOnly ? 'fill-white' : 'text-primary'}`} />
                    {t.spicyOnly}
                  </button>
                </div>
              )}
            </div>

            {/* Dishes / Staff Menu Grid */}
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                <motion.div
                  key="menu-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredItems.map((item) => (
                    <motion.div
                      initial={{ opacity: 0.9, scale: 0.99, y: 2 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0.9 }}
                      transition={{ duration: 0.12 }}
                      key={item.id}
                      id={`menu-item-card-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      className={`group overflow-hidden transition-all duration-300 cursor-pointer active:scale-98 flex flex-col h-full relative border-0 ${
                        currentMenuTab === 'cocktail'
                          ? item.isSignature
                            ? 'bg-gradient-to-br from-[#1d1b18] via-[#151518] to-[#121110] rounded-[2.2rem] border border-amber-500/40 hover:border-amber-400 shadow-[0_4px_25px_rgba(245,158,11,0.06)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.18)] scale-101'
                            : 'bg-[#151518] rounded-[2.2rem] border border-white/5 hover:border-amber-500/30'
                          : 'polycarbonate rounded-[2.5rem] hover:scale-[1.015] hover:shadow-2xl'
                      }`}
                    >
                      {/* Image wrapper */}
                      <div 
                        className={`w-full overflow-hidden relative bg-sand/30 ${item.cardAspect || 'aspect-[4/3]'}`}
                        style={item.imageHeight ? { height: `${item.imageHeight}px` } : undefined}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="eager"
                          style={{
                            height: item.imageHeight ? `${item.imageHeight}px` : '100%',
                            transform: `scale(${(item.imageScale ?? 100) / 100})${item.flipHorizontal ? ' scaleX(-1)' : ''}`,
                            objectPosition: `${50 + (item.imageXOffset ?? 0)}% ${50 + (item.imageYOffset ?? 0)}%`,
                          }}
                          className="w-full h-full object-cover shadow-inner transition-all duration-100 group-hover:brightness-95"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=150&q=80';
                          }}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/15 opacity-80 pointer-events-none" />

                        {/* Top indicators */}
                        <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none text-[9px] font-mono font-bold uppercase tracking-wider z-10">
                          {currentMenuTab === 'cocktail' && item.cocktailStyle ? (
                            <span className={`px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 font-bold ${
                              item.cocktailStyle === 'Signature'
                                ? 'bg-amber-400 text-black animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                                : item.cocktailStyle === 'Modern'
                                ? 'bg-purple-600 text-white'
                                : 'bg-slate-600 text-slate-100'
                            }`}>
                              <Sparkles className="w-2.5 h-2.5" />
                              {item.cocktailStyle === 'Signature' ? '★ Signature' : item.cocktailStyle === 'Modern' ? '✦ Modern' : '♦ Classic'}
                            </span>
                          ) : (
                            item.isSignature && (item.category as string) !== 'Staff' && (
                              <span className={`px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 font-bold ${theme.priceBg}`}>
                                <Sparkles className="w-2.5 h-2.5" />
                                Signature
                              </span>
                            )
                          )}
                          {item.isBestSeller && (item.category as string) !== 'Staff' && (
                            <span className="px-2.5 py-1 bg-amber-400 text-black rounded-full shadow-md flex items-center gap-0.5 font-black tracking-wide animate-pulse">
                              🔥 Best-Seller
                            </span>
                          )}
                          {item.isChefRecommend && (item.category as string) !== 'Staff' && (
                            <span className="px-2.5 py-1 bg-rose-500 text-white rounded-full shadow-md flex items-center gap-0.5 font-black tracking-wide">
                              👨‍🍳 Chef's Choice
                            </span>
                          )}
                          {(item.category as string) === 'Staff' && (
                            <span className="px-2.5 py-1 bg-neutral-dark text-white rounded-full shadow-sm">
                              {lang === 'en' ? 'Saime Crew' : 'Nhân Sự Crew'}
                            </span>
                          )}
                          {item.isVegetarian && (item.category as string) !== 'Staff' && (
                            <span className="px-2.5 py-1 bg-tropical text-white rounded-full shadow-sm">
                              🌿 Veg
                            </span>
                          )}
                          {item.isSpicy && (item.category as string) !== 'Staff' && (
                            <span className="px-2.5 py-1 bg-orange-600 text-white rounded-full shadow-sm">
                              🔥 Spicy
                            </span>
                          )}
                        </div>

                        {/* Bottom overlay price pill */}
                        <div className={`absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full font-mono font-black text-xs shadow-md tracking-wider z-10 ${theme.priceBg}`}>
                          {formatPrice(item.price, item.sizes)}
                        </div>
                      </div>

                      {/* Text details */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className={`text-base sm:text-lg transition-colors tracking-tight line-clamp-1 uppercase ${
                            currentMenuTab === 'cocktail'
                              ? 'text-[#F3EFE0] font-mono group-hover:text-amber-400'
                              : currentMenuTab === 'cafe'
                              ? 'text-[#2D332D] font-serif italic group-hover:text-emerald-800'
                              : 'text-neutral-dark group-hover:text-primary font-display font-black'
                          }`}>
                            {item.name}
                          </h3>
                          <p className={`font-sans text-xs leading-relaxed line-clamp-2 ${currentMenuTab === 'cocktail' ? 'text-neutral-400' : theme.subText}`}>
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom info row */}
                        {(item.category as string) !== 'Staff' ? (
                          <div className={`flex items-center justify-between pt-2.5 border-t ${currentMenuTab === 'cocktail' ? 'border-white/5' : 'border-sand-dark/40'}`}>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-muted">
                              <Info className="w-3.5 h-3.5 text-tropical" />
                              <span className={currentMenuTab === 'cocktail' ? 'text-neutral-400' : ''}>
                                {item.ingredients ? item.ingredients.length : 0} {t.ingredientsCount}
                              </span>
                            </div>
                            <span className={`text-[10px] sm:text-xs font-display font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5 ${theme.priceText}`}>
                              {t.viewDetails}
                              <ChevronRight className="w-3" />
                            </span>
                          </div>
                        ) : (
                          <div className={`flex items-center justify-between pt-2.5 border-t ${currentMenuTab === 'cocktail' ? 'border-white/5' : 'border-sand-dark/40'} select-none`}>
                            <span className="text-[9px] font-mono text-tropical font-bold uppercase tracking-wider">
                              {item.ingredients ? item.ingredients.slice(0, 2).join(' • ') : ''}
                            </span>
                            <span className="text-[10px] font-display font-medium text-neutral-muted">
                              {lang === 'en' ? 'Profile' : 'Hồ Sơ'}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Admin inline hover action block overlay */}
                      {isAdmin && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveResizerId(activeResizerId === item.id ? null : item.id);
                            }}
                            className={`p-2 border rounded-full transition-all cursor-pointer shadow-sm flex items-center justify-center ${
                              activeResizerId === item.id
                                ? 'bg-primary border-primary text-white scale-105'
                                : 'bg-neutral-light/95 dark:bg-neutral-dark/95 border-sand-dark/40 hover:bg-neutral-dark text-neutral-dark dark:text-neutral-light hover:text-white'
                            }`}
                            title={lang === 'en' ? 'Live Image Resizer' : 'Chỉnh Kích Thước'}
                          >
                            <span className="text-xs font-bold leading-none block select-none">📐</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={(e) => handleOpenEdit(item, e)}
                            className="p-2 bg-neutral-light/95 dark:bg-neutral-dark/95 border border-sand-dark/40 hover:bg-neutral-dark dark:hover:bg-neutral-light hover:text-white dark:hover:text-neutral-dark rounded-full transition-colors cursor-pointer shadow-sm text-neutral-dark dark:text-neutral-light"
                            title={t.adminEditBtn}
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Live Image Resizer Controls Accordion Section */}
                      {isAdmin && activeResizerId === item.id && (
                        <div 
                          onClick={(e) => e.stopPropagation()}
                          className="p-4 bg-[#FAF6F0] text-neutral-dark border-t border-sand-dark/60 flex flex-col gap-3.5 z-30 select-none animate-in slide-in-from-bottom"
                        >
                          <div className="flex items-center justify-between border-b border-sand-dark/40 pb-2">
                            <span className="text-[10px] font-display font-black text-neutral-dark uppercase tracking-widest flex items-center gap-1">
                              📐 Live Resizer Tool
                            </span>
                            <button 
                              type="button"
                              onClick={() => setActiveResizerId(null)}
                              className="text-[9px] font-mono font-bold bg-white hover:bg-primary hover:text-white px-2 py-0.5 rounded border border-sand-dark/60 text-neutral-dark cursor-pointer transition-colors"
                            >
                              Done
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            <button
                              type="button"
                              onClick={() => {
                                onEditItem({
                                  ...item,
                                  isBestSeller: !item.isBestSeller
                                });
                              }}
                              className={`px-2 py-1 rounded text-[9px] font-display font-black uppercase tracking-wider transition-all border cursor-pointer ${
                                item.isBestSeller 
                                  ? 'bg-amber-400 border-amber-500 text-black' 
                                  : 'bg-white border-sand-dark/40 text-neutral-muted hover:text-neutral-dark'
                              }`}
                            >
                              🔥 Best-Seller
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                onEditItem({
                                  ...item,
                                  isChefRecommend: !item.isChefRecommend
                                });
                              }}
                              className={`px-2 py-1 rounded text-[9px] font-display font-black uppercase tracking-wider transition-all border cursor-pointer ${
                                item.isChefRecommend 
                                  ? 'bg-rose-500 border-rose-600 text-white' 
                                  : 'bg-white border-sand-dark/40 text-neutral-muted hover:text-neutral-dark'
                              }`}
                            >
                              👨‍🍳 Chef Recommendation
                            </button>
                          </div>

                          {/* Height control slider */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-[9px] font-mono font-bold text-neutral-muted uppercase">
                              <span>Image Height</span>
                              <span>{item.imageHeight ? `${item.imageHeight}px` : 'Auto (Aspect Ratio)'}</span>
                            </div>
                            <input
                              type="range"
                              min={100}
                              max={420}
                              value={item.imageHeight || 200}
                              onChange={(e) => {
                                const val = parseInt(e.target.value);
                                onEditItem({
                                  ...item,
                                  imageHeight: val,
                                  cardAspect: undefined
                                });
                              }}
                              className="w-full accent-primary h-1 bg-sand-dark rounded-lg cursor-pointer"
                            />
                          </div>

                          {/* Zoom Scale control slider */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-[9px] font-mono font-bold text-neutral-muted uppercase">
                              <span>Zoom Scale</span>
                              <span>{item.imageScale ?? 100}%</span>
                            </div>
                            <input
                              type="range"
                              min={100}
                              max={300}
                              value={item.imageScale ?? 100}
                              onChange={(e) => {
                                const val = parseInt(e.target.value);
                                onEditItem({
                                  ...item,
                                  imageScale: val
                                });
                              }}
                              className="w-full accent-primary h-1 bg-sand-dark rounded-lg cursor-pointer"
                            />
                          </div>

                          {/* Pan X and Y controls sliders */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <div className="flex justify-between text-[8px] font-mono font-bold text-neutral-muted uppercase">
                                <span>Pan X Offset</span>
                                <span>{item.imageXOffset ?? 0}%</span>
                              </div>
                              <input
                                type="range"
                                min={-100}
                                max={100}
                                value={item.imageXOffset ?? 0}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value);
                                  onEditItem({
                                    ...item,
                                    imageXOffset: val
                                  });
                                }}
                                className="w-full accent-primary h-1 bg-sand-dark rounded-lg cursor-pointer"
                              />
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between text-[8px] font-mono font-bold text-[#7E786B] uppercase">
                                <span>Pan Y Offset</span>
                                <span>{item.imageYOffset ?? 0}%</span>
                              </div>
                              <input
                                type="range"
                                min={-100}
                                max={100}
                                value={item.imageYOffset ?? 0}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value);
                                  onEditItem({
                                    ...item,
                                    imageYOffset: val
                                  });
                                }}
                                className="w-full accent-primary h-1 bg-sand-dark rounded-lg cursor-pointer"
                              />
                            </div>
                          </div>

                          {/* Horizontal Flip Toggle */}
                          <div className="flex items-center justify-between pt-1 border-t border-sand-dark/20">
                            <span className="text-[8px] font-mono font-bold text-[#7E786B] uppercase">Flip Horizontally</span>
                            <button
                              type="button"
                              onClick={() => {
                                onEditItem({
                                  ...item,
                                  flipHorizontal: !item.flipHorizontal
                                });
                              }}
                              className={`text-[8px] font-mono font-bold px-2.5 py-0.5 rounded border transition-all cursor-pointer ${
                                item.flipHorizontal
                                  ? 'bg-tropical text-white border-tropical'
                                  : 'bg-white text-neutral-dark border-sand-dark/45 hover:bg-neutral-light'
                              }`}
                            >
                              {item.flipHorizontal ? 'ON' : 'OFF'}
                            </button>
                          </div>

                          {/* Aspect ratios selector */}
                          <div className="space-y-1 pt-1 border-t border-sand-dark/20">
                            <span className="block text-[8px] font-mono font-bold text-[#7E786B] uppercase">Aspect Ratio presets</span>
                            <div className="grid grid-cols-4 gap-1 text-[8px] font-mono font-bold text-center">
                              {[
                                { key: 'aspect-[4/3]', label: '4:3' },
                                { key: 'aspect-[16/9]', label: '16:9' },
                                { key: 'aspect-square', label: 'Square' },
                                { key: 'aspect-auto', label: 'None' },
                              ].map((ap) => (
                                <button
                                  key={ap.key}
                                  type="button"
                                  onClick={() => {
                                    onEditItem({
                                      ...item,
                                      cardAspect: ap.key,
                                      imageHeight: ap.key === 'aspect-auto' ? 240 : undefined
                                    });
                                  }}
                                  className={`py-1 rounded border cursor-pointer transition-colors ${
                                    item.cardAspect === ap.key || (ap.key === 'aspect-auto' && !item.cardAspect && item.imageHeight)
                                      ? 'bg-neutral-dark text-white border-neutral-dark'
                                      : 'bg-white text-neutral-dark border-sand-dark/45 hover:bg-neutral-dark hover:text-white'
                                  }`}
                                >
                                  {ap.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Empty matches state */
                <motion.div
                  key="menu-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`text-center py-16 px-4 rounded-[2.5rem] border border-dashed max-w-sm mx-auto ${currentMenuTab === 'cocktail' ? 'bg-[#151518] border-white/10' : 'bg-white border-sand-dark'}`}
                >
                  <AlertCircle className="w-9 h-9 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-base">{t.noDishesFound}</h3>
                  <p className="font-sans text-xs mt-1 leading-relaxed text-neutral-muted">
                    {t.noDishesDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      if (currentMenuTab === 'bistro') {
                        setSelectedCategory('Starters');
                      } else if (currentMenuTab === 'cafe') {
                        setSelectedCategory('Coffee');
                      } else {
                        setSelectedCategory('Cocktail');
                      }
                      setVegetarianOnly(false);
                      setSpicyOnly(false);
                    }}
                    className={`mt-5 px-5 py-2 rounded-full font-display text-xs font-bold tracking-wide cursor-pointer text-white bg-neutral-dark`}
                  >
                    {t.resetFilters}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Dynamic Dialog Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              id="menu-item-dialog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-dark/80 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white text-neutral-dark w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-sand max-h-[90vh] flex flex-col animate-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className={`relative overflow-hidden w-full bg-sand ${selectedItem.cardAspect || 'aspect-[16/10]'}`}
                  style={selectedItem.imageHeight ? { height: `${selectedItem.imageHeight}px` } : undefined}
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    style={{
                      height: selectedItem.imageHeight ? `${selectedItem.imageHeight}px` : '100%',
                      transform: `scale(${(selectedItem.imageScale ?? 100) / 100})${selectedItem.flipHorizontal ? ' scaleX(-1)' : ''}`,
                      objectPosition: `${50 + (selectedItem.imageXOffset ?? 0)}% ${50 + (selectedItem.imageYOffset ?? 0)}%`,
                    }}
                    className="w-full h-full object-cover font-sans text-[8px]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=150&q=80';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  
                  <button
                    id="dialog-close-btn"
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-5 left-6 right-6 text-white space-y-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-neutral-light text-neutral-dark font-mono text-[9px] font-bold uppercase tracking-wider rounded-md">
                        {getCategoryLabel(selectedItem.category)}
                      </span>
                      {selectedItem.isSignature && (selectedItem.category as string) !== 'Staff' && (
                        <span className="px-2.5 py-0.5 bg-primary text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-md">
                          Signature Item
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight">
                        {selectedItem.name}
                      </h3>
                      <span className="font-mono font-black text-sm text-primary-light whitespace-nowrap bg-black/40 px-3 py-1 rounded-full">
                        {formatPrice(selectedItem.price, selectedItem.sizes)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-16/10*40px)]">
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs text-tropical uppercase tracking-widest">
                      {(selectedItem.category as string) === 'Staff' ? (lang === 'en' ? 'Crew Mission / Role Story' : 'Sứ mệnh & Vai trò') : (lang === 'en' ? 'Flavor Profile / Chef Notes' : 'Hương Vị / Ghi Chú Của Bếp Trưởng')}
                    </h4>
                    <p className="font-sans text-neutral-dark text-xs sm:text-sm leading-relaxed font-normal">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Size Guide Grid if available */}
                  {selectedItem.sizes && Object.keys(selectedItem.sizes).length > 0 && (
                    <div className="space-y-3 p-4 bg-sand/30 rounded-2xl border border-sand/50">
                      <h4 className="font-display font-bold text-xs text-tropical uppercase tracking-widest flex items-center gap-1.5">
                        🥤 Size & Prices / Kích cỡ & Giá
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(selectedItem.sizes).map(([size, value]) => {
                          if (!value) return null;
                          return (
                            <div key={size} className="bg-white/90 border border-sand-dark/20 p-3 rounded-xl shadow-xs text-center flex flex-col justify-between">
                              <span className="font-display font-black text-[10px] text-neutral-dark block">
                                SIZE {size}
                              </span>
                              <span className="font-sans text-[9px] text-neutral-muted block mb-1">
                                {size === 'S' ? 'Small / Thường' : size === 'M' ? 'Medium / Vừa' : 'Large / Lớn'}
                              </span>
                              <span className="font-mono font-bold text-xs sm:text-sm text-primary">
                                {(value as number).toLocaleString('vi-VN')} ₫
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {selectedItem.ingredients && selectedItem.ingredients.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-xs text-neutral-muted uppercase tracking-widest">
                        {(selectedItem.category as string) === 'Staff' ? (lang === 'en' ? 'Areas of Specialty' : 'Thế mạnh đặc biệt') : (lang === 'en' ? 'Recipe Ingredients' : 'Thành phần nguyên liệu')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.ingredients.map((ing, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-sand/50 hover:bg-primary-light/30 border border-sand-dark/20 text-neutral-dark rounded-xl text-xs font-sans tracking-wide transition-colors"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-sand/30 rounded-2xl border border-sand/50 flex gap-3">
                    <div className="text-lg shrink-0 self-start mt-0.5">
                      ⭐️
                    </div>
                    <p className="font-sans text-[11px] text-neutral-muted leading-relaxed">
                      {(selectedItem.category as string) === 'Staff' 
                        ? (lang === 'en' ? 'Every member of our crew commits daily to bringing friends and newcomers together over warm plates, cold brews, and genuine hospitality.' : 'Nhân sự tại Saime luôn cống hiến để làm nổi bật tinh thần kết nối ấm cúng, tận tình, giúp mọi cuộc trò chuyện nở rộ quanh bàn ăn.')
                        : (lang === 'en' ? 'Prepared fresh daily with artisanal recipes and high-fat materials. Please speak to our staff about food allergies/sensitivities.' : 'Được chuẩn bị thủ công mới mỗi ngày. Vui lòng liên hệ nhân viên phục vụ nếu bạn có dị ứng hay hạn chế dinh dưỡng đặc biệt.')}
                    </p>
                  </div>

                </div>

                <div className="p-4 bg-sand/10 border-t border-sand/40 flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2 rounded-full bg-neutral-dark hover:bg-neutral-dark/95 text-white font-display text-xs font-bold tracking-wide"
                  >
                    {t.closeRecipe}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Create / Edit Modal for Admin Mode */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-dark/85 backdrop-blur-md">
            <div className="bg-white text-neutral-dark w-full max-w-xl rounded-[2.5rem] p-6 sm:p-8 border border-sand shadow-2xl max-h-[92vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-sand pb-4 mb-6">
                <h3 className="font-display font-black text-lg sm:text-xl text-neutral-dark uppercase tracking-tight">
                  {editingItem ? t.editItemModalTitle : t.addItemModalTitle}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="p-1.5 rounded-full hover:bg-sand text-neutral-dark cursor-pointer animate-in"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Menu Context Channels / Food Menu Section selection */}
                <div>
                  <label htmlFor="form-menu-type" className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                    Food Menu Section / Phân Khu Thực Đơn *
                  </label>
                  <select
                    id="form-menu-type"
                    value={formData.menuType}
                    onChange={(e) => {
                      const selectedType = e.target.value as 'bistro' | 'cafe' | 'cocktail';
                      const relevantCats = customCategories.filter(cat => cat.menuType === selectedType);
                      const defaultCat = relevantCats.length > 0
                        ? relevantCats[0].value
                        : (selectedType === 'bistro' ? 'Snacks & Starters' : selectedType === 'cafe' ? 'Specialty Coffee' : 'Spring');
                      
                      setFormData(f => ({
                        ...f,
                        menuType: selectedType,
                        category: defaultCat
                      }));
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans font-semibold cursor-pointer shadow-xs"
                  >
                    <option value="bistro">🏡 Bistro Food Menu (Đồ Ăn)</option>
                    <option value="cafe">☕ Cafe Beverages (Đồ Uống Cà Phê)</option>
                    <option value="cocktail">🍸 Cocktail Lounge (Nước Có Cồn / Cocktail)</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                    {t.fieldName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                    placeholder="E.g. Sizzling Meatballs or Bartender Quynh"
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category select */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                      {t.fieldCategory} *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(f => ({ ...f, category: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans font-semibold cursor-pointer"
                    >
                      {customCategories
                        .filter(cat => cat.menuType === formData.menuType)
                        .map(cat => (
                          <option key={cat.value} value={cat.value}>
                            {cat.value}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                      {t.fieldPrice}
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData(f => ({ ...f, price: Number(e.target.value) }))}
                      placeholder="e.g. 110000"
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-sm focus:outline-none focus:border-primary text-neutral-dark font-mono font-bold"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                    {t.fieldDescription}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData(f => ({ ...f, description: e.target.value }))}
                    placeholder="Enter the cozy story behind this menu item or crew profile..."
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-xs sm:text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans resize-none"
                  />
                </div>

                {/* Specialties / Ingredients */}
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                    {t.fieldIngredients}
                  </label>
                  <input
                    type="text"
                    value={formData.ingredients}
                    onChange={(e) => setFormData(f => ({ ...f, ingredients: e.target.value }))}
                    placeholder="Separated by commas, e.g. Pork, Garlic, Mint, Chili"
                    className="w-full px-4 py-2.5 rounded-xl border border-sand-dark bg-white text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans"
                  />
                </div>

                {/* Image Upload & Click File Selector Handler */}
                <div className="space-y-2">
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-1">
                    {t.fieldImage} *
                  </label>
                  
                  {/* Interactive Drag & Drop Box */}
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files?.[0];
                      if (file && file.type.startsWith('image/')) {
                        const reader = new FileReader();
                        reader.onload = async (uploadEvent) => {
                          if (uploadEvent.target?.result) {
                            const rawBase64 = uploadEvent.target.result as string;
                            const compressed = await compressAndResizeImage(rawBase64);
                            setFormData(f => ({ ...f, image: compressed }));
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="border-2 border-dashed border-sand-dark/60 hover:border-primary/50 transition-colors bg-sand/20 hover:bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer min-h-[110px] select-none relative"
                    onClick={() => {
                      document.getElementById('menu-file-upload')?.click();
                    }}
                  >
                    <input
                      id="menu-file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = async (uploadEvent) => {
                            if (uploadEvent.target?.result) {
                              const rawBase64 = uploadEvent.target.result as string;
                              const compressed = await compressAndResizeImage(rawBase64);
                              setFormData(f => ({ ...f, image: compressed }));
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    
                    {formData.image ? (
                      <div className="flex items-center gap-3 w-full">
                        <img 
                          src={formData.image} 
                          alt="Preview" 
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 rounded-xl object-cover border border-sand-dark/60 shadow-sm flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=150&q=80';
                          }}
                        />
                        <div className="text-left overflow-hidden">
                          <span className="block text-xs font-display font-extrabold text-[#22c55e]">
                            ✓ Image Loaded Successfully
                          </span>
                          <span className="block text-[10px] text-neutral-muted truncate max-w-[280px]">
                            {formData.image.startsWith('data:image') ? 'Uploaded Local Custom File' : formData.image}
                          </span>
                          <span className="block text-[9px] text-primary/70 font-mono tracking-wide mt-0.5">
                            Drag & Drop another file to change
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <span className="block text-xl">🖼️</span>
                        <span className="block text-xs font-display font-black text-neutral-dark">
                          {lang === 'en' ? 'Drag & Drop photo, or click to browse' : 'Kéo thả ảnh tại đây, hoặc click để tìm kiếm'}
                        </span>
                        <span className="block text-[9px] text-[#A39E93] font-mono tracking-wide">
                          Supports PNG, JPG, GIF & WEBP up to 5MB
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Direct Image URL input string fallback */}
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-muted uppercase mb-1">
                      Or paste an Unsplash link manually:
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData(f => ({ ...f, image: e.target.value }))}
                      placeholder="Paste Unsplash image URL or image web path"
                      className="w-full px-4 py-2 rounded-xl border border-sand-dark bg-white text-xs focus:outline-none focus:border-primary text-neutral-dark font-sans"
                    />
                  </div>

                  {/* Preset quick options */}
                  <div className="space-y-1 select-none pt-1">
                    <span className="block text-[10px] font-mono text-neutral-muted uppercase">
                      Quick Preset Ideas (Click to apply):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {presets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData(f => ({ ...f, image: preset.url }))}
                          className={`px-2 py-1 bg-sand border border-sand-dark text-[9px] font-mono rounded hover:bg-primary-light/50 font-bold ${
                            formData.image === preset.url ? 'bg-primary-light text-primary border-primary/40' : 'text-neutral-dark'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* LIVE CROP & LAYOUT RESIZER PREVIEW FOR COMMITTING CUSTOM IMAGES */}
                  {formData.image && (
                    <div id="image-crop-panel" className="mt-4 p-4 bg-sand/30 border border-sand-dark/50 rounded-2xl space-y-3.5">
                      <span className="block text-[10px] font-display font-black uppercase tracking-wider text-tropical flex items-center gap-1 leading-none select-none">
                        📐 Live Card Crop Resizer & Preview:
                      </span>

                      {/* Frame container */}
                      <div className="border border-sand-dark/60 rounded-xl overflow-hidden bg-white flex items-center justify-center relative shadow-sm">
                        <div 
                          className={`w-full overflow-hidden relative bg-sand/20 ${formData.cardAspect || 'aspect-[4/3]'}`}
                          style={formData.imageHeight ? { height: `${formData.imageHeight}px` } : undefined}
                        >
                          <img
                            src={formData.image}
                            alt="Cropping Preview"
                            style={{
                              height: formData.imageHeight ? `${formData.imageHeight}px` : '100%',
                              transform: `scale(${(formData.imageScale ?? 100) / 100})${formData.flipHorizontal ? ' scaleX(-1)' : ''}`,
                              objectPosition: `${50 + (formData.imageXOffset ?? 0)}% ${50 + (formData.imageYOffset ?? 0)}%`,
                            }}
                            className="w-full h-full object-cover transition-all duration-75"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=150&q=80';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-neutral-dark/85 text-white font-mono text-[8px] px-2 py-0.5 rounded uppercase font-bold select-none leading-none">
                            Main Menu Layout Aspect Grid
                          </div>
                        </div>
                      </div>

                      {/* Aspect ratios */}
                      <div className="space-y-1 select-none">
                        <label className="block text-[9px] font-mono font-bold text-neutral-muted uppercase">Aspect Frame Limit / Khung hiển thị:</label>
                        <div className="flex flex-wrap gap-1">
                          {[
                            { label: '4:3 Standard', key: 'aspect-[4/3]', hasHeight: false },
                            { label: '16:9 Wide', key: 'aspect-[16/9]', hasHeight: false },
                            { label: '1:1 Square', key: 'aspect-square', hasHeight: false },
                            { label: '3:4 Tall', key: 'aspect-[3/4]', hasHeight: false },
                            { label: 'Custom Height (px)', key: 'aspect-auto', hasHeight: true }
                          ].map((ap) => {
                            const isActive = ap.hasHeight ? formData.imageHeight !== undefined : formData.cardAspect === ap.key && formData.imageHeight === undefined;
                            return (
                              <button
                                key={ap.key}
                                type="button"
                                onClick={() => {
                                  setFormData(f => ({
                                    ...f,
                                    cardAspect: ap.hasHeight ? undefined : ap.key,
                                    imageHeight: ap.hasHeight ? (f.imageHeight || 200) : undefined
                                  }));
                                }}
                                className={`px-2 py-1 border text-[9px] font-display font-black rounded cursor-pointer transition-colors ${
                                  isActive 
                                    ? 'bg-tropical text-white border-tropical' 
                                    : 'bg-white hover:bg-sand text-neutral-dark border-sand-dark'
                                }`}
                              >
                                {ap.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {formData.imageHeight !== undefined && (
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-muted">
                            <span>Image Container Height:</span>
                            <span className="font-extrabold text-neutral-dark">{formData.imageHeight}px</span>
                          </div>
                          <input
                            type="range"
                            min={115}
                            max={320}
                            step={5}
                            value={formData.imageHeight}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setFormData(f => ({ ...f, imageHeight: val, cardAspect: undefined }));
                            }}
                            className="w-full h-1 bg-sand border-transparent rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>
                      )}

                      {/* Scale zoom */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-mono text-neutral-muted">
                          <span>Image Zoom Scale:</span>
                          <span className="font-extrabold text-neutral-dark">{formData.imageScale}%</span>
                        </div>
                        <input
                          type="range"
                          min={100}
                          max={260}
                          step={2}
                          value={formData.imageScale}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setFormData(f => ({ ...f, imageScale: val }));
                          }}
                          className="w-full h-1 bg-sand border-transparent rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>

                      {/* Centering / Pan X, Y slider limits */}
                      <div className="grid grid-cols-2 gap-3.5 select-none">
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-muted">
                            <span>Pan Horiz (X):</span>
                            <span className="font-extrabold text-neutral-dark">{formData.imageXOffset}%</span>
                          </div>
                          <input
                            type="range"
                            min={-65}
                            max={65}
                            step={1}
                            value={formData.imageXOffset}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setFormData(f => ({ ...f, imageXOffset: val }));
                            }}
                            className="w-full h-1 bg-sand border-transparent rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-muted">
                            <span>Pan Vert (Y):</span>
                            <span className="font-extrabold text-neutral-dark">{formData.imageYOffset}%</span>
                          </div>
                          <input
                            type="range"
                            min={-65}
                            max={65}
                            step={1}
                            value={formData.imageYOffset}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setFormData(f => ({ ...f, imageYOffset: val }));
                            }}
                            className="w-full h-1 bg-sand border-transparent rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                        </div>
                      </div>

                      {/* Horizontal Flip option in form */}
                      <div className="flex items-center justify-between p-2.5 bg-white/50 border border-sand-dark/20 rounded-xl select-none">
                        <span className="text-[10px] font-mono text-neutral-muted uppercase">Mirror / Flip Horizontally:</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setFormData(f => ({ ...f, flipHorizontal: !f.flipHorizontal }))}
                            className={`px-3 py-1 text-[10px] font-mono font-bold rounded-lg border transition-all cursor-pointer ${
                              formData.flipHorizontal
                                ? 'bg-tropical text-white border-tropical shadow-xs'
                                : 'bg-white text-neutral-dark border-sand-dark/30 hover:bg-neutral-light'
                            }`}
                          >
                            {formData.flipHorizontal ? '🎉 FLIPPED / ĐÃ QUAY' : 'NORMAL / THƯỜNG'}
                          </button>
                        </div>
                      </div>

                      {/* Quick reset inside crop panel */}
                      <div className="flex justify-end pt-1 select-none">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(f => ({
                              ...f,
                              imageHeight: undefined,
                              imageScale: 100,
                              imageXOffset: 0,
                              imageYOffset: 0,
                              cardAspect: 'aspect-[4/3]',
                              flipHorizontal: false
                            }));
                          }}
                          className="text-[9px] font-mono font-bold text-primary hover:underline cursor-pointer"
                        >
                          ✕ Reset Crop Settings
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Checkboxes row */}
                {formData.category !== 'Staff' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-sand select-none">
                    <label className="flex items-center gap-2 px-3 py-2 bg-sand/30 border border-sand-dark/20 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isVegetarian}
                        onChange={(e) => setFormData(f => ({ ...f, isVegetarian: e.target.checked }))}
                        className="accent-tropical h-4 w-4"
                      />
                      <span className="text-[10px] font-display font-bold text-neutral-dark">Veg 🌿</span>
                    </label>

                    <label className="flex items-center gap-2 px-3 py-2 bg-sand/30 border border-sand-dark/20 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isSpicy}
                        onChange={(e) => setFormData(f => ({ ...f, isSpicy: e.target.checked }))}
                        className="accent-primary h-4 w-4"
                      />
                      <span className="text-[10px] font-display font-bold text-neutral-dark">Spicy 🔥</span>
                    </label>

                    <label className="flex items-center gap-2 px-3 py-2 bg-sand/30 border border-sand-dark/20 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isSignature}
                        onChange={(e) => setFormData(f => ({ ...f, isSignature: e.target.checked }))}
                        className="accent-primary h-4 w-4"
                      />
                      <span className="text-[10px] font-display font-bold text-neutral-dark">Featured ⭐</span>
                    </label>

                    <label className="flex items-center gap-2 px-3 py-2 bg-amber-100/45 border border-amber-300 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isBestSeller}
                        onChange={(e) => setFormData(f => ({ ...f, isBestSeller: e.target.checked }))}
                        className="accent-amber-500 h-4 w-4 shadow-xs"
                      />
                      <span className="text-[10px] font-display font-bold text-neutral-dark">Best-Seller 🔥</span>
                    </label>

                    <label className="flex items-center gap-2 px-3 py-2 bg-rose-100/45 border border-rose-300 rounded-xl cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isChefRecommend}
                        onChange={(e) => setFormData(f => ({ ...f, isChefRecommend: e.target.checked }))}
                        className="accent-rose-500 h-4 w-4 shadow-xs"
                      />
                      <span className="text-[10px] font-display font-bold text-neutral-dark">Chef's Spec 👨‍🍳</span>
                    </label>
                  </div>
                )}

                {/* Action Row */}
                <div className="flex justify-end gap-3 pt-4 border-t border-sand select-none">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-sand/50 hover:bg-sand text-neutral-dark font-display font-bold text-xs"
                  >
                    {t.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-xs shadow-md"
                  >
                    {t.btnSave}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
