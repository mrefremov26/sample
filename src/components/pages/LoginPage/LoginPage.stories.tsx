import * as React from 'react';

import LoginPage from '.';
import { setup } from '@hoc/setup';

export default { title: 'Pages/LoginPage' };

export const Base = () => {
  const Component = setup(LoginPage);
  return <Component />;
};
