import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

const MainTemplate = () => {
  return (
    <div className="container-xxl p-0 position-relative">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainTemplate;
