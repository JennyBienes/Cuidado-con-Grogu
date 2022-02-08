import { useState } from 'react';
import '../stylesheet/sidebar.css';

const SideBar = () => {


 const [OptionSelected, setOptionSelected] = useState('Ir al inicio');
   
  const handleButton = (ev) => {
    console.log('En Sidebar el botón ha sido pulsado y es', ev.currentTarget.value);
    setOptionSelected(ev.currentTarget.value);
  };

  console.log('En Sidebar La opción seleccionada es', OptionSelected);

    return (     
        <div className="sidebar__layout">
        <input className="sidebar__button" type="button" onClick={handleButton} value="Ir al inicio" />
        <input className="sidebar__button" type="button" onClick={handleButton} value="Reglas del Juego" />
        <input className="sidebar__button" type="button" onClick={handleButton} value="Fichas" />
        <input className="sidebar__button" type="button" onClick={handleButton} value="A jugar" />
      </div>
 );
};


export default SideBar;
