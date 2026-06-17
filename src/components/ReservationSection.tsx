import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Calendar, Users, MapPin, CheckCircle, ChevronRight, X, AlertCircle, Clock, Copy, Trash2, Edit } from 'lucide-react';
import { Reservation } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationSectionProps {
  lang: 'en' | 'vn';
}

export default function ReservationSection({ lang }: ReservationSectionProps) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [step, setStep] = useState<'form' | 'ticket' | 'list'>('form');
  const [selectedTicket, setSelectedTicket] = useState<Reservation | null>(null);

  // Form Fields State for Event Partnership Inquiry
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-06-18', // Near future date relative to Jun 2026
    time: '14:00',
    guests: 20,
    zone: 'The Long Table' as 'The Long Table' | 'Tropical Patio' | 'Cozy Corner' | 'Chef\'s Counter',
    seatsCount: 20,
    tablesCount: 4,
    needAirCon: false,
    specialRequests: ''
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const t = translations[lang];

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('saime_inquiries') || localStorage.getItem('saime_reservations');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReservations(parsed);
        if (parsed.length > 0) {
          const active = parsed.filter((r: Reservation) => r.status !== 'Cancelled');
          if (active.length > 0) {
            setSelectedTicket(active[active.length - 1]);
            setStep('ticket');
          } else {
            setStep('form');
          }
        }
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    }
  }, []);

  // Sync to localStorage
  const saveToStorage = (updatedList: Reservation[]) => {
    setReservations(updatedList);
    localStorage.setItem('saime_inquiries', JSON.stringify(updatedList));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 10 : value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return lang === 'en' ? 'Full name or organization name is required.' : 'Vui lòng cung cấp họ tên hoặc đơn vị tổ chức.';
    if (!formData.phone.trim()) return lang === 'en' ? 'Contact phone number is required.' : 'Vui lòng cung cấp số điện thoại liên lạc.';
    if (!formData.date) return lang === 'en' ? 'Inquiry date is required.' : 'Vui lòng chọn ngày dự kiến.';
    return null;
  };

  const handleBookTable = (e: FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }
    setFormError(null);

    const newBooking: Reservation = {
      id: `SAIME-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      zone: formData.zone,
      seatsCount: formData.seatsCount,
      tablesCount: formData.tablesCount,
      needAirCon: formData.needAirCon,
      specialRequests: formData.specialRequests.trim(),
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    const updatedList = [...reservations, newBooking];
    saveToStorage(updatedList);
    setSelectedTicket(newBooking);
    setStep('ticket');

    // Reset fields except contact to make subsequent booking easy
    setFormData(prev => ({
      ...prev,
      specialRequests: ''
    }));
  };

  const handleCancelBooking = (id: string) => {
    const msg = lang === 'en' ? 'Are you sure you want to cancel this partnership inquiry?' : 'Bạn muốn hủy bỏ yêu cầu hợp tác này không?';
    if (window.confirm(msg)) {
      const updatedList = reservations.map(r => r.id === id ? { ...r, status: 'Cancelled' as const } : r);
      saveToStorage(updatedList);
      if (selectedTicket?.id === id) {
        setSelectedTicket({ ...selectedTicket, status: 'Cancelled' });
      }
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="reservation" className="py-20 bg-neutral-light relative">
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-5 left-5 w-80 h-80 rounded-full bg-tropical/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="reservation-header" className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full uppercase">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[10px] font-bold text-primary-dark tracking-wider">
              {t.reserveSubtitle}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-dark tracking-tight uppercase">
            {t.reserveTitle}
          </h2>
          <p className="font-sans text-neutral-muted text-sm sm:text-base leading-relaxed">
            {t.reserveDesc}
          </p>
        </div>

        {/* Master Column Container */}
        <div className="max-w-4xl mx-auto bg-sand/30 border border-sand-dark/40 rounded-[2.5rem] p-6 sm:p-12 shadow-xl overflow-hidden relative">
          
          {/* Navigation Bar inside the Reservation Container */}
          <div className="flex items-center justify-between border-b border-sand-dark pb-4 mb-8 select-none">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('form')}
                className={`px-4 py-2 rounded-full font-display font-bold text-xs transition-all cursor-pointer ${
                  step === 'form' ? 'bg-primary text-white' : 'bg-neutral-light text-neutral-dark hover:bg-sand'
                }`}
              >
                {lang === 'en' ? 'Inquiry Form' : 'Phiếu Đăng Ký'}
              </button>

              {reservations.length > 0 && (
                <button
                  onClick={() => setStep('list')}
                  className={`px-4 py-2 rounded-full font-display font-bold text-xs transition-all cursor-pointer ${
                    step === 'list' ? 'bg-tropical text-white' : 'bg-neutral-light text-neutral-dark hover:bg-sand'
                  }`}
                >
                  {lang === 'en' ? 'My Inquiries' : 'Yêu Cầu Đã Gửi'} ({reservations.filter(r => r.status !== 'Cancelled').length})
                </button>
              )}
            </div>

            {selectedTicket && step !== 'ticket' && (
              <button
                onClick={() => setStep('ticket')}
                className="text-xs font-display font-bold text-primary hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                {lang === 'en' ? 'Latest Inquiry' : 'Yêu Cầu Gần Nhất'}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            
            {/* Step 1: Form Entry */}
            {step === 'form' && (
              <motion.div
                key="form-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {formError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center gap-3 text-xs select-none">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleBookTable} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelName} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Liam Nguyen"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-sans font-medium"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelPhone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +84 90 1234 567"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. liam@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-sans"
                    />
                  </div>

                  {/* Number of Guests / Attendees */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelGuests}
                    </label>
                    <div className="flex gap-2 select-none">
                      {[10, 20, 40, 60, 100].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData(f => ({ ...f, guests: num }))}
                          className={`flex-1 py-2.5 rounded-xl border text-xs font-mono font-black tracking-wider cursor-pointer transition-all ${
                            formData.guests === num
                              ? 'bg-primary border-primary text-white scale-103'
                              : 'bg-neutral-light border-sand-dark text-neutral-dark hover:border-neutral-muted'
                          }`}
                        >
                          {num === 100 ? '100+' : num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Venue Zone */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelZone}
                    </label>
                    <select
                      name="zone"
                      value={formData.zone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-sans font-medium"
                    >
                      <option value="The Long Table">{lang === 'en' ? 'The Long Table (Shared Inside)' : 'Bàn Dài Gặp Gỡ (Trong Nhà)'}</option>
                      <option value="Tropical Patio">{lang === 'en' ? 'Tropical Patio (Garden Air)' : 'Tropical Patio (Sân Vườn)'}</option>
                      <option value="Cozy Corner">{lang === 'en' ? 'Cozy Corner (Chilled Acoustic)' : 'Cozy Corner (Góc Lá Bình Yên)'}</option>
                      <option value="Chef\'s Counter">{lang === 'en' ? 'Chef\'s Counter (Kitchen Stage)' : 'Chef\'s Counter (Bàn Bếp Trực Diện)'}</option>
                    </select>
                  </div>

                  {/* Number of Seats & Tables Requested */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                        {lang === 'en' ? 'Seats Needed 🪑' : 'Số Ghế Yêu Cầu 🪑'}
                      </label>
                      <input
                        type="number"
                        name="seatsCount"
                        min={1}
                        max={150}
                        value={formData.seatsCount}
                        onChange={(e) => setFormData(f => ({ ...f, seatsCount: parseInt(e.target.value) || 0 }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                        {lang === 'en' ? 'Tables Needed 🪵' : 'Số Bàn Yêu Cầu 🪵'}
                      </label>
                      <input
                        type="number"
                        name="tablesCount"
                        min={1}
                        max={40}
                        value={formData.tablesCount}
                        onChange={(e) => setFormData(f => ({ ...f, tablesCount: parseInt(e.target.value) || 0 }))}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                      />
                    </div>
                  </div>

                  {/* Air Conditioning Option toggle */}
                  <div className="flex items-center gap-3 bg-[#FAF6F0]/65 border border-sand-dark p-3 rounded-xl select-none">
                    <input
                      type="checkbox"
                      id="needAirCon"
                      name="needAirCon"
                      checked={formData.needAirCon}
                      onChange={(e) => setFormData(f => ({ ...f, needAirCon: e.target.checked }))}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 accent-primary cursor-pointer"
                    />
                    <label htmlFor="needAirCon" className="text-xs font-display font-bold uppercase tracking-wide text-neutral-dark flex flex-col cursor-pointer">
                      <span className="flex items-center gap-1">❄️ {lang === 'en' ? 'Require Air-Conditioning?' : 'Yêu cầu mở Điều Hòa?'}</span>
                      <span className="text-[10px] text-neutral-muted font-normal uppercase tracking-wide mt-0.5">
                        {formData.needAirCon 
                          ? (lang === 'en' ? 'Yes, glass/enclosed room temperature control' : 'Có, điều hòa phòng kín mát mẻ') 
                          : (lang === 'en' ? 'No, standard natural garden air/ceiling fans is fine' : 'Không cần, đón gió trời hoặc quạt trần thường')}
                      </span>
                    </label>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelDate} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelTime}
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:30">06:30 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>
                  </div>

                  {/* Partnership / Event Details */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {t.resLabelRequests}
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' 
                        ? 'Speak to us about your event details! (e.g. Art exhibition, coffee tasting workshop, corporate happy hour, acoustic music night, private dinner, local handicraft market proposal)' 
                        : 'Hãy chia sẻ chi tiết ý tưởng của bạn! (ví dụ: Triển lãm nghệ thuật, workshop nếm thưởng cà phê, tiệc sinh nhật công ty, đêm nhạc mini-acoustic, workshop làm nến hay thêu thùa...)'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-xs sm:text-sm font-sans"
                    />
                  </div>

                  {/* Submit Trigger Button */}
                  <div className="md:col-span-2 pt-2">
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      className="w-full py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] cursor-pointer"
                    >
                      {t.resBtnSubmit}
                    </button>
                  </div>

                </form>
              </motion.div>
            )}

            {/* Step 2: Digital Ticket Card visual representation */}
            {step === 'ticket' && selectedTicket && (
              <motion.div
                key="ticket-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="flex flex-col items-center select-none"
              >
                {/* Success Banner */}
                <div className="text-center space-y-2 mb-8">
                  <div className="w-12 h-12 rounded-full bg-tropical/10 text-tropical flex items-center justify-center mx-auto mb-1">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-neutral-dark uppercase tracking-tight">
                    {t.resSuccessTitle}
                  </h3>
                  <p className="font-sans text-neutral-muted text-xs">
                    {t.resSuccessDesc}
                  </p>
                </div>

                {/* BOARDING PASS BOARD CARD */}
                <div className="w-full max-w-sm bg-neutral-light border border-sand-dark rounded-[2rem] overflow-hidden shadow-2xl relative">
                  
                  {/* Card head accent */}
                  <div className="bg-primary px-6 py-4 flex items-center justify-between text-white border-b border-primary-dark">
                    <div className="flex flex-col">
                      <span className="font-display font-black text-[15px] uppercase tracking-wider">SAIME GATHERING</span>
                      <span className="text-[8px] font-mono opacity-80 uppercase font-black">Boarding confirmation</span>
                    </div>
                    <span className="font-mono text-sm font-extrabold bg-black/25 px-2.5 py-1 rounded">
                      {selectedTicket.id}
                    </span>
                  </div>

                  {/* Card details */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">GUEST NAME</span>
                        <span className="text-xs font-display font-bold text-neutral-dark block uppercase truncate">{selectedTicket.name}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">PHONE NUMBER</span>
                        <span className="text-xs font-mono font-bold text-neutral-dark block">{selectedTicket.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-dashed border-sand">
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">DATE</span>
                        <span className="text-[11px] font-mono font-bold text-tropical block">{selectedTicket.date}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">TIME</span>
                        <span className="text-[11px] font-mono font-bold text-tropical block">{selectedTicket.time}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">GUESTS</span>
                        <span className="text-[11px] font-mono font-black text-tropical block">{selectedTicket.guests} PPL</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">GATHERING ALCOVE ZONE</span>
                      <span className="text-xs font-display font-bold text-neutral-dark flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {selectedTicket.zone}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-dashed border-sand">
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">SEATS REQ.</span>
                        <span className="text-[11px] font-mono font-bold text-neutral-dark block">🪑 {selectedTicket.seatsCount ?? selectedTicket.guests} seats</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">TABLES REQ.</span>
                        <span className="text-[11px] font-mono font-bold text-neutral-dark block">🪵 {selectedTicket.tablesCount ?? Math.max(1, Math.round((selectedTicket.seatsCount ?? selectedTicket.guests) / 4))} tables</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">AIR-CON</span>
                        <span className="text-[11px] font-mono font-bold text-neutral-dark block">{selectedTicket.needAirCon ? '❄️ Required' : '🌬️ Fan ok'}</span>
                      </div>
                    </div>

                    {selectedTicket.specialRequests && (
                      <div className="p-3 bg-sand/30 rounded-xl border border-sand-dark/20">
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">SPECIAL REQUESTS</span>
                        <p className="text-[10px] text-neutral-dark font-sans leading-relaxed line-clamp-2 mt-0.5 italic">
                          "{selectedTicket.specialRequests}"
                        </p>
                      </div>
                    )}

                    {/* Status pill element */}
                    <div className="flex items-center justify-between pt-1 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${selectedTicket.status === 'Cancelled' ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} />
                        <span className="text-[9px] font-mono font-bold text-neutral-muted uppercase tracking-wider">
                          Status: {selectedTicket.status}
                        </span>
                      </div>

                      {selectedTicket.status !== 'Cancelled' && (
                        <button
                          onClick={() => handleCancelBooking(selectedTicket.id)}
                          className="px-3 py-1 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 rounded-md font-sans text-[10px] font-bold cursor-pointer transition-colors"
                        >
                          {lang === 'en' ? 'Cancel Seats' : 'Hủy Chỗ'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Foot/Ticket punch line */}
                  <div className="bg-sand/30 px-6 py-4.5 border-t border-sand-dark flex justify-between items-center bg-sand-dark/10">
                    <button
                      onClick={() => handleCopyCode(selectedTicket.id)}
                      className="text-[10px] font-mono font-extrabold text-neutral-dark border border-neutral-dark/30 rounded px-2 py-0.5 flex items-center gap-1 cursor-pointer hover:bg-white hover:border-neutral-dark transition-colors"
                    >
                      <Copy className="w-3 h-3 text-neutral-muted" />
                      <span>{copiedCode ? (lang === 'en' ? 'Copied!' : 'Đã sao chép!') : (lang === 'en' ? 'Copy ID' : 'Sao Chép Mã')}</span>
                    </button>
                    <span className="text-[9px] font-mono text-neutral-muted uppercase font-semibold">Saime Kitchen & Bar</span>
                  </div>

                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setStep('form')}
                    className="px-5 py-2.5 rounded-full bg-sand hover:bg-sand-dark text-neutral-dark font-display font-bold text-xs cursor-pointer"
                  >
                    {lang === 'en' ? 'Book Another Table' : 'Đặt Thêm Bàn Khác'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Historic Booking list */}
            {step === 'list' && (
              <motion.div
                key="list-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <h4 className="font-display font-black text-xs text-tropical uppercase tracking-widest border-b border-sand pb-2 mb-2">
                  {lang === 'en' ? 'Your active reservation boarding passes' : 'Vé giữ chỗ đang hoạt động'}
                </h4>

                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {reservations.map(ticket => (
                    <div
                      key={ticket.id}
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setStep('ticket');
                      }}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all select-none hover:border-primary/20 bg-neutral-light ${
                        ticket.status === 'Cancelled' ? 'border-sand opacity-60' : 'border-sand-dark/60'
                      }`}
                    >
                      <div className="space-y-1 overflow-hidden shrink-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-neutral-dark uppercase tracking-wider shrink-0 bg-sand px-1.5 py-0.5 rounded">
                            {ticket.id}
                          </span>
                          <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${ticket.status === 'Cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {ticket.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-sans text-neutral-muted">
                          <span className="font-bold text-neutral-dark uppercase">{ticket.name}</span>
                          <span>•</span>
                          <span>{ticket.date} @ {ticket.time}</span>
                          <span>•</span>
                          <span>{ticket.guests} PPL</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-mono text-[10px] text-tropical font-bold">{ticket.zone}</span>
                        {ticket.status !== 'Cancelled' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelBooking(ticket.id);
                            }}
                            className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                            title="Cancel Reservation"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
