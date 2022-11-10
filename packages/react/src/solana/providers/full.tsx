import { Web3sdkioAuthConfig } from "../contexts/web3sdkio-auth";
import { Web3sdkioSDKProvider } from "./base";
import type { WalletAdapter } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { getUrlForNetwork, Network } from "@web3sdkio/sdk/solana";
import { PropsWithChildren } from "react";

interface Web3sdkioProviderProps {
  network: Network;
  wallets?: WalletAdapter[];
  autoConnect?: boolean;
  authConfig?: Web3sdkioAuthConfig;
}

const DEFAULT_WALLETS = [new PhantomWalletAdapter()];

/**
 * Gives access to the Web3sdkioSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { Web3sdkioProvider } from "@web3sdkio/react/solana";
 *
 * const App = () => {
 *  return (
 *     <Web3sdkioProvider network="devnet">
 *       <YourApp />
 *     </Web3sdkioProvider>
 * )};
 * ```
 * @beta
 */
export const Web3sdkioProvider: React.FC<
  PropsWithChildren<Web3sdkioProviderProps>
> = ({
  network,
  wallets = DEFAULT_WALLETS,
  autoConnect = true,
  authConfig,
  children,
}) => {
  const clusterUrl = getUrlForNetwork(network);
  return (
    <ConnectionProvider endpoint={clusterUrl}>
      <WalletProvider wallets={wallets} autoConnect={autoConnect}>
        <Web3sdkioWrapperProvider network={network} authConfig={authConfig}>
          {children}
        </Web3sdkioWrapperProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

/**
 * @internal
 */
export const Web3sdkioWrapperProvider: React.FC<
  PropsWithChildren<{ network?: Network; authConfig?: Web3sdkioAuthConfig }>
> = ({ network, authConfig, children }) => {
  const wallet = useWallet();
  return (
    <Web3sdkioSDKProvider
      network={network}
      wallet={wallet}
      authConfig={authConfig}
    >
      {children}
    </Web3sdkioSDKProvider>
  );
};
