import styled from 'styled-components';
import { transparentize } from 'polished';

export const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledAuthLayout = styled(StyledAppLayout)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthWrapper = styled(ComponentWrapper)`
  min-height: 100%;
`;
