import React from 'react';
import { Phone, Instagram, Navigation } from 'lucide-react';
import { Language } from '../types';

interface MobileStickyDirectionsBarProps {
  currentLang: Language;
  onOpenReservation?: () => void;
}

export const MobileStickyDirectionsBar: React.FC<MobileStickyDirectionsBarProps> = ({
  currentLang,
}) => {
  const isVi = currentLang === 'vi';

  const googleMapsDirectionsUrl = 'https://maps.app.goo.gl/ThxTTj1xBnQnfBCfA';

  return (
    <aside
      aria-label="Saime Introverts Mobile Quick Navigation"
      id="mobile-sticky-directions-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-2 pointer-events-none font-sans"
    >
      <div className="max-w-md mx-auto pointer-events-auto bg-[#14151a]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] flex items-center justify-between gap-2">
        
        {/* Left Quick Contact Actions: Call & Instagram */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Call */}
          <a
            href="tel:+84964023683"
            aria-label="Call Saime Introverts"
            id="mobile-sticky-call-btn"
            className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 text-white/90 hover:text-white transition-all border border-white/10 flex items-center justify-center"
            title="Call (+84) 964 023 683"
          >
            <Phone className="w-4 h-4 text-white/90" strokeWidth={1.75} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/saime.introverts_fusion/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saime Introverts Instagram"
            id="mobile-sticky-instagram-btn"
            className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 text-white/90 hover:text-white transition-all border border-white/10 flex items-center justify-center"
            title="Instagram @saime.introverts_fusion"
          >
            <Instagram className="w-4 h-4 text-white/90" strokeWidth={1.75} />
          </a>
        </div>

        {/* Primary CTA: High-Contrast Directions Button */}
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-directions-btn"
          className="flex-1 h-10 px-4 rounded-xl bg-[#e63946] hover:bg-[#d62839] active:scale-[0.98] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_4px_16px_rgba(230,57,70,0.35)] flex items-center justify-center gap-2 whitespace-nowrap border border-white/10"
        >
          <Navigation className="w-3.5 h-3.5 fill-current shrink-0" />
          <span className="truncate">{isVi ? 'Chỉ Đường Google Maps' : 'Get Directions'}</span>
        </a>
      </div>
    </aside>
  );
};
