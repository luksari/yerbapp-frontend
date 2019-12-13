import styled from 'styled-components';
import { transparentize } from 'polished';

export const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.metrics.width.sidebarWidth};
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

export const HomepageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background: url('./assets/bg2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
