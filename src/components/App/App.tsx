import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { ExampleTable } from "../Example";
import "../../styles/App.css";

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
        <ExampleTable />
      </ThemeProvider>
    </div>
  );
};

export default App;
