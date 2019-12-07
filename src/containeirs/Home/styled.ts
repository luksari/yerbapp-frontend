import styled from 'styled-components';
import { Button } from 'components/Button';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  justify-content: left;
  position: relative;
  bottom: ${({ theme }) => theme.metrics.margin.xl};
`;

export const SubMain = styled.div`
  display: flex;
  left: ${({ theme }) => theme.metrics.margin.xl};
  top: ${({ theme }) => theme.metrics.margin.xxl};
  flex-direction: column;
  padding: ${({ theme }) => theme.metrics.padding.m};
  position: absolute;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  margin: 0;
  background-size: cover;
`;

export const Slogan = styled.h2`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  font-weight: 750;
  color: ${({ theme }) => theme.colors.alternativeText};
  width: 900px;
  @media screen and (max-width: 500px){
    font-size: ${({ theme }) => theme.metrics.fontSize.m};
  }
`;

export const ExploreButton = styled(Button)`
  width:280px;
  height:90px;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  margin: ${({ theme }) => theme.metrics.margin.l};

  @media screen and (max-width: 500px){
    width:190px;
    height:45px;
    font-size: ${({ theme }) => theme.metrics.fontSize.l};
  }
`;
