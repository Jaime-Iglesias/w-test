import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const setButtonType = (submitButtonStatus, classes, inputAmount) => {
  switch (submitButtonStatus) {
    case "wrap":
      return (
        <>
          <Typography className={classes.baseDescTop}>
            {`You will receive ${inputAmount || "0"} WETH`}
          </Typography>
          <Typography className={classes.baseDescBottom}>
            *Does not include network costs (i.e. gas).
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>Wrap</Typography>
          </ButtonBase>
        </>
      );
    case "unwrap":
      return (
        <>
          <Typography className={classes.baseDescTop}>
            {`You will receive ${inputAmount} ETH`}
          </Typography>
          <Typography className={classes.baseDescBottom}>
            *Does not include network costs (i.e. gas).
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>
              Unwrap
            </Typography>
          </ButtonBase>
        </>
      );
    case "lessEth":
      return (
        <>
          <Typography className={classes.baseDescError}>
            Insufficient ETH Balance
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.errorCase].join(" ")}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>
              Insufficient ETH Balance
            </Typography>
          </ButtonBase>
        </>
      );
    case "lessWeth":
      return (
        <>
          <Typography className={classes.baseDescError}>
            Insufficient WETH Balance
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.errorCase].join(" ")}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>
              Insufficient WETH Balance
            </Typography>
          </ButtonBase>
        </>
      );
    case "allowWeth":
      return (
        <>
          <Typography className={classes.baseDescError}>
            Set Your WETH allowance to continue
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.allowanceCase].join(
              " "
            )}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>
              Set WETH Allowance
            </Typography>
          </ButtonBase>
        </>
      );
    case "disabled":
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.wrapButtonDisabled].join(
            " "
          )}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>Wrap</Typography>
        </ButtonBase>
      );
    default:
      return (
        <>
          <Typography className={classes.baseDescTop}>
            {`You will receive ${inputAmount || "0"} WETH`}
          </Typography>
          <ButtonBase
            className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
            disableRipple
          >
            <Typography className={classes.mainButtonTextBase}>Wrap</Typography>
          </ButtonBase>
        </>
      );
  }
};

const MainButton = ({ submitButtonStatus, inputAmount }) => {
  const classes = useStyles();

  return <>{setButtonType(submitButtonStatus, classes, inputAmount)}</>;
};

export default MainButton;
