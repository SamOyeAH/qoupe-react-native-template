import { AuthContext } from '@auth/context';
import { useContext } from 'react';

export const useCheckLogin = (): boolean => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn;
};
