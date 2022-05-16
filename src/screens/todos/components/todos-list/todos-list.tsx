import { FC } from 'react';
import { VirtualizedList } from 'react-native';
import { Todo } from '@interfaces/todo';
import { TodosListItem } from '../todos-list-item';

export interface TodosListProps {
  todos: Todo[];
  onSelect: (id: number) => void;
}

export const TodosList: FC<TodosListProps> = ({ todos, onSelect }) => {
  return (
    <VirtualizedList<Todo>
      data={todos}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <TodosListItem todo={item} onSelect={onSelect} />
      )}
      getItemCount={() => todos.length}
      getItem={(data: Todo[], index) => data[index]}
    />
  );
};
