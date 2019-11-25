import styled, { css } from 'styled-components';
/** @see Example usage of styled component styling */
export const StyledForm = styled.form`
  ${({ theme }) => css`
      margin: 0;
      width: 560px;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.xl};
      font-size: ${theme.metrics.fontSize.s};
      box-shadow: 0 10px 10px -5px ${theme.colors.decorators};
      display: grid;
      grid-row-gap: ${theme.metrics.margin.m};
      border-radius: 4px;
  `}
`;
