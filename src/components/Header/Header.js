import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import useStyles from "./styles";

const compressAddress = address =>
  `${address.slice(0, 4)}...${address.slice(-4)}`;

const RightHeaderContent = () => {
  const context = useWeb3React();
  const classes = useStyles();

  const { account, chainId, active } = context;

  return (
    <div className={classes.rightContentContainer}>
      {!active && (
        <ButtonBase className={classes.connectButton}>
          <Typography className={classes.buttonText}>Connect Wallet</Typography>
        </ButtonBase>
      )}
      {chainId !== 1 && active && (
        <ButtonBase className={classes.wrongNetworkButton}>
          <Typography className={classes.buttonText}>Wrong Network</Typography>
        </ButtonBase>
      )}
      {account && (
        <ButtonBase className={classes.addressButton}>
          <Typography className={classes.addressButtonText}>
            {compressAddress(account)}
          </Typography>
        </ButtonBase>
      )}
    </div>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftContent}>
        <div className={classes.paradigmLogoPrimary}>
          <Typography variant="h6">PARADIGM</Typography>
        </div>
        <Typography variant="subtitle2">Convert</Typography>
      </div>
      <RightHeaderContent />
    </div>
  );
};

export default Header;
