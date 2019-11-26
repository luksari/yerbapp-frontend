import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { SignUp } from 'containeirs/SignUp';
import { styled } from 'theme/theme';
import logo from './components/Navigation/assets/logo.png'
import TutorialPage from 'components/Routes/Tutorial';
import ExplorePage from 'components/Routes/Explore';
import HomePage from 'components/Routes/Home';
import Navbar from 'components/Navigation/Navbar';
import './components/Navigation/assets/Navbar.css'

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`;

const navLinks = [
    { text: 'Home', path: '/', icon: 'homeIcon' },
    { text: "Tutorial", path: "/tutorial", icon: "tutorialIcon" },
    { text: "Explore", path: "/explore", icon: "exploreIcon" }
  ]


const App: FC = () => {
  return (
    <Wrapper>
      <Router>
        <Navbar
        navLinks={ navLinks }
        logo={ logo }
        background='#fff'
        hoverBackground='#ddd'
        linkColor="#777"
        />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tutorial" component={TutorialPage} />
        <Route exact path="/explore" component={ExplorePage} />
      </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
