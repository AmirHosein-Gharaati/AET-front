import { useRoutes } from "react-router-dom";
import loginRoutes from "./AuthRoutes";
import dashboardRoutes from "./DashboardRoutes";

export default function ThemeRoutes() {
  return useRoutes([loginRoutes, dashboardRoutes]);
}
