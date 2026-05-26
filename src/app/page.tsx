import { ZodiacSelector } from '@/features/horoscope/zodiac';
import type { FortuneData } from '@/features/horoscope/zodiac';

export const revalidate = 3600;

async function getTodayFortunes(): Promise<FortuneData | null> {
  const today = new Date().toISOString().split('T')[0];
  const base = process.env.GITHUB_RAW_BASE_URL;
  try {
    const res = await fetch(`${base}/data/${today}.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const data = await getTodayFortunes();
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-medium tracking-tight text-ink">
            🔮 Fatum
          </h1>
          <p className="text-sm text-accent-gold">{today}</p>
        </header>

        {data ? (
          <ZodiacSelector fortunes={data.fortunes} />
        ) : (
          <p className="text-center text-sm text-muted">
            오늘의 운세를 준비 중입니다.
          </p>
        )}
      </div>
    </main>
  );
}
