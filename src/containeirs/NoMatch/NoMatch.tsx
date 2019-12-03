import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
`;

const NoMatchPage = () => {
  return (
    <Wrapper>
      <p>No Match</p>
    </Wrapper>
  );
};

export default NoMatchPage;
