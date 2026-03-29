
    import Button from '../ui/Button';

    export default function ListFooter({ hasCompleted, onClearCompleted }) {
      if (!hasCompleted) return null;

      return (
        <div className="mt-8 pt-4 border-t border-border flex justify-center">
          <Button
            variant="link"
            className="text-muted-foreground hover:text-destructive"
            onClick={onClearCompleted}
          >
            Clear completed tasks
          </Button>
        </div>
      );
    }
  