import React from 'react';
import {
  NavList, NavLink, NavItem, NavIcon, NavText, StyledLogo, LogoLink, AppTitle,
} from 'components/Navigation/styled';


const Links = {
  home: {
    id: 'home',
    to: '/',
  },
};

export const NavLinks = () => {
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
        <NavItem>
          <NavLink to="/">
            <NavIcon type="home" />
            <NavText>Strona główna</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/tutorial">
            <NavIcon type="book" />
            <NavText>Poradnik</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/explore">
            <NavIcon type="search" />
            <NavText>Przeglądaj</NavText>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about">
            <NavIcon type="star" />
            <NavText>Autorzy</NavText>
          </NavLink>
        </NavItem>
      </NavList>
    </>

  );
};
