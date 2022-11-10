import { Web3sdkioAuthUser } from "..";

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      user: Web3sdkioAuthUser | null;
    }
  }
}
