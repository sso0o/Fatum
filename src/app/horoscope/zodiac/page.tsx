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

export default async function ZodiacPage() {
  const data = await getTodayFortunes();
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <header className="mb-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tight text-ink">별자리 운세</h1>
        <p className="text-sm text-accent-gold">{today}</p>
      </header>

      {data ? (
        <ZodiacSelector fortunes={data.fortunes} />
      ) : (
        <p className="text-center text-sm text-body">오늘의 운세를 준비 중입니다.</p>
      )}
    </>
  );
}
