import * as React from 'react';

import { AuthLayout } from '@templates/AuthLayout';
import { ResetPassword } from '@features/ResetPassword';
import { withoutAuthOnly } from '@hoc/withoutAuthOnly';

const Page = () => {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
};

export const ResetPasswordPage = withoutAuthOnly(Page);
export default ResetPasswordPage as React.FC;
