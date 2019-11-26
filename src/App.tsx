import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { SignUp } from 'containeirs/SignUp';
import { styled } from 'theme/theme';
import TutorialPage from 'components/Routes/Tutorial';
import ExplorePage from 'components/Routes/Explore';
import HomePage from 'components/Routes/Home';
import Navbar from 'components/Navigation/Navbar';
import AboutPage from 'components/Routes/About';
import ProfilePage from 'components/Routes/Profile';
import ContactPage from 'components/Routes/Contact';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`;


const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={HomePage} />
        <Route path='/tutorial' component={TutorialPage} />
        <Route path='/explore' component={ExplorePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/profile' component={ProfilePage} />   
        <Route path='/contact' component={ContactPage} />  
      </div>
    </Router>
  );
};

export default App;
