import React, { FC } from 'react';
import styled from 'styled-components';
import { AppRouter } from 'containeirs/AppRouter';
import { Loader } from 'components/Loader';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: FC = () => {
  return (
    <Wrapper>
      <Loader />
      <AppRouter />
    </Wrapper>
  );
};

export default App;
