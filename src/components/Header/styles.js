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
  paradigmLogoPrimary: {
    width: 142,
    height: 31,
    marginRight: 8,
    marginLeft: 47,
    opacity: 0.47
  },
  convertText: {
    fontSize: 20,
    marginTop: 2,
    fontWeight: 300,
    opacity: 0.25,
    fontFamily: "NeueHaasUnicaW1G"
  },
  rightContentContainer: {
    marginRight: 27
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
    backgroundColor: "#fd4848"
  },
  addressButton: {
    width: 126,
    height: 27,
    border: "solid 1px #d1d1d1",
    backgroundColor: "#f8f8f8",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  addressButtonText: {
    fontFamily: "DINPro",
    fontSize: 14,
    fontWeight: 500,
    color: "#bfbfbf"
  }
});

export default useStyles;
