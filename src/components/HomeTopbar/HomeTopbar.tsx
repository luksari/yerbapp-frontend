import React, { FC } from 'react';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import {
  StyledHomeTopbar, HomeAppTitle, LogoTitleContainer, HomeAppTitleGreen,
} from './styled';


export const HomeTopbar: FC = () => {
  return (
    <StyledHomeTopbar>
      <LogoTitleContainer>
        <Logo />
        <HomeAppTitle>
          Yerb
          <HomeAppTitleGreen>
            App
          </HomeAppTitleGreen>
        </HomeAppTitle>
      </LogoTitleContainer>
      <Link to="/login">
        <Button themeType={ButtonType.Primary}>
          Zaloguj się
        </Button>
      </Link>
    </StyledHomeTopbar>
  );
};
