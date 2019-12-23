import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "DINPro",
    fontSize: 32,
    color: "#404040",
    marginTop: 28,
    marginBottom: 32
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
  optionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 172,
    height: 112,
    borderRadius: 2,
    border: "solid 1px #ededed",
    backgroundColor: "#f5f5f5",
    marginBottom: 14,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  optionText: {
    fontSize: 16,
    fontFamily: "DINPro",
    marginTop: 7
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
