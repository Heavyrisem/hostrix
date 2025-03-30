import fs from "fs";

import { LINUX_HOSTS_PATH, MACOS_HOSTS_PATH, WINDOWS_HOSTS_PATH } from "./path.constant";

const module = {
  getHostsRawContent: async () => {
    const platform = process.platform;
    let path;

    switch (platform) {
      case "win32":
        path = WINDOWS_HOSTS_PATH;
        break;
      case "linux":
        path = LINUX_HOSTS_PATH;
        break;
      case "darwin":
        path = MACOS_HOSTS_PATH;
        break;
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }

    try {
      const content = await fs.promises.readFile(path, "utf8");
      return content;
    } catch (error) {
      throw new Error(`Failed to read hosts file: ${(error as Error)?.message}`);
    }
  },
} as const;

export default module;
