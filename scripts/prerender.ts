import fs from 'fs';
import path from 'path';
import { ARTICLES_DATA, RestaurantReview } from '../src/data/articlesData';

interface RouteMetadata {
  path: string;
  lang: 'en' | 'vi';
  title: string;
  description: string;
  canonical: string;
  alternateEn: string;
  alternateVi: string;
  h1: string;
  articleSlug?: string;
}

const routes: RouteMetadata[] = [
  // --- ENGLISH ROUTES ---
  {
    path: '/food',
    lang: 'en',
    title: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
    description: 'Modern Vietnamese childhood fusion menu at Saime Introverts Hoi An. Inventive culinary balance and nostalgic comfort food at 144 Ly Thai To.',
    canonical: 'https://www.saimekb.com/food',
    alternateEn: 'https://www.saimekb.com/food',
    alternateVi: 'https://www.saimekb.com/vn/food',
    h1: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
  },
  {
    path: '/cocktails',
    lang: 'en',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://www.saimekb.com/cocktails',
    alternateEn: 'https://www.saimekb.com/cocktails',
    alternateVi: 'https://www.saimekb.com/vn/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/cocktail',
    lang: 'en',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://www.saimekb.com/cocktails',
    alternateEn: 'https://www.saimekb.com/cocktails',
    alternateVi: 'https://www.saimekb.com/vn/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/articles',
    lang: 'en',
    title: 'Stories & Culinary Guides | Saime Introverts',
    description: 'Curated guides to fine dining and modern fusion in Hoi An. Discover iconic culinary memories, childhood flavors, and authentic dining spots.',
    canonical: 'https://www.saimekb.com/articles',
    alternateEn: 'https://www.saimekb.com/articles',
    alternateVi: 'https://www.saimekb.com/vn/articles',
    h1: 'Stories & Culinary Guides | Saime Introverts Hoi An',
  },
  {
    path: '/articles/top-8-fine-dining-fusion-hoi-an',
    lang: 'en',
    title: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An | Saime',
    description: 'Curated guide to the top 8 fine dining and fusion restaurants in Hoi An you must try, featuring Saime Introverts, Mùa, Mango Rooms, and more.',
    canonical: 'https://www.saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    h1: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An You Must Try',
    articleSlug: 'top-8-fine-dining-fusion-hoi-an',
  },
  {
    path: '/articles/5-must-try-cocktail-bars-hoi-an',
    lang: 'en',
    title: '5 Must-Try Cocktail Bars in Hoi An | Saime Introverts',
    description: 'Curated guide to the 5 must-visit cocktail bars in Hoi An for an unforgettable nightlife experience, featuring Saime Introverts and top spots.',
    canonical: 'https://www.saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    h1: '5 Must-Try Cocktail Bars in Hoi An for an Unforgettable Nightlife Experience',
    articleSlug: '5-must-try-cocktail-bars-hoi-an',
  },
  {
    path: '/articles/unique-things-to-do-in-hoi-an',
    lang: 'en',
    title: 'Unique Things to Do in Hoi An Beyond the Usual Tourist Trail',
    description: 'Looking for authentic things to do in Hoi An? Skip the standard tours and try dawn street food, custom cocktail crafting at Saime, stained glass art, and local "nhậu" spots.',
    canonical: 'https://www.saimekb.com/articles/unique-things-to-do-in-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/unique-things-to-do-in-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/unique-things-to-do-in-hoi-an',
    h1: 'Unique Things to Do in Hoi An Beyond the Usual Tourist Trail',
    articleSlug: 'unique-things-to-do-in-hoi-an',
  },
  {
    path: '/articles/6-underrated-hoi-an-places-to-visit',
    lang: 'en',
    title: '6 Underrated Hoi An Places to Visit Beyond the Ancient Town',
    description: 'Explore the best Hoi An places to visit outside the Old Town: Kim Bong Carpentry Village, Thanh Ha Pottery, Tam Thanh Mural Village, Cu Lao driftwood art, CSO Gallery, and scenic rice paddies.',
    canonical: 'https://www.saimekb.com/articles/6-underrated-hoi-an-places-to-visit',
    alternateEn: 'https://www.saimekb.com/articles/6-underrated-hoi-an-places-to-visit',
    alternateVi: 'https://www.saimekb.com/vn/articles/6-underrated-hoi-an-places-to-visit',
    h1: '6 Underrated Hoi An Places to Visit Beyond the Ancient Town',
    articleSlug: '6-underrated-hoi-an-places-to-visit',
  },
  {
    path: '/articles/hoi-an-memories-land-review',
    lang: 'en',
    title: 'Hoi An Memories Land Review: Is It Worth the Hype?',
    description: 'Wondering if Hoi An Memories Land and the Hoi An Memories Show live up to the hype? Here is an honest look at what to expect, ticket tips, and who will love it most.',
    canonical: 'https://www.saimekb.com/articles/hoi-an-memories-land-review',
    alternateEn: 'https://www.saimekb.com/articles/hoi-an-memories-land-review',
    alternateVi: 'https://www.saimekb.com/vn/articles/hoi-an-memories-land-review',
    h1: 'Hoi An Memories Land Review: Is It Worth the Hype?',
    articleSlug: 'hoi-an-memories-land-review',
  },
  {
    path: '/articles/5-must-visit-hoi-an-museums',
    lang: 'en',
    title: '5 Must-Visit Hoi An Museums to Understand the Ancient Town’s Soul',
    description: 'Discover the top 5 Hoi An museums: Museum of History and Culture, Sa Huynh Culture Museum, Museum of Trade Ceramics, Precious Heritage Museum, and Thanh Ha Terracotta Park.',
    canonical: 'https://www.saimekb.com/articles/5-must-visit-hoi-an-museums',
    alternateEn: 'https://www.saimekb.com/articles/5-must-visit-hoi-an-museums',
    alternateVi: 'https://www.saimekb.com/vn/articles/5-must-visit-hoi-an-museums',
    h1: '5 Must-Visit Hoi An Museums to Understand the Ancient Town’s Soul',
    articleSlug: '5-must-visit-hoi-an-museums',
  },
  {
    path: '/articles/scenic-hoi-an-sightseeing',
    lang: 'en',
    title: 'Scenic Hoi An Sightseeing: Craft Villages, Art Sanctuaries & Paddy Fields',
    description: 'Plan the ultimate Hoi An sightseeing route beyond the Old Town. Discover picturesque rice fields, riverside craft villages, coastal murals, and hidden art galleries.',
    canonical: 'https://www.saimekb.com/articles/scenic-hoi-an-sightseeing',
    alternateEn: 'https://www.saimekb.com/articles/scenic-hoi-an-sightseeing',
    alternateVi: 'https://www.saimekb.com/vn/articles/scenic-hoi-an-sightseeing',
    h1: 'Scenic Hoi An Sightseeing: Craft Villages, Art Sanctuaries & Paddy Fields',
    articleSlug: 'scenic-hoi-an-sightseeing',
  },

  // --- VIETNAMESE ROUTES (/vn/...) ---
  {
    path: '/vn',
    lang: 'vi',
    title: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
    description: 'Khám phá thực đơn món ăn fusion tuổi thơ tại Saime Introverts Hội An. Hương vị hoài niệm được chế tác tinh tế tại 144 Lý Thái Tổ.',
    canonical: 'https://www.saimekb.com/vn/food',
    alternateEn: 'https://www.saimekb.com/food',
    alternateVi: 'https://www.saimekb.com/vn/food',
    h1: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
  },
  {
    path: '/vn/food',
    lang: 'vi',
    title: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
    description: 'Khám phá thực đơn món ăn fusion tuổi thơ tại Saime Introverts Hội An. Hương vị hoài niệm được chế tác tinh tế tại 144 Lý Thái Tổ.',
    canonical: 'https://www.saimekb.com/vn/food',
    alternateEn: 'https://www.saimekb.com/food',
    alternateVi: 'https://www.saimekb.com/vn/food',
    h1: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
  },
  {
    path: '/vn/cocktails',
    lang: 'vi',
    title: '12 Cocktail Đặc Sản Ba Miền | Saime Hội An',
    description: 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.',
    canonical: 'https://www.saimekb.com/vn/cocktails',
    alternateEn: 'https://www.saimekb.com/cocktails',
    alternateVi: 'https://www.saimekb.com/vn/cocktails',
    h1: '12 Ly Cocktail Đặc Sản Ba Miền Độc Bản',
  },
  {
    path: '/vn/cocktail',
    lang: 'vi',
    title: '12 Cocktail Đặc Sản Ba Miền | Saime Hội An',
    description: 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.',
    canonical: 'https://www.saimekb.com/vn/cocktails',
    alternateEn: 'https://www.saimekb.com/cocktails',
    alternateVi: 'https://www.saimekb.com/vn/cocktails',
    h1: '12 Ly Cocktail Đặc Sản Ba Miền Độc Bản',
  },
  {
    path: '/vn/articles',
    lang: 'vi',
    title: 'Cẩm Nang Ẩm Thực & Quán Bar Hội An | Saime Introverts',
    description: 'Cẩm nang nhà hàng fine dining và quán cocktail bar chọn lọc tại Hội An cùng góc nhìn ẩm thực tuổi thơ đương đại độc bản.',
    canonical: 'https://www.saimekb.com/vn/articles',
    alternateEn: 'https://www.saimekb.com/articles',
    alternateVi: 'https://www.saimekb.com/vn/articles',
    h1: 'Cẩm Nang Ẩm Thực & Quán Bar Hội An | Saime Introverts',
  },
  {
    path: '/vn/articles/top-8-fine-dining-fusion-hoi-an',
    lang: 'vi',
    title: 'Top 8 Nhà Hàng Fine Dining & Fusion Tại Hội An | Saime',
    description: 'Cẩm nang 8 nhà hàng fine dining và ẩm thực fusion sáng tạo không thể bỏ lỡ tại Hội An, với điểm nhấn Saime Introverts, Mùa, Mango Rooms.',
    canonical: 'https://www.saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    h1: 'Top 8 Nhà Hàng Fine Dining & Fusion Nhất Định Phải Thử Tại Hội An',
    articleSlug: 'top-8-fine-dining-fusion-hoi-an',
  },
  {
    path: '/vn/articles/5-must-try-cocktail-bars-hoi-an',
    lang: 'vi',
    title: 'Top 5 Quán Cocktail Bar Phải Thử Tại Hội An | Saime',
    description: 'Danh sách 5 quán cocktail bar đặc sắc nhất tại Hội An cho trải nghiệm đêm đáng nhớ, dẫn đầu bởi Saime Introverts kể chuyện tuổi thơ Việt.',
    canonical: 'https://www.saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    h1: 'Top 5 Quán Cocktail Bar Nhất Định Phải Thử Tại Hội An',
    articleSlug: '5-must-try-cocktail-bars-hoi-an',
  },
  {
    path: '/vn/articles/unique-things-to-do-in-hoi-an',
    lang: 'vi',
    title: 'Những trải nghiệm khác biệt tại Hội An ngoài các tour truyền thống',
    description: 'Bạn đã quen với làm đèn lồng hay lớp học nấu ăn? Khám phá ngay 5 hoạt động bản địa đầy sáng tạo tại Hội An: ăn sáng lúc 6h, tự pha cocktail tại Saime, làm kính màu và đi nhậu kiểu người địa phương.',
    canonical: 'https://www.saimekb.com/vn/articles/unique-things-to-do-in-hoi-an',
    alternateEn: 'https://www.saimekb.com/articles/unique-things-to-do-in-hoi-an',
    alternateVi: 'https://www.saimekb.com/vn/articles/unique-things-to-do-in-hoi-an',
    h1: 'Những trải nghiệm khác biệt tại Hội An ngoài các tour truyền thống',
    articleSlug: 'unique-things-to-do-in-hoi-an',
  },
  {
    path: '/vn/articles/6-underrated-hoi-an-places-to-visit',
    lang: 'vi',
    title: '6 địa điểm tham quan Hội An độc đáo ngoài khu vực Phố Cổ',
    description: 'Khám phá những điểm đến giàu bản sắc quanh Hội An: Làng mộc Kim Bồng, Làng gốm Thanh Hà, Làng bích họa Tam Thanh, cung đường lúa QCasa Qafe, Làng Củi Lũ và CSO Gallery.',
    canonical: 'https://www.saimekb.com/vn/articles/6-underrated-hoi-an-places-to-visit',
    alternateEn: 'https://www.saimekb.com/articles/6-underrated-hoi-an-places-to-visit',
    alternateVi: 'https://www.saimekb.com/vn/articles/6-underrated-hoi-an-places-to-visit',
    h1: '6 địa điểm tham quan Hội An độc đáo ngoài khu vực Phố Cổ',
    articleSlug: '6-underrated-hoi-an-places-to-visit',
  },
  {
    path: '/vn/articles/hoi-an-memories-land-review',
    lang: 'vi',
    title: 'Review Hoi An Memories Land (Đảo Ký Ức Hội An): Có thực sự đáng tiền như lời đồn?',
    description: 'Đánh giá khách quan về Hoi An Memories Land và show diễn Ký Ức Hội An: điểm cộng, điểm trừ, giá vé và kinh nghiệm sắp xếp lịch trình trọn vẹn nhất.',
    canonical: 'https://www.saimekb.com/vn/articles/hoi-an-memories-land-review',
    alternateEn: 'https://www.saimekb.com/articles/hoi-an-memories-land-review',
    alternateVi: 'https://www.saimekb.com/vn/articles/hoi-an-memories-land-review',
    h1: 'Review Hoi An Memories Land (Đảo Ký Ức Hội An): Có thực sự đáng tiền như lời đồn?',
    articleSlug: 'hoi-an-memories-land-review',
  },
  {
    path: '/vn/articles/5-must-visit-hoi-an-museums',
    lang: 'vi',
    title: 'Top 5 bảo tàng nổi tiếng tại Hội An giúp bạn hiểu trọn linh hồn Phố Cổ',
    description: 'Khám phá 5 bảo tàng đặc sắc nhất Hội An: Bảo tàng Lịch sử – Văn hóa, Bảo tàng Văn hóa Sa Huỳnh, Bảo tàng Gốm sứ Mậu dịch, Precious Heritage Museum và Công viên Đất nung Thanh Hà.',
    canonical: 'https://www.saimekb.com/vn/articles/5-must-visit-hoi-an-museums',
    alternateEn: 'https://www.saimekb.com/articles/5-must-visit-hoi-an-museums',
    alternateVi: 'https://www.saimekb.com/vn/articles/5-must-visit-hoi-an-museums',
    h1: 'Top 5 bảo tàng nổi tiếng tại Hội An giúp bạn hiểu trọn linh hồn Phố Cổ',
    articleSlug: '5-must-visit-hoi-an-museums',
  },
  {
    path: '/vn/articles/scenic-hoi-an-sightseeing',
    lang: 'vi',
    title: 'Lộ trình ngắm cảnh & khám phá văn hóa Hội An ngoài Phố Cổ',
    description: 'Gợi ý cung đường tham quan ngắm cảnh tuyệt đẹp quanh Hội An: từ đồng lúa QCasa Qafe, làng nghề ven sông Thu Bồn đến không gian nghệ thuật Làng Củi Lũ và làng bích họa ven biển.',
    canonical: 'https://www.saimekb.com/vn/articles/scenic-hoi-an-sightseeing',
    alternateEn: 'https://www.saimekb.com/articles/scenic-hoi-an-sightseeing',
    alternateVi: 'https://www.saimekb.com/vn/articles/scenic-hoi-an-sightseeing',
    h1: 'Lộ trình ngắm cảnh & khám phá văn hóa Hội An ngoài Phố Cổ',
    articleSlug: 'scenic-hoi-an-sightseeing',
  },
];

