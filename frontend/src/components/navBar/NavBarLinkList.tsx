import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";

const NavBarLinkList = ({ type }: { type: string }) => {
  const languageObject = useSelector(
    (state: RootState) => state.language.selectedLang
  );
  const isMainNav = type === "mainNav";
  return (
    <div className={`navbar-collapse ${isMainNav && "d-flex"}`}>
      <div
        className={`navbar-nav ms-auto py-0 ${
          isMainNav &&
          "d-flex flex-row gap-2 gap-xl-3 gap-xl-4 gap-xxl-5  align-items-start"
        }`}
      >
        <NavLink to="/" className=" nav-item-link">
          {languageObject.home || "Home"}
        </NavLink>
        <NavLink to="/about" className=" nav-item-link">
          {languageObject.aboutUs || "About Us"}
        </NavLink>
        <NavLink to="/products" className=" nav-item-link">
          {languageObject.products_Solution || "Products & Solution -"}
        </NavLink>
        <NavLink to="/gallery" className=" nav-item-link">
          {languageObject.gallery || "Gallery"}
        </NavLink>
        <NavLink to="/blog" className=" nav-item-link">
          {languageObject.blog || "Blog"}
        </NavLink>
        <NavLink to="/contact" className=" nav-item-link">
          {languageObject.contact || "Contact"}
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarLinkList;
