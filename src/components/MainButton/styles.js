import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainButtonBase: {
    width: 248,
    maxWidth: 248,
    height: 45,
    maxHeight: 45,
    borderRadius: 2
  },
  mainButtonTextBase: {
    fontFamily: "Rubik",
    fontSize: 18,
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
  allowanceCase: {
    backgroundColor: "#4a4a4a",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  errorCase: {
    backgroundColor: "#fd4848",
    "&:hover": {
      border: "1px solid #dddddd"
    }
  }
});

export default useStyles;
