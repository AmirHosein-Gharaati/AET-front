import { Avatar, Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export interface CardProps {
  id: string;
  name: string;
  totalAmount: number;
  currencyBuy: string;
}

export default function CardCustom(props: CardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: "15px",
        paddingY: "8px",
        marginY: "8px",
        backgroundColor: "white",
        boxShadow: " 0px 4px 4px 0px #E3E3E340",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 48, height: 48, marginLeft: "8px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingY: "4px",
          paddingX: "8px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography component="h2" fontWeight={600}>
            {props.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "green",
            }}
          >
            <ArrowDropUpIcon />
            <Typography component="span" fontSize={14}>
              9.47%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="span" fontSize={14}>
            {props.totalAmount} {props.currencyBuy}
          </Typography>
        </Box>
      </Box>
      <Button startIcon={<ArrowForwardIosIcon />} />
    </Box>
  );
}
