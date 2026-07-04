import React, { useState } from 'react';
import { Crown, Trophy, Clock, Swords, CheckCircle, Send, Coffee, Star, BookOpen, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChessSectionProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

type ChessPieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';

export default function ChessSection({ lang, onNavigate }: ChessSectionProps) {
  const [selectedPiece, setSelectedPiece] = useState<ChessPieceType>('knight');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate' | 'advanced' | 'master'>('intermediate');
  const [playStyle, setPlayStyle] = useState<'casual' | 'blitz' | 'classical' | 'any'>('casual');
  const [preferredTime, setPreferredTime] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Constants for the interactive 8x8 chessboard
  const centerRow = 4;
  const centerCol = 4;

  const getHighlights = (piece: ChessPieceType, r: number, c: number): boolean => {
    const dr = Math.abs(r - centerRow);
    const dc = Math.abs(c - centerCol);

    switch (piece) {
      case 'king':
        return dr <= 1 && dc <= 1 && !(r === centerRow && c === centerCol);
      case 'queen':
        return (r === centerRow || c === centerCol || dr === dc) && !(r === centerRow && c === centerCol);
      case 'rook':
        return (r === centerRow || c === centerCol) && !(r === centerRow && c === centerCol);
      case 'bishop':
        return dr === dc && !(r === centerRow && c === centerCol);
      case 'knight':
        return ((dr === 1 && dc === 2) || (dr === 2 && dc === 1));
      case 'pawn':
        // Highlight 1 and 2 steps forward (upward relative to board)
        return c === centerCol && (r === centerRow - 1 || r === centerRow - 2);
      default:
        return false;
    }
  };

  const piecesConfig: Record<ChessPieceType, {
    symbol: string;
    nameEn: string;
    nameVn: string;
    vibeEn: string;
    vibeVn: string;
    moveEn: string;
    moveVn: string;
  }> = {
    king: {
      symbol: '♚',
      nameEn: 'The King',
      nameVn: 'Vua (King)',
      vibeEn: 'The ultimate center of gravity on the board. Its defense dictates the entire strategy, requiring slow, deep contemplation.',
      vibeVn: 'Trọng tâm tối thượng của toàn bộ ván đấu. Việc bảo vệ quân Vua quyết định mọi đường đi nước bước chiến thuật.',
      moveEn: 'Moves 1 square in any direction. Slow but decisive.',
      moveVn: 'Đi 1 ô về mọi hướng. Chậm rãi nhưng mang tính định đoạt ván cờ.'
    },
    queen: {
      symbol: '♛',
      nameEn: 'The Queen',
      nameVn: 'Hậu (Queen)',
      vibeEn: 'Absolute powerhouse on the board. Capable of striking across any distance to dominate open lines.',
      vibeVn: 'Nguồn sức mạnh vô song trên bàn cờ. Có khả năng càn quét ở mọi khoảng cách và làm chủ các đường mở.',
      moveEn: 'Moves any number of squares along diagonals, rows, or columns.',
      moveVn: 'Di chuyển không giới hạn số ô dọc, ngang hoặc chéo.'
    },
    rook: {
      symbol: '♜',
      nameEn: 'The Rook',
      nameVn: 'Xe (Rook)',
      vibeEn: 'A steady cornerstone of defense and endgame promotion. Solid, straightforward, and reliable.',
      vibeVn: 'Nền tảng vững chắc của hệ thống phòng ngự và giai đoạn tàn cuộc. Thẳng thắn, uy lực và đáng tin cậy.',
      moveEn: 'Moves vertically or horizontally. Clear lines of force.',
      moveVn: 'Đi thẳng theo các hàng dọc hoặc hàng ngang.'
    },
    bishop: {
      symbol: '♝',
      nameEn: 'The Bishop',
      nameVn: 'Tượng (Bishop)',
      vibeEn: 'Operates on diagonal paths. Elegant, smooth, and full of hidden tactical depths across long ranges.',
      vibeVn: 'Dạo bước trên các đường chéo tao nhã. Linh hoạt, mượt mà và ẩn chứa chiều sâu chiến thuật tầm xa.',
      moveEn: 'Moves any number of squares diagonally. Stay on your starting color.',
      moveVn: 'Đi chéo không giới hạn số ô. Suốt đời trung thành với một màu ô xuất phát.'
    },
    knight: {
      symbol: '♞',
      nameEn: 'The Knight',
      nameVn: 'Mã (Knight)',
      vibeEn: 'The clever combatant who leaps over obstacles. Agile and highly unpredictable in closed positions.',
      vibeVn: 'Kỵ sĩ thông thái vượt mọi chướng ngại vật. Di chuyển lắt léo, bất ngờ và cực kỳ hữu dụng trong thế trận kín.',
      moveEn: 'Leaps in an "L" shape (2 squares one way, 1 square perpendicular).',
      moveVn: 'Nhảy theo hình chữ L (đi 2 ô dọc/ngang rồi rẽ 1 ô vuông góc).'
    },
    pawn: {
      symbol: '♟',
      nameEn: 'The Pawn',
      nameVn: 'Tốt (Pawn)',
      vibeEn: 'The brave vanguard. Stepping forward step-by-step, organizing the structural soul of your game.',
      vibeVn: 'Những chiến binh tiên phong quả cảm. Tiến bước từng ô vững chãi, tạo nên linh hồn cấu trúc của ván cờ.',
      moveEn: 'Moves forward 1 square (or 2 on its first move). Captures diagonally.',
      moveVn: 'Đi thẳng 1 ô (hoặc 2 ô ở nước đi đầu tiên). Ăn chéo.'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !preferredTime.trim()) return;

    const skillLabel = {
      beginner: lang === 'en' ? 'Beginner' : 'Mới chơi',
      intermediate: lang === 'en' ? 'Intermediate' : 'Trung cấp',
      advanced: lang === 'en' ? 'Advanced' : 'Kỳ thủ khá',
      master: lang === 'en' ? 'Master/Advanced' : 'Kỳ thủ giỏi'
    }[skillLevel];

    const styleLabel = {
      casual: lang === 'en' ? 'Casual friendly' : 'Đấu vui vẻ',
      blitz: lang === 'en' ? 'Fast Blitz' : 'Cờ chớp nhanh',
      classical: lang === 'en' ? 'Classical / Long game' : 'Cờ tiêu chuẩn',
      any: lang === 'en' ? 'Any format' : 'Mọi thể thức'
    }[playStyle];

    const message = lang === 'en'
      ? `Hi Saime! 👑 I would like to arrange a Chess Match:\n\n👤 Name: ${name.trim()}\n📞 Contact: ${contact.trim()}\n🏆 Level: ${skillLabel}\n⏱️ Style: ${styleLabel}\n🕒 Time: ${preferredTime.trim()}\n💬 Note: ${note.trim() || 'None'}\n\nPlease help match me with a suitable opponent! ⚔️`
      : `Chào Saime! 👑 Mình muốn đăng ký tìm đối thủ đánh Cờ Vua:\n\n👤 Tên: ${name.trim()}\n📞 Liên hệ: ${contact.trim()}\n🏆 Trình độ: ${skillLabel}\n⏱️ Thể thức: ${styleLabel}\n🕒 Thời gian: ${preferredTime.trim()}\n💬 Ghi chú: ${note.trim() || 'Không'}\n\nNhờ các bạn kết nối giúp mình một đối thủ phù hợp nhé! ⚔️`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=84964023683&text=${encodedMessage}`;
    
    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const handleResetForm = () => {
    setName('');
    setContact('');
    setSkillLevel('intermediate');
    setPlayStyle('casual');
    setPreferredTime('');
    setNote('');
    setSubmitted(false);
  };

  return (
    <section id="chess-zone" className="py-16 sm:py-24 bg-[#FAF8F4] relative overflow-hidden text-neutral-800 select-none">
      
      {/* Sunlit Ambient Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
      
      {/* Light checkered board watermark in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full grid grid-cols-12 md:grid-cols-24">
          {Array.from({ length: 288 }).map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square w-full h-full ${(Math.floor(i / 12) + i) % 2 === 0 ? 'bg-neutral-900' : 'bg-transparent'}`} 
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header - Simple & Focused */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-sans font-black text-3xl sm:text-5xl tracking-tight text-neutral-900 uppercase">
            {lang === 'en' ? 'Saime Chess Club' : 'Hội Quán Cờ Vua Saime'}
          </h2>
          <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            {lang === 'en'
              ? 'Sink into a cozy, dedicated space designed for focus and deep thinking. Unwind with premium crafted drinks, masterfully poured specialty coffees, and beautifully hand-polished timber chess sets.'
              : 'Đắm mình trong không gian yên tĩnh được thiết kế cho sự tập trung và những nước cờ cân não. Thư thái đấu trí bên ly cà phê specialty hay đồ uống thủ công cùng bộ cờ gỗ mộc mạc, tinh xảo.'}
          </p>
        </div>

        {/* The Authentic Chess Showcase */}
        <div className="max-w-4xl mx-auto bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all duration-500" />
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-amber-700">
            <Crown className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="space-y-2 flex-1 text-center md:text-left">
            <h4 className="font-sans font-black text-amber-800 text-sm sm:text-base uppercase tracking-wider">
              {lang === 'en' ? '♟️ Professional-grade Weighted Timber' : '♟️ Bàn Cờ Gỗ Mun Thiết Kế Đầm Tay'}
            </h4>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed font-medium">
              {lang === 'en'
                ? "Experience French Staunton wooden pieces, hand-polished and triple-weighted with soft felt bottoms, laid over beautiful walnut boards. Perfect for friendly matches, casual play, or serious mental workouts."
                : 'Trải nghiệm những quân cờ Staunton bằng gỗ sồi và mun nguyên khối, được chạm khắc tinh tế, đầm tay và lót nỉ êm ái trên mặt bàn gỗ óc chó vát cạnh. Hoàn hảo cho cả những ván đấu giao hữu thư thả lẫn những trận cờ cân não đỉnh cao.'}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1 justify-center md:justify-start">
              <span className="flex items-center gap-1 text-[10px] font-mono text-amber-700 uppercase font-bold">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {lang === 'en' ? 'Free for all patrons' : 'Miễn phí cho mọi khách hàng'}
              </span>
              <span className="text-neutral-400">•</span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 uppercase font-bold">
                <Coffee className="w-3.5 h-3.5 text-amber-600" />
                {lang === 'en' ? 'Available All Day' : 'Sẵn sàng cả ngày'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Interactive Board and Match Finder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column (Lg: Col 7) - Interactive 8x8 Board */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-black tracking-widest text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                  {lang === 'en' ? 'Tactical Board Playground' : 'Bàn Cờ Thử Nghiệm'}
                </span>
                <span className="text-[9px] font-mono text-neutral-400 font-bold">
                  {lang === 'en' ? 'TOUCH TO HIGHLIGHT' : 'BẤM CHỌN QUÂN ĐỂ XEM ĐƯỜNG ĐI'}
                </span>
              </div>
              <h3 className="font-sans font-black text-lg sm:text-xl uppercase text-neutral-950 tracking-tight">
                {lang === 'en' ? 'The Art of Movement' : 'Nghệ Thuật Bày Binh'}
              </h3>
              <p className="font-sans text-[11px] text-neutral-500 font-semibold leading-relaxed">
                {lang === 'en'
                  ? 'Select any classic chess piece below to place it in the center and view its tactical movement paths highlighted on our sunlit wooden tiles.'
                  : 'Chọn một quân cờ bất kỳ bên dưới để đặt vào trung tâm và quan sát đường di chuyển chiến thuật được thắp sáng trên các ô gạch gỗ.'}
              </p>
            </div>

            {/* Chessboard Container */}
            <div className="flex flex-col items-center justify-center py-2">
              <div className="aspect-square w-full max-w-[340px] border-4 border-[#8B5A2B] rounded-xl overflow-hidden shadow-md bg-[#8B5A2B] relative select-none">
                {/* 8x8 squares */}
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                  {Array.from({ length: 64 }).map((_, idx) => {
                    const r = Math.floor(idx / 8);
                    const c = idx % 8;
                    const isDark = (r + c) % 2 === 1;
                    const isCenter = r === centerRow && c === centerCol;
                    const isHighlighted = getHighlights(selectedPiece, r, c);

                    return (
                      <div
                        key={idx}
                        className={`relative flex items-center justify-center transition-colors duration-200 ${
                          isDark ? 'bg-[#b58863]' : 'bg-[#f0d9b5]'
                        }`}
                      >
                        {/* Selected Piece in Center */}
                        {isCenter && (
                          <motion.span
                            key={selectedPiece}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-3xl sm:text-4xl text-neutral-900 select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] z-25"
                          >
                            {piecesConfig[selectedPiece].symbol}
                          </motion.span>
                        )}

                        {/* Highlight Circle Indicator */}
                        {isHighlighted && (
                          <motion.div
                            initial={{ scale: 0.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.85 }}
                            className="absolute w-3 h-3 rounded-full bg-rose-600/90 shadow-[0_0_10px_#e11d48] z-20"
                          />
                        )}

                        {/* Coordinate markings for edges */}
                        {c === 0 && (
                          <span className="absolute top-0.5 left-0.5 text-[7px] font-mono font-bold text-neutral-800/40">
                            {8 - r}
                          </span>
                        )}
                        {r === 7 && (
                          <span className="absolute bottom-0.5 right-0.5 text-[7px] font-mono font-bold text-neutral-800/40">
                            {String.fromCharCode(97 + c)}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Chess Piece Visual Buttons Tray */}
            <div className="grid grid-cols-6 gap-1 bg-neutral-100 p-1.5 rounded-2xl border border-neutral-200/60">
              {(Object.keys(piecesConfig) as ChessPieceType[]).map((piece) => {
                const isActive = selectedPiece === piece;
                return (
                  <button
                    key={piece}
                    onClick={() => setSelectedPiece(piece)}
                    className={`flex flex-col items-center justify-center py-2.5 rounded-xl cursor-pointer transition-all ${
                      isActive 
                        ? 'bg-white text-rose-600 shadow-xs border border-neutral-200' 
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-white/40'
                    }`}
                  >
                    <span className="text-xl leading-none">{piecesConfig[piece].symbol}</span>
                    <span className="text-[8px] font-sans font-extrabold uppercase tracking-tight mt-1">
                      {lang === 'en' ? piece : {
                        king: 'Vua',
                        queen: 'Hậu',
                        rook: 'Xe',
                        bishop: 'Tượng',
                        knight: 'Mã',
                        pawn: 'Tốt'
                      }[piece]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (Lg: Col 5) - Piece detail + Find Opponent Form */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Piece Detail Card without recommended companion pour */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden flex flex-col justify-between flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl text-neutral-900 drop-shadow-sm leading-none">
                    {piecesConfig[selectedPiece].symbol}
                  </span>
                  <div>
                    <h4 className="font-sans font-black text-neutral-950 uppercase text-sm sm:text-base leading-none">
                      {lang === 'en' ? piecesConfig[selectedPiece].nameEn : piecesConfig[selectedPiece].nameVn}
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block mt-1">
                      {lang === 'en' ? 'Move Pattern' : 'Cách Di Chuyển'}: {lang === 'en' ? piecesConfig[selectedPiece].moveEn : piecesConfig[selectedPiece].moveVn}
                    </span>
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-3.5">
                  <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-medium">
                    {lang === 'en' ? piecesConfig[selectedPiece].vibeEn : piecesConfig[selectedPiece].vibeVn}
                  </p>
                </div>
              </div>

              {/* Quick tip without clock mentions */}
              <div className="mt-5 text-[10px] text-neutral-400 font-semibold leading-normal bg-neutral-50 p-2.5 rounded-lg border border-neutral-150">
                {lang === 'en' 
                  ? '💡 Pro-Tip: Want to play? Simply ask our Baristas for a wooden chess board. They are stored on the main library shelf!'
                  : '💡 Mẹo nhỏ: Bạn muốn chơi cờ? Hãy báo với Barista tại quầy để mượn bàn cờ gỗ. Chúng được bảo quản cẩn thận trên kệ gỗ chính!'}
              </div>
            </div>

            {/* Matchmaking Finder Form */}
            <div className="bg-[#111112] text-neutral-200 rounded-3xl overflow-hidden shadow-md border border-neutral-800 flex flex-col justify-between">
              <div className="bg-gradient-to-r from-neutral-900 to-black px-6 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Swords className="w-4.5 h-4.5 text-amber-400 animate-pulse" />
                  <h3 className="font-sans font-extrabold text-xs uppercase tracking-wider text-amber-300">
                    {lang === 'en' ? 'Chess Matchmaker Portal' : 'Thư Thách Đấu Kỳ Đài'}
                  </h3>
                </div>
                <span className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {lang === 'en' ? 'ACTIVE' : 'HOẠT ĐỘNG'}
                </span>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block font-sans font-black text-[9px] uppercase tracking-wider text-neutral-400">
                          {lang === 'en' ? 'Your Name / Nickname' : 'Danh Tính Kỳ Thủ'} <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. Garry' : 'Ví dụ: Kỳ thủ Tuấn'}
                          className="w-full px-3 py-2 bg-[#0B0B0C] text-white border border-white/5 focus:border-amber-400 rounded-xl outline-none transition-all font-sans text-xs font-semibold"
                        />
                      </div>

                      {/* Contact Details */}
                      <div className="space-y-1">
                        <label className="block font-sans font-black text-[9px] uppercase tracking-wider text-neutral-400">
                          {lang === 'en' ? 'Contact Details (WhatsApp/Zalo/Phone)' : 'Phương Thức Liên Hệ'} <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="SĐT, Zalo hoặc Facebook..."
                          className="w-full px-3 py-2 bg-[#0B0B0C] text-white border border-white/5 focus:border-amber-400 rounded-xl outline-none transition-all font-sans text-xs font-semibold"
                        />
                      </div>

                      {/* Skill Level Selection */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="block font-sans font-black text-[9px] uppercase tracking-wider text-neutral-400">
                            {lang === 'en' ? 'Your Level' : 'Cấp Độ'}
                          </label>
                          <select
                            value={skillLevel}
                            onChange={(e: any) => setSkillLevel(e.target.value)}
                            className="w-full px-2 py-2 bg-[#0B0B0C] text-white border border-white/5 focus:border-amber-400 rounded-xl outline-none font-sans text-[11px] font-bold cursor-pointer transition-all"
                          >
                            <option value="beginner">{lang === 'en' ? '♟️ Casual' : '♟️ Mới chơi'}</option>
                            <option value="intermediate">{lang === 'en' ? '♞ Mid-tier' : '♞ Trung cấp'}</option>
                            <option value="advanced">{lang === 'en' ? '♜ Advanced' : '♜ Kỳ thủ khá'}</option>
                            <option value="master">{lang === 'en' ? '👑 Expert' : '👑 Kỳ thủ giỏi'}</option>
                          </select>
                        </div>

                        {/* Format */}
                        <div className="space-y-1">
                          <label className="block font-sans font-black text-[9px] uppercase tracking-wider text-neutral-400">
                            {lang === 'en' ? 'Preferred Play' : 'Thể Thức'}
                          </label>
                          <select
                            value={playStyle}
                            onChange={(e: any) => setPlayStyle(e.target.value)}
                            className="w-full px-2 py-2 bg-[#0B0B0C] text-white border border-white/5 focus:border-amber-400 rounded-xl outline-none font-sans text-[11px] font-bold cursor-pointer transition-all"
                          >
                            <option value="casual">{lang === 'en' ? '🍺 Social' : '🍺 Giao lưu'}</option>
                            <option value="blitz">{lang === 'en' ? '⚡ Friendly' : '⚡ Đấu nhanh'}</option>
                            <option value="classical">{lang === 'en' ? '⏳ Deep' : '⏳ Tiêu chuẩn'}</option>
                            <option value="any">{lang === 'en' ? '🤝 Any' : '🤝 Mọi thể thức'}</option>
                          </select>
                        </div>
                      </div>

                      {/* Preferred Time */}
                      <div className="space-y-1">
                        <label className="block font-sans font-black text-[9px] uppercase tracking-wider text-neutral-400">
                          {lang === 'en' ? 'When will you arrive at Saime?' : 'Thời Gian Ước Hẹn Gặp'} <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          placeholder={lang === 'en' ? 'e.g. This afternoon at 3:00 PM' : 'Ví dụ: Chiều nay lúc 15:00...'}
                          className="w-full px-3 py-2 bg-[#0B0B0C] text-white border border-white/5 focus:border-amber-400 rounded-xl outline-none transition-all font-sans text-xs font-semibold"
                        />
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 font-sans font-extrabold text-[10px] uppercase tracking-widest rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(245,158,11,0.15)]"
                      >
                        <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>{lang === 'en' ? 'Register Match Request' : 'Gửi Yêu Cầu Ghép Cặp'}</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-6 text-center space-y-4"
                    >
                      <div className="inline-flex p-3 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sans font-black text-sm text-white uppercase tracking-tight">
                          {lang === 'en' ? '👑 Matchmaker Notified!' : '👑 ĐÃ PHÁT THƯ THÀNH CÔNG!'}
                        </h4>
                        <p className="font-sans text-neutral-400 text-[11px] leading-relaxed max-w-xs mx-auto">
                          {lang === 'en'
                            ? 'Our hosts are finding you a player! Check your WhatsApp for matching notification.'
                            : 'Hội quán đang liên kết đối thủ phù hợp cho bạn. Hãy chuẩn bị sẵn sàng cho một ván cờ tuyệt hảo!'}
                        </p>
                      </div>
                      <button
                        onClick={handleResetForm}
                        className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-sans font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer border border-white/5"
                      >
                        {lang === 'en' ? 'New Request' : 'Gửi Thư Khác'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

        {/* Beginner's Visual Guide Section */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-[10px] font-mono uppercase font-extrabold border border-amber-100">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Beginners Quick-Start Guide' : 'Cẩm Nang Cho Người Mới'}</span>
            </div>
            <h3 className="font-sans font-black text-xl sm:text-2xl uppercase text-neutral-950 tracking-tight">
              {lang === 'en' ? 'How to Get Started with Royal Chess' : 'Hướng Dẫn Nhập Môn Cờ Vua'}
            </h3>
            <p className="font-sans text-xs text-neutral-500 font-semibold leading-relaxed max-w-2xl">
              {lang === 'en'
                ? 'Chess is a game of perfect information and infinite depth. Here is a simple 4-step visual blueprint to get your first game rolling in minutes.'
                : 'Cờ Vua là trò chơi của thông tin hoàn hảo và chiều sâu vô hạn. Dưới đây là 4 bước đơn giản giúp bạn làm quen và tự tin đi những nước cờ đầu tiên.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="space-y-3 bg-[#FAF8F4] p-5 rounded-2xl border border-neutral-200/65 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">1</span>
                  <span className="text-xl">🏁</span>
                </div>
                <h5 className="font-sans font-black text-xs text-neutral-950 uppercase">
                  {lang === 'en' ? '1. Board Setup' : '1. Thiết Lập Bàn Cờ'}
                </h5>
                <p className="font-sans text-[11px] text-neutral-500 leading-normal font-semibold">
                  {lang === 'en'
                    ? '"White on right." Make sure the bottom-right corner square is light-colored. Place Queens on their matching color (White Queen on light, Black Queen on dark).'
                    : '"Ô trắng bên phải." Đảm bảo ô góc dưới cùng bên phải là ô màu sáng. Quân Hậu luôn đứng ở ô cùng màu với nó (Hậu trắng ô trắng, Hậu đen ô đen).'}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3 bg-[#FAF8F4] p-5 rounded-2xl border border-neutral-200/65 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">2</span>
                  <span className="text-xl">👑</span>
                </div>
                <h5 className="font-sans font-black text-xs text-neutral-950 uppercase">
                  {lang === 'en' ? '2. The Ultimate Goal' : '2. Mục Tiêu Tối Thượng'}
                </h5>
                <p className="font-sans text-[11px] text-neutral-500 leading-normal font-semibold">
                  {lang === 'en'
                    ? 'Checkmate! Trap your opponent’s King so it cannot escape capture. If a King is under attack, it is in "Check" and must immediately escape.'
                    : 'Chiếu hết (Checkmate)! Dồn ép quân Vua của đối thủ vào thế không thể chạy thoát hoặc phòng thủ. Vua bị tấn công gọi là "Chiếu" và bắt buộc phải né tránh.'}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3 bg-[#FAF8F4] p-5 rounded-2xl border border-neutral-200/65 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">3</span>
                  <span className="text-xl">⚔️</span>
                </div>
                <h5 className="font-sans font-black text-xs text-neutral-950 uppercase">
                  {lang === 'en' ? '3. Combat Rules' : '3. Quy Tắc Giao Chiến'}
                </h5>
                <p className="font-sans text-[11px] text-neutral-500 leading-normal font-semibold">
                  {lang === 'en'
                    ? 'White always moves first. Pieces capture by landing directly on an enemy-occupied square, removing them from play. No jumping, except for the Knights!'
                    : 'Quân Trắng luôn đi trước. Các quân cờ tiêu diệt đối phương bằng cách di chuyển đè lên ô có quân địch. Không quân nào được nhảy qua đầu quân khác, ngoại trừ quân Mã!'}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-3 bg-[#FAF8F4] p-5 rounded-2xl border border-neutral-200/65 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">4</span>
                  <span className="text-xl">🌟</span>
                </div>
                <h5 className="font-sans font-black text-xs text-neutral-950 uppercase">
                  {lang === 'en' ? '4. Special Moves' : '4. Nước Đi Đặc Biệt'}
                </h5>
                <p className="font-sans text-[11px] text-neutral-500 leading-normal font-semibold">
                  {lang === 'en'
                    ? 'Learn Castling to protect your King and activate your Rook simultaneously. Guide a Pawn to the end row to promote it to a mighty Queen!'
                    : 'Học cách Nhập thành (Castling) để đưa Vua vào vùng an toàn và đưa Xe ra tham chiến. Đưa quân Tốt tới cuối bàn cờ để Phong cấp thành quân Hậu hùng mạnh!'}
                </p>
              </div>
            </div>
          </div>

          {/* Setup board symbols description bar */}
          <div className="bg-[#FAF8F4] border border-neutral-200 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl text-center md:text-left">
              <h6 className="font-sans font-bold text-xs text-neutral-900 uppercase tracking-wide">
                {lang === 'en' ? '♟️ Familiarize with the Key Royal Figures' : '♟️ Làm Quen Với Các Nhân Vật Hoàng Gia'}
              </h6>
              <p className="font-sans text-[11px] text-neutral-500 leading-relaxed font-semibold">
                {lang === 'en'
                  ? 'The King (♔) is fragile but priceless. The Queen (♕) is your most powerful attacker. Rooks (♖) guard corners, Bishops (♗) command diagonals, Knights (♘) leap, and Pawns (♙) advance.'
                  : 'Vua (♔) mỏng manh nhưng vô giá. Hậu (♕) là quân tấn công mạnh nhất. Xe (♖) trấn giữ các góc, Tượng (♗) làm chủ các đường chéo, Mã (♘) đi lắt léo và Tốt (♙) tiến lên dũng mãnh.'}
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 bg-white px-4 py-2.5 rounded-xl border border-neutral-200">
              <span className="font-mono text-lg font-bold text-neutral-950">♔</span>
              <span className="font-mono text-lg font-bold text-neutral-950">♕</span>
              <span className="font-mono text-lg font-bold text-neutral-950">♖</span>
              <span className="font-mono text-lg font-bold text-neutral-950">♗</span>
              <span className="font-mono text-lg font-bold text-neutral-950">♘</span>
              <span className="font-mono text-lg font-bold text-neutral-950">♙</span>
            </div>
          </div>
        </div>

        {/* Tactical Pathway to Menu or Board Games */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="bg-white text-neutral-800 rounded-3xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-neutral-100 text-amber-800 text-[9px] font-mono uppercase font-bold tracking-widest rounded border border-neutral-200">
                {lang === 'en' ? 'Grandmaster Pairings' : 'Kỳ Hội Ẩm Thực'}
              </span>
              <h4 className="font-sans font-extrabold text-sm text-neutral-900 uppercase mt-1">
                {lang === 'en' ? 'Pair your deep thoughts with cold pours' : 'Thưởng vị ẩm thực tao nhã bên bàn cờ'}
              </h4>
              <p className="font-sans text-xs text-neutral-500 max-w-xl font-semibold">
                {lang === 'en'
                  ? 'A tactical duel is best enjoyed with our signature craft beers, custom classic cocktails, or fresh hand-brewed coffees. Browse our menu!'
                  : 'Một ván cờ tao nhã trọn vẹn nhất khi đi kèm ly bia thủ công lạnh mát, ly cocktail cổ điển ấm cúng hay tách cà phê Specialty thơm lừng.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('board-games')}
                className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 border border-neutral-200"
              >
                {lang === 'en' ? 'Other Boardgames' : 'Các Trò Chơi Khác'}
              </button>

              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Trophy className="w-3.5 h-3.5 text-white animate-bounce" />
                <span>{lang === 'en' ? 'Browse Food Board' : 'Thực Đơn Saime'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
