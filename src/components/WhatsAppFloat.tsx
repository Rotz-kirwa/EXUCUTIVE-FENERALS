import { useEffect, useState } from 'react';

import { useIsMobile } from '@/hooks/use-mobile';
import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';

const WHATSAPP_LINK = 'https://wa.me/254715250625';

const WhatsAppFloat = () => {
  const isMobile = useIsMobile();
  const { shouldReduceMotion } = useAdaptiveExperience();
  const [shouldShow, setShouldShow] = useState(!isMobile);

  useEffect(() => {
    if (!isMobile) {
      setShouldShow(true);
      return;
    }

    const syncVisibility = () => {
      setShouldShow(window.scrollY > window.innerHeight * 0.55);
    };

    syncVisibility();
    window.addEventListener('scroll', syncVisibility, { passive: true });
    return () => window.removeEventListener('scroll', syncVisibility);
  }, [isMobile]);

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-3 z-50 sm:bottom-7 sm:right-6">
      <div className={`absolute inset-2 rounded-full bg-[#25D366]/25 blur-2xl ${shouldReduceMotion ? '' : 'animate-pulse'}`} aria-hidden="true" />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Executive Funerals on WhatsApp"
        className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(10,16,25,0.92),rgba(19,45,36,0.94))] px-2.5 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(37,211,102,0.24)] active:scale-[0.98] sm:px-3 sm:py-3"
      >
        <span className="absolute inset-0 rounded-full border border-[#25D366]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_0_6px_rgba(37,211,102,0.12)] sm:h-12 sm:w-12">
          <span className={`absolute inset-[-6px] rounded-full border border-[#25D366]/35 ${shouldReduceMotion ? '' : 'animate-pulse'}`} aria-hidden="true" />
          <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true">
            <path d="M19.05 4.94A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.42 2.16 11.88c0 1.75.46 3.46 1.33 4.96L2 22l5.32-1.4a9.86 9.86 0 0 0 4.71 1.2h.01c5.44 0 9.87-4.43 9.87-9.88 0-2.64-1.03-5.13-2.86-6.98Zm-7.01 15.2h-.01a8.16 8.16 0 0 1-4.15-1.13l-.3-.18-3.16.83.85-3.08-.2-.32a8.12 8.12 0 0 1-1.25-4.33c0-4.49 3.66-8.15 8.17-8.15 2.18 0 4.23.84 5.76 2.38a8.1 8.1 0 0 1 2.38 5.77c0 4.5-3.66 8.16-8.16 8.16Zm4.47-6.1c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25a7.54 7.54 0 0 1-1.4-1.74c-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.11 0 1.24.91 2.44 1.04 2.6.13.17 1.79 2.73 4.34 3.83.61.27 1.08.43 1.45.55.61.2 1.17.17 1.62.1.49-.07 1.5-.61 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.49-.3Z" />
          </svg>
        </span>

        <span className="hidden min-w-0 sm:flex sm:flex-col">
          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-emerald-200/70">24/7 WhatsApp</span>
          <span className="font-serif text-sm text-white">Chat With Us</span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
