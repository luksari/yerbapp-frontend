import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { Register } from 'containeirs/Register';
import { styled } from '@emotion/styled';
import { Login } from 'containeirs/Login';

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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Wrapper>
  );
};

export default App;
