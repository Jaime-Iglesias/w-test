import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainButtonBase: {
    width: 140,
    maxWidth: 140,
    height: 45,
    maxHeight: 45,
    borderRadius: 2
  },
  mainButtonTextBase: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: 300,
    color: "#ffffff"
  },
  pendingButtonTextBase: {
    marginTop: 4
  },
  disabled: {
    backgroundColor: "#bfbfbf",
    cursor: "default"
  },
  enabled: {
    backgroundColor: "#5c5c5c",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  circularProgress: {
    "& > svg": {
      color: "#ffffff"
    }
  }
});

export default useStyles;
