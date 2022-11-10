import { logger } from "../helpers/logger";
import { CompileOptions, IBuilder } from "../interfaces/Builder";
import { ContractPayload } from "../interfaces/ContractPayload";
import { extractIPFSHashFromBytecode } from "@web3sdkio/sdk/evm";

export abstract class BaseBuilder implements IBuilder {
  abstract compile(
    options: CompileOptions,
  ): Promise<{ contracts: ContractPayload[] }>;

  protected shouldProcessContract(
    abi: any[],
    bytecode: string,
    name: string,
  ): boolean {
    if (
      !bytecode ||
      bytecode === "" ||
      bytecode === "0x" ||
      !abi ||
      abi.length === 0
    ) {
      return false;
    }
    // TODO as CLI options
    if (
      name === "Web3sdkioContract" ||
      name.toLowerCase().includes("test") ||
      name.toLowerCase().includes("mock")
    ) {
      logger.debug(`Skipping '${name}'.`);
      return false;
    }
    // ensure that we can extract IPFS hashes from the bytecode
    let ipfsHash;
    try {
      ipfsHash = extractIPFSHashFromBytecode(bytecode);
    } catch (e) {
      logger.debug(`Error extracting IPFS hash from '${name}': ${e}`);
    }

    if (!ipfsHash) {
      logger.debug(
        `Cannot resolve build metadata IPFS hash for contract '${name}'. Skipping.`,
      );
      return false;
    }
    return true;
  }

  protected isWeb3sdkioContract(input: any): boolean {
    try {
      if (
        input.name === "setWeb3sdkioInfo" &&
        input.inputs[0].internalType === "struct Web3sdkioContract.Web3sdkioInfo"
      ) {
        logger.error(
          "You are using an old version of Web3sdkioContract, please update to the latest version: 'npm i @web3sdkio/contracts'",
        );
        return false;
      }
      return (
        input.name === "tw_initializeOwner" &&
        input.inputs[0].internalType === "address"
      );
    } catch (e) {
      return false;
    }
  }
}
