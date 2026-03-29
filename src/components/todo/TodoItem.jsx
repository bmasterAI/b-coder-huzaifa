
    import { Trash2 } from 'lucide-react';
    import Checkbox from '../ui/Checkbox';
    import Button from '../ui/Button';
    import Badge from '../ui/Badge';

    export default function TodoItem({ todo, onToggle, onDelete }) {
      return (
        <div className={`group flex items-center gap-4 p-5 bg-card text-card-foreground rounded-xl shadow-sm border transition-all hover:shadow-md hover:border-border animate-in fade-in slide-in-from-bottom-2 duration-300 ${todo.completed ? 'opacity-60 bg-transparent border-dashed' : ''}`}>
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => onToggle(todo.id)}
            aria-label="Toggle completion"
          />

          <div className="flex-1 flex flex-col gap-1 overflow-hidden">
            <span className={`text-[17px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis transition-all ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
              {todo.text}
            </span>
            {todo.category && (
              <Badge variant="secondary" className="w-fit">{todo.category}</Badge>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    }
  