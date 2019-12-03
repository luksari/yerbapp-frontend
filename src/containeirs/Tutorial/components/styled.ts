import styled, { css } from 'styled-components';
/** @see Example usage of styled component styling */
export const TutorialWrapper = styled.section`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
      border: solid;
      height: 750px;
  `}
`;
export const ButtonsContainer = styled.div`
  ${() => css`
      width: 400px;
      display: flex;
      flex-direction: row;
      align-itself: center;
      justify-content: space-evenly;
      margin: auto;
      position: absolute:
      height: 90px;
      bottom: 0;
  `}
`;
export const DescriptionArea = styled.div`
  ${({ theme }) => css`
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: grid;
      width: 750px;
      height: 200px;
      margin-bottom: ${theme.metrics.margin.s};
      margin-top: ${theme.metrics.margin.s};
  `}
`;
export const Image = styled.img`
  ${({ theme }) => css`
      padding: ${theme.metrics.padding.m};
      display: grid;
      width: 450px;
      height: 450px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${theme.metrics.margin.s};
      margin-top: ${theme.metrics.margin.s};

  `}
`;
