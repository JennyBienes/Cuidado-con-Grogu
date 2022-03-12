import '../stylesheet/homepage.css';
import Grogu from '../Images/grogu.jpg';

const HomePage = () => {
  return (
    <section className="homepage">
    <h1 className="homepage__title"> Cuidado con Grogu</h1>
    <img className="homepage__img" src={Grogu} alt="Cuidado con Grogu" />
    <p className="homepage__paragraph">
      En un universo muy lejano al Mandaloriano se le ha presentado un gran
      inconveniente, el insaciable hambre del niño Grogu, porque el niño no
      tiene ningún escrúpulo a la hora de robar y devorar los huevos de la
      mujer rana, las galletas y las ranas en sí. De hecho, lo disfruta. Desde
      el mismo momento en el que la mecánica Peli Motto le encarga a Mando la
      misión de transportar a Lady Frog, el joven Grogu centra su atención en
      los huevos de la pasajera. En cuanto tiene la oportunidad, empieza a
      saquear la preciada carga, pese a los regaños de Mando. Tu misión
      consiste en lograr sacar todas las provisiones (ranas, huevos y
      galletas) antes de que Grogu llegue al armario.
    </p>
  </section>
  );
};

export default HomePage;
