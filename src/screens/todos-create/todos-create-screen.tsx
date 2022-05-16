import { FC, useLayoutEffect } from 'react';
import { Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FullScreenView } from '@components/full-screen-view';
import { useLocalize } from '@hooks/localize';
import { useTodosCreateScreen } from './todos-create-screen-hooks';
import styles from './todos-create-screen.styles';

export const TodosCreateScreen: FC = () => {
  const { value, setValue, saveTodo } = useTodosCreateScreen();
  const navigation = useNavigation();
  const { t } = useLocalize();

  const handleSave = () => {
    saveTodo();
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handleSave} title={t('todo:save')} />,
    });
  }, [value]);

  return (
    <FullScreenView style={styles.root}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter todo"
      />
    </FullScreenView>
  );
};
