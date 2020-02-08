import React from "react";
import { Typography, InputBase, ButtonBase } from "@material-ui/core";
import MainButton from "../MainButton/MainButton";

import useStyles from "./styles";

const InputArea = ({
  label,
  balance,
  tokenName,
  disabled,
  inputAmount,
  handleInputChange,
  setMax
}) => {
  const classes = useStyles();

  return (
    <div className={classes.inputAreaContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <Typography
        className={classes.balanceText}
      >{`${tokenName} Balance: ${balance}`}</Typography>
      <div className={classes.textfieldAndButtonContainer}>
        <div className={classes.inputFieldSepartor}>
          <div className={classes.inputFieldContainerBase}>
            <div className={classes.rightContentSepartor}>
              <InputBase
                className={classes.inputField}
                disabled={disabled}
                onChange={e => handleInputChange(e)}
                value={inputAmount}
                placeholder="0"
              />
            </div>
            <div className={classes.inputContentRight}>
              <div
                className={
                  disabled
                    ? classes.maxButtonContainerDisabled
                    : classes.maxButtonContainer
                }
              >
                <ButtonBase
                  disableRipple
                  disabled={disabled}
                  onClick={() => setMax()}
                >
                  <Typography className={classes.maxButtonText}>Max</Typography>
                </ButtonBase>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 9 }}>
          <MainButton submitButtonStatus={disabled} />
        </div>
      </div>
    </div>
  );
};

export default InputArea;
