import React from "react";
import { Typography, ButtonBase, CircularProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";

const setButtonType = (
  submitButtonStatus,
  classes,
  isPending,
  wrapEther,
  unwrapEther
) => {
  switch (submitButtonStatus) {
    case "wrap":
      return (
        <>
          <ButtonBase
            className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
            disableRipple
            onClick={() => wrapEther()}
          >
            {!isPending ? (
              <Typography className={classes.mainButtonTextBase}>
                Wrap
              </Typography>
            ) : (
              <CircularProgress
                size={22}
                className={classes.circularProgress}
              />
            )}
          </ButtonBase>
        </>
      );
    case "unwrap":
      return (
        <>
          <ButtonBase
            className={[classes.mainButtonBase, classes.wrapCase].join(" ")}
            disableRipple
            onClick={() => unwrapEther()}
          >
            {!isPending ? (
              <Typography className={classes.mainButtonTextBase}>
                Unwrap
              </Typography>
            ) : (
              <CircularProgress
                size={22}
                className={classes.circularProgress}
              />
            )}
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

const MainButton = ({
  submitButtonStatus,
  inputAmount,
  wethContract,
  wethAddress,
  isPending,
  setIsPending,
  setInputAmount,
  setSessionTransactions
}) => {
  const classes = useStyles();
  const context = useWeb3React();
  const { account, library, chainId } = context;

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
          setInputAmount("");
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
          setInputAmount("");
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

  return (
    <>
      {setButtonType(
        submitButtonStatus,
        classes,
        inputAmount,
        isPending,
        wrapEther,
        unwrapEther
      )}
    </>
  );
};

export default MainButton;
