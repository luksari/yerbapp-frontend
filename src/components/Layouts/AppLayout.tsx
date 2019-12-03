import React, { FC, ReactNode } from 'react';
import { Footer } from 'components/Footer';
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
        <Topbar />
        <ComponentWrapper>
          {children}
        </ComponentWrapper>
        <Footer />
      </StyledAppLayout>
    </>
  );
};
