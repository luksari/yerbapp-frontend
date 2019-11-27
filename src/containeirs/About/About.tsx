import React, { FC } from 'react';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.metrics.fontSize.m};

  h3 {
    background: ${({ theme }) => theme.colors.alternative};
    font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  }
`;

const About: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="center">About us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </Wrapper>
  )
}

export default About