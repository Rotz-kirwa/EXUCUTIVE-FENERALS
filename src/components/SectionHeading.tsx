interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeading = ({ label, title, subtitle, align = 'center' }: Props) => (
  <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}>
    {label && (
      <span className="mb-3 block text-gold font-sans text-xs font-semibold tracking-[0.2em] uppercase sm:mb-4 sm:tracking-[0.3em]">
        {label}
      </span>
    )}
    <h2 className="line-ornament font-serif text-[2.6rem] font-light leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground font-sans md:mt-6 md:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
