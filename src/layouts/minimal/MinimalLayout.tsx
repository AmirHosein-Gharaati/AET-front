import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MinimalLayout() {
  return (
    <Box sx={{ backgroundColor: "#F2F3F6", height: "100vh", paddingX: "4px" }}>
      <Outlet />
    </Box>
  );
}
