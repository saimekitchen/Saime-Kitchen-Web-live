import fs from 'fs';
import path from 'path';

interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
}

const routes: RouteMetadata[] = [
  {
    path: '/food',
    title: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
    description: 'Modern Vietnamese childhood fusion menu at Saime Introverts Hoi An. Inventive culinary balance and nostalgic comfort food at 144 Ly Thai To.',
    canonical: 'https://saimekb.com/food',
    h1: 'Food Lab Menu | Saime Introverts Fusion Hoi An',
  },
  {
    path: '/cocktails',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://saimekb.com/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/cocktail',
    title: 'Craft Cocktails & Mixology | Saime Introverts',
    description: 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.',
    canonical: 'https://saimekb.com/cocktails',
    h1: '12 Signature Regional Cocktails & Mixology',
  },
  {
    path: '/articles',
    title: 'Stories & Culinary Guides | Saime Introverts',
    description: 'Curated guides to fine dining and modern fusion in Hoi An. Discover iconic culinary memories, childhood flavors, and authentic dining spots.',
    canonical: 'https://saimekb.com/articles',
    h1: 'Stories & Culinary Guides | Saime Introverts',
  },
  {
    path: '/articles/top-8-fine-dining-fusion-hoi-an',
    title: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An | Saime',
    description: 'Curated guide to the top 8 fine dining and fusion restaurants in Hoi An you must try, featuring Saime Introverts, Mùa, Mango Rooms, and more.',
    canonical: 'https://saimekb.com/articles/top-8-fine-dining-fusion-hoi-an',
    h1: 'Top 8 Fine Dining & Fusion Restaurants in Hoi An You Must Try',
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

    const outPath = path.resolve(targetDir, 'index.html');
    fs.writeFileSync(outPath, html, 'utf8');
    console.log(`[Prerender] Generated static route: ${route.path} -> ${outPath}`);
  }

  console.log('[Prerender] All routes successfully pre-rendered into dist/');
}

prerender();
