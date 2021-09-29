import * as React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

/**
 * Подключает модальные окна к дереву
 * @param App
 */
export const withModals = (App: React.FC) => {
  return function ModalsConnector({ ...props }) {
    return (
      <>
        <App {...props} />
      </>
    );
  };
};
