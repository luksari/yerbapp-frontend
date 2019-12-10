import React, { FC, ReactNode } from 'react';
import { Topbar } from 'components/Topbar';
import { Navbar } from 'components/Navigation/Navbar';
import { makeSelectIsAuthenticated, actions } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { watchAuthSaga } from 'store/auth/saga';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
  isAuthenticated: boolean;
  logout: VoidFunction;
}

export const AppLayoutRaw: FC<Props> = ({
  children,
  logout,
  isAuthenticated,
}) => {
  useInjectSaga({ key: 'auth', saga: watchAuthSaga });

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar />
      <StyledAppLayout>
        <Topbar
          handleLogout={handleLogout}
          isAuthenticated={isAuthenticated}
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
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.unsetUser()),
});

export const AppLayout = connect(mapStateToProps, mapDispatchToProps)(AppLayoutRaw);
