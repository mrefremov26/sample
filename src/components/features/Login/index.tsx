import React, { useCallback, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { PasswordInput } from '@shared/PasswordInput';

import { actions, selector } from '@store';
import { Paths } from '@constants';
import { notify } from '@utils';

import { LoginEmailOptions as emailOptions, LoginPasswordOptions as passwordOptions } from '@features/Login/configs';

import style from './style.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const supposedEmail = useSelector(selector.user.supposedEmail);

  const { register, handleSubmit, formState, setValue } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (supposedEmail) {
      setValue('email', supposedEmail);
    }
    dispatch(actions.user.user_set_supposedEmail(null));
  }, [dispatch, setValue, supposedEmail]);

  const [isLoading, setIsLoading] = useState(false);

  const loginUser = useCallback(async () => {
    setIsLoading(true);
    await new Promise((r) => {
      setTimeout(r, 1500);
    });
    setIsLoading(false);
    notify.success('success login');
  }, []);

  const { isValid } = formState;
  const isDisabled = !isValid;

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)} className="form">
        <h2>Login</h2>
        <Input autoComplete="email" autoFocus label="Email" {...register('email', emailOptions)} />
        <p className={style.password}>
          <span>Password</span>
          <Link to={Paths.resetPassword}>Forgot password?</Link>
        </p>
        <PasswordInput autoComplete="current-password" {...register('password', passwordOptions)} />
        <Button isLoading={isLoading} type="submit" disabled={isDisabled}>
          Login
        </Button>
      </form>
    </>
  );
};
