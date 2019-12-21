import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    maxWidth: 556,
    width: "38%"
  },
  title: {
    fontFamily: "Rubik",
    opacity: 0.75,
    fontSize: 32
  },
  subtitle: {
    marginTop: 35,
    fontFamily: "Rubik",
    fontSize: 18,
    color: "#838383",
    opacity: 0.75
  },
  ethMargin: {
    marginTop: 23
  },
  wethMargin: {
    marginTop: 8
  },
  divider: {
    width: "100%",
    marginTop: 27
  },
  instructions: {
    marginTop: 33,
    fontFamily: "Rubik",
    fontSize: 14,
    opacity: 0.25,
    fontWeight: 300
  }
});

export default useStyles;
