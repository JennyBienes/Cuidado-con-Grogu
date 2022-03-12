import '../stylesheet/rulescomponent.css';

const RulesComponent = () => {
    console.log('Entrando a Rules Component');
    return (
        <section className="rules">
            <div className="rules__instructions">
                <h1 className="rules__title">
                    Instrucciones para jugar</h1>
                <p className="rules__paragraph">
                    Habrán 6 casillas que representarán el camino que lleva hasta el armario donde se encuentra segura la mercancía. De este modo tendremos 7 casillas, 6 del camino y 1 que representa el armario.
                    Durante el viaje se debe vaciar el armario poco a poco que tendrá 3 recipientes donde se guarda cada tipo de mercancía: 3 cajas de galletas azules, 3 huevos de rana y 3 ranas. La cara que representa cada lado será: una caja de galletas azules, un huevo de rana, una rana o Grogu se mueve una casilla.
                    Habrá también una ficha que represente dónde está Grogu. El juego se gana si se descarga toda la mercancía antes que Grogu llegue. Perderás si Grogu llega a la última casilla (el armario).
                </p>
            </div>
        </section>
    );
};

export default RulesComponent;