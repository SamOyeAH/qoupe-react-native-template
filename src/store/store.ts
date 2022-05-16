import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { TodosState, todos } from './todos/todos.reducer';

export interface State {
  todos: TodosState;
}

export const store = createStore(
  combineReducers({
    todos,
  }),
  applyMiddleware(thunk),
);
