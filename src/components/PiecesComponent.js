import '../stylesheet/piecescomponent.css';
import Armario from '../Images/ArmarioGrogu.png';
import Galleta from '../Images/Galletas Grogu.png';
import Huevo from '../Images/huevos Grogu.png';
import Rana from '../Images/Rana.png';
import Yoda from '../Images/baby .png';
import Dado from '../Images/dice.png';


const PiecesComponent = () => {
    console.log('Entrando a Pieces Component');
    return (
        <section className="card__pieces">
            <h1 className="pieces__title">Fichas </h1>
            <h2 className="card__name" > Para lograr el reto dispondrás de las siguientes fichas: </h2>

            <div className="pieces__row">
                <div className="box__item">
                    <img className="card1__img" src={Galleta} alt="Peligro Grogu las quiere todas" />
                    <h2 className="card__name" > Caja de galletas </h2>
                    <h2 className="card__name"> Cantidad :3 </h2>
                </div>

                <div className="box__item">
                    <img className="card2__img" src={Huevo} alt="Si los consigue perderás" />
                    <h2 className="card__name" > Huevos de rana </h2>
                    <h2 className="card__name"> Cantidad :3 </h2>
                </div>
            </div>

            <div className="pieces__row">
                <div className="box__item">
                    <img className="card3__img" src={Rana} alt="Procura que grogu no las encuentre" />
                    <h2 className="card__name" > Ranas </h2>
                    <h2 className="card__name"> Cantidad :3 </h2>
                </div>


                <div className="box__item">
                    <img className="dice__img" src={Dado} alt="Suerte" />
                    <h2 className="card__name" > Dado </h2>
                    <h2 className="card__name"> Cantidad :1 </h2>
                </div>
            </div>

            <div className="pieces__row">
                <div className="box__item">
                    <img className="card4__img" src={Armario} alt="Vamos que grogu no llegue" />
                    <h2 className="card__name" > Armario </h2>
                    <h2 className="card__name"> Cantidad :1 </h2>
                </div>

                <div className="box__item">
                    <img className="card5__img" src={Yoda} alt="Hola" />
                    <h2 className="card__name" > Grogu </h2>
                    <h2 className="card__name"> Cantidad :1 </h2>
                </div>
            </div>
        </section>
    );
};

export default PiecesComponent;