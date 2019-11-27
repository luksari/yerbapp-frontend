import React from 'react';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
`;

const HomePage = () => {
    return (
        <Wrapper>
            <p>The Home Page</p>
        </Wrapper>
    )
}

export default HomePage;