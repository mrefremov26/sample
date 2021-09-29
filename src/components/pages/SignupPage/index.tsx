import React from 'react';

import { Link } from 'react-router-dom';

import { Signup } from '@features/Signup';

import { AuthLayout } from '@templates/AuthLayout';
import { withoutAuthOnly } from '@hoc/withoutAuthOnly';

import { Paths } from '@constants/paths';

const Page = () => {
  const appendix = (
    <>
      Already have an account? <Link to={Paths.login}>Log In</Link>
    </>
  );
  return (
    <AuthLayout appendix={appendix}>
      <Signup />
    </AuthLayout>
  );
};

export const SignupPage = withoutAuthOnly(Page);
export default SignupPage as React.FC;
