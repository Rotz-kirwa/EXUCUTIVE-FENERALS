import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Grace Wanjiku', role: 'Nairobi', text: 'Executive Funerals handled my mother\'s service with such grace and professionalism. Every detail was perfect, from the floral arrangements to the coordination. They turned the hardest day of our lives into a beautiful celebration of her legacy.', rating: 5 },
  { name: 'Peter Otieno', role: 'Kisumu', text: 'We were overwhelmed with grief, but the team at Executive Funerals took care of everything. Their compassion, attention to detail, and premium service made all the difference. I cannot recommend them highly enough.', rating: 5 },
  { name: 'Mercy Mutua', role: 'Mombasa', text: 'The level of professionalism was extraordinary. From the luxury hearse to the beautifully arranged memorial, everything exceeded our expectations. They truly honored my father\'s memory with dignity.', rating: 5 },
  { name: 'Samuel Kiptoo', role: 'Eldoret', text: 'In our most difficult time, Executive Funerals was a pillar of strength. Their 24/7 availability and the personal attention from the coordination team was remarkable. A truly premium service.', rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding-lg bg-navy">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Testimonials" title="Words From Families We've Served" />

        <div ref={ref} className={`mt-10 text-center transition-all duration-700 sm:mt-12 md:mt-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Quote size={40} className="text-gold/30 mx-auto mb-8" />

          <div key={current} className="animate-fade-up">
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-gold" fill="currentColor" />
              ))}
            </div>

            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed italic mb-8">
              "{t.text}"
            </blockquote>

            <div className="w-12 h-px gold-gradient mx-auto mb-4" />
            <div className="font-serif text-lg text-gold">{t.name}</div>
            <div className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{t.role}</div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4 sm:mt-12 sm:gap-6">
            <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)} className="p-2 border border-border hover:border-primary/30 text-muted-foreground hover:text-gold transition-all active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((current + 1) % testimonials.length)} className="p-2 border border-border hover:border-primary/30 text-muted-foreground hover:text-gold transition-all active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
