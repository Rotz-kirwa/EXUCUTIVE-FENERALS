import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { ShieldCheck, CalendarCheck, Clock, Car, Users, FileCheck } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Dignified & Respectful', desc: 'Every service is conducted with the highest standards of dignity, respect, and sensitivity.' },
  { icon: CalendarCheck, title: 'Full Event Coordination', desc: 'From venue to ceremony, we handle every logistic so you can focus on remembering your loved one.' },
  { icon: Clock, title: '24/7 Availability', desc: 'Our compassionate team is available around the clock to support you in your time of need.' },
  { icon: Car, title: 'Premium Fleet & Equipment', desc: 'Luxury hearses, pristine tenting, and top-tier equipment for a service befitting the occasion.' },
  { icon: Users, title: 'Experienced Team', desc: 'Our professionals bring years of funeral service expertise combined with genuine empathy.' },
  { icon: FileCheck, title: 'Transparent Packages', desc: 'Clear, honest pricing with no hidden costs. Every package is detailed and straightforward.' },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding-lg bg-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Why Choose Us"
          title="Trusted by Families, Respected by All"
          subtitle="We set the standard for premium funeral services through unwavering commitment to excellence."
        />

        <div ref={ref} className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group p-8 border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mb-6 group-hover:gold-glow transition-shadow duration-500">
                <Icon size={22} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
