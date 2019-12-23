import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  containerBase: {
    marginTop: 28,
    width: "100%",
    height: 102,
    borderRadius: 2,
    boxShadow: "3px 9px 15px 0 rgba(0, 0, 0, 0.07)",
    border: "solid 1px #ededed",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputFieldContainer: {
    flexGrow: 1
  },
  inputField: {
    paddingLeft: 30,
    height: 64,
    fontSize: 30,
    color: "#4a4a4a"
  },
  inputContentRight: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  maxButtonContainer: {
    paddingRight: 18,
    paddingTop: 15,
    "&:hover": {
      "& > button > p": {
        opacity: 0.75
      }
    }
  },
  maxButtonContainerDisabled: {
    paddingRight: 18,
    paddingTop: 15,
    cursor: "default"
  },
  maxButtonText: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#4a4a4a",
    opacity: 0.25
  },
  eth: {
    width: 60,
    height: 30,
    backgroundColor: "#2188ea",
    borderRadius: 2,
    cursor: "default"
  },
  disabledEth: {
    width: 60,
    height: 30,
    backgroundColor: "#d1d1d1",
    borderRadius: 2,
    cursor: "default"
  },
  weth: {
    width: 82,
    height: 30,
    backgroundColor: "#ed1e79",
    borderRadius: 2,
    cursor: "default"
  },
  disabledWeth: {
    width: 82,
    height: 30,
    backgroundColor: "#d1d1d1",
    borderRadius: 2,
    cursor: "default"
  },
  selectionText: {
    fontFamily: "DINPro Regular",
    fontSize: 22,
    letterSpacing: 1.4,
    color: "#ffffff",
    fontWeight: "bold"
  },
  selectionTypeContainer: {
    paddingTop: 21,
    paddingRight: 18
  }
});

export default useStyles;
