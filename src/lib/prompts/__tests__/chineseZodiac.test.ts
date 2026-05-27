import { buildUserMessage, CHINESE_ZODIAC_SYSTEM_PROMPT } from '../chineseZodiac';
import type { DayContext } from '@/features/horoscope/chinese-zodiac/lib/getDayContext';

describe('buildUserMessage', () => {
  it('절기가 있을 때 절기 이름을 포함한다', () => {
    const ctx: DayContext = {
      date: '2026-05-21', julgki: '소만',
      cheongan: '乙', jiji: '丑', ohaeng: '木', eumoyang: '음',
    };
    const msg = buildUserMessage(ctx);
    expect(msg).toContain('오늘 날짜: 2026-05-21');
    expect(msg).toContain('절기: 소만');
    expect(msg).toContain('일진(日辰): 乙丑일 (木 기운, 음)');
  });

  it('절기가 없을 때 "없음"을 출력한다', () => {
    const ctx: DayContext = {
      date: '2026-05-27', julgki: null,
      cheongan: '辛', jiji: '未', ohaeng: '金', eumoyang: '음',
    };
    const msg = buildUserMessage(ctx);
    expect(msg).toContain('절기: 없음');
  });
});

describe('CHINESE_ZODIAC_SYSTEM_PROMPT', () => {
  it('12개 띠 영문 키를 모두 포함한다', () => {
    const keys = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
    keys.forEach((key) => {
      expect(CHINESE_ZODIAC_SYSTEM_PROMPT).toContain(key);
    });
  });

  it('오행 상생 규칙을 포함한다', () => {
    expect(CHINESE_ZODIAC_SYSTEM_PROMPT).toContain('相生');
    expect(CHINESE_ZODIAC_SYSTEM_PROMPT).toContain('相克');
  });
});
