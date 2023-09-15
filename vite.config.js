import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
      "@/ds": fileURLToPath(new URL("./src/ds", import.meta.url)),
      "@/fixtures": fileURLToPath(new URL("./src/fixtures", import.meta.url)),
      "@/hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@/test-utils": fileURLToPath(
        new URL("./src/test-utils", import.meta.url),
      ),
    },
  },
  test: {
    coverage: {
      all: true,
      reporter: ["text", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
