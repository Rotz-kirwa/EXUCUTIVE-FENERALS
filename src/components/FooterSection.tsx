import { Heart } from 'lucide-react';

const FooterSection = () => (
  <footer className="bg-charcoal-deep border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 border border-primary/60 flex items-center justify-center">
              <span className="font-serif text-primary text-sm font-semibold">EF</span>
            </div>
            <div className="leading-none">
              <span className="font-serif text-lg text-foreground">Executive</span>
              <span className="block font-sans text-[10px] tracking-[0.35em] uppercase text-gold">Funerals</span>
            </div>
          </div>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4">
            Honoring lives with dignity, compassion, and excellence for families in Nairobi and across Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Gallery', 'Packages', 'Contact'].map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg text-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {['Funeral Planning', 'Hearse Transport', 'Casket Selection', 'Floral Arrangements', 'Memorial Services', 'Burial Coordination'].map(l => (
              <li key={l}>
                <a href="#services" className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-serif text-lg text-foreground mb-4">Support</h4>
          <ul className="space-y-2 font-sans text-sm text-muted-foreground">
            <li>24/7 Emergency Line</li>
            <li>0715855360</li>
            <li>0715250625</li>
            <li>info@executivefunerals.co.ke</li>
            <li className="pt-2">
              <a href="#contact" className="text-gold hover:text-foreground transition-colors">Request Assistance →</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Executive Funerals. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
          Made with <Heart size={12} className="text-gold" fill="currentColor" /> for families who deserve the best
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
