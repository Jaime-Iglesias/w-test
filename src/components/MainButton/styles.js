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
  wrapButtonDisabled: {
    backgroundColor: "#d1d1d1"
  },
  wrapCase: {
    backgroundColor: "#0bd080",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  errorCase: {
    backgroundColor: "#fd4848",
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
