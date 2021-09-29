import * as React from 'react';

import { Header } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Header' };

export const Base = () => {
  const Component = setup(Header);
  return <Component />;
};
