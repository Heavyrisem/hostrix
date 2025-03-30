const { ipcRenderer, contextBridge } = require("electron/renderer");

console.log("preload");

contextBridge.exposeInMainWorld("ipc", {
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
});
