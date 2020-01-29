import React from 'react';
import './../../App.css';
import NavClasses from './Nav.module.css';
import { NavLink } from 'react-router-dom';
function Nav(){
    return (
        <nav className="App-sidebar">
            <ul>
                <li><NavLink to='profile' className={NavClasses.navItem} activeClassName={NavClasses.active}>Profile</NavLink></li>
                <li><NavLink to='dialog' className={NavClasses.navItem} activeClassName={NavClasses.active} >Message</NavLink></li>
                <li><NavLink to='news' className={NavClasses.navItem} activeClassName={NavClasses.active} >News</NavLink></li>
                <li><NavLink to='music' className={NavClasses.navItem} activeClassName={NavClasses.active}>Music</NavLink></li>
                <li><NavLink to='settings' className={NavClasses.navItem} activeClassName={NavClasses.active} >Settings</NavLink></li>
            </ul>
      </nav>
    )
}

export default Nav