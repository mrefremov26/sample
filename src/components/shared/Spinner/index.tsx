import React from 'react';

import style from './style.module.css';

interface IProps {
  isOnCenter?: boolean;
}

export const Spinner = ({ isOnCenter }: IProps) => {
  const svg = (
    <svg
      className={style.spinner}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9C17 7.07407 16.3052 5.21278 15.0432 3.75793C13.7812 2.30307 12.0368 1.35231 10.1302 1.08023C8.22355 0.808155 6.28277 1.23303 4.66423 2.27683C3.04568 3.32063 1.85801 4.91329 1.31932 6.76234C0.78062 8.6114 0.927057 10.5927 1.73174 12.3425C2.53642 14.0923 3.94532 15.493 5.69973 16.2875C7.45415 17.0821 9.43629 17.217 11.2822 16.6676"
        stroke="#505F79"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  if (isOnCenter) {
    return <div className={style.full}>{svg}</div>;
  }
  return <>{svg}</>;
};
