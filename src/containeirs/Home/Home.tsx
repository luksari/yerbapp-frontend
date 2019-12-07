import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  Main, Image, Slogan, SubMain, ExploreButton, HomeContainer,
} from './styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <Main>
        <Image src="img/background/bg2.jpg" alt="Background Yerba image" />
        <SubMain>
          <Slogan>Świat yerba mate stoi przed Tobą otworem</Slogan>
          <Link to="/explore">
            <ExploreButton themeType={ButtonType.Secondary}>
              Zobacz!
            </ExploreButton>
          </Link>
        </SubMain>
      </Main>
    </HomeContainer>
  );
};

export default Home;
