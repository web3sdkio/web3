import IERC2771ContextAbi from "@web3sdkio/contracts-js/dist/abis/ERC2771Context.json";
import IAppURI from "@web3sdkio/contracts-js/dist/abis/IAppURI.json";
import IContractMetadataAbi from "@web3sdkio/contracts-js/dist/abis/IContractMetadata.json";
import IPermissionsAbi from "@web3sdkio/contracts-js/dist/abis/IPermissions.json";
import IPermissionsEnumerableAbi from "@web3sdkio/contracts-js/dist/abis/IPermissionsEnumerable.json";
import IWeb3sdkioPlatformFeeAbi from "@web3sdkio/contracts-js/dist/abis/IPlatformFee.json";
import IWeb3sdkioPrimarySaleAbi from "@web3sdkio/contracts-js/dist/abis/IPrimarySale.json";
import IWeb3sdkioRoyaltyAbi from "@web3sdkio/contracts-js/dist/abis/IRoyalty.json";
import IOwnableAbi from "@web3sdkio/contracts-js/dist/abis/Ownable.json";

export const FEATURE_ROYALTY = {
  name: "Royalty",
  namespace: "royalty",
  docLinks: {
    sdk: "sdk.contractroyalty",
    contracts: "Royalty",
  },
  abis: [IWeb3sdkioRoyaltyAbi],
  features: {},
} as const;

export const FEATURE_PRIMARY_SALE = {
  name: "PrimarySale",
  namespace: "sales",
  docLinks: {
    sdk: "sdk.contractprimarysale",
    contracts: "PrimarySale",
  },
  abis: [IWeb3sdkioPrimarySaleAbi],
  features: {},
} as const;

export const FEATURE_PLATFORM_FEE = {
  name: "PlatformFee",
  namespace: "platformFee",
  docLinks: {
    sdk: "sdk.platformfee",
    contracts: "PlatformFee",
  },
  abis: [IWeb3sdkioPlatformFeeAbi],
  features: {},
} as const;

export const FEATURE_PERMISSIONS_ENUMERABLE = {
  name: "PermissionsEnumerable",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "PermissionsEnumerable",
  },
  abis: [IPermissionsEnumerableAbi],
  features: {},
} as const;

export const FEATURE_PERMISSIONS = {
  name: "Permissions",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "Permissions",
  },
  abis: [IPermissionsAbi],
  features: {
    [FEATURE_PERMISSIONS_ENUMERABLE.name]: FEATURE_PERMISSIONS_ENUMERABLE,
  },
} as const;

export const FEATURE_METADATA = {
  name: "ContractMetadata",
  namespace: "metadata",
  docLinks: {
    sdk: "sdk.contractmetadata",
    contracts: "ContractMetadata",
  },
  abis: [IContractMetadataAbi],
  features: {},
} as const;

export const FEATURE_APPURI = {
  name: "AppURI",
  namespace: "appURI",
  docLinks: {
    sdk: "sdk.appURI",
    contracts: "AppURI",
  },
  abis: [IAppURI],
  features: {},
} as const;

export const FEATURE_OWNER = {
  name: "Ownable",
  namespace: "owner",
  docLinks: {
    sdk: "sdk.owner",
    contracts: "Ownable",
  },
  abis: [IOwnableAbi],
  features: {},
} as const;

export const FEATURE_GASLESS = {
  name: "Gasless",
  namespace: "gasless",
  docLinks: {
    sdk: "sdk.gaslesstransaction",
    // TODO add the correct name for this once it's added to portal
    contracts: "",
  },
  abis: [IERC2771ContextAbi],
  features: {},
} as const;
