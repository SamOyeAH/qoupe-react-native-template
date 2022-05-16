import { Todo } from '@interfaces/todo';
import {
  TodoCreateAction,
  TodoUpdateAction,
  TodoToggleAction,
  TodoDeleteAction,
} from './todos.actions';
import {
  TODOS_CREATE,
  TODOS_UPDATE,
  TODOS_TOGGLE,
  TODOS_DELETE,
} from './todos.constants';

export interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [
    { id: 1, text: 'Buy groceries', isDone: false },
    { id: 2, text: 'Morning coffee', isDone: true },
    { id: 3, text: 'Sprint stories', isDone: false },
  ],
};

const createTodo = (
  state: TodosState,
  action: TodoCreateAction,
): TodosState => {
  const maxId = Math.max(...state.items.map(({ id }) => id));
  return {
    items: [
      ...state.items,
      {
        id: maxId + 1,
        text: action.payload,
        isDone: false,
      },
    ],
  };
};

const updateTodo = (
  state: TodosState,
  action: TodoUpdateAction,
): TodosState => {
  return {
    items: state.items.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          id: todo.id,
          isDone: todo.isDone,
          text: action.payload.text,
        };
      }
      return todo;
    }),
  };
};

const toggleTodo = (
  state: TodosState,
  action: TodoToggleAction,
): TodosState => {
  return {
    items: state.items.map(todo => {
      if (todo.id === action.payload) {
        return {
          id: todo.id,
          isDone: !todo.isDone,
          text: todo.text,
        };
      }
      return todo;
    }),
  };
};

const deleteTodo = (
  state: TodosState,
  action: TodoDeleteAction,
): TodosState => {
  return {
    items: state.items.filter(({ id }) => id !== action.payload),
  };
};

export const todos = (
  state: TodosState,
  action:
    | TodoCreateAction
    | TodoUpdateAction
    | TodoToggleAction
    | TodoDeleteAction,
): TodosState => {
  const currentState = state || initialState;
  switch (action.type) {
    case TODOS_CREATE:
      return createTodo(currentState, action as TodoCreateAction);
    case TODOS_UPDATE:
      return updateTodo(currentState, action as TodoUpdateAction);
    case TODOS_TOGGLE:
      return toggleTodo(currentState, action as TodoToggleAction);
    case TODOS_DELETE:
      return deleteTodo(currentState, action as TodoDeleteAction);
    default:
      return currentState;
  }
};
