import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@context': '/src/context',
    },
  },
  plugins: [react()],
  base: '/fidar-app/',
})
