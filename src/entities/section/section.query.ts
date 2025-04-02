import { queryOptions } from "@tanstack/react-query";

import { getSections } from "./section.api";
import { sectionKeys } from "./section.key";

export const sectionListService = {
  queryKey: sectionKeys.list,
  queryOptions: () =>
    queryOptions({
      queryKey: sectionListService.queryKey(),
      queryFn: getSections,
    }),
};
