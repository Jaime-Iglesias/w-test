import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  pallete: {
    green: "#0bd080",
    red: "#ed1e79",
    blue: "#2188ea",
    disabledGrey: "#d1d1d1",
    white: "#ffffff"
  },
  typography: {
    h1: {
      fontFamily: "Rubik",
      fontSize: 32,
      opacity: 0.75
    },
    body1: {
      fontFamily: "Rubik",
      fontSize: 14
    },
    subtitle1: {
      fontFamily: "DINPro",
      fontSize: 22,
      fontWeight: "bold",
      letterSpacing: "1.4px"
    },
    subtitle2: {
      fontFamily: "NeueHaasUnicaW1G",
      fontSize: 20,
      fontWeight: 300
    }
  }
});

export default theme;
