'use client';

import { useState } from 'react';
import FortuneCard from '@/common/components/FortuneCard';
import { ZODIAC_LIST } from '../constants/zodiacList';
import type { FortuneData, ZodiacSign } from '../types';

interface ZodiacSelectorProps {
  fortunes: FortuneData['fortunes'];
}

const ZodiacSelector = ({ fortunes }: ZodiacSelectorProps) => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

  const selectedMeta = ZODIAC_LIST.find((z) => z.sign === selectedSign);
  const selectedFortune = selectedSign ? fortunes[selectedSign] : null;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-3">
        {ZODIAC_LIST.map((zodiac) => (
          <button
            key={zodiac.sign}
            onClick={() => setSelectedSign(zodiac.sign)}
            className={[
              'flex flex-col items-center gap-1 rounded-xl border p-3 text-sm font-medium transition-colors',
              selectedSign === zodiac.sign
                ? 'border-accent-violet bg-accent-violet text-white'
                : 'border-hairline bg-surface-card text-ink hover:border-accent-lavender',
            ].join(' ')}
          >
            <span className="text-2xl">{zodiac.symbol}</span>
            <span className="text-xs">{zodiac.label}</span>
          </button>
        ))}
      </div>

      {selectedFortune && selectedMeta && (
        <FortuneCard
          symbol={selectedMeta.symbol}
          label={selectedMeta.label}
          dates={selectedMeta.dates}
          content={selectedFortune.content}
        />
      )}
    </div>
  );
};

export default ZodiacSelector;
