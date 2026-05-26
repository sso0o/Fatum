export type ZodiacSign =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface ZodiacMeta {
  sign: ZodiacSign;
  label: string;
  symbol: string;
  dates: string;
}

export interface LuckyInfo {
  color: string;
  number: number;
  item: string;
}

export interface Fortune {
  energy: string;
  advice: string;
  caution: string;
  relationship: string;
  career: string;
  lucky: LuckyInfo;
}

export interface FortuneData {
  date: string;
  fortunes: Record<ZodiacSign, Fortune>;
}
