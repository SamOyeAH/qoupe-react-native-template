import { FC, useMemo } from 'react';
import { Provider as AuthProvider } from '@auth/context';
import { useEnvironment } from '../config/environment.context';
import { createAuthManager } from '@auth/create-auth-manager';

export const AuthManagerProvider: FC = ({ children }) => {
  const {
    config: { azureClientId, azureTenantId },
  } = useEnvironment();
  const authManager = useMemo(() => {
    return createAuthManager({
      issuer: `https://login.microsoftonline.com/${azureTenantId}/v2.0`,
      clientId: azureClientId,
      redirectUrl: 'rtprn://react-native-template/',
      scopes: ['openid', 'offline_access', 'profile'],
      additionalParameters: { prompt: 'select_account' },
    });
  }, []);

  return <AuthProvider AuthManager={authManager}>{children}</AuthProvider>;
};
