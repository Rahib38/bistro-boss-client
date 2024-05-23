import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts.jsx/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
     children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);