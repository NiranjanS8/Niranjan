export default function SketchLoader({ label = "Flipping to README" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12" role="status" aria-live="polite">
      <div className="sketch-card post-it-card tape rotate-[-1deg] px-8 py-6 text-center">
        <svg
          className="mx-auto mb-3 h-10 w-24 text-accent"
          viewBox="0 0 100 36"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 22C16 8 26 28 36 16C46 4 54 28 65 15C75 4 83 24 92 14"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sketch-scribble-path"
          />
        </svg>

        <div className="flex items-center justify-center gap-1.5 text-xl font-semibold text-foreground">
          <span>{label}</span>
          <span className="inline-flex items-center gap-1 pt-1" aria-hidden="true">
            <span className="sketch-dot-bounce h-1.5 w-1.5 rounded-full bg-accent" />
            <span
              className="sketch-dot-bounce h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animationDelay: "0.18s" }}
            />
            <span
              className="sketch-dot-bounce h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animationDelay: "0.36s" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
