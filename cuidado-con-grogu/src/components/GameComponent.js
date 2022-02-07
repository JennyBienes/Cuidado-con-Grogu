import '../stylesheet/gamecomponent.css';

const GameComponent = () => {
    console.log('Entrando a Game Component');
    return (
        <section className="rules">
            <div className="rules__instructions">
                <p className="rules__paragraph">
                    Lorem ipsum..... Game components
                </p>
            </div>
        </section>
    );
};

export default GameComponent;