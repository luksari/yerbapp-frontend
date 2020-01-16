import React, {
  FC, ReactNode,
} from 'react';
import { Topbar } from 'components/Topbar';
import { Navbar } from 'components/Navigation/Navbar';
import { TitleBar } from 'components/TitleBar';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({
  children,
}) => {
  return (
    <>
      <TitleBar />
      <Navbar />
      <StyledAppLayout>
        <Topbar />
        <ComponentWrapper>
          {children}
        </ComponentWrapper>
      </StyledAppLayout>
    </>
  );
};
