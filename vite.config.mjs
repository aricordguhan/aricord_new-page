import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // The contact form API runs in server.js (npm run server) during development
    proxy: { '/api': 'http://localhost:3000' },
  },
});
