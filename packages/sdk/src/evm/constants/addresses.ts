import { PrebuiltContractType } from "../core/types";
import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";
import { constants } from "ethers";

/**
 * @internal
 */
export const OZ_DEFENDER_FORWARDER_ADDRESS =
  "0x5D1021751de591fEd8562eE92731F6D612D4cC81";

const TWRegistry_address = "0xB161f6EA00A3008F20a32d465E5364B0905A33Ad";
const TWFactory_address = "0x80a1d6255191D2Af220a35640F393de5B6266f02";
const ContractPublisher_address = "0xF0db439D6EbE5D8A5C28a9492B4767BF32fC8505"; // Polygon only

/**
 * @internal
 */
export const CONTRACT_ADDRESSES: Record<
  SUPPORTED_CHAIN_ID,
  {
    openzeppelinForwarder: string;
    openzeppelinForwarderEOA: string;
    biconomyForwarder: string;
    twFactory: string;
    twRegistry: string;
    twBYOCRegistry: string;
  }
> = {
  [ChainId.Mainnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },

  [ChainId.Goerli]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xBF2cd070B6Ce0e7cEcf4619be89B2093afB2B13b",
    biconomyForwarder: "0x880B4e2b2eD6c68EA30125989F1560264cE737Df",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x1A083bCB5Fe719275329C80d7D033DCaCC21461a",
  },
  [ChainId.Polygon]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Mumbai]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Avalanche]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.AvalancheFujiTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Fantom]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.FantomTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Arbitrum]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },

  [ChainId.ArbitrumGoerli]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: constants.AddressZero,
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.Optimism]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },

  [ChainId.OptimismGoerli]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: constants.AddressZero,
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.BinanceSmartChainMainnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.BinanceSmartChainTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: constants.AddressZero,
  },
};

type DropContract = Extract<
  PrebuiltContractType,
  "nft-drop" | "token-drop" | "edition-drop" | "signature-drop"
>;
export const APPROVED_IMPLEMENTATIONS: Record<
  SUPPORTED_CHAIN_ID,
  Record<DropContract, string>
> = {
  [ChainId.Mainnet]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Polygon]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Fantom]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Avalanche]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Optimism]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Arbitrum]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.BinanceSmartChainMainnet]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.Goerli]: {
    "nft-drop": "0x20e099109dbEbBD11058EeB39417B2eCA52C83f0",
    "edition-drop": "0xEE89E8E54271F30738883e28DD7f8226805a6848",
    "token-drop": "0x5Abe68be6ecE6586Bd438BE25cEed2D5707F2a95",
    "signature-drop": "0xFDb9cc34BfA6a51e96F73f0a828717A6dfA460E8",
  },
  [ChainId.Mumbai]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.FantomTestnet]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.AvalancheFujiTestnet]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.OptimismGoerli]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.ArbitrumGoerli]: {
    "nft-drop": "0x0000000000000000000000000000000000000000",
    "edition-drop": "0x0000000000000000000000000000000000000000",
    "token-drop": "0x0000000000000000000000000000000000000000",
    "signature-drop": "0x0000000000000000000000000000000000000000",
  },
  [ChainId.BinanceSmartChainTestnet]: {
    "nft-drop": "",
    "edition-drop": "",
    "token-drop": "",
    "signature-drop": "", // TODO
  },
};

/**
 * @internal
 * @param chainId
 * @param contractType
 */
export function getApprovedImplementation(
  chainId: SUPPORTED_CHAIN_ID, // TODO use SupportedChainId once we deploy to all chains
  contractType: PrebuiltContractType,
): string | null {
  if (chainId in APPROVED_IMPLEMENTATIONS) {
    const approvedImpls = APPROVED_IMPLEMENTATIONS[chainId];
    if (contractType in approvedImpls) {
      return approvedImpls[contractType as keyof typeof approvedImpls];
    }
  }
  return null;
}

/**
 * @internal
 */
export function getContractAddressByChainId(
  chainId: SUPPORTED_CHAIN_ID | ChainId.Hardhat,
  contractName: keyof typeof CONTRACT_ADDRESSES[SUPPORTED_CHAIN_ID],
): string {
  // for testing only
  if (chainId === ChainId.Hardhat) {
    if (contractName === "twFactory") {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      return process.env.factoryAddress as string;
    } else if (contractName === "twRegistry") {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      return process.env.registryAddress as string;
    } else {
      return constants.AddressZero;
    }
  }
  // real output here
  return CONTRACT_ADDRESSES[chainId][contractName];
}

/**
 * @internal
 */
export function getContractPublisherAddress() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  if (process.env.contractPublisherAddress) {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    return process.env.contractPublisherAddress as string;
  } else {
    return ContractPublisher_address;
  }
}
