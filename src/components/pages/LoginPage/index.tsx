import React from 'react';
import { Link } from 'react-router-dom';

import { Login } from '@features/Login';
import { AuthLayout } from '@templates/AuthLayout';

import { withoutAuthOnly } from '@hoc/withoutAuthOnly';

import { Paths } from '@constants/paths';

const Page = () => {
  const appendix = (
    <>
      You don`t have an account? <Link to={Paths.signup}>Sing up</Link>
    </>
  );

  return (
    <AuthLayout appendix={appendix}>
      <Login />
    </AuthLayout>
  );
};

export const LoginPage = withoutAuthOnly(Page);
export default LoginPage as React.FC;
