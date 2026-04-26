export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="h-5 w-36 animate-pulse border-2 border-foreground bg-white" style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }} />

        <section className="sketch-card-strong mt-8 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 space-y-4">
              <div className="h-12 w-12 animate-pulse border-2 border-foreground bg-[var(--post-it)]" style={{ borderRadius: "55% 45% 52% 48% / 44% 54% 46% 56%" }} />
              <div className="h-10 w-64 animate-pulse border-2 border-foreground bg-white" style={{ borderRadius: "28px 18px 34px 20px / 18px 34px 20px 30px" }} />
              <div className="space-y-2">
                <div className="h-5 w-full animate-pulse border-2 border-foreground/40 bg-white" />
                <div className="h-5 w-3/4 animate-pulse border-2 border-foreground/40 bg-white" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-11 w-24 animate-pulse border-2 border-foreground bg-white" style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }} />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-7 w-20 animate-pulse border-2 border-foreground bg-white" style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }} />
            ))}
          </div>
        </section>

        <section className="sketch-card mt-8 bg-white p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-8 w-32 animate-pulse border-2 border-foreground bg-white" />
            <div className="h-4 w-28 animate-pulse border-2 border-foreground bg-white" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-5 animate-pulse border-2 border-foreground/40 bg-white" style={{ width: `${85 - i * 5}%` }} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
