import styled, { css } from 'styled-components';
import { Icon } from 'antd';
import { IconPosition, ButtonType } from './types';

const THEME = {
  [ButtonType.Primary]: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.alternativeText};
    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
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
    color: ${({ theme }) => theme.colors.primaryText};
    &:hover {
      background: ${({ theme }) => theme.colors.dangerHover};
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

const IconPositionMixin = (iconPosition: IconPosition) => iconPositionMap[iconPosition];

export const IconImage = styled(Icon)``;

export const ButtonBox = styled.button<{ disabled?: boolean; themeType?: ButtonType; iconPosition: IconPosition; className?: string }>`
  border-radius: 4px;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  transition: all .3s ease;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  /**
   * All buttons on design are 220px.
   * If you want to change this, make sure you check all views if they are OK
   */
  width: 220px;
  ${({ iconPosition }) => IconPositionMixin(iconPosition)};

  ${IconImage} {
    font-size: 18px;
    height: 100%;
    margin: 0 10px;
    line-height: 35px;
    margin-right: '5px';
  }

  ${({ disabled, themeType }) => {
    if (disabled) {
      return css`
        background-color: ${({ theme }) => theme.colors.disabledBackground};
        color: ${({ theme }) => theme.colors.disabledText};
        cursor: not-allowed;
      `;
    }
    return THEME[themeType || ButtonType.Primary];
  }}
  `;