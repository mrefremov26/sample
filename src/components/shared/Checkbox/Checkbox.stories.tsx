import * as React from 'react';

import { Checkbox } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Shared/Checkbox' };

export const Base = () => {
  const Component = setup(Checkbox);
  return <Component />;
};
