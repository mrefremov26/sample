import { ToastContent, toast } from 'react-toastify';

export const success = (content: ToastContent): void => {
  if (content) {
    toast.success(content, { className: 'cy-success-toast-notification' });
  } else {
    console.warn('try to call notify without payload');
  }
};

export const error = (content: ToastContent): void => {
  if (content) {
    toast.error(content, { className: 'cy-error-toast-notification' });
  } else {
    console.warn('try to call notify without payload');
  }
};

export const info = (content: ToastContent): void => {
  if (content) {
    toast.info(content, { className: 'cy-info-toast-notification' });
  } else {
    console.warn('try to call notify without payload');
  }
};

/**
 * @summary wrapper around notification
 */
export const notify = {
  success,
  error,
  info,
};
