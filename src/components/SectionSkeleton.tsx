interface SectionSkeletonProps {
  cardCount?: number;
  sectionId?: string;
  title: string;
}

const SectionSkeleton = ({
  cardCount = 3,
  sectionId,
  title,
}: SectionSkeletonProps) => (
  <section id={sectionId} className="section-padding-lg bg-background">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto h-3 w-28 animate-pulse rounded-full bg-secondary/70" />
        <div className="mx-auto mt-5 h-10 w-full max-w-xl animate-pulse rounded-full bg-secondary/60" />
        <div className="mx-auto mt-4 h-4 w-full max-w-2xl animate-pulse rounded-full bg-secondary/50" />
        <span className="sr-only">{title} is loading</span>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden border border-border bg-card/70 p-5"
          >
            <div className="h-48 animate-pulse bg-secondary/60" />
            <div className="mt-5 h-5 w-2/3 animate-pulse rounded-full bg-secondary/50" />
            <div className="mt-4 h-3 w-full animate-pulse rounded-full bg-secondary/40" />
            <div className="mt-3 h-3 w-5/6 animate-pulse rounded-full bg-secondary/40" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionSkeleton;

