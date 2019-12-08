import styled from 'styled-components';

export const StyledLegend = styled.h3`
  width: 100%;
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  font-weight: 700;
  margin: ${({ theme }) => theme.metrics.margin.l} 0;
`;

export const StyledFieldset = styled.div<{ fullWidth?: boolean; columns: number }>`
  border-top: 1px solid ${({ theme }) => theme.colors.decorators};
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  justify-content: center;
  grid-gap: ${({ theme }) => theme.metrics.margin.l};
  ${StyledLegend} {
    grid-column-end: ${({ columns }) => `span ${columns}`};
  }
`;
