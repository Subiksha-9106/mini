import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        planner: path.resolve(__dirname, 'planner.html'),
        progress: path.resolve(__dirname, 'progress.html'),
        focus: path.resolve(__dirname, 'focus.html'),
        timer: path.resolve(__dirname, 'timer.html'),
        profile: path.resolve(__dirname, 'profile.html'),
      }
    }
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    host: '0.0.0.0',
    port: 3000
  }
});
