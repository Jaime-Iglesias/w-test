import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  dialogWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 460,
    height: 249
  },
  darkModeDialogWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 460,
    height: 249,
    backgroundColor: "#2d2d2d"
  },
  title: {
    marginTop: 22,
    marginLeft: 24,
    fontFamily: "Rubik",
    fontSize: 18,
    color: "#4a4a4a"
  },
  darkModeTitle: {
    marginTop: 22,
    marginLeft: 24,
    fontFamily: "Rubik",
    fontSize: 18,
    color: "#ffffff"
  },
  viewEtherscan: {
    marginTop: 5,
    marginLeft: 25,
    fontFamily: "Rubik",
    fontSize: 13,
    color: "#0bd080"
  },
  dividerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15
  },
  divider: {
    width: "89%"
  },
  transactionContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 12
  },
  txHashContainer: {
    flexGrow: 1
  },
  transactionText: {
    marginLeft: 25,
    fontFamily: "DINPro-Regular",
    fontSize: 12,
    color: "#4a4a4a",
    "&:hover": {
      color: "#0bd080",
      "&&& > div": {
        backgroundColor: "red",
        color: "#838383"
      }
    }
  },
  darkModeTransactionText: {
    marginLeft: 25,
    fontFamily: "DINPro-Regular",
    fontSize: 12,
    color: "#ffffff",
    "&:hover": {
      color: "#0bd080",
      "&&& > div": {
        backgroundColor: "red",
        color: "#838383"
      }
    }
  },
  transactionTimestamp: {
    marginRight: 25,
    fontFamily: "DINPro-Regular",
    fontSize: 12,
    fontWeight: 300,
    color: "#d1d1d1"
  }
});

export default useStyles;
