import { NavLink } from "react-router-dom";

//Style
import Logo from "../design/logo.svg";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="nav__img" />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav__link-active" : "nav__link"
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav__link-active" : "nav__link"
        }
      >
        About
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
