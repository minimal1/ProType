import * as React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem todo />
      ))}
    </div>
  );
};

export default Todolist;
