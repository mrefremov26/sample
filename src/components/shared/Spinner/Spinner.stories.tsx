import * as React from 'react';

import { Spinner } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Shared/Spinner' };

export const Base = () => {
  const Component = setup(Spinner);
  return <Component />;
};
