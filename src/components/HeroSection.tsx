import { Clock, Users, Shield, Heart } from 'lucide-react';
import heroImg from '@/assets/hero-funeral.jpg';

const heroVideoUrl = 'https://www.dropbox.com/scl/fi/ff65f0ml8z09pz0n6l7l6/full.mp4?rlkey=vlyo2rz1u8s9u5t1o8ykdr8tq&st=aqgwpb22&raw=1';
const supportPhone = '0715855360';

const trust = [
  { icon: Clock, label: '24/7 Support' },
  { icon: Users, label: 'Professional Coordination' },
  { icon: Shield, label: 'Premium Equipment' },
  { icon: Heart, label: 'Compassionate Staff' },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroImg}
        aria-hidden="true"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
      {/* Ornament */}
      <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent mx-auto" />
      </div>

      <span className="inline-block text-gold font-sans text-xs tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
        Premium Funeral Services
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
        Dignified Farewells,<br />
        <span className="gold-text-gradient font-normal">Executed With Grace</span>
      </h1>

      <p className="max-w-2xl mx-auto text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
        Executive Funerals provides compassionate, well-coordinated, and premium funeral services for families in Nairobi and across Kenya, honoring every life with dignity, beauty, and respect.
      </p>

      <div className="mb-20 opacity-0 animate-fade-up" style={{ animationDelay: '1000ms' }}>
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          <a href="#contact" className="px-4 py-3 gold-gradient text-primary-foreground font-sans text-[11px] tracking-[0.14em] uppercase text-center transition-all duration-300 active:scale-[0.97]">
            Book a Consultation
          </a>
          <a href="#services" className="px-4 py-3 border border-primary/30 text-foreground font-sans text-[11px] tracking-[0.14em] uppercase text-center hover:bg-primary/5 transition-all duration-300 active:scale-[0.97]">
            Explore Services
          </a>
          <a href={`tel:${supportPhone}`} className="col-span-2 px-4 py-3 border border-primary/30 bg-background/15 text-gold font-sans text-[11px] tracking-[0.14em] uppercase text-center backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 active:scale-[0.97]">
            24/7 Support
          </a>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-4 gold-gradient text-primary-foreground font-sans text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]">
            Book a Consultation
          </a>
          <a href="#services" className="px-8 py-4 border border-primary/30 text-foreground font-sans text-sm tracking-[0.15em] uppercase hover:bg-primary/5 transition-all duration-300 active:scale-[0.97]">
            Explore Services
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '1200ms' }}>
        {trust.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 py-4 px-3 border border-border/30 bg-background/20 backdrop-blur-sm">
            <Icon size={20} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
      <div className="w-5 h-9 border border-primary/30 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1 h-2 bg-primary/60 rounded-full animate-float" />
      </div>
    </div>
  </section>
);

export default HeroSection;
