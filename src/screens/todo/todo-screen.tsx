import { FC, useLayoutEffect } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLocalize } from '@hooks/localize';
import { FullScreenView } from '@components/full-screen-view';
import { useTodoScreen } from './todo-screen.hooks';
import styles from './todo-screen.styles';

export const TodoScreen: FC = () => {
  // TODO: find out how to type properly with @react-navigation
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { params } = useRoute<{ params: { id: number } }>();
  const navigation = useNavigation();
  const { text, isDone, setText, saveTodo, changeTodoStatus, removeTodo } =
    useTodoScreen(params.id);
  const { t } = useLocalize();

  const handleSave = () => {
    saveTodo();
    navigation.goBack();
  };

  const handleToggle = () => {
    changeTodoStatus();
    navigation.goBack();
  };

  const handleDelete = () => {
    removeTodo();
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleSave} title={t('todo:save')} />,
    });
  }, [text]);

  return (
    <FullScreenView style={styles.root}>
      <TextInput
        testID="edit"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttons}>
        <View>
          <Button
            testID="delete"
            color="#CC0000"
            title={t('todo:delete')}
            onPress={handleDelete}
          />
        </View>
        <View>
          <Button
            testID="toggle"
            title={isDone ? t('todo:reopen') : t('todo:complete')}
            onPress={handleToggle}
          />
        </View>
      </View>
    </FullScreenView>
  );
};
