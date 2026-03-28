import { useState, type ImgHTMLAttributes } from "react";

import { useAdaptiveExperience } from "@/providers/AdaptiveExperienceProvider";
import { cn } from "@/lib/utils";

export interface SourceVariant {
  src: string;
  width: number;
}

interface ResponsiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  avif?: SourceVariant[];
  webp?: SourceVariant[];
  fallback?: string;
  wrapperClassName?: string;
}

const buildSrcSet = (variants?: SourceVariant[]) =>
  variants?.map((variant) => `${variant.src} ${variant.width}w`).join(", ");

const pickVariant = (
  variants: SourceVariant[] | undefined,
  networkTier: "slow" | "medium" | "fast",
  fallback?: string
) => {
  if (!variants?.length) {
    return fallback;
  }

  if (networkTier === "slow") {
    return variants[0]?.src;
  }

  if (networkTier === "medium") {
    return variants[Math.min(variants.length - 1, 1)]?.src;
  }

  return variants[variants.length - 1]?.src;
};

const ResponsiveImage = ({
  alt,
  avif,
  webp,
  fallback,
  className,
  wrapperClassName,
  loading,
  sizes,
  fetchPriority,
  ...props
}: ResponsiveImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const { networkTier } = useAdaptiveExperience();
  const selectedSrc =
    pickVariant(webp, networkTier, fallback) ??
    pickVariant(avif, networkTier, fallback) ??
    fallback;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-secondary/60 to-secondary/20",
        wrapperClassName
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
      />
      <picture>
        {avif?.length ? (
          <source type="image/avif" srcSet={buildSrcSet(avif)} sizes={sizes} />
        ) : null}
        {webp?.length ? (
          <source type="image/webp" srcSet={buildSrcSet(webp)} sizes={sizes} />
        ) : null}
        <img
          alt={alt}
          src={selectedSrc}
          sizes={sizes}
          loading={loading ?? "lazy"}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full transition duration-700",
            loaded ? "scale-100 opacity-100" : "scale-[1.02] opacity-0",
            className
          )}
          {...props}
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;

