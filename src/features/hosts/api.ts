export function getRawHosts() {
  return window.ipc.invoke("getRawHosts");
}

export function getHosts() {
  return window.ipc.invoke("getHosts");
}
