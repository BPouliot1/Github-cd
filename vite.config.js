import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

test: {
  globals: true,
  environment: 'happy-dom',
  setupFiles: './src/tests/setup.js',
},

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
