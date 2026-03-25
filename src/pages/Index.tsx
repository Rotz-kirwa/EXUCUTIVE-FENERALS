import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HeroHighlightsSection from '@/components/HeroHighlightsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import GallerySection from '@/components/GallerySection';
import MarketplaceSection from '@/components/MarketplaceSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

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
    <div className="content-auto">
      <GallerySection />
    </div>
    <div className="content-auto">
      <MarketplaceSection />
    </div>
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
