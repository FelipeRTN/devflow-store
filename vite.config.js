// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',     // Simula o DOM
    setupFiles: './tests/setup.js',  // (opcional)
    include: ['tests/**/*.{test,spec}.js'],
    reporters: 'verbose',
  },
});