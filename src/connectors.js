import { InjectedConnector } from "@web3-react/injected-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";

const POLLING_INTERVAL = 8000;

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213"
};

export const injected = new InjectedConnector({
  supportedChainIds: [1]
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL
});

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: "dummy@abc.xyz",
  manifestAppUrl: "https://8rg3h.csb.app/"
});

