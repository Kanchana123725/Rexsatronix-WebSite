import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainTemplate from "./pages/templates/MainTemplate";

const routes = createRoutesFromElements(
  <Route path="/" element={<MainTemplate />}>
    <Route path="/" element={<LandingPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
