import React, { useState, useEffect } from "react";
import { Typography, InputBase, ButtonBase } from "@material-ui/core";
import MainButton from "../MainButton/MainButton";

import useStyles from "./styles";

const InputArea = ({
  label,
  balance,
  isEth,
  tokenName,
  disabled,
  inputAmount,
  setMax,
  handleInputChange,
  setEthInputAmount,
  setWethInputAmount,
  setSessionTransactions,
  setIsPending,
  isPending,
  wethContract,
  wethAddress
}) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (disabled) return;

    if (inputAmount > balance || inputAmount < 0 || isNaN(inputAmount)) {
      setInvalidInput(true);
    } else {
      setInvalidInput(false);
    }
  }, [inputAmount]);

  return (
    <div className={classes.inputAreaContainer}>
      <Typography className={classes.label}>{label}</Typography>
      <Typography
        className={[
          classes.balanceText,
          invalidInput ? classes.balanceTextInvalidInput : ""
        ].join(" ")}
      >{`${tokenName} Balance: ${balance}`}</Typography>
      <div className={classes.textfieldAndButtonContainer}>
        <div className={classes.inputFieldSepartor}>
          <div
            className={[
              classes.inputFieldContainerBase,
              invalidInput ? classes.inputFieldInvalidInput : ""
            ].join(" ")}
          >
            <div className={classes.rightContentSepartor}>
              <InputBase
                className={[
                  classes.inputField,
                  invalidInput ? classes.inputFieldTextInvalidInput : ""
                ].join(" ")}
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
                  onClick={() => setMax(isEth)}
                >
                  <Typography className={classes.maxButtonText}>Max</Typography>
                </ButtonBase>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 9 }}>
          <MainButton
            submitButtonStatus={disabled}
            setEthInputAmount={setEthInputAmount}
            setWethInputAmount={setWethInputAmount}
            setSessionTransactions={setSessionTransactions}
            inputAmount={inputAmount}
            isPending={isPending}
            setIsPending={setIsPending}
            isEth={isEth}
            disabled={disabled || invalidInput}
            invalidInput={invalidInput}
            wethContract={wethContract}
            wethAddress={wethAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default InputArea;
