
    import { useState } from 'react';
    import { INITIAL_TODOS } from './data/todos';
    import Sidebar from './components/layout/Sidebar';
    import PageHeader from './components/layout/PageHeader';
    import TodoForm from './components/todo/TodoForm';
    import TodoList from './components/todo/TodoList';
    import ListFooter from './components/todo/ListFooter';

    function App() {
      const [todos, setTodos] = useState(INITIAL_TODOS);
      const [input, setInput] = useState('');
      const [activeTab, setActiveTab] = useState('all');

      const addTodo = () => {
        if (input.trim()) {
          setTodos([{ id: Date.now(), text: input, completed: false, category: "Inbox" }, ...todos]);
          setInput('');
        }
      };

      const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
      };

      const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
      };

      const filteredTodos = todos.filter(todo => {
        if (activeTab === 'active') return !todo.completed;
        if (activeTab === 'completed') return todo.completed;
        return true;
      });

      const activeCount = todos.filter(t => !t.completed).length;
      const completedCount = todos.filter(t => t.completed).length;
      const progressPercentage = todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100);

      return (
        <div className="flex h-screen overflow-hidden bg-background">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            totalCount={todos.length}
            activeCount={activeCount}
            progressPercentage={progressPercentage}
          />

          <main className="flex-1 overflow-y-auto flex justify-center">
            <div className="w-full max-w-[800px] px-8 py-12">
              <PageHeader activeTab={activeTab} activeCount={activeCount} />

              <TodoForm input={input} setInput={setInput} onSubmit={addTodo} />

              <div className="mt-4">
                <TodoList
                  todos={filteredTodos}
                  activeTab={activeTab}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              </div>

              <ListFooter hasCompleted={completedCount > 0} onClearCompleted={clearCompleted} />
            </div>
          </main>
        </div>
      );
    }

    export default App
  