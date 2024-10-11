/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/_setupTests_.ts"],
  },
  base: "/",
  build: {
    outDir: "dist",
  },

  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
