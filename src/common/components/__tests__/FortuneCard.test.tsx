import { render, screen } from '@testing-library/react';
import FortuneCard from '../FortuneCard';

describe('FortuneCard', () => {
  const defaultProps = {
    symbol: '♈',
    label: '양자리',
    dates: '3/21–4/19',
    content: '오늘은 새로운 시작을 위한 좋은 날입니다.',
  };

  it('별자리 심볼을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('♈')).toBeInTheDocument();
  });

  it('별자리 한국어 이름을 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('양자리')).toBeInTheDocument();
  });

  it('운세 텍스트를 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('오늘은 새로운 시작을 위한 좋은 날입니다.')).toBeInTheDocument();
  });

  it('날짜 범위를 표시한다', () => {
    render(<FortuneCard {...defaultProps} />);
    expect(screen.getByText('3/21–4/19')).toBeInTheDocument();
  });
});
