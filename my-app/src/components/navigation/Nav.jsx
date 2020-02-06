import React from 'react';
import './../../App.css';
import NavClasses from './Nav.module.css';
import { NavLink } from 'react-router-dom';
const linkParams = [
     {
        link: '/profile',
        name: 'Profile'
    },
     {
        link: '/dialogs',
        name: 'Message'
    },
     {
        link: '/news',
        name: 'News'
    },
     {
        link: '/music',
        name: 'Music'
    },
    {
        link: '/settings',
        name: 'Settings'
    }
];
function Nav(){

    return (
        <nav className="App-sidebar">
            <ul>
                {
                linkParams.map((item,index)=>(
                    <li key={index}><NavLink  to={item.link} className={NavClasses.navItem} activeClassName={NavClasses.active}>{item.name}</NavLink></li> 
                    )
                )
                }
          
            </ul>
      </nav>
    )

}

export default Nav