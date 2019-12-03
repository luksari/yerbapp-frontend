import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  width: 80%;
  float:right;
  height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackground};
  display: grid;
  justify-content: center;
  margin: ${({ theme }) => theme.metrics.margin.s};
  font-size: ${({ theme }) => theme.metrics.fontSize.m};

  h3 {
    background: ${({ theme }) => theme.colors.alternative};
    font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  }
`;

const Tutorial: FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="center">How to start?</h3>
        <p>Do you want to know how to prepare your first Yerba Mate? This tutorial is perfect for you!</p>
      </div>
    </Wrapper>
  );
};

export default Tutorial;
