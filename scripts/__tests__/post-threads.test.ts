import { formatPost } from '../post-threads';

const mockFortune = {
  energy: '직관력이 빛나는 하루입니다.',
  advice: '메모하는 습관을 들이세요.',
  caution: '현실을 외면하지 마세요.',
  relationship: '깊은 교감이 이루어집니다.',
  career: '창의적 해결책이 떠오릅니다.',
  lucky: { color: '오션 블루', number: 7, item: '아쿠아마린' },
};

describe('formatPost', () => {
  it('물고기자리 헤더를 포함한다', () => {
    const text = formatPost('2026-05-28', mockFortune);
    expect(text).toContain('♓ 물고기자리 오늘의 운세 (5월 28일)');
  });

  it('각 운세 항목을 이모지와 함께 포함한다', () => {
    const text = formatPost('2026-05-28', mockFortune);
    expect(text).toContain('✨ 에너지: 직관력이 빛나는 하루입니다.');
    expect(text).toContain('💡 조언: 메모하는 습관을 들이세요.');
    expect(text).toContain('⚠️ 주의: 현실을 외면하지 마세요.');
    expect(text).toContain('💕 관계: 깊은 교감이 이루어집니다.');
    expect(text).toContain('💼 직장: 창의적 해결책이 떠오릅니다.');
  });

  it('럭키 정보를 · 구분자로 포함한다', () => {
    const text = formatPost('2026-05-28', mockFortune);
    expect(text).toContain('🍀 럭키: 오션 블루 · 7 · 아쿠아마린');
  });

  it('날짜가 다를 때 헤더가 올바르다', () => {
    const text = formatPost('2026-01-05', mockFortune);
    expect(text).toContain('(1월 5일)');
  });
});
