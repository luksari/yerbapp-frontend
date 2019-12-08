import React, { FC } from 'react';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { StyledHomeTopbar, HomeAppTitle } from './styled';


export const HomeTopbar: FC = () => {
  return (
    <StyledHomeTopbar>
      <HomeAppTitle>
        YerbApp
      </HomeAppTitle>
      <Button themeType={ButtonType.Primary}><Link to="/login">Zaloguj się</Link></Button>
    </StyledHomeTopbar>
  );
};
