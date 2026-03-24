import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [
  'Funeral Planning & Coordination',
  'Hearse Transportation',
  'Casket & Coffin Selection',
  'Floral Arrangements',
  'Tent & Chair Setup',
  'Memorial Service',
  'Burial Coordination',
  'Upcountry & International Repatriation',
  'Full Package Inquiry',
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding-lg bg-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Contact Us"
          title="We're Here For You"
          subtitle="Reach out to us anytime. Our compassionate team is available 24/7 to assist you."
        />

        {/* Emergency Banner */}
        <div className={`mt-12 max-w-3xl mx-auto p-6 border border-primary/30 bg-primary/5 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
          <div className="font-serif text-lg text-gold mb-2">Urgent Funeral Assistance?</div>
          <p className="font-sans text-sm text-muted-foreground mb-4">Our emergency team is available around the clock for immediate support in Nairobi and across Kenya.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:0715855360" className="flex items-center gap-2 px-6 py-3 gold-gradient text-primary-foreground font-sans text-xs tracking-[0.15em] uppercase active:scale-[0.97] transition-transform">
              <Phone size={14} /> Call 0715855360
            </a>
            <a href="https://wa.me/254715250625" className="flex items-center gap-2 px-6 py-3 border border-primary/30 text-gold font-sans text-xs tracking-[0.15em] uppercase hover:bg-primary/10 transition-all active:scale-[0.97]">
              <MessageCircle size={14} /> WhatsApp 0715250625
            </a>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">Full Name</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary/30 border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full bg-secondary/30 border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors" placeholder="0715855360" />
                </div>
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">Email Address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary/30 border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">Service Needed</label>
                <Select value={form.service} onValueChange={service => setForm({ ...form, service })}>
                  <SelectTrigger className="h-auto w-full rounded-none bg-secondary/30 border-border px-4 py-3 font-sans text-sm text-foreground focus:border-primary/50 focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-secondary text-foreground">
                    {services.map(service => (
                      <SelectItem key={service} value={service} className="font-sans text-sm focus:bg-primary/15 focus:text-foreground">
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} className="w-full bg-secondary/30 border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none transition-colors resize-none" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="flex items-center gap-2 px-8 py-4 gold-gradient text-primary-foreground font-sans text-xs tracking-[0.15em] uppercase hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.97]">
                <Send size={14} /> Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: MapPin, title: 'Our Office', lines: ['Kitale Town', 'Trans-Nzoia County', 'Kenya'] },
              { icon: Phone, title: 'Phone', lines: ['0715855360', '0715250625'] },
              { icon: Mail, title: 'Email', lines: ['info@executivefunerals.co.ke', 'support@executivefunerals.co.ke'] },
              { icon: Clock, title: 'Hours', lines: ['24/7 Emergency Support', 'Office: Mon–Sat, 8AM–6PM'] },
            ].map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-serif text-lg text-foreground">{title}</div>
                  {lines.map(l => <div key={l} className="font-sans text-sm text-muted-foreground">{l}</div>)}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="w-full h-48 bg-secondary/30 border border-border flex items-center justify-center">
              <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase">Map Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
