import { render, screen } from '@testing-library/react';
import ChineseFortuneCard from '../ChineseFortuneCard';
import type { ChineseFortune, ChineseZodiacMeta } from '@/features/horoscope/chinese-zodiac/types';

const mockMeta: ChineseZodiacMeta = {
  sign: 'rat', label: '쥐', emoji: '🐭', jiji: '子',
  element: '水', eumoyang: '양', nature: '영민하고 적응력이 강함',
  birthYears: '1996 · 2008 · 2020',
};

const mockFortune: ChineseFortune = {
  energy: '에너지 텍스트',
  advice: '조언 텍스트',
  caution: '주의 텍스트',
  relationship: '연애 텍스트',
  career: '직업 텍스트',
  lucky: { color: '검정', number: 3, item: '수정', direction: '북' },
  harmony: '水比和 — 같은 물결이 서로를 강하게 합니다',
};

describe('ChineseFortuneCard', () => {
  it('이모지와 띠 이름을 표시한다', () => {
    render(<ChineseFortuneCard meta={mockMeta} fortune={mockFortune} />);
    expect(screen.getByText('🐭')).toBeInTheDocument();
    expect(screen.getByText('쥐')).toBeInTheDocument();
  });

  it('지지와 오행을 표시한다', () => {
    render(<ChineseFortuneCard meta={mockMeta} fortune={mockFortune} />);
    expect(screen.getByText('子 · 水')).toBeInTheDocument();
  });

  it('오행 기운(harmony)을 표시한다', () => {
    render(<ChineseFortuneCard meta={mockMeta} fortune={mockFortune} />);
    expect(screen.getByText('水比和 — 같은 물결이 서로를 강하게 합니다')).toBeInTheDocument();
  });

  it('행운을 color · number · item · direction 형태로 표시한다', () => {
    render(<ChineseFortuneCard meta={mockMeta} fortune={mockFortune} />);
    expect(screen.getByText('검정 · 3 · 수정 · 북')).toBeInTheDocument();
  });

  it('에너지 텍스트를 표시한다', () => {
    render(<ChineseFortuneCard meta={mockMeta} fortune={mockFortune} />);
    expect(screen.getByText('에너지 텍스트')).toBeInTheDocument();
  });
});
