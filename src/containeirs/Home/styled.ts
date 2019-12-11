import styled from 'styled-components';
import { Button } from 'components/Button';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.metrics.margin.l};
  width: 700px;
  align-items: center;
  justify-content: center;
`;

export const SloganButtonContainer = styled.div`
  display: flex;
  left: ${({ theme }) => theme.metrics.margin.xl};
  top: ${({ theme }) => theme.metrics.margin.xxl};
  flex-direction: column;
  padding: ${({ theme }) => theme.metrics.padding.m};
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  font-weight: 750;
  color: ${({ theme }) => theme.colors.alternativeText};
  text-align: center;
`;

export const ExploreButton = styled(Button)`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.l};
  margin: ${({ theme }) => theme.metrics.margin.l};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
`;
