import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";

import modules from "./modules";

const __dirname = path.resolve();

function ipcBootstrap() {
  const moduleEntries = Object.entries(modules);
  console.log("moduleEntries", moduleEntries);
  moduleEntries.forEach(([channel, handler]) => ipcMain.handle(channel, handler));
}

ipcBootstrap();
app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Hostrix",
    width: 1920,
    height: 1200,
    webPreferences: {
      preload: path.join(__dirname, "electron/preload.js"),
      nodeIntegration: true,
    },
  });
  win.webContents.openDevTools();

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // Load your file
    win.loadFile("dist/index.html");
  }
});
