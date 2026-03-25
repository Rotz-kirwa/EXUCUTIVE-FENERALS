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

const GallerySection = lazy(() => import('@/components/GallerySection'));
const MarketplaceSection = lazy(() => import('@/components/MarketplaceSection'));

const Index = () => (
  <div className="overflow-x-hidden">
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
    <DeferredSection>
      <div className="content-auto">
        <Suspense fallback={<div className="h-px" aria-hidden="true" />}>
          <GallerySection />
        </Suspense>
      </div>
    </DeferredSection>
    <DeferredSection>
      <div className="content-auto">
        <Suspense fallback={<div className="h-px" aria-hidden="true" />}>
          <MarketplaceSection />
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
