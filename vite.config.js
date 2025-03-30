import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/videoediting/",
  plugins: [react()], // Remove this if not using React
});
