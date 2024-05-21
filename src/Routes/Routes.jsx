import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layouts.jsx/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";


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
    ],
  },
]);