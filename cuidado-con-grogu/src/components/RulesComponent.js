import "../stylesheet/rulescomponent.css";
import { Link } from 'react-router-dom';

const RulesComponent = () => {

    return (
        <Link to="/Ir a Reglas del Juego">
        <section className="rules">
            <div className="rules__instructions">
                <p className="rules__paragraph">
                    Lorem ipsum.....
                </p>
            </div>
        </section>
        </Link>
    );
};

export default RulesComponent;