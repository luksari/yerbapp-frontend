import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  MainContainer, Slogan, SloganButtonContainer, ExploreButton, HomeContainer,
} from './styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <SloganButtonContainer>
          <Slogan>Świat yerba mate stoi przed Tobą otworem</Slogan>
          <Link to="/explore">
            <ExploreButton themeType={ButtonType.Secondary}>
              Zobacz!
            </ExploreButton>
          </Link>
        </SloganButtonContainer>
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
