import { Clock, Users, Shield, Heart } from 'lucide-react';

const trust = [
  { icon: Clock, label: '24/7 Support' },
  { icon: Users, label: 'Professional Coordination' },
  { icon: Shield, label: 'Premium Equipment' },
  { icon: Heart, label: 'Compassionate Staff' },
];

const HeroHighlightsSection = () => (
  <section className="bg-background pb-6 sm:pb-10">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
        {trust.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex min-w-0 flex-col items-center gap-3 border border-border/30 bg-card/70 px-3 py-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/25"
          >
            <Icon size={20} className="text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.08em] sm:tracking-[0.1em] uppercase text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroHighlightsSection;
