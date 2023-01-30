import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Dashboard from "../dashboard";
import Home from "../home";
import Login from "../login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
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
