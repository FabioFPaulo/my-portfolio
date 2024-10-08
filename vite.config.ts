import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components/*": path.resolve(__dirname, "./src/components/"),
      "@assets/*": path.resolve(__dirname, "./src/assets/"),
    },
  },
});
