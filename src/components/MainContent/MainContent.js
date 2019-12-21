import React from "react";
import { Typography, Divider } from "@material-ui/core";

import useStyles from "./styles";
import text from "./mainContentText";
import BalanceContainer from "../BalanceContainer/BalanceContainer";

const MainContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <div className={classes.mainWrapper}>
        <Typography className={classes.title}>{text.title}</Typography>
        <Typography className={classes.subtitle}>{text.subtitle}</Typography>
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
        <Divider className={classes.divider} />
        <Typography className={classes.instructions}>
          {text.instructions}
        </Typography>
      </div>
    </div>
  );
};

export default MainContent;
