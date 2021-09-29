import { RouteConfig } from 'react-router-config';

import { Layout } from '@templates/Layout';

import { LoginPage } from '@pages/LoginPage';
import { ResetPasswordPage } from '@pages/ResetPasswordPage';
import { SignupPage } from '@pages/SignupPage';

import { Paths } from '@constants/paths';

export const configs: RouteConfig[] = [
  {
    path: Paths.login,
    exact: true,
    component: LoginPage,
  },
  {
    path: Paths.signup,
    exact: true,
    component: SignupPage,
  },
  {
    path: Paths.resetPassword,
    exact: true,
    component: ResetPasswordPage,
  },
  {
    path: Paths.main,
    component: Layout,
  },
];
