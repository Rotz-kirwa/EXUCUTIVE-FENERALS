import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { funeralPackages } from '@/data/funeralPackages';

const PackagesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="packages" className="section-padding-lg bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Packages"
          title="Tailored Funeral Packages"
          subtitle="From essential services to bespoke experiences, we offer packages designed for every family's needs."
        />

        <div ref={ref} className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {funeralPackages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col border transition-all duration-500 ${pkg.featured ? 'border-primary/50 bg-secondary/40 gold-glow' : 'border-border bg-card hover:border-primary/20'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-center justify-center gap-1.5 px-4 py-1 gold-gradient">
                  <Star size={12} className="text-primary-foreground" fill="currentColor" />
                  <span className="font-sans text-[10px] tracking-[0.14em] sm:tracking-[0.2em] uppercase text-primary-foreground font-semibold text-center">Most Popular</span>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-foreground">{pkg.name}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-2 mb-6">{pkg.desc}</p>
                <div className="font-serif text-3xl text-gold mb-8">{pkg.displayPrice}</div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/checkout/mpesa?package=${pkg.slug}`}
                  state={{ packageSlug: pkg.slug }}
                  className={`mt-8 block text-center py-3.5 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 active:scale-[0.97] ${pkg.featured ? 'gold-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/20' : 'border border-primary/30 text-gold hover:bg-primary/10'}`}
                >
                  Choose Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
