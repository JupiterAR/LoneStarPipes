// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for project sites on GitHub Pages:
  base: '/LoneStarPipes/', // <- must match your repo name
})
