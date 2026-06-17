import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, Heart, Sparkles } from 'lucide-react';
import { translations } from '../translations';
import LogoIcon from './LogoIcon';

interface FooterProps {
  lang: 'en' | 'vn';
  onNavigate: (section: 'hero' | 'menu' | 'reservation' | 'community' | 'tasting') => void;
}

export default function Footer({ lang, onNavigate }: FooterProps) {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [currentHourText, setCurrentHourText] = useState<string>('');

  const t = translations[lang];

  // Check restaurant status based on current simulated time 08:00 - 24:00 (8 AM to Midnight)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, ..., 5 = Friday, 6 = Saturday
      const hours = now.getHours();
      
      const isWeekendSchedule = day === 5 || day === 6; // Friday & Saturday
      const closeHour = isWeekendSchedule ? 24 : 23;
      
      if (hours >= 8 && hours < closeHour) {
        setIsOpenNow(true);
        setCurrentHourText(
          lang === 'en' 
            ? `Active Now / Closes at ${closeHour === 24 ? '12:00 AM' : '11:00 PM'}` 
            : `Đang Mở Cửa / Đóng Cửa Lúc ${closeHour === 24 ? '00:00' : '23:00'}`
        );
      } else {
        setIsOpenNow(false);
        setCurrentHourText(lang === 'en' ? 'Closed / Reopening at 8:00 AM' : 'Đóng Cửa / Mở Lại Lúc 08:00');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, [lang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-neutral-dark text-neutral-light border-t border-sand-dark/10">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Brand Story (5 columns on desktop) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5 select-none">
              <LogoIcon size={36} className="text-primary" />
              <span className="font-logo text-xl text-white">
                Saime <span className="text-primary">Kitchen & Bar</span>
              </span>
            </div>
            
            <p className="font-sans text-white/95 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {lang === 'en' 
                ? 'A vibrant neighborhood spot in the heart of Hoi An. We celebrate shared communal tables, warm artisan coffee, hand-crafted cocktails, and flavorful comfort food.' 
                : 'Điểm hẹn gắn kết ấm cúng tại trung tâm Hội An cổ kính. Chúng tôi trân trọng và lưu giữ những trải nghiệm chia sẻ quanh chiếc bàn dài, ly cà phê thủ công, ly cocktail thảo mộc và các đĩa đồ ăn tinh tế.'}
            </p>

            {/* Current Open Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 select-none">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                {currentHourText}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 columns on desktop) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-neutral-light text-xs uppercase tracking-widest border-b border-white/10 pb-2">
              {lang === 'en' ? 'Explore Saime' : 'Khám Phá Saime'}
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm font-display font-semibold select-none">
              <button
                onClick={() => onNavigate('hero')}
                className="text-left text-white hover:text-primary transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Our Story' : 'Câu Chuyện Saime'}
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="text-left text-white hover:text-primary transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Food & Drink Menu' : 'Thực Đơn Hấp Dẫn'}
              </button>
              <button
                onClick={() => onNavigate('tasting')}
                className="text-left text-white hover:text-primary transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Tasting Sessions' : 'Gói Trải Nghiệm Thử'}
              </button>
              <button
                onClick={() => onNavigate('reservation')}
                className="text-left text-white hover:text-primary transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Book a Spot' : 'Đặt Trước Chỗ'}
              </button>
              <button
                onClick={() => onNavigate('community')}
                className="text-left text-white hover:text-primary transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Belonging Board' : 'Lưu Bút Gặp Gỡ'}
              </button>
            </div>
          </div>

          {/* Column 3: Contact & Hours (4 columns on desktop) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-neutral-light text-xs uppercase tracking-widest border-b border-white/10 pb-2">
              {lang === 'en' ? 'Gathering Hours' : 'Thời Gian & Địa Điểm'}
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-light font-medium">
              <div className="flex gap-2.5 animate-in">
                <MapPin className="w-4 h-4 text-tropical shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Saime+Kitchen+%26+Bar+144+Ly+Thai+To+Hoi+An"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors not-italic leading-relaxed underline decoration-dotted underline-offset-4"
                  title={lang === 'en' ? 'Open in Google Maps' : 'Mở trong Google Maps'}
                >
                  <address className="not-italic cursor-pointer">
                    {lang === 'en' 
                      ? '144 Ly Thai To, Hoi An' 
                      : '144 Lý Thái Tổ, Hội An'}
                  </address>
                </a>
              </div>

              <div className="flex gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{lang === 'en' ? 'Daily 8 AM - 11 PM (Fri & Sat till 12 AM)' : 'Mỗi ngày 08:00 - 23:00 (T6 & T7 tới 00:00)'}</span>
              </div>

              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+84389446975" className="hover:text-primary transition-colors font-mono">
                  +84 389 446 975
                </a>
              </div>

              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-tropical shrink-0" />
                <a href="mailto:admin@saimekb.com" className="hover:text-primary transition-colors font-mono">
                  admin@saimekb.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer Segment */}
      <div className="border-t border-white/10 bg-black/30 py-8 text-neutral-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-1.5 text-xs font-mono select-none">
            <span>© 2026 Saime Kitchen & Bar.</span>
            <span>•</span>
            <span className="flex items-center text-primary gap-0.5 font-sans">
              Made with <Heart className="w-3 h-3 fill-primary text-primary" /> for Foodies
            </span>
          </div>

          {/* Socials & Back to Top triggers */}
          <div className="flex items-center gap-4 select-none">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 hover:bg-primary/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Instagram Page"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 hover:bg-primary/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 hover:bg-primary/20 text-white rounded-full transition-colors cursor-pointer flex items-center justify-center"
              aria-label="TikTok Page"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.22-.44-.45-.63-.7-.01 2.05-.01 4.11-.01 6.16 0 1.54-.31 3.14-1.12 4.46-1.15 1.98-3.32 3.32-5.61 3.49-1.99.18-4.14-.35-5.63-1.75-1.92-1.72-2.58-4.66-1.56-7.07.82-1.99 2.76-3.48 4.9-3.76.21-.03.43-.04.64-.05v4.06c-1.1.26-2.11 1.09-2.38 2.24-.39 1.56.49 3.33 2.01 3.79 1.15.35 2.5-.04 3.17-1.02.44-.64.55-1.44.53-2.22.02-3.83.01-7.66.01-11.49z"/>
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 bg-neutral-light text-neutral-dark rounded-full font-mono text-[10px] font-bold hover:bg-primary hover:text-white transition-all cursor-pointer flex items-center gap-1 uppercase"
              title="Go up"
            >
              Top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
