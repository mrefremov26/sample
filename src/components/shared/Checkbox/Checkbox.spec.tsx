import * as React from 'react';
import renderer from 'react-test-renderer';

import { Checkbox } from '.';
import { setup } from '@hoc/setup';

describe('Checkbox renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(Checkbox);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
