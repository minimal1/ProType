import React from 'react';
import styled from 'styled-components';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const TodoItem = (todo: Todo) => (
  <TodoContainer>
    <span>{todo.text}</span>
  </TodoContainer>
);

const TodoContainer = styled.div``;

export default TodoItem;
