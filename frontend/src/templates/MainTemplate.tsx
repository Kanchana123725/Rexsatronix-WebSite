import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const MainTemplate = () => {
  return (
    <div className="container-xxl p-0 position-relative">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainTemplate;
