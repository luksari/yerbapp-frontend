import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  font-size: 1rem;
  display: grid;
  align-items: center;
  justify-self: flex-start;
  margin-right: auto;
`;

export const TitleBarTitle = styled.h1`
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: center;
  margin: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.labelText};
`;
