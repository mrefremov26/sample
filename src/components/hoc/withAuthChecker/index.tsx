import * as React from 'react';
// import { useDispatch } from 'react-redux';

// import LS from '@utils/LS';

/**
 * Проверяет наличие токена и логинит
 * @param Component
 */
export const withAuthChecker = (Component: React.FC) => {
  return function WithAuthChecker({ ...props }: any) {
    // const dispatch = useDispatch();
    // const token = LS.getAuthToken();
    // if (token) dispatch(login());
    return <Component {...props} />;
  };
};
