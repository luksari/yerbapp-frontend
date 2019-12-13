import styled from 'styled-components';
import { Button } from 'components/Button';
import { FormCard } from 'components/Form/styled';

export const CardContainer2 = styled.article`
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

export const CardContainer = styled(FormCard)`
  height: 420px;
  width: 640px;
  display: flex;
  flex-direction: row;
  padding: 0;
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
  overflow: auto;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  padding: ${({ theme }) => theme.metrics.padding.s};
  padding-right: ${({ theme }) => theme.metrics.padding.m};
  text-align: justify;
  overflow: hidden;
  font-weight: 450;
`;

export const DataContainer = styled.div`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.s};
  display: flex;
  flex-direction: column;
`;

export const CardButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.l};
`;
