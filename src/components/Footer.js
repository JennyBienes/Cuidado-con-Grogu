import github from '../Images/github-ico.png'
import linkedin from '../Images/linkedin-ico.png'
import twitter from '../Images/twitter-ico.png'
import "../stylesheet/footer.css";

const Footer = (props) => {
  //console.log("Dentro de Footer");

  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row-1">
            <h2 className=" heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a  target="_blank"rel="noreferrer" href="https://linkedin.com/in/jennybienes">
                <img className="main-footer__icon" src={linkedin} alt="icon"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/JennyBienes" >
                <img className="main-footer__icon" src={github} alt="icon" />
              </a>
              <a target="_blank" rel="noreferrer"href="https://twitter.com/JennyBienes" >
                <img className="main-footer__icon" src={twitter} alt="icon" />
              </a>
            </div>
          </div>
          <div className="main-footer__row-2">
            <h2 className=" heading-sm">Jenny Bienes</h2>
            <p className="main-footer__short-desc">
              Thank you very much for visiting my game page &#x2764;
            </p>
          </div>
        </div>
        <div className="main-footer__lower"> &copy; Copyright 2022 </div>
      </div>
    </footer>
  );
};

export default Footer;
