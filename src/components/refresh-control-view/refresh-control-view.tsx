import { FC, useCallback, useState } from 'react';
import { RefreshControl, ScrollView, ViewProps } from 'react-native';
import styles from './refresh-control-view.styles';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const RefreshControlView: FC<ViewProps> = ({ children, style }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollView, style]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};
