import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '~/modules/interpolation.ts'
  ],
  vue: {
    compilerOptions: {
      directiveTransforms: {
        interpolation: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  }
})