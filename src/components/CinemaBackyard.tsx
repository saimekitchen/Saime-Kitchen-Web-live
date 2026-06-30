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
    sessions: [
      {
        title: 'Now You See Me',
        year: 2013,
        director: 'Louis Leterrier',
        genreEn: 'Mystery / Thriller / Heist',
        genreVn: 'Kỳ Bí / Giật Gân / Ảo Thuật',
        descEn: 'An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances, rewarding their audiences with the money.',
        descVn: 'Một đặc vụ FBI và thám tử Interpol truy đuổi nhóm ảo thuật gia chuyên thực hiện các phi vụ cướp ngân hàng ngay trên sân khấu rồi chia tiền cho khán giả.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-KzWS5Jix2z48dRM0ROlcLuVAp_AdCEY_OqY8bf61Q&s=10',
        rating: '7.2/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Now You See Me 2',
        year: 2016,
        director: 'Jon M. Chu',
        genreEn: 'Mystery / Action / Thriller',
        genreVn: 'Kỳ Bí / Hành Động / Ảo Thuật',
        descEn: 'The Four Horsemen resurface, and are forcibly recruited by a tech genius to pull off their most impossible heist yet.',
        descVn: 'Nhóm Tứ Kỵ Sĩ tái xuất giang hồ và bị bắt ép bởi một thiên tài công nghệ để thực hiện một phi vụ cướp bất khả thi nhất từ trước đến nay.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUT7gRi_6FFAuKsLiJB9UXvLYsu2kCfm7hf9ZSpo_7A&s=10',
        rating: '6.4/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 2,
    dayNameEn: 'Tuesday',
    dayNameVn: 'Thứ Ba',
    sessions: [
      {
        title: 'The Incredibles 1',
        year: 2004,
        director: 'Brad Bird',
        genreEn: 'Animation / Action / Family',
        genreVn: 'Hoạt Hình / Hành Động / Gia Đình',
        descEn: 'While trying to lead the quiet suburban life, a family of undercover superheroes are forced into action to save the world.',
        descVn: 'Khi đang cố gắng sống một cuộc sống yên bình ở ngoại ô, gia đình siêu anh hùng ẩn danh buộc phải hành động để giải cứu thế giới.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAc8HNHinJMOTBsS0QYLS2yjatVvYCoAIOS_nOqsvbg&s=10',
        rating: '8.0/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'The Incredibles 2',
        year: 2018,
        director: 'Brad Bird',
        genreEn: 'Animation / Action / Family',
        genreVn: 'Hoạt Hình / Hành Động / Gia Đình',
        descEn: 'The Incredibles family takes on a new mission, which involves Helen (Elastigirl) going out to save the world while Bob (Mr. Incredible) manages the house.',
        descVn: 'Gia đình siêu nhân đối đầu với thử thách mới đầy vui nhộn khi mẹ Helen ra ngoài giải cứu thế giới, còn bố Bob phải ở nhà loay hoay chăm sóc các con.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kLs9DGfQ07EW3FUbKs9m-u3qLcLyymAbV4-r8VEcQg&s=10',
        rating: '7.6/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 3,
    dayNameEn: 'Wednesday',
    dayNameVn: 'Thứ Tư',
    sessions: [
      {
        title: '500 Days of Summer',
        year: 2009,
        director: 'Marc Webb',
        genreEn: 'Comedy / Drama / Romance',
        genreVn: 'Hài Hước / Tâm Lý / Tình Cảm',
        descEn: 'This nonlinear romantic comedy-drama focuses on a writer of greeting cards who is completely blindsided when his girlfriend Summer suddenly dumps him.',
        descVn: 'Bộ phim lãng mạn phi tuyến tính kể về một anh chàng viết thiệp chúc mừng, người hoàn toàn sụp đổ khi cô bạn gái Summer bất ngờ chia tay anh.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp6KfsKY2yVGoQuN89BNDPn5vvDFVokMBqpxuzW3J2w&s=10',
        rating: '7.7/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'The Perks of Being a Wallflower',
        year: 2012,
        director: 'Stephen Chbosky',
        genreEn: 'Drama / Romance / Youth',
        genreVn: 'Tâm Lý / Tình Cảm / Tuổi Trẻ',
        descEn: 'An introverted freshman is taken under the wings of two seniors who welcome him to the real world.',
        descVn: 'Một cậu học sinh lớp 10 hướng nội được dìu dắt bởi hai học sinh khóa trên, giúp cậu bước vào thế giới thực đầy màu sắc của tuổi trẻ.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJJVRW4AR7tPi7CdrqwgbnBe1JJq5dyr9BBCJcMQxt3hf8RqnNEy0J0NX&s=10',
        rating: '7.9/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 4,
    dayNameEn: 'Thursday',
    dayNameVn: 'Thứ Năm',
    sessions: [
      {
        title: 'Up',
        year: 2009,
        director: 'Pete Docter',
        genreEn: 'Animation / Adventure / Drama',
        genreVn: 'Hoạt Hình / Phiêu Lưu / Cảm Động',
        descEn: 'Seventy-eight-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, taking along Russell as an accidental stowaway.',
        descVn: 'Cụ già Carl Fredricksen 78 tuổi thực hiện hành trình bay đến Nam Mỹ trên ngôi nhà bong bóng khổng lồ, vô tình kéo theo cậu bé hướng đạo sinh Russell.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwc8pyPV3u-tOV-_CByvCRxLxZItYqc5WqVo5wWVbFA&s=10',
        rating: '8.3/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Wall-E',
        year: 2008,
        director: 'Andrew Stanton',
        genreEn: 'Animation / Sci-Fi / Family',
        genreVn: 'Hoạt Hình / Viễn Tưởng / Gia Đình',
        descEn: 'In the distant future, a small, lonely waste-collecting robot embarks on a space journey that will ultimately decide the fate of mankind.',
        descVn: 'Trong tương lai xa xôi, một chú robot dọn dẹp rác nhỏ bé cô đơn vô tình bước vào một chuyến hành trình vũ trụ kỳ vĩ quyết định vận mệnh loài người.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxNhu56nA0YfHnbdkURRLgQ-nE4YOSKC9IrI4Q0jK_Q&s=10',
        rating: '8.4/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 5,
    dayNameEn: 'Friday',
    dayNameVn: 'Thứ Sáu',
    sessions: [
      {
        title: 'Rush Hour 1',
        year: 1998,
        director: 'Brett Ratner',
        genreEn: 'Action / Comedy / Crime',
        genreVn: 'Hành Động / Hài Hước / Hình Sự',
        descEn: 'A loyal and dedicated Hong Kong Inspector teams up with a reckless LAPD detective to rescue the kidnapped daughter of a Chinese diplomat.',
        descVn: 'Một thanh tra mẫn cán từ Hồng Kông hợp tác cùng một thám tử lắm lời, liều lĩnh của LAPD để giải cứu cô con gái bị bắt cóc của một nhà ngoại giao Trung Quốc.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQyMzEzNjA5NF5BMl5BanBnXkFtZTcwOTU1MTkxNA@@._V1_.jpg',
        rating: '7.0/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Rush Hour 2',
        year: 2001,
        director: 'Brett Ratner',
        genreEn: 'Action / Comedy / Crime',
        genreVn: 'Hành Động / Hài Hước / Hình Sự',
        descEn: 'Carter and Lee head to Hong Kong for a vacation, but are immediately embroiled in a counterfeiting case involving local Triads.',
        descVn: 'Bộ đôi Carter và Lee đến Hồng Kông nghỉ dưỡng nhưng lập tức bị cuốn vào một vụ án tiền giả tinh vi liên quan đến băng đảng xã hội đen địa phương.',
        image: 'https://decider.com/wp-content/uploads/2017/07/rush-hour-2-wtwt.jpg?quality=75&strip=all&w=1200',
        rating: '6.7/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 6,
    dayNameEn: 'Saturday',
    dayNameVn: 'Thứ Bảy',
    sessions: [
      {
        title: '21 Jump Street',
        year: 2012,
        director: 'Phil Lord, Christopher Miller',
        genreEn: 'Action / Comedy / Mystery',
        genreVn: 'Hành Động / Hài Hước / Hình Sự',
        descEn: 'Two underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.',
        descVn: 'Hai cảnh sát trẻ thiếu năng lực được cử quay lại trường trung học địa phương để cải trang làm học sinh và triệt phá một đường dây ma túy tổng hợp.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_3ILpEEINnm8NIhsN9ZrRT6OMvo7nY3b1gqkhe9rxSNUSXZzFKvZpIA&s=10',
        rating: '7.2/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: '22 Jump Street',
        year: 2014,
        director: 'Phil Lord, Christopher Miller',
        genreEn: 'Action / Comedy / Crime',
        genreVn: 'Hành Động / Hài Hước / Hình Sự',
        descEn: 'After making their way through high school, big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.',
        descVn: 'Sau khi hoàn thành xuất sắc nhiệm vụ ở trường trung học, hai cảnh sát Schmidt và Jenko tiếp tục cuộc hành trình cải trang thâm nhập vào một trường đại học.',
        image: 'https://media.vanityfair.com/photos/5397dba8b8c4d8fa7c0001b8/master/w_2560%2Cc_limit/02.jpg',
        rating: '7.0/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 0,
    dayNameEn: 'Sunday',
    dayNameVn: 'Chủ Nhật',
    sessions: [
      {
        title: 'Elemental',
        year: 2023,
        director: 'Peter Sohn',
        genreEn: 'Animation / Adventure / Comedy',
        genreVn: 'Hoạt Hình / Phiêu Lưu / Hài Hước',
        descEn: 'Follows Ember and Wade in a city where fire, water, land, and air residents live together.',
        descVn: 'Theo chân cô nàng lửa Ember và anh chàng nước Wade tại một thành phố nơi cư dân các nguyên tố Lửa, Nước, Đất, Khí cùng chung sống.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfa9MM1oNHbIX9UmPydr6xAjevhZptB-WbBfPe_RiuDUG66zMVVt-Sj4&s=10',
        rating: '7.0/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Wreck-It Ralph',
        year: 2012,
        director: 'Rich Moore',
        genreEn: 'Animation / Adventure / Comedy',
        genreVn: 'Hoạt Hình / Phiêu Lưu / Hài Hước',
        descEn: 'A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.',
        descVn: 'Gã phản diện trò chơi điện tử Ralph mong muốn trở thành anh hùng nên đã bỏ đi để thực hiện ước mơ, nhưng lại vô tình gây hỗn loạn cho cả khu máy xèng.',
        image: 'https://lumiere-a.akamaihd.net/v1/images/pp_wreckitralph_herobannermobile_19752_d5cd7aaf.jpeg?region=0,0,640,480',
        rating: '7.7/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  }
];

export default function CinemaBackyard({ lang, onNavigate }: CinemaBackyardProps) {
  const todayDay = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<number>(todayDay);

  const selectedDayProgram = moviesList.find(m => m.day === selectedDay) || moviesList[0];

  return (
    <section id="cinema" className="py-16 sm:py-24 bg-[#121214] text-white overflow-hidden relative border-b border-white/5 select-none">
      {/* Hoi An hanging silk lantern decorations */}
      <div className="absolute top-0 left-6 sm:left-12 md:left-24 flex gap-4 sm:gap-6 pointer-events-none z-20">
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-12 bg-amber-400/30" />
          <div className="w-4 h-6 rounded-full bg-rose-500/80 shadow-[0_0_15px_rgba(239,68,68,0.7)] border border-rose-400 flex items-center justify-center">
            <div className="w-1.5 h-3 rounded-full bg-amber-300/60" />
          </div>
          <div className="w-3 h-1 bg-amber-500/50 rounded-xs" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-20 bg-amber-400/30" />
          <div className="w-5 h-7 rounded-full bg-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.7)] border border-amber-400 flex items-center justify-center">
            <div className="w-2 h-4 rounded-full bg-amber-200/60" />
          </div>
          <div className="w-3.5 h-1 bg-amber-600/50 rounded-xs" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-8 bg-amber-400/30" />
          <div className="w-3.5 h-5 rounded-full bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.7)] border border-red-400 flex items-center justify-center">
            <div className="w-1.5 h-2.5 rounded-full bg-amber-200/60" />
          </div>
          <div className="w-2.5 h-1 bg-red-600/50 rounded-xs" />
        </div>
      </div>

      <div className="absolute top-0 right-6 sm:right-12 md:right-24 flex gap-4 pointer-events-none z-20">
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-16 bg-amber-400/30" />
          <div className="w-4.5 h-6.5 rounded-full bg-amber-500/80 shadow-[0_0_15px_rgba(245,158,11,0.7)] border border-amber-400 flex items-center justify-center">
            <div className="w-2 h-3.5 rounded-full bg-amber-200/60" />
          </div>
          <div className="w-3 h-1 bg-amber-600/50 rounded-xs" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-10 bg-amber-400/30" />
          <div className="w-4 h-6 rounded-full bg-rose-500/80 shadow-[0_0_15px_rgba(239,68,68,0.7)] border border-rose-400 flex items-center justify-center">
            <div className="w-1.5 h-3 rounded-full bg-amber-200/60" />
          </div>
          <div className="w-3 h-1 bg-rose-600/50 rounded-xs" />
        </div>
      </div>

      {/* Delicate starry glow backdrop */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-rose-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-amber-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Sleek Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-rose-400 border border-white/10 rounded-full font-sans text-[10px] uppercase font-bold tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Saime Backyard Cinema • Hoi An Ancient Town' : 'Rạp Chiếu Phim Sân Sau Saime • Phố Cổ Hội An'}</span>
            </div>
            
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase text-amber-300">
              {lang === 'en' ? 'Daily Cinema' : 'Chiếu Phim Mỗi Tối'}
            </h2>
            
            <p className="font-sans text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
              {lang === 'en' 
                ? 'Every evening, we set up our projector in the backyard garden. Feel free to stop by, grab a cozy beanbag, and watch classic films with us under the stars. The movies start at 7:00 PM, and entry is completely free.'
                : 'Mỗi tối, tụi mình lại dựng chiếc máy chiếu nhỏ ngoài sân vườn. Mời bạn ghé chơi, ngả lưng trên chiếc ghế lười và thưởng thức những bộ phim kinh điển cùng Saime nhé. Phim bắt đầu chiếu từ 19:00 và hoàn toàn miễn phí vé vào cổng.'}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-rose-400 font-bold shrink-0">
            <div className="flex items-center gap-1.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 px-3 py-1.5 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{lang === 'en' ? 'Starts Sharp at 7:00 PM' : 'Khởi Chiếu Đúng 19:00'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-rose-500/10 text-rose-300 border border-rose-500/20 px-3 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{lang === 'en' ? 'FREE ENTRY' : 'MỞ CỬA TỰ DO'}</span>
            </div>
          </div>
        </div>

        {/* Support Us Hint Banner - HIGHLY OBVIOUS AND COMPELLING */}
        <div className="bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-transparent border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 bg-amber-400 text-neutral-900 text-[9px] font-mono uppercase font-bold tracking-widest rounded shadow-xs">
              {lang === 'en' ? 'Support Our Free Screenings' : 'Ủng Hộ Đêm Chiếu Phim Saime'}
            </span>
            <h3 className="font-sans font-extrabold text-base sm:text-lg uppercase text-white tracking-tight">
              {lang === 'en' ? 'Enjoying our films? Support us with a treat!' : 'Thưởng thức phim hay, gọi món ủng hộ Saime bạn nhé!'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              {lang === 'en'
                ? "Our movie nights are open to everyone, and we love sharing these starry evenings with you. If you would like to help us keep this cozy screen glowing, feel free to treat yourself to our creative cocktails/mocktails, white champagne and rosé, or delicious food from our kitchen. Your company and gentle support are what keep this backyard alive!"
                : "Những đêm chiếu phim ngoài trời của Saime luôn rộng mở chào đón bạn ghé chơi. Nếu bạn muốn tiếp thêm chút ấm áp cho góc màn chiếu nhỏ của tụi mình dưới ánh sao, hãy thoải mái gọi một ly cocktail/mocktail sáng tạo đầy hương vị, sâm-panh trắng thanh tao, vang hồng (rosé) ngọt ngào, hay các món ăn ngon lành từ căn bếp của tụi mình nhé. Sự hiện diện và ủng hộ ngọt ngào của bạn là lý do màn chiếu luôn rực sáng!"}
            </p>
          </div>
          
          <div>
            <button
              onClick={() => onNavigate?.('menu')}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-neutral-950 font-sans font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:scale-103 active:scale-98 animate-pulse"
            >
              <Utensils className="w-4 h-4 text-neutral-950" />
              <span>{lang === 'en' ? 'Browse Kitchen & Bar Menu' : 'Xem Thực Đơn & Gọi Món Ủng Hộ'}</span>
            </button>
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

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {selectedDayProgram.sessions.map((session, index) => {
            const isSessionToday = selectedDay === todayDay;
            return (
              <div 
                key={index} 
                className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-white/20 transition-all group"
              >
                {/* Poster Container - completely clean and distraction-free */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover saturate-[0.8] group-hover:scale-102 transition-transform duration-750"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="space-y-3">
                    {/* Move session, starting time, and rating down here where they are clear and readable */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 bg-rose-500/10 text-rose-300 font-sans font-bold text-[9px] uppercase tracking-widest rounded-lg border border-rose-500/20">
                        {lang === 'en' ? `Session ${index + 1}` : `Suất Chiếu ${index + 1}`}
                      </span>
                      <span className="px-2.5 py-1 bg-white/5 text-amber-300 border border-white/10 font-mono text-[9px] font-bold tracking-wider rounded-lg flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{lang === 'en' ? session.timeEn : session.timeVn}</span>
                      </span>
                      <span className="bg-white/5 text-amber-400 border border-white/10 font-mono text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{session.rating}</span>
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 bg-white/5 text-rose-300 border border-white/10 font-sans text-[10px] font-bold uppercase tracking-wider rounded">
                      {lang === 'en' ? session.genreEn : session.genreVn}
                    </span>
                    
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl uppercase tracking-tight leading-tight text-white">
                      {session.title} <span className="text-white/40 font-normal">({session.year})</span>
                    </h3>
                    
                    <p className="font-mono text-[11px] text-white/50">
                      {lang === 'en' ? 'Directed by' : 'Đạo diễn:'} <span className="text-white font-semibold">{session.director}</span>
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed font-semibold flex-grow">
                    {lang === 'en' ? session.descEn : session.descVn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Entry and Warning Info Block */}
        <div className="pt-4 space-y-4">
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-200 text-xs leading-relaxed font-semibold">
            {lang === 'en'
              ? 'Due to our cozy backyard layout, seating is highly limited. We recommend making an advance table reservation to ensure we can perfectly arrange your seating and overall evening experience.'
              : 'Do không gian sân sau ấm cúng nên số lượng chỗ ngồi cực kỳ giới hạn. Chúng tôi khuyến khích quý khách đặt bàn trước để Saime sắp xếp vị trí ngồi lý tưởng và chuẩn bị tiếp đón chu đáo nhất.'}
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
                {lang === 'en' ? 'Order savory snacks & craft drinks to support us' : 'Đặt món ngon & nước uống thơm ngon ủng hộ Saime'}
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
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-neutral-950 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-md scale-105"
              >
                <Utensils className="w-3.5 h-3.5 text-neutral-950" />
                <span>{lang === 'en' ? 'Order Food to Support' : 'Gọi Món Ủng Hộ'}</span>
              </button>

              <button
                onClick={() => onNavigate?.('board-games')}
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
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
