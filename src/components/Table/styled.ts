import styled, { css, keyframes } from 'styled-components';
import { Icon } from 'antd';

export const tableSidePadding = '30px';

const cellStyled = () => css`
  padding: 12px 0;
  white-space: nowrap;

  &:first-child {
    padding-left: ${tableSidePadding};
  }

  &:last-child {
    padding-right: ${tableSidePadding};
  }
`;

export const Cell = styled.td<{ alignText: string }>`
  ${cellStyled()}

  height: 60px; /** works like min-height */
  text-align: ${({ alignText }) => alignText};
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const HeadCell = styled.th<{ alignText: string }>`
  user-select: none;
  text-align: ${({ alignText }) => alignText};
  color: ${({ theme }) => theme.colors.info};
  background: ${({ theme }) => theme.colors.mainBackground};
  font-weight: 600;
  padding: 20px 0;

  &:first-child {
    padding-left: ${tableSidePadding};
  }

  &:last-child {
    padding-right: ${tableSidePadding};
  }
`;

export const HeadRow = styled.tr`
  background: ${({ theme }) => theme.colors.primaryText};
  font-size: 0.85em;
  box-shadow: 0 10px 10px -5px ${({ theme }) => theme.colors.shadow};

`;

// Row uses .is-nested class to avaoid circular dependency between Row and NestedRow components.
export const Row = styled.tr<{ isEven: boolean }>`
  background: ${({ theme }) => theme.colors.disabledBackground};

  & + .is-nested {
    /** important is required for nested tables to keep the same color as row */
    background: ${({ theme }) => theme.colors.disabledBackground} !important;
  }

  ${({ isEven }) => isEven && css`
    background: ${({ theme }) => theme.colors.mainBackground}7e;

    & + .is-nested {
      /** important is required for nested tables to keep the same color as row */
      background: ${({ theme }) => theme.colors.mainBackground}7e !important;
    }
  `}
`;

export const EmptyRow = styled.tr`
  background: ${({ theme }) => theme.colors.mainBackground};
`;

export const NestedRow = styled.tr`
  display: table-row;

  ${HeadRow}, ${Row} {
    background: transparent;
  }
`;

// sorted: true false or undefined
export const SortingIcon = styled(Icon).attrs({
  type: 'arrow-up',
}) <{ sortedDesc?: boolean }>`
  vertical-align: middle;
  margin-left: 4px;
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  transition: transform 0.2s;

  ${({ sortedDesc }) => css`
    ${sortedDesc === undefined && 'display: none;'}
    ${sortedDesc === true && 'transform: rotate(180deg);'}
  `}
`;

export const TableContainer = styled.table`
  width: 100%;
  text-align: left;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.colors.shadow};

  & & {
    border-left: 5px solid ${({ theme }) => theme.colors.decorators};
  }
`;

const blinkFrames = keyframes`
  0% {
    filter: brightness(100%);
  }

  100% {
    filter: brightness(125%);
  }
`;

export const MockupCellData = styled.div`
  height: 1em;
  background: ${({ theme }) => theme.colors.disabledBackground};
  opacity: 0.35;
  animation: ${blinkFrames} 500ms ease-in-out alternate-reverse infinite;
`;
