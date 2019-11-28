import styled from 'styled-components';

export const StyledTopbar = styled.section`
  height: 120px;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.decorators};
  background: ${({ theme }) => theme.colors.mainBackground};
`;
