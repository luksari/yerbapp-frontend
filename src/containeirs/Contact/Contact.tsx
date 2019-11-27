import React from 'react';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
`;

const ContactPage = () => {
    return (
        <Wrapper>
            <p>The Contact Page</p>
        </Wrapper>
    )
}

export default ContactPage;