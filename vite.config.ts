import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    electron({
      entry: "electron/main.ts",
      vite: {
        plugins: [tsconfigPaths()],
      },
    }),
  ],
});
