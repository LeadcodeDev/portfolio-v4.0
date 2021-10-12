import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  plugins: [
    '~/plugins/Windicss.client.ts',
  ],
})
