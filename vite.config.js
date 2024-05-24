import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

// export default ({ mode }) => {
//   // Load environment variables based on the mode
//   const env = loadEnv(mode, process.cwd(), '');

//   return defineConfig({
//     server: {
//       proxy: {
//         '/api': {
//           target: env.VITE_URL,
//           changeOrigin: true,
//           rewrite: (path) => path.replace(/^\/api/, '')
//         },
//         '/users':"https://jsonplaceholder.typicode.com/users"
//       }
//     },
//     plugins: [react()]
//   })
// };

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     // define: {
//     //   __VITE_URL__: env.VITE_URL,
//     // },
//     server:{
//       proxy:{
//         '/users':{
//           target:env.VITE_URL,
//           changeOrigin:true
//         },
//         '/api':{
//           target:env.VITE_URL,
//           changeOrigin:true,
//           rewrite:  (path) => path.replace(/^\/api/, ''),
//         }
//       }
//     },
//         plugins: [react()]
//   }
// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/users': "https://jsonplaceholder.typicode.com/users"
      }
    },
    plugins: [react()],
    base: '/'
  });
}
