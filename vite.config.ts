import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   proxy: {
//     '/api': {
//       target: 'https://cloud.appwrite.io',
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, '')

//     }
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
