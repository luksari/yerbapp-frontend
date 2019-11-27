import React from 'react';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
`;

const ExplorePage = () => {
    return (
        <Wrapper>
            <p>The Explore Page</p>
        </Wrapper>
    )
}

export default ExplorePage;