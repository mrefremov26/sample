import React, { Suspense } from 'react';

import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { ToastContainer } from 'react-toastify';

import { configs } from '@routes';
import { Spinner } from '@shared/Spinner';

export const App = () => {
  const fallback = <Spinner isOnCenter />;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Name</title>
      </Helmet>
      <ToastContainer />
      <Suspense fallback={fallback}>{renderRoutes(configs)}</Suspense>
    </>
  );
};
