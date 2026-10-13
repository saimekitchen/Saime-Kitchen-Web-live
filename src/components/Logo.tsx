import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  brandName?: string;
  brandTagline?: string;
  size?: number | string;
  variant?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  brandName = 'Saime Introverts',
  brandTagline = 'Hoi An • Food Lab & Cocktail Experience',
}) => {
  return (
    <div className={`flex items-center gap-2 min-w-0 ${className}`}>
      {/* Brand Text Details */}
      {showText && (
        <div className="text-left min-w-0">
          <span className="font-display font-dm-sans text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-[#e63946] transition-colors block leading-tight truncate">
            {brandName}
          </span>
          <span className="block text-[9px] sm:text-[11px] font-normal text-white/50 group-hover:text-[#e63946] transition-colors truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
            {brandTagline}
          </span>
        </div>
      )}
    </div>
  );
};
