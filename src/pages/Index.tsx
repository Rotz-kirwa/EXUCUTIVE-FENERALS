import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroHighlightsSection from '@/components/HeroHighlightsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import DeferredSection from '@/components/DeferredSection';
import SectionSkeleton from '@/components/SectionSkeleton';
import PageMetadata from '@/components/PageMetadata';
import { homePageMetadata } from '@/lib/siteMetadata';

const GallerySection = lazy(() => import('@/components/GallerySection'));
const MarketplaceSection = lazy(() => import('@/components/MarketplaceSection'));

const Index = () => (
  <div className="overflow-x-hidden">
    <PageMetadata metadata={homePageMetadata} />
    <Navbar />
    <HeroSection />
    <HeroHighlightsSection />
    <div className="content-auto">
      <AboutSection />
    </div>
    <div className="content-auto">
      <ServicesSection />
    </div>
    <div className="content-auto">
      <WhyChooseSection />
    </div>
    <DeferredSection fallback={<SectionSkeleton sectionId="gallery" title="Gallery" cardCount={4} />}>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton sectionId="gallery" title="Gallery" cardCount={4} />}>
          <GallerySection sectionId="gallery" />
        </Suspense>
      </div>
    </DeferredSection>
    <DeferredSection fallback={<SectionSkeleton sectionId="marketplace" title="Marketplace" cardCount={3} />}>
      <div className="content-auto">
        <Suspense fallback={<SectionSkeleton sectionId="marketplace" title="Marketplace" cardCount={3} />}>
          <MarketplaceSection sectionId="marketplace" />
        </Suspense>
      </div>
    </DeferredSection>
    <div className="content-auto">
      <PackagesSection />
    </div>
    <div className="content-auto">
      <TestimonialsSection />
    </div>
    <div className="content-auto">
      <ProcessSection />
    </div>
    <div className="content-auto">
      <ContactSection />
    </div>
    <div className="content-auto">
      <FooterSection />
    </div>
    <WhatsAppFloat />
  </div>
);

export default Index;
