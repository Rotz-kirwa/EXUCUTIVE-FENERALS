import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ResponsiveImage from '@/components/ResponsiveImage';
import { heroMedia } from '@/data/media';
import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

import casketImg from '@/assets/service-casket.webp';
import floralImg from '@/assets/service-floral.webp';
import hearseImg from '@/assets/service-hearse.webp';
import tentImg from '@/assets/service-tent.webp';
import tributeProgramsImg from '@/assets/service-tribute-programs.webp';
import casketHeritageImg from '@/assets/marketplace/casket-heritage.webp';
import floralStandingTributeImg from '@/assets/marketplace/floral-standing-tribute.webp';
import memorialTributeFrameImg from '@/assets/marketplace/memorial-tribute-frame.webp';
import transportFleetConvoyImg from '@/assets/marketplace/transport-fleet-convoy.webp';
import whiteEleganceImg from '@/assets/marketplace/floral-white-elegance.webp';

const recoveredGalleryMoments = [
  { img: 'https://www.dropbox.com/scl/fi/eetq758qz7inxtsobrfza/lim.jpg?rlkey=fh0gl4gytvfnjheuwlc6sd0pv&raw=1', alt: 'Executive Funerals gallery image 1', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/ub7lxse4s65py5x6m4wxt/gen.jpg?rlkey=kls7twnwvbkoehgh4urzhw2dq&raw=1', alt: 'Executive Funerals gallery image 2', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/l5hnw5das8m2ofavk5hx9/ex.jpg?rlkey=p38nhoyzeqfnmydxdl1e0ao1z&raw=1', alt: 'Executive Funerals gallery image 3', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/8k50poywd03kovee384a2/lg.jpg?rlkey=r4b3ynpmewz61sghyo75z9597&raw=1', alt: 'Executive Funerals gallery image 4', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/x96py1fj6668gu5lfb1ai/xt.jpg?rlkey=jzxsa04e7oyw8cx357qnm48b9&raw=1', alt: 'Executive Funerals gallery image 6', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/7idyst27g0xgqtroos721/gt.jpg?rlkey=7dmlapatyufe1hzil45z6tuj5&raw=1', alt: 'Executive Funerals gallery image 7', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/7ukngyzixsq53gi7l6c3a/fd.jpg?rlkey=t0ffjkfe7tgudeqqdjdt3sph5&raw=1', alt: 'Executive Funerals gallery image 8', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/2g2lvza5hw5xinasy7y30/ka.jpg?rlkey=sb90g9ba3mthx4kdckujesrus&raw=1', alt: 'Executive Funerals gallery image 9', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/f3818028asnn6ybyp51ub/ap.jpg?rlkey=z25iugcxujl9i1jo15mw40nun&raw=1', alt: 'Executive Funerals gallery image 10', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/lq7x3sla1h6es4ub8wk13/kps.jpg?rlkey=kr8gkqo5hysf7e5sygrkeskk7&raw=1', alt: 'Executive Funerals gallery image 11', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/rcpvy7trum44gg2bsy0dd/cf.jpg?rlkey=uvkbkon2rphuh04opgr8zrf37&raw=1', alt: 'Executive Funerals gallery image 12', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/v0nf03nx61uvomd4wsbpq/kcm.jpg?rlkey=b4nvt57v2icufyefheka1vpdj&raw=1', alt: 'Executive Funerals gallery image 13', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/b5p1jaee7xttya2kwmobc/ps.jpg?rlkey=gxkprbzk7mqq2i3gv928t5lnt&raw=1', alt: 'Executive Funerals gallery image 14', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/dadb8gmfcdjct4d56f35f/no.jpg?rlkey=tyh01s4pj5phzvxo6roe1gdnb&raw=1', alt: 'Executive Funerals gallery image 15', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/ijkav63yyzs9czlt2s7jr/rd.jpg?rlkey=4wb33ua85psso3oosnvy6t7x9&raw=1', alt: 'Executive Funerals gallery image 16', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/951mvzvc4aami4jp396ce/cv.jpg?rlkey=byy86ubo4aatpmg1oxqiv4wh8&raw=1', alt: 'Executive Funerals gallery image 17', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/bde6um3p0wvxqy9s5ttfc/e9.jpg?rlkey=6mwulmvh1ciaj4pjb8zmec39p&raw=1', alt: 'Executive Funerals gallery image 18', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/9pxuzioa3sxo2nb58s3i8/cr.jpg?rlkey=oxjza2a7x2x2x5753yv25txxm&raw=1', alt: 'Executive Funerals gallery image 19', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/1idp7sk3lbk1wrx8curva/lm.jpg?rlkey=l7kyn69d04qkz6p3dhz6gzmtn&raw=1', alt: 'Executive Funerals gallery image 20', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/0wnchpahndltn5msxbr2w/mar.jpeg?rlkey=9nrsh6mpd9xhk53acjlt2av62&raw=1', alt: 'Executive Funerals gallery image 21', span: '' },
];

const gallery = [
  { img: heroMedia.fallback, alt: 'Premium memorial service', span: 'col-span-2 row-span-2' },
  { img: floralImg, alt: 'Floral arrangements', span: '' },
  { img: casketImg, alt: 'Premium casket display', span: 'col-span-2' },
  { img: tentImg, alt: 'Ceremony tent setup', span: '' },
  { img: hearseImg, alt: 'Premium funeral hearse', span: '' },
  { img: tributeProgramsImg, alt: 'Custom tribute program design', span: '' },
  { img: casketHeritageImg, alt: 'Heritage casket presentation', span: '' },
  { img: whiteEleganceImg, alt: 'White floral tribute arrangement', span: '' },
  { img: floralStandingTributeImg, alt: 'Standing floral tribute', span: 'md:col-span-2' },
  { img: memorialTributeFrameImg, alt: 'Memorial tribute frame display', span: '' },
  { img: transportFleetConvoyImg, alt: 'Executive funeral fleet convoy', span: '' },
  ...recoveredGalleryMoments,
];

interface GallerySectionProps {
  sectionId?: string;
}

const GallerySection = ({ sectionId = 'gallery' }: GallerySectionProps) => {
  const { ref, isVisible } = useScrollReveal();
  const { galleryInitialCount, galleryStep, shouldReduceMotion } = useAdaptiveExperience();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(galleryInitialCount);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);
    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? galleryInitialCount : gallery.length);
  }, [galleryInitialCount, isMobile]);

  const visibleGallery = isMobile ? gallery.slice(0, visibleCount) : gallery;
  const hasMoreImages = isMobile && visibleCount < gallery.length;

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
