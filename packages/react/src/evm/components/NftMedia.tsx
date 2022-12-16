import { MediaRenderer, SharedMediaProps } from "./MediaRenderer";
import { NFTMetadata } from "@web3sdkio/sdk";
import React from "react";

/**
 * The props for the {@link Web3sdkioNftMedia} component.
 */
export interface Web3sdkioNftMediaProps extends SharedMediaProps {
  /**
   * The NFT metadata of the NFT returned by the web3sdkio sdk.
   */
  metadata: NFTMetadata;
}

/**
 * This component can be used to render NFTs from the web3sdkio SDK.
 * Props: {@link Web3sdkioNftMediaProps}
 *
 * @example
 * ```jsx
 * import { Web3sdkioNftMedia, useContract, useNFT } from "@web3sdkio/react";
 * export default function NFTCollectionRender() {
 *   const { contract } = useContract(<your-contract-address>);
 *   const { data: nft, isLoading } = useNFT(contract, 0);
 *
 *   return (
 *     <div>
 *       {!isLoading && nft ? (
 *         <Web3sdkioNftMedia metadata={nft.metadata} />
 *       ) : (
 *         <p>Loading...</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export const Web3sdkioNftMedia = React.forwardRef<
  HTMLMediaElement,
  Web3sdkioNftMediaProps
>(({ metadata, ...props }, ref) => {
  return (
    <MediaRenderer
      src={metadata.animation_url || metadata.image}
      poster={metadata.image}
      alt={metadata.name?.toString() || ""}
      ref={ref}
      {...props}
    />
  );
});

Web3sdkioNftMedia.displayName = "Web3sdkioNftMedia";
