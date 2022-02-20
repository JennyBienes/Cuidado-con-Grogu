import '../stylesheet/gamecomponent.css';
import Camino from '../Images/camino.png';
import Yoda from '../Images/baby .png';
import Dado from '../Images/dice.png';
import Huevo from '../Images/Huevo.png';
import Galleta from '../Images/macaron_azul.png';
import Rana from '../Images/Rana.png';

const GameComponent = () => {
    console.log('Entrando a Game Component');

    const positionGrogu = 1;
    const quantityCookies = 3;
    const quantityFrogs = 3;
    const quantityEggs = 3;
    const result = ('')

    const generarAleatorio = () => {
        return Math.floor(Math.random() * 3);
    }

    console.log('El numero aleatorio es', generarAleatorio);
    //if generarAleatorio === (0) {
    //    result = "Avanza positionGrogu";
    //    positionGrogu + 1
    //} else if generarAleatorio === (1) {
    //    result = "Avanza positionGrogu";
    //    positionGrogu + 2;
    //}



    return (
        <section className="game__box">
            <h1 className="game__title">
                ¡¡Empieza la aventura!!
            </h1>

            <div className="game__play">
                <p className="game__title"> Haz click en el dado</p>
                <img className="dice__game" src={Dado} alt="Empieza la partida" />
                <p className="game__subtitle"> El resultado es:</p>
            </div>
            < div className="game__row">

                <div className="game__item">
                    {positionGrogu === (0) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (1) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (2) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (3) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (4) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (5) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__item">
                    <img className="img__item" src={Camino} alt="Zona de descarga" />
                    {positionGrogu === (6) ?
                        <img className="yoda__game" src={Yoda} alt="Comienza la aventura" /> : null
                    }
                </div>
                <div className="game__closet">
                    <div className="game__closetArticle">
                        {quantityEggs === (3) ?
                            <>
                                <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                                <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                                <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                            </> : null}

                        {quantityEggs === (2) ?
                            <>
                                <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                                <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                            </> : null}


                        {quantityEggs === (1) ?
                            <img className="img__egg" src={Huevo} alt="Cuidado con Grogu" />
                            : null}
                    </div>


                    <div className="game__closetArticle">
                        {quantityCookies === (3) ?
                            <>
                                <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                                <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                                <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                            </> : null}

                        {quantityCookies === (2) ?
                            <>
                                <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                                <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                            </> : null}

                        {quantityCookies === (1) ?
                            <img className="img__cokkie" src={Galleta} alt="Cuidado con Grogu" />
                            : null}

                    </div>
                    <div className="game__closetArticle">
                        {quantityFrogs === (3) ?
                            <>
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            </> : null}

                        {quantityFrogs === (2) ?
                            <>
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            </> : null}

                        {quantityFrogs === (1) ?
                            <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            : null}

                    </div>
                </div>

            </div>
        </section >
    );
};

export default GameComponent;