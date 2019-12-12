import React, { FC, memo } from 'react';
import { NavSection } from 'components/Navigation/styled';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import { NavLinks, NavProps } from './Navlinks';
import {
  actions, makeSelectNavItems, name, reducer,
} from './slice';
import { navWatchSaga } from './saga';

const NavbarRaw: FC<NavProps> = ({
  navItems,
  setSelected,
}) => {
  return (
    <NavSection>
      <NavLinks navItems={navItems} setSelected={setSelected} />
    </NavSection>
  );
};

const mapStateToProps = createStructuredSelector({
  navItems: makeSelectNavItems(),
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (itemId) => dispatch(actions.setItemSelected(itemId)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: name, reducer });
const withSaga = injectSaga({ key: name, saga: navWatchSaga });

export const Navbar = compose(
  withSaga,
  withReducer,
  withConnect,
  memo,
)(NavbarRaw);
