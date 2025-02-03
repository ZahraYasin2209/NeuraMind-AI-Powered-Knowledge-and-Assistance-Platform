import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@clerk/clerk-react"], // Ensure Vite pre-bundles Clerk
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fix mixed module issues
    },
  },
});
