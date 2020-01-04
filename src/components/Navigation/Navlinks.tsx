import React, { FC, memo } from 'react';
import {
  NavList, NavLink, NavItem, NavIcon, NavText,
} from 'components/Navigation/styled';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectNavItems, actions } from './slice';

export interface NavProps {
  navItems: NavigationItem[];
  setSelected: (key: string) => void;
}


const NavLinksRaw: FC<NavProps> = memo(({ navItems, setSelected }) => {
  return (
    <>
      <NavList>
        {navItems.map((elem) => (
          <NavItem key={elem.to} selected={elem.selected} visible={elem.visible} onClick={() => setSelected(elem.to)}>
            <NavLink to={elem.to}>
              <NavIcon type={elem.icon} />
              <NavText>{elem.title}</NavText>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </>

  );
});

const mapStateToProps = createStructuredSelector({
  navItems: makeSelectNavItems(),
});

const mapDispatchToProps = (dispatch) => ({
  setSelected: (itemId) => dispatch(actions.setItemSelected(itemId)),
});

export const NavLinks = connect(mapStateToProps, mapDispatchToProps)(NavLinksRaw);
