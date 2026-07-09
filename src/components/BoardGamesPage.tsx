import React, { useState } from 'react';
import { Dice6, Users, Clock, Send, Film, Utensils } from 'lucide-react';
import { motion } from 'motion/react';

interface BoardGamesPageProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

const gamesList = [
  {
    id: 'exploding-kittens',
    titleEn: 'Exploding Kittens',
    titleVn: 'Mèo Cảm Tử',
    players: '2 - 5',
    duration: '15 mins',
    typeEn: 'Party Strategy',
    typeVn: 'Chiến Thuật Nhóm',
    descEn: 'A kitty-powered version of Russian roulette. Draw cards and laugh along as you try to avoid drawing the exploding kitten!',
    descVn: 'Phiên bản mèo con tinh nghịch đầy vui nhộn. Rút các lá bài và cùng cười đùa khi cố gắng né tránh chú mèo phát nổ!',
    vibeEn: 'Hilarious Chaos',
    vibeVn: 'Hài Hước & Vui Nhộn',
    image: 'https://www.tcgpark.com/_next/image?url=https%3A%2F%2Fapi.tcgpark.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fexploding-kittens-2.jpg&w=3840&q=75'
  },
  {
    id: 'uno',
    titleEn: 'Uno Classic',
    titleVn: 'Bài Uno Thân Thuộc',
    players: '2 - 10',
    duration: '10-20 mins',
    typeEn: 'Casual Card Game',
    typeVn: 'Bài Trực Quan Vui Vẻ',
    descEn: 'The world-famous color and number matching card game. Extremely easy to learn, super fun, and perfect for getting to know new friends.',
    descVn: 'Trò chơi bài so khớp màu sắc và số thứ tự quen thuộc. Cực kỳ dễ làm quen, ngập tràn tiếng cười và là cách tuyệt vời để kết bạn mới.',
    vibeEn: 'Fast Competition',
    vibeVn: 'Nhanh & Kịch Tính',
    image: 'https://totallytoys.ie/cdn/shop/products/81zfrvRUlNL._SL1500_2000x.jpg?v=1575932867'
  },
  {
    id: 'werewolf',
    titleEn: 'Werewolf Ultimate',
    titleVn: 'Ma Sói',
    players: '7 - 18',
    duration: '30 mins',
    typeEn: 'Social Deduction',
    typeVn: 'Ẩn Vai Suy Luận',
    descEn: 'A classic game of secrets, hidden roles, and storytelling. Join hands with other villagers to figure out who is hiding in your midst.',
    descVn: 'Trò chơi kể chuyện, suy luận và thấu hiểu lẫn nhau. Cùng thảo luận với dân làng để tìm ra những người bạn sói đang tinh nghịch ẩn nấp.',
    vibeEn: 'Mystery & Conversation',
    vibeVn: 'Thú Vị & Gắn Kết',
    image: 'https://kidsmandi.com/cdn/shop/files/71S2v8jLjzL._SL1100.jpg?v=1691414087&width=1946'
  },
  {
    id: 'chess',
    titleEn: 'Royal Chess',
    titleVn: 'Cờ Vua Thân Thuộc',
    players: '2',
    duration: '20-60 mins',
    typeEn: 'Pure Strategy',
    typeVn: 'Trí Tuệ Đối Kháng',
    descEn: 'A friendly, slow-paced duel of minds. Enjoy a quiet match with a beautiful custom wooden board in our cozy lounge space.',
    descVn: 'Cuộc đấu trí thong thả và ấm cúng. Trải nghiệm ván cờ tao nhã bên bộ bàn cờ gỗ mộc mạc tại góc nhỏ Saime.',
    vibeEn: 'Focus & Depth',
    vibeVn: 'Tập Trung & Thư Thái',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'card-games',
    titleEn: 'Classic Card Deck',
    titleVn: 'Bộ Bài Tây Tiêu Chuẩn',
    players: '2 - 6',
    duration: 'Flexible',
    typeEn: 'Versatile Cards',
    typeVn: 'Bài Tây Đa Năng',
    descEn: 'A high-quality standard deck of playing cards. Grab a deck and play standard games, or teach someone your favorite local card game.',
    descVn: 'Bộ bài Tây chất lượng cao. Thích hợp cho mọi cuộc chơi tự do, rủ nhóm bạn chơi hoặc hướng dẫn mọi người một trò chơi bài quen thuộc của quê hương bạn.',
    vibeEn: 'Social & Classic',
    vibeVn: 'Cổ Điển & Tự Do',
    image: 'https://www.thoughtco.com/thmb/KkXIMbKrVpOpBpBB5RVhTX1tlS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/royal-flush-172214648-bafb6213188744e981412665b63b6be2.jpg'
  },
  {
    id: 'wooden-jigsaw',
    titleEn: 'Jigsaw Puzzles',
    titleVn: 'Tranh Ghép Hình',
    players: '1 - 4',
    duration: '30-120 mins',
    typeEn: 'Tactile Jigsaw',
    typeVn: 'Tranh Ghép Hình',
    descEn: 'Pristine, laser-cut physical wooden jigsaw puzzle boards representing beautiful Vietnamese vistas, such as Hoi An sunsets and traditional heritage scenes.',
    descVn: 'Những bộ tranh ghép hình bằng gỗ cắt laser tinh xảo, tái hiện cảnh sắc hữu tình của Việt Nam như hoàng hôn Hội An cổ kính hay nhịp sống làng quê thanh bình.',
    vibeEn: 'Calm & Patient',
    vibeVn: 'Thư Thái & Kiên Nhẫn',
    image: 'https://www.discworldemporium.com/wp-content/uploads/2023/04/terry-pratchett-discworld-glorious-25th-lilac-night-watch-jigsaw-puzzle-sam-vimes-pieces.jpg'
  },
  {
    id: 'daily-crosswords',
    titleEn: 'Crosswords',
    titleVn: 'Giải Ô Chữ',
    players: '1 - 2',
    duration: '15-30 mins',
    typeEn: 'Word Puzzle',
    typeVn: 'Giải Ô Chữ',
    descEn: 'Enjoy our custom-printed daily crosswords focused on local culture, cuisine, and trivia. Perfect for playing alone or collaborating with a companion.',
    descVn: 'Thử sức giải ô chữ in giấy hằng ngày được thiết kế xoay quanh văn hóa, ẩm thực Hội An và những điều thú vị địa phương. Tuyệt vời để chơi một mình hoặc giải cùng bạn bè.',
    vibeEn: 'Wit & Relaxing',
    vibeVn: 'Trí Tuệ & Thư Giãn',
    image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/12/20/1387553614250/100th-anniversary-of-the--009.jpg?width=465&dpr=1&s=none&crop=none'
  },
  {
    id: 'wooden-sudoku',
    titleEn: 'Sudoku',
    titleVn: 'Đố Số Sudoku',
    players: '1',
    duration: '20-45 mins',
    typeEn: 'Logic Game',
    typeVn: 'Đố Số Sudoku',
    descEn: 'Skip the screens with our beautifully finished physical wooden Sudoku boards. Swap tiles, test your logical steps, and feel the tactile wood blocks.',
    descVn: 'Tách biệt khỏi màn hình điện thoại với bàn chơi Sudoku bằng gỗ thủ công mộc mạc. Di chuyển các khối gỗ, rèn luyện tư duy logic đầy lôi cuốn bên tách cà phê.',
    vibeEn: 'Deep Focus',
    vibeVn: 'Tập Trung Sâu',
    image: 'https://m.media-amazon.com/images/I/61NLiECmBdL.jpg'
  }
];

