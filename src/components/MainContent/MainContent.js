import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";
import BalanceContainer from "../BalanceContainer/BalanceContainer";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <div className={classes.mainWrapper}>
        <Typography className={classes.title}>Wrap/Unwrap ETH</Typography>
        <Typography className={classes.subtitle}>Your Balances</Typography>
        <BalanceContainer
          isEth={true}
          balance={"100"}
          className={classes.ethMargin}
        />
        <BalanceContainer
          isEth={false}
          balance={"50"}
          className={classes.wethMargin}
        />
      </div>
    </div>
  );
};

export default MainContent;
