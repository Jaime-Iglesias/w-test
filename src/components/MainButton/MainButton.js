import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const setButtonType = (submitButtonStatus, classes) => {
  switch (submitButtonStatus) {
    case "wrap":
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>Wrap</Typography>
        </ButtonBase>
      );
    case "unwrap":
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>Unwrap</Typography>
        </ButtonBase>
      );
    case "lessEth":
      console.log("less eth");
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.errorCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>
            Insufficient ETH Balance
          </Typography>
        </ButtonBase>
      );
    case "lessWeth":
      console.log("less weth");
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.errorCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>
            Insufficient WETH Balance
          </Typography>
        </ButtonBase>
      );
    case "allowWeth":
      return (
        <ButtonBase
          className={[classes.mainButtonBase, classes.allowanceCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>
            Set WETH Allowance
          </Typography>
        </ButtonBase>
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
        <ButtonBase
          className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
          disableRipple
        >
          <Typography className={classes.mainButtonTextBase}>Wrap</Typography>
        </ButtonBase>
      );
  }
};

const MainButton = ({
  submitButtonStatus,
  classNameDescription,
  description
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.description}>
        <Typography className={classNameDescription}>{description}</Typography>
      </div>
      {setButtonType(submitButtonStatus, classes)}
    </>
  );
};

export default MainButton;
