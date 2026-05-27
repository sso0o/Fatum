import Link from 'next/link';

export default function HoroscopeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1 text-sm text-muted-fatum transition-colors hover:text-body"
        >
          ← 돌아가기
        </Link>
        {children}
      </div>
    </main>
  );
}
