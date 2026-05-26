import { render, screen } from '@testing-library/react';
import FortuneCard from '../FortuneCard';
import type { Fortune } from '@/features/horoscope/zodiac/types';

const mockFortune: Fortune = {
  energy: '에너지 텍스트',
  advice: '조언 텍스트',
  caution: '주의 텍스트',
  relationship: '연애 텍스트',
  career: '직업 텍스트',
  lucky: { color: '진홍색', number: 7, item: '루비' },
};

const defaultProps = {
  symbol: '♈',
  label: '양자리',
  dates: '3/21–4/19',
  fortune: mockFortune,
};

describe('FortuneCard', () => {
  it('별자리 심볼을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('♈')).toBeInTheDocument();
  });

  it('별자리 한국어 이름을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('양자리')).toBeInTheDocument();
  });

  it('날짜 범위를 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('3/21–4/19')).toBeInTheDocument();
  });

  it('오늘의 에너지를 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('에너지 텍스트')).toBeInTheDocument();
  });

  it('조언을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('조언 텍스트')).toBeInTheDocument();
  });

  it('주의사항을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('주의 텍스트')).toBeInTheDocument();
  });

  it('연애·관계를 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('연애 텍스트')).toBeInTheDocument();
  });

  it('직업·재정을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('직업 텍스트')).toBeInTheDocument();
  });

  it('행운 정보를 color · number · item 형태로 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('진홍색 · 7 · 루비')).toBeInTheDocument();
  });
});
