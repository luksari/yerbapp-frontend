import React, { FC } from 'react';
import { SignUp } from 'containeirs/SignUp';
import { styled } from 'theme/theme';
import Navbar from 'components/Navigation/Navbar';
import HomePage from 'containeirs/Home/Home';
import TutorialPage from 'containeirs/Tutorial/Tutorial';
import ExplorePage from 'containeirs/Explore/Explore';
import AboutPage from 'containeirs/About/About';
import ProfilePage from 'containeirs/Profile/Profile';
import ContactPage from 'containeirs/Contact/Contact';
import NoMatchPage from 'containeirs/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`;

const App: FC = () => {
  return (
    <div className="App">
      <Router >
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/tutorial' component={TutorialPage} />
          <Route exact path='/explore' component={ExplorePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
