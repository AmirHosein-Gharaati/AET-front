import {
  Box,
  Container,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import CardCustom from "../../../components/CardCustom";
import { Search } from "@mui/icons-material";

export default function Asset() {
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
          Assets
        </Typography>

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
          <CardCustom />
          <CardCustom />
        </Box>
      </Box>
    </Container>
  );
}
