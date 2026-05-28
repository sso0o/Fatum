import fs from 'fs';
import path from 'path';

interface Lucky {
  color: string;
  number: number;
  item: string;
}

interface PiscesFortune {
  energy: string;
  advice: string;
  caution: string;
  relationship: string;
  career: string;
  lucky: Lucky;
}

interface ZodiacData {
  date: string;
  fortunes: {
    pisces: PiscesFortune;
    [key: string]: PiscesFortune;
  };
}

export function formatPost(dateStr: string, fortune: PiscesFortune): string {
  const [, month, day] = dateStr.split('-').map(Number);
  const header = `♓ 물고기자리 오늘의 운세 (${month}월 ${day}일)`;
  const { energy, advice, caution, relationship, career, lucky } = fortune;

  return [
    header,
    '',
    `✨ 에너지: ${energy}`,
    `💡 조언: ${advice}`,
    `⚠️ 주의: ${caution}`,
    `💕 관계: ${relationship}`,
    `💼 직장: ${career}`,
    `🍀 럭키: ${lucky.color} · ${lucky.number} · ${lucky.item}`,
  ].join('\n');
}
