import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

import heroImg from '@/assets/hero-funeral.jpg';
import hearseImg from '@/assets/service-hearse.jpg';
import casketImg from '@/assets/service-casket.jpg';
import floralImg from '@/assets/service-floral.jpg';
import tentImg from '@/assets/service-tent.jpg';
import memorialImg from '@/assets/service-memorial.jpg';
import burialImg from '@/assets/service-burial.jpg';
import planningImg from '@/assets/service-planning.jpg';

const gallery = [
  { img: heroImg, alt: 'Premium memorial service', span: 'col-span-2 row-span-2' },
  { img: hearseImg, alt: 'Luxury hearse', span: '' },
  { img: floralImg, alt: 'Floral arrangements', span: '' },
  { img: casketImg, alt: 'Premium casket display', span: 'col-span-2' },
  { img: tentImg, alt: 'Ceremony tent setup', span: '' },
  { img: memorialImg, alt: 'Memorial tribute', span: '' },
  { img: burialImg, alt: 'Graveside arrangement', span: '' },
  { img: planningImg, alt: 'Consultation', span: '' },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding-lg bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Gallery"
          title="Moments of Grace & Beauty"
          subtitle="A glimpse into the dignified ceremonies, premium arrangements, and elegant settings we create."
        />

        <div ref={ref} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative overflow-hidden cursor-pointer group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)', transitionDelay: isVisible ? `${i * 70}ms` : '0ms' }}
              onClick={() => setLightbox(i)}
            >
              <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-[0.1em] uppercase text-foreground/90">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <img src={gallery[lightbox].img} alt={gallery[lightbox].alt} className="max-w-full max-h-[85vh] object-contain animate-scale-up" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
