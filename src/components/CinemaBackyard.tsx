import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Clock, Star, Calendar, Utensils, Dice6 } from 'lucide-react';

interface CinemaBackyardProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

const moviesList = [
  {
    day: 1,
    dayNameEn: 'Monday',
    dayNameVn: 'Thứ Hai',
    title: 'The Devil Wears Prada',
    year: 2006,
    director: 'David Frankel',
    genreEn: 'Comedy / Drama / Fashion',
    genreVn: 'Hài Hước / Chính Kịch / Thời Trang',
    descEn: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding and ruthless Editor-in-Chief of a high fashion magazine.',
    descVn: 'Một cô gái trẻ thông minh vừa tốt nghiệp bất ngờ nhận công việc trợ lý cho Miranda Priestly, tổng biên tập độc đoán, khắt khe của một tạp chí thời trang danh tiếng.',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e7/The_Devil_Wears_Prada_main_onesheet.jpg',
    rating: '6.9/10'
  },
  {
    day: 2,
    dayNameEn: 'Tuesday',
    dayNameVn: 'Thứ Ba',
    title: 'The Incredibles 2',
    year: 2018,
    director: 'Brad Bird',
    genreEn: 'Animation / Action / Family',
    genreVn: 'Hoạt Hình / Hành Động / Gia Đình',
    descEn: 'The Incredibles hero family takes on a new mission, which involves Helen (Elastigirl) going out to save the world while Bob Parr (Mr. Incredible) manages the house.',
    descVn: 'Gia đình siêu nhân đối đầu với thử thách mới đầy vui nhộn khi mẹ Helen ra ngoài giải cứu thế giới, còn bố Bob phải ở nhà loay hoay chăm sóc các con.',
    image: 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_FMjpg_UX1000_.jpg',
    rating: '7.6/10'
  },
  {
    day: 3,
    dayNameEn: 'Wednesday',
    dayNameVn: 'Thứ Tư',
    title: 'No Reservations',
    year: 2007,
    director: 'Scott Hicks',
    genreEn: 'Comedy / Romance / Culinary',
    genreVn: 'Hài Hước / Lãng Mạn / Ẩm Thực',
    descEn: 'The life of a perfectionist master chef is turned upside down when she becomes the guardian of her young niece while navigating a rivalry with a free-spirited sous-chef.',
    descVn: 'Cuộc sống của một nữ bếp trưởng theo đuổi sự hoàn hảo hoàn toàn đảo lộn khi cô nhận nuôi đứa cháu gái nhỏ và đối mặt với anh chàng phụ bếp đầy tự do.',
    image: 'https://m.media-amazon.com/images/S/pv-target-images/1a70b582a9fae88d242616a0e0eeabd257529c3ce671fb6356d3dc26fcf553b3.jpg',
    rating: '6.3/10'
  },
  {
    day: 4,
    dayNameEn: 'Thursday',
    dayNameVn: 'Thứ Năm',
    title: 'Up',
    year: 2009,
    director: 'Pete Docter',
    genreEn: 'Animation / Adventure / Drama',
    genreVn: 'Hoạt Hình / Phiêu Lưu / Cảm Động',
    descEn: 'Seventy-eight-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, taking along an eager young Russell as an accidental stowaway.',
    descVn: 'Cụ già Carl Fredricksen 78 tuổi thực hiện hành trình bay đến Nam Mỹ trên ngôi nhà bong bóng khổng lồ, vô tình kéo theo cậu bé hướng đạo sinh Russell.',
    image: 'https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_.jpg',
    rating: '8.3/10'
  },
  {
    day: 5,
    dayNameEn: 'Friday',
    dayNameVn: 'Thứ Sáu',
    title: 'Sex and The City',
    year: 2008,
    director: 'Michael Patrick King',
    genreEn: 'Comedy / Drama / Romance',
    genreVn: 'Hài Hước / Tâm Lý / Tình Cảm',
    descEn: 'Carrie, Samantha, Charlotte, and Miranda navigate their lives, friendships, and romances in New York City as they plan careers, marriages, and personal growth.',
    descVn: 'Carrie, Samantha, Charlotte và Miranda tiếp tục hành trình khám phá cuộc sống, tình bạn và tình yêu đầy thời thượng giữa thành phố New York nhộn nhịp.',
    image: 'https://m.media-amazon.com/images/M/MV5BYWRjMGMxM2UtODgyYS00OTAxLTk0MDctZjFhOWY0NWUxNmI0XkEyXkFqcGc@._V1_.jpg',
    rating: '5.7/10'
  },
  {
    day: 6,
    dayNameEn: 'Saturday',
    dayNameVn: 'Thứ Bảy',
    title: 'WALL-E',
    year: 2008,
    director: 'Andrew Stanton',
    genreEn: 'Animation / Sci-Fi / Family',
    genreVn: 'Hoạt Hình / Viễn Tưởng / Gia Đình',
    descEn: 'In the distant future, a small, lonely waste-collecting robot embarks on a space journey that will ultimately decide the fate of mankind.',
    descVn: 'Trong tương lai xa xôi, một chú robot dọn dẹp rác nhỏ bé cô đơn vô tình bước vào một chuyến hành trình vũ trụ kỳ vĩ quyết định vận mệnh loài người.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGKXogTLTrvJi0OwuCXjT0i6rCQrIG2PQh0x05996R-Ioe_RAFkBW6Jo&s=10',
    rating: '8.4/10'
  },
  {
    day: 0,
    dayNameEn: 'Sunday',
    dayNameVn: 'Chủ Nhật',
    title: 'Chungking Express',
    year: 1994,
    director: 'Wong Kar-wai',
    genreEn: 'Romance / Indie Drama',
    genreVn: 'Lãng Mạn / Chính Kịch / Hồng Kông',
    descEn: 'Two melancholic Hong Kong policemen fall in love with mysterious, fascinating women in this visually iconic, high-energy masterpiece.',
    descVn: 'Hai chàng cảnh sát u sầu ở Hồng Kông trải qua những câu chuyện tình duyên đầy chất thơ và nổi loạn với những người phụ nữ bí ẩn.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliKv6qctFsUQHBq1XNW23pgI4Vuh5CzrrGsosJBoPbxnlB-YGj8Us94L_&s=10',
    rating: '8.1/10'
  }
];

