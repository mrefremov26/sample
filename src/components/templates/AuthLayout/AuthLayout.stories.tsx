import * as React from 'react';

import { AuthLayout } from '.';
import { setup } from '@hoc/setup';

export default { title: 'AuthLayout' };

export const Base = () => {
  const Component = setup(AuthLayout);
  return <Component />;
};
