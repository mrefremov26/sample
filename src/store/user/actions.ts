import { createAction } from '@reduxjs/toolkit';

import { IError, IUserMe } from '@interfaces';

export const init_user_start = createAction('USER_INIT_START');
export const init_user_success = createAction<IUserMe>('USER_INIT_SUCCESS');
export const init_user_fail = createAction<IError>('USER_INIT_FAIL');

export const user_set_supposedEmail = createAction<string | null>('USER_SET_SUPPOSED_EMAIL');

export const userActions = {
  init_user_start,
  init_user_success,
  init_user_fail,

  user_set_supposedEmail,
};
