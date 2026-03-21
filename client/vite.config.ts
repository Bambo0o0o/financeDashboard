import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // replacement current route directory by @
  resolve: {
    alias:[{find:"@",replacement:path.resolve(__dirname,"src")}]
  }
})
