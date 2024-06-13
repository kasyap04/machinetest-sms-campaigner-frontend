import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      view: "/src/view",
      service: "/src/service",
      components: "/src/components"
    }
  }
})
