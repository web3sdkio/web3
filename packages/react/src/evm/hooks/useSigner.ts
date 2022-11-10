import { useWeb3sdkioConnectedWalletContext } from "../contexts/web3sdkio-wallet";
import type { Signer } from "ethers";

/**
 *
 * @internal
 */
export function useSigner(): Signer | undefined {
  return useWeb3sdkioConnectedWalletContext().signer;
}
