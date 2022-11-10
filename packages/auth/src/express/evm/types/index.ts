import { Web3sdkioSDK } from "@web3sdkio/sdk";
import { Request } from "express";

export type Web3sdkioAuthRoute = "login" | "user" | "logout";

export type Web3sdkioAuthConfig = {
  privateKey: string;
  domain: string;
  authUrl?: string;
  callbacks?: {
    login?: (address: string) => Promise<void> | void;
    user?: (
      address: string,
    ) =>
      | Promise<Omit<Web3sdkioAuthUser, "address">>
      | Omit<Web3sdkioAuthUser, "address">;
  };
};

export type Web3sdkioAuthContext = {
  sdk: Web3sdkioSDK;
  domain: string;
  callbacks?: {
    login?: (address: string) => Promise<void> | void;
    user?: (
      address: string,
    ) =>
      | Promise<Omit<Web3sdkioAuthUser, "address">>
      | Omit<Web3sdkioAuthUser, "address">;
  };
};

export type Web3sdkioAuthUser = {
  address: string;
  [key: string]: any;
};

export type RequestWithUser = Request & {
  user: Web3sdkioAuthUser | null;
};
