import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  "*::-webkit-scrollbar": {
    width: "0.5em",
    height: "0.5em"
  },
  "*::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(144, 144, 144, 0.25)",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(150, 144, 144, 0.5)",
    borderRadius: 8
  },
  "& .MuiDataGrid-cell--editing": {
    backgroundColor: "rgb(255,215,115, 0.19)",
    color: "#1a3e72",
    "& .MuiInputBase-root": {
      height: "100%",
    },
  },
  "& .Mui-error": {
    backgroundColor: `rgb(204,0,0, ${theme.palette.mode === "dark" ? 0.2 : 0})`,
    color: theme.palette.error.main,
  },
  direction: "rtl",
}));

export default StyledBox;
