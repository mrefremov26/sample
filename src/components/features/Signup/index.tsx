import React, { useCallback, useMemo, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Button } from '@shared/Button';
import { Checkbox } from '@shared/Checkbox';
import { Input } from '@shared/Input';

import { Paths } from '@constants';
import { patterns, notify } from '@utils';

import style from './style.module.css';

export const Signup = () => {
  const {
    location: { search },
  } = useHistory();
  const refLink = getReg(search);
  const [isLoad, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
  const authUser = useCallback(async () => {
    console.log('refLink', refLink);
    setIsLoading(true);
    await new Promise((r) => {
      setTimeout(r, 1500);
    });
    setIsLoading(false);
    notify.success('success signup');
  }, [refLink]);

  const { isValid, dirtyFields } = formState;
  const isDisabled = !(Object.keys(dirtyFields).length === 2 && isValid);

  const onSubmit = useCallback(authUser, [authUser]);
  const emailOptions = useMemo(
    () => ({
      require: true,
      minLength: 3,
      pattern: patterns.email,
    }),
    [],
  );

  const isAgreeOptions = useMemo(
    () => ({
      validate: (value: boolean) => value,
    }),
    [],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Sign up</h2>
      <Input autoComplete="new-password" label="email" {...register('email', emailOptions)} />
      <div className={style.checkbox}>
        <Checkbox {...register('isAgree', isAgreeOptions)}>
          I agree with&nbsp; <a href={Paths.main}> terms</a>
        </Checkbox>
      </div>
      <Button type="submit" isLoading={isLoad} disabled={isDisabled}>
        Sign up
      </Button>
    </form>
  );
};

function getReg(value: string): string | null {
  if (value?.includes?.('ref=') && value?.split?.('=')?.[1]) {
    return value.split('=')[1];
  }
  return null;
}
