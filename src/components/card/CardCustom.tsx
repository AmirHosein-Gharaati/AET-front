import { Avatar, Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { baseURL } from "@/utils/axios";
import { calculateGainLossByPercent } from "./cardService";
import defaultCategoryImage from "@/assets/images/home-category.png";
import { useNavigate } from "react-router-dom";

export interface CardProps {
  id: string;
  name: string;
  imageId?: string;
  totalAmount: number;
  totalCost: number;
  currentPrice: number;
  currencyBuy: string;
}

export default function CardCustom(props: CardProps) {
  const navigate = useNavigate();

  const gainOrLoss = calculateGainLossByPercent(
    props.totalAmount,
    props.totalCost,
    props.currentPrice
  );
  const isGain: boolean = gainOrLoss >= 0;
  const gainOrLossColor = isGain ? "green" : "red";

  function getAssetImageUrl(imageId: string | undefined) {
    return imageId ? `${baseURL}/images/${imageId}` : defaultCategoryImage;
  }

  function handleAssetDetail(id: string) {
    navigate(`/dashboard/asset/${id}`);
  }

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
          src={getAssetImageUrl(props.imageId)}
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
              color: gainOrLossColor,
            }}
          >
            {isGain ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}

            <Typography component="span" fontSize={14}>
              {gainOrLoss}%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography component="span" fontSize={14}>
            {props.totalAmount} {props.currencyBuy}
          </Typography>
        </Box>
      </Box>

      <Button
        onClick={() => handleAssetDetail(props.id)}
        sx={{ color: "#989898" }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
}
