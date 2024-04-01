import { RouteObject } from "react-router-dom";
import MinimalLayout from "../layouts/minimal/MinimalLayout";
import Home from "../pages/dashboard/Home";
import Asset from "../pages/dashboard/asset/Asset";
import AddAsset from "../pages/dashboard/asset/AddAsset";

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
    {
      path: "/dashboard/asset/add",
      element: <AddAsset />,
    },
  ],
};

export default dashboardRoutes;
