import { PayloadAction, createReducer } from '@reduxjs/toolkit';

import { init_user_success, user_set_supposedEmail } from '@store/user/actions';

import type { IUserMe } from '@interfaces';

type init = {
  isLoggedIn: boolean;
  supposedEmail: null | string;
  userData: IUserMe | null;
};

const initialState = {
  isLoggedIn: false,
  supposedEmail: null,

  userData: null,
} as init;

export const userReducer = createReducer(initialState, {
  [init_user_success.type]: (state, action: PayloadAction<IUserMe>) => {
    state.isLoggedIn = true;

    state.userData = action.payload;
  },
  [user_set_supposedEmail.type]: (store, action: PayloadAction<string | null>) => {
    store.supposedEmail = action.payload;
  },
});