export default function BoardGamesPage({ lang, onNavigate }: BoardGamesPageProps) {
  const [gameFilter, setGameFilter] = useState<string>('all');
  const [customGameName, setCustomGameName] = useState<string>('');

  const filteredGames = gameFilter === 'all' 
    ? gamesList 
    : gamesList.filter(g => {
        if (gameFilter === 'puzzle') {
          return ['wooden-jigsaw', 'daily-crosswords', 'wooden-sudoku'].includes(g.id);
        }
        return g.typeEn.toLowerCase().includes(gameFilter) || g.typeVn.toLowerCase().includes(gameFilter);
      });

  const handleBringGameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customGameName.trim()) return;

    const gameText = customGameName.trim();
    const message = lang === 'en'
      ? `Hi Saime! I am bringing my own boardgame "${gameText}" to join you guys. Teach us! 🎲`
      : `Chào Saime! Mình mang theo boardgame "${gameText}" đến chơi cùng và nhờ các bạn hướng dẫn nhé! 🎲`;

    try {
      navigator.clipboard.writeText(message);
    } catch (err) {
      console.error('Failed to copy game message', err);
    }
    const messengerUrl = `https://m.me/61589897489896?text=${encodeURIComponent(message)}`;
    
    window.open(messengerUrl, '_blank', 'noopener,noreferrer');
    setCustomGameName('');
  };

  return (
    <section id="boardgames-page" className="py-16 sm:py-24 bg-[#FCFCFA] relative overflow-hidden text-neutral-dark select-none">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200/50 font-sans text-[10px] uppercase font-bold tracking-wider">
            <Dice6 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'en' ? 'Social Play Zone' : 'Khu Vực Giải Trí'}</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 uppercase">
            {lang === 'en' ? 'Board Games Lounge' : 'Góc Board Games'}
          </h2>
          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
            {lang === 'en'
              ? 'Grab a drink, find a comfortable cushion, and dive into our collection of classic board games designed for laughter and connection.'
              : 'Gọi một tách cà phê thơm ngon hay ly nước mát lành, chọn một góc ngồi êm ái và khám phá thế giới Board Games kết nối đầy tiếng cười tại Saime.'}
          </p>
        </div>

        {/* Bring Your Own Boardgame Section - High-visibility call to action box */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-700 space-y-6">
          <div className="space-y-2 text-center">
            <span className="inline-block px-2.5 py-0.5 bg-emerald-500/25 text-emerald-300 text-[9px] font-mono uppercase font-bold tracking-widest rounded border border-emerald-500/30">
              {lang === 'en' ? 'Bring Your Own Game!' : 'Mang Theo Cờ Bản Của Bạn!'}
            </span>
            <h3 className="font-sans font-extrabold text-base sm:text-lg uppercase tracking-tight text-amber-300">
              {lang === 'en' ? 'Have your own board game? Bring it along!' : 'Bạn có bộ Board Game tâm đắc? Hãy mang theo!'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-semibold">
              {lang === 'en'
                ? "We love discovering new games! Feel free to bring your own deck or custom board game. Join our circle, teach us how to play, and let's have a great time together."
                : 'Chúng mình cực kỳ thích khám phá những trò chơi mới! Hãy thoải mái mang theo bộ bài hay bộ cờ bàn yêu thích của bạn để cùng giao lưu, hướng dẫn mọi người chơi và kết bạn mới nhé.'}
            </p>
          </div>

          <form onSubmit={handleBringGameSubmit} className="space-y-3 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                required
                value={customGameName}
                onChange={(e) => setCustomGameName(e.target.value)}
                placeholder={lang === 'en' ? "What game are you bringing?" : "Bạn sẽ mang theo cờ gì?"}
                className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-emerald-950 font-sans text-xs sm:text-sm rounded-xl border border-white/20 focus:border-white outline-none placeholder-emerald-200/50"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-neutral-900 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{lang === 'en' ? 'Tell Saime' : 'Gửi Saime'}</span>
                <Send className="w-3.5 h-3.5 text-neutral-900" />
              </button>
            </div>
            <p className="text-[10px] text-center text-emerald-200/60 font-mono">
              {lang === 'en' ? 'Copies message & opens Facebook Messenger (m.me/61589897489896)' : 'Sẽ tự động sao chép tin nhắn & mở Facebook Messenger'}
            </p>
          </form>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-neutral-100 pb-5">
          {[
            { id: 'all', en: 'All Games & Puzzles', vn: 'Tất Cả' },
            { id: 'party', en: 'Party & Fun', vn: 'Đồng Đội' },
            { id: 'strategy', en: 'Strategy Duel', vn: 'Chiến Thuật' },
            { id: 'deduction', en: 'Social Deduction', vn: 'Suy Luận Ẩn Vai' },
            { id: 'puzzle', en: 'Mindful Puzzles', vn: 'Trò Chơi Trí Tuệ' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setGameFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-sans font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                gameFilter === filter.id
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                  : 'bg-white text-neutral-500 border-neutral-200 hover:bg-neutral-50 hover:text-neutral-850'
              }`}
            >
              {lang === 'en' ? filter.en : filter.vn}
            </button>
          ))}
        </div>

        {/* Existing Games List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div 
              key={game.id} 
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-sm transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50">
                <img
                  src={game.image}
                  alt={game.titleEn}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 saturate-[0.9]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-neutral-850 font-sans text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neutral-200 shadow-xs">
                  {lang === 'en' ? game.vibeEn : game.vibeVn}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="font-sans text-[10px] uppercase tracking-wider text-rose-600 font-extrabold">
                    {lang === 'en' ? game.typeEn : game.typeVn}
                  </div>

                  <h5 className="font-sans font-extrabold text-base sm:text-lg text-neutral-900 uppercase tracking-tight leading-snug">
                    {lang === 'en' ? game.titleEn : game.titleVn}
                  </h5>

                  <div className="font-sans text-[10px] text-neutral-400 font-bold flex items-center gap-3 py-1">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-300" />
                      {game.players} {lang === 'en' ? 'players' : 'người chơi'}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-300" />
                      {game.duration}
                    </span>
                  </div>

                  <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    {lang === 'en' ? game.descEn : game.descVn}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <span className="font-sans text-[9px] text-neutral-400 uppercase font-bold">
                    {lang === 'en' ? 'Access' : 'Sử dụng'}
                  </span>
                  {game.id === 'chess' ? (
                    <button
                      onClick={() => onNavigate?.('chess')}
                      className="font-sans font-bold text-[10px] text-amber-800 hover:text-amber-950 uppercase tracking-wider bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-full border border-amber-200 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <span>{lang === 'en' ? 'Find Opponent ⚔️' : 'Tìm Đối Thủ ⚔️'}</span>
                    </button>
                  ) : (
                    <span className="font-sans font-bold text-[10px] text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {lang === 'en' ? 'Complimentary' : 'Phục Vụ Miễn Phí'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pathway Navigation */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="bg-neutral-100/50 rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-700 text-[9px] font-mono uppercase font-bold tracking-widest rounded border border-rose-200/50">
                {lang === 'en' ? 'Explore More' : 'Khám Phá Thêm'}
              </span>
              <h4 className="font-sans font-extrabold text-sm text-neutral-900 uppercase mt-1">
                {lang === 'en' ? 'Join us for a cozy movie or browse our kitchen' : 'Ghé xem một thước phim ấm cúng hay xem thực đơn'}
              </h4>
              <p className="font-sans text-xs text-neutral-500 max-w-xl font-semibold">
                {lang === 'en'
                  ? 'We love organizing community activities! Book seats for our cozy starlight backyard cinema or choose some delicious snacks.'
                  : 'Saime rất yêu thích những hoạt động gắn kết mọi người! Bạn có thể đặt chỗ xem phim ngoài trời dưới ánh sao lãng mạn hoặc chọn món ăn uống yêu thích.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('movie-night')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Film className="w-3.5 h-3.5 text-sky-500" />
                <span>{lang === 'en' ? 'Cinema Night' : 'Rạp Sân Sau'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Utensils className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Order Food' : 'Xem Thực Đơn'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
