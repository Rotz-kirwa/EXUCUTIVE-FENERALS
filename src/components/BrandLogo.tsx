import executiveLogo from '@/assets/branding/executive-logo.png';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
};

const BrandLogo = ({
  className,
  imageClassName,
  textClassName,
  showText = true,
}: BrandLogoProps) => (
  <div className={cn('flex min-w-0 items-center gap-3', className)}>
    <img
      src={executiveLogo}
      alt="Executive Funerals logo"
      className={cn(
        'h-11 w-11 shrink-0 object-contain',
        imageClassName
      )}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
    {showText ? (
      <div className={cn('min-w-0 leading-none', textClassName)}>
        <span className="font-serif text-lg text-foreground tracking-wide">Executive</span>
        <span className="block font-sans text-[10px] tracking-[0.24em] uppercase text-gold sm:tracking-[0.35em]">
          Funerals
        </span>
      </div>
    ) : null}
  </div>
);

export default BrandLogo;
