const module = {
  ping: (event: Electron.IpcMainInvokeEvent, value: string) => {
    return `${value} pong`;
  },
} as const;

export default module;
