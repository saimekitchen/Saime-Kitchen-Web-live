import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Clock, Star, Calendar, Utensils, Dice6, Download } from 'lucide-react';

interface CinemaBackyardProps {
  lang: 'en' | 'vn';
  onNavigate?: (section: string) => void;
}

const moviesList = [
  {
    day: 1,
    dayNameEn: 'Monday',
    dayNameVn: 'Thứ Hai',
    dateEn: '13 July',
    dateVn: '13 Tháng 7',
    sessions: [
      {
        title: 'Crazy Rich Asians',
        year: 2018,
        director: 'Jon M. Chu',
        genreEn: 'Comedy / Drama / Romance',
        genreVn: 'Hài Hước / Tâm Lý / Tình Cảm',
        descEn: 'A contemporary romantic comedy, based on the global bestseller, following Rachel Chu to Singapore to meet her boyfriend\'s family.',
        descVn: 'Bộ phim hài lãng mạn hiện đại, dựa trên cuốn sách bán chạy toàn cầu, theo chân Rachel Chu đến Singapore để gặp gỡ gia đình bạn trai cô.',
        image: 'https://m.media-amazon.com/images/S/pv-target-images/cbc9791b586bb2f8677e298d260f707ce355108dcc6f1947fe2081162de13cf4._SX1080_FMjpg_.jpg',
        rating: '6.9/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: '10 Things I Hate About You',
        year: 1999,
        director: 'Gil Junger',
        genreEn: 'Comedy / Drama / Romance',
        genreVn: 'Hài Hước / Tâm Lý / Tình Cảm',
        descEn: 'A pretty, popular teenager can\'t go out on a date until her ill-tempered older sister does.',
        descVn: 'Một cô gái tuổi teen xinh xắn, nổi tiếng không thể hẹn hò cho đến khi cô chị gái khó tính, cá tính của mình tìm được một nửa.',
        image: 'https://i.insider.com/60647d99daf0f10018f992f0?width=700',
        rating: '7.3/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 2,
    dayNameEn: 'Tuesday',
    dayNameVn: 'Thứ Ba',
    dateEn: '14 July',
    dateVn: '14 Tháng 7',
    sessions: [
      {
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        genreEn: 'Crime / Drama',
        genreVn: 'Tội Phạm / Tâm Lý / Kinh Điển',
        descEn: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        descVn: 'Cuộc đời của hai sát thủ, một võ sĩ, một tên trùm xã hội đen cùng vợ hắn và hai kẻ cướp quán ăn đan xen vào nhau trong bốn câu chuyện bạo lực và cứu chuộc.',
        image: 'https://ianfarrington.wordpress.com/wp-content/uploads/2016/09/pulp-fiction-pulp-fiction-13189220-1920-810.jpg',
        rating: '8.9/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'The Breakfast Club',
        year: 1985,
        director: 'John Hughes',
        genreEn: 'Comedy / Drama',
        genreVn: 'Hài Hước / Tâm Lý / Học Đường',
        descEn: 'Five high school students from different walks of life endure a Saturday detention under a power-hungry principal.',
        descVn: 'Năm học sinh trung học với những cá tính khác biệt cùng trải qua một buổi cấm túc ngày Thứ Bảy đầy biến động dưới sự giám sát của thầy hiệu phó.',
        image: 'https://images.squarespace-cdn.com/content/v1/595bdfa4414fb51e2862f53c/1593657531316-OCKU08QUGR1OU90R5OBG/Philosophy-and-Film-The-Breakfast-Club.jpg?format=1000w',
        rating: '7.8/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 3,
    dayNameEn: 'Wednesday',
    dayNameVn: 'Thứ Tư',
    dateEn: '15 July',
    dateVn: '15 Tháng 7',
    sessions: [
      {
        title: 'Annie Hall',
        year: 1977,
        director: 'Woody Allen',
        genreEn: 'Comedy / Romance',
        genreVn: 'Hài Hước / Tình Cảm / Kinh Điển',
        descEn: 'Alvy Singer, a neurotic New York comedian, reflects on the history of his relationship with the vibrant aspiring singer Annie Hall.',
        descVn: 'Alvy Singer, một danh hài hoài nghi tại New York, hồi tưởng lại câu chuyện tình yêu đầy thăng trầm với cô ca sĩ trẻ tràn đầy sức sống Annie Hall.',
        image: 'https://media.newyorker.com/photos/639a8dfccff8504b1f2b0483/master/w_2560%2Cc_limit/ra1101.jpg',
        rating: '8.0/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        genreEn: 'Drama',
        genreVn: 'Tâm Lý / Kinh Điển / Kịch Tính',
        descEn: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
        descVn: 'Qua nhiều năm tháng trong ngục tù, hai người bạn tù gắn bó thân thiết, tìm thấy niềm an ủi và cuối cùng là sự cứu rỗi nhờ lòng trắc ẩn giản đơn.',
        image: 'https://media.vanityfair.com/photos/5d8535de6879fa00082e6ed9/master/w_2560%2Cc_limit/the-Shawshank-Redemption-movie-lede.png',
        rating: '9.3/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 4,
    dayNameEn: 'Thursday',
    dayNameVn: 'Thứ Năm',
    dateEn: '16 July',
    dateVn: '16 Tháng 7',
    sessions: [
      {
        title: 'A Star Is Born',
        year: 2018,
        director: 'Bradley Cooper',
        genreEn: 'Drama / Music / Romance',
        genreVn: 'Tâm Lý / Âm Nhạc / Tình Cảm',
        descEn: 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
        descVn: 'Một nhạc sĩ kỳ cựu giúp một cô gái trẻ tìm thấy hào quang sự nghiệp trong khi tuổi tác và chứng nghiện rượu khiến sự nghiệp của chính anh tuột dốc.',
        image: 'https://c.files.bbci.co.uk/1649B/production/_101919219_starborn3.jpg',
        rating: '7.6/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'La La Land',
        year: 2016,
        director: 'Damien Chazelle',
        genreEn: 'Comedy / Drama / Musical',
        genreVn: 'Hài Hước / Tâm Lý / Nhạc Kịch',
        descEn: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
        descVn: 'Khi đang chật vật tìm kiếm cơ hội nghề nghiệp tại Los Angeles, một nhạc công piano và một nữ diễn viên trẻ đem lòng yêu nhau, cố gắng hòa hợp ước mơ.',
        image: 'https://media.newyorker.com/photos/59097c742179605b11ad90e2/master/w_2560%2Cc_limit/Brody-La-La-Land.jpg',
        rating: '8.0/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 5,
    dayNameEn: 'Friday',
    dayNameVn: 'Thứ Sáu',
    dateEn: '17 July',
    dateVn: '17 Tháng 7',
    sessions: [
      {
        title: 'Catch Me If You Can',
        year: 2002,
        director: 'Steven Spielberg',
        genreEn: 'Biography / Crime / Drama',
        genreVn: 'Tiểu Sử / Hình Sự / Kịch Tính',
        descEn: 'A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars\' worth of checks while posing as various professionals.',
        descVn: 'Một mật vụ FBI ráo riết truy đuổi Frank Abagnale Jr., kẻ trước sinh nhật tuổi 19 đã giả danh thành công hàng loạt ngành nghề và lừa đảo hàng triệu USD.',
        image: 'https://m.media-amazon.com/images/M/MV5BM2FjZTU2ZTYtNTgzNi00MTlmLWE3N2UtZGRiYmE5ZDVmMmVlXkEyXkFqcGc@._V1_.jpg',
        rating: '8.1/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'The Great Gatsby',
        year: 2013,
        director: 'Baz Luhrmann',
        genreEn: 'Drama / Romance',
        genreVn: 'Tâm Lý / Tình Cảm / Sang Trọng',
        descEn: 'A writer and Wall Street trader, Nick Carraway, finds himself drawn into the past and lifestyle of his mysterious millionaire neighbor, Jay Gatsby.',
        descVn: 'Nhà văn trẻ Nick Carraway bị lôi cuốn vào quá khứ hào nhoáng và lối sống xa hoa của người hàng xóm triệu phú bí ẩn Jay Gatsby.',
        image: 'https://www.hollywoodreporter.com/wp-content/uploads/2013/04/GG06892rc_a_l.jpg?w=1440&h=810&crop=1',
        rating: '7.2/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 6,
    dayNameEn: 'Saturday',
    dayNameVn: 'Thứ Bảy',
    dateEn: '18 July',
    dateVn: '18 Tháng 7',
    sessions: [
      {
        title: 'Home Alone',
        year: 1990,
        director: 'Chris Columbus',
        genreEn: 'Comedy / Family',
        genreVn: 'Hài Hước / Gia Đình / Hài Hước',
        descEn: 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family.',
        descVn: 'Cậu bé tinh nghịch tám tuổi Kevin phải một mình bảo vệ ngôi nhà khỏi hai kẻ trộm ngốc nghếch khi bị gia đình vô tình bỏ quên ở nhà.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNW-pHm-uCIgM4lI4SSTwXCsndTyfmO4T4PmWe2OQJeKW1pna0rFOz7w&s=10',
        rating: '7.7/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Home Alone 2',
        year: 1992,
        director: 'Chris Columbus',
        genreEn: 'Comedy / Family / Adventure',
        genreVn: 'Hài Hước / Gia Đình / Phiêu Lưu',
        descEn: 'One year after Kevin McCallister was left home alone, he accidentally finds himself stranded in New York City - and the same dopes are on his trail.',
        descVn: 'Một năm sau khi bị bỏ quên ở nhà, Kevin McCallister vô tình bị lạc tại thành phố New York và tiếp tục phải đối đầu với hai tên trùm cũ.',
        image: 'https://m.media-amazon.com/images/I/6146tp4CUfL._AC_UF894,1000_QL80_.jpg',
        rating: '6.8/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  },
  {
    day: 0,
    dayNameEn: 'Sunday',
    dayNameVn: 'Chủ Nhật',
    dateEn: '19 July',
    dateVn: '19 Tháng 7',
    sessions: [
      {
        title: 'Finding Nemo',
        year: 2003,
        director: 'Andrew Stanton, Lee Unkrich',
        genreEn: 'Animation / Adventure / Comedy',
        genreVn: 'Hoạt Hình / Phiêu Lưu / Hài Hước',
        descEn: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish embarks on a journey to bring him home.',
        descVn: 'Sau khi chú cá con Nemo bị bắt đi khỏi rạn san hô Great Barrier đến Sydney, người cha cá hề nhút nhát Marlin bắt đầu hành trình xuyên đại dương để tìm con.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmLpvWPpEVHvoBezYxaNC6jThSESDqe4WficVi8Nafdd0t9zAlr6W9Lte&s=10',
        rating: '8.2/10',
        timeEn: '7:00 PM',
        timeVn: '19:00'
      },
      {
        title: 'Kung Fu Panda',
        year: 2008,
        director: 'Mark Osborne, John Stevenson',
        genreEn: 'Animation / Action / Adventure',
        genreVn: 'Hoạt Hình / Hành Động / Phiêu Lưu',
        descEn: 'To everyone\'s surprise, Po, an obese panda, is chosen as the Dragon Warrior to defend the Valley of Peace from the villainous Tai Lung.',
        descVn: 'Trước sự ngạc nhiên của tất cả mọi người, chú gấu trúc béo Po được chọn làm Thần Long Đại Hiệp để bảo vệ Thung Lũng Bình Yên khỏi tên báo tuyết Tai Lung.',
        image: 'https://danviet.ex-cdn.com/files/f1/296231569849192448/2025/3/29/kungfu-1743235042991919092682.jpg',
        rating: '7.6/10',
        timeEn: 'Right after Session 1',
        timeVn: 'Ngay sau Suất 1'
      }
    ]
  }
];

export default function CinemaBackyard({ lang, onNavigate }: CinemaBackyardProps) {
  const todayDay = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<number>(todayDay);

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const selectedDayProgram = moviesList.find(m => m.day === selectedDay) || moviesList[0];

  const drawRoundedRect = (cCtx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
    cCtx.beginPath();
    cCtx.moveTo(x + radius, y);
    cCtx.lineTo(x + width - radius, y);
    cCtx.quadraticCurveTo(x + width, y, x + width, y + radius);
    cCtx.lineTo(x + width, y + height - radius);
    cCtx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    cCtx.lineTo(x + radius, y + height);
    cCtx.quadraticCurveTo(x, y + height, x, y + height - radius);
    cCtx.lineTo(x, y + radius);
    cCtx.quadraticCurveTo(x, y, x + radius, y);
    cCtx.closePath();
  };

  const drawImageCover = (
    cCtx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ) => {
    const imgWidth = img.width;
    const imgHeight = img.height;
    const srcRatio = imgWidth / imgHeight;
    const destRatio = dw / dh;

    let sx = 0;
    let sy = 0;
    let sWidth = imgWidth;
    let sHeight = imgHeight;

    if (srcRatio > destRatio) {
      sWidth = imgHeight * destRatio;
      sx = (imgWidth - sWidth) / 2;
    } else {
      sHeight = imgWidth / destRatio;
      sy = (imgHeight - sHeight) / 2;
    }

    cCtx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dw, dh);
  };

  const handleDownloadPNG = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    // Create high-resolution canvas with 3x scale factor
    const scale = 3;
    const canvas = document.createElement('canvas');
    canvas.width = 1125 * scale;
    canvas.height = 475 * scale;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsDownloading(false);
      return;
    }
    // Scale coordinate space to render all 1x coordinates onto 3x pixel grid
    ctx.scale(scale, scale);

    // Helper to load image safely
    const loadImage = (url: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        const img = new Image();
        const isExternal = url.startsWith('http') || url.startsWith('//');
        if (isExternal && !url.includes(window.location.host)) {
          img.crossOrigin = 'anonymous';
        }

        const timeoutId = setTimeout(() => {
          img.onload = null;
          img.onerror = null;
          resolve(null);
        }, 4000); // 4 seconds load timeout

        img.onload = () => {
          clearTimeout(timeoutId);
          resolve(img);
        };

        img.onerror = () => {
          clearTimeout(timeoutId);
          // Fallback - Try loading directly as backup
          const directImg = new Image();
          if (isExternal && !url.includes(window.location.host)) {
            directImg.crossOrigin = 'anonymous';
          }
          const directTimeout = setTimeout(() => {
            directImg.onload = null;
            directImg.onerror = null;
            resolve(null);
          }, 3000);
          
          directImg.onload = () => {
            clearTimeout(directTimeout);
            resolve(directImg);
          };
          directImg.onerror = () => {
            clearTimeout(directTimeout);
            resolve(null);
          };
          directImg.src = url;
        };

        // Proxy external images to prevent canvas-tainting CORS errors
        if (isExternal && !url.includes(window.location.host)) {
          img.src = `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=404`;
        } else {
          img.src = url;
        }
      });
    };

    // Load the user's pre-uploaded QR code image
    let qrImg: HTMLImageElement | null = null;
    try {
      qrImg = await loadImage('/src/assets/images/saime_qr_code.jpg');
    } catch (err) {
      console.error('Failed to load pre-uploaded QR code:', err);
    }

    // Pre-load all movie images in parallel
    const loadedImageList = await Promise.all(
      moviesList.flatMap(m =>
        m.sessions.map(async (sess) => {
          const img = await loadImage(sess.image);
          return { url: sess.image, img };
        })
      )
    );

    const imageMap = new Map<string, HTMLImageElement | null>();
    loadedImageList.forEach(item => {
      imageMap.set(item.url, item.img);
    });

    // Clear & Draw Background
    ctx.fillStyle = '#0f0f11'; // Deep slate black
    ctx.fillRect(0, 0, 1125, 475);

    // Draw an outer border in amber/gold
    ctx.strokeStyle = '#d97706'; // amber-600
    ctx.lineWidth = 4;
    ctx.strokeRect(8, 8, 1109, 459);

    // Draw inner thin accent line
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, 1097, 447);

    // Header Background
    ctx.fillStyle = '#18181b'; // zinc-900
    ctx.fillRect(15, 15, 1095, 65);

    // Accent bottom line for header
    ctx.fillStyle = 'rgba(245, 158, 11, 0.35)'; // amber-500/35
    ctx.fillRect(15, 79, 1095, 2);

    // Lanterns (Left)
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 1.5;
    // Lantern 1
    ctx.beginPath();
    ctx.moveTo(45, 15);
    ctx.lineTo(45, 35);
    ctx.stroke();
    ctx.fillStyle = '#f43f5e'; // rose-500
    ctx.beginPath();
    ctx.arc(45, 43, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fbbf24'; // amber-400
    ctx.fillRect(43, 51, 4, 3);

    // Lantern 2
    ctx.beginPath();
    ctx.moveTo(70, 15);
    ctx.lineTo(70, 43);
    ctx.stroke();
    ctx.fillStyle = '#f59e0b'; // amber-500
    ctx.beginPath();
    ctx.arc(70, 51, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f43f5e'; // rose-500
    ctx.fillRect(68, 58, 4, 3);

    // Lanterns (Right)
    ctx.beginPath();
    ctx.moveTo(1055, 15);
    ctx.lineTo(1055, 35);
    ctx.stroke();
    ctx.fillStyle = '#f43f5e'; // rose-500
    ctx.beginPath();
    ctx.arc(1055, 43, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fbbf24'; // amber-400
    ctx.fillRect(1053, 51, 4, 3);

    ctx.beginPath();
    ctx.moveTo(1080, 15);
    ctx.lineTo(1080, 43);
    ctx.stroke();
    ctx.fillStyle = '#f59e0b'; // amber-500
    ctx.beginPath();
    ctx.arc(1080, 51, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f43f5e'; // rose-500
    ctx.fillRect(1078, 58, 4, 3);

    // Header Texts
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Main Title
    ctx.fillStyle = '#fbbf24'; // amber-400
    ctx.font = '900 22px system-ui, -apple-system, sans-serif';
    const titleText = lang === 'en' ? 'SAIME BACKYARD CINEMA • WEEKLY MOVIE SCHEDULE' : 'LỊCH CHIẾU PHIM TUẦN • RẠP SÂN SAU SAIME';
    ctx.fillText(titleText, 1125 / 2, 38);

    // Subtitle
    ctx.fillStyle = '#d4d4d8'; // zinc-300
    ctx.font = '600 12px system-ui, -apple-system, sans-serif';
    const subtitleText = lang === 'en' 
      ? 'Showings start daily at 7:00 PM • Free Entry • Table Reservation Recommended via Messenger/Zalo' 
      : 'Khởi chiếu hàng tối đúng 19:00 • Vào cửa tự do • Khuyến khích đặt bàn trước qua Zalo/SĐT';
    ctx.fillText(subtitleText, 1125 / 2, 58);

    // Helper function for wrapping text
    const wrapText = (cCtx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) => {
      const words = text.split(' ');
      let line = '';
      let linesCount = 0;
      let currY = y;
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = cCtx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          cCtx.fillText(line.trim(), x, currY);
          line = words[n] + ' ';
          currY += lineHeight;
          linesCount++;
          if (linesCount === maxLines - 1) {
            if (n < words.length - 1) {
              line += '...';
            }
            cCtx.fillText(line.trim(), x, currY);
            return currY + lineHeight;
          }
        } else {
          line = testLine;
        }
      }
      cCtx.fillText(line.trim(), x, currY);
      return currY + lineHeight;
    };

    // Columns configuration
    const xStart = 21;
    const colWidth = 148;
    const colGap = 8;
    const colHeight = 295;
    const colTop = 95;

    moviesList.forEach((m, i) => {
      const colLeft = xStart + i * (colWidth + colGap);

      // Draw Column background (NO TODAY HIGHLIGHT)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(colLeft, colTop, colWidth, colHeight);

      // Draw Column borders (Uniform, no today highlight)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.strokeRect(colLeft, colTop, colWidth, colHeight);

      // Draw Day Header within Column
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(colLeft + 1, colTop + 1, colWidth - 2, 35);

      // Divider under day header
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(colLeft, colTop + 35, colWidth, 1);

      // Day Name & Date Text
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
      const dayName = lang === 'en' ? m.dayNameEn : m.dayNameVn;
      ctx.fillText(dayName.toUpperCase(), colLeft + colWidth / 2, colTop + 14);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '600 9px system-ui, -apple-system, sans-serif';
      const dateStr = lang === 'en' ? m.dateEn : m.dateVn;
      ctx.fillText(dateStr, colLeft + colWidth / 2, colTop + 27);

      // Reset alignment for sessions
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';

      // Draw the 2 sessions
      m.sessions.forEach((sess, idx) => {
        const sessY = colTop + 52 + idx * 125;

        // Poster image rendering
        const posterX = colLeft + 8;
        const posterY = sessY + 4;
        const posterW = 46;
        const posterH = 64;
        const posterRadius = 4;

        const img = imageMap.get(sess.image);
        if (img) {
          ctx.save();
          drawRoundedRect(ctx, posterX, posterY, posterW, posterH, posterRadius);
          ctx.clip();
          drawImageCover(ctx, img, posterX, posterY, posterW, posterH);
          ctx.restore();

          // Draw subtle golden border around poster
          ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
          ctx.lineWidth = 1;
          drawRoundedRect(ctx, posterX, posterY, posterW, posterH, posterRadius);
          ctx.stroke();
        } else {
          // Draw a sleek fallback placeholder
          ctx.save();
          drawRoundedRect(ctx, posterX, posterY, posterW, posterH, posterRadius);
          ctx.clip();

          // Gradient fill
          const grad = ctx.createLinearGradient(posterX, posterY, posterX, posterY + posterH);
          grad.addColorStop(0, '#2d2d30');
          grad.addColorStop(1, '#18181b');
          ctx.fillStyle = grad;
          ctx.fillRect(posterX, posterY, posterW, posterH);

          ctx.restore();

          // Draw fallback background overlay
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(posterX, posterY, posterW, posterH);

          // Draw small film symbol
          ctx.fillStyle = '#fbbf24'; // amber-400
          ctx.font = '14px system-ui, -apple-system, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🎬', posterX + posterW / 2, posterY + posterH / 2);

          // Draw subtle border around poster
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 1;
          drawRoundedRect(ctx, posterX, posterY, posterW, posterH, posterRadius);
          ctx.stroke();
        }

        // Reset alignment for text
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';

        // Session Label & Time
        ctx.fillStyle = '#f43f5e'; // rose-500
        ctx.font = 'bold 8.5px system-ui, -apple-system, sans-serif';
        const label = `S${idx + 1} • `;
        ctx.fillText(label, colLeft + 60, sessY + 8);

        const labelWidth = ctx.measureText(label).width;

        ctx.fillStyle = '#fbbf24'; // amber-400
        ctx.font = 'bold 8.5px system-ui, -apple-system, sans-serif';
        const timeStr = lang === 'en' ? sess.timeEn : sess.timeVn;
        let displayTime = timeStr;
        if (timeStr === 'Right after Session 1') displayTime = 'S2 Follows';
        if (timeStr === 'Ngay sau Suất 1') displayTime = 'Sau Suất 1';
        ctx.fillText(displayTime, colLeft + 60 + labelWidth + 2, sessY + 8);

        // Title (Right side of poster)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px system-ui, -apple-system, sans-serif';
        const titleY = sessY + 20;
        const nextY = wrapText(ctx, sess.title, colLeft + 60, titleY, colWidth - 68, 11, 2);

        // Director & Year
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.font = '500 7.5px system-ui, -apple-system, sans-serif';
        const shortDirector = sess.director.length > 14 ? sess.director.substring(0, 12) + '..' : sess.director;
        const metaText = `${sess.year} • ${shortDirector}`;
        ctx.fillText(metaText, colLeft + 60, nextY + 5);

        // Genre
        ctx.fillStyle = 'rgba(251, 191, 36, 0.8)';
        ctx.font = 'italic 7px system-ui, -apple-system, sans-serif';
        const genre = lang === 'en' ? sess.genreEn : sess.genreVn;
        const shortGenre = genre.length > 20 ? genre.substring(0, 18) + '..' : genre;
        ctx.fillText(shortGenre, colLeft + 60, nextY + 15);

        // Rating Badge Background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(colLeft + 60, nextY + 21, 38, 11);
        // Rating Text
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 7px system-ui, -apple-system, sans-serif';
        ctx.fillText(`★ ${sess.rating}`, colLeft + 64, nextY + 29);

        // Separator between sessions
        if (idx === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.fillRect(colLeft + 8, colTop + 162, colWidth - 16, 1);
        }
      });
    });

    // Divider line between schedule and footer
    ctx.fillStyle = 'rgba(217, 119, 6, 0.35)';
    ctx.fillRect(15, 394, 1095, 1.5);

    // Beautiful Redesigned Footer Section
    const addrX = 18;
    const addrY = 401;
    const addrW = 750;
    const addrH = 58;
    const addrRadius = 8;
    
    // Draw Location Badge Background
    ctx.fillStyle = '#1e1b4b'; // deep indigo-950
    drawRoundedRect(ctx, addrX, addrY, addrW, addrH, addrRadius);
    ctx.fill();
    
    // Draw obvious warm border around address block
    ctx.strokeStyle = '#e11d48'; // rose-600
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, addrX, addrY, addrW, addrH, addrRadius);
    ctx.stroke();

    // 📍 Location Title
    ctx.fillStyle = '#fbbf24'; // amber-400
    ctx.font = 'bold 9px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(lang === 'en' ? '📍 LOCATION (SAIME KITCHEN & BAR)' : '📍 ĐỊA CHỈ (SAIME KITCHEN & BAR)', addrX + 16, addrY + 16);

    // Large high-contrast address (making it extremely obvious)
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 13px system-ui, -apple-system, sans-serif';
    ctx.fillText('144 Ly Thai To, Hoi An', addrX + 16, addrY + 31);

    // Hours & Contact
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = '500 9px system-ui, -apple-system, sans-serif';
    const subInfoText = lang === 'en'
      ? 'Open Daily: 8:00 AM - 11:00 PM • Cinema Starts Daily at 7:00 PM • Hotline: +84 389 446 975'
      : 'Mở cửa hàng ngày: 8:00 - 23:00 • Chiếu phim hàng tối đúng 19:00 • Hotline: +84 389 446 975';
    ctx.fillText(subInfoText, addrX + 16, addrY + 45);

    // Draw QR Code block on the right
    const qrAreaX = 780;
    const qrAreaY = 401;
    const qrAreaW = 327;
    const qrAreaH = 58;
    const qrAreaRadius = 8;
    ctx.fillStyle = '#1c1917'; // stone-900
    drawRoundedRect(ctx, qrAreaX, qrAreaY, qrAreaW, qrAreaH, qrAreaRadius);
    ctx.fill();

    // QR Area border
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, qrAreaX, qrAreaY, qrAreaW, qrAreaH, qrAreaRadius);
    ctx.stroke();

    // Draw white container for QR
    const qrCodeSize = 46;
    const qrX = qrAreaX + 10;
    const qrY = qrAreaY + 6;
    ctx.fillStyle = '#ffffff';
    drawRoundedRect(ctx, qrX, qrY, qrCodeSize, qrCodeSize, 4);
    ctx.fill();

    if (qrImg) {
      ctx.drawImage(qrImg, qrX + 2, qrY + 2, qrCodeSize - 4, qrCodeSize - 4);
    } else {
      // Fallback text
      ctx.fillStyle = '#be123c';
      ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('QR', qrX + qrCodeSize / 2, qrY + qrCodeSize / 2);
    }

    // QR description texts
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // Label: SCAN TO BOOK / ACCESS WEBSITE
    ctx.fillStyle = '#f43f5e'; // rose-500
    ctx.font = 'bold 8.5px system-ui, -apple-system, sans-serif';
    ctx.fillText(lang === 'en' ? 'SCAN TO ACCESS WEBSITE' : 'QUÉT MÃ TRUY CẬP WEBSITE', qrAreaX + 66, qrAreaY + 16);

    // Main text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9.5px system-ui, -apple-system, sans-serif';
    ctx.fillText(lang === 'en' ? 'Quick Menu & Table Booking' : 'Xem Thực Đơn & Đặt Bàn Nhanh', qrAreaX + 66, qrAreaY + 29);

    // Help text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '500 8px system-ui, -apple-system, sans-serif';
    ctx.fillText(lang === 'en' ? 'Scan with your smartphone camera' : 'Sử dụng camera điện thoại để quét', qrAreaX + 66, qrAreaY + 42);

    // Generate PNG
    try {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = lang === 'en' ? 'saime-cinema-schedule.png' : 'saime-lich-chieu-phim.png';
      link.href = imgData;
      link.click();
    } catch (err) {
      console.error('Failed to generate PNG image', err);
    } finally {
      setIsDownloading(false);
    }
  };

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
        <div className="flex flex-wrap gap-2 justify-center p-2 bg-white/5 border border-white/10 rounded-2xl">
          {moviesList.map((m) => {
            const isSelected = selectedDay === m.day;
            const isToday = todayDay === m.day;
            return (
              <button
                key={m.day}
                onClick={() => setSelectedDay(m.day)}
                className={`px-3.5 py-2.5 rounded-xl font-sans font-bold text-center cursor-pointer transition-all border flex flex-col items-center gap-0.5 min-w-[76px] sm:min-w-[90px] ${
                  isSelected
                    ? 'bg-white text-neutral-900 border-white font-extrabold shadow-sm'
                    : 'bg-transparent text-white/60 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">{lang === 'en' ? m.dayNameEn : m.dayNameVn}</span>
                <span className={`text-[9px] font-mono font-bold ${isSelected ? 'text-rose-600' : 'text-white/40'}`}>
                  {lang === 'en' ? m.dateEn : m.dateVn}
                </span>
                {isToday && (
                  <span className="mt-1 px-1 py-0.2 bg-rose-600 text-white text-[7px] font-extrabold rounded uppercase tracking-widest animate-pulse">
                    {lang === 'en' ? 'Today' : 'Hôm Nay'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Day Header and Movies Schedule Title */}
        <div className="text-center space-y-1">
          <p className="font-mono text-[10px] text-rose-400 uppercase font-bold tracking-widest">
            {lang === 'en' ? 'Now Showing' : 'Đang Khởi Chiếu'}
          </p>
          <h3 className="font-sans font-extrabold text-lg sm:text-xl uppercase text-white tracking-tight">
            {lang === 'en' ? selectedDayProgram.dayNameEn : selectedDayProgram.dayNameVn} ({lang === 'en' ? selectedDayProgram.dateEn : selectedDayProgram.dateVn})
          </h3>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                onClick={handleDownloadPNG}
                disabled={isDownloading}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 disabled:opacity-75 text-white font-sans font-semibold text-xs cursor-pointer transition-all flex items-center gap-1 shadow-sm active:scale-95"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-3 w-3 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>{lang === 'en' ? 'Exporting...' : 'Đang tải...'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3 w-3 text-white" />
                    <span>{lang === 'en' ? 'Download PNG' : 'Tải Ảnh Lịch'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onNavigate?.('menu')}
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-neutral-950 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5 shadow-md"
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
