import styled from 'styled-components';

export const ActionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

export const BasicActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > * {
    flex: 1 0 auto;
  }
`;
