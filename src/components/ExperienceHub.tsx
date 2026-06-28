import React, { useState, useEffect } from 'react';
import { RotateCcw, ArrowUpRight, Clock, Users, Sparkles, BookOpen, Utensils, Film, Calendar, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';

interface ExperienceHubProps {
  lang: 'en' | 'vn';
  activeTab: 'tastings' | 'puzzles' | 'games';
  setActiveTab: (tab: 'tastings' | 'puzzles' | 'games') => void;
  onGoToBooking: () => void;
  onNavigate?: (section: string) => void;
}

// --- DATA: Tastings ---
const tastingPackages = [
  {
    id: 'food',
    titleEn: 'Bespoke Culinary Flight',
    titleVn: 'Chuyến Bay Ẩm Thực',
    descEn: 'A curated journey through regional Vietnamese specialties paired with modern culinary techniques. Handcrafted for refined palates.',
    descVn: 'Hành trình khám phá các món ăn đặc sản vùng miền Việt Nam kết hợp kỹ thuật chế biến hiện đại. Thiết kế riêng cho khẩu vị tinh tế.',
    duration: '1h 30m',
    groupSizeEn: 'Max 8 people',
    groupSizeVn: 'Tối đa 8 khách',
    image: 'https://i.imgur.com/zdgN4Bq.jpeg',
    badgeEn: 'FOOD TASTING',
    badgeVn: 'NẾM THỬ ẨM THỰC',
    url: 'https://www.airbnb.com/hosting/listings/experience/7138897/view-your-experience'
  },
  {
    id: 'coffee',
    titleEn: 'Coffee Pour-Over & Pairing',
    titleVn: 'Trải Nghiệm Cà Phê Pour-Over',
    descEn: 'A masterclass in specialty coffee brewing. Smell, taste, and pair single-origin beans with delicate pastries in a quiet ambient space.',
    descVn: 'Lớp học chuyên sâu về pha chế cà phê đặc sản. Thưởng thức và ghép cặp hạt cà phê đơn nguồn gốc với các loại bánh ngọt tinh tế.',
    duration: '1h 30m',
    groupSizeEn: 'Max 6 people',
    groupSizeVn: 'Tối đa 6 khách',
    image: 'https://i.imgur.com/m8xUNJp.jpeg',
    badgeEn: 'COFFEE TASTING',
    badgeVn: 'NẾM THỬ CÀ PHÊ',
    url: 'https://www.airbnb.com/hosting/listings/experience/7147642/view-your-experience'
  },
  {
    id: 'cocktail',
    titleEn: 'Local Botanical Mixology',
    titleVn: 'Pha Chế Thảo Mộc Địa Phương',
    descEn: 'Discover modern cocktail craft using indigenous Vietnamese botanicals, secret shrubs, and premium spirits. Interactive and hands-on.',
    descVn: 'Khám phá nghệ thuật pha chế cocktail hiện đại từ thảo mộc bản địa Việt Nam, si-rô trái cây lên men và rượu mạnh hảo hạng.',
    duration: '1h 30m',
    groupSizeEn: 'Max 6 people',
    groupSizeVn: 'Tối đa 6 khách',
    image: 'https://i.imgur.com/QjLJOYr.jpeg',
    badgeEn: 'COCKTAIL TASTING',
    badgeVn: 'NẾM THỬ COCKTAIL',
    url: 'https://www.airbnb.com/hosting/listings/experience/7131498/view-your-experience'
  }
];

// --- DATA: Board Games ---
const gamesList = [
  {
    id: 'exploding-kittens',
    titleEn: 'Exploding Kittens',
    titleVn: 'Mèo Cảm Tử',
    players: '2 - 5',
    duration: '15 mins',
    typeEn: 'Party Strategy',
    typeVn: 'Chiến Thuật Nhóm',
    descEn: 'A kitty-powered version of Russian roulette. Players draw cards until someone draws an Exploding Kitten, at which point they explode unless they have a Defuse card!',
    descVn: 'Phiên bản mèo con cảm tử đầy hài hước. Người chơi rút bài cho đến khi trúng chú mèo phát nổ, trừ khi bạn sở hữu lá gỡ bom phòng thủ cực kỳ may mắn!',
    vibeEn: 'Hilarious Chaos',
    vibeVn: 'Hài Hước & Hỗn Loạn',
    bgGradient: 'from-orange-500/10 to-white',
    image: 'https://www.tcgpark.com/_next/image?url=https%3A%2F%2Fapi.tcgpark.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fexploding-kittens-2.jpg&w=3840&q=75'
  },
  {
    id: 'uno',
    titleEn: 'Uno Classic',
    titleVn: 'Bài Uno Kinh Điển',
    players: '2 - 10',
    duration: '10-20 mins',
    typeEn: 'Casual Card Game',
    typeVn: 'Bài Trực Quan Vui Vẻ',
    descEn: 'The world-famous color and number matching card game. Easy to pick up, impossible to put down. Just remember to scream "UNO!" when you have one card left.',
    descVn: 'Trò chơi bài so khớp màu sắc và số thứ tự nổi tiếng thế giới. Dễ làm quen, vô cùng gay cấn. Hãy nhớ hô vang "UNO!" khi bạn chỉ còn một lá bài trên tay.',
    vibeEn: 'Fast Competition',
    vibeVn: 'Nhanh & Kịch Tính',
    bgGradient: 'from-red-500/10 to-white',
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
    descEn: 'A stellar game of secrets, hidden roles, and psychological persuasion. Will the villagers uncover the wolves hiding among them before they strike?',
    descVn: 'Trò chơi đấu trí và thuyết phục tâm lý đỉnh cao. Liệu dân làng có thể lột trần bộ mặt của bầy sói hung ác đang ẩn thân trước khi bóng tối bao trùm?',
    vibeEn: 'Mystery & Bluffer',
    vibeVn: 'Bí Ẩn & Thuyết Phục',
    bgGradient: 'from-purple-500/10 to-white',
    image: 'https://kidsmandi.com/cdn/shop/files/71S2v8jLjzL._SL1100.jpg?v=1691414087&width=1946'
  },
  {
    id: 'chess',
    titleEn: 'Royal Chess',
    titleVn: 'Cờ Vua Quý Tộc',
    players: '2',
    duration: '20-60 mins',
    typeEn: 'Pure Strategy',
    typeVn: 'Trí Tuệ Đối Kháng',
    descEn: 'The timeless duel of minds. Enjoy a match with our premium custom wooden board in our quiet, ambient lounge space.',
    descVn: 'Cuộc đấu trí vượt thời gian của các kiện tướng. Tận hưởng ván đấu kịch tính bên bộ bàn cờ gỗ thủ công sang trọng tại góc lounge Saime.',
    vibeEn: 'Focus & Depth',
    vibeVn: 'Tập Trung & Sâu Sắc',
    bgGradient: 'from-amber-600/10 to-white',
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
    descEn: 'A high-quality standard deck of playing cards. Perfect for any classic card games like Poker, Blackjack, or traditional Vietnamese Tien Len.',
    descVn: 'Bộ bài Tây chất lượng cao. Thích hợp cho mọi cuộc chơi yêu thích tự do—từ Poker, Blackjack cho tới các ván Tiến Lên miền Nam đậm chất Việt.',
    vibeEn: 'Social & Classic',
    vibeVn: 'Cổ Điển & Tự Do',
    bgGradient: 'from-emerald-500/10 to-white',
    image: 'https://www.thoughtco.com/thmb/KkXIMbKrVpOpBpBB5RVhTX1tlS0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/royal-flush-172214648-bafb6213188744e981412665b63b6be2.jpg'
  }
];

export default function ExperienceHub({ lang, activeTab, setActiveTab, onGoToBooking, onNavigate }: ExperienceHubProps) {
  const t = translations[lang];

  // --- LOCAL STATE: Puzzles (Picture) ---
  const [solvedPieces, setSolvedPieces] = useState<number>(12);
  const [puzzleTimer, setPuzzleTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isPictureCompleted, setIsPictureCompleted] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isTimerRunning && !isPictureCompleted) {
      interval = setInterval(() => {
        setPuzzleTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isPictureCompleted]);

  const handlePlacePiece = () => {
    if (solvedPieces < 150) {
      const step = Math.min(150 - solvedPieces, Math.floor(Math.random() * 15) + 12);
      const nextPieces = solvedPieces + step;
      setSolvedPieces(nextPieces);
      if (nextPieces >= 150) {
        setIsPictureCompleted(true);
        setIsTimerRunning(false);
      }
    }
  };

  const resetPicturePuzzle = () => {
    setSolvedPieces(12);
    setPuzzleTimer(0);
    setIsTimerRunning(false);
    setIsPictureCompleted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- LOCAL STATE: Crossword ---
  const [crosswordTab, setCrosswordTab] = useState<'picture' | 'crossword' | 'sudoku'>('picture');
  const [crosswordAnswers, setCrosswordAnswers] = useState<string[][]>([
    ['', '', '', '', '', ''],
    ['', null, null, null, null, ''],
    ['', '', '', '', null, ''],
    ['', null, null, null, null, ''],
    ['', '', '', '', '', '']
  ]);
  const [crosswordStatus, setCrosswordStatus] = useState<'editing' | 'success' | 'fail'>('editing');

  const crosswordCorrect = [
    ['C', 'A', 'O', 'L', 'A', 'U'],
    ['O', null, null, null, null, 'N'],
    ['Z', 'E', 'S', 'T', null, 'I'],
    ['O', null, null, null, null, 'O'],
    ['N', 'U', 'G', 'G', 'E', 'T']
  ];

  const handleCrosswordCellChange = (row: number, col: number, val: string) => {
    const updated = [...crosswordAnswers];
    updated[row][col] = val.toUpperCase().slice(0, 1);
    setCrosswordAnswers(updated);
    setCrosswordStatus('editing');
  };

  const checkCrossword = () => {
    let isCorrect = true;
    for (let r = 0; r < crosswordCorrect.length; r++) {
      for (let c = 0; c < crosswordCorrect[r].length; c++) {
        if (crosswordCorrect[r][c] !== null) {
          if (crosswordAnswers[r][c] !== crosswordCorrect[r][c]) {
            isCorrect = false;
            break;
          }
        }
      }
    }
    setCrosswordStatus(isCorrect ? 'success' : 'fail');
  };

  const revealCrossword = () => {
    setCrosswordAnswers(JSON.parse(JSON.stringify(crosswordCorrect)));
    setCrosswordStatus('success');
  };

  const resetCrossword = () => {
    setCrosswordAnswers([
      ['', '', '', '', '', ''],
      ['', null, null, null, null, ''],
      ['', '', '', '', null, ''],
      ['', null, null, null, null, ''],
      ['', '', '', '', '', '']
    ]);
    setCrosswordStatus('editing');
  };

  // --- LOCAL STATE: Sudoku ---
  const sudokuInitial = [
    [1, 0, 3, 0],
    [0, 0, 0, 2],
    [3, 0, 0, 0],
    [0, 2, 0, 4]
  ];
  const sudokuCorrect = [
    [1, 4, 3, 2],
    [2, 3, 4, 1],
    [3, 1, 2, 4],
    [4, 2, 1, 3]
  ];

  const [sudokuBoard, setSudokuBoard] = useState<number[][]>([
    [1, 0, 3, 0],
    [0, 0, 0, 2],
    [3, 0, 0, 0],
    [0, 2, 0, 4]
  ]);
  const [sudokuStatus, setSudokuStatus] = useState<'editing' | 'success' | 'fail'>('editing');

  const handleSudokuCellChange = (row: number, col: number, val: string) => {
    const num = parseInt(val);
    const updated = [...sudokuBoard];
    if (isNaN(num) || num < 1 || num > 4) {
      updated[row][col] = 0;
    } else {
      updated[row][col] = num;
    }
    setSudokuBoard(updated);
    setSudokuStatus('editing');
  };

  const checkSudoku = () => {
    let isCorrect = true;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (sudokuBoard[r][c] !== sudokuCorrect[r][c]) {
          isCorrect = false;
        }
      }
    }
    setSudokuStatus(isCorrect ? 'success' : 'fail');
  };

  const solveSudoku = () => {
    setSudokuBoard(JSON.parse(JSON.stringify(sudokuCorrect)));
    setSudokuStatus('success');
  };

  const resetSudoku = () => {
    setSudokuBoard([
      [1, 0, 3, 0],
      [0, 0, 0, 2],
      [3, 0, 0, 0],
      [0, 2, 0, 4]
    ]);
    setSudokuStatus('editing');
  };

  // --- LOCAL STATE: Board Games ---
  const [gameFilter, setGameFilter] = useState<string>('all');
  const filteredGames = gameFilter === 'all' 
    ? gamesList 
    : gamesList.filter(g => g.typeEn.toLowerCase().includes(gameFilter) || g.typeVn.toLowerCase().includes(gameFilter));

  const tabLabels = [
    { id: 'tastings', labelEn: 'Tasting Experiences', labelVn: 'Hành Trình Nếm Thử' },
    { id: 'puzzles', labelEn: 'All-Day Puzzles', labelVn: 'Mini Games Trí Tuệ' },
    { id: 'games', labelEn: 'Board Games Lounge', labelVn: 'Góc Board Games' }
  ];

  return (
    <section id="lounge-hub" className="py-16 sm:py-24 bg-[#FCFCFA] relative overflow-hidden text-neutral-dark border-b border-neutral-200">
      {/* Visual background ambient details */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Crisp Airbnb-inspired centered headers */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200/50 font-sans text-[10px] uppercase font-bold tracking-wider">
            <span>{lang === 'en' ? 'Refined Sociability' : 'Sự Gắn Kết Tinh Tế'}</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-neutral-900 uppercase">
            {lang === 'en' ? 'The Saime Experience Lounge' : 'Góc Trải Nghiệm Saime'}
          </h2>
          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed">
            {lang === 'en'
              ? 'Thoughtful social activities carefully crafted for deep conversations, warm afternoons, and laughter with companions.'
              : 'Những hoạt động giải trí nhẹ nhàng được chọn lọc để tạo không gian chuyện trò, thư thái bên cạnh những người bạn đồng hành.'}
          </p>
        </div>

        {/* Airbnb-style Segmented Control Navigation Tab Bar */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-neutral-100/80 rounded-full border border-neutral-200/50 shadow-xs max-w-full overflow-x-auto">
            {tabLabels.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2.5 px-5 sm:px-6 rounded-full font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all text-center whitespace-nowrap ${
                    isSelected
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-950'
                  }`}
                >
                  {lang === 'en' ? tab.labelEn : tab.labelVn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Box Container - Clean background, soft borders and delicate shadows */}
        <div className="bg-white rounded-[2rem] border border-neutral-200 p-6 sm:p-10 shadow-xs min-h-[420px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* TASTINGS TAB */}
            {activeTab === 'tastings' && (
              <motion.div
                key="tastings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tastingPackages.map((pkg) => (
                    <div 
                      key={pkg.id} 
                      className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col h-full shadow-xs hover:shadow-md transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative bg-neutral-100 border-b border-neutral-200/50">
                        <img 
                          src={pkg.image} 
                          alt={lang === 'en' ? pkg.titleEn : pkg.titleVn}
                          className="w-full h-full object-cover saturate-[0.9] group-hover:scale-102 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-rose-600 border border-neutral-200/50 font-sans text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                          {lang === 'en' ? pkg.badgeEn : pkg.badgeVn}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-sans font-extrabold text-base text-neutral-900 uppercase tracking-tight">
                            {lang === 'en' ? pkg.titleEn : pkg.titleVn}
                          </h4>
                          <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed">
                            {lang === 'en' ? pkg.descEn : pkg.descVn}
                          </p>
                        </div>

                        <div className="space-y-3.5 pt-3 border-t border-neutral-100">
                          <div className="flex items-center justify-between text-[11px] font-sans font-bold text-neutral-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-neutral-400" />
                              {pkg.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-neutral-400" />
                              {lang === 'en' ? pkg.groupSizeEn : pkg.groupSizeVn}
                            </span>
                          </div>

                          <a
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center shadow-xs"
                          >
                            <span>{lang === 'en' ? 'Book on Airbnb' : 'Đặt trải nghiệm trên Airbnb'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-6 text-center space-y-3">
                  <h4 className="font-sans font-extrabold text-sm text-neutral-900 uppercase tracking-wide">
                    {lang === 'en' ? 'Want a private, custom culinary flight?' : 'Bạn muốn thiết kế một trải nghiệm tiệc riêng tư?'}
                  </h4>
                  <p className="font-sans text-neutral-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Our team specializes in tailored corporate retreats, private anniversary flights, and small gatherings. Let us coordinate a masterpiece together.'
                      : 'Đội ngũ Saime chuyên nghiệp sẵn lòng tư vấn và tổ chức các sự kiện họp mặt ấm cúng, tinh tế, được may đo hoàn hảo theo sở thích của bạn.'}
                  </p>
                  <button
                    onClick={onGoToBooking}
                    className="mt-2 px-5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-850 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all shadow-xs"
                  >
                    {lang === 'en' ? 'Contact our Host' : 'Liên Hệ Đặt Chỗ Ngay'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* PUZZLES TAB */}
            {activeTab === 'puzzles' && (
              <motion.div
                key="puzzles"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Embedded Sub-tabs for Puzzles */}
                <div className="flex justify-center border-b border-neutral-100 pb-3 mb-6 gap-6">
                  {(['picture', 'crossword', 'sudoku'] as const).map((sub) => {
                    const isSelected = crosswordTab === sub;
                    return (
                      <button
                        key={sub}
                        onClick={() => setCrosswordTab(sub)}
                        className={`font-sans font-bold text-[11px] uppercase tracking-wider pb-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'text-rose-600 border-b-2 border-rose-600 font-extrabold'
                            : 'text-neutral-400 hover:text-neutral-700'
                        }`}
                      >
                        {sub === 'picture' && (lang === 'en' ? 'Picture Puzzle' : 'Tranh Ghép Gỗ')}
                        {sub === 'crossword' && (lang === 'en' ? 'Crossword' : 'Giải Ô Chữ')}
                        {sub === 'sudoku' && (lang === 'en' ? 'Mini Sudoku' : 'Mini Sudoku')}
                      </button>
                    );
                  })}
                </div>

                {crosswordTab === 'picture' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                      <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
                          alt="Hoi An Art Painting"
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            isPictureCompleted ? 'blur-0 saturate-100' : 'blur-[3px] saturate-[0.1]'
                          }`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 opacity-15 pointer-events-none">
                          {Array.from({ length: 20 }).map((_, idx) => (
                            <div key={idx} className="border border-neutral-400" />
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-3 bg-neutral-900/90 text-white px-2.5 py-1 rounded-md font-sans text-[10px] font-bold border border-white/10 flex items-center gap-1">
                          <span>🧩 {solvedPieces} / 150 {lang === 'en' ? 'pieces' : 'mảnh'}</span>
                        </div>

                        {isPictureCompleted && (
                          <div className="absolute inset-0 bg-neutral-900/95 flex flex-col items-center justify-center text-center p-6">
                            <span className="text-3xl">🏆</span>
                            <h4 className="font-sans font-extrabold text-base text-white uppercase tracking-tight mt-2">
                              {lang === 'en' ? 'PUZZLE COMPLETED!' : 'HOÀN THÀNH BỨC TRANH!'}
                            </h4>
                            <p className="text-amber-400 font-mono text-xs font-bold mt-1">
                              {lang === 'en' ? `Time spent: ${formatTime(puzzleTimer)}` : `Thời gian giải: ${formatTime(puzzleTimer)}`}
                            </p>
                            <button
                              onClick={resetPicturePuzzle}
                              className="mt-4 px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                            >
                              {lang === 'en' ? 'Solve Again' : 'Xếp lại'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <div>
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 border border-amber-200/50 font-sans text-[9px] font-bold uppercase rounded">
                          {lang === 'en' ? 'Mind Sharpener' : 'Thư Giãn Trí Tuệ'}
                        </span>
                        <h4 className="font-sans font-extrabold text-lg text-neutral-900 uppercase tracking-tight mt-1.5">
                          {lang === 'en' ? 'Hoi An Sunset (150 Pieces)' : 'Hoàng Hôn Hội An (150 Mảnh)'}
                        </h4>
                        <p className="font-sans text-neutral-500 text-xs sm:text-sm leading-relaxed mt-1">
                          {lang === 'en'
                            ? 'Our custom physical wooden box is ready in the lounge. Piecing together is incredibly relaxing under the warm lights. Feel free to simulate your run below against the stopwatch.'
                            : 'Mô hình tranh ghép gỗ thực tế tinh tế sẵn sàng phục vụ tại quầy. Rất thư thái để nhâm nhi tách trà và ghép tranh. Hãy thử ghép thử nghiệm nhanh trực tuyến dưới đây.'}
                        </p>
                      </div>

                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-600 font-bold">
                          <span>⏱️ {formatTime(puzzleTimer)}</span>
                          <span className="opacity-60">{lang === 'en' ? 'Goal: Under 20m' : 'Mục tiêu: Dưới 20p'}</span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between font-sans text-[9px] font-bold text-neutral-400">
                            <span>{lang === 'en' ? 'Progress' : 'Tiến độ'}</span>
                            <span>{Math.round((solvedPieces / 150) * 100)}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${(solvedPieces / 150) * 100}%` }} />
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {!isTimerRunning && !isPictureCompleted ? (
                            <button
                              onClick={() => { setIsTimerRunning(true); handlePlacePiece(); }}
                              className="flex-1 py-2 bg-neutral-900 hover:bg-neutral-850 text-white rounded-xl font-sans font-bold text-xs uppercase cursor-pointer"
                            >
                              {lang === 'en' ? 'Start & Fit' : 'Bắt Đầu Ghép'}
                            </button>
                          ) : isTimerRunning ? (
                            <button
                              onClick={handlePlacePiece}
                              className="flex-1 py-2 bg-amber-400 hover:bg-amber-500 text-neutral-900 rounded-xl font-sans font-bold text-xs uppercase cursor-pointer flex items-center justify-center gap-1"
                            >
                              <span>🧩 {lang === 'en' ? 'Fit Random Pieces' : 'Tìm mảnh khớp'}</span>
                            </button>
                          ) : null}

                          <button
                            onClick={resetPicturePuzzle}
                            className="px-2.5 py-2 bg-white hover:bg-neutral-100 text-neutral-700 rounded-xl border border-neutral-200 cursor-pointer"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {crosswordTab === 'crossword' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 flex flex-col items-center">
                      <div className="grid grid-cols-6 gap-1.5 p-3 bg-neutral-900 rounded-2xl shadow-xs">
                        {crosswordAnswers.map((rowArr, rIdx) =>
                          rowArr.map((cell, cIdx) => {
                            const isBlocked = cell === null;
                            return (
                              <div key={`${rIdx}-${cIdx}`} className="aspect-square w-9 sm:w-11 relative">
                                {isBlocked ? (
                                  <div className="w-full h-full bg-neutral-950 rounded-md" />
                                ) : (
                                  <input
                                    type="text"
                                    maxLength={1}
                                    value={cell}
                                    onChange={(e) => handleCrosswordCellChange(rIdx, cIdx, e.target.value)}
                                    className={`w-full h-full text-center font-sans font-extrabold text-xs sm:text-sm rounded-md border border-neutral-300 uppercase focus:outline-none focus:bg-amber-50 ${
                                      crosswordStatus === 'success'
                                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                        : crosswordStatus === 'fail'
                                        ? 'bg-rose-50 text-rose-800 border-rose-300'
                                        : 'bg-white text-neutral-800'
                                    }`}
                                  />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={checkCrossword}
                          className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-lg font-sans text-[10px] font-bold uppercase cursor-pointer"
                        >
                          {lang === 'en' ? 'Check' : 'Kiểm Tra'}
                        </button>
                        <button
                          onClick={revealCrossword}
                          className="px-4 py-1.5 bg-amber-400 hover:bg-amber-500 text-neutral-900 rounded-lg font-sans text-[10px] font-bold uppercase cursor-pointer"
                        >
                          {lang === 'en' ? 'Reveal' : 'Đáp Án'}
                        </button>
                        <button
                          onClick={resetCrossword}
                          className="p-1.5 bg-white hover:bg-neutral-100 text-neutral-600 rounded-lg border border-neutral-200 cursor-pointer flex items-center justify-center"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-3 font-sans text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-100 font-sans text-[9px] font-bold uppercase rounded">
                          {lang === 'en' ? 'Mind Sharpener' : 'Giải Mã Ô Chữ'}
                        </span>
                        <h4 className="font-sans font-extrabold text-lg text-neutral-900 uppercase tracking-tight">
                          {lang === 'en' ? 'Saime Lounge Crossword' : 'Giải Ô Chữ Saime'}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-sans font-bold text-neutral-800 uppercase text-[10px] border-b border-neutral-100 pb-0.5">Horizontal (Across)</h5>
                          <ul className="space-y-1.5 text-neutral-500 mt-1 text-[11px] sm:text-xs font-semibold">
                            <li><strong className="text-rose-600">1.</strong> {lang === 'en' ? 'Famous pork noodle of Hoi An.' : 'Món mì xá xíu đặc sản Hội An.'}</li>
                            <li><strong className="text-rose-600">3.</strong> {lang === 'en' ? 'Lemon peel aroma.' : 'Vị tươi mát mát lạnh của vỏ chanh.'}</li>
                            <li><strong className="text-rose-600">4.</strong> {lang === 'en' ? 'Golden fried chicken nugget.' : 'Gà viên chiên giòn rụm xem phim.'}</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-sans font-bold text-neutral-800 uppercase text-[10px] border-b border-neutral-100 pb-0.5">Vertical (Down)</h5>
                          <ul className="space-y-1.5 text-neutral-500 mt-1 text-[11px] sm:text-xs font-semibold">
                            <li><strong className="text-rose-600">1.</strong> {lang === 'en' ? 'Cozy joint with warm ambiance.' : 'Góc nhỏ kết nối phục vụ đồ ăn ấm cúng.'}</li>
                            <li><strong className="text-rose-600">2.</strong> {lang === 'en' ? 'Non-alcoholic barley brew.' : 'Bia lúa mạch Heineken không cồn mát lạnh.'}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {crosswordTab === 'sudoku' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 flex flex-col items-center">
                      <div className="grid grid-cols-4 gap-2 p-3 bg-neutral-900 rounded-2xl shadow-xs">
                        {sudokuBoard.map((rowArr, rIdx) =>
                          rowArr.map((cell, cIdx) => {
                            const isFixed = sudokuInitial[rIdx][cIdx] !== 0;
                            return (
                              <div key={`s-${rIdx}-${cIdx}`} className="aspect-square w-11 sm:w-13 relative">
                                {isFixed ? (
                                  <div className="w-full h-full bg-[#FCFCFA] rounded-lg border border-neutral-300 flex items-center justify-center font-sans font-extrabold text-sm sm:text-base text-neutral-800">
                                    {cell}
                                  </div>
                                ) : (
                                  <input
                                    type="text"
                                    maxLength={1}
                                    value={cell === 0 ? '' : cell}
                                    onChange={(e) => handleSudokuCellChange(rIdx, cIdx, e.target.value)}
                                    className={`w-full h-full text-center font-sans font-extrabold text-sm sm:text-base rounded-lg border border-neutral-300 focus:outline-none focus:bg-amber-50 ${
                                      sudokuStatus === 'success'
                                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                        : sudokuStatus === 'fail'
                                        ? 'bg-rose-50 text-rose-800 border-rose-300'
                                        : 'bg-white text-rose-600'
                                    }`}
                                  />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={checkSudoku}
                          className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-lg font-sans text-[10px] font-bold uppercase cursor-pointer"
                        >
                          {lang === 'en' ? 'Check Sudoku' : 'Kiểm tra'}
                        </button>
                        <button
                          onClick={solveSudoku}
                          className="px-4 py-1.5 bg-amber-400 hover:bg-amber-500 text-neutral-900 rounded-lg font-sans text-[10px] font-bold uppercase cursor-pointer"
                        >
                          {lang === 'en' ? 'Auto Solve' : 'Tự Động Giải'}
                        </button>
                        <button
                          onClick={resetSudoku}
                          className="p-1.5 bg-white hover:bg-neutral-100 text-neutral-600 rounded-lg border border-neutral-200 cursor-pointer flex items-center justify-center"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-3 font-sans text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-100 font-sans text-[9px] font-bold uppercase rounded">
                          {lang === 'en' ? 'Mind Sharpener' : 'Trí Tuệ'}
                        </span>
                        <h4 className="font-sans font-extrabold text-lg text-neutral-900 uppercase tracking-tight">
                          {lang === 'en' ? 'Quick 4x4 Coffee Sudoku' : 'Mini Sudoku 4x4 Thư Giãn'}
                        </h4>
                        <p className="font-sans text-neutral-500 mt-1 leading-relaxed">
                          {lang === 'en'
                            ? 'Fill the grid so every row, column, and 2x2 box contains numbers 1-4 without repetition. Ideal with your morning latte or midnight craft brew.'
                            : 'Điền các số 1-4 sao cho mỗi dòng, cột và hộp 2x2 không trùng lặp số. Rất hoàn hảo để thư thái trí tuệ bên cạnh tách cà phê.'}
                        </p>
                      </div>

                      <div className="p-3 bg-amber-50 border border-amber-200 text-[11px] leading-relaxed rounded-xl font-semibold text-amber-800">
                        {lang === 'en' 
                          ? 'SAIME TIP: Row 1 already has 1 and 3. The empty cells must be filled with 2 and 4. Since Col 2 has a 2, the other cell is 4!'
                          : 'MẸO: Hàng đầu tiên đã có 1 và 3. Hai ô trống còn lại là 2 và 4. Vì cột 2 đã chứa số 2 rồi nên ô kề bên buộc phải là số 4!'}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* BOARD GAMES TAB */}
            {activeTab === 'games' && (
              <motion.div
                key="games"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Clean minimalist filters */}
                <div className="flex flex-wrap justify-center gap-2 border-b border-neutral-100 pb-5">
                  {[
                    { id: 'all', en: 'All Board Games', vn: 'Tất Cả' },
                    { id: 'party', en: 'Party & Fun', vn: 'Đồng Đội' },
                    { id: 'strategy', en: 'Strategy Duel', vn: 'Chiến Thuật' },
                    { id: 'deduction', en: 'Social Deduction', vn: 'Suy Luận Ẩn Vai' }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setGameFilter(filter.id)}
                      className={`px-4 py-2 rounded-full font-sans font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                        gameFilter === filter.id
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                          : 'bg-white text-neutral-500 border-neutral-200 hover:bg-neutral-50 hover:text-neutral-800'
                      }`}
                    >
                      {lang === 'en' ? filter.en : filter.vn}
                    </button>
                  ))}
                </div>

                {/* Airbnb-inspired Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredGames.map((game) => (
                    <div 
                      key={game.id} 
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-sm transition-all duration-350"
                    >
                      {/* High-quality Aspect ratio Image (Airbnb Style) */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50">
                        <img
                          src={game.image}
                          alt={game.titleEn}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 saturate-[0.9]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-neutral-800 font-sans text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neutral-200 shadow-xs">
                          {lang === 'en' ? game.vibeEn : game.vibeVn}
                        </div>
                      </div>

                      {/* Info Content Area - Strictly NO EMOJIS in title or body */}
                      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                        <div className="space-y-1.5">
                          <div className="font-sans text-[10px] uppercase tracking-wider text-rose-600 font-extrabold">
                            {lang === 'en' ? game.typeEn : game.typeVn}
                          </div>

                          <h5 className="font-sans font-extrabold text-base text-neutral-900 uppercase tracking-tight leading-snug">
                            {lang === 'en' ? game.titleEn : game.titleVn}
                          </h5>

                          {/* Compact players & duration text indicator using elegant Icons */}
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

                          <p className="font-sans text-neutral-500 text-xs leading-relaxed font-semibold">
                            {lang === 'en' ? game.descEn : game.descVn}
                          </p>
                        </div>

                        {/* Booking/Complimentary footer badge */}
                        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                          <span className="font-sans text-[9px] text-neutral-400 uppercase font-bold">
                            {lang === 'en' ? 'Access' : 'Sử dụng'}
                          </span>
                          <span className="font-sans font-bold text-[10px] text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                            {lang === 'en' ? 'Complimentary' : 'Phục Vụ Miễn Phí'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Dynamic Pathway Navigation (The requested bottom navigation buttons between pages) */}
        <div id="lounge-pathways" className="pt-8 border-t border-neutral-200">
          <div className="bg-neutral-50/50 rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-700 text-[9px] font-mono uppercase font-bold tracking-widest rounded">
                {lang === 'en' ? 'Continue Your Journey' : 'Hành Trình Tiếp Theo'}
              </span>
              <h4 className="font-sans font-extrabold text-base text-neutral-900 uppercase">
                {lang === 'en' ? 'What experiences fit your style next?' : 'Trải nghiệm nào tiếp theo sẽ dành cho bạn?'}
              </h4>
              <p className="font-sans text-xs text-neutral-500 max-w-xl font-medium">
                {lang === 'en'
                  ? 'Browse our mouth-watering homemade Bistro recipes or reserve a cozy long-table corner for your companion network.'
                  : 'Hãy ghé qua thực đơn các món ăn ngon béo đặc sản Saime, hoặc đặt trước chiếc bàn dài kết nối cho buổi họp mặt của bạn.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Utensils className="w-3.5 h-3.5 text-rose-500" />
                <span>{lang === 'en' ? 'Explore Menu' : 'Xem Thực Đơn'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('movie-night')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Film className="w-3.5 h-3.5 text-sky-500" />
                <span>{lang === 'en' ? 'Cinema Night' : 'Rạp Sân Sau'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('reservation')}
                className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Book Table' : 'Đặt Bàn Ngay'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
