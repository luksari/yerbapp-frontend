import styled from 'styled-components';
import { Button } from 'components/Button';
import { FormCard } from 'components/Form/styled';

export const CardContainer = styled(FormCard)`
  height: 480px;
  width: 620px;
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const YerbaTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.metrics.padding.s};
  margin: ${({ theme }) => theme.metrics.margin.s};
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  font-weight: 750;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${({ theme }) => theme.metrics.margin.s};
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
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 4;
  font-weight: 450;
  margin: ${({ theme }) => theme.metrics.margin.s};
`;

export const DataContainer = styled.div`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.s};
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.s};
  padding-right: ${({ theme }) => theme.metrics.padding.m};
  font-weight: 700;
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  padding: ${({ theme }) => theme.metrics.padding.s};
  padding-right: ${({ theme }) => theme.metrics.padding.m};
  font-weight: 550;
`;

export const CardButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.l};
`;
