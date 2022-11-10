import { NextAuthOptions } from "next-auth";

export type Web3sdkioNextAuthConfig = {
  privateKey: string;
  domain: string;
  nextOptions: NextAuthOptions;
};
