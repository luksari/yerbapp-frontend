import styled, { css } from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const NavSection = styled.nav`
  max-width: ${({ theme }) => theme.metrics.width.sidebarWidth};
  display: flex;
  height: 100%;
  flex-direction: column;
  z-index: 1;
  background-color:  ${({ theme }) => theme.colors.primaryText} ;
  align-items: center;
  box-shadow: 10px 0px 10px -5px ${({ theme }) => theme.colors.shadow};
  position: fixed;
`;

export const StyledLogo = styled(Logo)`
  width: 50%;
  height: auto;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.xl};
  background: ${({ theme }) => theme.colors.primaryTextDarken};
  & span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AppTitle = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  margin: 0;
  color: ${({ theme }) => theme.colors.alternativeText};
  font-weight: 700;
`;


export const StyledAppTitle = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  color: ${({ theme }) => theme.colors.alternativeText};
`;
export const NavList = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  display:block;
`;


export const NavIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  width: 100%;
`;

export const NavText = styled.p`
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  color: ${({ theme }) => theme.colors.alternativeText};
  font-weight: 500;
  margin-top: ${({ theme }) => theme.metrics.margin.m};
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 150px;
  color: ${({ theme }) => theme.colors.alternativeText};
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme }) => css`
    padding: ${theme.metrics.padding.xxl} ${theme.metrics.padding.xl};
    &:hover {
      background: ${theme.colors.primaryTextDarken}
      color: ${theme.colors.info}
      ${NavText} {
        color: ${theme.colors.info}
      }
    }
  `}`;

export const NavItem = styled.li<{selected: boolean; visible: boolean}>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &::after{
    width: 80%;
    content: '';
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryTextDarken};
  }
  ${({ selected, theme }) => selected && css`
    background: ${theme.colors.primaryTextDarken};
    border-left: 5px solid ${theme.colors.info};
      color: ${theme.colors.info};
      ${NavText}, ${NavIcon}{
        color: ${theme.colors.info}
      }
  `}
  ${({ visible }) => !visible && css`
      display: none
  `}
`;
