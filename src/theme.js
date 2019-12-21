import { createMuiTheme } from "@material-ui/core/styles";

import dinProFont from "./fonts/DINPro-Regular.woff";

const dinpro = {
  fontFamily: "DINPro-Regular",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url(${dinProFont}) format(woff)`
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "DINPro-Regular"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [dinpro]
      }
    }
  }
});

export default theme;
