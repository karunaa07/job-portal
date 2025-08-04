import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    base: '/job-portal/', 
  },
});


export default defineConfig({
  plugins: [react()],
  base: '/job-portal/', // 👈 this must match your repo name
})
