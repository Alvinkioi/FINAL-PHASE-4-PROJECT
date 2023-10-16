import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="socials">
        <a href="https://www.instagram.com/">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="about">
        One of the best Beauty parlour in the city. Solution for all skin
        problems.
      </div>

      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/hair_studion">Hair Studio</Link>
        <Link to="/nail_bar">Nail Bar</Link>
        <Link to="/make_up">Makeup</Link>
      </div>
    </footer>
  );
}

export default Footer;
