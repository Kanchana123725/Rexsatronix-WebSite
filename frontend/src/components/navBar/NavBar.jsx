import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const languageObject = useSelector((state) => state.language.selectedLang);

  const handleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <nav className="nav-wrapper px-4 px-lg-5 py-3 ">
      <div className="d-flex justify-content-between gap-2">
        <div className="logo-wrapper">
          <Link to="/">
            <img src="/logo/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <button className="navbar-toggle" onClick={handleNavbar}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      {isNavbarOpen && (
        <>
          <div className="line "></div>
          <div className="navbar-collapse mt-3">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item ">
                {languageObject.home || "Home"}
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                {languageObject.aboutUs || "About Us"}
              </NavLink>
              <NavLink to="/products" className="nav-item nav-link">
                {languageObject.products_Solution || "Products & Solution -"}
              </NavLink>
              <NavLink to="/gallery" className="nav-item nav-link">
                {languageObject.gallery || "Gallery"}
              </NavLink>
              <NavLink to="/blog" className="nav-item nav-link">
                {languageObject.blog || "Blog"}
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link">
                {languageObject.contact || "Contact"}
              </NavLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
