import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selector } from '@store';
import { Paths } from '@constants/paths';

/**
 * Рендерит компонент, если пользователь не аунтифицирован
 * @param Component
 */

export const withoutAuthOnly = (Component: React.FC) => {
  return function WithoutAuthGuard({ ...props }) {
    const { push } = useHistory();
    const isLoggedIn = useSelector(selector.user.isLoggedIn);
    useEffect(() => {
      if (isLoggedIn) push(Paths.main);
    }, [push, isLoggedIn]);

    if (isLoggedIn) return null;
    return <Component {...props} />;
  };
};
