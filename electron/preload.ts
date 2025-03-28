import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ping: (callback) => ipcRenderer.on("ping", (event, value) => callback(value)),
});
