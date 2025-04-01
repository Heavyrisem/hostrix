import { getHosts, getRawHosts } from "@electron/libs/hosts/reader";

const module = {
  getRawHosts,
  getHosts,
} as const;

export default module;
