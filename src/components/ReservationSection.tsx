import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Calendar, Users, MapPin, CheckCircle, ChevronRight, X, AlertCircle, Clock, Copy, Trash2, Edit, Utensils, Dice6 } from 'lucide-react';
import { Reservation } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationSectionProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function ReservationSection({ lang, onNavigate }: ReservationSectionProps) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [step, setStep] = useState<'form' | 'ticket' | 'list'>('form');
  const [selectedTicket, setSelectedTicket] = useState<Reservation | null>(null);
  const [activeFormType, setActiveFormType] = useState<'table' | 'partnership'>('table');

  // Form Fields State for Table Reservation & Partnership Inquiry
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: getTodayDateString(),
    time: '18:30',
    guests: 2, // 2 is perfect default for table reservation
    zone: 'The Long Table' as 'The Long Table' | 'Tropical Patio' | 'Cozy Corner' | 'Chef\'s Counter',
    seatsCount: 2,
    tablesCount: 1,
    needAirCon: false,
    eventType: '',
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
            // Restore activeFormType from the latest ticket
            if (active[active.length - 1].type) {
              setActiveFormType(active[active.length - 1].type);
            }
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
      [name]: name === 'guests' ? parseInt(value) || 2 : value
    }));
  };

  const handleFormTypeChange = (type: 'table' | 'partnership') => {
    setActiveFormType(type);
    setFormData(prev => ({
      ...prev,
      guests: type === 'partnership' ? 15 : 2,
    }));
    setFormError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return lang === 'en' ? 'Full name is required.' : 'Vui lòng cung cấp họ tên.';
    }
    if (!formData.phone.trim()) {
      return lang === 'en' ? 'Contact phone number is required.' : 'Vui lòng cung cấp số điện thoại liên lạc.';
    }
    if (activeFormType === 'partnership') {
      if (!formData.email.trim()) {
        return lang === 'en' ? 'Email address is required for partnership inquiries.' : 'Vui lòng cung cấp địa chỉ email liên hệ.';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        return lang === 'en' ? 'Please enter a valid email address.' : 'Địa chỉ email không hợp lệ.';
      }
      if (!formData.eventType.trim()) {
        return lang === 'en' ? 'Please specify what kind of event or activity you would like to host.' : 'Vui lòng ghi rõ loại hình sự kiện hoặc hoạt động bạn muốn tổ chức.';
      }
      if (!formData.guests || formData.guests <= 0) {
        return lang === 'en' ? 'Estimated attendance is required.' : 'Vui lòng điền số lượng khách dự kiến.';
      }
      if (formData.guests > 30) {
        return lang === 'en' ? 'Estimated attendance for partnership inquiries is capped at 30 people.' : 'Số lượng khách cho yêu cầu hợp tác giới hạn tối đa 30 người.';
      }
    } else {
      if (!formData.guests || formData.guests <= 0) {
        return lang === 'en' ? 'Number of guests is required.' : 'Vui lòng điền số lượng khách.';
      }
    }
    if (!formData.date) {
      return lang === 'en' ? 'Proposed date is required.' : 'Vui lòng chọn ngày dự kiến.';
    }
    const todayStr = getTodayDateString();
    if (formData.date < todayStr) {
      return lang === 'en'
        ? 'Reservation date cannot be earlier than today.'
        : 'Ngày đặt bàn không thể sớm hơn ngày hôm nay.';
    }
    if (!formData.time) {
      return lang === 'en' ? 'Proposed time is required.' : 'Vui lòng chọn giờ dự kiến.';
    }
    const [hours, minutes] = formData.time.split(':').map(Number);
    if (hours < 8 || hours >= 23) {
      return lang === 'en'
        ? 'Reservations are only allowed during opening hours (8:00 AM - 11:00 PM).'
        : 'Đặt bàn chỉ khả dụng trong khung giờ mở cửa (8:00 sáng - 11:00 tối).';
    }
    if (minutes % 15 !== 0) {
      return lang === 'en'
        ? 'Please input a time with a 15-minute interval (e.g., :00, :15, :30, :45).'
        : 'Vui lòng chọn mốc thời gian cách nhau 15 phút (ví dụ: :00, :15, :30, :45).';
    }
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
      type: activeFormType,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      eventType: activeFormType === 'partnership' ? formData.eventType.trim() : undefined,
      specialRequests: formData.specialRequests.trim(),
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    const updatedList = [...reservations, newBooking];
    saveToStorage(updatedList);
    setSelectedTicket(newBooking);
    setStep('ticket');

    // Compose pre-filled details text based on selected form type
    let bookingText = '';

    if (activeFormType === 'partnership') {
      bookingText = lang === 'en'
        ? `*Saime Kitchen & Bar - Event Venue & Partnership Inquiry*

- *Inquiry ID*: ${newBooking.id}
- *Name / Organization*: ${newBooking.name}
- *Contact Email*: ${newBooking.email}
- *Contact Phone*: ${newBooking.phone}
- *Proposed Date*: ${newBooking.date}
- *Proposed Time*: ${newBooking.time}
- *Estimated Attendance*: ${newBooking.guests} (Max 30)
- *Event / Activity Type*: ${newBooking.eventType || 'N/A'}

*--- Event Details & Collaboration Ideas ---*
${newBooking.specialRequests || 'No details provided.'}

*Submitted via Saime Web Portal on ${new Date(newBooking.createdAt).toLocaleString()}*`
        : `*Saime Kitchen & Bar - Yêu cầu Hợp tác & Tổ chức Sự kiện*

- *Mã Yêu Cầu*: ${newBooking.id}
- *Họ Tên / Đơn Vị*: ${newBooking.name}
- *Địa Chỉ Email*: ${newBooking.email}
- *Số Điện Thoại*: ${newBooking.phone}
- *Ngày Đề Xuất*: ${newBooking.date}
- *Giờ Dự Kiến*: ${newBooking.time}
- *Số Khách Dự Kiến*: ${newBooking.guests} (Tối đa 30 người)
- *Loại hình Sự kiện / Hoạt động*: ${newBooking.eventType || 'Không có'}

*--- Chi Tiết Sự Kiện & Ý Tưởng Hợp Tác ---*
${newBooking.specialRequests || 'Không có mô tả chi tiết.'}

*Được gửi qua Trang Web Saime lúc ${new Date(newBooking.createdAt).toLocaleString()}*`;
    } else {
      // Table Reservation
      bookingText = lang === 'en'
        ? `*Saime Kitchen & Bar - Table Reservation Inquiry*

- *Reservation ID*: ${newBooking.id}
- *Guest Name*: ${newBooking.name}
- *Phone Number*: ${newBooking.phone}
- *Number of Guests*: ${newBooking.guests} PPL
- *Date*: ${newBooking.date}
- *Time*: ${newBooking.time}

*--- Special Notes / Requests ---*
${newBooking.specialRequests || 'No special requests.'}

*Submitted via Saime Web Portal on ${new Date(newBooking.createdAt).toLocaleString()}*`
        : `*Saime Kitchen & Bar - Yêu cầu Đặt Bàn Trước*

- *Mã Đặt Bàn*: ${newBooking.id}
- *Họ Tên Khách*: ${newBooking.name}
- *Số Điện Thoại*: ${newBooking.phone}
- *Số Lượng Khách*: ${newBooking.guests} người
- *Ngày Đặt*: ${newBooking.date}
- *Giờ Đặt*: ${newBooking.time}

*--- Ghi Chú Đặc Biệt ---*
${newBooking.specialRequests || 'Không có ghi chú thêm.'}

*Được gửi qua Trang Web Saime lúc ${new Date(newBooking.createdAt).toLocaleString()}*`;
    }

    try {
      navigator.clipboard.writeText(bookingText);
    } catch (err) {
      console.error('Failed to copy booking text', err);
    }
    
    // Redirect to Messenger (open in a new tab) with prefilled text template
    window.open(`https://m.me/61589897489896?text=${encodeURIComponent(bookingText)}`, '_blank');

    // Reset fields except contact to make subsequent booking easy
    setFormData(prev => ({
      ...prev,
      eventType: '',
      specialRequests: ''
    }));
  };

  const handleCancelBooking = (id: string) => {
    const msg = lang === 'en' ? 'Are you sure you want to cancel this inquiry?' : 'Bạn muốn hủy bỏ yêu cầu này không?';
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

                {/* Form type toggles */}
                <div className="flex bg-neutral-light border border-sand-dark/60 rounded-xl p-1 mb-8 max-w-md mx-auto select-none shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleFormTypeChange('table')}
                    className={`flex-1 py-2 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      activeFormType === 'table' ? 'bg-primary text-white shadow-sm' : 'text-neutral-dark hover:bg-sand/35'
                    }`}
                  >
                    🍽️ {lang === 'en' ? 'Table Reservation' : 'Đặt Bàn Trước'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFormTypeChange('partnership')}
                    className={`flex-1 py-2 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      activeFormType === 'partnership' ? 'bg-primary text-white shadow-sm' : 'text-neutral-dark hover:bg-sand/35'
                    }`}
                  >
                    🤝 {lang === 'en' ? 'Partnerships' : 'Hợp Tác Sự Kiện'}
                  </button>
                </div>

                <form onSubmit={handleBookTable} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {activeFormType === 'partnership' ? (lang === 'en' ? 'Your Name / Organization' : 'Họ tên / Đơn vị tổ chức') : (lang === 'en' ? 'Your Name' : 'Tên của bạn')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={activeFormType === 'partnership' ? "e.g. Liam Nguyen / Art Collective" : "e.g. Liam Nguyen"}
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

                  {/* Email field (Only rendered or required for Partnership) */}
                  {activeFormType === 'partnership' && (
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                        {t.resLabelEmail} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. liam@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-sans"
                      />
                    </div>
                  )}

                  {/* Number of Guests / Attendees */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {activeFormType === 'partnership' ? (lang === 'en' ? 'Estimated Attendance (Max 30)' : 'Số Khách Dự Kiến (Tối đa 30)') : (lang === 'en' ? 'Number of Guests' : 'Số Lượng Khách')} *
                    </label>
                    <div className="flex gap-2 mb-3 select-none">
                      {(activeFormType === 'partnership' ? [5, 10, 15, 20, 25, 30] : [2, 4, 6, 8, 10]).map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData(f => ({ ...f, guests: num }))}
                          className={`flex-1 py-2 rounded-xl border text-xs font-mono font-black tracking-wider cursor-pointer transition-all ${
                            formData.guests === num
                              ? 'bg-primary border-primary text-white scale-103'
                              : 'bg-neutral-light border-sand-dark text-neutral-dark hover:border-neutral-muted'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-sans text-neutral-muted">{lang === 'en' ? 'Or enter custom count:' : 'Hoặc tự nhập số khách:'}</span>
                      <input
                        type="number"
                        name="guests"
                        min={1}
                        max={activeFormType === 'partnership' ? 30 : 150}
                        value={formData.guests}
                        onChange={(e) => {
                          let val = parseInt(e.target.value) || 1;
                          if (activeFormType === 'partnership' && val > 30) {
                            val = 30;
                          }
                          setFormData(f => ({ ...f, guests: val }));
                        }}
                        className="w-24 px-2 py-1 rounded-lg bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-xs font-mono font-bold text-center"
                      />
                    </div>
                  </div>

                  {/* Event or Activity Type field (Only rendered for Partnership) */}
                  {activeFormType === 'partnership' && (
                    <div className="md:col-span-2">
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                        {lang === 'en' ? 'Event or Activity Type *' : 'Loại hình Sự kiện / Hoạt động *'}
                      </label>
                      <input
                        type="text"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        placeholder={lang === 'en' 
                          ? "e.g. Acoustic mini-show, Candle-making workshop, Art exhibition, Birthday bash" 
                          : "Ví dụ: Đêm nhạc mini acoustic, Workshop làm nến thơm, Triển lãm tranh vẽ, Tiệc sinh nhật"}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-sans font-medium"
                      />
                    </div>
                  )}

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {activeFormType === 'partnership' ? (lang === 'en' ? 'Event Date *' : 'Ngày Tổ Chức Sự Kiện *') : (lang === 'en' ? 'Reservation Date *' : 'Ngày Đặt Bàn *')}
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      min={getTodayDateString()}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                    />
                    <span className="text-[10px] text-neutral-muted mt-1 block">
                      {lang === 'en' ? 'Cannot be in the past' : 'Không chọn ngày quá khứ'}
                    </span>
                  </div>

                  {/* Time Picker */}
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-neutral-muted mb-2">
                      {activeFormType === 'partnership' ? (lang === 'en' ? 'Event Time *' : 'Giờ Tổ Chức Sự Kiện *') : (lang === 'en' ? 'Reservation Time *' : 'Giờ Đặt Bàn *')}
                    </label>
                    <input
                      type="time"
                      name="time"
                      required
                      step="900"
                      min="08:00"
                      max="23:00"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-light border border-sand-dark text-neutral-dark focus:outline-none focus:border-primary text-sm font-mono font-bold"
                    />
                    <span className="text-[10px] text-neutral-muted mt-1 block">
                      {lang === 'en' ? 'Opening Hours: 08:00 - 23:00 (15m interval)' : 'Giờ mở cửa: 08:00 - 23:00 (cách nhau 15 phút)'}
                    </span>
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

                    {selectedTicket.type === 'partnership' ? (
                      <div className="space-y-3">
                        <div>
                          <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">CONTACT EMAIL</span>
                          <span className="text-xs font-mono font-bold text-neutral-dark block truncate">{selectedTicket.email || 'N/A'}</span>
                        </div>
                        {selectedTicket.eventType && (
                          <div>
                            <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider">EVENT / ACTIVITY TYPE</span>
                            <span className="text-xs font-display font-bold text-neutral-dark block uppercase truncate">{selectedTicket.eventType}</span>
                          </div>
                        )}
                        <div className="p-3 bg-primary/5 rounded-xl border border-primary/15 select-none">
                          <span className="block text-[8px] font-mono text-primary-dark uppercase tracking-wider font-bold">COLLABORATION INQUIRY</span>
                          <p className="text-[10px] text-neutral-dark font-sans leading-relaxed mt-0.5">
                            {lang === 'en' 
                              ? 'Our representative will reach out to you via Email or Messenger shortly.' 
                              : 'Đại diện của chúng tôi sẽ liên hệ lại với bạn qua Email hoặc Messenger sớm.'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-[#FAF6F0]/60 rounded-xl border border-sand-dark/20 select-none">
                        <span className="block text-[8px] font-mono text-neutral-muted uppercase tracking-wider font-bold">RESERVATION</span>
                        <p className="text-[10px] text-neutral-dark font-sans leading-relaxed mt-0.5">
                          {lang === 'en' 
                            ? 'Your table is confirmed! Please present this boarding pass upon arrival.' 
                            : 'Bàn của bạn đã được xác nhận! Vui lòng xuất trình thẻ này khi đến quán.'}
                        </p>
                      </div>
                    )}

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
                    {selectedTicket.type === 'partnership' 
                      ? (lang === 'en' ? 'New Partnership Inquiry' : 'Gửi Yêu Cầu Hợp Tác Mới')
                      : (lang === 'en' ? 'Book Another Table' : 'Đặt Thêm Bàn Khác')}
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
                        <span className="font-mono text-[10px] text-tropical font-bold">
                          {ticket.type === 'partnership' 
                            ? (lang === 'en' ? 'Partnership 🤝' : 'Hợp tác 🤝') 
                            : (lang === 'en' ? 'Table Reservation 🍽️' : 'Đặt bàn 🍽️')}
                        </span>
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

        {/* Pathway Navigation row at bottom */}
        <div id="reservation-pathways" className="pt-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-700 text-[9px] font-mono uppercase font-bold tracking-widest rounded">
                {lang === 'en' ? 'Where to next?' : 'Khám Phá Tiếp Theo'}
              </span>
              <h4 className="font-sans font-bold text-sm text-neutral-900 uppercase mt-1">
                {lang === 'en' ? 'Satisfy your taste buds or relax in our lounge' : 'Thưởng thức ẩm thực hoặc thư giãn tại Lounge'}
              </h4>
              <p className="font-sans text-xs text-neutral-500 max-w-lg font-semibold">
                {lang === 'en'
                  ? 'Explore our freshly prepared comfort bistro dishes, specialty pour-overs, or classic starlight backyard cinema schedules.'
                  : 'Ghé thăm danh mục thực đơn đặc sắc của bếp hay khám phá chương trình chiếu phim cổ điển hằng đêm ngoài vườn.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Utensils className="w-3.5 h-3.5 text-rose-500" />
                <span>{lang === 'en' ? 'Explore Menu' : 'Thực Đơn'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('tasting')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Dice6 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{lang === 'en' ? 'Tasting Flight' : 'Lounge & Trải Nghiệm'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
