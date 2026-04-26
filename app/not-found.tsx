import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="sketch-card-strong tape max-w-lg space-y-6 p-8">
        <h1 className="text-8xl font-bold text-accent">404</h1>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Page Not Found</h2>
        <p className="mx-auto max-w-md text-xl leading-8 text-foreground/75">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="primary-button mx-auto inline-flex"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
