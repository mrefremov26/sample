import React, { FC, ReactNode } from 'react';

import style from './style.module.css';

interface IAuthLayout {
  appendix?: ReactNode;
}
export const AuthLayout: FC<IAuthLayout> = ({ children, appendix }) => {
  return (
    <section className={style.section}>
      <div className={style.card}>
        <div className={style.logo}>Logo</div>
        {children}
      </div>
      {appendix && <p className={style.appendix}>{appendix}</p>}
    </section>
  );
};
