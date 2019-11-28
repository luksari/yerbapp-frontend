import styled, { css } from 'styled-components';
/** @see Example usage of styled component styling */
export const HeaderStyled = styled.h2`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.xl};
      display: grid;
  `}
`;
export const AboutContainer = styled.section`
  ${({ theme }) => css`
      margin: 0;
      width: 100%;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.xl};
      display: grid;
  `}
`;
export const TextMain = styled.p`
  ${({ theme }) => css`
      width: 100%;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
  `}
`;
