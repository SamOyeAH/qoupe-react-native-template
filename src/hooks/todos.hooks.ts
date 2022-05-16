import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '@interfaces/todo';
import { State } from '@store/store';
import {
  createTodo as createTodoAction,
  updateTodo as updateTodoAction,
  toggleTodo as toggleTodoAction,
  deleteTodo as deleteTodoAction,
} from '@store/todos/todos.actions';

export interface UseTodos {
  todos: Todo[];
  createTodo: (text: string) => void;
  updateTodo: (id: number, text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodos = (): UseTodos => {
  const dispatch = useDispatch();
  const todos = useSelector<State, Todo[]>(state => state.todos.items);

  const createTodo = (text: string) => {
    dispatch(createTodoAction(text));
  };
  const updateTodo = (id: number, text: string) => {
    dispatch(updateTodoAction(id, text));
  };
  const toggleTodo = (id: number) => {
    dispatch(toggleTodoAction(id));
  };
  const deleteTodo = (id: number) => {
    dispatch(deleteTodoAction(id));
  };

  return {
    todos,
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
  };
};
