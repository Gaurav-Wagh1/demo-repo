import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    server: {
        proxy: {
            '/users': {
                target: process.env.VITE_URL,
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/users/, '')
            }
        }
    },
    plugins:[react()]
});