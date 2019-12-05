import React, { FC, ReactNode } from 'react';
import { StyledAuthLayout, AuthWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const AuthLayout: FC<Props> = ({
  children,
}) => {
  return (
    <StyledAuthLayout>
      <AuthWrapper>
        {children}
      </AuthWrapper>
    </StyledAuthLayout>
  );
};
