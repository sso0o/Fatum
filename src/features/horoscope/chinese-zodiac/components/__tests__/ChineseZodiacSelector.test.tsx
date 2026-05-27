import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChineseZodiacSelector from '../ChineseZodiacSelector';
import type { ChineseFortuneData, ChineseZodiacSign } from '@/features/horoscope/chinese-zodiac/types';

const SIGNS: ChineseZodiacSign[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
];

const mockFortunes = Object.fromEntries(
  SIGNS.map((sign) => [
    sign,
    {
      energy: `${sign} 에너지`, advice: '조언', caution: '주의',
      relationship: '연애', career: '직업',
      lucky: { color: '검정', number: 1, item: '수정', direction: '북' },
      harmony: '水比和 — 테스트',
    },
  ])
) as ChineseFortuneData['fortunes'];

describe('ChineseZodiacSelector', () => {
  it('12개 띠 버튼을 렌더한다', () => {
    render(<ChineseZodiacSelector fortunes={mockFortunes} />);
    expect(screen.getAllByRole('button')).toHaveLength(12);
  });

  it('초기 상태에서는 운세 카드가 없다', () => {
    render(<ChineseZodiacSelector fortunes={mockFortunes} />);
    expect(screen.queryByText(/에너지/)).not.toBeInTheDocument();
  });

  it('버튼 클릭 시 해당 띠 운세를 표시한다', async () => {
    const user = userEvent.setup();
    render(<ChineseZodiacSelector fortunes={mockFortunes} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // rat
    expect(screen.getByText('rat 에너지')).toBeInTheDocument();
  });

  it('다른 버튼 클릭 시 이전 운세가 사라지고 새 운세가 표시된다', async () => {
    const user = userEvent.setup();
    render(<ChineseZodiacSelector fortunes={mockFortunes} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // rat
    await user.click(buttons[1]); // ox
    expect(screen.queryByText('rat 에너지')).not.toBeInTheDocument();
    expect(screen.getByText('ox 에너지')).toBeInTheDocument();
  });
});
