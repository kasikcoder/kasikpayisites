import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { htmlInputs, siteSeo } from "./scripts/site-seo.mjs";

export default defineConfig({
  build: {
    outDir: "dist/client",
    rollupOptions: { input: htmlInputs },
  },
  appType: "mpa",
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },
  plugins: [siteSeo(), react()],
});
