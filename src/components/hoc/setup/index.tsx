import React from 'react';

import { withAuthChecker } from '@hoc/withAuthChecker';
import { withModals } from '@hoc/withModals';
import { withProviders } from '@hoc/withProviders';
import { withScrollReset } from '@hoc/withScrollReset';

export const setup = (Component: React.FC<any>): any => {
  return compose(Component, React.memo, withScrollReset, withAuthChecker, withModals, withProviders);
};

function compose(Component: React.FC, ...functions: Array<(...args: any[]) => React.FC>) {
  return functions.reduce((acc: React.FC, f: (...args: any[]) => React.FC) => f(acc), Component);
}
