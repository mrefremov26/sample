import { localStorageKeyLang } from '@constants';

const activeKey = 'activeKey';
const uiMode = 'uiMode';
const currency = 'currency';

export const LS = {
  setAuthTokenTest() {
    localStorage.setItem('token', 'bearer-mock mock123');
  },

  token: {
    get: () => localStorage.getItem('token'),
    set: (token: string) => localStorage.setItem('token', token),
    remove: () => localStorage.removeItem('token'),
  },
  refreshToken: {
    get: () => localStorage.getItem('refreshToken'),
    set: (refreshToken: string) => localStorage.setItem('refreshToken', refreshToken),
    remove: () => localStorage.removeItem('refreshToken'),
  },
  expire: {
    get: () => localStorage.getItem('expire'),
    set: (time: string) => localStorage.setItem('expire', time),
    remove: () => localStorage.removeItem('expire'),
  },
  clearTokens() {
    localStorage.removeItem('expire');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
  },
  activeKey: {
    get: () => localStorage.getItem(activeKey),
    set: (data: string) => localStorage.setItem(activeKey, data),
    delete: () => localStorage.removeItem(activeKey),
  },

  darkMode: {
    get: () => localStorage.getItem(uiMode),
    set: (data: string) => localStorage.setItem(uiMode, data),
  },

  lang: {
    get: () => localStorage.getItem(localStorageKeyLang),
    set: (newLang: string) => localStorage.setItem(localStorageKeyLang, newLang.toLowerCase()),
  },

  currency: {
    get: () => localStorage.getItem(currency),
    set: (newCurrency: string) => localStorage.setItem(currency, newCurrency),
  },
};
