import { copyFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-styles',
      writeBundle() {
        copyFileSync('src/styles.css', 'dist/styles.css')
      },
    },
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    minify: false,
    rolldownOptions: {
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
      ],
    },
  },
})
