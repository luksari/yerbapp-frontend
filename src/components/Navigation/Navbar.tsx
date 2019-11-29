import React from 'react';
import { NavSection, Sidebar, SidebarTitle } from 'components/Navigation/styled';
import { Switch, Route } from 'react-router';
import Home from 'containeirs/Home/Home';
import Tutorial from 'containeirs/Tutorial/Tutorial';
import Explore from 'containeirs/Explore/Explore';
import About from 'containeirs/About/About';
import Profile from 'containeirs/Profile/Profile';
import Contact from 'containeirs/Contact/Contact';
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <NavSection>
      <Sidebar>
        <SidebarTitle>Yerbapp</SidebarTitle>
        <Switch>
          <Navlinks />
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Sidebar>
    </NavSection>
  );
};

export default Navbar;
