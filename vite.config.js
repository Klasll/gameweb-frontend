import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Root bleibt Projekt-Root
  publicDir: 'public', // Hier liegt index.html
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
