import React, { useCallback, useState } from 'react';

import { Input } from '@shared/Input';

import VisibleOff from '@/assets/images/icons/visible_off.svg';
import VisibleOn from '@/assets/images/icons/visible_on.svg';

import style from './style.module.css';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  errorText?: string;
  label?: string;
  postfix?: JSX.Element;
}
type Ref = HTMLInputElement;
/**
 *  PasswordInput field, contains logic of toggle between views
 * */
export const PasswordInput = React.forwardRef<Ref, ICustomInput>((props, ref) => {
  const [type, setType] = useState('password');
  const toggleType = useCallback(() => {
    setType(type === 'password' ? 'text' : 'password');
  }, [setType, type]);

  const postfix = (
    <div className={style.postfix} onClick={toggleType}>
      {type === 'password' ? <VisibleOff /> : <VisibleOn />}
    </div>
  );

  return <Input type={type} postfix={postfix} ref={ref} {...props} />;
});
