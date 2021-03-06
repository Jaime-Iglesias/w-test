import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: 49
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flexGrow: 1
  },
  switchContainer: {
    marginLeft: "3%"
  },
  rightContentContainer: {
    marginRight: "2.5%"
  },
  buttonText: {
    fontFamily: "Rubik",
    fontSize: 14,
    color: "#ffffff"
  },
  connectButton: {
    width: 132,
    height: 33,
    borderRadius: 2,
    backgroundColor: "#0bd080",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  wrongNetworkButton: {
    width: 132,
    height: 33,
    borderRadius: 2,
    backgroundColor: "#fd4848",
    cursor: "default"
  },
  addressButton: {
    width: 132,
    height: 33,
    border: "solid 1px #d1d1d1",
    borderRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#f8f8f8"
    }
  },
  darkAddressButton: {
    width: 132,
    height: 33,
    border: "solid 1px #d1d1d1",
    backgroundColor: "#2d2d2d",
    borderRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#595959"
    }
  },
  bulletPointWrapper: {
    flexGrow: 1,
    marginTop: 1,
    display: "flex",
    justifyContent: "flex-start"
  },
  bulletPoint: {
    color: "#0bd080",
    fontSize: 22,
    font: "Rubik",
    marginLeft: 5,
    lineHeight: 0,
    marginRight: 4
  },
  addressButtonText: {
    fontFamily: "DINPro-Regular",
    fontSize: 14,
    fontWeight: "bold",
    color: "#bfbfbf",
    marginRight: 15
  },
  circularProgress: {
    marginLeft: 5,
    "& > svg": {
      color: "#0bd080"
    }
  }
});

export default useStyles;
