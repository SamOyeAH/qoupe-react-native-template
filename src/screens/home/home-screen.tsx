import { FC } from 'react';
import { Text } from 'react-native';
import dayjs from 'dayjs';
import { useLocalize } from '@hooks/localize';
import { useHomeScreen } from '@screens/home/home-screen.hooks';
import { FullScreenView } from '@components/full-screen-view';
import { CrashAppButton } from '@components/crash-app-button';
import { Login } from '@components/login';
import styles from './home-screen.styles';

export const HomeScreen: FC = () => {
  const { openTodosCount, completedTodosCount, isLoggedIn } = useHomeScreen();
  const { t, tJSX } = useLocalize();

  return (
    <FullScreenView style={styles.root} testID="home-screen">
      <Text style={styles.statusWrapper}>
        {tJSX(`home:status.${isLoggedIn ? 'signedIn' : 'signedOut'}`, {
          components: {
            status: ({ children }) => (
              <Text style={styles.status}>{children}</Text>
            ),
          },
        })}
      </Text>
      <Text>
        {t('home:today', { params: { date: dayjs().format('YYYY/MM/DD') } })}
      </Text>
      <Text>
        {tJSX('home:welcome', {
          components: {
            appName: ({ children }) => (
              <Text style={styles.welcomeAppName}>{children}</Text>
            ),
          },
        })}
      </Text>
      <Text>
        {t('home:todos', {
          params: { open: openTodosCount, completed: completedTodosCount },
        })}
      </Text>
      <Login style={styles.login} isLoggedIn={isLoggedIn} />
      <CrashAppButton />
    </FullScreenView>
  );
};
