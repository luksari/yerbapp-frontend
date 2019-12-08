import React, { FC } from 'react';
import styled from 'styled-components';
import { AppRouter } from 'containeirs/AppRouter';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: 'Montserrat', sans-serif;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
};

export default App;
