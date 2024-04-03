import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface PageHeaderProps {
  title: string;
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box width="20%">
        <Button
          sx={{ color: "#51565B" }}
          size="large"
          startIcon={<ArrowBackIcon />}
          fullWidth
        />
      </Box>

      <Typography component="h1" fontWeight={600} fontSize={28} marginY={2}>
        {props.title}
      </Typography>

      <Box width="20%"></Box>
    </Box>
  );
}
