import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@clerk/clerk-react"], // Ensures Clerk is included in dependency scanning
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fixes issues with mixed module imports
    },
  },
});
