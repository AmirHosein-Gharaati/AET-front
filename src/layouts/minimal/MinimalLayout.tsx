import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MinimalLayout() {
  return (
    <Box sx={{ backgroundColor: "#EDEDED", height: "100vh" }}>
      <Outlet />
    </Box>
  );
}
