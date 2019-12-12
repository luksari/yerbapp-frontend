import React, {
  FC, memo, useCallback, useMemo,
} from 'react';
import { TitleBar } from 'components/TitleBar';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, actions } from 'store/auth/slice';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from 'queries/UserQueries';
import {
  GetMeQuery, GetMeQueryVariables,
} from 'generated/graphql';
import { UserAvatar } from 'components/UserAvatar';
import { StyledTopbar, UserProfileLink, UserTitle } from './styled';

interface TopbarProps {
  logout: VoidFunction;
  isAuthenticated?: boolean;
}

const TopbarRaw: FC<TopbarProps> = memo(({
  logout,
  isAuthenticated,
}) => {
  const { data } = useQuery<GetMeQuery, GetMeQueryVariables>(GET_ME);
  const handleLogout = useCallback(() => { logout(); }, [logout]);
  const isAuthenticatedMemo = useMemo(() => isAuthenticated, [isAuthenticated]);
  console.log('Topbar render');
  return (
    <StyledTopbar>
      <TitleBar />
      { data && (
        <>
          <UserProfileLink to="/profile">
            <UserTitle>{data.whoAmI.email}</UserTitle>
            <UserAvatar username={data.whoAmI.username} />
          </UserProfileLink>
        </>
      ) }
      {
        isAuthenticatedMemo
          ? <Button themeType={ButtonType.Link} variant={ButtonVariant.Narrow} onClick={handleLogout}>Wyloguj się</Button>
          : <Button themeType={ButtonType.Link} variant={ButtonVariant.Narrow}><Link to="/login">Zaloguj się</Link></Button>
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
