import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'theme/theme';

const Wrapper = styled('div')`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
  }

  .nav-wrapper {
    display: flex;
    position: center;
  }

  .nav-wrapper .nav-sidebar {
    width: 20%;
    float:left;
    height: 100%;
    background: #333340;
    padding: 30px 0px;
    position: fixed;
  }

  .nav-wrapper .nav-sidebar h2{
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
  }

  .nav-wrapper .nav-sidebar ul li{
    border-bottom: 1px solid rgba(0,0,0,0.05);
    border-top: 1px solid rgba(255,255,255,0.05);
    text-align: center;
    font-size: 25px;
  }

  .nav-wrapper .nav-sidebar ul li:hover{
    background-color: #594f8d;
  }

  .nav-wrapper .nav-sidebar ul li a{
    color: #bdb8d7;
    display: block;
    padding: 15px;
  }

  .wrapper .sidebar ul li:hover a{
    color: #fff;
  }
`;

const Navbar = () => {
    return (
    <Wrapper>
        <nav className="nav-wrapper">
            <div className="nav-sidebar">
                <h2>YerbaApp</h2>
                <ul>
                    <li>
                        <Link to='/'>
                        <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/tutorial'>
                        <a>Tutorial</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/explore'>
                        <a>Explore</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                        <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                        <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                        <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </Wrapper>
    )
}

export default Navbar;