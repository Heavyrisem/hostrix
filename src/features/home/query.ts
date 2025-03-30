import { queryOptions, useMutation } from "@tanstack/react-query";

import { getRawHosts, ping } from "./api";
import { keys } from "./key";

export const rawHostsService = {
  queryKeys: keys.getRawHosts,
  queryOptions: () =>
    queryOptions({
      queryKey: rawHostsService.queryKeys(),
      queryFn: getRawHosts,
    }),
};

export function usePingMutation() {
  return useMutation({
    mutationKey: keys.ping(),
    mutationFn: ping,
  });
}
