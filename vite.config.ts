import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Adicionar essa linha


// https://vite.dev/config/
export default defineConfig({
 
  plugins: [
    tailwindcss(), // Adicionar essa linha
    react()
  ],
})