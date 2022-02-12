import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "72px",
      fontWeight: "700",
      lineHeight: "108px",
      letterSpacing: "5.5%",
      "@media (max-width:640px)": {
        fontSize: "42px",
        fontWeight: "500",
        lineHeight: "88px",
      },
    },
    h2: {
      fontSize: "64px",
      fontWeight: "700",
      lineHeight: "96px",
      "@media (max-width:640px)": {
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "78px",
      },
    },
    h3: {
      fontSize: "64px",
      fontWeight: "400",
      lineHeight: "96px",
      "@media (max-width:640px)": {
        fontSize: "28px",
        fontWeight: "400",
        lineHeight: "88px",
      },
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
      "@media (max-width:640px)": {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "36px",
      },
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
