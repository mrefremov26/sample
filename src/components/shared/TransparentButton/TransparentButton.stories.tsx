import * as React from 'react';

import { TransparentButton } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Shared/TransparentButton' };

export const Base = () => {
  const Component = setup(TransparentButton);
  return <Component />;
};
