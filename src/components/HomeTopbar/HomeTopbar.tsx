import React, { FC } from 'react';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, actions } from 'store/auth/slice';
import { connect } from 'react-redux';
import { StyledLink } from 'containeirs/Home/styled';
import {
  StyledHomeTopbar, HomeAppTitle, LogoTitleContainer,
} from './styled';

interface Props {
  logout: VoidFunction;
  isAuthenticated: boolean;
}

export const HomeTopbarRaw: FC<Props> = ({
  logout,
  isAuthenticated,
}) => {
  return (
    <StyledHomeTopbar>
      <LogoTitleContainer>
        <Logo />
        <HomeAppTitle>
          Yerb
          <span>
            App
          </span>
        </HomeAppTitle>
      </LogoTitleContainer>
      <StyledLink to="/login">
        <Button themeType={ButtonType.Primary}>
          Zaloguj się
        </Button>
      </StyledLink>
      <StyledLink to="/register">
        <Button themeType={ButtonType.Primary}>
          Zarejestruj się
        </Button>
      </StyledLink>
    </StyledHomeTopbar>
  );
};

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const HomeTopbar = connect(mapStateToProps, mapDispatchToProps)(HomeTopbarRaw);
