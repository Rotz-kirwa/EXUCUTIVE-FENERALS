interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeading = ({ label, title, subtitle, align = 'center' }: Props) => (
  <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}>
    {label && (
      <span className="text-gold font-sans text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
        {label}
      </span>
    )}
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.15] tracking-tight line-ornament">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 text-muted-foreground font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
