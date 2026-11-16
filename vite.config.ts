import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/my-portfolio/",
    plugins: [tailwindcss(), react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src"),
            "@assets": path.resolve(import.meta.dirname, "./src/assets"),
            "@hooks": path.resolve(import.meta.dirname, "./src/hooks"),
            "@repositories": path.resolve(import.meta.dirname, "./src/repositories"),
            "@components": path.resolve(import.meta.dirname, "./src/components"),
        },
    },
});