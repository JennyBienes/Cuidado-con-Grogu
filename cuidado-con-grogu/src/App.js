import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import GameComponent from './components/GameComponent';
import  SideBar from './components/SideBar';
import  Main  from './components/Main';
import  PiecesComponent  from './components/PiecesComponent';
import  RulesComponent  from './components/RulesComponent';


console.log('Entrando a App');
function App() {
  return (
    <div className='App__background'>
        <div className="App__layout">
           <div className="App__sidebar">
           <SideBar/>
           </div>
           <div className="App__main">
            <p> Parrafo o texto a explicar</p>    
           </div>
        </div>
    </div>   
  );
}

export default App;
