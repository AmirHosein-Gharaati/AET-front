import { RouteObject } from "react-router-dom";
import MinimalLayout from "../layouts/minimal/MinimalLayout";
import Home from "../pages/dashboard/Home";
import Asset from "../pages/dashboard/asset/Asset";

const dashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: <MinimalLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/dashboard/asset",
      element: <Asset />,
    },
  ],
};

export default dashboardRoutes;
