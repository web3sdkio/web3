import { useSDK } from "../../providers/base";

export * from "./useStorageUpload";

/**
 * Get the configured `Web3sdkioStorage` instance
 * @returns The `storageInterface` configured on the `Web3sdkioProvider`
 */
export function useStorage() {
  const sdk = useSDK();
  return sdk?.storage;
}
