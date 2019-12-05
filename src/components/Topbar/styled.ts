import styled from 'styled-components';

export const StyledTopbar = styled.section`
  box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.decorators};
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.xl};
`;
