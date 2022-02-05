import '../stylesheet/sidebar.css';

const SideBar= props => {
    console.log('Dentro de Header');

    return (
            <div className="sidebar__layout">
                     <input className= "sidebar__button" type="button" value="Ir al inicio" />
                     <input className= "sidebar__button" type="button" value="Reglas del Juego" />
                     <input className= "sidebar__button" type="button" value="Fichas" />
                     <input className= "sidebar__button" type="button" value="A jugar" />
            </div>
       )
};

export default SideBar;
  