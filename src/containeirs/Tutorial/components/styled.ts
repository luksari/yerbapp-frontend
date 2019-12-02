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
  ${({ theme }) => css`
      display: flex;
      align-self: center;
      justify-content:space-evenly;
      margin-top: ${theme.metrics.margin.l};
  `}
`;
export const DescriptionArea = styled.section`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
      width: 750px;
      align-items: center;
  `}
`;
