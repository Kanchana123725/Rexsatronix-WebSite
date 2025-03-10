import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";
import { useState } from "react";
import NavBarLinkList from "./NavBarLinkList";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav
      className={`nav-wrapper px-4 px-lg-5 py-3 ${
        !isMobile
          ? "position-absolute top-0 start-0 end-0 bg-transparent text-white nav-border-bottom pb-3"
          : ""
      }`}
    >
      <div className="d-flex justify-content-between gap-2">
        <div className="logo-wrapper">
          <Link to="/">
            <img src="/logo/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>
        {!isMobile && <NavBarLinkList type="mainNav" />}
        {isMobile && (
          <button className="navbar-toggle" onClick={handleNavbar}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
        )}
      </div>

      <div className={`dropdown ${isNavbarOpen && isMobile ? "show" : "hide"}`}>
        <NavBarLinkList type="dropDown" />
      </div>
    </nav>
  );
};

export default NavBar;
