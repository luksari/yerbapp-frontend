import React, {
  FC, memo,
} from 'react';
import {
  NavSection, LogoLink, StyledLogo, AppTitle,
} from 'components/Navigation/styled';
import { compose } from 'redux';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import { NavLinks } from './Navlinks';
import {
  name, reducer,
} from './slice';
import { navWatchSaga } from './saga';

const NavbarRaw: FC = () => {
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
