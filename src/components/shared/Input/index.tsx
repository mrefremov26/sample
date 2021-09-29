import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  errorText?: string;
  label?: JSX.Element | string;
  postfix?: JSX.Element | string;
  prefixElement?: JSX.Element | string;
  blueButtonInLabel?: JSX.Element | string;
}
type Ref = HTMLInputElement;

export const Input = React.forwardRef<Ref, ICustomInput>((props, ref) => {
  const {
    label,
    placeholder,
    name = 'input',
    hasError = false,
    errorText,
    className,
    type = 'text',
    postfix,
    prefixElement,
    blueButtonInLabel,
    ...rest
  } = props;

  const labelContent = (
    <>
      {label && (
        <label className={style.label} htmlFor={name}>
          {label}
          {blueButtonInLabel && <span className={style.blueButtonInLabel}>{blueButtonInLabel}</span>}
        </label>
      )}
    </>
  );
  const errorContent = <> {hasError && errorText && <p className={style.error}>{errorText}</p>}</>;

  const inputContentClasses = classNames(style.input, className ?? '', { [style._error]: hasError });
  let inputContent = (
    <input ref={ref} className={inputContentClasses} type={type} name={name} placeholder={placeholder} {...rest} />
  );
  if (postfix) {
    inputContent = (
      <div className={style.postfixWrap}>
        <input ref={ref} className={inputContentClasses} type={type} name={name} placeholder={placeholder} {...rest} />
        <div className={style.postfix}>{postfix}</div>
      </div>
    );
  }

  if (prefixElement) {
    inputContent = (
      <div className={style.prefixWrap}>
        <div className={style.prefix}>{prefixElement}</div>
        <input ref={ref} className={inputContentClasses} type={type} name={name} placeholder={placeholder} {...rest} />
      </div>
    );
  }

  return (
    <>
      {labelContent}
      {inputContent}
      {errorContent}
    </>
  );
});
