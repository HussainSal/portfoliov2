import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "72px",
      fontWeight: "700",
      lineHeight: "108px",
      letterSpacing: "5.5%",
    },
    h2: {
      fontSize: "64px",
      fontWeight: "700",
      lineHeight: "96px",
    },
    h3: {
      fontSize: "64px",
      fontWeight: "400",
      lineHeight: "96px",
    },
    h4: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "54px",
    },
    subtitle1: {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "36px",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "27px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#0EE6B7",
    },
  },
});

export default theme;
