import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts.jsx/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/Shared/SignUp";
import PrivateRoute from "./PrivateRoute";
import Screat from "../Pages/Shared/Screat";


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
        element: <Login/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Screat></Screat></PrivateRoute>
      },
    ],
  },
]);