import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Carpeta de salida principal
    assetsDir: 'static', // Subcarpeta para archivos estáticos
  },
  plugins: [react()],
})
