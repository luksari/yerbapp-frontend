import React, {
  FC, memo, useCallback, useMemo,
} from 'react';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, actions } from 'store/auth/slice';
import { connect } from 'react-redux';
import {
  useGetMeQuery,
} from 'generated/graphql';
import { UserAvatar } from 'components/UserAvatar';
import { Loader } from 'components/Loader';
import { ActionWrapper } from 'components/HomeTopbar/styled';
import { StyledLink } from 'containeirs/Home/styled';
import { StyledTopbar, UserProfileLink, UserTitle } from './styled';

interface TopbarProps {
  logout: VoidFunction;
  isAuthenticated?: boolean;
}

const TopbarRaw: FC<TopbarProps> = memo(({
  logout,
  isAuthenticated,
}) => {
  const { data, loading } = useGetMeQuery();
  const handleLogout = useCallback(() => { logout(); }, [logout]);
  const isAuthenticatedMemo = useMemo(() => isAuthenticated, [isAuthenticated]);
  if (!data || loading) {
    return <Loader fullscreen />;
  }
  return (
    <StyledTopbar>
      <UserProfileLink to="/profile">
        <UserTitle>{data.whoAmI.email}</UserTitle>
        <UserAvatar username={data.whoAmI.username} avatarUrl={data.whoAmI.avatarUrl} />
      </UserProfileLink>
      {
        isAuthenticatedMemo
          ? <Button themeType={ButtonType.Link} onClick={handleLogout}>Wyloguj się</Button>
          : (
            <ActionWrapper>
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
            </ActionWrapper>
          )
      }
    </StyledTopbar>
  );
});

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const Topbar = connect(mapStateToProps, mapDispatchToProps)(TopbarRaw);
