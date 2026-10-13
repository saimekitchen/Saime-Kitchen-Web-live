import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../utils/i18n';

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ReservationDrawer: React.FC<ReservationDrawerProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const getTodayDateString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const today = getTodayDateString();
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>(today);
  const [time, setTime] = useState<string>('18:30');
  const [seatingArea, setSeatingArea] = useState<string>('main');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const t = translations[currentLang];
  const isVi = currentLang === 'vi';

  if (!isOpen) return null;

  const seatingLabels: Record<string, { en: string; vi: string }> = {
    main: { en: 'Main Dining Room', vi: 'Phòng Ăn Chính' },
    counter: { en: 'Cocktail Bar Counter', vi: 'Quầy Cocktail Bar' },
    patio: { en: 'Open Air Patio', vi: 'Sân Vườn Thoáng Mát' },
  };

  const seatingText = seatingLabels[seatingArea]?.[currentLang] || seatingArea;

  const getFormattedMessage = () => {
    return isVi
      ? `🥂 YÊU CẦU ĐẶT BÀN — SAIME INTROVERTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Khách hàng: ${name || 'Khách'}
📞 Số điện thoại: ${phone || 'Chưa cung cấp'}
📅 Ngày đặt: ${date}
⏰ Khung giờ: ${time}
👥 Số lượng khách: ${guests} người
🪑 Khu vực ngồi: ${seatingText}
💬 Yêu cầu / Ghi chú: ${notes.trim() ? notes.trim() : 'Không có'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 144 Lý Thái Tổ, Hội An | Saime Introverts`
      : `🥂 TABLE RESERVATION — SAIME INTROVERTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Guest Name: ${name || 'Guest'}
📞 Phone Number: ${phone || 'Not provided'}
📅 Date: ${date}
⏰ Time: ${time}
👥 Party Size: ${guests} ${guests === 1 ? 'Guest' : 'Guests'}
🪑 Seating Preference: ${seatingText}
💬 Special Notes: ${notes.trim() ? notes.trim() : 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 144 Ly Thai To, Hoi An | Saime Introverts`;
  };

  const messengerUrl = 'https://www.facebook.com/messages/t/1121358051063119';
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61589897489896';

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedDetail = getFormattedMessage();

    // Copy formatted details to clipboard for convenience
    copyToClipboard(formattedDetail);

    // Open Messenger directly
    try {
      window.open(messengerUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // In case pop-ups are blocked
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 subtle-blur transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full w-full flex justify-end">
        <div className="w-full max-w-md bg-[#16171d] border-l border-white/10 shadow-2xl p-5 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-full">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#e63946] uppercase block">
                  {t.resBadge}
                </span>
                <h2 className="font-display font-dm-sans text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {t.resTitle}
                </h2>
                <p className="text-[11px] sm:text-xs text-white/60 mt-0.5">
                  {t.resSubtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors text-xl leading-none"
                id="drawer-close-btn"
                aria-label="Close Reservation Form"
              >
                &times;
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#e63946]/20 border border-[#e63946]/40 flex items-center justify-center mx-auto text-[#e63946] text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-display font-dm-sans text-xl font-bold text-white">
                    {t.resSuccessTitle}
                  </h3>
                  <p className="text-xs text-white/70 max-w-xs mx-auto leading-relaxed mt-1">
                    {t.resSuccessMsg}
                  </p>
                </div>

                {/* Formatted Details Preview Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs font-mono space-y-1.5 mt-4 text-white/80 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {getFormattedMessage()}
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0084FF] hover:bg-[#0073e6] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#0084FF]/25 active:scale-95"
                    id="direct-messenger-btn"
                  >
                    <span>💬</span>
                    <span>{t.resSendMessengerBtn}</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(getFormattedMessage())}
                      className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                      id="copy-res-details-btn"
                    >
                      <span>{copied ? '✓' : '📋'}</span>
                      <span className="truncate">{copied ? t.resDetailsCopied : t.resCopyDetailsBtn}</span>
                    </button>

                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>🌐</span>
                      <span className="truncate">{t.footerFacebook}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-white/50">
                  {t.resMessengerHint}
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="mt-4 w-full py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 text-xs font-medium transition-all"
                >
                  {t.resSuccessClose}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-5 text-xs">
                {/* Party Size */}
                <div className="space-y-2">
                  <label className="block text-white/70 font-semibold uppercase tracking-wider text-[10px]">
                    {t.resGuests}
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 6].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`py-2 rounded-xl border text-xs font-medium transition-all ${
                          guests === num
                            ? 'bg-[#e63946] border-[#e63946] text-white font-bold'
                            : 'border-white/10 text-white/70 hover:bg-white/5'
                        }`}
                      >
                        {num} {num === 6 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="block text-white/70 font-semibold uppercase tracking-wider text-[10px]">
                      {t.resDate}
                    </label>
                    <input
                      type="date"
                      value={date}
                      min={today}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!val || val < today) {
                          setDate(today);
                        } else {
                          setDate(val);
                        }
                      }}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-white/70 font-semibold uppercase tracking-wider text-[10px]">
                      {t.resTime}
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#1d1f27] border border-white/10 text-white text-xs focus:outline-none focus:border-[#e63946]"
                    >
                      <option value="15:00">3:00 PM (Aperitivo)</option>
                      <option value="16:30">4:30 PM (Early Sips)</option>
                      <option value="18:00">6:00 PM (Sunset)</option>
                      <option value="19:30">7:30 PM (Prime Dinner)</option>
                      <option value="21:00">9:00 PM (Late Bites)</option>
                      <option value="22:00">10:00 PM (Nightcap)</option>
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div className="space-y-2">
                  <label className="block text-white/70 font-semibold uppercase tracking-wider text-[10px]">
                    {t.resSeatingArea}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setSeatingArea('main')}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        seatingArea === 'main'
                          ? 'bg-[#e63946] border-[#e63946] text-white font-bold'
                          : 'border-white/10 text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {t.resSeatingMain}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeatingArea('counter')}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        seatingArea === 'counter'
                          ? 'bg-[#e63946] border-[#e63946] text-white font-bold'
                          : 'border-white/10 text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {t.resSeatingCounter}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeatingArea('patio')}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        seatingArea === 'patio'
                          ? 'bg-[#e63946] border-[#e63946] text-white font-bold'
                          : 'border-white/10 text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {t.resSeatingPatio}
                    </button>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label className="block text-white/70 font-medium text-[11px]">
                      {t.resContactName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#e63946]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-white/70 font-medium text-[11px]">
                      {t.resContactPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+84 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#e63946]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-white/70 font-medium text-[11px]">
                      {t.resSpecialNotes}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={t.resSpecialNotesPlaceholder}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#e63946]"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#e63946] hover:bg-[#d62839] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    <span>{isSubmitting ? t.resSubmitting : t.resConfirmBtn}</span>
                  </button>
                  <p className="text-[10px] text-white/40 text-center mt-2">
                    {isVi ? 'Tự động định dạng và gửi trực tiếp qua Facebook Messenger' : 'Auto formats details and opens Facebook Messenger'}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/10 text-[11px] text-white/40 flex items-center justify-between">
            <span>{t.resNoteHelp}</span>
            <a
              href="tel:+84964023683"
              className="text-[#e63946] hover:underline font-semibold whitespace-nowrap ml-2"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

