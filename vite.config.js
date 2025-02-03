import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@clerk/clerk-react"],  // Ensures Vite processes Clerk correctly
  },
  resolve: {
    alias: {
      "@clerk/clerk-react": "/node_modules/@clerk/clerk-react/dist/index.mjs",
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Ensures Clerk’s ES modules work properly
    },
  },
});
