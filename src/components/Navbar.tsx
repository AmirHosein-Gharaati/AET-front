import { useLocation, useNavigate } from "react-router-dom";
import { MouseEventHandler } from "react";

import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import WalletIcon from "@mui/icons-material/Wallet";
import ShowChartIcon from "@mui/icons-material/ShowChart";

interface NavbarButtonProp {
  text: string;
  icon: JSX.Element;
  onClick: MouseEventHandler;
  active?: boolean;
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleOnClick(path: string) {
    navigate(path);
  }

  function isActive(path: string) {
    const currentPath = location.pathname;
    return currentPath === path;
  }

  const buttons = [
    {
      text: "Planning",
      icon: <MonetizationOnIcon sx={{ width: "32px", height: "32px" }} />,
      path: "/dashboard/planning",
      onClick: () => handleOnClick("/dashboard"),
    },
    {
      text: "Budgeting",
      icon: <AssessmentIcon sx={{ width: "32px", height: "32px" }} />,
      onClick: () => handleOnClick("/dashboard"),
      path: "/dashboard/budgeting",
    },
    {
      text: "Home",
      icon: <HomeIcon sx={{ width: "32px", height: "32px" }} />,
      onClick: () => handleOnClick("/dashboard"),
      path: "/dashboard",
    },
    {
      text: "Expenses",
      icon: <WalletIcon sx={{ width: "32px", height: "32px" }} />,
      onClick: () => handleOnClick("/dashboard"),
      path: "/dashboard/expense",
    },
    {
      text: "Assets",
      icon: <ShowChartIcon sx={{ width: "32px", height: "32px" }} />,
      onClick: () => handleOnClick("/dashboard/asset"),
      path: "/dashboard/asset",
    },
  ];

  return (
    <Stack
      direction="row"
      alignItems="center"
      height="10%"
      width="100%"
      justifyContent="space-around"
      sx={{ backgroundColor: "white" }}
    >
      {buttons.map((button) => (
        <NavbarButton
          key={button.text}
          icon={button.icon}
          onClick={button.onClick}
          text={button.text}
          active={isActive(button.path)}
        />
      ))}
    </Stack>
  );
}

function NavbarButton(prop: NavbarButtonProp) {
  const color = prop.active ? "#0065F2" : "";

  return (
    <Button
      onClick={prop.onClick}
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        color: "#989898",
      }}
    >
      <Box color={color}>{prop.icon}</Box>

      <Typography
        paddingY="4px"
        fontWeight={500}
        sx={{ textTransform: "capitalize", color: color }}
      >
        {prop.text}
      </Typography>
    </Button>
  );
}
