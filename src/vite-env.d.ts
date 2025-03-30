/// <reference types="vite/client" />
import type { Channel, ChannelArgsMap, ChannelResultMap } from "@electron/modules";

declare global {
  interface Window {
    ipc: {
      invoke: <T extends Channel>(
        channel: T,
        ...args: ChannelArgsMap[T]
      ) => Promise<Awaited<ChannelResultMap[T]>>;
    };
  }
}
