import React, { useState } from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import WalletModal from "../WalletModal/WalletModal";
import ParadigmFull from "../../assets/paradigm_full.png";
import useStyles from "./styles";

const compressAddress = address =>
  `${address.slice(0, 4)}...${address.slice(-4)}`;

const RightHeaderContent = () => {
  const context = useWeb3React();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const { account, chainId, active } = context;

  const openWalletModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.rightContentContainer}>
      {!active && (
        <ButtonBase
          className={classes.connectButton}
          onClick={() => openWalletModal()}
          disableRipple
        >
          <Typography className={classes.buttonText}>Connect Wallet</Typography>
        </ButtonBase>
      )}
      {chainId !== 1 && active && (
        <ButtonBase className={classes.wrongNetworkButton} disableRipple>
          <Typography className={classes.buttonText}>Wrong Network</Typography>
        </ButtonBase>
      )}
      {account && (
        <ButtonBase className={classes.addressButton} disableRipple>
          <Typography className={classes.addressButtonText}>
            {compressAddress(account)}
          </Typography>
        </ButtonBase>
      )}
      <WalletModal open={open} handleClose={handleClose} />
    </div>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftContent}>
        <img
          src={ParadigmFull}
          alt="paradigm-main"
          className={classes.paradigmLogoPrimary}
        />
        <Typography className={classes.convertText}>Convert</Typography>
      </div>
      <RightHeaderContent />
    </div>
  );
};

export default Header;
