import hosts from "./hosts";
import ping from "./ping";

const modules = { ...ping, ...hosts } as const;

type Channel = keyof typeof modules;
type ChannelArgsMap = {
  [K in Channel]: Parameters<(typeof modules)[K]> extends [unknown, ...infer R] ? R : [];
};
type ChannelResultMap = {
  [K in Channel]: ReturnType<(typeof modules)[K]>;
};

export type { Channel, ChannelArgsMap, ChannelResultMap };
export default modules;
