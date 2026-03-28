import { useScrollReveal } from '@/hooks/useScrollReveal';
import ResponsiveImage from '@/components/ResponsiveImage';
import { serviceMedia } from '@/data/media';
import SectionHeading from './SectionHeading';
import { ArrowRight, ArrowDownToLine, Car, Package, Flower2, Tent, Church, Shovel, Plane, FileText } from 'lucide-react';

const hearseTransportationImg = 'https://www.dropbox.com/scl/fi/v5cx11kqfts198pl10fc9/fleet.jpeg?rlkey=bjc2ecr63mhzdr54zd5pzf0w3&raw=1';
const tentSetupImg = 'https://www.dropbox.com/scl/fi/eno5rin70gowt8m4hhbfk/tents.jpeg?rlkey=1gturrzq6bakrmiqetd6z58un&raw=1';
const memorialServiceSetupImg = 'https://www.dropbox.com/scl/fi/vv1tqhxjzd1rznuly36s1/mss.jpeg?rlkey=7g74wjg4j8z9q6q2qadeqohz3&raw=1';
const burialProcessCoordinationImg = 'https://www.dropbox.com/scl/fi/b7xmhfot4d9y1kpryij8k/cod.jpeg?rlkey=btl87dw6mtmy9nnqj4bgxej8z&raw=1';
const casketLoweringDeviceImg = 'https://www.finero.eu/wp-content/uploads/2018/11/winda_pogrzebowa_frigid_zestaw_1200.jpg';
const repatriationImg = 'https://www.dropbox.com/scl/fi/3mrrudnkzhyzm8vhibdlx/repatriation.jpeg?rlkey=8gcgapkfnam9awf0as7u78u9e&raw=1';

const services = [
  { icon: Car, title: 'Hearse Transportation', desc: 'Premium fleet of luxury hearses providing dignified transportation with professional chauffeurs.', media: { fallback: hearseTransportationImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Package, title: 'Casket & Coffin Selection', desc: 'Curated collection of premium caskets and coffins in various styles, materials, and finishes.', media: serviceMedia.casket, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Flower2, title: 'Floral Arrangements', desc: 'Bespoke funeral floral tributes designed to honor and celebrate the life of your loved one.', media: serviceMedia.floral, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Tent, title: 'Tent & Chair Setup', desc: 'Elegant outdoor ceremony setups with premium tenting, seating, and decor for graveside services.', media: { fallback: tentSetupImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Church, title: 'Memorial Service Setup', desc: 'Beautiful memorial settings with candles, tributes, photo displays, and dignified ambiance.', media: { fallback: memorialServiceSetupImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Shovel, title: 'Burial Process Coordination', desc: 'Seamless coordination of burial proceedings with cemetery liaisons and all required logistics.', media: { fallback: burialProcessCoordinationImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: ArrowDownToLine, title: 'Casket Lowering Device', desc: 'Professional graveside casket lowering equipment for a smooth, dignified, and secure final committal service.', media: { fallback: casketLoweringDeviceImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: Plane, title: 'Repatriation Assistance', desc: 'International and domestic transportation of remains with full documentation and compliance support.', media: { fallback: repatriationImg }, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
  { icon: FileText, title: 'Custom Tribute Programs', desc: 'Professionally designed tribute programs, memorial booklets, and ceremony stationery.', media: serviceMedia.tributePrograms, sizes: '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding-lg bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Funeral Care"
          subtitle="Every aspect of the farewell journey, handled with expertise, compassion, and an unwavering commitment to excellence."
        />

        <div ref={ref} className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, media, sizes }, i) => (
            <div
              key={title}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ResponsiveImage
                  alt={title}
                  avif={media.avif}
                  webp={media.webp}
                  fallback={media.fallback}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={sizes}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 border border-primary/30 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Icon size={18} className="text-gold" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-gold hover:text-foreground transition-colors group/link">
                  Learn More
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
