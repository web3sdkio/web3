import { createSOLProgramQueryKey } from "../../../core/query-utils/query-key";
import {
  requiredParamInvariant,
  RequiredParam,
} from "../../../core/query-utils/required-param";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreatorInput, NFTCollection, NFTDrop } from "@web3sdkio/sdk/solana";

/**
 * Update the creators for an NFT program
 * @param program - The NFT program instance to update the creators for
 *
 * @example
 * ```jsx
 * import { useProgram, useUpdateCreators } from "@web3sdkio/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: updateCreators, isLoading, error } = useUpdateCreators(program);
 *
 *   return (
 *     <button
 *       onClick={() => updateCreators([{ address: "0x...", share: 10 }])}
 *     >
 *       Update Creators
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export function useUpdateCreators(
  program: RequiredParam<NFTCollection | NFTDrop>,
) {
  const queryClient = useQueryClient();
  return useMutation(
    async (creators: CreatorInput[]) => {
      requiredParamInvariant(program, "program is required");
      return await program.updateCreators(creators);
    },
    {
      onSettled: () =>
        queryClient.invalidateQueries(createSOLProgramQueryKey(program)),
    },
  );
}
