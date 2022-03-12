import '../stylesheet/gamecomponent.css';
import Camino from '../Images/camino.png';
import Yoda from '../Images/baby .png';
import Dado from '../Images/dice.png';
import Huevo from '../Images/Huevo.png';
import Galleta from '../Images/macaron_azul.png';
import Rana from '../Images/Rana.png';
import { useState } from 'react';
// import DiceValue from './Dice.js';

const GameComponent = ({diceValue, setDiceValue, positionGrogu, setPositionGrogu,quantityEggs, setQuantityEggs, quantityCookies, setQuantityCookies, quantityFrogs, setQuantityFrogs, handleDice }) => {
console.log('Entrando a Game Component', diceValue, positionGrogu, quantityEggs, quantityCookies, quantityFrogs);
let result = ('')
console.log('El valor del dado entrando a GameComponent es', diceValue);
    

   switch (diceValue){
    case 0:
        positionGrogu ++;
        setPositionGrogu(positionGrogu);
        console.log('Caso 0 La nueva posición de Grogu es ', positionGrogu,' mantiene Cantidad de huevos ', quantityEggs,' de galletas', quantityCookies,' y de ranas ', quantityFrogs);
        result= ("¡Cuidado! Grogu avanza rápidamente");
        break;
    case 1:
        quantityEggs --;
        setQuantityEggs(quantityEggs);
        console.log('Caso 1 Posición de Grogu es igual ', positionGrogu,'reduce Cantidad de huevos ', quantityEggs,' la cantidad de galletas', quantityCookies,' y la cantidad de ranas es ', quantityFrogs);
        result=" Muy bien, has logrado salvar un huevo";
        break;
    case 2:
        quantityCookies -- ;
        setQuantityCookies(quantityCookies);
        console.log('Caso 2 Posición de Grogu es igual ', positionGrogu,'reduce Cantidad de huevos ', quantityEggs,' la cantidad de galletas', quantityCookies,' y la cantidad de ranas es ', quantityFrogs);
        result=" Sigue así, has logrado salvar una galleta";
        break;
    case 3:
        quantityFrogs --;
        setQuantityFrogs(quantityFrogs);
        console.log('Caso 3 Posición de Grogu es igual ', positionGrogu,'reduce Cantidad de huevos ', quantityEggs,' la cantidad de galletas', quantityCookies,' y la cantidad de ranas es ', quantityFrogs);
        result= "Que alivio, has logrado una rana más";
        break;
    default:
        break;
   }
    
   console.log('Después del Switch queda Posición de Grogu ', positionGrogu,' Cantidad de huevos ', quantityEggs,' la cantidad de galletas', quantityCookies,' y la cantidad de ranas es ', quantityFrogs);
   debugger;

    return (
        <section className="game__box">
            <h1 className="game__title">
                ¡¡Empieza la aventura!!
            </h1>

            <div className="game__play">
                <p className="game__subtitle"> Haz click en el dado</p>
                <img className="dice__game" src={Dado} type="button" alt="Empieza la partida" onClick= {handleDice}/>
                <p className="game__title"> {result} </p>
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
                        { quantityFrogs === (3) ?
                            <>
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            </> : null}

                        { quantityFrogs === (2) ?
                            <>
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                                <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            </> : null}

                        { quantityFrogs === (1) ?
                            <img className="img__frog" src={Rana} alt="Cuidado con Grogu" />
                            : null}

                    </div>
                </div>

            </div>
        </section >
    );
};

export default GameComponent;