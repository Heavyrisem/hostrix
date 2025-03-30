import path from "path";
import { defineConfig } from "vite";
import electron from "vite-plugin-electron/simple";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // tsconfigPaths(),
    electron({
      main: {
        entry: "electron/main.ts",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [/^@electron*/],
    },
  },
});
