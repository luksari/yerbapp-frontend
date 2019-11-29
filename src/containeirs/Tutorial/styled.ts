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
export const TutorialContainer = styled.section`
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
export const ListContainer = styled.div`
  ${({ theme }) => css`
      margin: auto;
      width: 100%;
      background: ${theme.colors.mainBackground};
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
  `}
`;
export const ListItem = styled.p`
  ${({ theme }) => css`
      border-top: 2px dashed;
      border-color: blue !important;
      margin:0; padding: 30px;
      counter-increment: section;
      position: relative;
    &:nth-child(even):before {
      content: counter(section);
      right: 100%;
      margin-right: -20px;
      position: absolute;
      border-radius: 50%;
      padding: 10px;
      height: 20px;
      width: 20px;
      background-color: blue;
      text-align:center;
      color: white;
      font-size: 110%;
    &:nth-child(odd):before {
      content: counter(section);
      right: 100%;
      margin-left: -20px;
      position: absolute;
      border-radius: 50%;
      padding: 10px;
      height: 20px;
      width: 20px;
      background-color: blue;
      text-align:center;
      color: white;
      font-size: 110%;
  `}
`;
