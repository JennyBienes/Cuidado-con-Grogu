import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import GameComponent from './components/GameComponent';
import SideBar from './components/SideBar';
//import  Main  from './components/Main';
import PiecesComponent from './components/PiecesComponent';
import RulesComponent from './components/RulesComponent';
//import HomePage from './components/HomePage';

function App() {
  const [OptionSelected, setOptionSelected] = useState(1);

  if (OptionSelected === 1) {
    setOptionSelected([1])
  } else if (OptionSelected === 2){
    setOptionSelected([2])
  } else if (OptionSelected === 3){
  setOptionSelected([3])
  } else if (OptionSelected === 4){
  setOptionSelected([4])
  }
};


console.log('La opción seleccionada es', OptionSelected);

const handleOptionSelected = (ev) => {
  setOptionSelected(ev.target.value)

};


return (
  <div className='App__background'>
    <div className="App_layout">
      <div className="App__mainlayout">
        <div className="App__sidebar">
          <SideBar />
        </div>
        <div className="App__main">
          <p> Jenny eres la mejor del mundo mundial</p>

        </div>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  </div>
);
}

export default App;
