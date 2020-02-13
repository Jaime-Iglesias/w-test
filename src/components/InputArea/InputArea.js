import React, { useState, useEffect } from "react";
import {
  Typography,
  InputBase,
  ButtonBase,
  useMediaQuery
} from "@material-ui/core";
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
  wethAddress,
  darkMode
}) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const classes = useStyles();

  const shouldScale = useMediaQuery("(min-width: 430px)");

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
      <Typography className={darkMode ? classes.darkModeLabel : classes.label}>
        {label}
      </Typography>
      <Typography
        className={[
          darkMode ? classes.darkModeBalanceText : classes.balanceText,
          invalidInput ? classes.balanceTextInvalidInput : ""
        ].join(" ")}
      >{`${tokenName} Balance: ${balance}`}</Typography>
      <div
        className={
          shouldScale
            ? classes.textfieldAndButtonContainer
            : classes.mobileTextfieldAndButtonContainer
        }
      >
        <div className={classes.inputFieldSepartor}>
          <div
            className={[
              darkMode
                ? classes.darkModeInputFieldContainerBase
                : classes.inputFieldContainerBase,
              invalidInput ? classes.inputFieldInvalidInput : ""
            ].join(" ")}
          >
            <div className={classes.rightContentSepartor}>
              <InputBase
                className={[
                  darkMode ? classes.darkModeInputField : classes.inputField,
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
                  <Typography
                    className={
                      darkMode
                        ? classes.darkModeMaxButtonText
                        : classes.maxButtonText
                    }
                  >
                    Max
                  </Typography>
                </ButtonBase>
              </div>
            </div>
          </div>
        </div>
        <div
          style={
            shouldScale ? { marginTop: 9 } : { marginTop: 24, width: "100%" }
          }
        >
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
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default InputArea;
