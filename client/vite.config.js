// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // You might need to adjust base path or other settings depending on your project
  base: '/',
});
