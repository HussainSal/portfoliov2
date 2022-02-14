import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { AppWrapper } from "./store/authContext";

ReactDOM.render(
  <AppWrapper>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AppWrapper>,
  document.getElementById("root")
);
