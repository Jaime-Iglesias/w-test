import MetamaskIcon from "../../assets/wallet_icons/metamask.png";
import LedgerIcon from "../../assets/wallet_icons/ledger.png";
import TrezorIcon from "../../assets/wallet_icons/trezor.png";
import CoinbaseIcon from "../../assets/wallet_icons/cb.png";
import CoinbaseIconWhite from "../../assets/wallet_icons/cb_white.png";
import TrezorIconWhite from "../../assets/wallet_icons/trezor_white.png";
import LedgerIconWhite from "../../assets/wallet_icons/ledger_white.png";
import MetamaskIconWhite from "../../assets/wallet_icons/mm_white.png";

export const setWallets = (classes, activate, walletsByName) => [
  {
    text: "MetaMask",
    icon: MetamaskIcon,
    darkModeIcon: MetamaskIconWhite,
    className: classes.metamask,
    runActivation: () => activate(walletsByName["INJECTED"])
  },
  {
    text: "Trezor",
    icon: TrezorIcon,
    darkModeIcon: TrezorIconWhite,
    className: classes.trezor,
    runActivation: () => activate(walletsByName["TREZOR"])
  },
  {
    text: "Ledger",
    icon: LedgerIcon,
    darkModeIcon: LedgerIconWhite,
    className: classes.ledgerCoinbase,
    runActivation: () => activate(walletsByName["LEDGER"])
  },
  {
    text: "Coinbase Wallet",
    icon: CoinbaseIcon,
    darkModeIcon: CoinbaseIconWhite,
    className: classes.ledgerCoinbase
  }
];
