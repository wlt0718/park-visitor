import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
/* 按需引入 vant */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  build: {
    outDir: 'docs'
  }
})
