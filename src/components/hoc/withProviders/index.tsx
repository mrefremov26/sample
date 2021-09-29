import React from 'react';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@store/store';
import { historyApp } from '@utils/history';

/**
 * Подключение провайдеров
 * @param App
 */
export const withProviders = (App: React.FC) => {
  return function ProvidersConnector({ ...props }) {
    return (
      <Router history={historyApp}>
        <ReduxProvider store={store}>
          <App {...props} />
        </ReduxProvider>
      </Router>
    );
  };
};
