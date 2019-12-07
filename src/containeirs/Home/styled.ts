import styled, { css } from 'styled-components';
import { Button } from 'components/Button';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TopbarWrapper = styled.div`

`;

export const Main = styled.div`
  display: flex;
  flex: 7;
  justify-content: left;
  max-width:100%;
  max-height:80%;
`;
export const SubMain = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.metrics.margin.xl};
  margin-top: ${({ theme }) => theme.metrics.margin.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255, 0.8);
  padding: ${({ theme }) => theme.metrics.padding.l};
  border-radius: 30px;
  position: absolute;

`;

export const Image = styled.img`
  flex:1;
`;

export const ImageText = styled.h2`
  margin-left: ${({ theme }) => theme.metrics.margin.xl};
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const ExploreButton = styled(Button)`
  width:280px;
  height:90px;
  margin-top: ${({ theme }) => theme.metrics.margin.l};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex: 1;
  border: solid;
  border-color: red;
  justify-content: center;
  text-align: center;
`;

export const NavButton = styled(Button)`
  display: flex;
  border: solid;
  border-color: red;
`;
