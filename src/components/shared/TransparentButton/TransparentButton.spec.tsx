import * as React from 'react';
import renderer from 'react-test-renderer';

import { TransparentButton } from '.';
import { setup } from '@hoc/setup';

describe('TransparentButton renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(TransparentButton);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
