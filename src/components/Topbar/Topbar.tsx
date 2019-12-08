import React, {
  FC, memo, useCallback, useMemo,
} from 'react';
import { TitleBar } from 'components/TitleBar';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, makeSelectUserId, actions } from 'store/auth/slice';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from 'queries/UserQueries';
import { GetUserQueryVariables, GetUserQuery } from 'generated/graphql';
import { UserAvatar } from 'components/UserAvatar';
import { StyledTopbar } from './styled';

interface TopbarProps {
  logout: VoidFunction;
  isAuthenticated?: boolean;
  userId: string;
}

const TopbarRaw: FC<TopbarProps> = memo(({
  logout,
  isAuthenticated,
  userId,
}) => {
  const shouldFetch = !userId;
  const { data } = useQuery<GetUserQuery, GetUserQueryVariables>(GET_USER, { variables: { userId }, skip: shouldFetch });
  const handleLogout = useCallback(() => { logout(); }, [logout]);
  const isAuthenticatedMemo = useMemo(() => isAuthenticated, [isAuthenticated]);

  return (
    <StyledTopbar>
      <TitleBar />
      { data && (
        <Link to="/profile">
          <UserAvatar username={data.user.username} />
        </Link>
      ) }
      {
        isAuthenticatedMemo
          ? <Button themeType={ButtonType.Link} onClick={handleLogout}>Wyloguj się</Button>
          : <Button themeType={ButtonType.Link}><Link to="/login">Zaloguj się</Link></Button>
      }
    </StyledTopbar>
  );
});

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  userId: makeSelectUserId(),
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const Topbar = connect(mapStateToProps, mapDispatchToProps)(TopbarRaw);
