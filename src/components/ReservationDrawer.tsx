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

  const PHONE_NUMBER_VN = '0964023683';
  const PHONE_NUMBER_INTL = '84964023683';

  // Generates the official chat URL:
  // - If in Vietnam (Vietnamese language), direct to Zalo chat: https://zalo.me/0964023683
  // - If in English, direct to WhatsApp chat: https://wa.me/84964023683?text=... (pre-filled ready to send)
  const getDirectChatUrl = (messageText: string) => {
    if (isVi) {
      return `https://zalo.me/${PHONE_NUMBER_VN}`;
    }
    return `https://wa.me/${PHONE_NUMBER_INTL}?text=${encodeURIComponent(messageText)}`;
  };

  const copyToClipboard = async (text: string): Promise<boolean> => {
    let succeeded = false;

    // 1. Try modern clipboard API
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        succeeded = true;
      } catch {
        succeeded = false;
      }
    }

    // 2. Robust fallback for iframes and mobile web browsers
    if (!succeeded) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '-9999px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        succeeded = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch {
        succeeded = false;
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
    return succeeded;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedDetail = getFormattedMessage();

    // 1. Copy formatted reservation template to clipboard
    copyToClipboard(formattedDetail);

    // 2. Generate target URL (Zalo for Vietnam, WhatsApp for English)
    const targetChatUrl = getDirectChatUrl(formattedDetail);

    // 3. Immediately redirect / launch Zalo or WhatsApp
    try {
      const link = document.createElement('a');
      link.href = targetChatUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = targetChatUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 250);
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
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 text-2xl font-bold">
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

                {/* Formatted Details Preview Box with Live Copied Indicator */}
                <div className="relative text-left">
                  <div className="flex items-center justify-between pb-1.5 px-1">
                    <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                      {isVi ? 'Mẫu Đặt Bàn Đã Sao Chép' : 'Copied Reservation Template'}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {copied ? (isVi ? '✓ Vừa sao chép!' : '✓ Just copied!') : (isVi ? '✓ Trong Clipboard' : '✓ In Clipboard')}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs font-mono space-y-1.5 text-white/80 whitespace-pre-wrap leading-relaxed shadow-inner max-h-56 overflow-y-auto">
                    {getFormattedMessage()}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={getDirectChatUrl(getFormattedMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
                      isVi
                        ? 'bg-[#0068FF] hover:bg-[#0058db] shadow-[#0068FF]/30'
                        : 'bg-[#25D366] hover:bg-[#20ba59] shadow-[#25D366]/30'
                    }`}
                    id="direct-chat-btn"
                  >
                    {isVi ? (
                      <>
                        <span className="font-extrabold text-[11px] px-1.5 py-0.5 bg-white text-[#0068FF] rounded font-sans leading-none">
                          Zalo
                        </span>
                        <span>{t.resSendActionBtn}</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 2C6.504 2 2 6.504 2 12.031c0 1.996.586 3.86 1.6 5.438L2.24 22l4.695-1.328a9.986 9.986 0 0 0 5.096 1.36h.005c5.526 0 10.03-4.504 10.03-10.031 0-2.68-1.043-5.2-2.936-7.094A9.96 9.96 0 0 0 12.031 2zm0 18.336h-.004a8.318 8.318 0 0 1-4.24-1.156l-.304-.18-2.783.787.799-2.711-.198-.316a8.274 8.274 0 0 1-1.272-4.729c0-4.59 3.734-8.324 8.328-8.324 2.223 0 4.313.867 5.883 2.438a8.27 8.27 0 0 1 2.434 5.887c0 4.59-3.734 8.324-8.328 8.324zm4.562-6.223c-.25-.125-1.477-.729-1.707-.812-.229-.084-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.167-.292.188-.542.062-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.244-1.48-1.39-1.73-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.312-.021-.437-.062-.125-.562-1.354-.77-1.854-.204-.488-.41-.422-.563-.43-.145-.008-.312-.01-.479-.01-.167 0-.438.062-.667.312-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.763 2.693 4.27 3.777.597.258 1.063.412 1.427.528.6.191 1.146.164 1.577.1.48-.072 1.477-.604 1.685-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z"/>
                        </svg>
                        <span>{t.resSendActionBtn}</span>
                      </>
                    )}
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
                      href="tel:+84964023683"
                      className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>📞</span>
                      <span className="truncate">{isVi ? 'Gọi 0964 023 683' : 'Call (+84) 964...'}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-white/50 leading-relaxed bg-white/[0.02] p-2.5 rounded-lg border border-white/5 text-left">
                  {isVi
                    ? '💡 Lưu ý: Mẫu đặt bàn đã được tự động lưu vào bộ nhớ tạm. Trong Zalo, bạn chỉ cần nhấn Dán (Ctrl+V hoặc chạm giữ chọn Dán) vào ô tin nhắn gửi đến 0964 023 683 để xác nhận.'
                    : '💡 Note: Your reservation details have been automatically pre-filled in WhatsApp and copied to your clipboard. Simply tap Send to confirm with our team.'}
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
                    className={`w-full py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 ${
                      isVi
                        ? 'bg-[#0068FF] hover:bg-[#0058db] shadow-[#0068FF]/30'
                        : 'bg-[#25D366] hover:bg-[#20ba59] shadow-[#25D366]/30'
                    }`}
                  >
                    {isVi ? (
                      <span className="font-extrabold text-[11px] px-1.5 py-0.5 bg-white text-[#0068FF] rounded font-sans leading-none">
                        Zalo
                      </span>
                    ) : (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 2C6.504 2 2 6.504 2 12.031c0 1.996.586 3.86 1.6 5.438L2.24 22l4.695-1.328a9.986 9.986 0 0 0 5.096 1.36h.005c5.526 0 10.03-4.504 10.03-10.031 0-2.68-1.043-5.2-2.936-7.094A9.96 9.96 0 0 0 12.031 2zm0 18.336h-.004a8.318 8.318 0 0 1-4.24-1.156l-.304-.18-2.783.787.799-2.711-.198-.316a8.274 8.274 0 0 1-1.272-4.729c0-4.59 3.734-8.324 8.328-8.324 2.223 0 4.313.867 5.883 2.438a8.27 8.27 0 0 1 2.434 5.887c0 4.59-3.734 8.324-8.328 8.324zm4.562-6.223c-.25-.125-1.477-.729-1.707-.812-.229-.084-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.167-.292.188-.542.062-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.244-1.48-1.39-1.73-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.312-.021-.437-.062-.125-.562-1.354-.77-1.854-.204-.488-.41-.422-.563-.43-.145-.008-.312-.01-.479-.01-.167 0-.438.062-.667.312-.229.25-.875.854-.875 2.083 0 1.229.896 2.417 1.021 2.583.125.167 1.763 2.693 4.27 3.777.597.258 1.063.412 1.427.528.6.191 1.146.164 1.577.1.48-.072 1.477-.604 1.685-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z"/>
                      </svg>
                    )}
                    <span>{isSubmitting ? t.resSubmitting : t.resConfirmBtn}</span>
                  </button>
                  <p className="text-[10px] text-white/40 text-center mt-2">
                    {isVi
                      ? 'Tự động sao chép mẫu đặt bàn & chuyển hướng sang Zalo Chat (0964 023 683)'
                      : 'Pre-fills reservation template & opens WhatsApp Chat (+84 964 023 683)'}
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

