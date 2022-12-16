import loginHandler from "./routes/login";
import logoutHandler from "./routes/logout";
import userHandler from "./routes/user";
import {
  Web3sdkioAuthConfig,
  Web3sdkioAuthContext,
  Web3sdkioAuthRoute,
  Web3sdkioAuthUser,
} from "./types";
import { Web3sdkioSDK } from "@web3sdkio/sdk";
import { NextRequest } from "next/server";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next/types";

export * from "./types";

async function Web3sdkioAuthRouter(
  req: NextApiRequest,
  res: NextApiResponse,
  ctx: Web3sdkioAuthContext,
) {
  // Catch-all route must be named with [...web3sdkio]
  const { web3sdkio } = req.query;
  const action = web3sdkio?.[0] as Web3sdkioAuthRoute;

  switch (action) {
    case "login":
      return await loginHandler(req, res, ctx);
    case "user":
      return await userHandler(req, res, ctx);
    case "logout":
      return await logoutHandler(req, res);
    default:
      return res.status(400).json({
        message: "Invalid route for authentication.",
      });
  }
}

export function Web3sdkioAuth(cfg: Web3sdkioAuthConfig) {
  const ctx = {
    ...cfg,
    sdk: Web3sdkioSDK.fromPrivateKey(cfg.privateKey, "mainnet"),
  };

  function Web3sdkioAuthHandler(
    ...args: [] | [NextApiRequest, NextApiResponse]
  ) {
    if (args.length === 0) {
      return async (req: NextApiRequest, res: NextApiResponse) =>
        await Web3sdkioAuthRouter(req, res, ctx);
    }

    return Web3sdkioAuthRouter(args[0], args[1], ctx);
  }

  async function getUser(
    req: GetServerSidePropsContext["req"] | NextRequest | NextApiRequest,
  ) {
    const { sdk, domain } = ctx;
    let user: Web3sdkioAuthUser | null = null;
    const token =
      typeof req.cookies.get === "function"
        ? (req.cookies as any).get("web3sdkio_auth_token")
        : (req.cookies as any).web3sdkio_auth_token;

    if (token) {
      try {
        const address = await sdk.auth.authenticate(domain, token);

        let data = {};
        if (ctx.callbacks?.user) {
          data = await ctx.callbacks.user(address);
        }

        user = { ...data, address };
      } catch {
        // No-op
      }
    }

    return user;
  }

  return { Web3sdkioAuthHandler, getUser };
}
