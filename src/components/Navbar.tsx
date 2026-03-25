import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Home', 'About', 'Services', 'Gallery', 'Marketplace', 'Packages', 'Testimonials', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20 min-w-0 gap-4">
        {/* Logo */}
        <a href="#home" className="flex min-w-0 items-center gap-2 group">
          <div className="w-8 h-8 border border-primary/60 flex items-center justify-center shrink-0">
            <span className="font-serif text-primary text-sm font-semibold">EF</span>
          </div>
          <div className="min-w-0 leading-none">
            <span className="font-serif text-lg text-foreground tracking-wide">Executive</span>
            <span className="block font-sans text-[10px] tracking-[0.24em] sm:tracking-[0.35em] uppercase text-gold">Funerals</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300">
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary font-sans text-xs tracking-[0.15em] uppercase hover:bg-primary/10 transition-all duration-300 active:scale-[0.97]">
          <Phone size={14} />
          Request Assistance
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2 active:scale-95 transition-transform">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-up">
          <div className="px-6 py-8 space-y-1">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 font-sans text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-gold transition-colors border-b border-border/50">
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-6 flex items-center justify-center gap-2 px-5 py-3 border border-primary/40 text-primary font-sans text-xs tracking-[0.15em] uppercase">
              <Phone size={14} /> Request Assistance
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
