import { Component, ErrorInfo, ReactNode } from 'react';
import { Text } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import styles from './error-boundary.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControlView } from '@components/refresh-control-view';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    crashlytics().log(errorInfo.componentStack);
    crashlytics().recordError(error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <SafeAreaView style={styles.container}>
          <RefreshControlView>
            <Text>Something went wrong</Text>
            <Text>Pull down to see RefreshControl indicator</Text>
          </RefreshControlView>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
