import React from 'react';
import styled from 'styled-components';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface IProps {
  todo: Todo;
  onChange: ({ id, text, done }: Todo) => void;
}

const TodoItem: React.FC<IProps> = ({ todo, onChange }: IProps) => {
  const handleChange = () => {
    console.log('here', { id: todo.id, text: todo.text, done: !todo.done });

    onChange({ id: todo.id, text: todo.text, done: !todo.done });
  };
  return (
    <TodoContainer>
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span>{todo.text}</span>
    </TodoContainer>
  );
};

const TodoContainer = styled.div``;

export default TodoItem;
