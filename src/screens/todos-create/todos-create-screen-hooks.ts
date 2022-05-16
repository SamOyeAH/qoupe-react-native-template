import { useState } from 'react';
import { useTodos } from '@hooks/todos.hooks';

export interface UseTodosCreateScreen {
  value: string;
  setValue: (text: string) => void;
  saveTodo: () => void;
}

export const useTodosCreateScreen = (): UseTodosCreateScreen => {
  const [value, setValue] = useState('');
  const { createTodo } = useTodos();
  const saveTodo = () => {
    if (value.length) {
      createTodo(value);
    }
  };

  return {
    value,
    setValue,
    saveTodo,
  };
};
