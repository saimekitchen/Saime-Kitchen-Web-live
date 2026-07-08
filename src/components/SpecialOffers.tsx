import React from 'react';
import { Tag, Clock, Calendar, Gift, MessageCircle, Heart, Sparkles } from 'lucide-react';

interface SpecialOffersProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

export default function SpecialOffers({ lang, onNavigate }: SpecialOffersProps) {
  const handleReserveClick = () => {
    onNavigate?.('reservation');
  };

  const handleMessengerClick = () => {
    const message = lang === 'en'
      ? 'Hi Saime! We would love to book a spot for the 5:30-7:30 PM BOGO Happy Hour. See you guys soon! 🥂'
      : 'Chào Saime! Tụi mình muốn đặt bàn ghé chơi thưởng thức ưu đãi Mua 1 Tặng 1 từ 17:30 - 19:30. Hẹn gặp các bạn nhé! 🥂';
    try {
      navigator.clipboard.writeText(message);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    window.open('https://m.me/61589897489896', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="special-offers-page" className="py-12 sm:py-20 bg-neutral-50 text-neutral-800 overflow-hidden relative select-none">
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Sleek Header Section */}
        <div className="text-center space-y-4 max-w-xl mx-auto pb-6 border-b border-neutral-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 border border-rose-200 rounded-full font-sans text-[10px] uppercase font-bold tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Community Gathering' : 'Góc Sẻ Chia'}</span>
          </div>
          
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase text-neutral-900">
            {lang === 'en' ? 'Special Offers' : 'Ưu Đãi Đặc Biệt'}
          </h2>
          
          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
            {lang === 'en' 
              ? 'At Saime, we believe in supporting each other, relaxing together, and building warm local friendships. Come over to wind down, chat, and share some sweet moments.'
              : 'Tại Saime, tụi mình mong muốn được đồng hành, gắn kết và mang lại những giây phút thư giãn thật ấm áp cho mọi người. Ghé chơi trò chuyện, sẻ chia và tận hưởng ưu đãi dễ thương nhé.'}
          </p>
        </div>

        {/* Featured Offer Card - BOGO Cocktails & Mocktails */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col md:flex-row">
          
          {/* Aesthetic Visual Side */}
          <div className="md:w-5/12 bg-rose-900 relative min-h-[220px] md:min-h-auto flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" 
              alt="Happy Hour Cocktails" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply saturate-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative text-center p-6 text-white space-y-2 z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-neutral-900 mb-2 shadow-md animate-bounce">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-extrabold text-2xl uppercase tracking-wider text-amber-300">
                {lang === 'en' ? 'BUY 1 GET 1' : 'MUA 1 TẶNG 1'}
              </h4>
              <p className="font-mono text-[10px] tracking-widest text-rose-100 uppercase font-bold">
                {lang === 'en' ? 'Classic Drinks' : 'Đồ Uống Cổ Điển'}
              </p>
            </div>
          </div>

          {/* Offer Details Side */}
          <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 font-mono text-[9px] font-bold tracking-wider rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-600" />
                  <span>5:30 PM - 7:30 PM</span>
                </span>
                <span className="px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 font-mono text-[9px] font-bold tracking-wider rounded-lg flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-rose-600" />
                  <span>{lang === 'en' ? 'Until 31 July' : 'Đến Hết 31/07'}</span>
                </span>
              </div>

              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-neutral-900 uppercase tracking-tight">
                {lang === 'en' ? 'Sunset Happy Hour' : 'Khung Giờ Vàng Chiều Hoàng Hôn'}
              </h3>

              <div className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed space-y-3 font-semibold">
                <p>
                  {lang === 'en'
                    ? 'Bring along a friend or make a new one here! Treat yourselves to our Buy-1-Get-1-Free deal on all classic cocktails and mocktails of the same drink.'
                    : 'Rủ rê tri kỷ hay ghé chơi kết nối những người bạn mới nhé! Saime gửi tặng ưu đãi Mua 1 Tặng 1 (áp dụng cho cùng một loại đồ uống) cho tất cả các dòng cocktail cổ điển và mocktail thơm lành.'}
                </p>
                <p className="text-[11px] text-neutral-500 italic bg-neutral-100 p-3 rounded-xl border border-neutral-200/65">
                  {lang === 'en'
                    ? '✨ Applicable for all classic cocktails & mocktails. Perfect for sharing stories under the late afternoon breeze!'
                    : '✨ Áp dụng cho mọi loại cocktail & mocktail cổ điển. Lý tưởng để nhâm nhi, ngắm ráng chiều hoàng hôn bình yên bên thềm sân sau.'}
                </p>
              </div>
            </div>

            {/* Actions row */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-100">
              <button
                onClick={handleReserveClick}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>{lang === 'en' ? 'Reserve a Spot' : 'Đặt Chỗ Ngay'}</span>
              </button>

              <button
                onClick={handleMessengerClick}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-blue-500" />
                <span>{lang === 'en' ? 'Say Hello on Messenger' : 'Liên hệ qua Messenger'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Community Atmosphere block */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-600 fill-amber-500" />
            <h4 className="font-sans font-extrabold text-sm sm:text-base text-neutral-900 uppercase tracking-tight">
              {lang === 'en' ? 'A Space Built For You' : 'Góc Nhỏ Của Bạn, Của Tụi Mình'}
            </h4>
          </div>
          <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-semibold">
            {lang === 'en'
              ? 'We are not just a venue; we are a small neighborhood home. Whether you are coming to read, solve a puzzle, play a board game, or listen to the rain, you are warmly welcome here. Thank you for supporting our space and being a beautiful part of our community.'
              : 'Saime không chỉ là một quán nước; đây là ngôi nhà nhỏ mộc mạc bên góc phố. Dù bạn ghé chơi để đọc sách, ghép một bức tranh gỗ, thách đấu boardgame hay chỉ đơn giản là lắng nghe tiếng mưa rơi, bạn luôn luôn được chào đón nồng hậu. Cảm ơn bạn vì đã ở đây, đồng hành và là một phần tuyệt vời của Saime.'}
          </p>
        </div>

      </div>
    </section>
  );
}
