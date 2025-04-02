import { getHosts, getRawHosts, getSections } from "@electron/libs/hosts/reader";

const module = {
  getRawHosts,
  getHosts,
  getSections,
} as const;

export default module;
