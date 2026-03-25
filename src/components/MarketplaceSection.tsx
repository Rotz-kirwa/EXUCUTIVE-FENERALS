import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { ShoppingBag, X, Eye } from 'lucide-react';

import floralImg from '@/assets/service-floral.webp';
import tentImg from '@/assets/service-tent.webp';
import hearseImg from '@/assets/service-hearse.webp';
import casketHeritageImg from '@/assets/marketplace/casket-heritage.webp';
import casketEbonyImg from '@/assets/marketplace/casket-ebony.webp';
import casketIvoryImg from '@/assets/marketplace/casket-ivory.webp';
import casketCopperImg from '@/assets/marketplace/casket-copper.webp';
import casketExecutiveImg from '@/assets/marketplace/casket-executive.webp';
import casketSignatureImg from '@/assets/marketplace/casket-signature.webp';
import floralWhiteEleganceImg from '@/assets/marketplace/floral-white-elegance.webp';
import floralRemembranceSprayImg from '@/assets/marketplace/floral-remembrance-spray.webp';
import floralStandingTributeImg from '@/assets/marketplace/floral-standing-tribute.webp';
import floralSympathyBasketImg from '@/assets/marketplace/floral-sympathy-basket.webp';
import floralHeartTributeImg from '@/assets/marketplace/floral-heart-tribute.webp';
import floralRoseFarewellImg from '@/assets/marketplace/floral-rose-farewell.webp';
import memorialCandleSetImg from '@/assets/marketplace/memorial-candle-set.webp';
import memorialTributeFrameImg from '@/assets/marketplace/memorial-tribute-frame.webp';
import transportExecutiveArrivalImg from '@/assets/marketplace/transport-executive-arrival.webp';
import transportCeremonialEscortImg from '@/assets/marketplace/transport-ceremonial-escort.webp';
import transportFleetConvoyImg from '@/assets/marketplace/transport-fleet-convoy.webp';
import equipmentLoweringDeviceImg from '@/assets/marketplace/equipment-lowering-device.webp';

const categories = ['All', 'Caskets', 'Florals', 'Tents & Setup', 'Memorial', 'Transport', 'Burial Equipment'];

const casketShowcase = {
  heritage: casketHeritageImg,
  ebony: casketEbonyImg,
  ivory: casketIvoryImg,
  copper: casketCopperImg,
  executive: casketExecutiveImg,
  signature: casketSignatureImg,
};

const floralShowcase = {
  whiteElegance: floralWhiteEleganceImg,
  remembranceSpray: floralRemembranceSprayImg,
  standingTribute: floralStandingTributeImg,
  sympathyBasket: floralSympathyBasketImg,
  heartTribute: floralHeartTributeImg,
  roseFarewell: floralRoseFarewellImg,
};

const transportShowcase = {
  executiveArrival: transportExecutiveArrivalImg,
  ceremonialEscort: transportCeremonialEscortImg,
  fleetConvoy: transportFleetConvoyImg,
};

const equipmentShowcase = {
  loweringDevice: equipmentLoweringDeviceImg,
};

const memorialShowcase = {
  candleSet: memorialCandleSetImg,
  tributeFrame: memorialTributeFrameImg,
};

