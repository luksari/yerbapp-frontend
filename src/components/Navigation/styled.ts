import styled from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export const NavSection = styled.nav`
    display: block;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    background-color: #202020;
    cursor:pointer;
    transition:width .3s ease;

    &:hover {
      width:220px;
    }
    @media screen and (min-width: 600px) {
      width: 80px;
    }
    `;

export const NavLink = styled(Link)`
    `;

export const NavList = styled.ul`
    padding: 0;
    list-style-type: none;
    text-decoration: none;
    display:block;
    `;

export const NavItem = styled.li`
    font-family: 'Montserrat', sans-serif;
    white-space: pre;

    a{
      padding 20px;
      position: relative;
      display:inline-block;
      color:white;
      width: 100%;

      &:hover{
        background-color: #718090;
        color: white;
      }
    }
    `;

export const NavIcon = styled(Icon)`
      font-size: ${({ theme }) => theme.metrics.fontSize.xl};
      width:30px;
      height:30px;
      cursor:pointer;
      @media screen and(min-width:600px) {
        width:32px;
    `;

export const NavText = styled.a`
      display:block;
      margin-left:20px;
      height:100%;
      font-size: ${({ theme }) => theme.metrics.fontSize.m};

    `;
