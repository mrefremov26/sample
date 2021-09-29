---
    to: "<%= `${src}/containers/${name}Container/index.tsx` %>"
---

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { <%= name %> } from '@/components/modals/components/<%= name %>';
import { RootState } from '@/utils/sharedTypes';
import { close<%= name %> } from '@/store/modals/actions';

export const <%= name %>Container = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.modals..isOpen);
  const handleClose = () => dispatch(close<%= name %>());

return <<%= name %> isOpen={isOpen} onClose={handleClose} />;
};
