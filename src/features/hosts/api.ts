export function getRawHosts() {
  return window.ipc.invoke("getRawHosts");
}
