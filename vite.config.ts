import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    legacy({
      // for ie11
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),],
  base: "/vite-test/"
})
