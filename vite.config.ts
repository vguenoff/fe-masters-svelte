import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import pages from 'vite-plugin-pages-svelte'
// @ts-ignore
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), pages()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },
})