function generateArticleSemanticHtml(slug: string, isVi: boolean): string {
  const article = ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug);
  if (!article) return '';

  const title = isVi ? article.titleVi : article.title;
  const category = isVi ? article.categoryVi : article.category;
  const date = isVi ? article.dateVi : article.date;
  const readTime = isVi ? article.readTimeVi : article.readTime;
  const intros = (isVi ? article.introParagraphsVi : article.introParagraphs) || [];
  const items: RestaurantReview[] = article.restaurantsData || [];
  const editorialSections = article.editorialSections || [];
  const venueInfo = article.venueInfo;
  const conclusion = article.conclusion;

  let html = `
      <main class="sr-only">
        <article itemscope itemtype="https://schema.org/Article">
          <header>
            <p><small>${category} • ${date} • ${readTime}</small></p>
            <h1 itemprop="headline">${title}</h1>
            <p>By <span itemprop="author">${article.author}</span> • Saime Introverts Hoi An</p>
          </header>

          ${article.coverImage && editorialSections.length > 0 ? `<figure><img src="${article.coverImage}" alt="${title}" width="800" height="500" loading="eager" /></figure>` : ''}

          <section>
            ${intros.map((p) => `<p>${p}</p>`).join('\n            ')}
          </section>

          ${
            venueInfo
              ? `
          <section>
            <ul>
              <li><strong>${isVi ? 'Địa chỉ:' : 'Location:'}</strong> ${isVi ? venueInfo.locationVi : venueInfo.location}</li>
              <li><strong>${isVi ? 'Giờ mở cửa:' : 'Opening Hours:'}</strong> ${isVi ? venueInfo.openingHoursVi : venueInfo.openingHours}</li>
              <li><strong>${isVi ? 'Giá vé tham khảo:' : 'Ticket Price:'}</strong> ${isVi ? venueInfo.ticketPriceVi : venueInfo.ticketPrice}</li>
            </ul>
          </section>`
              : ''
          }

          ${
            items.length > 0
              ? `
          <section>
            ${items
              .map((item) => {
                const name = isVi ? item.nameVi : item.name;
                const tagline = isVi ? item.taglineVi : item.tagline;
                const location = isVi ? item.locationVi : item.location;
                const hours = isVi ? item.openingHoursVi : item.openingHours;
                const price = isVi ? item.priceRangeVi : item.priceRange;
                const ticketPrice = isVi ? item.ticketPriceVi : item.ticketPrice;
                const style = isVi ? (item.cocktailStyleVi || item.cuisineVi) : (item.cocktailStyle || item.cuisine);
                const mustTry = isVi ? item.mustTryVi : item.mustTry;
                const atmosphere = isVi ? item.atmosphereVi : item.atmosphere;
                const paragraphs = (isVi ? item.paragraphsVi : item.paragraphs) || [];

                return `
            <article id="${item.id}">
              <h2>${item.rank}. ${name}${tagline ? ` – ${tagline}` : ''}</h2>
              ${item.image ? `<figure><img src="${item.image}" alt="${tagline ? `${name} - ${tagline}` : name}" width="800" height="500" loading="lazy" /><figcaption>${name} Hoi An</figcaption></figure>` : ''}
              <ul>
                ${location ? `<li><strong>${isVi ? 'Địa chỉ:' : 'Address:'}</strong> ${location}</li>` : ''}
                ${hours ? `<li><strong>${isVi ? 'Giờ mở cửa:' : 'Opening Hours:'}</strong> ${hours}</li>` : ''}
                ${ticketPrice ? `<li><strong>${isVi ? 'Giá vé:' : (item.ticketLabel || 'Ticket Price:')}</strong> ${ticketPrice}</li>` : ''}
                ${style ? `<li><strong>${isVi ? 'Phong cách / Ẩm thực:' : 'Style / Cuisine:'}</strong> ${style}</li>` : ''}
                ${price ? `<li><strong>${isVi ? 'Mức giá:' : 'Price Range:'}</strong> ${price}</li>` : ''}
                ${mustTry ? `<li><strong>${isVi ? 'Nên thử:' : 'Must-Try:'}</strong> ${mustTry}</li>` : ''}
                ${atmosphere ? `<li><strong>${isVi ? 'Không gian:' : 'Atmosphere:'}</strong> ${atmosphere}</li>` : ''}
              </ul>
              ${paragraphs.map((p) => `<p>${p}</p>`).join('\n              ')}
            </article>`;
              })
              .join('\n')}
          </section>`
              : ''
          }

          ${
            editorialSections.length > 0
              ? editorialSections
                  .map(
                    (sec) => `
          <section id="${sec.id}">
            <h2>${isVi ? sec.titleVi : sec.title}</h2>
            ${sec.items
              .map((it) => {
                const lead = isVi ? it.leadVi : it.lead;
                const text = isVi ? it.textVi : it.text;
                return `<p>${lead ? `<strong>${lead}</strong> ` : ''}${text}</p>`;
              })
              .join('\n            ')}
          </section>`
                  )
                  .join('\n')
              : ''
          }

          ${
            conclusion
              ? `
          <section>
            <h2>${isVi ? conclusion.titleVi : conclusion.title}</h2>
            <p>${isVi ? conclusion.textVi : conclusion.text}</p>
          </section>`
              : ''
          }

          <section>
            <h3>Related Guides &amp; Menus</h3>
            <ul>
              <li><a href="${isVi ? '/vn/articles/top-8-fine-dining-fusion-hoi-an' : '/articles/top-8-fine-dining-fusion-hoi-an'}">${isVi ? 'Top 8 Nhà Hàng Fine Dining &amp; Fusion Tại Hội An' : 'Top 8 Fine Dining &amp; Fusion Restaurants in Hoi An'}</a></li>
              <li><a href="${isVi ? '/vn/articles/5-must-try-cocktail-bars-hoi-an' : '/articles/5-must-try-cocktail-bars-hoi-an'}">${isVi ? 'Top 5 Quán Cocktail Bar Nhất Định Phải Thử Tại Hội An' : '5 Must-Try Cocktail Bars in Hoi An'}</a></li>
              <li><a href="${isVi ? '/vn/articles/unique-things-to-do-in-hoi-an' : '/articles/unique-things-to-do-in-hoi-an'}">${isVi ? 'Những trải nghiệm khác biệt tại Hội An ngoài các tour truyền thống' : 'Unique Things to Do in Hoi An Beyond the Usual Tourist Trail'}</a></li>
              <li><a href="${isVi ? '/vn/articles/6-underrated-hoi-an-places-to-visit' : '/articles/6-underrated-hoi-an-places-to-visit'}">${isVi ? '6 địa điểm tham quan Hội An độc đáo ngoài khu vực Phố Cổ' : '6 Underrated Hoi An Places to Visit Beyond the Ancient Town'}</a></li>
              <li><a href="${isVi ? '/vn/articles/hoi-an-memories-land-review' : '/articles/hoi-an-memories-land-review'}">${isVi ? 'Review Hoi An Memories Land (Đảo Ký Ức Hội An): Có thực sự đáng tiền như lời đồn?' : 'Hoi An Memories Land Review: Is It Worth the Hype?'}</a></li>
              <li><a href="${isVi ? '/vn/articles/5-must-visit-hoi-an-museums' : '/articles/5-must-visit-hoi-an-museums'}">${isVi ? 'Top 5 bảo tàng nổi tiếng tại Hội An giúp bạn hiểu trọn linh hồn Phố Cổ' : '5 Must-Visit Hoi An Museums to Understand the Ancient Town’s Soul'}</a></li>
              <li><a href="${isVi ? '/vn/articles/scenic-hoi-an-sightseeing' : '/articles/scenic-hoi-an-sightseeing'}">${isVi ? 'Lộ trình ngắm cảnh &amp; khám phá văn hóa Hội An ngoài Phố Cổ' : 'Scenic Hoi An Sightseeing: Craft Villages, Art Sanctuaries &amp; Paddy Fields'}</a></li>
              <li><a href="${isVi ? '/vn/food' : '/food'}">${isVi ? 'Thực Đơn Món Ăn Fusion Tuổi Thơ' : 'Food Lab Menu'}</a></li>
              <li><a href="${isVi ? '/vn/cocktails' : '/cocktails'}">${isVi ? '12 Ly Cocktail Đặc Sản Ba Miền' : '12 Regional Cocktails'}</a></li>
              <li><a href="${isVi ? '/articles/' + slug : '/vn/articles/' + slug}">${isVi ? 'English Version' : 'Phiên bản Tiếng Việt'}</a></li>
            </ul>
          </section>
        </article>
      </main>`;

  return html;
}

