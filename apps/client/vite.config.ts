
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(
  new URL("../../", import.meta.url)
);

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    fs: {
      allow: [projectRoot],
    },
  },

  build: {
    target: "es2022",
    sourcemap: true,
  },
});
