import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { Phone, ClipboardList, Settings, Sparkles, HeartHandshake } from 'lucide-react';

const steps = [
  { icon: Phone, title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our website — available 24/7 for immediate support.' },
  { icon: ClipboardList, title: 'Consultation & Planning', desc: 'Meet with our coordinators to discuss your wishes, preferences, and create a tailored plan.' },
  { icon: Settings, title: 'Service Coordination', desc: 'We handle every logistic — venue, transport, flowers, equipment, and all arrangements.' },
  { icon: Sparkles, title: 'Ceremony Execution', desc: 'A dignified, beautifully orchestrated farewell service that honors your loved one's life.' },
  { icon: HeartHandshake, title: 'Ongoing Support', desc: 'Continued family support, grief resources, and assistance in the days and weeks following.' },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding-lg bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Our Process"
          title="Your Journey With Us"
          subtitle="From first contact to ongoing support, we walk beside you through every step."
        />

        <div ref={ref} className="mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block" />

          {steps.map(({ icon: Icon, title, desc }, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={title}
                className={`relative flex items-start gap-6 mb-16 last:mb-0 sm:gap-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
              >
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-start">
                  <div className={isLeft ? 'text-right pr-8' : 'order-3 pl-8'}>
                    <h3 className="font-serif text-xl text-foreground mb-2">{title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex flex-col items-center order-2">
                    <div className="w-12 h-12 border border-primary/40 bg-secondary/50 flex items-center justify-center relative z-10">
                      <Icon size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-[10px] tracking-widest text-muted-foreground mt-2">0{i + 1}</span>
                  </div>
                  <div className={isLeft ? 'order-3' : ''} />
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 border border-primary/40 bg-secondary/50 flex items-center justify-center">
                    <Icon size={20} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-muted-foreground">Step 0{i + 1}</span>
                    <h3 className="font-serif text-xl text-foreground mb-2">{title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
