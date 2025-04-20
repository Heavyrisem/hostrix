import { queryOptions, useMutation } from "@tanstack/react-query";

import { getHosts, getRawHosts, getSectionByName } from "./api";
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

export function useGetSectionByNameMutation() {
  return useMutation({
    mutationKey: keys.getSectionByName(),
    mutationFn: getSectionByName,
  });
}

// export const sectionByNameService = {
//   queryKey: keys.getSectionByName,
//   queryOptions: (name: string) =>
//     queryOptions({
//       queryKey: sectionByNameService.queryKey(),
//       queryFn: () => getSectionByName(name),
//     }),
// };
