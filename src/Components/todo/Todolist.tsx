import * as React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface IProps {
  _: null;
}

const Todolist: React.FC<IProps> = () => {
  // const [todos, setTodos] = React.useState(new Map<string, Todo>());
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [text, setText] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeTodo = ({ id, text, done }: Todo) => {
    setTodos(
      todos.map(todo => {
        return todo.id === id ? { id, text, done } : todo;
      }),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };
  console.log('render');

  // const todosUI = [];

  // todos.forEach((v, k) =>
  //   // todosUI.push(<TodoItem key={k} todo={v} onChange={changeTodo} />),
  //   todosUI.push(
  //     <div key={k}>
  //       <input
  //         type="checkbox"
  //         checked={v.done}
  //         onChange={() => changeTodo({ id: v.id, text: v.text, done: !v.done })}
  //       />
  //       <span>{v.text}</span>
  //     </div>,
  //   ),
  // );
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <br />
      {/* {Array.from(todos, ([key, todo]) => {
        console.log('Key:', key, 'todo:', { ...todo });
        return <TodoItem key={key} todo={todo} onChange={changeTodo} />;
      })} */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onChange={changeTodo} />
      ))}
      {/* {todosUI[0]} */}
    </div>
  );
};

export default Todolist;
