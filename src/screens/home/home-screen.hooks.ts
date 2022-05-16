import { useCheckLogin } from '@auth/hooks';
import { useTodos } from '@hooks/todos.hooks';

export interface UseHomeScreen {
  openTodosCount: number;
  completedTodosCount: number;
  isLoggedIn: boolean;
}

export const useHomeScreen = (): UseHomeScreen => {
  const { todos } = useTodos();
  const isLoggedIn = useCheckLogin();

  const completedTodosCount = todos.filter(({ isDone }) => isDone).length;

  const openTodosCount = todos.length - completedTodosCount;

  return {
    openTodosCount,
    completedTodosCount,
    isLoggedIn,
  };
};
