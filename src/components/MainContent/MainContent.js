import React, { useState } from "react";
import { Typography, Divider, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";
import text from "./mainContentText";
import BalanceContainer from "../BalanceContainer/BalanceContainer";

const MainContent = () => {
  const classes = useStyles();

  const [wrapEtherSelected, setWrapEtherSelected] = useState(true);

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
        <div className={classes.optionsContainer}>
          <ButtonBase
            className={[
              classes.optionBase,
              wrapEtherSelected ? classes.optionSelected : null
            ].join(" ")}
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
              !wrapEtherSelected ? classes.optionSelected : null
            ].join(" ")}
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
      </div>
    </div>
  );
};

export default MainContent;
