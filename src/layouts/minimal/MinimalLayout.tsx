import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { logout } from "../../store/reducers/authReducer";

export default function MinimalLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <Box sx={{ backgroundColor: "#F2F3F6", height: "100vh", paddingX: "4px" }}>
      <Button onClick={handleLogout}>Logout</Button>
      <Outlet />
    </Box>
  );
}
