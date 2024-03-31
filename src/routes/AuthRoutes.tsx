import { RouteObject } from "react-router-dom";
import MinimalLayout from "../layouts/minimal/MinimalLayout";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

const loginRoutes: RouteObject = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ],
};

export default loginRoutes;
