import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  Clock3,
  LoaderCircle,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

import { formatKes, funeralPackages, getFuneralPackageBySlug } from '@/data/funeralPackages';

type PaymentState = 'idle' | 'loading' | 'success' | 'error';

const SUPPORT_PHONE = '0715855360';
const SUPPORT_WHATSAPP = '0715250625';
const SUPPORT_EMAIL = 'support@executivefunerals.co.ke';

const buildReference = (slug: string) => {
  const stamp = new Date()
    .toISOString()
    .replaceAll('-', '')
    .replaceAll(':', '')
    .replaceAll('.', '')
    .replace('T', '')
    .replace('Z', '')
    .slice(0, 12);

  return `EF-${slug.replace(/-/g, '').slice(0, 8).toUpperCase()}-${stamp}`;
};

const normalizeMpesaPhone = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (/^254(7|1)\d{8}$/.test(digits)) {
    return digits;
  }

  if (/^0(7|1)\d{8}$/.test(digits)) {
    return `254${digits.slice(1)}`;
  }

  if (/^(7|1)\d{8}$/.test(digits)) {
    return `254${digits}`;
  }

  return null;
};

const MpesaCheckout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const state = location.state as { packageSlug?: string } | null;
  const selectedSlug = state?.packageSlug ?? searchParams.get('package') ?? funeralPackages[0].slug;
  const selectedPackage = getFuneralPackageBySlug(selectedSlug);

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [paymentState, setPaymentState] = useState<PaymentState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [reference, setReference] = useState(buildReference(selectedSlug));
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setReference(buildReference(selectedSlug));
    setPaymentState('idle');
    setStatusMessage('');
    setPhoneError('');
  }, [selectedSlug]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const sendStkPush = (normalizedPhone: string) => {
    if (!selectedPackage) {
      setPaymentState('error');
      setStatusMessage('We could not find that package. Please return to packages and choose again.');
      return;
    }

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setPaymentState('loading');
    setStatusMessage(`Sending secure STK push to ${normalizedPhone}. Approve the prompt on your phone to confirm ${selectedPackage.name}.`);

    timerRef.current = window.setTimeout(() => {
      if (normalizedPhone.endsWith('000')) {
        setPaymentState('error');
        setStatusMessage('The STK push could not be completed at the moment. Please retry in a few seconds or contact support for assistance.');
        return;
      }

      setPaymentState('success');
      setReference(buildReference(selectedPackage.slug));
      setStatusMessage(`STK push sent to ${normalizedPhone}. Complete the payment on your phone to secure your ${selectedPackage.name} booking.`);
    }, 2200);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const normalizedPhone = normalizeMpesaPhone(phone);

    if (!normalizedPhone) {
      setPhoneError('Enter a valid Safaricom M-PESA number in the format 2547XXXXXXXX or 07XXXXXXXX.');
      setPaymentState('error');
      setStatusMessage('We could not validate the M-PESA number provided. Please correct it and try again.');
      return;
    }

    setPhoneError('');
    sendStkPush(normalizedPhone);
  };

  const handleRetry = () => {
    const normalizedPhone = normalizeMpesaPhone(phone);

    if (!normalizedPhone) {
      setPhoneError('Enter a valid Safaricom M-PESA number before retrying.');
      setPaymentState('error');
      setStatusMessage('Retry unavailable until a valid M-PESA number is entered.');
      return;
    }

    setPhoneError('');
    sendStkPush(normalizedPhone);
  };

  if (!selectedPackage) {
    return (
      <main className="min-h-screen bg-charcoal-deep px-4 py-10 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[28px] border border-border bg-card/80 p-8 md:p-10 premium-shadow">
            <div className="w-12 h-12 rounded-full border border-destructive/30 bg-destructive/10 flex items-center justify-center text-destructive">
              <AlertTriangle size={22} />
            </div>
            <h1 className="mt-6 font-serif text-4xl text-foreground">Package Not Found</h1>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
              We could not load the package details for this checkout session. Please return to the packages section and choose your preferred arrangement again.
            </p>
            <Link
              to="/#packages"
              className="mt-8 inline-flex items-center gap-2 border border-primary/30 px-6 py-3 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:bg-primary/10 transition-all"
            >
              <ArrowLeft size={14} />
              Back To Packages
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const paymentLabel = selectedPackage.paymentLabel ?? 'Package amount';
  const visibleFeatures = selectedPackage.features.slice(0, 5);
  const moreFeatureCount = selectedPackage.features.length - visibleFeatures.length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-charcoal-deep">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,167,92,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(37,61,105,0.14),transparent_24%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-10 min-w-0">
        <header className="mb-6 flex flex-col gap-4 rounded-[24px] border border-primary/15 bg-background/70 px-5 py-5 backdrop-blur-xl premium-shadow md:flex-row md:items-center md:justify-between md:px-7">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center border border-primary/60 bg-background/70 shrink-0">
              <span className="font-serif text-base font-semibold text-primary">EF</span>
            </div>
            <div className="min-w-0 leading-none">
              <span className="font-serif text-xl tracking-wide text-foreground">Executive</span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.35em] text-gold">Funerals</span>
            </div>
          </Link>

          <Link
            to="/#packages"
            className="inline-flex items-center gap-2 self-start border border-primary/20 px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-all hover:bg-primary/10 hover:text-gold"
          >
            <ArrowLeft size={14} />
            Back To Packages
          </Link>
        </header>

        <div className="mb-6 rounded-[28px] border border-primary/15 bg-[linear-gradient(145deg,rgba(11,16,24,0.92),rgba(19,28,45,0.86))] p-6 premium-shadow md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-gold">
            <ShieldCheck size={14} />
            <span className="font-sans text-[11px] uppercase tracking-[0.18em]">Secure M-PESA Payment</span>
          </div>

          <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">Complete Your Booking</h1>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            Review your package, enter your M-PESA number, and we will send the payment prompt to your phone.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[28px] border border-border bg-card/80 p-6 premium-shadow backdrop-blur-md md:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
              <div className="min-w-0">
                <div className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold">Selected Package</div>
                <h2 className="mt-3 font-serif text-3xl text-foreground">{selectedPackage.name}</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{selectedPackage.summary}</p>
              </div>
              <div className="max-w-full rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-gold text-center">
                {selectedPackage.displayPrice}
              </div>
            </div>

            <div className="mt-6 space-y-4 rounded-[24px] border border-primary/10 bg-background/35 p-5">
              <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4 min-w-0">
                <span className="font-sans text-sm text-muted-foreground">{paymentLabel}</span>
                <span className="font-serif text-2xl text-gold text-right">{formatKes(selectedPackage.amountKes)}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4 min-w-0">
                <span className="font-sans text-sm text-muted-foreground">Reference</span>
                <span className="font-sans text-sm text-foreground break-all text-right">{reference}</span>
              </div>
              <div>
                <div className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Included Services</div>
                <ul className="mt-4 space-y-3">
                  {visibleFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                      <BadgeCheck size={16} className="mt-0.5 shrink-0 text-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {moreFeatureCount > 0 && (
                  <div className="mt-4 font-sans text-xs uppercase tracking-[0.12em] text-gold">
                    + {moreFeatureCount} more included
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-[28px] border border-primary/15 bg-[linear-gradient(145deg,rgba(14,18,29,0.96),rgba(22,33,52,0.92))] p-6 premium-shadow md:p-8">
              <div className="flex items-center gap-3 text-gold">
                <Smartphone size={18} />
                <div className="font-sans text-[11px] uppercase tracking-[0.18em]">M-PESA Checkout</div>
              </div>

              <h2 className="mt-5 font-serif text-3xl text-foreground">Pay With M-PESA</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                Use your active Safaricom number. The amount is fixed to your selected package.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Safaricom Number
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value.replace(/[^\d]/g, '').slice(0, 12));
                      setPhoneError('');
                      if (paymentState !== 'loading') {
                        setPaymentState('idle');
                        setStatusMessage('');
                      }
                    }}
                    placeholder="2547XXXXXXXX"
                    className={`w-full rounded-[20px] border bg-background/60 px-5 py-4 font-sans text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none ${
                      phoneError ? 'border-destructive/60 focus:border-destructive/70' : 'border-primary/15 focus:border-primary/45'
                    }`}
                  />
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <span className="font-sans text-xs text-muted-foreground min-w-0">Example: 254712345678</span>
                    <span className="font-sans text-xs text-gold text-right">{formatKes(selectedPackage.amountKes)}</span>
                  </div>
                  {phoneError && (
                    <div className="mt-3 flex items-center gap-2 font-sans text-sm text-destructive">
                      <AlertTriangle size={14} />
                      {phoneError}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={paymentState === 'loading'}
                  className="flex w-full items-center justify-center gap-3 rounded-[20px] gold-gradient px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {paymentState === 'loading' ? (
                    <>
                      <LoaderCircle size={16} className="animate-spin" />
                      Sending STK Push
                    </>
                  ) : (
                    <>
                      <Phone size={16} />
                      Pay With M-PESA
                    </>
                  )}
                </button>
              </form>

              <div
                aria-live="polite"
                className={`mt-5 rounded-[22px] border p-5 transition-all duration-300 ${
                  paymentState === 'success'
                    ? 'border-emerald-500/25 bg-emerald-500/10'
                    : paymentState === 'error'
                      ? 'border-destructive/30 bg-destructive/10'
                      : 'border-primary/10 bg-background/35'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      paymentState === 'success'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : paymentState === 'error'
                          ? 'bg-destructive/15 text-destructive'
                          : 'bg-primary/10 text-gold'
                    }`}
                  >
                    {paymentState === 'success' ? (
                      <BadgeCheck size={18} />
                    ) : paymentState === 'error' ? (
                      <AlertTriangle size={18} />
                    ) : paymentState === 'loading' ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Clock3 size={18} />
                    )}
                  </div>

                  <div>
                    <div className="font-serif text-2xl text-foreground">
                      {paymentState === 'success'
                        ? 'STK push sent'
                        : paymentState === 'error'
                          ? 'Payment needs attention'
                          : paymentState === 'loading'
                            ? 'Sending payment request'
                            : 'Ready to pay'}
                    </div>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      {statusMessage || 'Enter your number and send the STK push to continue.'}
                    </p>

                    {paymentState === 'error' && (
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="mt-4 inline-flex items-center gap-2 border border-primary/25 px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-gold transition-all hover:bg-primary/10"
                      >
                        Retry STK Push
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] border border-border bg-card/80 p-5 premium-shadow backdrop-blur-md">
              <div className="flex items-center gap-3 text-gold">
                <LockKeyhole size={16} />
                <div className="font-sans text-[11px] uppercase tracking-[0.16em]">Need Help?</div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <a href={`tel:${SUPPORT_PHONE}`} className="rounded-[18px] border border-white/5 bg-background/35 px-4 py-3 font-sans text-sm text-foreground transition-colors hover:text-gold break-words">
                  {SUPPORT_PHONE}
                </a>
                <a href="https://wa.me/254715250625" className="inline-flex items-center gap-2 rounded-[18px] border border-white/5 bg-background/35 px-4 py-3 font-sans text-sm text-foreground transition-colors hover:text-gold break-words">
                  <MessageCircle size={14} />
                  {SUPPORT_WHATSAPP}
                </a>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="rounded-[18px] border border-white/5 bg-background/35 px-4 py-3 font-sans text-sm text-foreground transition-colors hover:text-gold break-all">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default MpesaCheckout;
