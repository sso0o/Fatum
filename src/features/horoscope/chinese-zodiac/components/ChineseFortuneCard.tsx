import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ChineseFortune, ChineseZodiacMeta } from '../types';

interface ChineseFortuneCardProps {
  meta: ChineseZodiacMeta;
  fortune: ChineseFortune;
}

const ChineseFortuneCard = ({ meta, fortune }: ChineseFortuneCardProps) => {
  const sections = [
    { key: 'energy',       label: '오늘의 기운', text: fortune.energy },
    { key: 'advice',       label: '조언',        text: fortune.advice },
    { key: 'caution',      label: '주의',        text: fortune.caution },
    { key: 'relationship', label: '연애·관계',    text: fortune.relationship },
    { key: 'career',       label: '직업·재정',    text: fortune.career },
    { key: 'harmony',      label: '오행 기운',    text: fortune.harmony },
  ];

  return (
    <Card className="border border-accent-gold/30 bg-surface-elevated rounded-xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{meta.emoji}</span>
          <div>
            <h2 className="text-xl font-semibold text-ink">{meta.label}</h2>
            <p className="text-sm text-accent-gold">{meta.jiji} · {meta.element}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map(({ key, label, text }) => (
          <div key={key}>
            <p className="text-xs font-medium text-accent-gold mb-1">{label}</p>
            <p className="text-sm leading-relaxed text-body">{text}</p>
          </div>
        ))}
        <div>
          <p className="text-xs font-medium text-accent-gold mb-1">행운</p>
          <p className="text-sm text-body">
            {fortune.lucky.color} · {fortune.lucky.number} · {fortune.lucky.item} · {fortune.lucky.direction}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChineseFortuneCard;
