import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@clerk/clerk-react"],  // Ensures Clerk is bundled
  },
  resolve: {
    alias: {
      "@clerk/clerk-react": "@clerk/clerk-react/dist/index.mjs",
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fixes issues with mixed module imports
    },
  },
});
