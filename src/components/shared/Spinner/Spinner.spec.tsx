import * as React from 'react';
import renderer from 'react-test-renderer';

import { Spinner } from '.';
import { setup } from '@hoc/setup';

describe('Spinner renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(Spinner);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
