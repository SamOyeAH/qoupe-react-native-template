import {
  AuthConfiguration as AuthConfigurationType,
  authorize,
  logout,
  refresh,
} from 'react-native-app-auth';
import dayjs from 'dayjs';
import { Auth, Errors } from '@auth/enums';
import { UNIT, DURATION } from '@auth/constants';
import {
  setAuthElementsToStorage,
  removeAuthElementsFromStorage,
  createExpireDate,
  getValueFromStorage,
} from './auth.helpers';

export type AuthConfiguration = AuthConfigurationType;
export type AuthManagerType = ReturnType<typeof createAuthManager>;

export function createAuthManager(config: AuthConfiguration) {
  return {
    signIn: async () => {
      const result = await authorize(config);

      setAuthElementsToStorage({
        [Auth.ACCESS_TOKEN]: result.accessToken,
        [Auth.REFRESH_TOKEN]: result.refreshToken,
        [Auth.ID_TOKEN]: result.idToken,
        [Auth.EXPIRE_TIME]: createExpireDate(DURATION, UNIT),
      });
    },
    signOut: async () => {
      const idToken = await getValueFromStorage(Auth.ID_TOKEN);

      await removeAuthElementsFromStorage([
        Auth.ACCESS_TOKEN,
        Auth.REFRESH_TOKEN,
        Auth.EXPIRE_TIME,
      ]);

      try {
        await logout(config, {
          idToken: idToken ?? '',
          postLogoutRedirectUrl: config.redirectUrl,
        });
      } catch (err) {
        /**
         * This is a workaround of the logout flow. A WebView can't be closed automatically by
         * the library 'react-native-app-auth'. The issue is here: https://github.com/FormidableLabs/react-native-app-auth/issues/715
         * So, if a closing from the logout flow error happens that will be ignored.
         *
         * KNOWN ISSUE: If a user clicks on a close button before a success logout screen this error will be ignored too.
         */
        if (
          err instanceof Error &&
          err.message !== Errors.androidLogout &&
          err.message !== Errors.iosLogout
        ) {
          throw new Error(err.message);
        }
      }
    },
    getAccessToken: async () => {
      const expire = await getValueFromStorage(Auth.EXPIRE_TIME);

      if (expire) {
        const now = dayjs();

        if (now.isSame(expire) || now.isAfter(expire)) {
          try {
            const refreshToken = await getValueFromStorage(Auth.REFRESH_TOKEN);
            const result = await refresh(config, {
              refreshToken: refreshToken ?? '',
            });

            setAuthElementsToStorage({
              [Auth.ACCESS_TOKEN]: result.accessToken,
              [Auth.REFRESH_TOKEN]: result.refreshToken ?? '',
              [Auth.EXPIRE_TIME]: createExpireDate(DURATION, UNIT),
            });

            return result.accessToken;
          } catch {
            return null;
          }
        }

        const accessToken = await getValueFromStorage(Auth.ACCESS_TOKEN);

        return accessToken;
      }

      return null;
    },
  };
}
