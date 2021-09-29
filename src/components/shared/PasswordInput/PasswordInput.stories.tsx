import * as React from 'react';

import { PasswordInput } from '.';
import { setup } from '@hoc/setup';

export default { title: 'Shared/PasswordInput' };

export const Base = () => {
  const Component = setup(PasswordInput);
  return <Component />;
};
