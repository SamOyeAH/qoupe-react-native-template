import crashlytics from '@react-native-firebase/crashlytics';
import { Button, View } from 'react-native';
import styles from './crash-app-button.styles';

export const CrashAppButton = () => {
  const handleCrashApp = () => {
    crashlytics().recordError(new Error('Crash by click on the crush button'));
  };

  return (
    <View style={styles.container}>
      <Button title="Crash App" onPress={handleCrashApp} />
    </View>
  );
};
