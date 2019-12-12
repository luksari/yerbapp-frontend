import React, {
  FC, memo, useMemo, useCallback,
} from 'react';
import {
  NavSection, LogoLink, StyledLogo, AppTitle,
} from 'components/Navigation/styled';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import { NavLinks } from './Navlinks';
import {
  name, reducer,
} from './slice';
import { navWatchSaga } from './saga';

const NavbarRaw: FC = () => {
  console.log('render');
  return (
    <NavSection>
      <LogoLink to="/">
        <StyledLogo />
        <AppTitle>
          Yerb
          <span>App</span>
        </AppTitle>
      </LogoLink>
      <NavLinks />
    </NavSection>
  );
};

const withReducer = injectReducer({ key: name, reducer });
const withSaga = injectSaga({ key: name, saga: navWatchSaga });

export const Navbar = compose(
  withSaga,
  withReducer,
  memo,
)(NavbarRaw);
