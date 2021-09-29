import { RootState } from '@interfaces/sharedTypes';

const isLoggedIn = (store: RootState) => store.user.isLoggedIn;
const data = (store: RootState) => store.user.userData;

const supposedEmail = (store: RootState) => store.user.supposedEmail;

export const userSelector = {
  isLoggedIn,
  data,
  supposedEmail,
};
