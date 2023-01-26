import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard";
import Home from "../home";
import Login from "../login";

const Router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default Router;
