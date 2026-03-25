import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { ShoppingBag, X, Eye } from 'lucide-react';

import casketImg from '@/assets/service-casket.jpg';
import floralImg from '@/assets/service-floral.jpg';
import tentImg from '@/assets/service-tent.jpg';
import memorialImg from '@/assets/service-memorial.jpg';
import hearseImg from '@/assets/service-hearse.jpg';

const categories = ['All', 'Caskets', 'Florals', 'Tents & Setup', 'Memorial', 'Transport'];

const products = [
  { name: 'Heritage Mahogany Casket', cat: 'Caskets', price: 'KSh 135,000', img: casketImg, desc: 'Handcrafted mahogany casket with satin interior lining and gold-plated handles.' },
  { name: 'Premium Ebony Casket', cat: 'Caskets', price: 'KSh 185,000', img: casketImg, desc: 'Luxurious ebony casket with velvet interior and chrome fittings.' },
  { name: 'White Rose Memorial Wreath', cat: 'Florals', price: 'KSh 18,500', img: floralImg, desc: 'Elegant white rose and lily wreath arrangement for memorial tributes.' },
  { name: 'Cascade Lily Tribute', cat: 'Florals', price: 'KSh 24,000', img: floralImg, desc: 'Cascading lily and greenery arrangement for casket display.' },
  { name: 'Premium Canopy Setup', cat: 'Tents & Setup', price: 'KSh 65,000', img: tentImg, desc: 'Complete canopy tent with draping, chairs, and setup for up to 100 guests.' },
  { name: 'Deluxe Chair Package (50)', cat: 'Tents & Setup', price: 'KSh 22,000', img: tentImg, desc: 'Premium padded chairs with covers and sashes for 50 guests.' },
  { name: 'Memorial Candle Set', cat: 'Memorial', price: 'KSh 8,500', img: memorialImg, desc: 'Set of 12 premium pillar candles with glass holders for memorial displays.' },
  { name: 'Gold Tribute Frame', cat: 'Memorial', price: 'KSh 12,000', img: memorialImg, desc: 'Ornate gold-finish tribute frame for displaying portraits at ceremonies.' },
  { name: 'Premium Hearse Booking', cat: 'Transport', price: 'Request Quote', img: hearseImg, desc: 'Luxury hearse with professional chauffeur for dignified transportation.' },
];

const MarketplaceSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState('All');
  const [quickView, setQuickView] = useState<number | null>(null);

  const filtered = filter === 'All' ? products : products.filter(p => p.cat === filter);

  return (
    <section id="marketplace" className="section-padding-lg bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Marketplace"
          title="Premium Funeral Products"
          subtitle="A curated selection of high-quality funeral products and equipment, available for purchase or hire."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 font-sans text-xs tracking-[0.15em] uppercase border transition-all duration-300 active:scale-[0.97] ${filter === cat ? 'border-primary bg-primary/10 text-gold' : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div ref={ref} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button onClick={() => setQuickView(i)} className="p-3 border border-primary/50 bg-background/80 backdrop-blur-sm text-gold hover:bg-primary/20 transition-colors active:scale-95">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold">{p.cat}</span>
                <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{p.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-serif text-xl text-gold">{p.price}</span>
                  <button className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-gold font-sans text-xs tracking-[0.1em] uppercase hover:bg-primary/10 transition-all active:scale-[0.97]">
                    <ShoppingBag size={14} />
                    {p.price === 'Request Quote' ? 'Enquire' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickView !== null && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuickView(null)}>
          <div className="bg-card border border-border max-w-2xl w-full max-h-[90vh] overflow-auto animate-scale-up" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img src={products[quickView].img} alt={products[quickView].name} className="w-full h-64 md:h-80 object-cover" />
              <button onClick={() => setQuickView(null)} className="absolute top-4 right-4 p-2 bg-background/80 text-foreground hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold">{products[quickView].cat}</span>
              <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{products[quickView].name}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{products[quickView].desc}</p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-serif text-2xl text-gold">{products[quickView].price}</span>
                <a href="#contact" className="px-6 py-3 gold-gradient text-primary-foreground font-sans text-xs tracking-[0.15em] uppercase active:scale-[0.97] transition-transform">
                  {products[quickView].price === 'Request Quote' ? 'Request Quote' : 'Order Now'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MarketplaceSection;
