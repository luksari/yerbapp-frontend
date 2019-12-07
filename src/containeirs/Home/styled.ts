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
`;
export const SubMain = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.metrics.margin.xl};
  margin-top: ${({ theme }) => theme.metrics.margin.xl};
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255, 0.8);
  padding: ${({ theme }) => theme.metrics.padding.l};
  border-radius: 30px;
  position: absolute;

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  margin: 0;
`;

export const ImageText = styled.h2`
  margin-left: ${({ theme }) => theme.metrics.margin.xl};
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media screen and (max-width: 500px){
    font-size: ${({ theme }) => theme.metrics.fontSize.m};
  }
`;

export const ExploreButton = styled(Button)`
  width:280px;
  height:90px;
  margin-top: ${({ theme }) => theme.metrics.margin.l};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  align-items: center;

  @media screen and (max-width: 500px){
    width:190px;
    height:45px;
    font-size: ${({ theme }) => theme.metrics.fontSize.l};
  }
`;

export const NavButton = styled(Button)`
  display: flex;
  border: solid;
  border-color: red;
`;
