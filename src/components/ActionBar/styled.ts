import styled from 'styled-components';

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  & > * {
    flex: 1 0 auto;
  }
`;
