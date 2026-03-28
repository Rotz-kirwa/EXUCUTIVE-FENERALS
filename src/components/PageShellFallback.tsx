const PageShellFallback = () => (
  <div className="min-h-screen bg-background px-4 pt-24 md:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="h-16 w-48 animate-pulse rounded-full bg-secondary/50" />
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="h-4 w-36 animate-pulse rounded-full bg-secondary/40" />
          <div className="h-16 w-full max-w-3xl animate-pulse rounded-[28px] bg-secondary/50" />
          <div className="h-16 w-full max-w-2xl animate-pulse rounded-[28px] bg-secondary/40" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-secondary/35" />
          <div className="h-4 w-5/6 max-w-2xl animate-pulse rounded-full bg-secondary/35" />
          <div className="flex gap-4 pt-6">
            <div className="h-12 w-44 animate-pulse rounded-full bg-secondary/50" />
            <div className="h-12 w-40 animate-pulse rounded-full bg-secondary/40" />
          </div>
        </div>
        <div className="h-[420px] animate-pulse rounded-[32px] bg-secondary/45" />
      </div>
    </div>
  </div>
);

export default PageShellFallback;

