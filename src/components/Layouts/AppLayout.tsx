import React, { FC, ReactNode } from 'react';
import { Topbar } from 'components/Topbar';
import { Navbar } from 'components/Navigation/Navbar';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <StyledAppLayout>
        <Topbar
          handleLogout={() => {
            localStorage.removeItem('token');
          }}
        />
        <ComponentWrapper>
          {children}
        </ComponentWrapper>
      </StyledAppLayout>
    </>
  );
};
