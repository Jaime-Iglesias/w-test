import React from "react";
import {
  Grid,
  Typography,
  Dialog,
  ButtonBase,
  useMediaQuery
} from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import { injected, trezor, ledger } from "../../connectors";

import useStyles from "./styles";
import { setWallets } from "./constants";

const walletByName = {
  INJECTED: injected,
  TREZOR: trezor,
  LEDGER: ledger
};

const WalletOptionContainer = ({ icon, text, className, activateWallet }) => {
  const classes = useStyles();

  return (
    <ButtonBase
      disableRipple
      className={classes.optionContainer}
      onClick={activateWallet}
    >
      <img src={icon} alt={text} className={className} />
      <Typography className={classes.optionText}>{text}</Typography>
    </ButtonBase>
  );
};

const WalletModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const context = useWeb3React();

  const shouldScale = useMediaQuery("(min-width: 500px)");

  const { activate } = context;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      styles={shouldScale ? { scale: 0.7 } : {}}
    >
      <div className={classes.wrapper}>
        <Typography className={classes.title}>Connect Your Wallet</Typography>
        <Grid container flex="row" justify="center" alignItems="flex-start">
          {setWallets(classes, activate, walletByName).map(obj => (
            <WalletOptionContainer
              icon={obj.icon}
              text={obj.text}
              className={obj.className}
              activateWallet={obj.runActivation}
            />
          ))}
        </Grid>
      </div>
    </Dialog>
  );
};

export default WalletModal;
