import { getHosts } from "@/features/hosts/api";

import { getRawHosts, getSectionByName, getSections } from "@electron/libs/hosts/reader";

const module = {
  getRawHosts,
  getHosts,
  getSections,
  getSectionByName: async (_: unknown, name: string) => getSectionByName(name),
} as const;

export default module;
