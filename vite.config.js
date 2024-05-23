import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target: env.VITE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/users':"https://jsonplaceholder.typicode.com"
      }
    },
    plugins: [react()]
  })
};
