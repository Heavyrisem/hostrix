import { queryOptions } from "@tanstack/react-query";

import { getHosts, getRawHosts } from "./api";
import { keys } from "./key";

export const rawHostsService = {
  queryKey: keys.getRawHosts,
  queryOptions: () =>
    queryOptions({
      queryKey: rawHostsService.queryKey(),
      queryFn: getRawHosts,
    }),
};

export const hostsService = {
  queryKey: keys.getHosts,
  queryOptions: () =>
    queryOptions({
      queryKey: hostsService.queryKey(),
      queryFn: getHosts,
    }),
};
