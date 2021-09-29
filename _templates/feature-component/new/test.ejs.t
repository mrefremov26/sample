---
    to: "<%= renderTests ? `${src}/${name}.spec.tsx` : null %>"
---

import * as React from 'react';
import renderer from 'react-test-renderer';

import {<%= name %> } from '.';
import { setup } from '@hoc/setup';

describe('<%= name %> renders correctly', () => {
  it('snapshot', () => {
    const Component = setup(<%= name %>);
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
