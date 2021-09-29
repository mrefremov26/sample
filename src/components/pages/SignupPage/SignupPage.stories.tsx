import * as React from 'react';

import SignupPage from '.';
import { setup } from '@hoc/setup';

export default { title: 'Pages/SignupPage' };

export const Base = () => {
  const Component = setup(SignupPage);
  return <Component />;
};
