export default function SectionDivider() {
  return (
    <section aria-hidden="true" className="px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>
    </section>
  );
}
