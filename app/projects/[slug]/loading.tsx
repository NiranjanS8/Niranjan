export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="h-4 w-32 animate-pulse rounded bg-white/10" />

        <section className="mt-6 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 space-y-4">
              <div className="h-12 w-12 animate-pulse rounded-xl bg-white/10" />
              <div className="h-10 w-64 animate-pulse rounded-lg bg-white/10" />
              <div className="space-y-2">
                <div className="h-5 w-full animate-pulse rounded bg-white/[0.06]" />
                <div className="h-5 w-3/4 animate-pulse rounded bg-white/[0.06]" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-11 w-24 animate-pulse rounded-[1rem] bg-white/10" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-7 w-20 animate-pulse rounded-full bg-white/[0.06]" />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/[0.05] bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-8 w-32 animate-pulse rounded-lg bg-white/10" />
            <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-5 animate-pulse rounded bg-white/[0.06]" style={{ width: `${85 - i * 5}%` }} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
