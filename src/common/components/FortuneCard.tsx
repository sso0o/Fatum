import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FortuneCardProps {
  symbol: string;
  label: string;
  dates: string;
  content: string;
}

const FortuneCard = ({ symbol, label, dates, content }: FortuneCardProps) => {
  return (
    <Card className="border border-accent-lavender/30 bg-surface-elevated rounded-xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{symbol}</span>
          <div>
            <h2 className="text-xl font-semibold text-ink">{label}</h2>
            <p className="text-sm text-accent-gold">{dates}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed text-body">{content}</p>
      </CardContent>
    </Card>
  );
};

export default FortuneCard;
