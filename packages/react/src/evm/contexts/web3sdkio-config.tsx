import {
  Chain,
  SupportedChainId,
  defaultSupportedChains,
} from "../constants/chain";
import { DEFAULT_RPC_URLS } from "@web3sdkio/sdk";
import React, { PropsWithChildren, createContext, useContext } from "react";

interface Web3sdkioConfigContext {
  rpcUrlMap: Record<SupportedChainId | number, string>;
  supportedChains: Chain[];
}

const Web3sdkioConfigContext = createContext<Web3sdkioConfigContext>({
  rpcUrlMap: DEFAULT_RPC_URLS,
  supportedChains: defaultSupportedChains,
});

export const Web3sdkioConfigProvider: React.FC<
  PropsWithChildren<{
    value: Web3sdkioConfigContext;
  }>
> = ({ value, children }) => (
  <Web3sdkioConfigContext.Provider value={value}>
    {children}
  </Web3sdkioConfigContext.Provider>
);

export function useWeb3sdkioConfigContext() {
  return useContext(Web3sdkioConfigContext);
}
