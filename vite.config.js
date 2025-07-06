/* eslint-disable no-undef */
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // ✅ Hapus tailwindcss() di sini
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
