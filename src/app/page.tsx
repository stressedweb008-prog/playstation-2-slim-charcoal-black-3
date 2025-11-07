import HeaderNavigation from '@/components/sections/header-navigation';
import BreadcrumbNavigation from '@/components/sections/breadcrumb-navigation';
import ProductGallery from '@/components/sections/product-gallery';
import ProductTitlePrice from '@/components/sections/product-title-price';
import ProductColorSelector from '@/components/sections/product-color-selector';
import ProductKeyFeatures from '@/components/sections/product-key-features';
import ProductAdditionalThumbnails from '@/components/sections/product-additional-thumbnails';
import ProductSellerInfo from '@/components/sections/product-seller-info';
import ProductPurchaseBox from '@/components/sections/product-purchase-box';
import ProductOtherOptions from '@/components/sections/product-other-options';
import ProductPaymentMethods from '@/components/sections/product-payment-methods';
import QuestionsAnswers from '@/components/sections/questions-answers';
import ProductReviewsSummary from '@/components/sections/product-reviews-summary';
import ProductReviewsPhotos from '@/components/sections/product-reviews-photos';
import ProductReviewsHighlighted from '@/components/sections/product-reviews-highlighted';
import ProductDescription from '@/components/sections/product-description';
import ProductSpecifications from '@/components/sections/product-specifications';
import GamingHighlights from '@/components/sections/gaming-highlights';
import RelatedSearches from '@/components/sections/related-searches';
import AlphabeticalSearch from '@/components/sections/alphabetical-search';
import Footer from '@/components/sections/footer';
import CookieConsentBanner from '@/components/sections/cookie-consent-banner';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-secondary">
      <HeaderNavigation />
      
      <main className="flex-grow pb-20 lg:pb-0">
        <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <BreadcrumbNavigation />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6">
            <div className="lg:col-span-8">
              {/* Title, badges and rating BEFORE gallery */}
              <div className="mb-3 sm:mb-4">
                <ProductTitlePrice showPriceSection={false} />
              </div>
              
              <div className="flex gap-2 sm:gap-4 mb-3 sm:mb-6">
                <div className="hidden lg:block flex-shrink-0">
                  <ProductAdditionalThumbnails />
                </div>
                <div className="flex-grow">
                  <ProductGallery />
                </div>
              </div>
              
              {/* Price AFTER gallery */}
              <div className="mb-3 sm:mb-4">
                <ProductTitlePrice showTitleSection={false} />
              </div>
              
              <div className="bg-white rounded-md p-3 sm:p-6 shadow-sm mb-3 sm:mb-6">
                <ProductColorSelector />
                <ProductKeyFeatures />
              </div>
              
              <ProductSellerInfo />
              
              <QuestionsAnswers />
              
              <div className="mt-4 sm:mt-8">
                <ProductReviewsSummary />
                <ProductReviewsPhotos />
                <div className="mt-4 sm:mt-8 bg-white rounded-md p-3 sm:p-6 shadow-sm">
                  <ProductReviewsHighlighted />
                </div>
              </div>
              
              <div className="mt-4 sm:mt-8">
                <ProductDescription />
              </div>
              
              <div className="mt-4 sm:mt-8">
                <ProductSpecifications />
              </div>
              
              <GamingHighlights />
            </div>
            
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-4">
              <ProductPurchaseBox />
              <div className="mt-6">
                <ProductOtherOptions />
              </div>
              <ProductPaymentMethods />
            </aside>
          </div>
        </div>
        
        <RelatedSearches />
        <AlphabeticalSearch />
      </main>
      
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}