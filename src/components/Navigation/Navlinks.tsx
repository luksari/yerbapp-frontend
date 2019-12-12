import React, { FC } from 'react';
import {
  NavList, NavLink, NavItem, NavIcon, NavText, StyledLogo, LogoLink, AppTitle,
} from 'components/Navigation/styled';

export interface NavProps {
  navItems: NavigationItem[];
  setSelected: (key: string) => void;
}


export const NavLinks: FC<NavProps> = ({ navItems, setSelected }) => {
  return (
    <>
      <LogoLink to="/">
        <StyledLogo />
        <AppTitle>
          Yerb
          <span>App</span>
        </AppTitle>
      </LogoLink>
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
};
