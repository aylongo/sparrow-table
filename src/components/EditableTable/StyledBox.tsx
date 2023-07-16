import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  "& .MuiDataGrid-cell--editing": {
    backgroundColor: "rgb(255,215,115, 0.19)",
    color: "#1a3e72",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  "& .Mui-error": {
    backgroundColor: `rgb(126,10, , ${
      theme.palette.mode === "dark" ? 0 : 0.1
    })`,
    color: theme.palette.error.main,
  },
}));

export default StyledBox;
