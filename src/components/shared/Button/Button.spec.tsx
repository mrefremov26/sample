import * as React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '.';
import { setup } from '@hoc/setup';

describe('Button renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(Button);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
