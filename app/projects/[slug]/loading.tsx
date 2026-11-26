import SketchLoader from "@/components/SketchLoader";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-24">
      <SketchLoader label="Opening project" />
    </main>
  );
}
