import styled from 'styled-components';
import { Button } from 'components/Button';

export const CardContainer = styled.div`
  height: 720px;
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.alternativeText};
  box-shadow: 10px 0px 10px -5px ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.primaryText};
`;

export const YerbaTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.m};
  margin: 0;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  font-weight: 700;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  padding: ${({ theme }) => theme.metrics.padding.m};
`;

export const LeftSide = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.metrics.margin.m};
  flex: 1;
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
  margin: ${({ theme }) => theme.metrics.margin.l};
  flex: 1;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.l};
  margin: ${({ theme }) => theme.metrics.margin.l};
  display: flex;
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
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.margin.l};
`;


export const CardButton = styled(Button)`
  height: auto;
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
`;
