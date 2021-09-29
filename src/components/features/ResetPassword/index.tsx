import React, { useCallback, useMemo, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '@shared/Button';
import { Input } from '@shared/Input';

import { Paths } from '@constants';
import { actions } from '@store';
import { notify, patterns } from '@utils';

import style from './style.module.css';

interface IFormPayload {
  email: string;
}

export const ResetPassword = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const [isLoad, setIsLoad] = useState(false);
  const { register, handleSubmit, formState } = useForm<IFormPayload>({ mode: 'onChange' });

  const resetPasswordLinkUser = useCallback(
    async ({ email }: IFormPayload) => {
      try {
        setIsLoad(true);
        await new Promise((r) => {
          setTimeout(r, 1500);
        });
        dispatch(actions.user.user_set_supposedEmail(email));
        push(Paths.main);
        notify.info('reset password');
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoad(false);
      }
    },
    [dispatch, push],
  );

  const onSubmit = useCallback(resetPasswordLinkUser, [resetPasswordLinkUser]);
  const { isValid, dirtyFields } = formState;
  const isDisabled = !(Object.keys(dirtyFields).length === 1 && isValid);

  const emailOptions = useMemo(
    () => ({
      pattern: patterns.email,
      required: true,
    }),
    [],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Reset password</h2>
      <Input label="email" {...register('email', emailOptions)} />
      <div className={style.buttons}>
        <Link to={Paths.login}>Back to Login</Link>
        <Button disabled={isDisabled} isLoading={isLoad} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};
