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
    fontFamily: "DINPro-Regular",
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 11
  },
  darkModeLabel: {
    fontFamily: "DINPro-Regular",
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 11,
    color: "#ffffff"
  },
  balanceText: {
    fontFamily: "DINPro-Regular",
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.3
  },
  darkModeBalanceText: {
    fontFamily: "DINPro-Regular",
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.5,
    color: "#ffffff"
  },
  balanceTextInvalidInput: {
    color: "#fd4848",
    opacity: 1
  },
  textfieldAndButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  mobileTextfieldAndButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  darkModeInputFieldContainerBase: {
    marginTop: 9,
    maxWidth: 425,
    height: 45,
    borderRadius: 2,
    boxShadow: "3px 9px 15px 0 rgba(0, 0, 0, 0.07)",
    border: "solid 1px #ededed",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#2d2d2d"
  },
  inputFieldInvalidInput: {
    border: "solid 1px #fd4848"
  },
  inputField: {
    paddingLeft: 30,
    height: 64,
    fontSize: 23,
    color: "#4a4a4a",
    fontFamily: "DINPro-Regular",
    fontWeight: "bold"
  },
  darkModeInputField: {
    paddingLeft: 30,
    height: 64,
    fontSize: 23,
    color: "#ffffff",
    opacity: 0.5,
    fontFamily: "DINPro-Regular",
    fontWeight: "bold"
  },
  inputFieldTextInvalidInput: {
    color: "#fd4848"
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
  },
  darkModeMaxButtonText: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: "#ffffff",
    opacity: 0.5
  }
});

export default useStyles;
