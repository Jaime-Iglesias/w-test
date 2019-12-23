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
    fontSize: 14,
    fontWeight: 300,
    color: "#ffffff"
  },
  wrapButtonDisabled: {
    marginTop: 112,
    backgroundColor: "#d1d1d1"
  },
  wrapCase: {
    backgroundColor: "#0bd080",
    marginTop: 35,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  allowanceCase: {
    backgroundColor: "#4a4a4a",
    marginTop: 55,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  errorCase: {
    backgroundColor: "#fd4848",
    marginTop: 55,
    "&:hover": {
      border: "1px solid #dddddd"
    }
  },
  baseDescTop: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: 300,
    color: "#838383",
    marginTop: 32,
    textAlign: "center"
  },
  baseDescBottom: {
    marginTop: 3,
    fontFamily: "Rubik",
    fontSize: 14,
    color: "#d1d1d1",
    fontWeight: 300,
    textAlign: "center"
  },
  baseDescError: {
    fontFamily: "Rubik",
    fontSize: 14,
    fontWeight: 300,
    color: "#fd4848",
    marginTop: 35
  },
  circularProgress: {
    "& > svg": {
      color: "#ffffff"
    }
  }
});

export default useStyles;
