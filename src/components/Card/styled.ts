import styled, { keyframes } from 'styled-components';
import { Button } from 'components/Button';

export const FlipStart = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(90deg);
  }
`;

export const FlipEnd = keyframes`
  0% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0deg);
  }
`;

export const CardContainer = styled.div`
  height: 720px;
  width: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: outset;
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.disabledText};
  color: ${({ theme }) => theme.colors.labelText};
  transition: width 2s;
`;

export const YerbaTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.m};
  margin: 0;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  font-weight: 700;
`;

export const CardMain = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Description = styled.div`
font-size: ${({ theme }) => theme.metrics.fontSize.m};
padding: ${({ theme }) => theme.metrics.padding.m};
font-weight: 600;
`;

export const Details = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.m};
`;

export const Rating = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.m};
`;

export const CardFooter = styled.div`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.margin.m};
`;


export const CardButton = styled(Button)`
  height: auto;
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.l} ${({ theme }) => theme.metrics.padding.xl};
  background: ${({ theme }) => theme.colors.labelText};
`;
