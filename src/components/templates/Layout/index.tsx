import React from 'react';
import { useSelector } from 'react-redux';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import classNames from 'classnames';

import { Spinner } from '@shared/Spinner';

import { selector } from '@store';

import style from './style.module.css';

export const Layout = ({ route }: RouteConfigComponentProps) => {
  const isLoggedIn = useSelector(selector.user.isLoggedIn);

  return (
    <div className={classNames(style.layout)}>
      {!isLoggedIn ? (
        <div className={style.main}>
          <Spinner />
        </div>
      ) : (
        <main className={style.content}>{renderRoutes(route?.routes)}</main>
      )}
    </div>
  );
};
