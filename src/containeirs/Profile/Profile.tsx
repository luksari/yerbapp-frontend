import React from 'react';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
`;

const ProfilePage = () => {
    return (
        <Wrapper>
            <p>The Profile Page</p>
        </Wrapper>
    )
}

export default ProfilePage;