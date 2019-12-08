import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTopbar = styled.section`
  box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.decorators};
  background: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.xl};
`;

export const UserProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.metrics.fontSize.s};
    color: ${theme.colors.labelText};
    margin: 0 ${theme.metrics.margin.xl};
    font-weight: 700;
  `}
`;
