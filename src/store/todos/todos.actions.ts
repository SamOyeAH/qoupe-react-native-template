import { Action } from 'redux';
import {
  TODOS_CREATE,
  TODOS_UPDATE,
  TODOS_TOGGLE,
  TODOS_DELETE,
} from './todos.constants';

export interface TodoCreateAction extends Action<string> {
  payload: string;
}
export const createTodo = (text: string): TodoCreateAction => ({
  type: TODOS_CREATE,
  payload: text,
});

export interface TodoUpdateAction extends Action<string> {
  payload: {
    id: number;
    text: string;
  };
}
export const updateTodo = (id: number, text: string): TodoUpdateAction => ({
  type: TODOS_UPDATE,
  payload: {
    id,
    text,
  },
});

export interface TodoToggleAction extends Action<string> {
  payload: number;
}
export const toggleTodo = (id: number): TodoToggleAction => ({
  type: TODOS_TOGGLE,
  payload: id,
});

export interface TodoDeleteAction extends Action<string> {
  payload: number;
}
export const deleteTodo = (id: number): TodoDeleteAction => ({
  type: TODOS_DELETE,
  payload: id,
});
