import React, { FC } from 'react';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { Logo } from 'components/Logo';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, actions } from 'store/auth/slice';
import { connect } from 'react-redux';
import { StyledLink } from 'containeirs/Home/styled';
import {
  StyledHomeTopbar, HomeAppTitle, LogoTitleContainer, ActionWrapper,
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
      {
        isAuthenticated ? (
          <>
            <Button themeType={ButtonType.Primary} onClick={() => logout()}>
          Wyloguj się
            </Button>
          </>
        ) : (
          <ActionWrapper>
            <StyledLink to="/login">
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow}>
          Zaloguj się
              </Button>
            </StyledLink>
            <StyledLink to="/register">
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow}>
          Zarejestruj się
              </Button>
            </StyledLink>
          </ActionWrapper>
        )
      }
    </StyledHomeTopbar>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const HomeTopbar = connect(mapStateToProps, mapDispatchToProps)(HomeTopbarRaw);
