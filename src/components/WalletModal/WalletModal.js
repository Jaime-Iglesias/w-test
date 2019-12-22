import React from "react";
import { Grid, Typography, Dialog, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";
import { setWallets } from "./constants";

const WalletOptionContainer = ({ icon, text, className }) => {
  const classes = useStyles();

  return (
    <ButtonBase disableRipple className={classes.optionContainer}>
      <img src={icon} alt={text} className={className} />
      <Typography className={classes.optionText}>{text}</Typography>
    </ButtonBase>
  );
};

const WalletModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.wrapper}>
        <Typography className={classes.title}>Connect Your Wallet</Typography>
        <Grid
          container
          flex="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          {setWallets(classes).map(obj => (
            <WalletOptionContainer
              icon={obj.icon}
              text={obj.text}
              className={obj.className}
            />
          ))}
        </Grid>
      </div>
    </Dialog>
  );
};

export default WalletModal;
