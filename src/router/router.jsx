// halaman untuk mengatur router
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { NavBar } from "../layout/navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
