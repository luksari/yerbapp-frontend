import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  font-size: 1rem;
  display: grid;
  align-items: center;
  justify-self: flex-start;
  position: absolute;
  left: calc(${({ theme }) => theme.metrics.width.sidebarWidth} + 25px);
  top: 30px;
  z-index: 11;
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
