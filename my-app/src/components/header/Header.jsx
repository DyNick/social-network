import React from 'react';
import './../../App.css';
import './Header.css';
import logo from './../../logo.svg';
function Header(){
    return (
        <header className="App-header">
            <img src={logo} className="logo"/>
      </header>
    )
}

export default Header