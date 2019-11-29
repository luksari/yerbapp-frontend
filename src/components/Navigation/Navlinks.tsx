import React from 'react';
import {
  SidebarList, SidebarItem, SidebarLink, SidebarText,
} from 'components/Navigation/styled';
import { Icon } from 'antd';

const Navlinks = () => {
  return (
    <SidebarList>
      <SidebarItem>
        <SidebarLink to="/">
          <Icon type="home" />
          <br />
          <SidebarText>
            Strona główna
          </SidebarText>
        </SidebarLink>
      </SidebarItem>

      <SidebarItem>
        <SidebarLink to="/tutorial">
          <Icon type="book" />
          <br />
          <SidebarText>
            Poradnik
          </SidebarText>
        </SidebarLink>
      </SidebarItem>

      <SidebarItem>
        <SidebarLink to="/explore">
          <Icon type="search" />
          <br />
          <SidebarText>
            Przeglądaj
          </SidebarText>
        </SidebarLink>
      </SidebarItem>

      <SidebarItem>
        <SidebarLink to="/about">
          <Icon type="star" />
          <br />
          <SidebarText>
            O nas
          </SidebarText>
        </SidebarLink>
      </SidebarItem>

      <SidebarItem>
        <SidebarLink to="/profile">
          <Icon type="profile" />
          <br />
          <SidebarText>
            Profil
          </SidebarText>
        </SidebarLink>
      </SidebarItem>

      <SidebarItem>
        <SidebarLink to="/contact">
          <Icon type="phone" />
          <br />
          <SidebarText>
            Kontakt
          </SidebarText>
        </SidebarLink>
      </SidebarItem>
    </SidebarList>
  );
};

export default Navlinks;
