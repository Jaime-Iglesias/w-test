import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  balanceContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  eth: {
    width: 60,
    height: 30,
    backgroundColor: "#2188ea",
    borderRadius: 2
  },
  weth: {
    width: 82,
    height: 30,
    backgroundColor: "#ed1e79",
    borderRadius: 2
  },
  innerText: {
    fontFamily: "DINPro-Regular",
    fontSize: 22,
    letterSpacing: 1.4,
    color: "#ffffff",
    fontWeight: "bold"
  },
  balanceText: {
    fontFamily: "DINPro-Regular",
    fontSize: 18,
    fontWeight: 500,
    color: "#4a4a4a"
  }
});

export default useStyles;
