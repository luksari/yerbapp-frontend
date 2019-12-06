import styled from 'styled-components';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Topbar } from 'components/Topbar';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HomeTopbar = styled(Topbar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.metrics.padding.l};
  border: solid;
  border-color: blue;

`;

export const Main = styled.div`
  display: flex;
  flex: 6;
  justify-content: left;
`;
export const SubMain = styled.div`
  margin-left: ${({ theme }) => theme.metrics.margin.xxl};
  margin-top: ${({ theme }) => theme.metrics.margin.xxxl};
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
`;

export const Image = styled.img`
  flex: 1;
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
  color: ${({ theme }) => theme.colors.primary}
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
`;

export const HomeFooter = styled(Footer)`
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
