import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { SignUp } from 'containeirs/SignUp';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => <div>Homepage, at least some kind of...</div>} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Wrapper>
  );
};

export default App;
