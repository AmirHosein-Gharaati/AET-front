import MinimalLayout from "@/layouts/minimal/MinimalLayout";
import SignUp from "@/pages/signup/SignUp";
import { Login } from "@mui/icons-material";
import { RouteObject } from "react-router-dom";

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
