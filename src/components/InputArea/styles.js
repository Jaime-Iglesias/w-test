import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  inputAreaContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  label: {
    fontFamily: "DINPro",
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 11
  },
  balanceText: {
    fontFamily: "DINPro",
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.3
  },
  textfieldAndButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  inputFieldSepartor: {
    flexGrow: 1
  },
  inputFieldContainerBase: {
    marginTop: 9,
    maxWidth: 425,
    height: 45,
    borderRadius: 2,
    boxShadow: "3px 9px 15px 0 rgba(0, 0, 0, 0.07)",
    border: "solid 1px #ededed",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputField: {
    paddingLeft: 30,
    height: 64,
    fontSize: 23,
    color: "#4a4a4a",
    fontFamily: "DINPro-Regular",
    fontWeight: "bold"
  },
  rightContentSepartor: {
    flexGrow: 1
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
    paddingTop: 11,
    "&:hover": {
      "& > button > p": {
        opacity: 0.75
      }
    }
  },
  maxButtonContainerDisabled: {
    paddingRight: 18,
    paddingTop: 11,
    cursor: "default"
  },
  maxButtonText: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#4a4a4a",
    opacity: 0.25
  }
});

export default useStyles;
