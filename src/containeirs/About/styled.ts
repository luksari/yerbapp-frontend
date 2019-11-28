import styled from 'styled-components';
import { theme } from 'theme/theme';
/** @see Example usage of styled component styling */
export const HeaderStyled = styled.h1`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.xl};
      display: grid;
`;

export const AboutContainer = styled.div`
      margin: 0;
      width: 100%;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.xl};
      display: grid;
`;

export const TextMain = styled.div`
      width: 100%;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
`;
