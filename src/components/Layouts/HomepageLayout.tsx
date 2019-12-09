import React, { FC, ReactNode } from 'react';
import { Footer } from 'components/Footer';
import { HomeTopbar } from 'components/HomeTopbar';
import { HomepageWrapper, HomeMain, HomeContainer } from './styled';

interface Props {
  children: ReactNode;
}

export const HomepageLayout: FC<Props> = ({
  children,
}) => {
  return (
    <HomepageWrapper>
      <HomeContainer>
        <HomeTopbar />
        <HomeMain>
          {children}
        </HomeMain>
      </HomeContainer>
      <Footer />
    </HomepageWrapper>
  );
};