const products = [
  { name: 'Heritage Mahogany Casket', cat: 'Caskets', price: 'KSh 135,000', img: casketShowcase.heritage, desc: 'Handcrafted mahogany casket with satin interior lining and polished heritage detailing.' },
  { name: 'Premium Ebony Casket', cat: 'Caskets', price: 'KSh 185,000', img: casketShowcase.ebony, desc: 'Luxurious ebony-finish casket with plush velvet lining and premium chrome fittings.' },
  { name: 'Ivory Rest Casket', cat: 'Caskets', price: 'KSh 165,000', img: casketShowcase.ivory, desc: 'Elegant ivory-tone casket designed for serene memorial styling and a dignified final tribute.' },
  { name: 'Royal Copper Trim Casket', cat: 'Caskets', price: 'KSh 210,000', img: casketShowcase.copper, desc: 'Refined casket with rich copper-toned trim, tailored for families seeking a distinguished presentation.' },
  { name: 'Executive Gold Accent Casket', cat: 'Caskets', price: 'KSh 245,000', img: casketShowcase.executive, desc: 'Premium executive-grade casket featuring gold-accented craftsmanship and a stately ceremonial look.' },
  { name: 'Signature Walnut Casket', cat: 'Caskets', price: 'KSh 195,000', img: casketShowcase.signature, desc: 'Signature walnut-finish casket with elegant panel detailing and a calm, premium ceremonial presence.' },
  { name: 'White Rose Memorial Wreath', cat: 'Florals', price: 'KSh 18,500', img: floralImg, desc: 'Elegant white rose and lily wreath arrangement for memorial tributes.' },
  { name: 'Cascade Lily Tribute', cat: 'Florals', price: 'KSh 24,000', img: floralImg, desc: 'Cascading lily and greenery arrangement for casket display.' },
  { name: 'White Elegance Tribute', cat: 'Florals', price: 'KSh 21,500', img: floralShowcase.whiteElegance, desc: 'Soft white sympathy arrangement designed for a calm, graceful memorial presentation.' },
  { name: 'Golden Remembrance Spray', cat: 'Florals', price: 'KSh 28,000', img: floralShowcase.remembranceSpray, desc: 'Premium standing spray with warm tones and layered blooms for a dignified farewell.' },
  { name: 'Standing Grace Wreath', cat: 'Florals', price: 'KSh 32,500', img: floralShowcase.standingTribute, desc: 'Full standing tribute wreath created to honor a life with elegance and presence.' },
  { name: 'Sympathy Garden Basket', cat: 'Florals', price: 'KSh 19,800', img: floralShowcase.sympathyBasket, desc: 'Refined basket arrangement with balanced greenery and fresh blooms for family tribute tables.' },
  { name: 'Heartfelt Memorial Tribute', cat: 'Florals', price: 'KSh 35,000', img: floralShowcase.heartTribute, desc: 'Large-scale premium floral tribute arrangement for prominent ceremony displays.' },
  { name: 'Rose Farewell Bouquet', cat: 'Florals', price: 'KSh 17,500', img: floralShowcase.roseFarewell, desc: 'Classic rose-focused sympathy bouquet suited for graveside, chapel, or home memorial settings.' },
  { name: 'Premium Canopy Setup', cat: 'Tents & Setup', price: 'KSh 65,000', img: tentImg, desc: 'Complete canopy tent with draping, chairs, and setup for up to 100 guests.' },
  { name: 'Deluxe Chair Package (50)', cat: 'Tents & Setup', price: 'KSh 22,000', img: tentImg, desc: 'Premium padded chairs with covers and sashes for 50 guests.' },
  { name: 'Memorial Candle Set', cat: 'Memorial', price: 'KSh 8,500', img: memorialShowcase.candleSet, desc: 'Set of 12 premium pillar candles with glass holders for memorial displays.' },
  { name: 'Gold Tribute Frame', cat: 'Memorial', price: 'KSh 12,000', img: memorialShowcase.tributeFrame, desc: 'Ornate gold-finish tribute frame for displaying portraits at ceremonies.' },
  { name: 'Premium Hearse Booking', cat: 'Transport', price: 'Request Quote', img: hearseImg, desc: 'Luxury hearse with professional chauffeur for dignified transportation.' },
  { name: 'Executive Arrival Vehicle', cat: 'Transport', price: 'Request Quote', img: transportShowcase.executiveArrival, desc: 'Premium ceremonial arrival vehicle for dignified family and VIP transport during memorial proceedings.' },
  { name: 'Ceremonial Escort Car', cat: 'Transport', price: 'Request Quote', img: transportShowcase.ceremonialEscort, desc: 'Professional escort transport option suited for formal procession support and high-touch family logistics.' },
  { name: 'Funeral Fleet Convoy', cat: 'Transport', price: 'Request Quote', img: transportShowcase.fleetConvoy, desc: 'Multi-vehicle transport convoy for coordinated funeral movement between home, church, and graveside locations.' },
  { name: 'Professional Casket Lowering Device', cat: 'Burial Equipment', price: 'Request Quote', img: equipmentShowcase.loweringDevice, desc: 'Professional graveside lowering device engineered for a smooth, secure, and dignified final committal service.' },
];

const MarketplaceSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState('All');
  const [quickView, setQuickView] = useState<(typeof products)[number] | null>(null);

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
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3 md:mt-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-sans text-[11px] tracking-[0.12em] uppercase border transition-all duration-300 active:scale-[0.97] sm:px-5 sm:text-xs sm:tracking-[0.15em] ${filter === cat ? 'border-primary bg-primary/10 text-gold' : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div ref={ref} className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button onClick={() => setQuickView(p)} className="p-3 border border-primary/50 bg-background/80 backdrop-blur-sm text-gold hover:bg-primary/20 transition-colors active:scale-95">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              <div className="p-5 sm:p-6">
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
      {quickView && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuickView(null)}>
          <div className="bg-card border border-border max-w-2xl w-full max-h-[90vh] overflow-auto animate-scale-up" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img src={quickView.img} alt={quickView.name} className="w-full h-64 md:h-80 object-cover" />
              <button onClick={() => setQuickView(null)} className="absolute top-4 right-4 p-2 bg-background/80 text-foreground hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold">{quickView.cat}</span>
              <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{quickView.name}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{quickView.desc}</p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-serif text-2xl text-gold">{quickView.price}</span>
                <a href="#contact" className="px-6 py-3 gold-gradient text-primary-foreground font-sans text-xs tracking-[0.15em] uppercase active:scale-[0.97] transition-transform">
                  {quickView.price === 'Request Quote' ? 'Request Quote' : 'Order Now'}
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
