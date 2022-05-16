import { act, renderHook } from '@testing-library/react-hooks';
import { useTodoScreen } from './todo-screen.hooks';

const mockUseTodos = jest.fn();

jest.mock('@hooks/todos.hooks', () => ({
  useTodos: () => mockUseTodos(),
}));

describe('useTodoScreen', () => {
  const toggleTodo = jest.fn();
  const updateTodo = jest.fn();
  const deleteTodo = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTodos.mockReturnValue({
      todos: [{ id: 1, text: 'text', isDone: false }],
      toggleTodo,
      updateTodo,
      deleteTodo,
    });
  });

  it('Returns correct data', () => {
    const { result } = renderHook(() => useTodoScreen(1));
    expect(result.current.text).toEqual('text');
    expect(result.current.isDone).toEqual(false);
  });

  it('Updates text', () => {
    const { result } = renderHook(() => useTodoScreen(1));
    act(() => {
      result.current.setText('new text');
    });
    expect(result.current.text).toEqual('new text');
  });

  it('calls saveTodo', () => {
    const { result } = renderHook(() => useTodoScreen(1));
    act(() => {
      result.current.setText('');
    });
    result.current.saveTodo();
    expect(updateTodo).not.toHaveBeenCalled();
    act(() => {
      result.current.setText('text');
    });
    result.current.saveTodo();
    expect(updateTodo).toHaveBeenCalled();
  });

  it('calls deleteTodo', () => {
    const { result } = renderHook(() => useTodoScreen(1));
    result.current.removeTodo();
    expect(deleteTodo).toHaveBeenCalled();
  });

  it('calls toggleTodo', () => {
    const { result } = renderHook(() => useTodoScreen(1));
    result.current.changeTodoStatus();
    expect(toggleTodo).toHaveBeenCalled();
  });
});
