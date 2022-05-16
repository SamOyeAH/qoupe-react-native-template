import { FC } from 'react';
import { Button, Text, View, ViewProps } from 'react-native';
import { useAuth } from '@auth/hooks';
import styles from './login.styles';
import { useLocalize } from '@hooks/localize';

interface Props extends ViewProps {
  isLoggedIn: boolean;
}

export const Login: FC<Props> = ({ isLoggedIn, style }) => {
  const { signIn, signOut, isLoading, error } = useAuth();
  const { t } = useLocalize();

  if (isLoading) {
    return (
      <View style={style}>
        <Text style={styles.loading}>{t('loading')}...</Text>
      </View>
    );
  }

  return (
    <View style={style}>
      {error && <Text style={styles.error}>{error}</Text>}
      {isLoggedIn ? (
        <Button title={t('button.signOut')} onPress={signOut} />
      ) : (
        <Button title={t('button.signIn')} onPress={signIn} />
      )}
    </View>
  );
};
