import React, { FC, ReactNode } from 'react';
import { Footer } from 'components/Footer';
import { Topbar } from 'components/Topbar';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({
  children,
}) => {
  return (
    <StyledAppLayout>
      <Topbar />
      <ComponentWrapper>
        {children}
      </ComponentWrapper>
      <Footer />
    </StyledAppLayout>
  );
};
