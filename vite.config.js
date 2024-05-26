import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/users': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins:[react()]
  // some other configuration
})

