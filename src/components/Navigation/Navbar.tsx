import React from 'react';
import Navlinks from './Navlinks'
import { NavSection, Sidebar, Sidebar_h2 } from 'components/Navigation/styled';

const Navbar = () => {
    return (
        <NavSection >
            <Sidebar>
                <Sidebar_h2 >YerbaApp</Sidebar_h2 >
                <Navlinks />
            </Sidebar>
        </NavSection >
    )
}

export default Navbar;