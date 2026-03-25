import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
    <AboutSection />
    <ServicesSection />
    <WhyChooseSection />
    <GallerySection />
    <MarketplaceSection />
    <PackagesSection />
    <TestimonialsSection />
    <ProcessSection />
    <ContactSection />
    <FooterSection />
    <WhatsAppFloat />
  </div>
);

export default Index;
