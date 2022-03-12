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
  console.log('Entro a App antes de declarar let y const');
  const [OptionSelected, setOptionSelected] = useState('Ir al inicio');
  let [positionGrogu, setPositionGrogu] = useState(0);
  let [quantityCookies, setQuantityCookies] = useState(3);
  let [quantityFrogs, setQuantityFrogs] = useState(3);
  let [quantityEggs, setQuantityEggs] = useState(3);
  let [diceValue,setDiceValue] = useState ('7');
    
  const handleDice = (diceValue) => {
      diceValue = parseInt(Math.floor(Math.random() * 4));
      console.log('El nuevo valor del dado ahora lanzado es', diceValue);
      setDiceValue(diceValue);
      console.log('Ahora launchDice es',diceValue);
  // return diceValue
  }
  

//setPositionGrogu(positionGrogu);
//setQuantityEggs(quantityEggs);
//setQuantityCookies(quantityCookies);
//setQuantityFrogs(quantityFrogs);

  const handleButton = (ev) => {
    console.log('El botón ha sido pulsado en App', ev.currentTarget.value);
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
              <GameComponent
              diceValue={diceValue}
              setDiceValue={setDiceValue}
              positionGrogu={positionGrogu}
              setPositionGrogu={setPositionGrogu}
              quantityEggs={quantityEggs}
              setQuantityEggs={setQuantityEggs}
              quantityCookies={quantityCookies}
              setQuantityCookies={setQuantityCookies}
              quantityFrogs={quantityFrogs}
              setQuantityFrogs={setQuantityFrogs}
              handleDice={handleDice}
              /> : null
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
