import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink, QrCode, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

export default function Footer({ lang, onNavigate }: FooterProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=be123c&data=${encodeURIComponent(window.location.origin || 'https://saimekb.com')}`;

  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-32 border-t border-white/5 relative overflow-hidden select-none">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-rose-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid layout for Footer info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Bento Card 1: Brand & Highly Obvious, Bold Address Block */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/15 transition-all">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full font-mono text-[9px] uppercase font-bold tracking-wider">
                {lang === 'en' ? 'OUR OASIS LOCATION' : 'ĐỊA CHỈ QUÁN'}
              </span>
              
              <div className="space-y-2">
                <h3 className="font-logo text-2xl sm:text-3xl text-white font-black tracking-tight leading-none">
                  Saime <span className="text-rose-500">Kitchen & Bar</span>
                </h3>
                <p className="text-white/60 font-sans text-xs max-w-lg">
                  {lang === 'en' 
                    ? 'A secret garden gathering spot in Hoi An. We unite fresh nourishing bowls, artisan slow-drips, chess tournaments, board games, and movie nights under the stars.'
                    : 'Góc vườn yên bình giữa lòng phố cổ Hội An. Nơi tụ họp thưởng thức đĩa lành dinh dưỡng, cà phê phin mộc mạc, các ván cờ kỳ thú, trò chơi và những thước phim kinh điển.'}
                </p>
              </div>

              {/* Extremely Obvious Address Display */}
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mt-4 space-y-3 shadow-inner">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-sans text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      {lang === 'en' ? 'SAIME STREET ADDRESS' : 'ĐỊA CHỈ CHÍNH THỨC'}
                    </span>
                    <p className="font-sans font-black text-white text-base sm:text-lg leading-snug tracking-tight">
                      144 Ly Thai To, Hoi An
                    </p>
                    <span className="inline-block font-sans font-bold text-xs text-rose-400">
                      (Saime Kitchen & Bar)
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Saime+Kitchen+%26+Bar+144+Ly+Thai+To+Hoi+An"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs rounded-full shadow-md shadow-rose-900/20 hover:shadow-rose-900/30 transition-all hover:scale-[1.01]"
                  >
                    <span>{lang === 'en' ? 'Open in Google Maps' : 'Dẫn đường trên Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-white/40 font-mono text-[10px]">
              © {new Date().getFullYear()} Saime Kitchen & Bar. All rights reserved.
            </p>
          </div>

          {/* Bento Card 2: Contact & Operating Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact & Hours card */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex flex-col justify-between flex-1 space-y-4 hover:border-white/15 transition-all">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full font-mono text-[9px] uppercase font-bold tracking-wider">
                  {lang === 'en' ? 'HOURS & INQUIRIES' : 'GIỜ MỞ CỬA & LIÊN HỆ'}
                </span>
                
                <div className="space-y-4 font-sans">
                  {/* Hours */}
                  <div className="flex items-center gap-3 text-white/90">
                    <Clock className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 leading-none mb-1">
                        {lang === 'en' ? 'DAILY OPEN HOURS' : 'GIỜ HOẠT ĐỘNG'}
                      </p>
                      <p className="text-sm font-extrabold text-white">
                        8:00 AM - 11:00 PM
                      </p>
                      <p className="text-[10px] text-white/50">
                        {lang === 'en' ? 'Friday & Saturday open till 12:00 AM midnight' : 'Thứ Sáu & Thứ Bảy mở cửa tới 00:00 khuya'}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-white/90">
                    <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 leading-none mb-1">
                        {lang === 'en' ? 'RESERVATIONS & CALLS' : 'ĐIỆN THOẠI ĐẶT BÀN'}
                      </p>
                      <a href="tel:+84389446975" className="text-sm font-extrabold text-white hover:text-emerald-400 transition-colors">
                        +84 389 446 975
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 text-white/90">
                    <Mail className="w-4.5 h-4.5 text-rose-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 leading-none mb-1">
                        {lang === 'en' ? 'EMAIL ADDRESS' : 'ĐỊA CHỈ EMAIL'}
                      </p>
                      <a href="mailto:admin@saimekb.com" className="text-sm font-extrabold text-white hover:text-rose-400 transition-colors">
                        admin@saimekb.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links block inside Hours */}
              <div className="pt-4 flex items-center gap-3 border-t border-white/5">
                <a 
                  href="https://m.me/61589897489896" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  title="Messenger"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.914 1.45 5.518 3.71 7.21v3.136c0 .193.18.33.354.264l3.524-1.34c.783.216 1.61.33 2.412.33 5.523 0 10-4.146 10-9.26C22 6.145 17.523 2 12 2zm1.09 12.33l-2.454-2.624-4.8 2.624 5.275-5.603 2.51 2.624 4.744-2.624-5.275 5.603z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/saime_kitchen.bar/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61589897489896" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
