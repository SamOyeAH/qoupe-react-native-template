import { FC, useLayoutEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTodos } from '@hooks/todos.hooks';
import { useLocalize } from '@hooks/localize';
import { FullScreenView } from '@components/full-screen-view';
import { Screens } from '@enums/screens.enum';
import { TodosList } from './components/todos-list';

export const TodosScreen: FC = () => {
  const { todos } = useTodos();
  const navigation = useNavigation();
  const { t } = useLocalize();

  const handleNewPress = () => {
    // TODO: find out how to type properly with @react-navigation
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.navigate(Screens.TODOS_NEW);
  };

  const handleSelect = (id: number) => {
    // TODO: find out how to type properly with @react-navigation
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.navigate(Screens.TODOS_ITEM, { id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleNewPress} title={t('todo:new')} />
      ),
    });
  }, []);

  return (
    <FullScreenView testID="todo-screen">
      <TodosList todos={[...todos]} onSelect={handleSelect} />
    </FullScreenView>
  );
};
