import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputFileUpload from "../../../components/InputFileUploadCustom";

export default function AddAsset() {
  const navigate = useNavigate();

  function handleCancel() {
    navigate("/dashboard/asset");
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" fontWeight={600} fontSize={28} marginY={2}>
          Add Asset
        </Typography>

        <InputFileUpload />

        <Box>
          <Box width="100%" marginY="12px">
            <Typography display="flex">
              Name{" "}
              <Typography color="red" marginX="4px">
                *
              </Typography>
            </Typography>

            <OutlinedInput
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box width="100%" marginY="12px">
            <Typography display="flex">
              Current Price{" "}
              <Typography color="red" marginX="4px">
                *
              </Typography>
            </Typography>

            <OutlinedInput
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box display="flex" marginY="12px">
            <Box width="100%">
              <Typography display="flex">
                Currency Buy{" "}
                <Typography color="red" marginX="4px">
                  *
                </Typography>
              </Typography>

              <OutlinedInput
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
            </Box>

            <Box marginX="16px"></Box>

            <Box width="100%">
              <Typography display="flex">
                Currency Sell{" "}
                <Typography color="red" marginX="4px">
                  *
                </Typography>
              </Typography>

              <OutlinedInput
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          marginY="32px"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Button
            disableElevation
            disableRipple
            onClick={handleCancel}
            sx={{
              textTransform: "capitalize",
              width: "160px",
              height: "48px",
              backgroundColor: "#E9E9E9",
              color: "#51565B",
              borderRadius: "30px",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              textTransform: "capitalize",
              width: "160px",
              height: "48px",
              backgroundColor: "#0065F2",
              borderRadius: "30px",
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
