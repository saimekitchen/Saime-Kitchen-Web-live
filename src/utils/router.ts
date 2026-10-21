import { ActivePage, Language } from '../types';
import { findArticleBySlug } from '../data/articlesData';

export interface RouteState {
  page: ActivePage;
  articleSlug: string | null;
  pathname: string;
}

/**
 * Parse the current browser pathname into route state
 */
export function parseRoute(rawPath: string): RouteState {
  const path = rawPath.trim() || '/';
  const cleanPath = path.split('?')[0].split('#')[0];

  // Specific article route: /articles/:slug
  if (cleanPath.startsWith('/articles/') && cleanPath.length > '/articles/'.length) {
    const slug = cleanPath.replace(/^\/articles\//, '').split('/')[0];
    return {
      page: 'articles',
      articleSlug: decodeURIComponent(slug),
      pathname: cleanPath,
    };
  }

  // Articles list page: /articles
  if (cleanPath === '/articles' || cleanPath === '/articles/') {
    return {
      page: 'articles',
      articleSlug: null,
      pathname: '/articles',
    };
  }

  // Cocktail menu page: /cocktail, /cocktails, /drinks
  if (
    cleanPath === '/cocktail' ||
    cleanPath === '/cocktail/' ||
    cleanPath === '/cocktails' ||
    cleanPath === '/cocktails/' ||
    cleanPath === '/drinks'
  ) {
    return {
      page: 'cocktail',
      articleSlug: null,
      pathname: '/cocktails',
    };
  }

  // Food menu page (default): / or /food
  return {
    page: 'food',
    articleSlug: null,
    pathname: cleanPath === '/' ? '/food' : cleanPath,
  };
}

// Custom event name for client-side navigation
export const NAVIGATION_EVENT = 'saime_navigation_change';

/**
 * Programmatically navigate to a path and trigger router re-renders
 */
export function navigateTo(targetPath: string, options: { replace?: boolean; scroll?: boolean } = {}): void {
  if (typeof window === 'undefined') return;

  const currentPathWithSearch = window.location.pathname + window.location.search + window.location.hash;
  const isDifferent = currentPathWithSearch !== targetPath;

  if (isDifferent) {
    if (options.replace) {
      window.history.replaceState({}, '', targetPath);
    } else {
      window.history.pushState({}, '', targetPath);
    }
  }

  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dispatch custom event to notify React listeners
  window.dispatchEvent(new CustomEvent(NAVIGATION_EVENT, { detail: { path: targetPath } }));

  // Track Google Analytics page_view
  trackPageView(targetPath);
}

/**
 * Send page_view event to Google Analytics (gtag.js)
 */
export function trackPageView(pagePath: string): void {
  if (typeof window === 'undefined') return;
  const win = window as any;
  if (typeof win.gtag === 'function') {
    win.gtag('config', 'G-2HG3B01E8W', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

/**
 * Dynamically update page title, description, and canonical link
 */
export function updateRouteMetadata(route: RouteState, lang: Language): void {
  if (typeof document === 'undefined') return;
  const isVi = lang === 'vi';

  let title = 'Saime Introverts | Fusion Dining & Cocktails in Hoi An';
  let description =
    'Experience modern Vietnamese fusion dining and craft cocktails in Hoi An. Reimagined childhood flavors and liquid mixology at 144 Ly Thai To.';
  let ogImage = 'https://i.imgur.com/IO2U2B9.jpeg';

  if (route.page === 'food') {
    title = isVi
      ? 'Thực Đơn Món Ăn Fusion Tuổi Thơ | Saime Hội An'
      : 'Food Lab Menu | Saime Introverts Fusion Hoi An';
    description = isVi
      ? 'Khám phá thực đơn món ăn fusion tuổi thơ tại Saime Introverts Hội An. Hương vị hoài niệm được chế tác tinh tế tại 144 Lý Thái Tổ.'
      : 'Modern Vietnamese childhood fusion menu at Saime Introverts Hoi An. Inventive culinary balance and nostalgic comfort food at 144 Ly Thai To.';
  } else if (route.page === 'cocktail') {
    title = isVi
      ? '12 Cocktail Đặc Sản Ba Miền | Saime Hội An'
      : 'Craft Cocktails & Mixology | Saime Introverts';
    description = isVi
      ? 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.'
      : 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.';
  } else if (route.page === 'articles') {
    if (route.articleSlug) {
      const article = findArticleBySlug(route.articleSlug);
      if (article) {
        title = isVi
          ? `${article.titleVi.slice(0, 42)} | Saime`
          : `${article.title.slice(0, 42)} | Saime`;
        description = isVi ? article.shortDescriptionVi : article.shortDescription;
        if (description.length > 155) {
          description = description.slice(0, 152) + '...';
        }
        if (article.coverImage) {
          ogImage = article.coverImage;
        }
      } else {
        title = isVi ? 'Bài Viết & Cẩm Nang | Saime Hội An' : 'Articles & Guides | Saime Introverts';
      }
    } else {
      title = isVi
        ? 'Cẩm Nang Ẩm Thực & Bài Viết | Saime Hội An'
        : 'Stories & Culinary Guides | Saime Introverts';
      description = isVi
        ? 'Cẩm nang nhà hàng fine dining và fusion dining chọn lọc tại Hội An cùng góc nhìn ẩm thực tuổi thơ đương đại độc bản.'
        : 'Curated guides to fine dining and modern fusion in Hoi An. Discover iconic culinary memories, childhood flavors, and authentic dining spots.';
    }
  }

  // Update DOM Title
  document.title = title;

  // Helper for meta tags
  const setMeta = (selector: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (el) {
      el.setAttribute('content', content);
    }
  };

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[property="og:image"]', ogImage);
  setMeta('meta[name="twitter:image"]', ogImage);

  // Update canonical
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (canonicalEl) {
    const origin = (typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost') && !window.location.origin.includes('run.app'))
      ? window.location.origin
      : 'https://saimekb.com';
    canonicalEl.setAttribute('href', `${origin}${route.pathname}`);
  }
}
