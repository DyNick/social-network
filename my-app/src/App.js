import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './components/header/HeaderContainer';
import Footer from './components/footer/Footer';
import Nav from './components/navigation/Nav';
import Content from './components/content/Content';
import {BrowserRouter,Route} from 'react-router-dom';
import Dialog from './components/dialog/Dialog';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
//import Users from './components/users/Users'
import UsersContainer from './components/users/UsersContainer';
function App(props) {
  //debugger;
  return (
    // <BrowserRouter>
   
    <div className="App">
        <div className='container grid'>
          <HeaderContainer/>
          <Nav/>
          <div className='App-wrapper-content'>

            <Route path = '/dialogs' render ={ ()=><Dialog  />}/>
            <Route path = '/profile/:userId?' render ={ ()=><Content  />}/>
            <Route path = '/users' render ={ ()=><UsersContainer/> }/>
            <Route path = '/news' component={News}/>
            <Route path = '/music' component ={Music}/>
            <Route path = '/settings' render ={ ()=><Settings/> }/>
          </div>

          <Footer/>
      </div>
    </div>
    // {/* </BrowserRouter> */}
  );
}

export default App;
