import MetamaskIcon from "../../assets/wallet_icons/metamask.png";
import LedgerIcon from "../../assets/wallet_icons/ledger.png";
import TrezorIcon from "../../assets/wallet_icons/trezor.png";
import CoinbaseIcon from "../../assets/wallet_icons/coimbase.png";

export const setWallets = classes => [
  { text: "MetaMask", icon: MetamaskIcon, className: classes.metamask },
  { text: "Trezor", icon: TrezorIcon, className: classes.trezor },
  { text: "Ledger", icon: LedgerIcon, className: classes.ledgerCoinbase },
  {
    text: "Coinbase Wallet",
    icon: CoinbaseIcon,
    className: classes.ledgerCoinbase
  }
];