function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const baseHtmlPath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(baseHtmlPath)) {
    console.error('[Prerender] Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  for (const route of routes) {
    const targetDir = path.resolve(distDir, route.path.replace(/^\//, ''));
    fs.mkdirSync(targetDir, { recursive: true });

    let html = baseHtml;

    const escapeAttr = (val: string) => val.replace(/"/g, '&quot;');
    const safeAttrTitle = escapeAttr(route.title);
    const safeAttrDesc = escapeAttr(route.description);

    // 1. Replace HTML lang attribute
    html = html.replace(/<html\s+lang=".*?"/, `<html lang="${route.lang}"`);

    // 2. Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // 3. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${safeAttrDesc}" />`
    );

    // 4. Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 5. Replace OpenGraph Title, Description, and URL
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${safeAttrTitle}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${safeAttrDesc}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 6. Replace Twitter Title & Description
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${safeAttrTitle}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${safeAttrDesc}" />`
    );

    // 7. If this is an article page, inject Schema.org Article and BreadcrumbList JSON-LD + Rich Article Semantic HTML!
    if (route.articleSlug) {
      const isVi = route.lang === 'vi';
      const article = ARTICLES_DATA.find((a) => a.slug === route.articleSlug || a.id === route.articleSlug);
      const articleCover = article?.coverImage || 'https://i.imgur.com/IO2U2B9.jpeg';

      const articleJsonLd = `
    <!-- Schema.org Article & Breadcrumbs for ${route.articleSlug} -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": "${route.canonical}#article",
          "isPartOf": {
            "@type": "WebPage",
            "@id": "${route.canonical}"
          },
          "headline": "${route.h1.replace(/"/g, '\\"')}",
          "description": "${route.description.replace(/"/g, '\\"')}",
          "image": "${articleCover}",
          "datePublished": "${route.articleSlug.includes('top-8') ? '2026-10-15T08:00:00+07:00' : route.articleSlug.includes('5-must-try') ? '2026-11-01T08:00:00+07:00' : '2026-11-17T08:00:00+07:00'}",
          "dateModified": "2026-11-17T00:00:00+07:00",
          "inLanguage": "${route.lang}",
          "author": {
            "@type": "Organization",
            "name": "Saime Editorial Team",
            "url": "https://www.saimekb.com/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Saime Introverts",
            "url": "https://www.saimekb.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.saimekb.com/logo.png"
            }
          },
          "mainEntityOfPage": "${route.canonical}"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${route.canonical}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "${isVi ? 'Trang Chủ' : 'Home'}",
              "item": "https://www.saimekb.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "${isVi ? 'Cẩm Nang Ẩm Thực' : 'Articles'}",
              "item": "${isVi ? 'https://www.saimekb.com/vn/articles' : 'https://www.saimekb.com/articles'}"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "${route.h1.replace(/"/g, '\\"')}",
              "item": "${route.canonical}"
            }
          ]
        }
      ]
    }
    </script>
`;
      // Insert JSON-LD right before </head>
      html = html.replace('</head>', `${articleJsonLd}\n  </head>`);

      // Replace the main body with full article content
      const articleBodyHtml = generateArticleSemanticHtml(route.articleSlug, isVi);
      if (articleBodyHtml) {
        html = html.replace(/<main class="sr-only">[\s\S]*?<\/main>/, articleBodyHtml.trim());
      }
    } else {
      // General H1 replacement
      html = html.replace(/<h1[^>]*>.*?<\/h1>/, `<h1>${route.h1}</h1>`);
    }

    // 8. Add hreflang links before </head>
    const hreflangTags = `
    <link rel="alternate" hreflang="en" href="${route.alternateEn}" />
    <link rel="alternate" hreflang="vi" href="${route.alternateVi}" />
    <link rel="alternate" hreflang="x-default" href="${route.alternateEn}" />
  </head>`;
    html = html.replace('</head>', hreflangTags);

    const outPath = path.resolve(targetDir, 'index.html');
    fs.writeFileSync(outPath, html, 'utf8');
    console.log(`[Prerender] Generated static route: ${route.path} -> ${outPath}`);
  }

  console.log('[Prerender] All routes successfully pre-rendered into dist/');
}

prerender();
