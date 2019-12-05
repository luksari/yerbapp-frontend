import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Button } from 'components/Button';

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

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBackground};
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    background: ${theme.colors.primary};
    align-items: center;
    justify-content: center;
  `}
`;

export const NoMatchLoader = styled(Logo)`
  width: 350px;
  height: 350px;
  position: absolute;
  animation: ${pulse} 2s infinite;
  z-index: 1;
`;

export const NoMatchAltLoader = styled(Logo)`
  width: 350px;
  height: 350px;
  position: absolute;
  animation: ${pulseFade} 2s infinite;
  z-index: 0;
`;

export const NoMatchLogo = styled(Logo)`
  width: 60px;
  height: 60px;
  align-self: center;
`;

export const NoMatchAppTitle = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.alternative};
  font-weight: 700;
  text-align: center;

`;

export const NoMatchText = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  color: ${({ theme }) => theme.colors.alternative};
  font-weight: 700;
  text-align: center;
  margin-top: 200px;
`;

export const LogoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: flex-start;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.margin.s};
`;

export const RedirectButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.xl};
  align-self: center;
  background: ${({ theme }) => theme.colors.primaryText};
`;
