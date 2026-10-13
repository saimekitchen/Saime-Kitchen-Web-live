import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { ARTICLES_DATA, RestaurantReview } from '../data/articlesData';

interface ArticlesPageProps {
  currentLang: Language;
  onSwitchToFoodPage: () => void;
  onSwitchToCocktailPage: () => void;
  onOpenReservation: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  currentLang,
  onSwitchToFoodPage,
  onSwitchToCocktailPage,
  onOpenReservation,
}) => {
  const isVi = currentLang === 'vi';
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedArticle = ARTICLES_DATA.find((a) => a.id === selectedArticleId) || null;

  const handleOpenArticle = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Ignore clipboard error
    }
  };

  // =========================================================================
  // 1. ARTICLE DETAIL VIEW - CONTINUOUS EDITORIAL PROSE (WITH FEATURE IMAGES)
  // =========================================================================
  if (selectedArticle) {
    const title = isVi ? selectedArticle.titleVi : selectedArticle.title;
    const category = isVi ? selectedArticle.categoryVi : selectedArticle.category;
    const date = isVi ? selectedArticle.dateVi : selectedArticle.date;
    const readTime = isVi ? selectedArticle.readTimeVi : selectedArticle.readTime;

    return (
      <article
        className="w-full text-[#e2e4e8] min-h-screen pb-24 animate-in fade-in duration-200 font-sans"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Top Back Navigation Bar */}
        <div className="w-full border-b border-white/10 bg-[#0e0f13]/90 backdrop-blur-md sticky top-16 z-30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
              id="back-to-articles-list-top"
            >
              <ArrowLeft className="w-4 h-4 text-[#e63946]" />
              <span>{isVi ? 'Tất cả bài viết' : 'All Articles'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white/70 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{isVi ? 'Đã sao chép' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Chia sẻ' : 'Share'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Clean, Continuous Reading Canvas */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-8 sm:space-y-10">
          {/* Article Header */}
          <header className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-white/50 uppercase tracking-wider">
              <span className="text-[#e63946] font-bold">{category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            </div>

            <h1
              itemProp="headline"
              className="font-display font-dm-sans text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.25]"
            >
              {title}
            </h1>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/50">
              <span>{isVi ? 'Bài viết bởi' : 'By'} <strong className="text-white/80">{selectedArticle.author}</strong></span>
              <span>•</span>
              <span>Saime Hoi An</span>
            </div>
          </header>

          {/* Article Body: Continuous Prose with Feature Images */}
          {selectedArticle.restaurantsData && (
            <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[17px] text-white/85 leading-[1.8] font-normal">
              {/* Introduction Paragraphs */}
              <div className="space-y-5">
                <p>
                  {isVi
                    ? 'Hội An không chỉ nổi tiếng với những con phố cổ vàng rực đèn lồng hay di sản văn hóa lâu đời, mà còn là điểm đến ẩm thực hấp dẫn với hàng loạt nhà hàng sang trọng và sáng tạo. Từ không gian fine dining Pháp cổ điển đến những nhà hàng fusion biến tấu món ăn địa phương, mảnh đất này luôn biết cách chiều lòng những thực khách khó tính.'
                    : 'Hoi An is not only celebrated for its lantern-lit yellow alleyways and rich UNESCO heritage, but also for its rapidly evolving culinary scene. From heritage fine dining housed in French colonial villas to inventive fusion venues rethinking local street food, the city offers extraordinary dining experiences for food lovers.'}
                </p>
                <p>
                  {isVi
                    ? 'Nếu bạn đang tìm kiếm những trải nghiệm fine dining Hoi An hay fusion dining Hoi An xuất sắc nhất, dưới đây là danh sách 8 nhà hàng không thể bỏ qua.'
                    : 'If you are looking for the absolute best fine dining Hoi An or fusion dining Hoi An options, here is our curated guide to the top 8 restaurants in Hoi An you simply cannot miss.'}
                </p>
              </div>

              {/* Continuous List of 8 Restaurants */}
              {selectedArticle.restaurantsData.map((restaurant: RestaurantReview) => {
                const restaurantName = isVi ? restaurant.nameVi : restaurant.name;
                const tagline = isVi ? restaurant.taglineVi : restaurant.tagline;
                const location = isVi ? restaurant.locationVi : restaurant.location;
                const openingHours = isVi ? restaurant.openingHoursVi : restaurant.openingHours;
                const cuisine = isVi ? restaurant.cuisineVi : restaurant.cuisine;
                const priceRange = isVi ? restaurant.priceRangeVi : restaurant.priceRange;
                const atmosphere = isVi ? restaurant.atmosphereVi : restaurant.atmosphere;
                const paragraphs = isVi ? restaurant.paragraphsVi : restaurant.paragraphs;
                const imageCaption = isVi ? restaurant.imageCaptionVi : restaurant.imageCaption;

                return (
                  <section
                    key={restaurant.id}
                    id={restaurant.id}
                    className="pt-8 sm:pt-10 border-t border-white/10 space-y-4 scroll-mt-28"
                  >
                    {/* Continuous Heading */}
                    <h2 className="font-display font-dm-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {restaurant.rank}. {restaurantName} – {tagline}
                    </h2>

                    {/* Feature Image shown right after the place title */}
                    {restaurant.image && (
                      <figure className="my-5 overflow-hidden rounded-xl border border-white/10 bg-[#15161b]">
                        <img
                          src={restaurant.image}
                          alt={`${restaurantName} - ${tagline}`}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover"
                          loading="lazy"
                        />
                        {imageCaption && (
                          <figcaption className="px-4 py-2 text-xs text-white/50 italic bg-black/40 border-t border-white/5">
                            {imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Simple metadata lines directly in prose */}
                    <div className="text-xs sm:text-sm text-white/70 space-y-1 py-1">
                      <p>
                        <strong className="text-white/90">{isVi ? 'Địa chỉ:' : 'Location:'}</strong> {location}
                      </p>
                      <p>
                        <strong className="text-white/90">{isVi ? 'Giờ mở cửa:' : 'Opening Hours:'}</strong> {openingHours}
                      </p>
                      <p>
                        <strong className="text-white/90">{isVi ? 'Loại hình ẩm thực:' : 'Cuisine:'}</strong> {cuisine}
                      </p>
                      <p>
                        <strong className="text-white/90">{isVi ? 'Mức giá:' : 'Price Range:'}</strong> {priceRange}
                      </p>
                      {atmosphere && (
                        <p>
                          <strong className="text-white/90">{isVi ? 'Không gian:' : 'Atmosphere:'}</strong> {atmosphere}
                        </p>
                      )}
                    </div>

                    {/* Continuous Body Paragraphs */}
                    <div className="space-y-4 pt-1">
                      {paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Contextual link for Saime */}
                    {restaurant.isSaime && (
                      <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                        <button
                          onClick={onOpenReservation}
                          className="text-[#e63946] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isVi ? '→ Đặt bàn tại Saime Introverts' : '→ Reserve a table at Saime'}</span>
                        </button>
                        <span className="text-white/30">•</span>
                        <button
                          onClick={onSwitchToFoodPage}
                          className="text-white/70 hover:text-white hover:underline cursor-pointer"
                        >
                          {isVi ? 'Xem thực đơn món ăn' : 'View food menu'}
                        </button>
                        <span className="text-white/30">•</span>
                        <button
                          onClick={onSwitchToCocktailPage}
                          className="text-white/70 hover:text-white hover:underline cursor-pointer"
                        >
                          {isVi ? 'Xem 12 cocktail đặc sản' : 'View 12 signature cocktails'}
                        </button>
                      </div>
                    )}
                  </section>
                );
              })}

              {/* Conclusion Section */}
              {selectedArticle.conclusion && (
                <section className="pt-8 sm:pt-10 border-t border-white/10 space-y-4">
                  <h2 className="font-display font-dm-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {isVi ? selectedArticle.conclusion.titleVi : selectedArticle.conclusion.title}
                  </h2>
                  <p>
                    {isVi ? selectedArticle.conclusion.textVi : selectedArticle.conclusion.text}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenReservation}
                      className="px-5 py-2.5 rounded-full bg-[#e63946] hover:bg-[#d62839] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e63946]/30 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{isVi ? 'Đặt Bàn Trực Tuyến' : 'Reserve Table Online'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </section>
              )}

              {/* Back to all articles bottom anchor */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-[#e63946]" />
                  <span>{isVi ? '← Trở về danh sách bài viết' : '← Back to all articles'}</span>
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  {isVi ? 'Lên đầu trang ↑' : 'Back to top ↑'}
                </button>
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }

  // =========================================================================
  // 2. ARTICLES FEED / NEWS LIST VIEW (ONLY KEEPS TOP 8 DINING GUIDE)
  // =========================================================================
  return (
    <div className="w-full text-[#e2e4e8] min-h-screen pb-24 animate-in fade-in duration-300">
      {/* Editorial Header */}
      <header className="relative pt-12 pb-10 px-4 sm:px-6 text-center max-w-4xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-white/70">
          <BookOpen className="w-3.5 h-3.5 text-[#e63946]" />
          <span>{isVi ? 'Góc Báo Chí & Ẩm Thực' : 'Stories & Culinary Press'}</span>
        </div>

        <h1 className="font-display font-dm-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {isVi ? 'Bài Viết & Cẩm Nang' : 'Articles & Guides'}
        </h1>

        <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
          {isVi
            ? 'Khám phá văn hóa ẩm thực Hội An, triết lý hương vị tuổi thơ và những cẩm nang ẩm thực chọn lọc.'
            : 'Explore Hoi An culinary culture, childhood gastronomic memories, and curated dining guides.'}
        </p>
      </header>

      {/* Articles List / Grid */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {ARTICLES_DATA.map((article) => {
            const title = isVi ? article.titleVi : article.title;
            const category = isVi ? article.categoryVi : article.category;
            const date = isVi ? article.dateVi : article.date;
            const readTime = isVi ? article.readTimeVi : article.readTime;
            const shortDesc = isVi ? article.shortDescriptionVi : article.shortDescription;

            return (
              <article
                key={article.id}
                onClick={() => handleOpenArticle(article.id)}
                className="group rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#e63946] bg-[#17181f] border-[#e63946]/40 shadow-xl shadow-black/40"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
                  {/* Thumbnail */}
                  <div className="md:col-span-5 h-56 sm:h-64 rounded-xl overflow-hidden relative border border-white/10">
                    <img
                      src={article.coverImage}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#e63946] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        {isVi ? article.badgeVi || category : article.badge || category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata and Prose summary */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <span className="font-bold text-[#e63946] uppercase text-[11px]">{category}</span>
                        <span>•</span>
                        <span>{date}</span>
                        <span>•</span>
                        <span>{readTime}</span>
                      </div>

                      <h2
                        className="font-display font-dm-sans font-extrabold text-white group-hover:text-[#e63946] transition-colors leading-snug text-xl sm:text-2xl"
                      >
                        {title}
                      </h2>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                        {shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-white/40">{article.author}</span>
                      <span className="text-[#e63946] font-bold inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        <span>{isVi ? 'Đọc toàn bộ bài viết' : 'Read Full Guide'}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};
