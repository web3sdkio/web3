import {
  QueryClientProviderProps,
  QueryClientProviderWithDefault,
} from "../../core/providers/query-client";
import { RequiredParam } from "../../core/query-utils/required-param";
import { ComponentWithChildren } from "../../core/types/component";
import {
  Web3sdkioAuthConfig,
  Web3sdkioAuthConfigProvider,
} from "../contexts/web3sdkio-auth";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import { Network, Web3sdkioSDK } from "@web3sdkio/sdk/solana";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import invariant from "tiny-invariant";

interface Web3sdkioSDKProviderProps extends QueryClientProviderProps {
  network: RequiredParam<Network>;
  wallet?: WalletContextState;
  authConfig?: Web3sdkioAuthConfig;
}

/**
 * Gives access to the Web3sdkioSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { useWallet } from "@solana/wallet-adapter-react";
 * import { Web3sdkioProvider } from "@web3sdkio/react/solana";
 *
 * const Web3sdkioApp = () => {
 *  const wallet = useWallet();
 *  return (
 *    <Web3sdkioSDKProvider network={"devnet"} wallet={wallet}>
 *      <YourApp />
 *    </Web3sdkioSDKProvider>
 * )};
 * ```
 */
export const Web3sdkioSDKProvider: ComponentWithChildren<
  Web3sdkioSDKProviderProps
> = ({ children, network, queryClient, wallet, authConfig }) => {
  const [sdk, setSDK] = useState<Web3sdkioSDK | null>(null);

  useEffect(() => {
    if (network) {
      const _sdk = Web3sdkioSDK.fromNetwork(network);
      if (wallet && wallet.publicKey) {
        _sdk.wallet.connect(wallet);
      }
      (_sdk as any)._network = network;
      setSDK(_sdk);
    } else {
      setSDK(null);
    }
    // disabled wallet on purpose because we handle that below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network]);

  useEffect(() => {
    if (
      wallet &&
      wallet.publicKey &&
      sdk &&
      (sdk as any)._network === network
    ) {
      sdk.wallet.connect(wallet);
      return;
    }
  }, [network, sdk, wallet]);

  const ctxValue = useMemo(
    () =>
      ({
        sdk,
        desiredNetwork: network || "unknown",
        _inProvider: true,
      } as const),
    [sdk, network],
  );

  return (
    <QueryClientProviderWithDefault queryClient={queryClient}>
      <Web3sdkioAuthConfigProvider value={authConfig}>
        <Web3sdkioSDKContext.Provider value={ctxValue}>
          {children}
        </Web3sdkioSDKContext.Provider>
      </Web3sdkioAuthConfigProvider>
    </QueryClientProviderWithDefault>
  );
};

interface Web3sdkioSDKContext {
  sdk: Web3sdkioSDK | null;
  desiredNetwork: string;
  _inProvider?: true;
}
const Web3sdkioSDKContext = createContext<Web3sdkioSDKContext>({
  sdk: null,
  desiredNetwork: "unknown",
});

export function useSDK() {
  const ctxValue = useContext(Web3sdkioSDKContext);
  invariant(
    ctxValue._inProvider,
    "useSDK must be used within a Web3sdkioSDKProvider",
  );
  if (
    !ctxValue.sdk ||
    (ctxValue.sdk as any)._network !== ctxValue.desiredNetwork
  ) {
    return null;
  }
  return ctxValue.sdk;
}
