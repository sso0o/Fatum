import { getDayContext } from '../getDayContext';

// 계산 근거: 기준일 1984-01-01 = 甲子日 (index 0)
// 경과일 % 60 → 천간(% 10), 지지(% 12)
// 2026-01-01: 15341일 → index 41 → 乙(1)巳(5) — 木 음
// 2026-05-21: 15481일 → index 1  → 乙(1)丑(1) — 木 음 (소만)
// 2026-05-27: 15487일 → index 7  → 辛(7)未(7) — 金 음
// ※ 만세력(astro.kasi.re.kr)으로 검증 권장

describe('getDayContext', () => {
  it('기준일 1984-01-01: 甲子日 — 木 양', () => {
    const ctx = getDayContext(new Date(1984, 0, 1));
    expect(ctx.cheongan).toBe('甲');
    expect(ctx.jiji).toBe('子');
    expect(ctx.ohaeng).toBe('木');
    expect(ctx.eumoyang).toBe('양');
  });

  it('2026-01-01: 乙巳日 — 木 음', () => {
    const ctx = getDayContext(new Date(2026, 0, 1));
    expect(ctx.date).toBe('2026-01-01');
    expect(ctx.cheongan).toBe('乙');
    expect(ctx.jiji).toBe('巳');
    expect(ctx.ohaeng).toBe('木');
    expect(ctx.eumoyang).toBe('음');
    expect(ctx.julgki).toBeNull();
  });

  it('2026-05-21: 소만 절기를 반환한다', () => {
    const ctx = getDayContext(new Date(2026, 4, 21));
    expect(ctx.date).toBe('2026-05-21');
    expect(ctx.julgki).toBe('소만');
  });

  it('2026-05-27: 절기 없음', () => {
    const ctx = getDayContext(new Date(2026, 4, 27));
    expect(ctx.date).toBe('2026-05-27');
    expect(ctx.julgki).toBeNull();
  });

  it('date 필드는 YYYY-MM-DD 로컬 날짜 형식이다', () => {
    const ctx = getDayContext(new Date(2026, 0, 5));
    expect(ctx.date).toBe('2026-01-05');
  });
});
