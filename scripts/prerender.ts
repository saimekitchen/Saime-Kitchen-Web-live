import fs from 'fs';
import path from 'path';

interface RouteMetadata {
  path: string;
  lang: 'en' | 'vi';
  title: string;
  description: string;
  canonical: string;
  alternateEn: string;
  alternateVi: string;
  h1: string;
}

const routes: RouteMetadata[] = [
  // --- ENGLISH ROUTES ---
  {
    path: '/food',
    lang: 'en',
    title: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
    description: 'Modern Vietnamese childhood fusion menu at Saime Introverts Hoi An. Inventive culinary balance and nostalgic comfort food at 144 Ly Thai To.',
    canonical: 'https://saimekb.com/food',
    alternateEn: 'https://saimekb.com/food',
    alternateVi: 'https://saimekb.com/vn/food',
    h1: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
  },
  {
    path: '/cocktails',
    lang: 'en',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://saimekb.com/cocktails',
    alternateEn: 'https://saimekb.com/cocktails',
    alternateVi: 'https://saimekb.com/vn/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/cocktail',
    lang: 'en',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://saimekb.com/cocktails',
    alternateEn: 'https://saimekb.com/cocktails',
    alternateVi: 'https://saimekb.com/vn/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/articles',
    lang: 'en',
    title: 'Stories & Culinary Guides | Saime Introverts',
    description: 'Curated guides to fine dining and modern fusion in Hoi An. Discover iconic culinary memories, childhood flavors, and authentic dining spots.',
    canonical: 'https://saimekb.com/articles',
    alternateEn: 'https://saimekb.com/articles',
    alternateVi: 'https://saimekb.com/vn/articles',
    h1: 'Stories & Culinary Guides | Saime Introverts',
  },
  {
    path: '/articles/top-8-fine-dining-fusion-hoi-an',
    lang: 'en',
    title: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An | Saime',
    description: 'Curated guide to the top 8 fine dining and fusion restaurants in Hoi An you must try, featuring Saime Introverts, Mùa, Mango Rooms, and more.',
    canonical: 'https://saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateEn: 'https://saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateVi: 'https://saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    h1: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An You Must Try',
  },
  {
    path: '/articles/5-must-try-cocktail-bars-hoi-an',
    lang: 'en',
    title: '5 Must-Try Cocktail Bars in Hoi An | Saime Introverts',
    description: 'Curated guide to the 5 must-visit cocktail bars in Hoi An for an unforgettable nightlife experience, featuring Saime Introverts and top spots.',
    canonical: 'https://saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateEn: 'https://saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateVi: 'https://saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    h1: '5 Must-Try Cocktail Bars in Hoi An for an Unforgettable Nightlife Experience',
  },

  // --- VIETNAMESE ROUTES (/vn/...) ---
  {
    path: '/vn',
    lang: 'vi',
    title: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
    description: 'Khám phá thực đơn món ăn fusion tuổi thơ tại Saime Introverts Hội An. Hương vị hoài niệm được chế tác tinh tế tại 144 Lý Thái Tổ.',
    canonical: 'https://saimekb.com/vn/food',
    alternateEn: 'https://saimekb.com/food',
    alternateVi: 'https://saimekb.com/vn/food',
    h1: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
  },
  {
    path: '/vn/food',
    lang: 'vi',
    title: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
    description: 'Khám phá thực đơn món ăn fusion tuổi thơ tại Saime Introverts Hội An. Hương vị hoài niệm được chế tác tinh tế tại 144 Lý Thái Tổ.',
    canonical: 'https://saimekb.com/vn/food',
    alternateEn: 'https://saimekb.com/food',
    alternateVi: 'https://saimekb.com/vn/food',
    h1: 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An',
  },
  {
    path: '/vn/cocktails',
    lang: 'vi',
    title: '12 Cocktail Đặc Sản Ba Miền | Saime Hội An',
    description: 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.',
    canonical: 'https://saimekb.com/vn/cocktails',
    alternateEn: 'https://saimekb.com/cocktails',
    alternateVi: 'https://saimekb.com/vn/cocktails',
    h1: '12 Ly Cocktail Đặc Sản Ba Miền Độc Bản',
  },
  {
    path: '/vn/cocktail',
    lang: 'vi',
    title: '12 Cocktail Đặc Sản Ba Miền | Saime Hội An',
    description: 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.',
    canonical: 'https://saimekb.com/vn/cocktails',
    alternateEn: 'https://saimekb.com/cocktails',
    alternateVi: 'https://saimekb.com/vn/cocktails',
    h1: '12 Ly Cocktail Đặc Sản Ba Miền Độc Bản',
  },
  {
    path: '/vn/articles',
    lang: 'vi',
    title: 'Cẩm Nang Ẩm Thực & Quán Bar Hội An | Saime Introverts',
    description: 'Cẩm nang nhà hàng fine dining và quán cocktail bar chọn lọc tại Hội An cùng góc nhìn ẩm thực tuổi thơ đương đại độc bản.',
    canonical: 'https://saimekb.com/vn/articles',
    alternateEn: 'https://saimekb.com/articles',
    alternateVi: 'https://saimekb.com/vn/articles',
    h1: 'Cẩm Nang Ẩm Thực & Quán Bar Hội An | Saime Introverts',
  },
  {
    path: '/vn/articles/top-8-fine-dining-fusion-hoi-an',
    lang: 'vi',
    title: 'Top 8 Nhà Hàng Fine Dining & Fusion Tại Hội An | Saime',
    description: 'Cẩm nang 8 nhà hàng fine dining và ẩm thực fusion sáng tạo không thể bỏ lỡ tại Hội An, với điểm nhấn Saime Introverts, Mùa, Mango Rooms.',
    canonical: 'https://saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    alternateEn: 'https://saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    alternateVi: 'https://saimekb.com/vn/articles/top-8-fine-dining-fusion-hoi-an',
    h1: 'Top 8 Nhà Hàng Fine Dining & Fusion Nhất Định Phải Thử Tại Hội An',
  },
  {
    path: '/vn/articles/5-must-try-cocktail-bars-hoi-an',
    lang: 'vi',
    title: 'Top 5 Quán Cocktail Bar Phải Thử Tại Hội An | Saime',
    description: 'Danh sách 5 quán cocktail bar đặc sắc nhất tại Hội An cho trải nghiệm đêm đáng nhớ, dẫn đầu bởi Saime Introverts kể chuyện tuổi thơ Việt.',
    canonical: 'https://saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    alternateEn: 'https://saimekb.com/articles/5-must-try-cocktail-bars-hoi-an',
    alternateVi: 'https://saimekb.com/vn/articles/5-must-try-cocktail-bars-hoi-an',
    h1: 'Top 5 Quán Cocktail Bar Nhất Định Phải Thử Tại Hội An',
  },
];

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

    // Replace HTML lang attribute
    html = html.replace(/<html\s+lang=".*?"/, `<html lang="${route.lang}"`);

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Replace OpenGraph Title & Description & URL
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

    // Replace Twitter Title & Description
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // Replace H1 in pre-rendered markup
    html = html.replace(/<h1[^>]*>.*?<\/h1>/, `<h1>${route.h1}</h1>`);

    // Add hreflang links before </head> if not already present
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
