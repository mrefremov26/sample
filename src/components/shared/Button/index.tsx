import React from 'react';

import classNames from 'classnames';

import { Spinner } from '@shared/Spinner';

import styles from './style.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | '_secondary' | '_light' | '_red' | '_green' | '_blue' | '_darkGreen' | '_greenGradient';
  size?: 'small' | 'average' | 'big' | 'default';
  isFull?: boolean;
  isLoading?: boolean;
  customClass?: string;
  wide?: boolean;
}

/**
 *  @description shared button for all cases in app
 *  @param isLoading - if true, there button with loader in
 *  @param children - text in button
 *  @param mode - color of background, managed by class from style
 *  @param size
 *  @param styles
 *  @param rest - rest of params, set to native button
 * */
export const Button: React.FC<IButton> = ({ isLoading, children, mode, size, customClass, isFull, wide, ...rest }) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles[mode || '']]: mode,
        [styles[size || '']]: size,
        [styles.full]: isFull,
        [customClass || '']: customClass,
        [styles.wide]: wide,
      })}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
