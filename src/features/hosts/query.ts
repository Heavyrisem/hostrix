import { queryOptions } from "@tanstack/react-query";

import { getRawHosts } from "./api";
import { keys } from "./key";

export const rawHostsService = {
  queryKey: keys.getRawHosts,
  queryOptions: () =>
    queryOptions({
      queryKey: rawHostsService.queryKey(),
      queryFn: getRawHosts,
    }),
};
