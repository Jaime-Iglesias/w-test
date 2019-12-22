import MetamaskIcon from "../../assets/wallet_icons/metamask.png";
import LedgerIcon from "../../assets/wallet_icons/ledger.png";
import TrezorIcon from "../../assets/wallet_icons/trezor.png";
import CoinbaseIcon from "../../assets/wallet_icons/coimbase.png";

export const setWallets = (classes, activate, walletsByName) => [
  {
    text: "MetaMask",
    icon: MetamaskIcon,
    className: classes.metamask,
    runActivation: () => activate(walletsByName["INJECTED"])
  },
  {
    text: "Trezor",
    icon: TrezorIcon,
    className: classes.trezor,
    runActivation: () => activate(walletsByName["TREZOR"])
  },
  {
    text: "Ledger",
    icon: LedgerIcon,
    className: classes.ledgerCoinbase,
    runActivation: () => activate(walletsByName["LEDGER"])
  },
  {
    text: "Coinbase Wallet",
    icon: CoinbaseIcon,
    className: classes.ledgerCoinbase
  }
];
