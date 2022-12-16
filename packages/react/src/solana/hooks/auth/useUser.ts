import { ensureTWPrefix } from "../../../core/query-utils/query-key";
import { useWeb3sdkioAuthConfig } from "../../contexts/web3sdkio-auth";
import { useQuery } from "@tanstack/react-query";
import invariant from "tiny-invariant";

export interface Web3sdkioAuthUser {
  address: string;
}

/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @beta
 */
export function useUser() {
  const authConfig = useWeb3sdkioAuthConfig();

  const { data: user, isLoading } = useQuery(
    ensureTWPrefix(["user"]),
    async () => {
      invariant(
        authConfig,
        "Please specify an authConfig in the Web3sdkioProvider",
      );
      const res = await fetch(`${authConfig.authUrl}/user`, {
        credentials: "include",
      });
      return (await res.json()) as Web3sdkioAuthUser;
    },
    {
      enabled: !!authConfig,
    },
  );

  return { user, isLoading };
}
