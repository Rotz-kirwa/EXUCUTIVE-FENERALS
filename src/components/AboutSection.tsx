import { useScrollReveal } from '@/hooks/useScrollReveal';
import ResponsiveImage from '@/components/ResponsiveImage';

const ourStoryImage = 'https://www.dropbox.com/scl/fi/eetq758qz7inxtsobrfza/lim.jpg?rlkey=fh0gl4gytvfnjheuwlc6sd0pv&st=m2o1lmuo&raw=1';

const stats = [
  { value: '2,400+', label: 'Families Served' },
  { value: '24/7', label: 'Availability' },
  { value: '15+', label: 'Premium Fleet' },
  { value: '48', label: 'Compassionate Staff' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding-lg bg-charcoal">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative overflow-hidden">
              <ResponsiveImage
                alt="Executive Funerals hearse and service team"
                fallback={ourStoryImage}
                className="h-[340px] w-full object-cover sm:h-[420px] md:h-[500px]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/10 -z-10" />
          </div>

          {/* Content */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.15] mb-6 md:mb-8">
              A Legacy of<br />Dignity & Compassion
            </h2>
            <div className="space-y-5 text-muted-foreground font-sans text-base leading-relaxed">
              <p>
                For over a decade, Executive Funerals has supported families across Kenya with dignified, premium funeral services. We understand that losing a loved one is one of life's most profound moments, and we are committed to ensuring every farewell is handled with the utmost respect, grace, and professionalism.
              </p>
              <p>
                From city memorials in Nairobi to upcountry burial arrangements, our dedicated team orchestrates every detail so families can focus on what matters most — remembering, honoring, and celebrating a life well lived.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12">
              {stats.map(({ value, label }) => (
                <div key={label} className="border border-border bg-secondary/30 px-4 py-4 sm:py-5">
                  <div className="font-serif text-2xl md:text-3xl text-gold font-light">{value}</div>
                  <div className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
