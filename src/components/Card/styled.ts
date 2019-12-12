import styled from 'styled-components';
import { Button } from 'components/Button';

export const CardContainer = styled.div`
  height: 420px;
  width: 640px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  color: ${({ theme }) => theme.colors.primaryTextDarken};
  box-shadow: 0 10px 10px -5px ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.alternativeText};
  border-radius: 4px;
`;

export const YerbaTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.s};
  margin: ${({ theme }) => theme.metrics.margin.m};
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  font-weight: 750;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${({ theme }) => theme.metrics.margin.m};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width:100%;
  max-height:100%;
  width: 100%;
  height: auto;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${({ theme }) => theme.metrics.margin.m};
`;

export const Description = styled.text`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.l};
  display: flex;
  overflow: hidden;
  max-width: 100ch;
`;

export const Details = styled.ul`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.m};
  display: flex;
  flex-direction: column;
`;

export const Rating = styled.ul`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.m};
  display: flex;
  flex-direction: column;
`;

export const CardButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.l};
`;
