import * as React from 'react';
import renderer from 'react-test-renderer';

import { PasswordInput } from '.';
import { setup } from '@hoc/setup';

describe('PasswordInput renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(PasswordInput);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
