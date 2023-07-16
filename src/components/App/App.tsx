import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Wrapper } from "../Wrapper";
import "../../styles/App.css";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: red,
  },
  typography: {
    fontFamily: ["Rubik", "Heebo"].join(","),
    fontWeightMedium: "normal",
    fontWeightRegular: "lighter",
  },
  direction: 'rtl'
});

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Wrapper />
      </ThemeProvider>
    </div>
  );
};

export default App;