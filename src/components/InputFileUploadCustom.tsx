import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  return (
    <Button
      component="label"
      disableRipple
      role={undefined}
      tabIndex={-1}
      startIcon={<CameraAltIcon />}
      sx={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        textTransform: "capitalize",
        backgroundColor: "#26282C8C",
        color: "#51565B",
        fontWeight: "700",
      }}
    >
      Select Image
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
