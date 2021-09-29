import * as React from 'react';

import style from './style.module.css';

type Ref = HTMLInputElement;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  noId?: boolean;
}

export const Checkbox = React.forwardRef<Ref, Props>((props, ref) => {
  const { children, noId, ...rest } = props;

  return (
    <>
      <input ref={ref} type="checkbox" {...rest} className={style.checkbox} id={noId ? undefined : 'happy'} />{' '}
      <label className={style.label} htmlFor={noId ? undefined : 'happy'}>
        {children}
      </label>
    </>
  );
});
