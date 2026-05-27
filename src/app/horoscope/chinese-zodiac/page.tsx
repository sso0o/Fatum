export default function ChineseZodiacPage() {
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <header className="mb-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tight text-ink">띠 운세</h1>
        <p className="text-sm text-accent-gold">{today}</p>
      </header>

      <p className="text-center text-sm text-body">오늘의 운세를 준비 중입니다.</p>
    </>
  );
}
