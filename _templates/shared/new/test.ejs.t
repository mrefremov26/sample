---
    to: "<%= `${src}/${name}.spec.tsx` %>"
---

import * as React from 'react';
import renderer from 'react-test-renderer';

import { <%= Name %> } from '.';
import { setup } from '@hoc/setup';

describe('<%= name %> renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(<%= name %>);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
