
    import { Plus } from 'lucide-react';
    import Input from '../ui/Input';
    import Button from '../ui/Button';

    export default function TodoForm({ input, setInput, onSubmit }) {
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
      };

      return (
        <form className="flex gap-4 mb-10 sticky top-0 z-10 bg-background py-4" onSubmit={handleSubmit}>
          <div className="flex-1 relative flex items-center">
            <Plus size={18} className="absolute left-4 text-muted-foreground" />
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done? Press Enter to add."
              className="pl-10"
            />
          </div>
          <Button type="submit" className="font-semibold" disabled={!input.trim()}>
            Add Task
          </Button>
        </form>
      );
    }
  