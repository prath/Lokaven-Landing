import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { getAliases } from 'vite-aliases'

// const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
		alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
	}
})