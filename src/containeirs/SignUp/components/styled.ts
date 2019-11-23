import styled from 'theme/theme';
import { css } from '@emotion/core';
/** @see Example usage of styled component styling */
export const StyledForm = styled('form')`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.xl};
      font-size: ${theme.metrics.fontSize.s};
      box-shadow: 0 10px 10px -10px ${theme.colors.decorators};
      display: grid;
      grid-row-gap: ${theme.metrics.margin.m}
  `}
`;
