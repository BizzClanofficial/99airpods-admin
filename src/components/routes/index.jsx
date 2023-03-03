import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AddUser from "../add-user";
import Dashboard from "../dashboard";
import EditUser from "../edit-user";
import Home from "../home";
import Login from "../login";
import Users from "../users";

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
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/edit-user",
    element: <EditUser />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

export default Router;
