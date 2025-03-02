import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Output directory for the documentation build
    outDir: "dist/docs",
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize the build for production
    minify: true,
    // Configure rollup options
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {
        // Configure chunk naming
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  // Base path for assets in the documentation site
  base: "/",
});