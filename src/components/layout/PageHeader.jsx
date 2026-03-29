
    export default function PageHeader({ activeTab, activeCount }) {
      const getTitle = () => {
        if (activeTab === 'all') return 'Good Morning';
        if (activeTab === 'active') return "Let\u2019s Get Done";
        return 'Completed Tasks';
      };

      const getSubtitle = () => {
        if (activeTab === 'completed') return "You've crushed these tasks.";
        return `You have ${activeCount} tasks to complete today.`;
      };

      const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });

      return (
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-[36px] font-extrabold tracking-tight leading-tight mb-1 text-foreground">{getTitle()}</h1>
            <p className="text-muted-foreground text-lg">{getSubtitle()}</p>
          </div>

          <div className="hidden sm:block">
            <span className="bg-background border px-4 py-2 rounded-[20px] text-sm font-semibold text-muted-foreground shadow-sm">
              {formattedDate}
            </span>
          </div>
        </header>
      );
    }
  