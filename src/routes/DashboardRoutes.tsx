import { RouteObject } from "react-router-dom";
import MinimalLayout from "../layouts/minimal/MinimalLayout";
import Home from "../pages/dashboard/Home";

const dashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: <MinimalLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
  ],
};

export default dashboardRoutes;
