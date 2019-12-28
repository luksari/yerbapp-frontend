import styled, { css } from 'styled-components';
import { IconPosition, ButtonType, ButtonVariant } from './types';

const THEME = {
  [ButtonType.Primary]: css`
    background-color: ${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.alternativeText};
    &:hover {
      background: ${({ theme }) => theme.colors.infoHover};
    }
    &:active {
      box-shadow: none;
    }
  `,
  [ButtonType.Secondary]: css`
    background-color: ${({ theme }) => theme.colors.alternative};
    color: ${({ theme }) => theme.colors.alternativeText};
    &:hover {
      background: ${({ theme }) => theme.colors.alternativeHover};
    }
    &:active {
      box-shadow: none;
    }
  `,
  [ButtonType.Danger]: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.alternativeText};
    &:hover {
      background: ${({ theme }) => theme.colors.dangerHover};
    }
    &:active {
      box-shadow: none;
    }
  `,
  [ButtonType.Warning]: css`
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.alternativeText};
  &:hover {
    background: ${({ theme }) => theme.colors.warningHover};
  }
  &:active {
    box-shadow: none;
  }
`,
  [ButtonType.Link]: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.info};
    &:hover {
      color: ${({ theme }) => theme.colors.infoHover};
    }
    &:active {
      box-shadow: none;
    }
  `,
};

const iconPositionMap = {
  [IconPosition.Bottom]: css`
    flex-direction: column-reverse;
  `,
  [IconPosition.Left]: css`
    flex-direction: row
  `,
  [IconPosition.Right]: css`
    flex-direction: row-reverse;
  `,
  [IconPosition.Top]: css`
    flex-direction: column;
  `,
};

const ButtonVariantMap = {
  [ButtonVariant.Normal]: css`
    max-width: 220px;
  `,
  [ButtonVariant.Wide]: css`
    max-width: 360px;
  `,
  [ButtonVariant.Narrow]: css`
    max-width: 50px;
    font-size: 0.8rem;
`,
};

const IconPositionMixin = (iconPosition: IconPosition) => iconPositionMap[iconPosition];

export const ButtonBox = styled.button<{ disabled?: boolean; themeType: ButtonType; iconPosition: IconPosition; variant: ButtonVariant }>`
  border-radius: 4px;
  height: 35px;
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  transition: all .3s ease;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  min-width: 220px;
  ${({ iconPosition }) => IconPositionMixin(iconPosition)};

  svg {
    height: 100%;
    margin-right: 10px;;
  }

  ${({ disabled, themeType, theme }) => {
    if (disabled) {
      return css`
        background-color: ${theme.colors.disabledBackground};
        color: ${theme.colors.disabledText};
        cursor: not-allowed;
      `;
    }
    return THEME[themeType];
  }}
  ${({ variant }) => {
    return ButtonVariantMap[variant];
  }}
  `;
