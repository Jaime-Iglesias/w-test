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
  darkModeMainButtonTextBase: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: 300,
    color: "#4a4a4a"
  },
  pendingButtonTextBase: {
    marginTop: 4
  },
  buttonBase: {
    backgroundColor: "#5c5c5c",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  darkModeButtonBase: {
    backgroundColor: "#bfbfbf",
    "&:hover": {
      border: "1px solid #5c5c5c"
    }
  },
  disabled: {
    backgroundColor: "#bfbfbf",
    cursor: "default",
    "&:hover": {
      border: "1px solid transparent"
    }
  },
  circularProgress: {
    "& > svg": {
      color: "#ffffff"
    }
  }
});

export default useStyles;
