import React from 'react';
import {
  NavList, NavLink, NavItem, NavIcon, NavText,
} from 'components/Navigation/styled';


const NavNavLinks = () => {
  return (
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

      <NavItem>
        <NavLink to="/profile">
          <NavIcon type="profile" />
          <NavText>Profil</NavText>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/contact">
          <NavIcon type="phone" />
          <NavText>Kontakt</NavText>
        </NavLink>
      </NavItem>
    </NavList>
  );
};

export default NavNavLinks;
