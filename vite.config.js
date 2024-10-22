import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/o/react-workspace",
  build: {
    outDir: "./vite-build",
    rollupOptions: {
      external: ["react", "react-dom", /^(?!@clayui\/css)@clayui.*$/],
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
});
