import React, { useState } from "react";
import { Typography, Divider, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";
import text from "./mainContentText";
import BalanceContainer from "../BalanceContainer/BalanceContainer";
import InputContainer from "../InputContainer/InputContainer";
import MainButton from "../MainButton/MainButton";

const MainContent = () => {
  const context = useWeb3React();
  const { account, library, chainId } = context;

  const classes = useStyles();

  const [wrapEtherSelected, setWrapEtherSelected] = useState(true);

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

  return (
    <div className={classes.mainContent}>
      <div className={classes.mainWrapper}>
        <Typography className={classes.title}>{text.title}</Typography>
        <Typography className={classes.subtitle}>{text.subtitle}</Typography>
        <BalanceContainer
          isEth={true}
          balance={"-"}
          className={classes.ethMargin}
          grey={!account || chainId !== 1}
        />
        <BalanceContainer
          isEth={false}
          balance={"-"}
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
        />
        <MainButton
          mainButtonText={"Wrap"}
          classNameText={classes.wrapText}
          classNameButton={
            !account || chainId !== 1
              ? classes.wrapButtonDisabled
              : classes.wrapButton
          }
        />
      </div>
    </div>
  );
};

export default MainContent;
