import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        featuredArticle: resolve(__dirname, 'featured-article.html'),
		aboutMe: resolve(__dirname, 'about-me.html'),
      },
    },
  },
})


