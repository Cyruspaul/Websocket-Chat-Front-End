import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    // origin:"http:/localhost:8080",
    proxy:{
      '/stomp': {
        target: 'http:/localhost:8081/stomp',
        changeOrigin: false,
        ws:true,
        autoRewrite:false
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
