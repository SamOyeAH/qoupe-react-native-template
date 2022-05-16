import { FC } from 'react';
import { Provider } from 'react-redux';
import { Localization } from '@localization/context';
import { ErrorBoundary } from '@components/error-boundary';
import { AuthManagerProvider } from '@auth/auth-manager-provider';
import { EnvironmentProvider } from './config/environment.context';
import { store } from './store';
import { Routes } from './routes';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <EnvironmentProvider>
          <AuthManagerProvider>
            <Localization.Provider>
              <Routes />
            </Localization.Provider>
          </AuthManagerProvider>
        </EnvironmentProvider>
      </Provider>
    </ErrorBoundary>
  );
};
