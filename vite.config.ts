import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
  plugins: [
    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    })
  ]
})