import { useEffect, useState } from 'react';

import ResponsiveImage from '@/components/ResponsiveImage';
import { heroMedia } from '@/data/media';
import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';

const heroVideoUrl = 'https://www.dropbox.com/scl/fi/fxr2b2jtw7gsdysdcy252/vid-1-land.mp4?rlkey=nyl77xs6ex1mckejzb89gedri&st=5yjlekc1&raw=1';
const supportPhone = '0715855360';

const HeroSection = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const {
    allowRichMedia,
    heroVideoDelayMs,
    online,
    shouldReduceMotion,
  } = useAdaptiveExperience();

  useEffect(() => {
    if (!allowRichMedia || !online || heroVideoDelayMs <= 0) {
      setShouldLoadVideo(false);
      return;
    }

    const timerId = window.setTimeout(() => {
      setShouldLoadVideo(true);
    }, heroVideoDelayMs);

    return () => window.clearTimeout(timerId);
  }, [allowRichMedia, heroVideoDelayMs, online]);

  const fadeInClass = shouldReduceMotion ? 'opacity-100' : 'opacity-0 animate-fade-in';
  const fadeUpClass = shouldReduceMotion ? 'opacity-100' : 'opacity-0 animate-fade-up';

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ResponsiveImage
          alt=""
          aria-hidden="true"
          avif={heroMedia.avif}
          webp={heroMedia.webp}
          fallback={heroMedia.fallback}
          className="h-full w-full object-cover"
          wrapperClassName="h-full w-full"
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
        />
        {shouldLoadVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={heroMedia.fallback}
            aria-hidden="true"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-44 pt-24 text-center md:px-8 md:pb-40">
        <div className="max-w-5xl mx-auto min-w-0">
          {/* Ornament */}
          <div className={`mb-8 ${fadeInClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent mx-auto" />
          </div>

          <span className={`inline-block max-w-full text-gold font-sans text-xs tracking-[0.24em] sm:tracking-[0.4em] uppercase mb-6 ${fadeUpClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '400ms' }}>
            Premium Funeral Services
          </span>

          <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.05] tracking-tight mb-8 ${fadeUpClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '600ms' }}>
            Dignified Farewells,<br />
            <span className="gold-text-gradient font-normal">Executed With Grace</span>
          </h1>

          <p className={`max-w-2xl mx-auto text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-8 ${fadeUpClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '800ms' }}>
            Executive Funerals provides compassionate, well-coordinated, and premium funeral services for families across Kenya, honoring every life with dignity, beauty, and respect.
          </p>

          <div className={`sm:hidden ${fadeUpClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '950ms' }}>
            <a href={`tel:${supportPhone}`} className="inline-flex min-w-0 items-center justify-center px-5 py-3 border border-primary/30 bg-background/15 text-gold font-sans text-[11px] leading-tight tracking-[0.1em] uppercase text-center backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 active:scale-[0.97]">
              24/7 Support
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute inset-x-0 bottom-32 z-10 px-4 ${fadeUpClass} md:bottom-24 md:px-8`} style={shouldReduceMotion ? undefined : { animationDelay: '1000ms' }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            <a href="#contact" className="min-w-0 px-4 py-3 gold-gradient text-primary-foreground font-sans text-[11px] leading-tight tracking-[0.1em] uppercase text-center transition-all duration-300 active:scale-[0.97]">
              Book a Consultation
            </a>
            <a href="#services" className="min-w-0 px-4 py-3 border border-primary/30 text-foreground font-sans text-[11px] leading-tight tracking-[0.1em] uppercase text-center hover:bg-primary/5 transition-all duration-300 active:scale-[0.97]">
              Explore Services
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
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${fadeInClass}`} style={shouldReduceMotion ? undefined : { animationDelay: '1500ms', animationFillMode: 'forwards' }}>
        <div className="w-5 h-9 border border-primary/30 rounded-full flex items-start justify-center p-1.5">
          <div className={`w-1 h-2 bg-primary/60 rounded-full ${shouldReduceMotion ? '' : 'animate-float'}`} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
