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
  const conclusion = article.conclusion;

  let html = `
      <main class="sr-only">
        <article itemscope itemtype="https://schema.org/Article">
          <header>
            <p><small>${category} • ${date} • ${readTime}</small></p>
            <h1 itemprop="headline">${title}</h1>
            <p>By <span itemprop="author">${article.author}</span> • Saime Introverts Hoi An</p>
          </header>

          <section>
            ${intros.map((p) => `<p>${p}</p>`).join('\n            ')}
          </section>

          <section>
            ${items
              .map((item) => {
                const name = isVi ? item.nameVi : item.name;
                const tagline = isVi ? item.taglineVi : item.tagline;
                const location = isVi ? item.locationVi : item.location;
                const hours = isVi ? item.openingHoursVi : item.openingHours;
                const price = isVi ? item.priceRangeVi : item.priceRange;
                const style = isVi ? (item.cocktailStyleVi || item.cuisineVi) : (item.cocktailStyle || item.cuisine);
                const mustTry = isVi ? item.mustTryVi : item.mustTry;
                const atmosphere = isVi ? item.atmosphereVi : item.atmosphere;
                const paragraphs = (isVi ? item.paragraphsVi : item.paragraphs) || [];

                return `
            <article id="${item.id}">
              <h2>${item.rank}. ${name} – ${tagline}</h2>
              ${item.image ? `<figure><img src="${item.image}" alt="${name} - ${tagline}" width="800" height="500" loading="lazy" /><figcaption>${name} Hoi An</figcaption></figure>` : ''}
              <ul>
                <li><strong>${isVi ? 'Địa chỉ:' : 'Location:'}</strong> ${location}</li>
                <li><strong>${isVi ? 'Giờ mở cửa:' : 'Opening Hours:'}</strong> ${hours}</li>
                ${style ? `<li><strong>${isVi ? 'Phong cách / Ẩm thực:' : 'Style / Cuisine:'}</strong> ${style}</li>` : ''}
                <li><strong>${isVi ? 'Mức giá:' : 'Price Range:'}</strong> ${price}</li>
                ${mustTry ? `<li><strong>${isVi ? 'Nên thử:' : 'Must-Try:'}</strong> ${mustTry}</li>` : ''}
                ${atmosphere ? `<li><strong>${isVi ? 'Không gian:' : 'Atmosphere:'}</strong> ${atmosphere}</li>` : ''}
              </ul>
              ${paragraphs.map((p) => `<p>${p}</p>`).join('\n              ')}
            </article>`;
              })
              .join('\n')}
          </section>

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

    // 1. Replace HTML lang attribute
    html = html.replace(/<html\s+lang=".*?"/, `<html lang="${route.lang}"`);

    // 2. Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // 3. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );

    // 4. Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 5. Replace OpenGraph Title, Description, and URL
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 6. Replace Twitter Title & Description
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${route.description}" />`
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
          "datePublished": "${route.articleSlug.includes('5-must-try') ? '2026-11-01T08:00:00+07:00' : '2026-10-15T08:00:00+07:00'}",
          "dateModified": "2026-11-08T00:00:00+07:00",
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
