export function getRawHosts() {
  return window.ipc.invoke("getRawHosts");
}

export function getHosts() {
  return window.ipc.invoke("getHosts");
}

export function getSectionByName(name: string) {
  return window.ipc.invoke("getSectionByName", name);
}
