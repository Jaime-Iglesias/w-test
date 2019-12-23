import React, { useState, useEffect } from "react";
import { Typography, ButtonBase, CircularProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

import AccountModal from "../AccountModal/AccountModal";
import WalletModal from "../WalletModal/WalletModal";
import ParadigmFull from "../../assets/paradigm_full.png";
import useStyles from "./styles";

const compressAddress = address =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

const RightHeaderContent = ({ isPending, transactions }) => {
  const context = useWeb3React();
  const classes = useStyles();

  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openAccountModal, setOpenAccountModal] = useState(false);

  const { account, chainId, active } = context;

  useEffect(() => {
    if (account) {
      setOpenWalletModal(false);
    }
  }, [account]);

  const openWalletModalTrigger = () => {
    setOpenWalletModal(true);
  };

  const handleCloseWalletModal = () => {
    setOpenWalletModal(false);
  };

  const openAccountModalTrigger = () => {
    setOpenAccountModal(true);
  };

  const handleCloseAccountModal = () => {
    setOpenAccountModal(false);
  };

  return (
    <div className={classes.rightContentContainer}>
      {!active && (
        <ButtonBase
          className={classes.connectButton}
          onClick={() => openWalletModalTrigger()}
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
      {account && chainId === 1 && (
        <ButtonBase
          className={classes.addressButton}
          disableRipple
          onClick={() => openAccountModalTrigger()}
        >
          <div className={classes.bulletPointWrapper}>
            {isPending ? (
              <CircularProgress
                size={12}
                className={classes.circularProgress}
              />
            ) : (
              <span className={classes.bulletPoint}>⚫</span>
            )}
          </div>
          <Typography className={classes.addressButtonText}>
            {compressAddress(account)}
          </Typography>
        </ButtonBase>
      )}
      <WalletModal
        open={openWalletModal}
        handleClose={handleCloseWalletModal}
      />
      <AccountModal
        open={openAccountModal}
        handleClose={handleCloseAccountModal}
        transactions={transactions}
      />
    </div>
  );
};

const Header = ({ isPending, transactions }) => {
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
      <RightHeaderContent isPending={isPending} transactions={transactions} />
    </div>
  );
};

export default Header;
