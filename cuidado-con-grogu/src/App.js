import { Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
//import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import PiecesComponent from './components/PiecesComponent';
import RulesComponent from './components/RulesComponent';
import GameComponent from './components/GameComponent';
import Footer from './components/Footer';
import Grogu from './Images/grogu.jpg';
import logo from './logo.svg';
import './App.css';
import './stylesheet/sidebar.css';

function App() {
  const [OptionSelected, setOptionSelected] = useState('Ir al inicio');

  const handleButton = (ev) => {
   console.log('En App detecto que el botón ha sido pulsado', ev.currentTarget.value);
   setOptionSelected(ev.currentTarget.value);
};

  console.log('En App detecto que la opción seleccionada es', OptionSelected);

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
            {OptionSelected === "Ir al inicio" ?
              <HomePage /> : null
            }
            {OptionSelected === "Reglas del Juego" ?
              <RulesComponent /> : null
            }
            {OptionSelected === "Fichas" ?
              <PiecesComponent /> : null
            }
            {OptionSelected === "A jugar" ?
              <GameComponent /> : null
            }
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
