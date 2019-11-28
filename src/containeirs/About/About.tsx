import React, { FC } from 'react';
import { HeaderStyled, AboutContainer, TextMain } from './styled';


const About: FC = () => {
  return (
    <AboutContainer>
      <HeaderStyled>
        O nas
      </HeaderStyled>
      <TextMain>
        Grupa wariacików przemierza bezkres frontendowej dżungli, życzcie nam szczęścia. Pozdro i z fartem mordeczki
      </TextMain>
    </AboutContainer>
  );
};

export default About;
