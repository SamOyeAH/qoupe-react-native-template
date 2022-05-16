import { useState } from 'react';
import { useTodos } from '@hooks/todos.hooks';
import { Todo } from '@interfaces/todo';

export interface UseTodoScreen {
  text: string;
  setText: (text: string) => void;
  isDone: boolean;
  changeTodoStatus: () => void;
  saveTodo: () => void;
  removeTodo: () => void;
}

export const useTodoScreen = (todoId: number): UseTodoScreen => {
  const { todos, toggleTodo, updateTodo, deleteTodo } = useTodos();
  const todo = todos.find(({ id }) => id === todoId) as Todo;
  const [text, setText] = useState(todo.text);

  const saveTodo = () => {
    if (text.length) {
      updateTodo(todoId, text);
    }
  };

  const changeTodoStatus = () => {
    toggleTodo(todoId);
  };

  const removeTodo = () => {
    deleteTodo(todoId);
  };

  return {
    text,
    setText,
    isDone: todo.isDone,
    saveTodo,
    changeTodoStatus,
    removeTodo,
  };
};
