import React, { useState, useEffect, useMemo } from "react";
import { Typography, Divider, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";
import { abi, wethAddress } from "../../abi";
import text from "./mainContentText";
import BalanceContainer from "../BalanceContainer/BalanceContainer";
import InputContainer from "../InputContainer/InputContainer";
import MainButton from "../MainButton/MainButton";
import Header from "../Header/Header";

const MainContent = () => {
  const context = useWeb3React();
  const { account, library, chainId } = context;

  const newWethContract = (abi, wethAddress) => {
    if (library) {
      return new library.eth.Contract(abi, wethAddress);
    }
  };

  const wethContract = useMemo(() => newWethContract(abi, wethAddress), [
    library
  ]);

  const classes = useStyles();

  const [wrapEtherSelected, setWrapEtherSelected] = useState(true);
  const [ethBalance, setEthBalance] = useState("-");
  const [wethBalance, setWethBalance] = useState("-");
  const [inputAmount, setInputAmount] = useState("");
  const [submitButtonStatus, setSubmitButtonStatus] = useState("disabled");
  const [isPending, setIsPending] = useState(false);
  const [sessionTransactions, setSessionTransactions] = useState([]);

  const setWrapEther = () => {
    if (!wrapEtherSelected && account && chainId === 1) {
      setWrapEtherSelected(true);
    }
  };

  const setUnwrapEther = () => {
    if (wrapEtherSelected && account && chainId === 1) {
      setWrapEtherSelected(false);
    }
  };

  const getEthBalance = async () => {
    const balance = await library.eth.getBalance(account);
    const eth = library.utils.fromWei(balance, "ether");
    const ethFixed = parseFloat(eth)
      .toFixed(4)
      .toString();
    setEthBalance(ethFixed);
  };

  const getWethBalance = async () => {
    const balance = await wethContract.methods.balanceOf(account).call();
    const weth = library.utils.fromWei(balance, "ether");
    const wethFixed = parseFloat(weth)
      .toFixed(4)
      .toString();
    setWethBalance(wethFixed);
  };

  const setMax = () => {
    wrapEtherSelected
      ? setInputAmount(ethBalance)
      : setInputAmount(wethBalance);
  };

  const handleInputChange = e => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    if (account && chainId === 1 && library) {
      getEthBalance();
      getWethBalance();
    }
  }, [account, chainId, library, isPending, sessionTransactions]);

  useEffect(() => {
    if (wrapEtherSelected && account) {
      if (inputAmount > ethBalance) {
        setSubmitButtonStatus("lessEth");
      } else {
        setSubmitButtonStatus("wrap");
      }
    } else if (!wrapEtherSelected && account) {
      if (inputAmount > wethBalance) {
        setSubmitButtonStatus("lessWeth");
      } else {
        setSubmitButtonStatus("unwrap");
      }
    }
  }, [wrapEtherSelected, inputAmount, ethBalance]);

  return (
    <>
      <Header isPending={isPending} transactions={sessionTransactions} />
      <div className={classes.mainContent}>
        <div className={classes.mainWrapper}>
          <Typography className={classes.title}>{text.title}</Typography>
          <Typography className={classes.subtitle}>{text.subtitle}</Typography>
          <BalanceContainer
            isEth={true}
            balance={!account || chainId !== 1 ? "-" : ethBalance}
            className={classes.ethMargin}
            grey={!account || chainId !== 1}
          />
          <BalanceContainer
            isEth={false}
            balance={!account || chainId !== 1 ? "-" : wethBalance}
            className={classes.wethMargin}
            grey={!account || chainId !== 1}
          />
          <Divider className={classes.divider} />
          <Typography className={classes.instructions}>
            {text.instructions}
          </Typography>
          <div className={classes.optionsContainer}>
            <ButtonBase
              className={[
                classes.optionBase,
                wrapEtherSelected
                  ? classes.optionSelected
                  : classes.optionTextDeselected,
                !account || chainId !== 1
                  ? classes.ethOptionDisabled
                  : classes.hoverEffect
              ].join(" ")}
              onClick={() => setWrapEther()}
              disableRipple
            >
              <Typography
                className={[
                  classes.optionTextBase,
                  wrapEtherSelected
                    ? classes.optionTextSelected
                    : classes.optionTextDeselected
                ].join(" ")}
              >
                {text.wrapEther}
              </Typography>
            </ButtonBase>
            <ButtonBase
              className={[
                classes.optionBase,
                !wrapEtherSelected
                  ? classes.optionSelected
                  : classes.optionTextDeselected,
                !account || chainId !== 1
                  ? classes.wethOptionDisabled
                  : classes.hoverEffect
              ].join(" ")}
              onClick={() => setUnwrapEther()}
              disableRipple
            >
              <Typography
                className={[
                  classes.optionTextBase,
                  !wrapEtherSelected
                    ? classes.optionTextSelected
                    : classes.optionTextDeselected
                ].join(" ")}
              >
                {text.unwrapWeth}
              </Typography>
            </ButtonBase>
          </div>
          <InputContainer
            isEth={wrapEtherSelected}
            disabled={!account || chainId !== 1}
            inputAmount={inputAmount}
            handleInputChange={handleInputChange}
            setMax={setMax}
          />
          <MainButton
            submitButtonStatus={submitButtonStatus}
            wethAddress={wethAddress}
            wethContract={wethContract}
            inputAmount={inputAmount}
            isPending={isPending}
            setIsPending={setIsPending}
            setInputAmount={setInputAmount}
            setSessionTransactions={setSessionTransactions}
            sessionTransactions={sessionTransactions}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
