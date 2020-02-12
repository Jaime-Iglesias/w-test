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

const WalletOptionContainer = ({
  icon,
  text,
  className,
  activateWallet,
  darkMode
}) => {
  const classes = useStyles();

  return (
    <ButtonBase
      disableRipple
      className={classes.optionContainer}
      onClick={activateWallet}
    >
      <img src={icon} alt={text} className={className} />
      <Typography
        className={darkMode ? classes.darkModeOptionText : classes.optionText}
      >
        {text}
      </Typography>
    </ButtonBase>
  );
};

const WalletModal = ({ open, handleClose, darkMode }) => {
  const classes = useStyles();
  const context = useWeb3React();

  const shouldScale = useMediaQuery("(min-width: 430px)");

  const { activate } = context;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={!shouldScale ? { paper: classes.scaleDown } : {}}
    >
      <div
        className={[
          classes.wrapper,
          !shouldScale ? classes.wrapperSmall : ""
        ].join(" ")}
      >
        <Typography
          className={[
            classes.title,
            !shouldScale ? classes.titleSmall : ""
          ].join(" ")}
        >
          Connect Your Wallet
        </Typography>
        <Grid
          container
          className={!shouldScale ? classes.gridContainerSmall : ""}
          flex="row"
          justify="center"
          alignItems="flex-start"
        >
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
