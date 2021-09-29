---
    to: "<%= `${src}/index.tsx` %>"
---

import * as React from 'react';

import style from './style.module.css'

const <%= name %> = () => {
  return <div />;
};

export default <%= name %>  as React.FC;