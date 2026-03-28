import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  LoaderCircle,
} from 'lucide-react';

import { formatKes, funeralPackages, getFuneralPackageBySlug } from '@/data/funeralPackages';
import { useAdaptiveExperience } from '@/providers/AdaptiveExperienceProvider';
import PageMetadata from '@/components/PageMetadata';
import { checkoutPageMetadata } from '@/lib/siteMetadata';

type PaymentState = 'idle' | 'loading' | 'success' | 'error';

const SUPPORT_PHONE = '0715855360';
const SUPPORT_WHATSAPP = '0715250625';
const SUPPORT_EMAIL = 'support@executivefunerals.co.ke';

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
  const { online } = useAdaptiveExperience();

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [paymentState, setPaymentState] = useState<PaymentState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
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
      setStatusMessage(`STK push sent to ${normalizedPhone}. Complete the payment on your phone to secure your ${selectedPackage.name} booking.`);
    }, 2200);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!online) {
      setPaymentState('error');
      setStatusMessage('A live connection is required to send an M-PESA STK push. Please reconnect and try again, or contact support for immediate help.');
      return;
    }

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
        <PageMetadata metadata={checkoutPageMetadata} />
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

  return (
    <main className="min-h-screen bg-charcoal-deep px-4 py-8 md:px-8">
      <PageMetadata
        metadata={{
          ...checkoutPageMetadata,
          title: `${selectedPackage.name} | M-PESA Checkout | Executive Funerals`,
          description: `Confirm ${selectedPackage.name} with secure M-PESA checkout and immediate assistance from the Executive Funerals care team.`,
        }}
      />
      <div className="mx-auto max-w-2xl">
        <section className="rounded-[28px] border border-primary/15 bg-[linear-gradient(145deg,rgba(14,18,29,0.96),rgba(22,33,52,0.92))] p-6 premium-shadow md:p-8">
          <Link
            to="/#packages"
            className="inline-flex items-center gap-2 border border-primary/20 px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-all hover:bg-primary/10 hover:text-gold"
          >
            <ArrowLeft size={14} />
            Back To Packages
          </Link>

          <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold">M-PESA Checkout</div>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Pay With M-PESA</h1>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
            Use your active Safaricom number. The amount is fixed to your selected package.
          </p>

          {!online && (
            <div className="mt-5 rounded-[20px] border border-destructive/30 bg-destructive/10 px-4 py-3 font-sans text-sm text-foreground">
              Your device appears to be offline. The page will stay readable, but sending an STK push requires a live connection.
            </div>
          )}

          <div className="mt-6 rounded-[22px] border border-primary/10 bg-background/35 p-5">
            <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Selected Package</div>
            <div className="mt-2 font-serif text-2xl text-foreground">{selectedPackage.name}</div>
          </div>

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
                <span className="min-w-0 font-sans text-xs text-muted-foreground">Example: 254712345678</span>
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
              className="flex w-full items-center justify-center rounded-[20px] gold-gradient px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {paymentState === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle size={16} className="animate-spin" />
                  Sending STK Push
                </span>
              ) : (
                'Pay With M-PESA'
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
            <div className="font-serif text-2xl text-foreground">
              {paymentState === 'success'
                ? 'STK push sent to your phone'
                : paymentState === 'error'
                  ? 'Payment needs attention'
                  : paymentState === 'loading'
                    ? 'Sending STK push'
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

          <div className="mt-6 rounded-[22px] border border-border bg-card/80 p-5">
            <div className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold">Need Help?</div>
            <div className="mt-4 space-y-3">
              <a href={`tel:${SUPPORT_PHONE}`} className="block font-sans text-sm text-foreground break-words hover:text-gold transition-colors">
                {SUPPORT_PHONE}
              </a>
              <a href="https://wa.me/254715250625" className="block font-sans text-sm text-foreground break-words hover:text-gold transition-colors">
                {SUPPORT_WHATSAPP}
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="block font-sans text-sm text-foreground break-all hover:text-gold transition-colors">
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MpesaCheckout;
