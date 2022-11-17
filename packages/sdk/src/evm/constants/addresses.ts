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
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.Optimism]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: constants.AddressZero,
  },

  [ChainId.OptimismGoerli]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: constants.AddressZero,
  },
  [ChainId.BinanceSmartChainMainnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twBYOCRegistry: constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
  },
  [ChainId.BinanceSmartChainTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x0000000000000000000000000000000000000000",
    biconomyForwarder: "0x0000000000000000000000000000000000000000",
    twBYOCRegistry: constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
  },
};

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
