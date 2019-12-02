import styled, { css } from 'styled-components';
/** @see Example usage of styled component styling */
export const TutorialWrapper = styled.section`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
  `}
`;
export const ButtonsContainer = styled.div`
  ${() => css`
      display: flex;
      flex-flow: row wrap;
  `}
`;
