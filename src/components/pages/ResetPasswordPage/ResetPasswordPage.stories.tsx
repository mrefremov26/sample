import * as React from 'react';

import ResetPasswordPage from '.';
import { setup } from '@hoc/setup';

export default { title: 'Pages/ResetPasswordPage' };

export const Base = () => {
  const Component = setup(ResetPasswordPage);
  return <Component />;
};
