import * as React from 'react';
import { Redirect } from 'react-router';

import { Paths } from '@constants/paths';
import { RootState } from '@interfaces/sharedTypes';
import { useSelector } from 'react-redux';

/**
 * Пропускает на в зависимости от параметра passIfAuth
 * @param passIfAuth
 */
export const withAuthProtection =
  (passIfAuth: boolean) =>
  (Component: React.FC): React.FC => {
    return (props) => {
      const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

      if (!passIfAuth && isLoggedIn) return <Redirect to={Paths.main} />;
      if (passIfAuth && !isLoggedIn) return <Redirect to={Paths.login} />;
      return <Component {...props} />;
    };
  };
