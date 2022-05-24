import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const viteConfig = {
  clearScreen: false,
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`,
        charset: false,
      },
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}


export default viteConfig;