import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const BalanceContainer = ({ isEth, balance, className, grey }) => {
  const classes = useStyles();

  return (
    <div className={[classes.balanceContainer, className].join(" ")}>
      <div style={{ flexGrow: 1 }}>
        <ButtonBase
          disableRipple
          className={[
            isEth ? classes.eth : classes.weth,
            grey ? classes.disabled : ""
          ].join(" ")}
        >
          <Typography className={classes.innerText}>
            {isEth ? "ETH" : "WETH"}
          </Typography>
        </ButtonBase>
      </div>
      <Typography className={classes.balanceText}>{balance}</Typography>
    </div>
  );
};

export default BalanceContainer;
