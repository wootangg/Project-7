import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = (props) => {

    return (
        <nav className="main-nav">
            <ul>
              <li><NavLink to='/clouds'>Clouds</NavLink></li>
              <li><NavLink to='/mountains'>Mountains</NavLink></li>
              <li><NavLink to='/flowers'>Flowers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;