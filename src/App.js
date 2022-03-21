import { Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import PiecesComponent from './components/PiecesComponent';
import RulesComponent from './components/RulesComponent';
import GameComponent from './components/GameComponent';
import Footer from './components/Footer';
import './App.css';
import './stylesheet/sidebar.css';
import HappyGrogu from './Images/happyBabyYoda.gif';
import WinGame from './Images/winGame.gif';
import Grogu from './Images/grogu.jpg';
import logo from './logo.svg';


function App() {
  console.log('Entro a App antes de declarar let y const');
  const [OptionSelected, setOptionSelected] = useState('Ir al inicio');
  let [positionGrogu, setPositionGrogu] = useState(0);
  let [quantityCookies, setQuantityCookies] = useState(3);
  let [quantityFrogs, setQuantityFrogs] = useState(3);
  let [quantityEggs, setQuantityEggs] = useState(3);
  let [diceValue,setDiceValue] = useState ('7');
  let [youWon,setYouWon] = useState (0);

  const [msgResult,setMsgResult] = useState ('');
    
 
  const handleButton = (ev) => {
    console.log('La opción se ha sido escogida en App', ev.currentTarget.value);
    setOptionSelected(ev.currentTarget.value);
  };

  const   handleButtonTryAgain   = (ev) => {
    console.log('Se reinician todas las variables');
    setQuantityCookies(3);
    setQuantityEggs(3);
    setQuantityFrogs(3);
    setPositionGrogu(0);
    setYouWon(0);
    };

   if (quantityCookies < 1 && quantityEggs <1 && quantityFrogs < 1 ) {
    youWon= 1;
    console.log('he ganado y cambio setYouWon', youWon)
   } 

   
  console.log('En App detecto que la opción seleccionada es', OptionSelected);

  debugger;
    
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
            { quantityCookies < 1 && quantityEggs <1 && quantityFrogs < 1 ?
              <div className="ended__game">
                <img className="ended__img" src={WinGame} alt="¡Lo has logrado!" /> 
               <p className="ended__msg"> ¡Felicidades! has logrado salvar toda la comida. ¡Tu misión ha sido completada! </p>
               <input className="try__again" type= "button" onClick={handleButtonTryAgain} value="Volver a empezar" />
              </div>
              : null
            }
            
            {positionGrogu > 6 ?
              <div className="ended__game">
                <img className="ended__img" src={HappyGrogu} alt="Lo siento, has perdido" /> 
                <p className="ended__msg"> Grogu está muy feliz, ha llegado a la comida. ¡Lo siento, has perdido!  </p>
                <input className="try__again" type= "button" onClick={handleButtonTryAgain} value="Volver a empezar" />
              </div>
              : null
            }

            {OptionSelected === "Ir al inicio" && positionGrogu < 7 && youWon === 0 ?
              <HomePage /> : null
            }
            {OptionSelected === "Reglas del Juego" && positionGrogu < 7 && youWon === 0 ?
              <RulesComponent /> : null
            }
            {OptionSelected === "Fichas"  && positionGrogu < 7 && youWon === 0?
              <PiecesComponent /> : null
            }
            {OptionSelected === "A jugar" && positionGrogu < 7 && youWon === 0?
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
              msgResult={msgResult}
              setMsgResult={setMsgResult}
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
