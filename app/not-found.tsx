import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="space-y-6">
        <h1 className="text-8xl font-bold text-accent">404</h1>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Page Not Found</h2>
        <p className="mx-auto max-w-md text-gray-400">
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
