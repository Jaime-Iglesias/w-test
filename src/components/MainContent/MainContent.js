import React, { useState, useEffect, useMemo } from "react";
import { Typography, Divider, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";
import { abi, wethAddress } from "../../abi";
import text from "./mainContentText";
import InputArea from "../InputArea/InputArea";
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

  const [ethBalance, setEthBalance] = useState("-");
  const [wethBalance, setWethBalance] = useState("-");
  const [inputAmount, setInputAmount] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [sessionTransactions, setSessionTransactions] = useState([]);

  const getEthBalance = async () => {
    const balance = await library.eth.getBalance(account);
    const eth = library.utils.fromWei(balance, "ether");
    const ethFixed =
      parseFloat(eth) === 0
        ? "0"
        : parseFloat(eth)
            .toFixed(4)
            .toString();
    setEthBalance(ethFixed);
  };

  const getWethBalance = async () => {
    const balance = await wethContract.methods.balanceOf(account).call();
    const weth = library.utils.fromWei(balance, "ether");
    const wethFixed =
      parseFloat(weth) === 0
        ? "0"
        : parseFloat(weth)
            .toFixed(4)
            .toString();
    setWethBalance(wethFixed);
  };

  const setMax = isEth => {
    if (isEth && ethBalance !== "0") {
      setInputAmount(ethBalance);
    } else if (!isEth && wethBalance !== "0") {
      setInputAmount(wethBalance);
    }
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
    setInputAmount("");
  }, [account]);

  return (
    <>
      <Header isPending={isPending} transactions={sessionTransactions} />
      <div className={classes.mainContent}>
        <div className={classes.mainWrapper}>
          <Typography className={classes.title}>{text.title}</Typography>
          <Typography className={classes.instructions}>
            {text.instructions}
          </Typography>
          <div style={{ marginBottom: 55, width: "100%" }}>
            <InputArea
              label={text.wrap}
              balance={ethBalance}
              tokenName={text.eth}
              disabled={!account || chainId !== 1}
              inputAmount={inputAmount}
              handleInputChange={handleInputChange}
              setMax={setMax}
            />
          </div>
          <InputArea
            label={text.unwrap}
            balance={wethBalance}
            tokenName={text.weth}
            disabled={!account || chainId !== 1}
            inputAmount={inputAmount}
            handleInputChange={handleInputChange}
            setMax={setMax}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
