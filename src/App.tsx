import React, { FC } from 'react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { SignUp } from './containeirs/SignUp';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${darken(0.2, 'palevioletred')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
`;

const App: FC = () => {
  const name = 'Yerbapp';
  return (
    <Wrapper>
      <span role="img" aria-label="Yerba Mate">🌿</span>
      {name}
      <span role="img" aria-label="Yerba Mate">🌿</span>
      <SignUp />
    </Wrapper>
  );
};

export default App;
