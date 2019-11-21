import React, { FC } from 'react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { Switch, Route } from 'react-router';
import { SignUp } from 'containeirs/SignUp';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${darken(0.1, 'palevioletred')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => <div>Homepage, at least some kind of...</div>} />
        <Route exact path="/signup" render={() => <SignUp />} />
      </Switch>
    </Wrapper>
  );
};

export default App;
