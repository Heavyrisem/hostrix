import { getRawHosts } from "@electron/libs/hosts/reader";

const module = {
  getRawHosts: () => {
    return getRawHosts();
  },
} as const;

export default module;
