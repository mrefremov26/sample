import React, { FC } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | '_secondary' | '_light' | '_red' | '_green' | '_blue' | '_darkGreen' | '_greenGradient';
  size?: 'small' | 'average' | 'big' | 'default';
  isFull?: boolean;
  isLoading?: boolean;
  customClass?: string;
  wide?: boolean;
}
export const TransparentButton: FC<IButton> = ({ customClass, children, ...rest }) => {
  return (
    <button
      className={classNames(style.button, {
        [customClass || '']: customClass,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
