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
import {
  Web3sdkioConnectedWalletProvider,
  useWeb3sdkioConnectedWalletContext,
} from "../contexts/web3sdkio-wallet";
import {
  ChainOrRpc,
  SDKOptions,
  SignerOrProvider,
  SUPPORTED_CHAIN_ID,
  Web3sdkioSDK,
} from "@web3sdkio/sdk";
import { Web3sdkioStorage } from "@web3sdkio/storage";
import { Signer } from "ethers";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import invariant from "tiny-invariant";

interface TWSDKContext {
  sdk?: Web3sdkioSDK;
  _inProvider?: true;
  desiredChainId: number;
}

const Web3sdkioSDKContext = createContext<TWSDKContext>({ desiredChainId: -1 });

export interface Web3sdkioSDKProviderProps extends QueryClientProviderProps {
  desiredChainId: RequiredParam<SUPPORTED_CHAIN_ID>;
  provider: ChainOrRpc | SignerOrProvider;

  signer?: Signer;

  sdkOptions?: SDKOptions;
  storageInterface?: Web3sdkioStorage;
  authConfig?: Web3sdkioAuthConfig;
}

/**
 *
 * @internal
 */
export const WrappedWeb3sdkioSDKProvider: ComponentWithChildren<
  Omit<Web3sdkioSDKProviderProps, "signer">
> = ({
  sdkOptions,
  desiredChainId,
  storageInterface,
  provider,
  queryClient,
  authConfig,
  children,
}) => {
  const { signer } = useWeb3sdkioConnectedWalletContext();

  const [sdk, setSDK] = useState<Web3sdkioSDK>();

  useEffect(() => {
    if (!desiredChainId || typeof window === "undefined") {
      return undefined;
    }

    const _sdk = new Web3sdkioSDK(provider, sdkOptions, storageInterface);
    // if we already have a signer from the wallet context, use it immediately
    if (signer) {
      _sdk.updateSignerOrProvider(signer);
    }

    (_sdk as any)._constructedAt = Date.now();
    (_sdk as any)._chainId = desiredChainId;
    setSDK(_sdk);

    // explicitly *not* passing the signer, if we have it we use it if we don't we don't
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, sdkOptions, storageInterface, desiredChainId]);

  useEffect(() => {
    if (sdk && (sdk as any)._chainId === desiredChainId) {
      if (signer) {
        sdk.updateSignerOrProvider(signer);
      } else {
        sdk.updateSignerOrProvider(provider);
      }
    }
  }, [signer, sdk, desiredChainId, provider]);

  const ctxValue = useMemo(
    () => ({
      sdk,
      desiredChainId: desiredChainId || -1,
      _inProvider: true as const,
    }),
    [desiredChainId, sdk],
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

/**
 * A basic wrapper around the Web3sdkio SDK.
 *
 * You can use this in order to be able to pass a provider & signer directly to the SDK.
 *
 * @remarks Utilizing this provider will mean hooks for wallet management are not available, if you need those please use the {@link Web3sdkioProvider} instead.
 *
 * @public
 */
export const Web3sdkioSDKProvider: ComponentWithChildren<
  Web3sdkioSDKProviderProps
> = ({ signer, children, ...restProps }) => {
  return (
    <Web3sdkioConnectedWalletProvider signer={signer}>
      <WrappedWeb3sdkioSDKProvider {...restProps}>
        {children}
      </WrappedWeb3sdkioSDKProvider>
    </Web3sdkioConnectedWalletProvider>
  );
};

/**
 * @internal
 */
function useSDKContext(): TWSDKContext {
  const ctx = useContext(Web3sdkioSDKContext);
  invariant(
    ctx._inProvider,
    "useSDK must be called from within a Web3sdkioProvider, did you forget to wrap your app in a <Web3sdkioProvider />?",
  );
  return ctx;
}

/**
 *
 * @returns {@link Web3sdkioSDK}
 * Access the instance of the web3sdkio SDK created by the Web3sdkioProvider
 * to call methods using the connected wallet on the desiredChainId.
 * @example
 * ```javascript
 * const sdk = useSDK();
 * ```
 */
export function useSDK(): Web3sdkioSDK | undefined {
  const { sdk } = useSDKContext();
  return sdk;
}

/**
 * @internal
 */
export function useDesiredChainId(): number {
  const { desiredChainId } = useSDKContext();
  return desiredChainId;
}

/**
 * @internal
 */
export function useSDKChainId(): SUPPORTED_CHAIN_ID | undefined {
  const sdk = useSDK();
  return (sdk as any)?._chainId;
}
