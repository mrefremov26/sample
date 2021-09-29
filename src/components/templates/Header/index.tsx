import React, { FC } from 'react';
import classNames from 'classnames';

import style from './style.module.css';

type Props = {
  title?: string;
  customClass?: string;
};

export const Header: FC<Props> = ({ customClass }) => {
  const HeaderClassNames = classNames(style.header, { [customClass ?? '']: customClass });

  return (
    <header className={HeaderClassNames}>
      <div className="container">
        <h1>Header</h1>
      </div>
    </header>
  );
};
