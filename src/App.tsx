import React, { FC } from 'react';
import styled from 'styled-components';
import { Login } from 'containeirs/Login';
import { Layout } from 'containeirs/Layout';
import About from 'containeirs/About/About';
import Tutorial from 'containeirs/Tutorial/Tutorial';
import { AppRouter } from 'containeirs/AppRouter';
import Navbar from 'components/Navigation/Navbar';
import { Register } from 'containeirs/Register';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <Navbar />
      <AppRouter />
    </Wrapper>
  );
};

export default App;
