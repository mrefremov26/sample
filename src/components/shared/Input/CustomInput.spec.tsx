import * as React from 'react';
import renderer from 'react-test-renderer';

import { Input } from '.';
import { setup } from '@hoc/setup';

describe('Input renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(Input);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
