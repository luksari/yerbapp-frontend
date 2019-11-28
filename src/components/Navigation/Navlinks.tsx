import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar_ul, Sidebar_li, Sidebar_a } from 'components/Navigation/styled';

const Navlinks = () => {
    return (
    <Sidebar_ul>
        <Sidebar_li >
            <Link to='/'>
                <Sidebar_a>Strona główna</Sidebar_a>
            </Link>
        </Sidebar_li>
    
        <Sidebar_li >
            <Link to='/tutorial'>
                <Sidebar_a>Poradnik</Sidebar_a>
            </Link>
        </Sidebar_li>

        <Sidebar_li>
            <Link to='/explore'>
                <Sidebar_a>Przeglądaj</Sidebar_a>
            </Link>
        </Sidebar_li>

        <Sidebar_li>
            <Link to='/about'>
                <Sidebar_a>O nas</Sidebar_a>
            </Link>
        </Sidebar_li>

        <Sidebar_li>
            <Link to='/profile'>
                <Sidebar_a>Profil</Sidebar_a>
            </Link>
        </Sidebar_li>

        <Sidebar_li>
            <Link to='/contact'>
                <Sidebar_a>Kontakt</Sidebar_a>
            </Link>
        </Sidebar_li>
    </Sidebar_ul>
    )
}

export default Navlinks;