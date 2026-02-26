import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-display font-bold text-display-1 text-primary mb-4">404</h1>
        <h2 className="font-display font-semibold text-display-3 mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/en" className="btn-primary inline-flex">
          Go Home
        </Link>
      </div>
    </div>
  );
}
