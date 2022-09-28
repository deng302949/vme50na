import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import usePluginImport from "vite-plugin-importer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    usePluginImport({
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true,
    })
  ],
  transpileDependencies: true,
  css: {
    requireModuleExtension: false, 
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          globalVars: {
            primary: '#333'
          },
          javascriptEnabled: true
        }
      }
    }
  }
})

