import React from 'react';
import './../../App.css';
import './Header.css';
import logo from './../../logo.svg';
import {NavLink} from 'react-router-dom'
function Header(props){
    return (
        <header className="App-header">
            <img src={logo} className="logo"/>
            <div className='loginBlock'>
                {props.isAuth? props.login:<NavLink to={'/login'}>Login</NavLink>}
            </div>
      </header>
    )
}

export default Header