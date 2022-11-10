import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from "react";

/**
 * The configuration to use the react SDK with an [auth](https://portal.web3sdk.io/auth) server.
 *
 * @beta
 */
export interface Web3sdkioAuthConfig {
  /**
   * The backend URL of the authentication endoints. For example, if your endpoints are
   * at `/api/auth/login`, `/api/auth/logout`, etc. then this should be set to `/api/auth`.
   */
  authUrl: string;

  /**
   * The frontend domain used to generate the login payload.
   * This domain should match the domain used on your auth backend.
   */
  domain: string;

  /**
   * The URL to redirect to after a succesful login.
   */
  loginRedirect?: string;
}

const Web3sdkioAuthConfigContext = createContext<Web3sdkioAuthConfig | undefined>(
  undefined,
);

export const Web3sdkioAuthConfigProvider: React.FC<
  PropsWithChildren<{ value?: Web3sdkioAuthConfig }>
> = ({ value, children }) => {
  // Remove trailing slash from URL if present
  const authConfig = useMemo(
    () =>
      value
        ? {
            ...value,
            authUrl: value.authUrl.replace(/\/$/, ""),
          }
        : undefined,
    [value],
  );
  return (
    <Web3sdkioAuthConfigContext.Provider value={authConfig}>
      {children}
    </Web3sdkioAuthConfigContext.Provider>
  );
};

export function useWeb3sdkioAuthConfig() {
  return useContext(Web3sdkioAuthConfigContext);
}
