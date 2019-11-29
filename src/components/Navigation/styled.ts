import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavSection = styled.nav`
        margin: 0;
        display: grid;
    `;

export const Sidebar = styled.div`
        width: 270px;
        background: ${({ theme }) => theme.colors.primary};
        border-right-style: solid;
        border-width: 1px;
        border-color: ${({ theme }) => theme.colors.mainText};

        @media (max-width: 1400px)
        {
          width: 230px;
        }
        @media (max-width: 700px)
        {
          width: 150px;
        }
        @media (max-width: 400px)
        {
          width: 80px;
        }
    `;

export const SidebarTitle = styled.h2`
        margin: 0;
        color: ${({ theme }) => theme.colors.mainText};
        padding-top: ${({ theme }) => theme.metrics.padding.l};
        padding-bottom: ${({ theme }) => theme.metrics.padding.l};
        font-size: ${({ theme }) => theme.metrics.fontSize.xl};
        font-family: 'Montserrat', sans-serif;
        text-align: center;

        @media (max-width: 1400px)
        {
          font-size: ${({ theme }) => theme.metrics.fontSize.xl};
        }
        @media (max-width: 700px)
        {
          font-size: ${({ theme }) => theme.metrics.fontSize.l};
        }
        @media (max-width: 400px)
        {
          font-size: ${({ theme }) => theme.metrics.fontSize.m};
        }
    `;

export const SidebarList = styled.ul`
        padding: 0;
    `;

export const SidebarItem = styled.li`
        line-height: 1;
    `;

export const SidebarLink = styled(Link)`
        font-size: ${({ theme }) => theme.metrics.fontSize.xl};
        color: ${({ theme }) => theme.colors.mainText};
        display: block;
        padding: ${({ theme }) => theme.metrics.padding.xs};
        text-align: center;
        font-family: 'Montserrat', sans-serif;

        &:hover {
          color: ${({ theme }) => theme.colors.labelText};
        }
    `;

export const SidebarText = styled.p`
        padding-top: ${({ theme }) => theme.metrics.padding.xs};
        font-size: ${({ theme }) => theme.metrics.fontSize.l};

        @media (max-width: 700px)
        {
            font-size: ${({ theme }) => theme.metrics.fontSize.m};
        }
        @media (max-width: 400px)
        {
            font-size:0;
        }
    `;
