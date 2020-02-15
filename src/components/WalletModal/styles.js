import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "DINPro-Regular",
    fontSize: 32,
    color: "#404040",
    marginTop: 28,
    marginBottom: 32
  },
  darkModeTitle: {
    fontFamily: "DINPro-Regular",
    fontSize: 32,
    color: "#ffffff",
    marginTop: 28,
    marginBottom: 32
  },
  titleSmall: {
    fontSize: 24
  },
  darkModeWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 381,
    width: 461,
    backgroundColor: "#2d2d2d",
    "& > div > button:nth-of-type(odd)": {
      marginRight: 7
    },
    "& > div > button:nth-of-type(even)": {
      marginLeft: 7
    }
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 381,
    width: 461,
    "& > div > button:nth-of-type(odd)": {
      marginRight: 7
    },
    "& > div > button:nth-of-type(even)": {
      marginLeft: 7
    }
  },
  gridContainerSmall: {
    width: 290
  },
  wrapperSmall: {
    width: 290
  },
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 172,
    width: "33%",
    height: 112,
    borderRadius: 2,
    border: "solid 1px #ededed",
    backgroundColor: "#f5f5f5",
    marginBottom: 14,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  darkModeOptionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 172,
    width: "33%",
    height: 112,
    borderRadius: 2,
    border: "solid 1px #4a4a4a",
    backgroundColor: "#5c5c5c",
    marginBottom: 14,
    "&:hover": {
      border: "1px solid #ffffff"
    }
  },
  optionText: {
    fontSize: 16,
    fontFamily: "DINPro-Regular",
    marginTop: 7
  },
  darkModeOptionText: {
    fontSize: 16,
    fontFamily: "DINPro-Regular",
    marginTop: 7,
    color: "#ffffff"
  },
  metamask: {
    width: 37,
    height: 31
  },
  trezor: {
    width: 25,
    height: 32
  },
  ledgerCoinbase: {
    height: 30,
    width: 30
  }
});

export default useStyles;
