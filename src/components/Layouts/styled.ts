import styled from 'styled-components';
import { transparentize } from 'polished';

export const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 235px;
`;

export const StyledAuthLayout = styled(StyledAppLayout)`
  width: 100%;
  height: 100vh;
  margin: 0;
  background: url('./assets/yapp_bg.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &::after {
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: ${transparentize(0.3, '#fff')}
  }
  *{
    z-index: 1;
  }
`;

export const ComponentWrapper = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 115px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AuthWrapper = styled(ComponentWrapper)`
  min-height: 100%;
  align-items: center;
`;
