import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  Wrapper, Main, Image, ImageText, HomeFooter, SubMain, ExploreButton, HomeTopbar,
} from './styled';

const Home: FC = () => {
  return (
    <Wrapper>
      <HomeTopbar
        handleLogout={() => {
          localStorage.removeItem('token');
        }}
      />
      <Main>
        <Image src="img/background/HomeBG.jpg" alt="Background Yerba image" />
        <SubMain>
          <ImageText>A czy Ty znalazłeś </ImageText>
          <ImageText> już swoją yerbę? </ImageText>
          <Link to="/explore"><ExploreButton themeType={ButtonType.Secondary}>Eksploruj!</ExploreButton></Link>
        </SubMain>
      </Main>
      <HomeFooter />
    </Wrapper>
  );
};

export default Home;
