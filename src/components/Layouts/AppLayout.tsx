import React, {
  FC, ReactNode, useCallback, useMemo,
} from 'react';
import { Topbar } from 'components/Topbar';
import { Navbar } from 'components/Navigation/Navbar';
import { makeSelectIsAuthenticated, actions, makeSelectUserId } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { watchAuthSaga } from 'store/auth/saga';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_DETAILS } from 'queries/UserQueries';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
  isAuthenticated: boolean;
  logout: VoidFunction;
  userId: number;
}

export const AppLayoutRaw: FC<Props> = ({
  children,
  logout,
  isAuthenticated,
  userId,
}) => {
  useInjectSaga({ key: 'auth', saga: watchAuthSaga });
  const { loading, error, data } = useQuery(GET_USER_DETAILS, { variables: { userId } });

  const handleLogout = useCallback(
    () => {
      logout();
    },
    [logout],
  );
  const isAuthenticatedMemo = useMemo(() => isAuthenticated, [isAuthenticated]);


  return (
    <>
      <Navbar />
      <StyledAppLayout>
        <Topbar
          handleLogout={handleLogout}
          isAuthenticated={isAuthenticatedMemo}
        />
        <ComponentWrapper>
          {children}
        </ComponentWrapper>
      </StyledAppLayout>
    </>
  );
};

export const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  userId: makeSelectUserId(),
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const AppLayout = connect(mapStateToProps, mapDispatchToProps)(AppLayoutRaw);
