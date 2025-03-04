import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo-wrapper">
          <Link to="/">
            <img src="/logo/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
      </div>
      <div className="line"></div>

      <nav className="d-flex flex-column mt-2 gap-3">
        <NavLink to="./home"> Home </NavLink>
        <NavLink to="./about"> About Us </NavLink>
        <NavLink to="./products"> Products & Solution </NavLink>
        <NavLink to="./gallery"> Gallery </NavLink>
        <NavLink to="./blog"> Blog </NavLink>
        <NavLink to="./contact"> Contact </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