export default function CinemaBackyard({ lang, onNavigate }: CinemaBackyardProps) {
  const todayDay = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<number>(todayDay);

  const selectedMovie = moviesList.find(m => m.day === selectedDay) || moviesList[0];

  return (
    <section id="cinema" className="py-16 sm:py-24 bg-[#121214] text-white overflow-hidden relative border-b border-white/5 select-none">
      {/* Delicate starry glow backdrop */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-rose-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-amber-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Sleek Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-amber-300 border border-white/10 rounded-full font-sans text-[10px] uppercase font-bold tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Indie Screenings' : 'Trải Nghiệm Chiếu Phim'}</span>
            </div>
            
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase">
              {lang === 'en' ? 'Cinema Backyard' : 'Rạp Chiếu Sân Sau'}
            </h2>
            
            <p className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
              {lang === 'en' 
                ? 'Cozy backyard projection. Our selected daily film program paired with custom craft beers, bespoke food menus, and pristine starlight.'
                : 'Trải nghiệm xem phim ngoài sân vườn ấm cúng. Chọn lọc tác phẩm điện ảnh kinh điển mỗi tối, thưởng thức cùng đồ ăn nhẹ và các thức uống đặc sản.'}
            </p>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-bold shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span>{lang === 'en' ? '7:00 PM NIGHTLY' : 'CHIẾU LÚC 19:00 HẰNG ĐÊM'}</span>
          </div>
        </div>

        {/* Airbnb-style Day Tab Selection Row */}
        <div className="flex flex-wrap gap-2 justify-center p-1.5 bg-white/5 border border-white/10 rounded-2xl">
          {moviesList.map((m) => {
            const isSelected = selectedDay === m.day;
            const isToday = todayDay === m.day;
            return (
              <button
                key={m.day}
                onClick={() => setSelectedDay(m.day)}
                className={`px-4 py-2 rounded-xl font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-white text-neutral-900 border-white font-extrabold shadow-sm'
                    : 'bg-transparent text-white/60 border-transparent hover:text-white'
                }`}
              >
                <span>{lang === 'en' ? m.dayNameEn : m.dayNameVn}</span>
                {isToday && (
                  <span className="ml-1.5 px-1.5 py-0.5 bg-rose-600 text-white text-[8px] font-extrabold rounded-md uppercase tracking-widest animate-pulse">
                    {lang === 'en' ? 'Today' : 'Hôm Nay'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Spotlight Showcase Movie Card with Airbnb details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Movie Poster Cover */}
          <div className="md:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="w-full h-full object-cover saturate-[0.8] group-hover:scale-102 transition-transform duration-750"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-neutral-950/90 text-amber-400 border border-white/10 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{selectedMovie.rating}</span>
            </div>
            {selectedDay === todayDay && (
              <div className="absolute bottom-4 left-4 bg-rose-600 text-white font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg border border-rose-500/50 shadow-md">
                {lang === 'en' ? 'SHOWING TONIGHT' : 'CHIẾU TỐI NAY'}
              </div>
            )}
          </div>

          {/* Detailed Movie Description */}
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-white/5 text-rose-300 border border-white/10 font-sans text-[10px] font-bold uppercase tracking-wider rounded">
                {lang === 'en' ? selectedMovie.genreEn : selectedMovie.genreVn}
              </span>
              
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl uppercase tracking-tight leading-tight text-white flex flex-wrap items-center gap-2">
                <span>{selectedMovie.title}</span>
                <span className="text-white/40 font-normal">({selectedMovie.year})</span>
              </h3>
              
              <p className="font-mono text-xs text-white/50">
                {lang === 'en' ? 'Directed by' : 'Đạo diễn:'} <span className="text-white font-semibold">{selectedMovie.director}</span>
              </p>
            </div>

            <p className="font-sans text-sm text-white/80 leading-relaxed font-semibold">
              {lang === 'en' ? selectedMovie.descEn : selectedMovie.descVn}
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>{lang === 'en' ? 'Admission Entry' : 'Giá Vé Vào Cổng'}</span>
                <span className="text-emerald-400 font-bold">
                  {lang === 'en' ? 'COMPLIMENTARY for our dining guests' : 'HOÀN TOÀN MIỄN PHÍ cho khách dùng nước/bữa'}
                </span>
              </div>
              
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-200 text-xs leading-relaxed font-semibold">
                {lang === 'en'
                  ? 'Due to our cozy backyard layout, seating is highly limited. We recommend making an advance table reservation to ensure we can perfectly arrange your seating and overall evening experience.'
                  : 'Do không gian sân sau ấm cúng nên số lượng chỗ ngồi cực kỳ giới hạn. Chúng tôi khuyến khích quý khách đặt bàn trước để Saime sắp xếp vị trí ngồi lý tưởng và chuẩn bị tiếp đón chu đáo nhất.'}
              </div>
            </div>
          </div>
        </div>

        {/* Pathway Navigation row at bottom */}
        <div id="cinema-pathways" className="pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 bg-rose-600/20 text-rose-300 text-[9px] font-mono uppercase font-bold tracking-widest rounded border border-rose-500/20">
                {lang === 'en' ? 'Complement Your Evening' : 'Trọn Vẹn Buổi Tối'}
              </span>
              <h4 className="font-sans font-bold text-sm text-white uppercase mt-1">
                {lang === 'en' ? 'Order savory snacks or lock in your deck spot' : 'Thưởng thức món ngon hoặc đặt trước ghế lười'}
              </h4>
              <p className="font-sans text-xs text-white/50 max-w-lg font-semibold">
                {lang === 'en'
                  ? 'Pair tonight’s screening with local specialties or secure your reservation instantly with our event coordinator.'
                  : 'Kết hợp buổi chiếu phim với các món ăn đặc trưng của Saime, hoặc đặt chỗ đón tiếp chu đáo nhất.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Utensils className="w-3.5 h-3.5 text-rose-400" />
                <span>{lang === 'en' ? 'Explore Menu' : 'Thực Đơn Saime'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('board-games')}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Dice6 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? 'Lounge Games' : 'Góc Giải Trí'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('reservation')}
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-sm border border-rose-500/25"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Reserve Deck' : 'Đặt Ghế Lười'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
