import { Box, Fab, InputAdornment, OutlinedInput } from "@mui/material";
import CardCustom from "@/components/card/CardCustom";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AssetFractionResponse } from "@/types/asset";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { PageHeader } from "@/components/PageHeader";
import { assetService } from "@/services/asset/assetService";

export default function Asset() {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  const [assets, setAssets] = useState<AssetFractionResponse[]>([]);

  useEffect(() => {
    assetService.getAssets(token).then((res) => {
      setAssets(res.data);
    });
  }, [token]);

  function handleAddAsset() {
    navigate("/dashboard/asset/add");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageHeader backPath="/dashboard" title="Assets" />

      <OutlinedInput
        placeholder="Search"
        sx={{
          backgroundColor: "white",
          border: "1px solid #E9E9E9",
          borderRadius: "10px",
        }}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginY: "16px",
        }}
      >
        {assets.map((asset) => (
          <CardCustom
            id={asset.id}
            key={asset.id}
            name={asset.name}
            currencyBuy={asset.currencyTo}
            totalAmount={asset.totalAmount}
            totalCost={asset.totalCost}
            currentPrice={asset.currentPrice}
            imageId={asset.imageId}
          />
        ))}
      </Box>

      <Fab
        color="primary"
        aria-label="add"
        onClick={handleAddAsset}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
