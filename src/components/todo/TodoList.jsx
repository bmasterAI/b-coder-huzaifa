
    import TodoItem from './TodoItem';
    import EmptyState from './EmptyState';

    export default function TodoList({ todos, activeTab, onToggle, onDelete }) {
      if (todos.length === 0) {
        return <EmptyState activeTab={activeTab} />;
      }

      return (
        <div className="flex flex-col gap-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      );
    }
  