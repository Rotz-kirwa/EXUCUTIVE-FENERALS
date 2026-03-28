import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ResponsiveImage from '@/components/ResponsiveImage';
import { aboutMedia, heroMedia } from '@/data/media';
import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

import casketImg from '@/assets/service-casket.webp';
import floralImg from '@/assets/service-floral.webp';
import hearseImg from '@/assets/service-hearse.webp';
import memorialImg from '@/assets/service-memorial.webp';
import tentImg from '@/assets/service-tent.webp';
import burialImg from '@/assets/service-burial.jpg';
import tributeProgramsImg from '@/assets/service-tribute-programs.webp';
import casketHeritageImg from '@/assets/marketplace/casket-heritage.webp';
import floralStandingTributeImg from '@/assets/marketplace/floral-standing-tribute.webp';
import memorialTributeFrameImg from '@/assets/marketplace/memorial-tribute-frame.webp';
import transportFleetConvoyImg from '@/assets/marketplace/transport-fleet-convoy.webp';
import whiteEleganceImg from '@/assets/marketplace/floral-white-elegance.webp';

const gallery = [
  { img: heroMedia.fallback, alt: 'Premium memorial service', span: 'col-span-2 row-span-2' },
  { img: aboutMedia.fallback, alt: 'Executive Funerals team', span: '' },
  { img: floralImg, alt: 'Floral arrangements', span: '' },
  { img: casketImg, alt: 'Premium casket display', span: 'col-span-2' },
  { img: tentImg, alt: 'Ceremony tent setup', span: '' },
  { img: hearseImg, alt: 'Premium funeral hearse', span: '' },
  { img: memorialImg, alt: 'Memorial service decor', span: 'md:col-span-2' },
  { img: burialImg, alt: 'Burial coordination setup', span: '' },
  { img: tributeProgramsImg, alt: 'Custom tribute program design', span: '' },
  { img: casketHeritageImg, alt: 'Heritage casket presentation', span: '' },
  { img: whiteEleganceImg, alt: 'White floral tribute arrangement', span: '' },
  { img: floralStandingTributeImg, alt: 'Standing floral tribute', span: 'md:col-span-2' },
  { img: memorialTributeFrameImg, alt: 'Memorial tribute frame display', span: '' },
  { img: transportFleetConvoyImg, alt: 'Executive funeral fleet convoy', span: '' },
];

interface GallerySectionProps {
  sectionId?: string;
}

const GallerySection = ({ sectionId = 'gallery' }: GallerySectionProps) => {
  const { ref, isVisible } = useScrollReveal();
  const { galleryInitialCount, galleryStep, shouldReduceMotion } = useAdaptiveExperience();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(galleryInitialCount);

  useEffect(() => {
    setVisibleCount(galleryInitialCount);
  }, [galleryInitialCount]);

  const visibleGallery = gallery.slice(0, visibleCount);
  const hasMoreImages = visibleCount < gallery.length;

  return (
    <section id={sectionId} className="section-padding-lg bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Gallery"
          title="Moments of Grace & Beauty"
          subtitle="A glimpse into the dignified ceremonies, premium arrangements, and elegant settings we create."
        />

        <div ref={ref} className="mt-10 grid auto-rows-[148px] grid-cols-2 gap-2 sm:mt-12 sm:auto-rows-[170px] sm:gap-3 md:mt-20 md:grid-cols-4 md:auto-rows-[240px]">
          {visibleGallery.map((item, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Open gallery image: ${item.alt}`}
              className={`${item.span} relative block h-full w-full overflow-hidden cursor-pointer text-left group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)', transitionDelay: isVisible ? `${i * 70}ms` : '0ms' }}
              onClick={() => setLightbox(i)}
            >
              <ResponsiveImage
                alt={item.alt}
                fallback={item.img}
                className={`w-full h-full object-cover transition-transform duration-700 ${shouldReduceMotion ? '' : 'group-hover:scale-110'}`}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-[0.1em] uppercase text-foreground/90">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>

        {hasMoreImages && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((current) => Math.min(current + galleryStep, gallery.length))
              }
              className="px-5 py-3 border border-primary/30 text-gold font-sans text-[11px] tracking-[0.14em] uppercase transition-all duration-300 hover:bg-primary/10 active:scale-[0.97]"
            >
              Load More Moments
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button type="button" aria-label="Close gallery lightbox" className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <img src={gallery[lightbox].img} alt={gallery[lightbox].alt} className="max-w-full max-h-[85vh] object-contain animate-scale-up" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
