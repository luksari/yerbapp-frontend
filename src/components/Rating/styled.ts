import { ReactComponent as Logo } from 'assets/logo.svg';
import styled, { css } from 'styled-components';
import Rating from 'react-rating';
import { SizeType } from './types';


export const FullSymbol = styled(Logo)`
  width: 40px;
  height: 40px;
  pointer-events: none;
  padding: 2px;
`;

export const EmptySymbol = styled(FullSymbol)`
  filter: grayscale(100%) brightness(135%);
`;

export const StyledRating = styled(Rating)<{ readonly?: boolean }>`
  display: flex !important;
  align-items: center;
  span {
    max-width: 40px;
    max-height: 40px;
    transition: transform 0.1s linear;
    &:hover {
      transform: ${({ readonly }) => readonly ? 'none' : 'scale(1.1)'};
    }
  }
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.metrics.fontSize.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.labelText};
  margin-bottom: 9px;
`;

const orientationStyles = (vertical: boolean) => vertical ? css`
  flex-direction: column;
` : css`
  flex-direction: row;
  align-items: center;
  ${InputLabel} {
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

const sizeStylesMap = {
  [SizeType.Small]: css`
    ${FullSymbol} {
      width: 30px;
      height: 30px;
    }
  `,
  [SizeType.Normal]: css`
    width: 40px;
    height: 40px;
  `,
  [SizeType.Big]: css`
    width: 80px;
    height: 80px;
  `,
};

export const InputWrapper = styled.div<{size: SizeType; vertical: boolean}>`
  display: flex;
  ${({ vertical }) => orientationStyles(vertical)}
  ${({ size }) => sizeStylesMap[size]}
`;
