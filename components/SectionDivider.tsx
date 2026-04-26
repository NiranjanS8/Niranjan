export default function SectionDivider() {
  return (
    <section aria-hidden="true" className="px-6">
      <div className="mx-auto max-w-5xl">
        <div className="h-0 border-t-[3px] border-dashed border-foreground/40" />
      </div>
    </section>
  );
}
