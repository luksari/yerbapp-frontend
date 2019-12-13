import styled, { css } from 'styled-components';
import { Button } from 'components/Button';

export const TutorialWrapper = styled.section`
  ${({ theme }) => css`
      padding: ${theme.metrics.padding.m};
      font-size: ${theme.metrics.fontSize.m};
      display: flex;
      flex-direction: column;
      align-items: center;
  `}
`;

export const StyledButton = styled(Button)`
  margin: 10px;
`;
export const ButtonsContainer = styled.div`
  ${() => css`
      display: flex;
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
      height: 150px;
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
