import styled from 'styled-components';

export const TitleBarWrapper = styled.div`
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.mainBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryText};

  display: grid;
  grid-template-columns: 1.5fr 3fr 1.5fr;
  align-items: center;
`;

export const TitleBarTitle = styled.h1`
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: center;
  margin: 0;
  font-weight: 500;
  font-size: 21px;
`;
