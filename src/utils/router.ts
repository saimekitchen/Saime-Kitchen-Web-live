import { ActivePage, Language } from '../types';
import { findArticleBySlug } from '../data/articlesData';

export interface RouteState {
  page: ActivePage;
  articleSlug: string | null;
  pathname: string;
  lang: Language;
}

/**
 * Parse the current browser pathname into route state including language (/vn/ detection)
 */
export function parseRoute(rawPath: string): RouteState {
  const path = rawPath.trim() || '/';
  const cleanPath = path.split('?')[0].split('#')[0];

  const isVi = cleanPath === '/vn' || cleanPath.startsWith('/vn/');
  const lang: Language = isVi ? 'vi' : 'en';

  // Strip /vn prefix to determine sub-page
  let subPath = cleanPath;
  if (isVi) {
    subPath = cleanPath === '/vn' ? '/' : cleanPath.replace(/^\/vn/, '');
  }
  if (!subPath.startsWith('/')) {
    subPath = `/${subPath}`;
  }

  // 1. Specific article route: /articles/:slug or /vn/articles/:slug
  if (subPath.startsWith('/articles/') && subPath.length > '/articles/'.length) {
    const slug = subPath.replace(/^\/articles\//, '').split('/')[0];
    const decodedSlug = decodeURIComponent(slug);
    return {
      page: 'articles',
      articleSlug: decodedSlug,
      pathname: isVi ? `/vn/articles/${decodedSlug}` : `/articles/${decodedSlug}`,
      lang,
    };
  }

  // 2. Articles list page: /articles or /vn/articles
  if (subPath === '/articles' || subPath === '/articles/') {
    return {
      page: 'articles',
      articleSlug: null,
      pathname: isVi ? '/vn/articles' : '/articles',
      lang,
    };
  }

  // 3. Cocktail menu page: /cocktails, /cocktail, /drinks or /vn/cocktails
  if (
    subPath === '/cocktail' ||
    subPath === '/cocktail/' ||
    subPath === '/cocktails' ||
    subPath === '/cocktails/' ||
    subPath === '/drinks'
  ) {
    return {
      page: 'cocktail',
      articleSlug: null,
      pathname: isVi ? '/vn/cocktails' : '/cocktails',
      lang,
    };
  }

  // 4. Food menu page (default): /food, / or /vn/food, /vn
  return {
    page: 'food',
    articleSlug: null,
    pathname: isVi ? '/vn/food' : '/food',
    lang,
  };
}

/**
 * Get localized URL path for a given canonical route and language
 */
export function getLocalizedPath(canonicalPath: string, lang: Language): string {
  const clean = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const unlocalized = clean.startsWith('/vn/') ? clean.replace(/^\/vn/, '') : clean === '/vn' ? '/food' : clean;
  const target = unlocalized === '/' ? '/food' : unlocalized;
  return lang === 'vi' ? `/vn${target}` : target;
}

/**
 * Switch the language of the current URL while preserving the page / article slug
 */
export function switchLanguageUrl(currentPathname: string, targetLang: Language): string {
  const parsed = parseRoute(currentPathname);
  let baseCanonical = '/food';
  if (parsed.page === 'food') {
    baseCanonical = '/food';
  } else if (parsed.page === 'cocktail') {
    baseCanonical = '/cocktails';
  } else if (parsed.page === 'articles') {
    baseCanonical = parsed.articleSlug ? `/articles/${parsed.articleSlug}` : '/articles';
  }
  return getLocalizedPath(baseCanonical, targetLang);
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
 * Dynamically update page title, description, canonical link, and hreflang tags
 */
export function updateRouteMetadata(route: RouteState, lang: Language): void {
  if (typeof document === 'undefined') return;
  const isVi = lang === 'vi';

  let title = isVi
    ? 'Saime Introverts | Ẩm Thực Fusion & Cocktail Tại Hội An'
    : 'Saime Introverts | Fusion Dining & Cocktails in Hoi An';
  let description = isVi
    ? 'Trải nghiệm ẩm thực fusion tuổi thơ và cocktail đặc sản 3 miền độc bản tại Saime Introverts Hội An, 144 Lý Thái Tổ.'
    : 'Experience modern Vietnamese fusion dining and craft cocktails in Hoi An. Reimagined childhood flavors and liquid mixology at 144 Ly Thai To.';
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
      : 'Craft Cocktails & Mixology | Saime Introverts Hoi An';
    description = isVi
      ? 'Hành trình 12 ly cocktail đặc sản ba miền độc bản cùng kỹ thuật làm trong và phối trộn hương vị tại Saime Introverts Hội An.'
      : 'A sensory journey across Vietnam in 12 signature cocktails. Clarified craft cocktails and liquid chemistry at Saime Introverts Hoi An.';
  } else if (route.page === 'articles') {
    if (route.articleSlug) {
      const article = findArticleBySlug(route.articleSlug);
      if (article) {
        if (article.slug === '5-must-try-cocktail-bars-hoi-an' || article.id === '5-must-try-cocktail-bars-hoi-an') {
          title = isVi
            ? 'Top 5 Quán Cocktail Bar Phải Thử Tại Hội An | Saime'
            : '5 Must-Try Cocktail Bars in Hoi An | Saime Introverts';
          description = isVi
            ? article.shortDescriptionVi
            : article.shortDescription;
        } else {
          title = isVi
            ? 'Top 8 Nhà Hàng Fine Dining & Fusion Tại Hội An | Saime'
            : 'Top 8 Fine Dining & Fusion Restaurants in Hoi An | Saime';
          description = isVi
            ? article.shortDescriptionVi
            : article.shortDescription;
        }

        if (description.length > 155) {
          description = description.slice(0, 152) + '...';
        }
        if (article.coverImage) {
          ogImage = article.coverImage;
        }
      } else {
        title = isVi
          ? 'Bài Viết & Cẩm Nang Ẩm Thực | Saime Hội An'
          : 'Articles & Guides | Saime Introverts Hoi An';
      }
    } else {
      title = isVi
        ? 'Cẩm Nang Ẩm Thực & Quán Bar Hội An | Saime Introverts'
        : 'Stories & Culinary Guides | Saime Introverts Hoi An';
      description = isVi
        ? 'Cẩm nang nhà hàng fine dining và quán cocktail bar chọn lọc tại Hội An cùng góc nhìn ẩm thực tuổi thơ đương đại độc bản.'
        : 'Curated guides to fine dining and modern cocktail bars in Hoi An. Discover iconic culinary memories and authentic venues.';
    }
  }

  // Update DOM Title and HTML lang attribute
  document.title = title;
  document.documentElement.lang = lang;

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
  setMeta('meta[property="og:locale"]', isVi ? 'vi_VN' : 'en_US');

  // Compute canonical and hreflang URLs
  const origin = (typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost') && !window.location.origin.includes('run.app'))
    ? window.location.origin
    : 'https://saimekb.com';

  const enCanonical = `${origin}${getLocalizedPath(route.pathname, 'en')}`;
  const viCanonical = `${origin}${getLocalizedPath(route.pathname, 'vi')}`;
  const currentCanonical = isVi ? viCanonical : enCanonical;

  // Update canonical
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (canonicalEl) {
    canonicalEl.setAttribute('href', currentCanonical);
  }

  // Helper for link tags
  const setLink = (rel: string, hreflang: string, href: string) => {
    let link = document.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  };

  setLink('alternate', 'en', enCanonical);
  setLink('alternate', 'vi', viCanonical);
  setLink('alternate', 'x-default', enCanonical);
}
