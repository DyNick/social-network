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
function App(props) {
  
  return (
    <BrowserRouter>
   
    <div className="App">
        <div className='container grid'>
          <Header/>
          <Nav/>
          <div className='App-wrapper-content'>
            <Route path = '/dialogs' render ={ ()=><Dialog users={props.appState.users} 
                                                            massege={props.appState.massege}
                                                            dispatch = {props.dispatch}
                                                            newMassegeText={props.appState.newMassegeText}
            />}/>
            <Route path = '/profile' render ={ ()=><Content posts={props.appState.posts} 
                                                dispatch = {props.dispatch}
                                                 newPostText={props.appState.newPostText}
            />}/>
            <Route path = '/news' component={News}/>
            <Route path = '/music' component ={Music}/>
            <Route path = '/settings' render ={ ()=><Settings/> }/>
          </div>

          <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
