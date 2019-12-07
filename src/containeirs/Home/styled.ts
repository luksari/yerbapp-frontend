import styled from 'styled-components';
import { Button } from 'components/Button';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('./assets/bg2.png');
  background-size: 100% 100%;
  background-position: center;
`;

export const SloganButtonContainer = styled.div`
  display: flex;
  left: ${({ theme }) => theme.metrics.margin.xl};
  top: ${({ theme }) => theme.metrics.margin.xxl};
  flex-direction: column;
  padding: ${({ theme }) => theme.metrics.padding.m};
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  font-weight: 750;
  color: ${({ theme }) => theme.colors.alternativeText};
  width: 900px;
`;

export const ExploreButton = styled(Button)`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: 0 ${({ theme }) => theme.metrics.padding.xl};
  margin: ${({ theme }) => theme.metrics.margin.xl};
  display: flex;
  justify-content: center;
`;
