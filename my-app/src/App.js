import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <div className='container grid'>
          <Header/>
          <Nav/>
          <Content/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
