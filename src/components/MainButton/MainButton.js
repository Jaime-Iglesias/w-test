import React from "react";
import {
  Typography,
  ButtonBase,
  CircularProgress,
  useMediaQuery
} from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";

const MainButton = ({
  isEth,
  disabled,
  inputAmount,
  wethContract,
  wethAddress,
  setIsPending,
  isPending,
  setWethInputAmount,
  setEthInputAmount,
  setSessionTransactions,
  invalidInput,
  darkMode
}) => {
  const classes = useStyles();
  const context = useWeb3React();
  const { account, library, chainId } = context;

  const shouldScale = useMediaQuery("(min-width: 430px)");

  const wrapEther = async () => {
    if (account && library && chainId === 1 && inputAmount > 0) {
      library.eth
        .sendTransaction({
          from: account,
          to: wethAddress,
          value: library.utils.toWei(inputAmount, "ether")
        })
        .on("transactionHash", txHash => {
          setIsPending(true);
          setEthInputAmount("");
          setWethInputAmount("");
          let d = new Date();
          let timestamp = d.toLocaleString();
          const transaction = {
            hash: txHash,
            timestamp: timestamp
          };
          setSessionTransactions(transactions => [
            transaction,
            ...transactions
          ]);
        })
        .on("receipt", () => {
          setIsPending(false);
        });
    }
  };

  const unwrapEther = async () => {
    if (account && library && chainId === 1 && inputAmount > 0) {
      wethContract.methods
        .withdraw(library.utils.toWei(inputAmount, "ether"))
        .send({ from: account })
        .on("transactionHash", txHash => {
          setIsPending(true);
          setEthInputAmount("");
          setWethInputAmount("");
          let d = new Date();
          let timestamp = d.toLocaleString();
          const transaction = {
            hash: txHash,
            timestamp: timestamp
          };
          setSessionTransactions(transactions => [
            transaction,
            ...transactions
          ]);
        })
        .on("receipt", () => {
          setIsPending(false);
        });
    }
  };

  const sendTransaction = () => {
    if (isEth && !invalidInput) {
      wrapEther();
    } else if (!isEth && !invalidInput) {
      unwrapEther();
    }
    console.log(invalidInput);
  };

  return (
    <>
      <ButtonBase
        className={[
          shouldScale ? classes.mainButtonBase : classes.mobileMainButtonBase,
          disabled && darkMode ? classes.darkModeDisabled : "",
          disabled && !darkMode ? classes.disabled : "",
          darkMode ? classes.darkModeButtonBase : classes.buttonBase
        ].join(" ")}
        disableRipple
        onClick={() => sendTransaction()}
      >
        <Typography
          className={[
            darkMode
              ? classes.darkModeMainButtonTextBase
              : classes.mainButtonTextBase,
            isPending ? classes.pendingButtonTextBase : ""
          ].join(" ")}
        >
          {!isPending ? (
            <Typography
              className={
                darkMode
                  ? classes.darkModeMainButtonTextBase
                  : classes.mainButtonTextBase
              }
            >
              {isEth ? "Wrap" : "Unwrap"}
            </Typography>
          ) : (
            <CircularProgress
              size={22}
              className={
                darkMode
                  ? classes.darkModeCircularProgress
                  : classes.circularProgress
              }
            />
          )}
        </Typography>
      </ButtonBase>
    </>
  );
};

export default MainButton;
