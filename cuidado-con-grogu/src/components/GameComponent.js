import '../stylesheet/gamecomponent.css';
import Camino from '../Images/camino.png';


const GameComponent = () => {
    console.log('Entrando a Game Component');
    return (
        <section className="game__box">
            < div className="game__row">
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
                <div className="game__item">
                    <img className="img__item"src={Camino} alt="Zona de descarga" />
                </div>
            </div>
        </section>
    );
};

export default GameComponent;