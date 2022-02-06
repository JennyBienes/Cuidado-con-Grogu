import { Route, Switch, useRouteMatch } from 'react-router-dom';
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
//import HomePage from './components/HomePage';
//import ModalWindow from './ModalWindow';
import Grogu from './Images/grogu.jpg';
import './stylesheet/homepage.css';

function App() {
  const [OptionSelected, setOptionSelected] = useState('Ir al inicio');

  const handleButton = (ev) => {
    console.log('El botón 1 ha sido pulsado', ev.currentTarget.value);
    setOptionSelected(ev.currentTarget.value);
  };

  console.log('La opción seleccionada es', OptionSelected);
  //console.log('El setOptionSelected ha quedado como',setOptionSelected);

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
            <section className="Homepage">
              <h1 className="homepage__title"> Cuidado con Grogu</h1>
              <img className="homepage__img" src={Grogu} alt ="Cuidado con Grogu" />
              <p className="homepage__paragraph">
                En un univeso muy lejano al Mandaloriano se le ha presentado un gran
                inconveniente, el insaciable hambre del niño Grogu, porque el niño no
                tiene ningún escrúpulo a la hora de robar y devorar los huevos de la
                mujer rana, las galletas y las ranas en sí. De hecho, lo disfruta. Desde
                el mismo momento en el que la mecánica Peli Motto le encarga a Mando la
                misión de transportar a Lady Frog, el joven Grogu centra su atención en
                los huevos de la pasajera. En cuanto tiene la oportunidad, empieza a
                saquear la preciada carga, pese a los regaños de Mando. Tu misión
                consiste en lograr sacar todas las provisiones (ranas, huevos y
                galletas) antes de que Grogu llegue al armario.
              </p>
            </section>
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
