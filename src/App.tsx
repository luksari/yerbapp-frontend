import React, { FC } from 'react';
import styled from 'styled-components';
import { AppRouter } from 'containeirs/AppRouter';
import { useInjectSaga } from 'utils/injectSaga';
import { watchAuthSaga } from 'store/auth/saga';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  * {
    box-sizing: border-box;
    &::after, &::before {
      box-sizing: inherit;
    }
  }
  ul {
    list-style: none;
  }
`;

const App: FC = () => {
  useInjectSaga({ key: 'auth', saga: watchAuthSaga });

  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
};

export default App;
