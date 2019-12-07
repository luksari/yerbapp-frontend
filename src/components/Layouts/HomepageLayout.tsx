import React, { FC, ReactNode } from 'react';
import { Topbar } from 'components/Topbar';
import { Footer } from 'components/Footer';
import { HomepageWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const HomepageLayout: FC<Props> = ({
  children,
}) => {
  return (
    <HomepageWrapper>
      <Topbar
        handleLogout={() => {
          localStorage.removeItem('token');
        }}
      />
      {children}
      <Footer />
    </HomepageWrapper>
  );
};
