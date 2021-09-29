---
    to: "<%= `${src}/${name}.stories.tsx` %>"
---

 import * as React from 'react';

 import <%= name %> from '.';
 import { setup } from '@hoc/setup';

 export default { title: 'Pages/<%= name %>' };

 export const Base = () => {
   const Component = setup(<%= name %>);
   return <Component />;
};
