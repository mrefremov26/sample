---
    to: "<%= renderAtomsAndStorybook ? `${src}/${name}.stories.tsx` : null %>"
---

 import * as React from 'react';

 import { <%= name %> } from '.';
 import { setup } from '@hoc/setup';

 export default { title: 'Features/<%= featureName %>/<%= name %>' };

 export const Base = () => {
   const Component = setup(<%= name %>);
   return <Component />;
};
