'use client';

import { useState } from 'react';
import ChineseFortuneCard from './ChineseFortuneCard';
import { CHINESE_ZODIAC_LIST } from '../constants/chineseZodiacList';
import type { ChineseFortuneData, ChineseZodiacSign } from '../types';

interface ChineseZodiacSelectorProps {
  fortunes: ChineseFortuneData['fortunes'];
}

const ChineseZodiacSelector = ({ fortunes }: ChineseZodiacSelectorProps) => {
  const [selectedSign, setSelectedSign] = useState<ChineseZodiacSign | null>(null);

  const selectedMeta = CHINESE_ZODIAC_LIST.find((z) => z.sign === selectedSign);
  const selectedFortune = selectedSign ? fortunes[selectedSign] : null;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-3">
        {CHINESE_ZODIAC_LIST.map((zodiac) => (
          <button
            key={zodiac.sign}
            onClick={() => setSelectedSign(zodiac.sign)}
            className={[
              'flex flex-col items-center gap-1 rounded-xl border p-3 text-sm font-medium transition-colors',
              selectedSign === zodiac.sign
                ? 'border-accent-gold bg-accent-gold/20 text-ink'
                : 'border-hairline bg-surface-card text-ink hover:border-accent-gold',
            ].join(' ')}
          >
            <span className="text-2xl">{zodiac.emoji}</span>
            <span className="text-xs">{zodiac.label}</span>
          </button>
        ))}
      </div>

      {selectedFortune && selectedMeta && (
        <ChineseFortuneCard meta={selectedMeta} fortune={selectedFortune} />
      )}
    </div>
  );
};

export default ChineseZodiacSelector;
