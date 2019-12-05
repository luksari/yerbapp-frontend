import React from 'react';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  Wrapper, LeftSide, RightSide, NoMatchAltLoader, NoMatchLoader, NoMatchLogo, NoMatchAppTitle, NoMatchText, LogoNameContainer, RedirectButton,
} from './styled';

const NoMatch = () => {
  return (
    <Wrapper>
      <LeftSide>
        <LogoNameContainer>
          <NoMatchLogo />
          <NoMatchAppTitle>
            YerbApp
          </NoMatchAppTitle>
        </LogoNameContainer>
        <NoMatchText>
          404 Page Not Found
        </NoMatchText>
        <RedirectButton themeType={ButtonType.Primary} type="button">
          Powrót do strony głównej
          <Link to="/home" />
        </RedirectButton>
      </LeftSide>
      <RightSide>
        <NoMatchLoader />
        <NoMatchAltLoader />
      </RightSide>
    </Wrapper>
  );
};

export default NoMatch;
