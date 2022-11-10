import { SDKOptions, Web3sdkioSDK } from "@web3sdkio/sdk";
import type { Web3sdkioStorage } from "@web3sdkio/storage";
import { useMemo } from "react";

/**
 * @internal
 */
export function useReadonlySDK(
  readonlyRpcUrl: string,
  sdkOptions: SDKOptions,
  storageInterface?: Web3sdkioStorage,
): Web3sdkioSDK {
  return useMemo(() => {
    return new Web3sdkioSDK(
      readonlyRpcUrl,
      {
        ...sdkOptions,
        readonlySettings: {
          ...sdkOptions?.readonlySettings,
          rpcUrl: readonlyRpcUrl,
        },
      },
      storageInterface,
    );
    // storageInterface should be constant!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readonlyRpcUrl, sdkOptions]);
}
