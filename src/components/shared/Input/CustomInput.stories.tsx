import * as React from 'react';

import { Input } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Shared/Input' };

export const Base = () => {
  const Component = setup(Input);
  return <Component />;
};
