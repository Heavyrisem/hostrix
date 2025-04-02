export function getSections() {
  return window.ipc.invoke("getSections");
}
