import React from "react";
import { InputBase, Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const InputContainer = ({ isEth }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerBase}>
      <div className={classes.inputFieldContainer}>
        <InputBase className={classes.inputField} />
      </div>
      <div className={classes.inputContentRight}>
        <div className={classes.maxButtonContainer}>
          <ButtonBase disableRipple>
            <Typography className={classes.maxButtonText}>Max</Typography>
          </ButtonBase>
        </div>
        {isEth ? (
          <div className={classes.selectionTypeContainer}>
            <ButtonBase className={classes.eth} disableRipple>
              <Typography className={classes.selectionText}>ETH</Typography>
            </ButtonBase>
          </div>
        ) : (
          <div className={classes.selectionTypeContainer}>
            <ButtonBase className={classes.weth} disableRipple>
              <Typography className={classes.selectionText}>WETH</Typography>
            </ButtonBase>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputContainer;
