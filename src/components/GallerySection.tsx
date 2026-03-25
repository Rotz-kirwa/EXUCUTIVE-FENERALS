import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

import heroImg from '@/assets/hero-funeral.webp';
import casketImg from '@/assets/service-casket.webp';
import floralImg from '@/assets/service-floral.webp';
import tentImg from '@/assets/service-tent.webp';

const gallery = [
  { img: heroImg, alt: 'Premium memorial service', span: 'col-span-2 row-span-2' },
  { img: floralImg, alt: 'Floral arrangements', span: '' },
  { img: casketImg, alt: 'Premium casket display', span: 'col-span-2' },
  { img: tentImg, alt: 'Ceremony tent setup', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/eetq758qz7inxtsobrfza/lim.jpg?rlkey=fh0gl4gytvfnjheuwlc6sd0pv&st=qqlcme3f&raw=1', alt: 'Executive Funerals gallery image 1', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/ub7lxse4s65py5x6m4wxt/gen.jpg?rlkey=kls7twnwvbkoehgh4urzhw2dq&st=il61irjs&raw=1', alt: 'Executive Funerals gallery image 2', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/l5hnw5das8m2ofavk5hx9/ex.jpg?rlkey=p38nhoyzeqfnmydxdl1e0ao1z&st=mnl5b7es&raw=1', alt: 'Executive Funerals gallery image 3', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/8k50poywd03kovee384a2/lg.jpg?rlkey=r4b3ynpmewz61sghyo75z9597&st=re1yfe4w&raw=1', alt: 'Executive Funerals gallery image 4', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/x96py1fj6668gu5lfb1ai/xt.jpg?rlkey=jzxsa04e7oyw8cx357qnm48b9&st=uzuhfv6s&raw=1', alt: 'Executive Funerals gallery image 6', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/7idyst27g0xgqtroos721/gt.jpg?rlkey=7dmlapatyufe1hzil45z6tuj5&st=wptzjsnp&raw=1', alt: 'Executive Funerals gallery image 7', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/7ukngyzixsq53gi7l6c3a/fd.jpg?rlkey=t0ffjkfe7tgudeqqdjdt3sph5&st=bx2tbtrv&raw=1', alt: 'Executive Funerals gallery image 8', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/2g2lvza5hw5xinasy7y30/ka.jpg?rlkey=sb90g9ba3mthx4kdckujesrus&st=r748wqym&raw=1', alt: 'Executive Funerals gallery image 9', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/f3818028asnn6ybyp51ub/ap.jpg?rlkey=z25iugcxujl9i1jo15mw40nun&st=kzg7tfjt&raw=1', alt: 'Executive Funerals gallery image 10', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/lq7x3sla1h6es4ub8wk13/kps.jpg?rlkey=kr8gkqo5hysf7e5sygrkeskk7&st=lpdyrbrh&raw=1', alt: 'Executive Funerals gallery image 11', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/rcpvy7trum44gg2bsy0dd/cf.jpg?rlkey=uvkbkon2rphuh04opgr8zrf37&st=dwrx0c1g&raw=1', alt: 'Executive Funerals gallery image 12', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/v0nf03nx61uvomd4wsbpq/kcm.jpg?rlkey=b4nvt57v2icufyefheka1vpdj&st=sozlij9u&raw=1', alt: 'Executive Funerals gallery image 13', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/b5p1jaee7xttya2kwmobc/ps.jpg?rlkey=gxkprbzk7mqq2i3gv928t5lnt&st=1hya3t6u&raw=1', alt: 'Executive Funerals gallery image 14', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/dadb8gmfcdjct4d56f35f/no.jpg?rlkey=tyh01s4pj5phzvxo6roe1gdnb&st=b546ptca&raw=1', alt: 'Executive Funerals gallery image 15', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/ijkav63yyzs9czlt2s7jr/rd.jpg?rlkey=4wb33ua85psso3oosnvy6t7x9&st=cm9wci8b&raw=1', alt: 'Executive Funerals gallery image 16', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/951mvzvc4aami4jp396ce/cv.jpg?rlkey=byy86ubo4aatpmg1oxqiv4wh8&st=gsr48ie2&raw=1', alt: 'Executive Funerals gallery image 17', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/bde6um3p0wvxqy9s5ttfc/e9.jpg?rlkey=6mwulmvh1ciaj4pjb8zmec39p&st=atlomnfk&raw=1', alt: 'Executive Funerals gallery image 18', span: 'md:col-span-2' },
  { img: 'https://www.dropbox.com/scl/fi/9pxuzioa3sxo2nb58s3i8/cr.jpg?rlkey=oxjza2a7x2x2x5753yv25txxm&st=ul1zi7vw&raw=1', alt: 'Executive Funerals gallery image 19', span: '' },
  { img: 'https://www.dropbox.com/scl/fi/1idp7sk3lbk1wrx8curva/lm.jpg?rlkey=l7kyn69d04qkz6p3dhz6gzmtn&st=571ahokt&raw=1', alt: 'Executive Funerals gallery image 20', span: '' },
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
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
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
