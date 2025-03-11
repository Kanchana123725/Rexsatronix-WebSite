import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainTemplate from "./templates/MainTemplate";

// page import
import LandingPage from "./pages/landingPage/LandingPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import Products from "./pages/products/Products";
import Gallery from "./pages/gallery/Gallery";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

const routes = createRoutesFromElements(
  <Route path="/" element={<MainTemplate />}>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/products" element={<Products />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
);

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
