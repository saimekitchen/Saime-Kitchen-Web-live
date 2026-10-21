import React from 'react';
import { ActivePage, Language } from '../types';
import { translations } from '../utils/i18n';
import { Logo } from './Logo';

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
  onOpenReservation: () => void;
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onPageChange,
  onOpenReservation,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="w-full max-w-full border-t border-white/10 bg-[#0d0e12] text-white/80 py-12 pb-24 sm:py-16 sm:pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* Top Manifesto Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-10 sm:pb-12">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#e63946] uppercase">
              {t.footerManifestoTag}
            </span>
            <h3 className="font-display font-dm-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.footerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-lg">
              {t.footerManifestoDesc}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="/food"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('food');
              }}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e63946]/50 cursor-pointer transition-all group block no-underline text-inherit"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#e63946] uppercase mb-2">
                <span>01</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors">
                {t.footerFoodCardTitle}
              </h4>
              <p className="text-[11px] text-white/60 font-normal mt-1 line-clamp-2">
                {t.footerFoodCardDesc}
              </p>
            </a>

            <a
              href="/cocktails"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('cocktail');
              }}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e63946]/50 cursor-pointer transition-all group block no-underline text-inherit"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#e63946] uppercase mb-2">
                <span>02</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors">
                {t.footerCocktailCardTitle}
              </h4>
              <p className="text-[11px] text-white/60 font-normal mt-1 line-clamp-2">
                {t.footerCocktailCardDesc}
              </p>
            </a>

            <a
              href="/articles/top-8-fine-dining-fusion-hoi-an"
              onClick={(e) => {
                e.preventDefault();
                onPageChange('articles');
              }}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e63946]/50 cursor-pointer transition-all group block no-underline text-inherit"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#e63946] uppercase mb-2">
                <span>03</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
              <h4 className="font-display font-dm-sans text-sm sm:text-base font-bold text-white group-hover:text-[#e63946] transition-colors">
                {currentLang === 'vi' ? 'Top 8 Nhà Hàng Hội An' : 'Top 8 Dining Guide'}
              </h4>
              <p className="text-[11px] text-white/60 font-normal mt-1 line-clamp-2">
                {currentLang === 'vi' ? 'Khám phá ẩm thực fine dining & fusion đặc sắc nhất Hội An' : 'Curated fine dining & fusion guide updated 10/2026'}
              </p>
            </a>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold text-[#e63946] tracking-wider lowercase italic flex items-center justify-center sm:justify-start gap-1.5">
              <span>✦</span>
              <span>try something new? try saime</span>
            </div>
            <h4 className="font-display font-dm-sans text-lg sm:text-xl font-bold text-white">
              {t.footerJoinUsTitle}
            </h4>
            <p className="text-xs text-white/60">
              {t.footerJoinUsDesc}
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#e63946] hover:bg-[#d62839] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0"
            id="footer-reserve-btn"
          >
            {t.footerReserveBtn}
          </button>
        </div>

        {/* Clean Structured 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* 1. Location */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] font-semibold text-[#e63946] uppercase tracking-wider block mb-1">
                {t.footerWhereToFind}
              </span>
              <h5 className="font-display font-dm-sans text-base sm:text-lg font-bold text-white">
                {t.footerLocationTitle}
              </h5>
            </div>

            <div className="text-xs text-white/80 space-y-1 leading-relaxed">
              <p className="font-semibold text-white text-xs sm:text-sm">{t.footerAddress1}</p>
              <p>{t.footerAddress2}</p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50">{t.footerParkingHint}</span>
              <a
                href="https://maps.app.goo.gl/ThxTTj1xBnQnfBCfA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e63946] hover:underline font-semibold shrink-0"
              >
                {currentLang === 'vi' ? 'Chỉ đường →' : 'Directions →'}
              </a>
            </div>
          </div>

          {/* 2. Opening Hours */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold text-[#e63946] uppercase tracking-wider block mb-1">
                  {t.footerServiceSchedule}
                </span>
                <h5 className="font-display font-dm-sans text-base sm:text-lg font-bold text-white">
                  {t.footerHoursTitle}
                </h5>
              </div>
              <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#e63946]/20 border border-[#e63946]/30 text-[10px] font-bold text-[#e63946]">
                {t.footerOpenBadge}
              </span>
            </div>

            <div className="text-xs text-white/80 space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-white/60">{t.footerTuesThurs}</span>
                <span className="font-medium text-white text-right">3:00 PM – 11:00 PM</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                <span className="text-white/60">{t.footerFriSun}</span>
                <span className="font-medium text-white text-right">3:00 PM – 11:30 PM</span>
              </div>
              <div className="flex items-center justify-between pt-1.5 p-2 rounded-xl bg-[#e63946]/10 border border-[#e63946]/20">
                <span className="font-semibold text-white/90">{t.footerMonday}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#e63946]/25 text-[10px] sm:text-[11px] font-bold text-[#e63946]">
                  {t.footerMondayStatus}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Direct Contact */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] font-semibold text-[#e63946] uppercase tracking-wider block mb-1">
                {t.footerSayHello}
              </span>
              <h5 className="font-display font-dm-sans text-base sm:text-lg font-bold text-white">
                {t.footerContactTitle}
              </h5>
            </div>

            <div className="text-xs text-white/80 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/60 shrink-0">Phone / Zalo</span>
                <a href="tel:+84964023683" className="font-medium text-white hover:text-[#e63946] transition-colors truncate">
                  (+84) 964 023 683
                </a>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/60 shrink-0">Email</span>
                <a href="mailto:admin@saimekb.com" className="font-medium text-white hover:text-[#e63946] transition-colors truncate">
                  admin@saimekb.com
                </a>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/60 shrink-0">Instagram</span>
                <a 
                  href="https://www.instagram.com/saime.introverts_fusion/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-white hover:text-[#e63946] transition-colors truncate"
                >
                  @saime.introverts_fusion
                </a>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/60 shrink-0">Facebook</span>
                <a 
                  href="https://www.facebook.com/profile.php?id=61589897489896" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-white hover:text-[#e63946] transition-colors truncate"
                >
                  Saime Introverts
                </a>
              </div>
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
                <span className="text-white/60 shrink-0">Messenger</span>
                <a 
                  href="https://www.facebook.com/messages/t/1121358051063119" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-[#e63946] hover:underline transition-all truncate"
                >
                  messages/t/1121358051063119
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 text-[10px] sm:text-[11px] text-white/50">
              {t.footerWalkInHint}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Tagline */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Logo size={28} showText={false} variant="icon-only" />
            <div>
              &copy; 2026 {t.brandName}. {t.footerRights}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span>{t.brandTagline}</span>
            <span>•</span>
            <span>{t.footerCity}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
