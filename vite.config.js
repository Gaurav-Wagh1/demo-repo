import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      proxy: {
        // Proxy for '/api' requests to the target URL defined by VITE_URL env var
        '/api': {
          target: process.env.VITE_URL,
          changeOrigin: true, // Change origin to match the target server
          rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path to remove '/api' prefix
        },
        // Additional proxy for '/users' endpoint (optional)
        '/users': "https://jsonplaceholder.typicode.com/users"
      }
    },
    plugins: [react()],
    base: "/demo-repo/", // Add base path if needed for deployment

    // Production build configuration (for access to VITE_URL in production)
    build: {
      env: {
        VITE_URL: process.env.VITE_URL, // Include VITE_URL in production build
      },
    },
  });
}
