import Link from 'next/link';

export const revalidate = 86400;

export default function HomePage() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-medium tracking-tight text-ink">🔮Fatum🔮</h1>
          <p className="text-sm text-accent-gold">{today}</p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/horoscope/zodiac"
            className="flex flex-col items-center gap-3 rounded-xl border border-hairline bg-surface-card p-8 transition-colors hover:border-accent-lavender"
          >
            <span className="text-5xl">✨</span>
            <div className="text-center">
              <p className="text-base font-medium text-ink">별자리</p>
              <p className="mt-1 text-xs text-body">12개 별자리 오늘의 운세</p>
            </div>
          </Link>

          <Link
            href="/horoscope/chinese-zodiac"
            className="flex flex-col items-center gap-3 rounded-xl border border-hairline bg-surface-card p-8 transition-colors hover:border-accent-gold"
          >
            <span className="text-5xl">🐉</span>
            <div className="text-center">
              <p className="text-base font-medium text-ink">띠</p>
              <p className="mt-1 text-xs text-body">12띠 오늘의 운세</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
