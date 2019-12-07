import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import { Topbar } from 'components/Topbar';
import { Footer } from 'components/Footer';
import {
  Main, Image, ImageText, SubMain, ExploreButton, TopbarWrapper, Container, FooterWrapper,
} from './styled';

const Home: FC = () => {
  return (
    <Container>
      <TopbarWrapper>
        <Topbar
          handleLogout={() => {
            localStorage.removeItem('token');
          }}
        />
      </TopbarWrapper>
      <Main>
        <Image src="img/background/HomeBG.jpg" alt="Background Yerba image" />
        <SubMain>
          <ImageText>A czy Ty znalazłeś </ImageText>
          <ImageText> już swoją yerbę? </ImageText>
          <Link to="/explore"><ExploreButton themeType={ButtonType.Secondary}>Eksploruj!</ExploreButton></Link>
        </SubMain>
      </Main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
};

export default Home;
