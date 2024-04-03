import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title?: string;
  backPath: string;
}

export function PageHeader(props: PageHeaderProps) {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate(`${props.backPath}`);
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="80px"
    >
      <Box width="20%">
        {props.backPath && (
          <Button
            sx={{ color: "#51565B" }}
            size="large"
            startIcon={<ArrowBackIcon />}
            fullWidth
            onClick={handleBackButton}
          />
        )}
      </Box>

      {props.title && (
        <Typography component="h1" fontWeight={600} fontSize={28} marginY={2}>
          {props.title}
        </Typography>
      )}

      <Box width="20%"></Box>
    </Box>
  );
}
