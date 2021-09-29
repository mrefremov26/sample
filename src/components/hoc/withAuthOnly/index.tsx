import * as React from 'react';
import { useSelector } from 'react-redux';

import { selector } from '@store';
import { Spinner } from '@shared/Spinner';

/**
 * Рендерит компонент, если пользователь аунтифицирован
 * @param Component
 */
export const withAuthOnly = (Component: React.FC) => {
  return function WithAuthGuard({ ...props }) {
    const isLoggedIn = useSelector(selector.user.isLoggedIn);
    const isLoading = useSelector(selector.load.user);
    if (!isLoggedIn) {
      if (isLoading) return <Spinner isOnCenter />;
      return null;
    }
    return <Component {...props} />;
  };
};
