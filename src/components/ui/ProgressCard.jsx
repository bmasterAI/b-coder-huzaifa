
    import { Sparkles } from 'lucide-react';
    import Card, { CardContent } from './Card';
    import Progress from './Progress';

    export default function ProgressCard({ percentage, showComplete }) {
      return (
        <Card className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Daily Progress</span>
            <span className="text-sm font-bold text-primary">{percentage}%</span>
          </div>
          <Progress value={percentage} />
          {percentage === 100 && showComplete && (
            <p className="flex items-center gap-1 text-[10px] font-semibold text-foreground mt-3">
              <Sparkles size={14} className="text-amber-400" /> All caught up!
            </p>
          )}
        </Card>
      );
    }
  