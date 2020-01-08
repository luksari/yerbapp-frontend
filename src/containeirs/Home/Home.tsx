import React, { FC } from 'react';
import { ButtonType, ButtonVariant } from 'components/Button';
import {
  Slogan, HomeContainer, ExploreButton, StyledLink,
} from './styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <Slogan>
       Świat yerba mate stoi przed Tobą otworem
      </Slogan>
      <StyledLink to="/explore">
        <ExploreButton themeType={ButtonType.Secondary} variant={ButtonVariant.Wide}>
          Zobacz!
        </ExploreButton>
      </StyledLink>
    </HomeContainer>
  );
};

export default Home;
