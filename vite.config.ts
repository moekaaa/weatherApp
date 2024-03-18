import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
//importする時「"../module"」「'@~/~'」両方で書ける
//alias: { ... }: パスのエイリアスを指定します。@ エイリアスを、現在の
//ファイルからの相対パス ./src にマッピングする