import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.mainBackground};
`;

const pulse = keyframes`
    0% {
     transform: scale(1);
    }
    50% {
     transform: scale(1.1);
    }
    100% {
    transform: scale(1);
    }
`;

const pulseFade = keyframes`
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(1.45);
    }
    100% {
      opacity: 0;
      transform: scale(3);
    }
`;

export const StyledLoader = styled(Logo)`
  width: 80px;
  height: 80px;
  position: absolute;
  animation: ${pulse} 2s infinite;
  z-index: 1;
`;

export const StyledAltLoader = styled(StyledLoader)`
  animation: ${pulseFade} 2s infinite;
  z-index: 0;
`;
