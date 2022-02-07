import { Routes, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import GameComponent from './components/GameComponent';
import SideBar from './components/SideBar';
import './stylesheet/sidebar.css';
//import  Main  from './components/Main';
import PiecesComponent from './components/PiecesComponent';
import RulesComponent from './components/RulesComponent';
import HomePage from './components/HomePage';
//import ModalWindow from './ModalWindow';
import Grogu from './Images/grogu.jpg';
import './stylesheet/homepage.css';

function App() {
  const [OptionSelected, setOptionSelected] = useState('Ir al inicio');

  const handleButton = (ev) => {
    console.log('El botón ha sido pulsado', ev.currentTarget.value);
    setOptionSelected(ev.currentTarget.value);
  };

  console.log('La opción seleccionada es', OptionSelected);
  //console.log('El setOptionSelected ha quedado como',setOptionSelected);

  const SetMainWindow = () => {
    //switch (OptionSelected) {
    // case 'Ir al Inicio':
    // console.log('Ejecutando opción Ir al Inicio');
    // <HomePage/>
    // default:
    // console.log('Ejecutando default');
    // <HomePage/>
    //};
  };

  return (
    <div className='App__background'>
      <div className="App_layout">
        <div className="App__mainlayout">
          <div className="App__sidebar">
            <div className="sidebar__layout">
              <input className="sidebar__button" type="button" onClick={handleButton} value="Ir al inicio" />
              <input className="sidebar__button" type="button" onClick={handleButton} value="Reglas del Juego" />
              <input className="sidebar__button" type="button" onClick={handleButton} value="Fichas" />
              <input className="sidebar__button" type="button" onClick={handleButton} value="A jugar" />
            </div>
          </div>
          <div className="App__main">
            {OptionSelected === "A jugar" ?
              <GameComponent /> : null
            };
            {OptionSelected === "Reglas del Juego" ?
                <RulesComponent /> : null
            };
            {OptionSelected === "Fichas" ?
                <PiecesComponent /> :null
             };
            {OptionSelected === "Ir al inicio" ?
                <HomePage /> : null
             };
          </div>
        </div>
        <div className="App__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
