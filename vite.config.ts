import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "canvas-engine": ["fabric"],
          "image-codecs": ["utif"],
          "studio-ui": ["react", "react-dom", "@heroui/react", "lucide-react"],
        },
      },
    },
  },
});
