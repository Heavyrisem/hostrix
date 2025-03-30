export type PingParams = {
  data: string;
};
export function ping({ data }: PingParams) {
  return window.ipc.invoke("ping", data);
}

export function getRawHosts() {
  return null;
  // return window.ipc.invoke("getHostsRawContent");
}
