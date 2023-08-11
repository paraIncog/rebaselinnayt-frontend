import { Link } from "react-router-dom";
import rllt_logo from './icons/rllt_logo_w_rect.png';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
}


// const logo = "https://www.tlt.ee/wp-content/themes/tlt/dist/images/TLT-Logo.png";

function Navbar() {
  return (
    <div className="Navbar" id="navbar">
      <nav className=" navbar navbar-expand-lg">
          <ul>
            <li>
              <Link className="NavbarLink" to="/">
                <img className="NavbarLogo" src={rllt_logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link className="NavbarLink" to="/about">
                Ettevõttest
              </Link>
            </li>
            <li>
              <Link className="NavbarLink" to="/faq">
                Korduvad Küsimused
              </Link>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
