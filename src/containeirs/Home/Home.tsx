import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  Main, Image, ImageText, SubMain, ExploreButton, HomeContainer,
} from './styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <Main>
        <Image src="img/background/HomeBG.jpg" alt="Background Yerba image" />
        <SubMain>
          <ImageText>A czy Ty znalazłeś </ImageText>
          <ImageText> już swoją yerbę? </ImageText>
          <Link to="/explore"><ExploreButton themeType={ButtonType.Secondary}>Eksploruj!</ExploreButton></Link>
        </SubMain>
      </Main>
    </HomeContainer>
  );
};

export default Home;
