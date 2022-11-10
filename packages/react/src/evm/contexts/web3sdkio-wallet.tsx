import { __DEV__ } from "../constants/runtime";
import { useWeb3sdkioConfigContext } from "./web3sdkio-config";
import { UserWallet } from "@web3sdkio/sdk";
import { Signer } from "ethers";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface Web3sdkioConnectedWalletContext {
  wallet: UserWallet | undefined;
  address: string | undefined;
  chainId: number | undefined;
  signer: Signer | undefined;
}

const INITIAL_CONTEXT_VALUE: Web3sdkioConnectedWalletContext = {
  wallet: undefined,
  address: undefined,
  chainId: undefined,
  signer: undefined,
};

const Web3sdkioConnectedWalletContext =
  createContext<Web3sdkioConnectedWalletContext>(INITIAL_CONTEXT_VALUE);

export const Web3sdkioConnectedWalletProvider: React.FC<
  PropsWithChildren<{ signer?: Signer }>
> = ({ signer, children }) => {
  const { rpcUrlMap } = useWeb3sdkioConfigContext();

  const [contextValue, setContextValue] =
    useState<Web3sdkioConnectedWalletContext>({
      ...INITIAL_CONTEXT_VALUE,
      signer: signer ? signer : undefined,
    });

  useEffect(() => {
    setContextValue((val) => ({
      ...val,
      signer: signer ? signer : undefined,
    }));
  }, [signer]);

  useEffect(() => {
    let s = signer;
    if (signer) {
      // just get both of these up front and keep them around with the context
      Promise.all([signer.getAddress(), signer.getChainId()])
        .then(([address, chainId]) => {
          const rpcUrl = rpcUrlMap[chainId];
          // only if the signer is still the same!
          if (signer === s) {
            const wallet = new UserWallet(signer, {
              readonlySettings: rpcUrl
                ? {
                    rpcUrl,
                    chainId,
                  }
                : undefined,
            });
            setContextValue({ wallet, address, chainId, signer });
          }
        })
        .catch((err) => {
          if (__DEV__) {
            console.warn(
              "failed to get wallet instance in `<Web3sdkioConnectedWalletProvider />`",
              err,
            );
          }
        });
    } else {
      // if signer is not provided, re-set the context value to initial values
      setContextValue(INITIAL_CONTEXT_VALUE);
    }
    return () => {
      // set the previous signer to undefined because it is invalid now
      s = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer]);

  return (
    <Web3sdkioConnectedWalletContext.Provider value={contextValue}>
      {children}
    </Web3sdkioConnectedWalletContext.Provider>
  );
};

export function useWeb3sdkioConnectedWalletContext() {
  return useContext(Web3sdkioConnectedWalletContext);
}
