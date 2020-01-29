import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/navigation/Nav';
import Content from './components/content/Content';
import {BrowserRouter,Route} from 'react-router-dom';
import Dialog from './components/dialog/Dialog';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className='container grid'>
          <Header/>
          <Nav/>
        
          <div className='App-wrapper-content'>
            <Route path = '/dialog' component={Dialog}/>
            <Route path = '/profile' component={Content}/>
            <Route path = '/news' component={News}/>
            <Route path = '/music' component ={Music}/>
            <Route path = '/settings' component ={Settings}/>
          </div>

          <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
