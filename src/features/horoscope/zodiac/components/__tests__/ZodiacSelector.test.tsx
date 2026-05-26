import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ZodiacSelector from '../ZodiacSelector';
import type { FortuneData, ZodiacSign } from '@/features/horoscope/zodiac';

const SIGNS: ZodiacSign[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

const mockFortunes = Object.fromEntries(
  SIGNS.map((sign) => [
    sign,
    {
      energy: `${sign} 에너지`,
      advice: '조언',
      caution: '주의',
      relationship: '연애',
      career: '직업',
      lucky: { color: '빨강', number: 1, item: '루비' },
    },
  ])
) as FortuneData['fortunes'];

describe('ZodiacSelector', () => {
  it('12개 별자리 버튼을 렌더한다', () => {
    render(<ZodiacSelector fortunes={mockFortunes} />);
    expect(screen.getAllByRole('button')).toHaveLength(12);
  });

  it('초기 상태에서는 운세 카드가 없다', () => {
    render(<ZodiacSelector fortunes={mockFortunes} />);
    expect(screen.queryByText(/에너지/)).not.toBeInTheDocument();
  });

  it('버튼 클릭 시 해당 별자리 운세를 표시한다', async () => {
    const user = userEvent.setup();
    render(<ZodiacSelector fortunes={mockFortunes} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // aries
    expect(screen.getByText('aries 에너지')).toBeInTheDocument();
  });

  it('다른 버튼 클릭 시 이전 운세가 사라지고 새 운세가 표시된다', async () => {
    const user = userEvent.setup();
    render(<ZodiacSelector fortunes={mockFortunes} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // aries
    await user.click(buttons[1]); // taurus
    expect(screen.queryByText('aries 에너지')).not.toBeInTheDocument();
    expect(screen.getByText('taurus 에너지')).toBeInTheDocument();
  });
});
