import type { Ohaeng } from '../types';

const CHEONGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const;
const JIJI     = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;
// 천간 인덱스 0,1→木 / 2,3→火 / 4,5→土 / 6,7→金 / 8,9→水
const OHAENG_BY_CHEONGAN: Ohaeng[] = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];

const BASE_TIMESTAMP = Date.UTC(1984, 0, 1); // 甲子日 기준

const JULGKI_TABLE: Record<string, string> = {
  // 2025
  '2025-01-05': '소한', '2025-01-20': '대한',
  '2025-02-03': '입춘', '2025-02-18': '우수',
  '2025-03-05': '경칩', '2025-03-20': '춘분',
  '2025-04-04': '청명', '2025-04-20': '곡우',
  '2025-05-05': '입하', '2025-05-21': '소만',
  '2025-06-05': '망종', '2025-06-21': '하지',
  '2025-07-07': '소서', '2025-07-22': '대서',
  '2025-08-07': '입추', '2025-08-23': '처서',
  '2025-09-07': '백로', '2025-09-22': '추분',
  '2025-10-08': '한로', '2025-10-23': '상강',
  '2025-11-07': '입동', '2025-11-22': '소설',
  '2025-12-07': '대설', '2025-12-22': '동지',
  // 2026
  '2026-01-05': '소한', '2026-01-20': '대한',
  '2026-02-04': '입춘', '2026-02-19': '우수',
  '2026-03-06': '경칩', '2026-03-21': '춘분',
  '2026-04-05': '청명', '2026-04-20': '곡우',
  '2026-05-06': '입하', '2026-05-21': '소만',
  '2026-06-06': '망종', '2026-06-21': '하지',
  '2026-07-07': '소서', '2026-07-23': '대서',
  '2026-08-07': '입추', '2026-08-23': '처서',
  '2026-09-08': '백로', '2026-09-23': '추분',
  '2026-10-08': '한로', '2026-10-23': '상강',
  '2026-11-07': '입동', '2026-11-22': '소설',
  '2026-12-07': '대설', '2026-12-22': '동지',
  // 2027–2030: astro.kasi.re.kr 에서 확인 후 추가
};

export interface DayContext {
  date: string;
  julgki: string | null;
  cheongan: string;
  jiji: string;
  ohaeng: Ohaeng;
  eumoyang: '양' | '음';
}

function toLocalDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getDayContext(date: Date): DayContext {
  const dateStr = toLocalDateString(date);
  const utcMs = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const elapsed = Math.round((utcMs - BASE_TIMESTAMP) / 86_400_000);
  const cycleIndex = ((elapsed % 60) + 60) % 60;
  const cheonganIdx = cycleIndex % 10;
  const jijiIdx = cycleIndex % 12;

  return {
    date: dateStr,
    julgki: JULGKI_TABLE[dateStr] ?? null,
    cheongan: CHEONGAN[cheonganIdx],
    jiji: JIJI[jijiIdx],
    ohaeng: OHAENG_BY_CHEONGAN[cheonganIdx],
    eumoyang: cheonganIdx % 2 === 0 ? '양' : '음',
  };
}
