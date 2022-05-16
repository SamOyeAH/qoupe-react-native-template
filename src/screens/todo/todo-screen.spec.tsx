import { render, fireEvent } from '@testing-library/react-native';
import { TodoScreen } from './todo-screen';

const mockGoBack = jest.fn();
const mockSetOptions = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: () => mockGoBack(),
    setOptions: () => mockSetOptions(),
  }),
  useRoute: () => ({ params: { id: 1 } }),
}));

const mockUseTodoScreen = jest.fn();
jest.mock('./todo-screen.hooks', () => ({
  useTodoScreen: (id: number) => mockUseTodoScreen(id),
}));

describe('TodoScreen', () => {
  const mock = {
    text: 'text',
    isDone: false,
    setText: jest.fn(),
    saveTodo: jest.fn(),
    changeTodoStatus: jest.fn(),
    removeTodo: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Renders incomplete todo', () => {
    mockUseTodoScreen.mockReturnValue(mock);
    const { toJSON } = render(<TodoScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Renders completed todo', () => {
    mockUseTodoScreen.mockReturnValue({
      ...mock,
      isDone: true,
    });
    const { toJSON } = render(<TodoScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Handles todo delete', () => {
    mockUseTodoScreen.mockReturnValue(mock);
    const { getByTestId } = render(<TodoScreen />);

    fireEvent.press(getByTestId('delete'));
    expect(mock.removeTodo).toHaveBeenCalled();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('Handles todo toggle', () => {
    mockUseTodoScreen.mockReturnValue(mock);
    const { getByTestId } = render(<TodoScreen />);

    fireEvent.press(getByTestId('toggle'));
    expect(mock.changeTodoStatus).toHaveBeenCalled();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('Handles text change', () => {
    mockUseTodoScreen.mockReturnValue(mock);
    const { getByTestId } = render(<TodoScreen />);

    fireEvent.changeText(getByTestId('edit'), 'new text');
    expect(mock.setText).toHaveBeenCalledWith('new text');
  });
});
