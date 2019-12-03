import React, { FC } from 'react';
import styled from 'styled-components';
import { AppRouter } from 'containeirs/AppRouter';
import Navbar from 'components/Navigation/Navbar';

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
