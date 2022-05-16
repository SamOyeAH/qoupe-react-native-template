import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import { Todo } from '@interfaces/todo';
import styles from './todos-list-item.styles';

export interface TodosListItemProps {
  todo: Todo;
  onSelect: (id: number) => void;
}

export const TodosListItem: FC<TodosListItemProps> = ({ todo, onSelect }) => {
  const handlePress = async () => {
    await analytics().logEvent('todo_click', { id: todo.id });
    onSelect(todo.id);
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      <Text style={todo.isDone && styles.completedTodo}>{todo.text}</Text>
    </TouchableOpacity>
  );
};
