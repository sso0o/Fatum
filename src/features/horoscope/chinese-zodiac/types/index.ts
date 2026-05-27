export type ChineseZodiacSign =
  | 'rat' | 'ox' | 'tiger' | 'rabbit'
  | 'dragon' | 'snake' | 'horse' | 'goat'
  | 'monkey' | 'rooster' | 'dog' | 'pig';

export type Ohaeng = '木' | '火' | '土' | '金' | '水';

export interface ChineseZodiacMeta {
  sign: ChineseZodiacSign;
  label: string;
  emoji: string;
  jiji: string;
  element: Ohaeng;
  eumoyang: '양' | '음';
  nature: string;
  birthYears: string;
}

export interface ChineseLuckyInfo {
  color: string;
  number: number;
  item: string;
  direction: string;
}

export interface ChineseFortune {
  energy: string;
  advice: string;
  caution: string;
  relationship: string;
  career: string;
  lucky: ChineseLuckyInfo;
  harmony: string;
}

export interface ChineseFortuneData {
  date: string;
  fortunes: Record<ChineseZodiacSign, ChineseFortune>;
}
