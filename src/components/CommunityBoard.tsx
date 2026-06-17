import { useState, useEffect, FormEvent } from 'react';
import { Send, Users, MessageSquare, Heart, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { GuestbookEntry } from '../types';
import { PREPOPULATED_GUESTBOOK } from '../data';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

// Help extract flag emoji and place string for beautiful flag rendering & high contrast badges
function parseLocation(loc: string) {
  const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g;
  const match = loc.match(flagRegex);
  const flag = match ? match[0] : '';
  const cleanLoc = loc.replace(flagRegex, '').trim().replace(/,\s*$/, '').trim();
  return { flag, cleanLocation: cleanLoc || loc };
}

interface CommunityBoardProps {
  lang: 'en' | 'vn';
}

export default function CommunityBoard({ lang }: CommunityBoardProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [totalSharedMeals, setTotalSharedMeals] = useState<number>(1482);
  const [isLiking, setIsLiking] = useState<{ [key: string]: boolean }>({});

  const t = translations[lang];

  const avatars = [
    { id: 1, label: '🥑', bg: 'bg-green-100 border-green-200' },
    { id: 2, label: '🍜', bg: 'bg-amber-100 border-amber-200' },
    { id: 3, label: '🌶️', bg: 'bg-red-100 border-red-200' },
    { id: 4, label: '🥖', bg: 'bg-orange-100 border-orange-200' },
    { id: 5, label: '☕', bg: 'bg-yellow-105 border-yellow-200' },
    { id: 6, label: '🥥', bg: 'bg-teal-100 border-teal-200' },
  ];

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('saime_guestbook');
    let finalEntries = PREPOPULATED_GUESTBOOK;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge missing defaults from PREPOPULATED_GUESTBOOK to make sure they are got
          const existingIds = new Set(parsed.map((e: any) => e.id));
          const missingDefaults = PREPOPULATED_GUESTBOOK.filter(item => !existingIds.has(item.id));
          if (missingDefaults.length > 0) {
            finalEntries = [...parsed, ...missingDefaults];
            localStorage.setItem('saime_guestbook', JSON.stringify(finalEntries));
          } else {
            finalEntries = parsed;
          }
        }
      } catch (e) {
        console.error('Error loading guestbook', e);
      }
    } else {
      localStorage.setItem('saime_guestbook', JSON.stringify(PREPOPULATED_GUESTBOOK));
    }
    setEntries(finalEntries);

    // Dynamic fake counter increment for visual life
    const interval = setInterval(() => {
      setTotalSharedMeals(p => p + (Math.random() > 0.6 ? 1 : 0));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const saveEntries = (updated: GuestbookEntry[]) => {
    setEntries(updated);
    localStorage.setItem('saime_guestbook', JSON.stringify(updated));
  };

  const handlePostMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim() || !message.trim()) {
      return;
    }

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      location: location.trim(),
      message: message.trim(),
      avatarId: selectedAvatar,
      timestamp: lang === 'en' ? 'Just now' : 'Vừa xong'
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);

    // Reset inputs
    setName('');
    setLocation('');
    setMessage('');
    
    // Toggle success animation
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
  };

  const handleToggleLike = (id: string) => {
    setIsLiking(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getAvatarConfig = (id: number) => {
    return avatars.find(a => a.id === id) || avatars[0];
  };

  return (
    <section id="community" className="py-20 bg-sand/20 border-t border-sand-dark/15 relative overflow-hidden">
      {/* Decorative and organic accents */}
      <div className="absolute top-1/2 left-[-10%] w-[350px] h-[350px] rounded-full bg-tropical/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-[-5%] w-[250px] h-[250px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="community-header" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-tropical-light text-tropical-dark px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
            🌿 {lang === 'en' ? 'Saime Gathering Hub' : 'Điểm Hẹn Gặp Gỡ Saime'}
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-dark tracking-tight uppercase">
            {t.boardTitle}
          </h2>
          <p className="font-sans text-neutral-muted text-sm sm:text-base leading-relaxed">
            {t.boardDesc}
          </p>

          {/* Social Stats/Counter Grid representing human attachment and real gathering count */}
          <div className="grid grid-cols-2 max-w-sm mx-auto gap-4 pt-4 select-none">
            <div className="bg-neutral-light border border-sand/40 p-3.5 rounded-2xl text-center shadow-sm">
              <span className="block font-display font-black text-lg sm:text-xl text-primary animate-pulse">
                {totalSharedMeals}
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-muted uppercase tracking-wider block mt-1">
                🤝 {lang === 'en' ? 'Meals Shared' : 'Tụ Họp Kết Nối'}
              </span>
            </div>
            <div className="bg-neutral-light border border-sand/40 p-3.5 rounded-2xl text-center shadow-sm">
              <span className="block font-display font-black text-lg sm:text-xl text-tropical">
                {entries.length + 312}
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-muted uppercase tracking-wider block mt-1">
                ✍️ {lang === 'en' ? 'Guestbook Notes' : 'Lưu bút gửi trao'}
              </span>
            </div>
          </div>
        </div>

        {/* Core Column Grid layout (Form left, Board right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Post Form Panel (5 columns on desktop) */}
          <div className="lg:col-span-5 polycarbonate rounded-[2rem] p-6 sm:p-8 relative overflow-hidden">
            <h3 className="font-display font-black text-base sm:text-lg text-neutral-dark flex items-center gap-2 border-b border-sand pb-3 mb-6 select-none uppercase tracking-tight">
              <MessageSquare className="w-5 h-5 text-primary" />
              {lang === 'en' ? 'Write a Note to Saime' : 'Gửi vài dòng lưu bút'}
            </h3>

            {formSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-12 h-12 bg-tropical-light rounded-full flex items-center justify-center text-tropical mx-auto">
                  <CheckCircle2 className="w-8 h-8 font-black" />
                </div>
                <h4 className="font-display font-bold text-neutral-dark text-lg">{lang === 'en' ? 'Thank You For Sharing!' : 'Cảm ơn sự chia sẻ của bạn!'}</h4>
                <p className="font-sans text-neutral-muted text-xs leading-relaxed max-w-xs mx-auto">
                  {lang === 'en' 
                    ? 'Your warm note is now pinned live to Sài Mẽ’s Long Table Board. The team and other diners can see it instantly!' 
                    : 'Lời chúc ấm áp từ bạn đã được ghim trực tiếp lên Bảng Kỷ Niệm Chiếc Bàn Dài. Đội ngũ Saime sẽ trân trọng nó rất nhiều.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handlePostMessage} className="space-y-4.5">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                    {t.boardLabelName} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Liam Nguyen, Linh"
                    maxLength={32}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand/30 border border-sand-dark/60 text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                    {t.boardLabelLoc} *
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="E.g. District 1, Saigon or Paris, FR"
                    maxLength={40}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand/30 border border-sand-dark/60 text-sm focus:outline-none focus:border-primary text-neutral-dark font-sans"
                    required
                  />
                </div>

                {/* Avatar Badge selection */}
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                    {lang === 'en' ? 'Pick a Table Icon' : 'Chọn một biểu tượng tại bàn'}
                  </label>
                  <div className="flex gap-2 flex-wrap select-none">
                    {avatars.map((av) => (
                      <button
                        key={av.id}
                        type="button"
                        onClick={() => setSelectedAvatar(av.id)}
                        className={`w-9 h-9 rounded-full border flex items-center justify-center text-base transition-all cursor-pointer ${av.bg} ${
                          selectedAvatar === av.id
                            ? 'scale-115 ring-2 ring-primary ring-offset-2 shadow-sm'
                            : 'scale-95 opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`Select avatar ${av.id}`}
                      >
                        {av.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                    {t.boardLabelMessage} *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'en' ? 'Write about atmosphere, favorite dish, or cocktail experience...' : 'Hãy viết về cảm xúc của bạn, ly cocktail tráng miệng, đĩa bánh mì chảo hay không khí ấm cúng tại đây...'}
                    maxLength={260}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand/30 border border-sand-dark/60 text-sm focus:outline-none focus:border-primary resize-none font-sans text-neutral-dark"
                    required
                  />
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-muted uppercase mt-1">
                    <span>{lang === 'en' ? 'Keep it friendly' : 'Hãy thật chân thành nhé'}</span>
                    <span>{message.length}/260</span>
                  </div>
                </div>

                <button
                  id="submit-guestbook-btn"
                  type="submit"
                  className="w-full py-3 rounded-full bg-neutral-dark hover:bg-neutral-dark/95 text-white font-display font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-transform active:scale-97 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 animate-pulse" />
                  {t.boardBtnSubmit}
                </button>
              </form>
            )}
          </div>

          {/* Live Feed Display (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-black text-base sm:text-lg text-neutral-dark flex items-center justify-between border-b border-sand pb-3 mb-6 select-none uppercase tracking-tight">
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-tropical" />
                {lang === 'en' ? `The Pinned Notes (${entries.length})` : `Bảng Ghi Nhớ Kỷ Niệm (${entries.length})`}
              </span>
              <span className="text-[10px] font-mono font-bold text-tropical px-2.5 py-0.5 bg-tropical-light rounded-full uppercase tracking-wider">
                Feed
              </span>
            </h3>

            {/* Scrollable board with beautiful entry items */}
            <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar select-none">
              <AnimatePresence initial={false}>
                {entries.map((entry) => {
                  const av = getAvatarConfig(entry.avatarId);
                  const isLiked = isLiking[entry.id];
                  
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={entry.id}
                      className="polycarbonate rounded-[1.5rem] p-5 transition-all duration-300 relative group flex items-start gap-4"
                    >
                      {/* Avatar */}
                      <div className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center text-lg shadow-inner ${av.bg}`}>
                        {av.label}
                      </div>

                      {/* Content details */}
                      <div className="flex-1 space-y-1 overflow-hidden">
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-display font-black text-sm text-neutral-dark">
                              {entry.name}
                            </span>
                            {(() => {
                              const { flag, cleanLocation } = parseLocation(entry.location);
                              return (
                                <>
                                  {flag && (
                                    <span className="text-xs sm:text-sm font-sans flex items-center justify-center leading-none select-none px-1.5 py-0.5 bg-white border border-sand-dark/30 rounded-md shadow-inner" title="Origin Country">
                                      {flag}
                                    </span>
                                  )}
                                  <span className="text-[10px] font-mono font-extrabold text-white bg-tropical/90 px-2 py-0.5 rounded-full flex items-center gap-0.5 shrink-0 uppercase tracking-wider shadow-xs">
                                    <MapPin className="w-2.5 h-2.5 text-white/80 shrink-0" />
                                    {cleanLocation}
                                  </span>
                                </>
                              );
                            })()}
                          </div>
                          <span className="text-[9px] font-mono text-neutral-dark font-extrabold whitespace-nowrap shrink-0">
                            {entry.timestamp}
                          </span>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-neutral-dark leading-relaxed font-normal break-words">
                          {entry.message}
                        </p>

                        {/* Interactive heart element */}
                        <div className="flex items-center gap-1 pt-1 justify-end">
                          <button
                            onClick={() => handleToggleLike(entry.id)}
                            className={`flex items-center gap-1 py-1 px-2.5 rounded-full text-[9px] font-mono font-bold border cursor-pointer transition-colors ${
                              isLiked
                                ? 'bg-primary-light/50 text-primary border-primary/20'
                                : 'bg-transparent text-neutral-muted border-transparent hover:border-sand'
                            }`}
                          >
                            <Heart className={`w-3 h-3 ${isLiked ? 'fill-primary text-primary' : 'text-neutral-muted'}`} />
                            <span>{isLiked ? (lang === 'en' ? 'Loved!' : 'Yêu thích!') : (lang === 'en' ? 'Love value' : 'Thích')}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
