import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MinimalLayout() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ backgroundColor: "#F2F3F6", height: "100vh" }}
    >
      <Box position="relative" height="100%" paddingX={4}>
        <Outlet />
      </Box>
      <Navbar />
    </Box>
  );
}
