import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import virtual from "./plugins/virtual-module";
import inspect from "vite-plugin-inspect";
import IndexHtmlPlugin from "./plugins/indexHtml";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtual(), inspect(), IndexHtmlPlugin()],
  server: {
    port: 3001,
    hmr: {
      port: 3004,
      clientPort: 3002,
    },
  },
});
