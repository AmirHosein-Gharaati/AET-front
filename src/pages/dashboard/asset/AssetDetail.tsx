import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { assetService } from "@/services/assetService";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function AssetDetail() {
  const param = useParams<{ id: string }>();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (param.id) {
      assetService.getAssetSummary(param.id, token).then((res) => {
        console.log(res.data);
      });
    }
  }, [param, token]);

  return (
    <Box>
      <p>Asset Detail</p>
    </Box>
  );
}
