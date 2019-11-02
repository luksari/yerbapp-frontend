import React, { FC } from 'react';
import styled from '@emotion/styled';
import { darken } from 'polished';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${darken(0.2, 'palevioletred')};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
`;

const App: FC = () => {
  const name = 'YerbApp';
  return (
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    <StyledDiv className="App">
      🌿
      {name}
      🌿
    </StyledDiv>
  );
};

export default App;
