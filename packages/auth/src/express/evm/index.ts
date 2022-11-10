import loginHandler from "./routes/login";
import logoutHandler from "./routes/logout";
import userHandler from "./routes/user";
import {
  Web3sdkioAuthConfig,
  Web3sdkioAuthRoute,
  Web3sdkioAuthUser,
} from "./types";
import { Web3sdkioSDK } from "@web3sdkio/sdk";
import cookieParser from "cookie-parser";
import { Express, NextFunction, Request, Response } from "express";

export * from "./types";

export function getUser(req: Request): Web3sdkioAuthUser | null {
  return req.user;
}

export function Web3sdkioAuth(app: Express, cfg: Web3sdkioAuthConfig) {
  const ctx = {
    ...cfg,
    sdk: Web3sdkioSDK.fromPrivateKey(cfg.privateKey, "mainnet"),
  };

  const authUrl = cfg.authUrl?.replace(/\/$/, "") || "/auth";

  app.use(cookieParser());

  app.use(async (req: Request, _: Response, next: NextFunction) => {
    const { sdk, domain } = ctx;
    let user = null;
    const token = req.cookies.web3sdkio_auth_token;

    if (token) {
      try {
        const address = await sdk.auth.authenticate(domain, token);

        if (ctx.callbacks?.user) {
          user = await ctx.callbacks.user(address);
        }

        user = { ...user, address };
      } catch {
        // No-op
      }
    }

    req.user = user as Web3sdkioAuthUser | null;
    next();
  });

  app.get(`${authUrl}/:route`, (req: Request, res: Response) => {
    const action = req.params.route as Web3sdkioAuthRoute;

    switch (action) {
      case "login":
        return loginHandler(req, res, ctx);
      case "user":
        return userHandler(req, res);
      case "logout":
        return logoutHandler(req, res);
      default:
        return res.status(400).json({
          message: "Invalid route for authentication.",
        });
    }
  });
}
