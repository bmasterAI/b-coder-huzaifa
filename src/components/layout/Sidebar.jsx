
    import { CheckCircle2, ListTodo, Calendar } from 'lucide-react';
    import ProgressCard from '../ui/ProgressCard';
    import Button from '../ui/Button';
    import Badge from '../ui/Badge';

    export default function Sidebar({ activeTab, setActiveTab, totalCount, activeCount, progressPercentage }) {
      return (
        <aside className="w-[280px] bg-card text-card-foreground border-r border-border flex flex-col flex-shrink-0 h-screen">
          <div className="h-[72px] flex items-center px-6 gap-3 border-b border-border">
            <div className="bg-primary rounded-[10px] w-9 h-9 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-primary-foreground" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">TaskMaster</h2>
          </div>

          <nav className="p-6 pt-4 flex flex-col gap-2 flex-1">
            <Button
              variant={activeTab === 'all' ? 'secondary' : 'ghost'}
              className="justify-start gap-3"
              onClick={() => setActiveTab('all')}
            >
              <ListTodo size={18} />
              <span className="flex-1 text-left">All Tasks</span>
              <Badge variant="outline">{totalCount}</Badge>
            </Button>

            <Button
              variant={activeTab === 'active' ? 'secondary' : 'ghost'}
              className="justify-start gap-3"
              onClick={() => setActiveTab('active')}
            >
              <Calendar size={18} />
              <span className="flex-1 text-left">Active</span>
              <Badge>{activeCount}</Badge>
            </Button>

            <Button
              variant={activeTab === 'completed' ? 'secondary' : 'ghost'}
              className="justify-start gap-3"
              onClick={() => setActiveTab('completed')}
            >
              <CheckCircle2 size={18} />
              <span className="flex-1 text-left">Completed</span>
            </Button>
          </nav>

          <div className="p-6 border-t border-border">
            <ProgressCard percentage={progressPercentage} showComplete={totalCount > 0} />
          </div>
        </aside>
      );
    }
  