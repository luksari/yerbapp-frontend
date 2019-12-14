import styled, { css } from 'styled-components';
import { tableSidePadding } from '../Table/styled';

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${tableSidePadding};
  margin: 1em 0;
`;

const spacingStyles = () => css`
  & > * {
    margin-left: ${tableSidePadding};
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

export const TableHeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  ${spacingStyles()};
`;

export const TableHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${spacingStyles()};
`;
