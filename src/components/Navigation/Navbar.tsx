import React, { FC } from 'react';
import { NavSection } from 'components/Navigation/styled';
import { NavLinks } from './Navlinks';

export const Navbar: FC = () => {
  return (
    <NavSection>
      <NavLinks />
    </NavSection>
  );
};
