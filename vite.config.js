import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@clerk/clerk-react"],  // Ensure it's included in Vite's dependency scan
  },
  build: {
    rollupOptions: {
      external: ["@clerk/clerk-react"],  // Prevents bundling issues
    }
  }
});
