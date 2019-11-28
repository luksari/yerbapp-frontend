import styled from 'styled-components';
import { theme } from 'theme/theme';

export const NavSection = styled('nav')`
        margin: 0;
        box-shadow: 0 10px 10px 0px ${theme.colors.decorators};
        display: grid;
    `

export const Sidebar = styled('div')`
        width: 250px;
        height: 100%;
        background: ${theme.colors.primary};
        position: fixed;
        justify-items: center;
        text-align: center;
    `

export const Sidebar_h2 = styled('h2')`
        color: ${theme.colors.labelText};
        padding-top: ${theme.metrics.padding.m};
        font-size: ${theme.metrics.fontSize.xl};
        text-transform: uppercase;
    `

export const Sidebar_ul = styled('ul')`
        margin: 0;
        padding: 0;
    `

export const Sidebar_li = styled('li')`
        display: block;
        padding: 15px;
    `

export const Sidebar_a = styled('a')`
        font-size: ${theme.metrics.fontSize.l};
        color: ${theme.colors.alternative};
    `
